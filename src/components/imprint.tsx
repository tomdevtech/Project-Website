import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export function ImPrint() {
  const { language } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="backgroundSubPage">
      <div className="ContentSubPage">
        <div className="subPageHeadline">
          {language === "de" ? "Impressum" : "Legal Notice"}
        </div>
        <span className="contentHeadline">
          {language === "de" 
            ? "Angaben gemäß § 5 TMG" 
            : "Information according to § 5 TMG"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          Tom Helling
          <br />
          {language === "de" ? "Queiser Straße 11" : "Queiser Street 11"}
          <br />
          06188 Landsberg
        </p>
        <br />

        <span className="contentHeadline">
          {language === "de" ? "Kontakt" : "Contact"}
        </span>
        <br />
        <br />
        <span className="contentContent">
          E-Mail: TomHelling.DevTech@gmail.com
        </span>
        <br />
        <br />
        <span className="contentContent">
          {language === "de" 
            ? "Hinweis: Dies ist eine rein private Website ohne kommerziellen Zweck."
            : "Note: This is a purely private website without commercial purpose."}
        </span>
      </div>
    </div>
  );
}
