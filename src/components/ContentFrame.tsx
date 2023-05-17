import React, { ReactNode } from "react";

interface Props {
  title: ReactNode;
  descriptive_text: ReactNode;
  link: string;
}

export default function ContentFrame({ title, descriptive_text, link }: Props) {
  return (
    <div className="ContentFrame">
        <div className="contentHeadline">{title}</div>
        <div className="contentContent"><p><span>{descriptive_text}</span></p></div>
        <div className="contentLink"><a href={link}>Gehe zu Projekt {title}</a></div>
    </div>
  );
}