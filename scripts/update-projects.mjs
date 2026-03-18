/**
 * update-projects.mjs
 *
 * Läuft in GitHub Actions und:
 * 1. Liest bestehende Keys aus translations.ts
 * 2. Holt alle öffentlichen Repos via GitHub API
 * 3. Vergleicht → nur NEUE Repos (noch kein Key) bekommen KI-Beschreibungen
 * 4. Schreibt translations.ts + ContentFrameBox.tsx neu
 *    (bestehende Einträge + Reihenfolge bleiben erhalten)
 *
 * Wenn keine neuen Repos existieren → exit(0) ohne Commit.
 */

import fs from "fs/promises";
import path from "path";

const GITHUB_TOKEN    = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = "tomdevtech";

const IGNORE_REPOS = new Set([
  "Project-Website",
  ".github",
  "tomdevtech",
  "IllusiveCoder",
]);

const TRANSLATIONS_FILE = path.resolve("src/translations/translations.ts");
const CONTENTFRAME_FILE = path.resolve("src/components/ContentFrameBox.tsx");

// ── Bestehende Daten aus den Quelldateien lesen ───────────────────────────────

async function readExistingData() {
  const src = await fs.readFile(TRANSLATIONS_FILE, "utf-8");

  // Deutschen Projekt-Block extrahieren
  const deSection = src.match(/de:[\s\S]*?projects:\s*\{([\s\S]*?)\n\s*\},\s*\n\s*navigation/)?.[1] ?? "";
  const enSection = src.match(/en:[\s\S]*?projects:\s*\{([\s\S]*?)\n\s*\},\s*\n\s*navigation/)?.[1] ?? "";

  const parseBlock = (block) => {
    const map = new Map();
    const re = /(\w+):\s*\{\s*title:\s*"((?:[^"\\]|\\.)*)"\s*,\s*description:\s*"((?:[^"\\]|\\.)*)"\s*\}/g;
    let m;
    while ((m = re.exec(block)) !== null) {
      map.set(m[1], { title: m[2], description: m[3] });
    }
    return map;
  };

  const deMap = parseBlock(deSection);
  const enMap = parseBlock(enSection);

  // Reihenfolge + Links aus ContentFrameBox.tsx lesen
  const cfSrc = await fs.readFile(CONTENTFRAME_FILE, "utf-8").catch(() => "");
  const order = [];
  const links = new Map();
  const frameRe = /projectKey="(\w+)"[\s\S]*?link=\{"([^"]+)"\}/g;
  let m;
  while ((m = frameRe.exec(cfSrc)) !== null) {
    order.push(m[1]);
    links.set(m[1], m[2]);
  }

  // Zusammenführen
  const existing = new Map();
  for (const [key, de] of deMap) {
    existing.set(key, {
      title_de: de.title,
      desc_de:  de.description,
      title_en: enMap.get(key)?.title       ?? de.title,
      desc_en:  enMap.get(key)?.description ?? de.description,
      repoUrl:  links.get(key) ?? `https://github.com/${GITHUB_USERNAME}`,
    });
  }

  return { existing, order, links };
}

// ── GitHub API ────────────────────────────────────────────────────────────────

async function githubFetch(url) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${url}`);
  return res.json();
}

async function getAllRepos() {
  const repos = [];
  let page = 1;
  while (true) {
    const batch = await githubFetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}&sort=pushed`
    );
    if (batch.length === 0) break;
    repos.push(...batch);
    if (batch.length < 100) break;
    page++;
  }
  return repos.filter((r) => !r.private && !r.fork && !IGNORE_REPOS.has(r.name));
}

