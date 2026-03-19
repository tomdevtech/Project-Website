import React from "react";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { language } = useLanguage();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-5 sm:px-8 md:px-14 lg:px-24"
    >
      <div ref={ref} className="reveal max-w-2xl mx-auto text-center">
        <p
          className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold mb-5"
          style={{ color: "var(--accent)" }}
        >
          {language === "de" ? "Kontakt" : "Get in touch"}
        </p>

        <h2
          className="font-display font-bold tracking-[-0.03em] leading-[1.08] text-white mb-5"
          style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
        >
          {language === "de" ? (
            <>
              {`Let's etwas`}
              <br />
              <span className="gradient-text-teal">Großartiges bauen.</span>
            </>
          ) : (
            <>
              {`Let's build`}
              <br />
              <span className="gradient-text-teal">something great.</span>
            </>
          )}
        </h2>

        <p
          className="text-white/40 leading-[1.8] mb-10 text-[0.92rem]"
          style={{ fontWeight: 300 }}
        >
          {language === "de"
            ? "Ob Projektidee, Kollaboration oder einfach Hallo sagen, mein Posteingang ist offen."
            : "Whether you have a project idea, want to collaborate, or just want to say hi, my inbox is open."}
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            {
              label: "GitHub",
              href: "https://github.com/tomdevtech",
              icon: (
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              ),
            },
            {
              label: "Linktree",
              href: "https://linktr.ee/tom.devtech",
              icon: (
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="7" />
                  <path d="M8 1c-2 2-3 4-3 7s1 5 3 7M8 1c2 2 3 4 3 7s-1 5-3 7M1 8h14" />
                </svg>
              ),
            },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white text-[0.85rem] font-medium px-5 py-2.5 rounded-xl border transition-all duration-200 hover:border-white/20 hover:-translate-y-0.5 no-underline"
              style={{ background: "#002540", borderColor: "var(--border)" }}
            >
              {l.icon}
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:TomHelling.DevTech@gmail.com"
          className="btn-primary"
          style={{ fontSize: "0.92rem", padding: "0.8rem 2rem" }}
        >
          {language === "de" ? "Nachricht senden" : "Send a message"}
          <svg width="14" height="14" fill="none">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
