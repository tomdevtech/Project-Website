import React from "react";

export function ImPrint() {
  return (
    <div className="backgroundSubPage">
      <div className="ContentSubPage">
        <div className="subPageHeadline">Impressum</div>
        <span className="contentHeadline">
          Angaben gem&auml;&szlig; &sect; 5 TMG
        </span>
        <br />
        <br />
        <p className="contentContent">
          Tom Helling
          <br />
          Queiser Stra&szlig;e 11
          <br />
          06188 Landsberg
        </p>
        <br />

        <span className="contentHeadline">Kontakt</span>
        <br />
        <br />
        <span className="contentContent">
          E-Mail: TomHelling.DevTech@gmail.com
        </span>
        <br />
        <br />
        <span className="contentContent">
          Hinweis: Dies ist eine rein private Website ohne kommerziellen Zweck.
        </span>
      </div>
    </div>
  );
}
