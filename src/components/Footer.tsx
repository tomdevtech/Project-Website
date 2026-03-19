import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer
      className="px-5 sm:px-8 md:px-14 lg:px-24 py-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
        <span
          className="font-display font-bold text-[0.85rem] tracking-tight"
          style={{ color: "rgba(255,255,255,0.18)" }}
        >
          Tom<span style={{ color: "rgba(47,181,232,0.65)" }}> DevTech</span>
        </span>

        <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-1">
          <Link
            to="/imprint"
            className="text-white/20 hover:text-white/50 text-[0.75rem] transition-colors no-underline"
          >
            {t.navigation.imprint}
          </Link>
          <Link
            to="/dataSec"
            className="text-white/20 hover:text-white/50 text-[0.75rem] transition-colors no-underline"
          >
            {t.navigation.privacy}
          </Link>
          <a
            href="https://github.com/tomdevtech"
            target="_blank"
            rel="noreferrer"
            className="text-white/20 hover:text-white/50 text-[0.75rem] transition-colors no-underline"
          >
            GitHub ↗
          </a>
        </div>

        <span
          className="text-[0.72rem]"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          © {new Date().getFullYear()} Tom DevTech
        </span>
      </div>
    </footer>
  );
}
