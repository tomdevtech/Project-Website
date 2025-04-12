import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export function DataSec() {
  const { language } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="background">
      <div className="ContentSubPage">
        <div className="subPageHeadline">
          {language === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
        </div>
        <span className="contentHeadline">
          {language === "de" ? "Einleitung und Überblick" : "Introduction and Overview"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de" 
            ? "Wir haben diese Datenschutzerklärung (Fassung 11.04.2024-312507168) verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen."
            : "We have written this privacy policy (version 11.04.2024-312507168) to explain to you, in accordance with the requirements of the General Data Protection Regulation (EU) 2016/679 and applicable national laws, what personal data (short data) we as the controller - and the processors commissioned by us (e.g. providers) - process, will process in the future and what lawful options you have. The terms used are to be understood as gender-neutral."}
          <br />
          <strong>{language === "de" ? "Kurz gesagt:" : "In short:"}</strong>{" "}
          {language === "de" 
            ? "Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten."
            : "We inform you comprehensively about data that we process about you."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de" 
            ? "Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich beschreiben. Soweit es der Transparenz förderlich ist, werden technische Begriffe leserfreundlich erklärt, Links zu weiterführenden Informationen geboten und Grafiken zum Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man möglichst knappe, unklare und juristisch-technische Erklärungen abgibt, so wie sie im Internet oft Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die folgenden Erläuterungen interessant und informativ und vielleicht ist die eine oder andere Information dabei, die Sie noch kannten."
            : "This privacy policy, on the other hand, is intended to describe the most important things to you as simply and transparently as possible. As far as it is conducive to transparency, technical terms are explained in a reader-friendly way, links to further information are provided and graphics are used. We inform you in clear and simple language that we only process personal data in the course of our business activities if there is a corresponding legal basis. This is certainly not possible if you give as brief, unclear and legal-technical explanations as are often standard on the Internet when it comes to data protection. I hope you find the following explanations interesting and informative and perhaps there is one or two pieces of information that you did not know yet."}
          <br />
          {language === "de" 
            ? "Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum genannte verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch im Impressum."
            : "If you still have questions, we would like to ask you to contact the responsible office listed below or in the imprint, follow the existing links and look at further information on third-party sites. You can of course also find our contact details in the imprint."}
        </p>
        <br />
        <span className="contentHeadline">
          {language === "de" ? "Verantwortlicher" : "Controller"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de" 
            ? "Verantwortlich für die Datenverarbeitung ist:"
            : "The controller for data processing is:"}
          <br />
          Tom Helling
          <br />
          E-Mail: TomHelling.DevTech@gmail.com
        </p>
        <br />
        <span className="contentHeadline">
          {language === "de" ? "Anwendungsbereich" : "Scope"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de" 
            ? "Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt dafür, dass wir unsere Dienstleistungen und Produkte anbieten und abrechnen können, sei es online oder offline. Der Anwendungsbereich dieser Datenschutzerklärung umfasst:"
            : "This privacy policy applies to all personal data processed by us in the company and to all personal data processed by companies (processors) commissioned by us. By personal data, we mean information within the meaning of Art. 4 No. 1 GDPR such as a person's name, email address and postal address. The processing of personal data ensures that we can offer and bill our services and products, whether online or offline. The scope of this privacy policy includes:"}
        </p>
        <ul className="list-disc list-inside">
          <li>
            {language === "de"
              ? "alle Onlineauftritte (Websites, Onlineshops), die wir betreiben"
              : "all online presences (websites, online shops) that we operate"}
          </li>
          <li>
            {language === "de"
              ? "Social Media Auftritte und E-Mail-Kommunikation"
              : "Social media presences and email communication"}
          </li>
          <li>
            {language === "de"
              ? "mobile Apps für Smartphones und andere Geräte"
              : "mobile apps for smartphones and other devices"}
          </li>
        </ul>
        <br />
        <p className="contentContent">
          <strong>{language === "de" ? "Kurz gesagt:" : "In short:"}</strong>{" "}
          {language === "de"
            ? "Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten im Unternehmen über die genannten Kanäle strukturiert verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie gegebenenfalls gesondert informieren."
            : "The privacy policy applies to all areas in which personal data is processed in a structured manner within the company via the channels mentioned. Should we enter into legal relationships with you outside of these channels, we will inform you separately if necessary."}
        </p>
        <br />
        <span className="contentHeadline">
          {language === "de" ? "Rechtsgrundlagen" : "Legal Bases"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten."
            : "In the following privacy policy, we provide you with transparent information about the legal principles and regulations, i.e., the legal bases of the General Data Protection Regulation, which enable us to process personal data."}
          <br />
          {language === "de"
            ? "Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht, unter"
            : "Regarding EU law, we refer to REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 27 April 2016. You can of course access this EU General Data Protection Regulation online on EUR-Lex, the gateway to EU law, at"}{" "}
          <a href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679">
            https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679
          </a>
          {language === "de" ? " nachlesen." : "."}
        </p>
        <p className="contentContent">
          {language === "de"
            ? "Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:"
            : "We only process your data if at least one of the following conditions applies:"}
        </p>
        <ol className="list-decimal list-inside">
          <li>
            <strong>{language === "de" ? "Einwilligung" : "Consent"}</strong>{" "}
            {language === "de"
              ? "(Artikel 6 Absatz 1 lit. a DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines Kontaktformulars."
              : "(Article 6(1)(a) GDPR): You have given us your consent to process data for a specific purpose. An example would be the storage of your entered data from a contact form."}
          </li>
          <li>
            <strong>{language === "de" ? "Vertrag" : "Contract"}</strong>{" "}
            {language === "de"
              ? "(Artikel 6 Absatz 1 lit. b DSGVO): Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen abschließen, benötigen wir vorab personenbezogene Informationen."
              : "(Article 6(1)(b) GDPR): To fulfill a contract or pre-contractual obligations with you, we process your data. For example, if we conclude a purchase contract with you, we need personal information in advance."}
          </li>
          <li>
            <strong>
              {language === "de"
                ? "Rechtliche Verpflichtung"
                : "Legal Obligation"}
            </strong>{" "}
            {language === "de"
              ? "(Artikel 6 Absatz 1 lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen für die Buchhaltung aufzuheben. Diese enthalten in der Regel personenbezogene Daten."
              : "(Article 6(1)(c) GDPR): If we are subject to a legal obligation, we process your data. For example, we are legally required to keep invoices for accounting purposes. These usually contain personal data."}
          </li>
          <li>
            <strong>
              {language === "de"
                ? "Berechtigte Interessen"
                : "Legitimate Interests"}
            </strong>{" "}
            {language === "de"
              ? "(Artikel 6 Absatz 1 lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten wir uns die Verarbeitung personenbezogener Daten vor. Wir müssen zum Beispiel gewisse Daten verarbeiten, um unsere Website sicher und wirtschaftlich effizient betreiben zu können. Diese Verarbeitung ist somit ein berechtigtes Interesse."
              : "(Article 6(1)(f) GDPR): In the case of legitimate interests that do not restrict your fundamental rights, we reserve the right to process personal data. For example, we need to process certain data to operate our website securely and economically efficiently. This processing is therefore a legitimate interest."}
          </li>
        </ol>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen Interesse und Ausübung öffentlicher Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in der Regel nicht auf. Soweit eine solche Rechtsgrundlage doch einschlägig sein sollte, wird diese an der entsprechenden Stelle ausgewiesen."
            : "Other conditions such as the perception of recordings in the public interest and exercise of public authority as well as the protection of vital interests generally do not occur with us. If such a legal basis should be relevant, it will be indicated at the appropriate place."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:"
            : "In addition to the EU regulation, national laws also apply:"}
        </p>
        <ul className="list-disc list-inside">
          <li>
            {language === "de"
              ? "In Österreich ist dies das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (Datenschutzgesetz), kurz DSG."
              : "In Austria, this is the Federal Act concerning the Protection of Personal Data (Data Protection Act), or DSG for short."}
          </li>
          <li>
            {language === "de"
              ? "In Deutschland gilt das Bundesdatenschutzgesetz, kurz BDSG."
              : "In Germany, the Federal Data Protection Act (Bundesdatenschutzgesetz, BDSG) applies."}
          </li>
          <br />
        </ul>
        <p className="contentContent">
          {language === "de"
            ? "Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den folgenden Abschnitten darüber."
            : "If other regional or national laws apply, we will inform you about them in the following sections."}
        </p>
        <br />
        <span className="contentHeadline">
          {language === "de" ? "Speicherdauer" : "Storage Duration"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall des ursprüngliches Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung."
            : "That we only store personal data for as long as is absolutely necessary for the provision of our services and products is a general criterion for us. This means that we delete personal data as soon as the reason for data processing no longer exists. In some cases, we are legally obliged to store certain data even after the original purpose has ceased to exist, for example for accounting purposes."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht, gelöscht."
            : "If you request the deletion of your data or revoke consent for data processing, the data will be deleted as quickly as possible and if there is no obligation to store it."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben."
            : "We will inform you about the specific duration of the respective data processing below, if we have further information about it."}
        </p>
        <br />
        <span className="contentHeadline">
          {language === "de" 
            ? "Rechte laut Datenschutz-Grundverordnung"
            : "Rights under the General Data Protection Regulation"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen und transparenten Verarbeitung von Daten kommt:"
            : "According to Articles 13 and 14 GDPR, we inform you about the following rights you have to ensure fair and transparent processing of data:"}
        </p>
        <ul className="list-disc list-inside">
          <li>
            {language === "de"
              ? "Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen verarbeiten. Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden Informationen zu erfahren:"
              : "According to Article 15 GDPR, you have the right to information about whether we process data about you. If this is the case, you have the right to receive a copy of the data and to learn the following information:"}
            <ul className="list-disc list-inside ml-8">
              <li>
                {language === "de"
                  ? "zu welchem Zweck wir die Verarbeitung durchführen;"
                  : "for what purpose we carry out the processing;"}
              </li>
              <li>
                {language === "de"
                  ? "die Kategorien, also die Arten von Daten, die verarbeitet werden;"
                  : "the categories, i.e., the types of data that are processed;"}
              </li>
              <li>
                {language === "de"
                  ? "wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie die Sicherheit garantiert werden kann;"
                  : "who receives this data and if the data is transferred to third countries, how security can be guaranteed;"}
              </li>
              <li>
                {language === "de"
                  ? "wie lange die Daten gespeichert werden;"
                  : "how long the data will be stored;"}
              </li>
              <li>
                {language === "de"
                  ? "das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der Verarbeitung und dem Widerspruchsrecht gegen die Verarbeitung;"
                  : "the existence of the right to rectification, deletion or restriction of processing and the right to object to processing;"}
              </li>
              <li>
                {language === "de"
                  ? "dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen Behörden finden Sie weiter unten);"
                  : "that you can lodge a complaint with a supervisory authority (links to these authorities can be found below);"
                }
              </li>
              <li>
                {language === "de"
                  ? "die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;"
                  : "the origin of the data if we did not collect it from you;"}
              </li>
              <li>
                {language === "de"
                  ? "ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu einem persönlichen Profil von Ihnen zu gelangen."
                  : "whether profiling is carried out, i.e., whether data is automatically evaluated to arrive at a personal profile of you."}
              </li>
            </ul>
          </li>
          <li>
            {language === "de"
              ? "Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass wir Daten richtig stellen müssen, falls Sie Fehler finden."
              : "According to Article 16 GDPR, you have the right to rectification of data, which means that we must correct data if you find errors."}
          </li>
          <li>
            {language === "de"
              ? "Sie haben laut Artikel 17 DSGVO das Recht auf Löschung (\"Recht auf Vergessenwerden\"), was konkret bedeutet, dass Sie die Löschung Ihrer Daten verlangen dürfen."
              : "According to Article 17 GDPR, you have the right to erasure ('right to be forgotten'), which specifically means that you can request the deletion of your data."}
          </li>
          <li>
            {language === "de"
              ? "Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was bedeutet, dass wir die Daten nur mehr speichern dürfen aber nicht weiter verwenden."
              : "According to Article 18 GDPR, you have the right to restriction of processing, which means that we may only store the data but not use it further."}
          </li>
          <li>
            {language === "de"
              ? "Sie haben laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass wir Ihnen auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung stellen."
              : "According to Article 20 GDPR, you have the right to data portability, which means that we must provide you with your data in a common format upon request."}
          </li>
          <li>
            {language === "de"
              ? "Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine Änderung der Verarbeitung mit sich bringt."
              : "According to Article 21 GDPR, you have the right to object, which after enforcement brings about a change in processing."}
            <ul className="list-disc list-inside ml-8">
              <li>
                {language === "de"
                  ? "Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches Interesse, Ausübung öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, können Sie gegen die Verarbeitung Widerspruch einlegen. Wir prüfen danach so rasch wie möglich, ob wir diesem Widerspruch rechtlich nachkommen können."
                  : "If the processing of your data is based on Article 6(1)(e) (public interest, exercise of official authority) or Article 6(1)(f) (legitimate interest), you can object to the processing. We will then check as quickly as possible whether we can legally comply with this objection."}
              </li>
              <li>
                {language === "de"
                  ? "Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Direktmarketing verwenden."
                  : "If data is used to conduct direct advertising, you can object to this type of data processing at any time. We may no longer use your data for direct marketing after that."}
              </li>
              <li>
                {language === "de"
                  ? "Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Profiling verwenden."
                  : "If data is used to conduct profiling, you can object to this type of data processing at any time. We may no longer use your data for profiling after that."}
              </li>
            </ul>
          </li>
          <li>
            {language === "de"
              ? "Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu werden."
              : "According to Article 22 GDPR, you may have the right not to be subject to a decision based solely on automated processing (for example profiling)."}
          </li>
          <li>
            {language === "de"
              ? "Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können sich jederzeit bei der Datenschutzbehörde beschweren, wenn Sie der Meinung sind, dass die Datenverarbeitung von personenbezogenen Daten gegen die DSGVO verstößt."
              : "According to Article 77 GDPR, you have the right to lodge a complaint. This means that you can complain to the data protection authority at any time if you believe that the processing of personal data violates the GDPR."}
          </li>
        </ul>
        <br />
        <p className="contentContent">
          <strong>{language === "de" ? "Kurz gesagt:" : "In short:"}</strong>{" "}
          {language === "de"
            ? "Sie haben Rechte – zögern Sie nicht, die oben gelistete verantwortliche Stelle bei uns zu kontaktieren!"
            : "You have rights - don't hesitate to contact the responsible party listed above!"}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. Diese ist für Österreich die Datenschutzbehörde, deren Website Sie unter"
            : "If you believe that the processing of your data violates data protection law or your data protection rights have been violated in any other way, you can complain to the supervisory authority. For Austria, this is the Data Protection Authority, whose website you can find at"}{" "}
          <a href="https://www.dsb.gv.at/?tid=312507168">
            https://www.dsb.gv.at/
          </a>
          {language === "de"
            ? "finden. In Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für nähere Informationen können Sie sich an die"
            : "In Germany, there is a data protection officer for each federal state. For more information, you can contact the"}{" "}
          <a href="https://www.bfdi.bund.de/DE/Home/home_node.html">
            {language === "de"
              ? "Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)"
              : "Federal Commissioner for Data Protection and Freedom of Information (BfDI)"}
          </a>{" "}
          {language === "de"
            ? "wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:"
            : "For our company, the following local data protection authority is responsible:"}
        </p>
        <br />
        <span className="contentHeadline">
          {language === "de"
            ? "Sachsen-Anhalt Datenschutzbehörde"
            : "Saxony-Anhalt Data Protection Authority"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          <strong>{language === "de" ? "Landesbeauftragter für Datenschutz:" : "State Commissioner for Data Protection:"}</strong>{" "}
          Albert Cohaus (V.i.A.)
          <br />
          <strong>{language === "de" ? "Adresse:" : "Address:"}</strong> Leiterstraße 9, 39104 Magdeburg
          <br />
          <strong>{language === "de" ? "Telefonnr.:" : "Phone:"}</strong> 03 91/818 03-0
          <br />
          <strong>{language === "de" ? "E-Mail-Adresse:" : "Email:"}</strong> poststelle@lfd.sachsen-anhalt.de
          <br />
          <strong>Website: </strong>
          <a href="https://datenschutz.sachsen-anhalt.de/datenschutz-in-sachsen-anhalt/?tid=312507168">
            https://datenschutz.sachsen-anhalt.de/datenschutz-in-sachsen-anhalt/
          </a>
        </p>
        <span className="contentHeadline">
          <br />
          {language === "de" ? "Datenübertragung in Drittländer" : "Data Transfer to Third Countries"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Wir übertragen oder verarbeiten Daten nur dann in Länder außerhalb der EU (Drittländer), wenn Sie dieser Verarbeitung zustimmen, dies gesetzlich vorgeschrieben ist oder vertraglich notwendig und in jedem Fall nur soweit dies generell erlaubt ist. Ihre Zustimmung ist in den meisten Fällen der wichtigste Grund, dass wir Daten in Drittländern verarbeiten lassen. Die Verarbeitung personenbezogener Daten in Drittländern wie den USA, wo viele Softwarehersteller Dienstleistungen anbieten und Ihre Serverstandorte haben, kann bedeuten, dass personenbezogene Daten auf unerwartete Weise verarbeitet und gespeichert werden."
            : "We only transfer or process data to countries outside the EU (third countries) if you consent to this processing, it is legally required or contractually necessary, and in any case only to the extent that it is generally permitted. Your consent is in most cases the most important reason why we have data processed in third countries. The processing of personal data in third countries such as the USA, where many software manufacturers offer services and have their server locations, may mean that personal data is processed and stored in unexpected ways."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Wir weisen ausdrücklich darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Die Datenverarbeitung durch US-Dienste (wie beispielsweise Google Analytics) kann dazu führen, dass gegebenenfalls Daten nicht anonymisiert verarbeitet und gespeichert werden. Ferner können gegebenenfalls US-amerikanische staatliche Behörden Zugriff auf einzelne Daten nehmen. Zudem kann es vorkommen, dass erhobene Daten mit Daten aus anderen Diensten desselben Anbieters, sofern Sie ein entsprechendes Nutzerkonto haben, verknüpft werden. Nach Möglichkeit versuchen wir Serverstandorte innerhalb der EU zu nutzen, sofern das angeboten wird."
            : "We expressly point out that according to the European Court of Justice, there is currently no adequate level of protection for data transfer to the USA. Data processing by US services (such as Google Analytics) may result in data not being processed and stored anonymously. Furthermore, US government authorities may be able to access individual data. It may also happen that collected data is linked with data from other services of the same provider if you have a corresponding user account. Whenever possible, we try to use server locations within the EU if that is offered."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Wir informieren Sie an den passenden Stellen dieser Datenschutzerklärung genauer über Datenübertragung in Drittländer, sofern diese zutrifft."
            : "We will inform you more precisely about data transfer to third countries at the appropriate points in this privacy policy, if this applies."}
        </p>
        <br />
        <span className="contentHeadline">
          {language === "de" ? "Sicherheit der Datenverarbeitung" : "Security of Data Processing"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Um personenbezogene Daten zu schützen, haben wir sowohl technische als auch organisatorische Maßnahmen umgesetzt. Wo es uns möglich ist, verschlüsseln oder pseudonymisieren wir personenbezogene Daten. Dadurch machen wir es im Rahmen unserer Möglichkeiten so schwer wie möglich, dass Dritte aus unseren Daten auf persönliche Informationen schließen können."
            : "To protect personal data, we have implemented both technical and organizational measures. Where possible, we encrypt or pseudonymize personal data. This makes it as difficult as possible within our capabilities for third parties to infer personal information from our data."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Art. 25 DSGVO spricht hier von \"Datenschutz durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen\" und meint damit, dass man sowohl bei Software (z. B. Formularen) also auch Hardware (z. B. Zugang zum Serverraum) immer an Sicherheit denkt und entsprechende Maßnahmen setzt. Im Folgenden gehen wir, falls erforderlich, noch auf konkrete Maßnahmen ein."
            : "Art. 25 GDPR refers to \"data protection by design and by default\" and means that one always thinks about security for both software (e.g., forms) and hardware (e.g., access to the server room) and implements appropriate measures. In the following, we will discuss specific measures if necessary."}
        </p>
        <br />
        <span className="contentHeadline">
          {language === "de" ? "TLS-Verschlüsselung mit https" : "TLS Encryption with https"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "TLS, Verschlüsselung und https klingen sehr technisch und sind es auch. Wir verwenden HTTPS (das Hypertext Transfer Protocol Secure steht für \"sicheres Hypertext-Übertragungsprotokoll\"), um Daten abhörsicher im Internet zu übertragen."
            : "TLS, encryption and https sound very technical and they are. We use HTTPS (the Hypertext Transfer Protocol Secure) to transfer data securely over the Internet."}
          <br />
          {language === "de"
            ? "Das bedeutet, dass die komplette Übertragung aller Daten von Ihrem Browser zu unserem Webserver abgesichert ist – niemand kann \"mithören\"."
            : "This means that the complete transfer of all data from your browser to our web server is secured - nobody can \"eavesdrop\"."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Damit haben wir eine zusätzliche Sicherheitsschicht eingeführt und erfüllen den Datenschutz durch Technikgestaltung"
            : "With this, we have introduced an additional security layer and fulfill data protection by design"}{" "}
          (
          <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=312507168">
            {language === "de" ? "Artikel 25 Absatz 1 DSGVO" : "Article 25 Paragraph 1 GDPR"}
          </a>
          ).{" "}
          {language === "de"
            ? "Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet, können wir den Schutz vertraulicher Daten sicherstellen."
            : "Through the use of TLS (Transport Layer Security), an encryption protocol for secure data transmission on the Internet, we can ensure the protection of confidential data."}
          <br />
          {language === "de"
            ? "Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol links oben im Browser, links von der Internetadresse (z. B. beispielseite.de) und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse."
            : "You can recognize the use of this data transfer security by the small lock symbol in the top left of the browser, to the left of the internet address (e.g., examplesite.com) and the use of the https scheme (instead of http) as part of our internet address."}
          <br />
          {language === "de"
            ? "Wenn Sie mehr zum Thema Verschlüsselung wissen möchten, empfehlen wir die Google Suche nach \"Hypertext Transfer Protocol Secure wiki\" um gute Links zu weiterführenden Informationen zu erhalten."
            : "If you want to know more about encryption, we recommend searching Google for \"Hypertext Transfer Protocol Secure wiki\" to get good links to further information."}
        </p>
        <br />
        <span className="contentHeadline">
          {language === "de" ? "Webhosting Einleitung" : "Webhosting Introduction"}
        </span>
        <br />
        <br />
        <span className="contentContent">
          {language === "de" ? "Webhosting Zusammenfassung" : "Webhosting Summary"}
        </span>
        <br /><br/>
        <ol className="list-disc list-inside">
          <li>
            {language === "de" 
              ? "Betroffene: Besucher der Website"
              : "Affected parties: Website visitors"}
          </li>
          <li>
            {language === "de"
              ? "Zweck: professionelles Hosting der Website und Absicherung des Betriebs"
              : "Purpose: professional hosting of the website and securing operations"}
          </li>
          <li>
            {language === "de"
              ? "Verarbeitete Daten: IP-Adresse, Zeitpunkt des Websitebesuchs, verwendeter Browser und weitere Daten. Mehr Details dazu finden Sie weiter unten bzw. beim jeweils eingesetzten Webhosting Provider."
              : "Processed data: IP address, time of website visit, browser used and other data. More details can be found below or at the respective web hosting provider."}
          </li>
          <li>
            {language === "de"
              ? "Speicherdauer: abhängig vom jeweiligen Provider, aber in der Regel 2 Wochen"
              : "Storage duration: depends on the respective provider, but usually 2 weeks"}
          </li>
          <li>
            {language === "de"
              ? "Rechtsgrundlagen: Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)"
              : "Legal basis: Art. 6 para. 1 lit.f GDPR (Legitimate interests)"}
          </li>
        </ol>
        <br />
        <span className="contentContent">
          {language === "de" ? "Was ist Webhosting?" : "What is Webhosting?"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen – auch personenbezogene Daten – automatisch erstellt und gespeichert, so auch auf dieser Website. Diese Daten sollten möglichst sparsam und nur mit Begründung verarbeitet werden. Mit Website meinen wir übrigens die Gesamtheit aller Webseiten auf einer Domain, d.h. alles von der Startseite (Homepage) bis hin zur aller letzten Unterseite (wie dieser hier). Mit Domain meinen wir zum Beispiel beispiel.de oder musterbeispiel.com."
            : "When you visit websites today, certain information - including personal data - is automatically created and stored, including on this website. This data should be processed as sparingly as possible and only with justification. By website, we mean all web pages on a domain, i.e. everything from the homepage to the very last subpage (like this one). By domain, we mean for example example.com or samplesite.com."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Wenn Sie eine Website auf einem Computer, Tablet oder Smartphone ansehen möchten, verwenden Sie dafür ein Programm, das sich Webbrowser nennt. Sie kennen vermutlich einige Webbrowser beim Namen: Google Chrome, Microsoft Edge, Mozilla Firefox und Apple Safari. Wir sagen kurz Browser oder Webbrowser dazu."
            : "When you want to view a website on a computer, tablet, or smartphone, you use a program called a web browser. You probably know some web browsers by name: Google Chrome, Microsoft Edge, Mozilla Firefox, and Apple Safari. We simply call them browser or web browser."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Um die Website anzuzeigen, muss sich der Browser zu einem anderen Computer verbinden, wo der Code der Website gespeichert ist: dem Webserver. Der Betrieb eines Webservers ist eine komplizierte und aufwendige Aufgabe, weswegen dies in der Regel von professionellen Anbietern, den Providern, übernommen wird. Diese bieten Webhosting an und sorgen damit für eine verlässliche und fehlerfreie Speicherung der Daten von Websites. Eine ganze Menge Fachbegriffe, aber bitte bleiben Sie dran, es wird noch besser!"
            : "To display the website, the browser needs to connect to another computer where the website's code is stored: the web server. Operating a web server is a complicated and elaborate task, which is why this is usually handled by professional providers. These providers offer web hosting and thus ensure reliable and error-free storage of website data. That's a lot of technical terms, but please stay with us, it gets better!"}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Bei der Verbindungsaufnahme des Browsers auf Ihrem Computer (Desktop, Laptop, Tablet oder Smartphone) und während der Datenübertragung zu und vom Webserver kann es zu einer Verarbeitung personenbezogener Daten kommen. Einerseits speichert Ihr Computer Daten, andererseits muss auch der Webserver Daten eine Zeit lang speichern, um einen ordentlichen Betrieb zu gewährleisten."
            : "When connecting the browser on your computer (desktop, laptop, tablet or smartphone) and during data transmission to and from the web server, there may be processing of personal data. On the one hand, your computer stores data, on the other hand, the web server must also store data for a while to ensure proper operation."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Ein Bild sagt mehr als tausend Worte, daher zeigt folgende Grafik zur Veranschaulichung das Zusammenspiel zwischen Browser, dem Internet und dem Hosting-Provider."
            : "A picture speaks a thousand words, so the following graphic illustrates the interaction between the browser, the internet and the hosting provider."}
        </p>
        <br />
        <span className="contentContent">
          {language === "de"
            ? "Warum verarbeiten wir personenbezogene Daten?"
            : "Why do we process personal data?"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Die Zwecke der Datenverarbeitung sind:"
            : "The purposes of data processing are:"}
        </p>
        <ol className="list-decimal list-inside">
          <li>
            {language === "de"
              ? "Professionelles Hosting der Website und Absicherung des Betriebs"
              : "Professional hosting of the website and securing the operation"}
          </li>
          <li>
            {language === "de"
              ? "zur Aufrechterhaltung der Betriebs- und IT-Sicherheit"
              : "to maintain operational and IT security"}
          </li>
          <li>
            {language === "de"
              ? "Anonyme Auswertung des Zugriffsverhaltens zur Verbesserung unseres Angebots und ggf. zur Strafverfolgung bzw. Verfolgung von Ansprüchen"
              : "Anonymous analysis of access behavior to improve our offer and possibly for criminal prosecution or pursuit of claims"}
          </li>
        </ol>
        <br />
        <span className="contentContent">
          {language === "de"
            ? "Welche Daten werden verarbeitet?"
            : "What data is processed?"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Auch während Sie unsere Website jetzt gerade besuchen, speichert unser Webserver, das ist der Computer auf dem diese Webseite gespeichert ist, in der Regel automatisch Daten wie"
            : "Even while you are currently visiting our website, our web server, which is the computer on which this website is stored, usually automatically stores data such as"}
        </p>
        <br />
        <ul className="list-disc list-inside">
          <li>
            {language === "de"
              ? "die komplette Internetadresse (URL) der aufgerufenen Webseite"
              : "the complete internet address (URL) of the accessed website"}
          </li>
          <li>
            {language === "de"
              ? "Browser und Browserversion (z. B. Chrome 87)"
              : "browser and browser version (e.g. Chrome 87)"}
          </li>
          <li>
            {language === "de"
              ? "das verwendete Betriebssystem (z. B. Windows 10)"
              : "the operating system used (e.g. Windows 10)"}
          </li>
          <li>
            {language === "de"
              ? "die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B. "
              : "the address (URL) of the previously visited page (referrer URL) (e.g. "}
            <a href="https://www.beispielquellsite.de/vondabinichgekommen/">
              {language === "de"
                ? "https://www.beispielquellsite.de/vondabinichgekommen/"
                : "https://www.examplequellsite.com/whereidcamefrom/"}
            </a>
            )
          </li>
          <li>
            {language === "de"
              ? "den Hostnamen und die IP-Adresse des Geräts von welchem aus zugegriffen wird (z. B. COMPUTERNAME und 194.23.43.121)"
              : "the hostname and IP address of the device from which access is made (e.g. COMPUTERNAME and 194.23.43.121)"}
          </li>
          <li>
            {language === "de"
              ? "Datum und Uhrzeit"
              : "date and time"}
          </li>
          <li>
            {language === "de"
              ? "in Dateien, den sogenannten Webserver-Logfiles"
              : "in files, the so-called web server log files"}
          </li>
        </ul>
        <br />
        <span className="contentContent">
          {language === "de"
            ? "Wie lange werden Daten gespeichert?"
            : "How long are data stored?"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "In der Regel werden die oben genannten Daten zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten von Behörden eingesehen werden."
            : "In general, the above-mentioned data is stored for two weeks and then automatically deleted. We do not pass on this data, but cannot exclude that this data may be accessed by authorities in the event of illegal behavior."}
        </p>
        <br />
        <p className="contentContent">
          <strong>
            {language === "de"
              ? "Kurz gesagt:"
              : "In short:"}
          </strong>{" "}
          {language === "de"
            ? "Ihr Besuch wird durch unseren Provider (Firma, die unsere Website auf speziellen Computern (Servern) laufen lässt), protokolliert, aber wir geben Ihre Daten nicht ohne Zustimmung weiter!"
            : "Your visit is logged by our provider (company running our website on special computers (servers)), but we do not pass on your data without consent!"}
        </p>
        <br />
        <span className="contentContent">
          {language === "de"
            ? "Rechtsgrundlage"
            : "Legal basis"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Die Rechtmäßigkeit der Verarbeitung personenbezogener Daten im Rahmen des Webhosting ergibt sich aus Art. 6 Abs. 1 lit. f DSGVO (Wahrung der berechtigten Interessen), denn die Nutzung von professionellem Hosting bei einem Provider ist notwendig, um das Unternehmen im Internet sicher und nutzerfreundlich präsentieren und Angriffe und Forderungen hieraus gegebenenfalls verfolgen zu können."
            : "The lawfulness of the processing of personal data in the context of web hosting is based on Art. 6 Para. 1 lit. f GDPR (protection of legitimate interests), because the use of professional hosting with a provider is necessary to present the company on the internet securely and user-friendly and to be able to pursue attacks and claims from there if necessary."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Zwischen uns und dem Hosting-Provider besteht in der Regel ein Vertrag über die Auftragsverarbeitung gemäß Art. 28 f. DSGVO, der die Einhaltung von Datenschutz gewährleistet und Datensicherheit garantiert."
            : "There is usually a contract for order processing according to Art. 28 f. GDPR between us and the hosting provider, which ensures compliance with data protection and data security."}
        </p>
        <br />
        <span className="contentHeadline">
          {language === "de"
            ? "GitHub Pages Datenschutzerklärung"
            : "GitHub Pages Privacy Policy"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Wir verwenden für unsere Website den Webhosting-Dienst GitHub Pages. Dienstanbieter ist das amerikanische Unternehmen GitHub Inc., 88 Colin P. Kelly Jr. St.,San Francisco, CA 94107, USA."
            : "We use the web hosting service GitHub Pages for our website. The provider is the American company GitHub Inc., 88 Colin P. Kelly Jr. St.,San Francisco, CA 94107, USA."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "GitHub verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen."
            : "GitHub processes your data, among other things, also in the USA. We would like to point out that, in the opinion of the European Court of Justice, there is currently no adequate level of protection for data transfer to the USA. This can go hand in hand with various risks for the lawfulness and security of data processing."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der Europäischen Union, Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer Datenweitergabe dorthin verwendet GitHub sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die USA) überliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich GitHub, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: "
            : "As a basis for data processing by recipients located in third countries (outside the European Union, Iceland, Liechtenstein, Norway, i.e. especially in the USA) or a transfer thereof, GitHub uses so-called standard contractual clauses (= Art. 46 Para. 2 and 3 GDPR). Standard contractual clauses (Standard Contractual Clauses – SCC) are model templates provided by the EU Commission and are intended to ensure that your data also meets European data protection standards when transferred to third countries (such as the USA) and stored there. By these clauses, GitHub undertakes to comply with the European level of data protection, even if the data is stored, processed and managed in the USA. These clauses are based on a decision of the EU Commission. You can find the decision and the corresponding standard contractual clauses here: "}
          <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de">
            {language === "de"
              ? "https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de"
              : "https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=en"}
          </a>
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Die GitHub Datenverarbeitungsbedingungen (Processing Terms), welche den Standardvertragsklauseln entsprechen, finden Sie unter "
            : "The GitHub data processing terms (Processing Terms), which correspond to the standard contractual clauses, can be found at "}
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement">
            {language === "de"
              ? "https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement"
              : "https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement"}
          </a>
          .
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Mehr über die Daten, die durch die Verwendung von GitHub verarbeitet werden, erfahren Sie in der Privacy Policy auf "
            : "Learn more about the data processed by using GitHub in the privacy policy at "}
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement?tid=312507168">
            {language === "de"
              ? "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
              : "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"}
          </a>
          .
        </p>
        <br />
        <span className="contentHeadline">
          {language === "de"
            ? "Namecheap Datenschutzerklärung"
            : "Namecheap Privacy Policy"}
        </span>
        <br />
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Wir verwenden für unsere Website den Webhosting-Dienst Namecheap. Dienstanbieter ist das amerikanische Unternehmen Namecheap Inc., 4600 East Washington Street Suite 305, Phoenix, AZ 85034, USA."
            : "We use the web hosting service Namecheap for our website. The provider is the American company Namecheap Inc., 4600 East Washington Street Suite 305, Phoenix, AZ 85034, USA."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Namecheap verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen."
            : "Namecheap processes your data, among other things, also in the USA. We would like to point out that, in the opinion of the European Court of Justice, there is currently no adequate level of protection for data transfer to the USA. This can go hand in hand with various risks for the lawfulness and security of data processing."}
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der Europäischen Union, Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer Datenweitergabe dorthin verwendet GitHub sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die USA) überliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich GitHub, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: "
            : "As a basis for data processing by recipients located in third countries (outside the European Union, Iceland, Liechtenstein, Norway, i.e. especially in the USA) or a transfer thereof, GitHub uses so-called standard contractual clauses (= Art. 46 Para. 2 and 3 GDPR). Standard contractual clauses (Standard Contractual Clauses – SCC) are model templates provided by the EU Commission and are intended to ensure that your data also meets European data protection standards when transferred to third countries (such as the USA) and stored there. By these clauses, GitHub undertakes to comply with the European level of data protection, even if the data is stored, processed and managed in the USA. These clauses are based on a decision of the EU Commission. You can find the decision and the corresponding standard contractual clauses here: "}
          <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de">
            {language === "de"
              ? "https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de"
              : "https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=en"}
          </a>
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Die Namecheap Datenverarbeitungsbedingungen (Processing Terms), welche den Standardvertragsklauseln entsprechen, finden Sie unter "
            : "The Namecheap data processing terms (Processing Terms), which correspond to the standard contractual clauses, can be found at "}
          <a href="https://www.namecheap.com/legal/universal/data-processing-addendum/">
            {language === "de"
              ? "https://www.namecheap.com/legal/universal/data-processing-addendum/"
              : "https://www.namecheap.com/legal/universal/data-processing-addendum/"}
          </a>
          .
        </p>
        <br />
        <p className="contentContent">
          {language === "de"
            ? "Mehr über die Daten, die durch die Verwendung von Namecheap verarbeitet werden, erfahren Sie in der Privacy Policy auf "
            : "Learn more about the data processed by using Namecheap in the privacy policy at "}
          <a href="https://www.namecheap.com/legal/general/privacy-policy/">
            {language === "de"
              ? "https://www.namecheap.com/legal/general/privacy-policy/"
              : "https://www.namecheap.com/legal/general/privacy-policy/"}
          </a>
          .
        </p>
        <br />
      </div>
    </div>
  );
}
