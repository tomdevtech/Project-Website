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
        <div className="contentContent"><p>{descriptive_text}</p></div><br/><br/>
        <div className="contentLink"><span><a href={link}>Zu {title}</a></span></div>
    </div>
  );
}