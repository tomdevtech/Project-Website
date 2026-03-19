import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const loc = useLocation();
  const isHome = loc.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { id: "about", de: "Über mich", en: "About" },
    { id: "projects", de: "Projekte", en: "Projects" },
    { id: "contact", de: "Kontakt", en: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-5 sm:px-8 md:px-14 transition-all duration-300 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline group">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot shadow-[0_0_10px_#2fb5e8]" />
          <span className="font-display font-bold text-[1rem] tracking-tight text-white">
            Tom<span className="text-accent"> DevTech</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {isHome &&
            navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-white/45 hover:text-white text-[0.83rem] font-medium px-3 py-1.5 rounded-md hover:bg-white/[0.04] transition-all duration-150 no-underline"
              >
                {language === "de" ? l.de : l.en}
              </a>
            ))}
          <div className="w-px h-4 bg-white/10 mx-2" />
          <Link
            to="/imprint"
            className="text-white/30 hover:text-white/60 text-[0.78rem] px-2 py-1 transition-colors no-underline"
          >
            {t.navigation.imprint}
          </Link>
          <Link
            to="/dataSec"
            className="text-white/30 hover:text-white/60 text-[0.78rem] px-2 py-1 transition-colors no-underline"
          >
            {t.navigation.privacy}
          </Link>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLanguage(language === "de" ? "en" : "de")}
            className="flex items-center gap-1 text-[0.72rem] font-semibold tracking-widest px-2.5 py-1.5 rounded-md border transition-all duration-200 hover:border-accent/40"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "var(--border2)",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            <span className={language === "de" ? "text-white" : ""}>DE</span>
            <span className="text-white/15 mx-0.5">|</span>
            <span className={language === "en" ? "text-white" : ""}>EN</span>
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/tomdevtech"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-white text-[0.8rem] font-medium px-3.5 py-1.5 rounded-md transition-all duration-200 no-underline"
            style={{
              background: "rgba(47,181,232,0.12)",
              border: "1px solid rgba(47,181,232,0.25)",
            }}
          >
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md transition-colors hover:bg-white/[0.05]"
          >
            <span
              className={`block w-5 h-px bg-white/60 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white/60 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white/60 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-bg/95 backdrop-blur-2xl"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 p-5 transition-all duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-4"}`}
        >
          <div className="card p-2 space-y-1">
            {isHome &&
              navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center px-4 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] text-sm font-medium transition-all no-underline"
                >
                  {language === "de" ? l.de : l.en}
                </a>
              ))}
            <div className="border-t border-white/[0.06] my-1" />
            <Link
              to="/imprint"
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-lg text-white/40 hover:text-white/70 text-sm transition-all no-underline"
            >
              {t.navigation.imprint}
            </Link>
            <Link
              to="/dataSec"
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-lg text-white/40 hover:text-white/70 text-sm transition-all no-underline"
            >
              {t.navigation.privacy}
            </Link>
            <a
              href="https://github.com/tomdevtech"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-white/40 hover:text-white/70 text-sm transition-all no-underline"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
