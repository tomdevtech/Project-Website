import React from "react";
import { NavLink } from "react-router-dom";
import ContentFrame from "./ContentFrame";

export function ContentFrameBox() {
  return (
    <div className="background">
        <div className="ContentFrameBox">
          <header>
            <div className="headline">Illusive Coder</div>
          </header>
          <div className="body">
            <ContentFrame
              title={"Robert Assistent"}
              descriptive_text={
                "Robert ist ein kleiner Assistent, welcher einige Tools wie eine Galerie, einen Musikplayer und noch vieles mehr besitzt. Außerdem beherrscht er einige Witze und verfügt über ein Hilfemenü."
              }
              link={"https://github.com/IllusiveCoder/Robert-Assistent"}
            ></ContentFrame>
            <ContentFrame
              title={"Colour Changer"}
              descriptive_text={
                "Dieses Programm dient zum Ausprobieren unterschiedlicher Farben für GUIs. Man kann Hexadezimalwerte oder auch die Namen verschiedener Farben angeben."
              }
              link={"https://github.com/IllusiveCoder/Colourchanger"}
            ></ContentFrame>
            <ContentFrame
              title={"Unilexika"}
              descriptive_text={
                "Dient als kleines Notizbuch, indem man Text-Dateien speichern und auslesen kann."
              }
              link={"https://github.com/IllusiveCoder/Unilexika"}
            ></ContentFrame>
            <ContentFrame
              title={"Updated Unilexika"}
              descriptive_text={
                "Die geupdatete Version erlaubt nun, vorhandene Einträge zu überarbeiten und nicht nur auszulesen."
              }
              link={"https://github.com/IllusiveCoder/Updated-Unilexika"}
            ></ContentFrame>
            <ContentFrame
              title={"Listen-App"}
              descriptive_text={
                "Diese App ist für Leute, welche schnellen und kostenlosen Zugriff auf Internetseiten haben möchten, wo man kostenlos Bücher herunterladen kann, jedoch müssen für die Installation die 'Entwickler Optionen' aktiviert sein."
              }
              link={"https://github.com/IllusiveCoder/Listenapp"}
            ></ContentFrame>
            <ContentFrame
              title={"Link-App"}
              descriptive_text={
                "Mithilfe dieser App, lassen sich Links speichern, löschen und gegebenfalls überarbeiten. Letztendlich erfüllt die App den Zweck, sich Internetseiten leichter merken und erreichen zu können."
              }
              link={"https://github.com/IllusiveCoder/Link-App"}
            ></ContentFrame>
            <ContentFrame
              title={"Pen and Paper Storage System"}
              descriptive_text={
                "Diese Anwendung ist für Windows vorbehalten und erlaubt es mittels des JSON-Storage Systems, Daten über Charaktere und Story anzulegen, zu bearbeiten und zu löschen."
              }
              link={"https://github.com/IllusiveCoder/Pen-and-Paper"}
            ></ContentFrame>
            <ContentFrame
              title={"Portfolio Website"}
              descriptive_text={
                "Meine alte (und erste) Internetseite als Prototyp. Zur besseren Darstellung aller Projekte als Übersicht."
              }
              link={"https://github.com/IllusiveCoder/Portfolio"}
            ></ContentFrame>
            <ContentFrame
              title={"Array Projekt"}
              descriptive_text={
                "Dieses Projekt ist ein Beispielprogramm, welches verdeutlichen soll, wie Elemente in Arrays, mit den Dimensionen 1 bis 3, eingelesen, gelöscht und allgemein verändert werden."
              }
              link={"https://github.com/IllusiveCoder/Arrays"}
            ></ContentFrame>
            <ContentFrame
              title={"IC-Autodocker"}
              descriptive_text={
                "Programm zum spielerischen Herantreten an Docker und zum Ausprobieren jeglicher Funktionalität."
              }
              link={"https://github.com/IllusiveCoder/IC-Autodocker"}
            ></ContentFrame>
            <ContentFrame
              title={"IC-Autodocker Python Package"}
              descriptive_text={
                "Python Package mit voller Funktionalität von IC-Autodocker, jedoch ohne GUI."
              }
              link={
                "https://github.com/IllusiveCoder/IC-Autodocker-Python-Package"
              }
            ></ContentFrame>
            <ContentFrame
              title={"Webseite"}
              descriptive_text={
                "Neue Projektseite für mich als Software Entwickler und meine Projekte. Erstellt mit React und TailwindCSS."
              }
              link={"https://github.com/IllusiveCoder/Project-Website"}
            ></ContentFrame>
            <ContentFrame
              title={"Uni Notenrechner"}
              descriptive_text={
                "Kleines Programm mit grafischer Oberfläche, um seinen Notendurchschnitt in der Uni zu berechnen."
              }
              link={"https://github.com/IllusiveCoder/gradecalculator"}
            ></ContentFrame>
            <ContentFrame
              title={"Python 3 Kurs"}
              descriptive_text={
                "Ein selbsterstellter Kurs in Python 3, um die Grundlagen der Programmiersprache und den Umgang mit entsprechenden Konzepten zu erlernen."
              }
              link={"https://github.com/IllusiveCoder/Python-Course"}
            ></ContentFrame>
          </div>
          <footer className="footer">
            <NavLink className="footerElement" to={"/dataSec"}>
              Datenschutz
            </NavLink>
            <NavLink className="footerElement" to={"/imprint"}>
              Impressum
            </NavLink>
            <br/><br/>
          </footer>
        </div>
    </div>
  );
}
