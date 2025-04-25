import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

interface Props {
  areaid: string;
}

export default function WelcomeComponent({areaid: areaid}: Props) {
  const { language } = useLanguage();
  const welcomebox = translations[language].welcomebox[areaid as keyof typeof translations[typeof language]["welcomebox"]];

  return (
    <div className="ContentFrameWithoutHover">
      <div className="contentHeadline">
        {welcomebox.headline}
      </div>
      <div className="contentContentCentered">
        {welcomebox.text}
      </div>
      <br/>
      <div className="contentContentCentered">
        "{welcomebox.quote}"
      </div>
    </div>
  );
}
