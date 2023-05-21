import React from "react";

export function ImPrint() {
  return (
    <div className="backgroundSubPage">
      <div className="ContentSubPage">
        <div className="headline">Impressum</div>
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
          E-Mail: IllusivecoderDev@gmail.com
        </span>
        <br />
        <span className="contentContent">
          Quelle:{" "}
          <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
        </span>
        <br />
      </div>
    </div>
  );
}
