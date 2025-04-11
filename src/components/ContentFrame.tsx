import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

interface Props {
  projectKey: string;
  link: string;
}

export default function ContentFrame({ projectKey, link }: Props) {
  const { language } = useLanguage();
  const project = translations[language].projects[projectKey as keyof typeof translations[typeof language]["projects"]];
  const { toProject } = translations[language].common;

  return (
    <div className="ContentFrame">
      <div className="contentHeadline">{project.title}</div>
      <div className="contentContent">
        <p>{project.description}</p>
      </div>
      <br />
      <br />
      <div className="contentLink">
        <span>
          <a href={link}>{toProject} {project.title}</a>
        </span>
      </div>
    </div>
  );
}