async function getReadme(repoName) {
  try {
    const data = await githubFetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`
    );
    return Buffer.from(data.content, "base64").toString("utf-8").slice(0, 1500);
  } catch {
    return null;
  }
}

// ── GitHub Models ─────────────────────────────────────────────────────────────

async function generateDescriptions(repo, readme) {
  const context = [
    `Repo: ${repo.name}`,
    `Sprache: ${repo.language ?? "unbekannt"}`,
    `Topics: ${repo.topics?.join(", ") || "keine"}`,
    `Beschreibung: ${repo.description ?? "keine"}`,
    readme ? `\nREADME:\n${readme}` : "",
  ].join("\n");

  const prompt = `Du schreibst Projektkarten-Texte für die Portfolio-Website eines Softwareentwicklers.

${context}

Erstelle:
- title_de: Projektname auf Deutsch (meist englischer Name genügt)
- desc_de: 1–2 prägnante Sätze auf Deutsch
- title_en: project name in English
- desc_en: 1–2 concise sentences in English

Antworte NUR mit gültigem JSON ohne Markdown-Backticks:
{"title_de":"...","desc_de":"...","title_en":"...","desc_en":"..."}`;

  const res = await fetch("https://models.inference.ai.azure.com/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      max_tokens: 200,
    }),
  });

  if (!res.ok) {
    console.warn(`⚠️  GitHub Models ${res.status} → Fallback für ${repo.name}`);
    return fallback(repo);
  }

  try {
    const data = await res.json();
    const raw  = data.choices[0].message.content.replace(/```json|```/g, "").trim();
    return JSON.parse(raw);
  } catch {
    return fallback(repo);
  }
}

function fallback(repo) {
  return {
    title_de: repo.name,
    desc_de:  repo.description ?? `${repo.name} – Ein GitHub-Projekt.`,
    title_en: repo.name,
    desc_en:  repo.description ?? `${repo.name} – A GitHub project.`,
  };
}

function toKey(name) {
  return name
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (c) => c.toLowerCase());
}

// ── Datei-Generatoren ─────────────────────────────────────────────────────────

function buildTranslations(projects) {
  const block = (lang) =>
    projects
      .map(
        (p) =>
          `      ${p.key}: {\n        title: "${p[`title_${lang}`]}",\n        description: "${p[`desc_${lang}`]}"\n      }`
      )
      .join(",\n");

  return `export const translations = {
  de: {
    welcomebox: {
      welcome: {
        headline: "Willkommen auf meiner Portfolio-Website",
        text: "Als leidenschaftlicher Softwareentwickler und Technologie-Enthusiast widme ich mich der Entwicklung innovativer Lösungen und der Schaffung digitaler Erlebnisse. Mit einem Fokus auf moderne Technologien und best practices, entwickle ich Anwendungen, die nicht nur funktional, sondern auch benutzerfreundlich sind. Hier finden Sie eine Auswahl meiner Projekte, die meine Expertise in verschiedenen Bereichen der Softwareentwicklung demonstrieren.",
        quote: "Die einzige Grenze ist die, die du dir selbst setzt."
      }
    },
    projects: {
${block("de")}
    },
    navigation: {
      privacy: "Datenschutz",
      imprint: "Impressum"
    },
    common: {
      toProject: "Zum Projekt"
    }
  },
  en: {
    welcomebox: {
      welcome: {
        headline: "Welcome to My Portfolio Website",
        text: "As a passionate software developer and technology enthusiast, I dedicate myself to creating innovative solutions and crafting digital experiences. With a focus on modern technologies and best practices, I develop applications that are not only functional but also user-friendly. Here you'll find a selection of my projects that demonstrate my expertise in various areas of software development.",
        quote: "The only limit is the one you set yourself."
      }
    },
    projects: {
${block("en")}
    },
    navigation: {
      privacy: "Privacy",
      imprint: "Imprint"
    },
    common: {
      toProject: "To Project"
    }
  }
};
`;
}

function buildContentFrameBox(projects) {
  const frames = projects
    .map(
      (p) =>
        `          <ContentFrame\n            projectKey="${p.key}"\n            link={"${p.repoUrl}"}\n          />`
    )
    .join("\n");

  return `import { NavLink } from "react-router-dom";
import ContentFrame from "./ContentFrame";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import WelcomeComponent from "./WelcomeComponent";

export function ContentFrameBox() {
  const { language } = useLanguage();
  const { privacy, imprint } = translations[language].navigation;

  return (
    <div className="background">
      <div className="ContentFrameBox">
        <header className="relative px-4 pt-4 pb-2 sm:px-6 sm:py-4 lg:px-8 lg:py-8">
          <div className="headline">Tom DevTech</div>
          <div className="mt-8 mb-4 sm:mt-0 sm:mb-0 flex justify-center sm:block sm:absolute sm:right-6 sm:top-1/2 sm:-translate-y-1/2 lg:right-8 xl:right-8 z-50">
            <LanguageSelector />
          </div>
        </header>
        <WelcomeComponent
          areaid="welcome"
        />
        <div className="body">
${frames}
        </div>
        <footer className="footer">
          <NavLink className="footerElement" to={"/dataSec"}>
            {privacy}
          </NavLink>
          <NavLink className="footerElement" to={"/imprint"}>
            {imprint}
          </NavLink>
          <br/><br/>
        </footer>
      </div>
    </div>
  );
}
`;
}

// ── Hauptlogik ────────────────────────────────────────────────────────────────

async function main() {
  console.log("📖 Lese bestehende translations.ts...");
  const { existing, order, links } = await readExistingData();
  console.log(`   → ${existing.size} bestehende Projekte`);

  console.log("🌐 Lade Repos von GitHub...");
  const repos = await getAllRepos();
  console.log(`   → ${repos.length} öffentliche Repos`);

  // Nur Repos die noch keinen Key in translations.ts haben
  // UND bereits eine README besitzen (leere Repos werden übersprungen)
  const newRepos = [];
  for (const repo of repos) {
    if (existing.has(toKey(repo.name))) continue;
    const readme = await getReadme(repo.name);
    if (!readme) {
      console.log(`⏭️  ${repo.name} übersprungen – noch keine README`);
      continue;
    }
    newRepos.push({ repo, readme });
  }

  if (newRepos.length === 0) {
    console.log("✅ Keine neuen Repos mit README – Dateien bleiben unverändert, kein Commit.");
    process.exit(0);
  }

  console.log(`✨ ${newRepos.length} neue Repo(s): ${newRepos.map(({ repo: r }) => r.name).join(", ")}`);

  // KI-Beschreibungen nur für neue Repos
  const generated = new Map();
  for (const { repo, readme } of newRepos) {
    const key = toKey(repo.name);
    console.log(`   🤖 ${repo.name}...`);
    const desc = await generateDescriptions(repo, readme);
    generated.set(key, { ...desc, repoUrl: repo.html_url });
    await new Promise((r) => setTimeout(r, 400));
  }

  // Alle Projekte zusammenführen:
  // Bestehende in alter Reihenfolge → neue am Ende
  const allProjects = [];

  for (const key of order) {
    const e = existing.get(key);
    if (!e) continue;
    allProjects.push({ key, ...e });
  }

  for (const [key, data] of generated) {
    allProjects.push({ key, ...data });
  }

  // Schreiben
  await fs.writeFile(TRANSLATIONS_FILE, buildTranslations(allProjects), "utf-8");
  console.log("✅ translations.ts aktualisiert");

  await fs.writeFile(CONTENTFRAME_FILE, buildContentFrameBox(allProjects), "utf-8");
  console.log("✅ ContentFrameBox.tsx aktualisiert");

  console.log(`🎉 ${generated.size} neues Projekt(e) hinzugefügt.`);
}

main().catch((err) => {
  console.error("❌ Fehler:", err.message);
  process.exit(1);
});
