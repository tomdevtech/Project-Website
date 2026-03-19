import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

interface Section { titleDe: string; titleEn: string; contentDe: string; contentEn: string }

const SECTIONS: Section[] = [
  {
    titleDe: 'Einleitung und Überblick',
    titleEn: 'Introduction and Overview',
    contentDe: `Wir haben diese Datenschutzerklärung  verfasst, um Ihnen gemäß den Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten wir als Verantwortlicher – und die von uns beauftragten Auftragsverarbeiter (z.B. Anbieter) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.
Kurz gesagt: Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.

Diese Datenschutzerklärung soll Ihnen die wichtigsten Dinge so einfach und transparent wie möglich beschreiben. Soweit es der Transparenz dienlich ist, werden technische Begriffe leserfreundlich erklärt, Links zu weiterführenden Informationen geboten und Grafiken zum Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist.

Wenn Sie Fragen haben, möchten wir Sie bitten, die unten oder im Impressum aufgeführte verantwortliche Stelle zu kontaktieren, bestehende Links zu verfolgen und weitere Informationen auf Drittseiten nachzulesen.`,
    contentEn: `We have written this privacy policy to explain to you, in accordance with the requirements of the General Data Protection Regulation (EU) 2016/679 and applicable national laws, what personal data (short data) we as the controller - and the processors commissioned by us (e.g. providers) - process, will process in the future and what lawful options you have. The terms used are to be understood as gender-neutral.
In short: We inform you comprehensively about data that we process about you.

This privacy policy is intended to describe the most important things to you as simply and transparently as possible. As far as it is conducive to transparency, technical terms are explained in a reader-friendly way, links to further information are provided and graphics are used. We inform you in clear and simple language that we only process personal data in the course of our business activities if there is a corresponding legal basis.

If you still have questions, we would like to ask you to contact the responsible office listed below or in the imprint, follow the existing links and look at further information on third-party sites.`,
  },
  {
    titleDe: 'Verantwortlicher',
    titleEn: 'Controller',
    contentDe: `Der Verantwortliche für die Datenverarbeitung ist:
Tom Helling
E-Mail: TomHelling.DevTech@gmail.com`,
    contentEn: `The controller for data processing is:
Tom Helling
E-Mail: TomHelling.DevTech@gmail.com`,
  },
  {
    titleDe: 'Geltungsbereich',
    titleEn: 'Scope',
    contentDe: `Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Unternehmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt dafür, dass wir unsere Leistungen und Produkte anbieten und abrechnen können, sei es online oder offline.

Der Geltungsbereich dieser Datenschutzerklärung umfasst:
• alle Onlineauftritte (Websites, Onlineshops), die wir betreiben
• Social-Media-Auftritte und E-Mail-Kommunikation
• mobile Apps für Smartphones und andere Geräte

Kurz gesagt: Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten im Unternehmen über die genannten Kanäle strukturiert verarbeitet werden. Sollten wir außerhalb dieser Kanäle Rechtsbeziehungen mit Ihnen eingehen, werden wir Sie gegebenenfalls gesondert informieren.`,
    contentEn: `This privacy policy applies to all personal data processed by us in the company and to all personal data processed by companies (processors) commissioned by us. By personal data, we mean information within the meaning of Art. 4 No. 1 GDPR such as a person's name, email address and postal address. The processing of personal data ensures that we can offer and bill our services and products, whether online or offline.

The scope of this privacy policy includes:
• all online presences (websites, online shops) that we operate
• Social media presences and email communication
• mobile apps for smartphones and other devices

In short: The privacy policy applies to all areas in which personal data is processed in a structured manner within the company via the channels mentioned. Should we enter into legal relationships with you outside of these channels, we will inform you separately if necessary.`,
  },
  {
    titleDe: 'Rechtsgrundlagen',
    titleEn: 'Legal Bases',
    contentDe: `In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten.

Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:

• Einwilligung (Artikel 6 Abs. 1 lit. a DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten für einen bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.
• Vertrag (Artikel 6 Abs. 1 lit. b DSGVO): Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten. Zum Beispiel benötigen wir im Vorfeld persönliche Informationen, wenn wir einen Kaufvertrag mit Ihnen abschließen.
• Rechtliche Verpflichtung (Artikel 6 Abs. 1 lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir gesetzlich dazu verpflichtet, Rechnungen für die Buchhaltung aufzuheben. Diese enthalten in der Regel personenbezogene Daten.
• Berechtigte Interessen (Artikel 6 Abs. 1 lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten wir uns das Recht vor, personenbezogene Daten zu verarbeiten. Wir müssen zum Beispiel gewisse Daten verarbeiten, um unsere Website sicher und wirtschaftlich effizient betreiben zu können.

Zusätzlich zur EU-Verordnung gelten auch nationale Gesetze:
• In Österreich ist dies das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (Datenschutzgesetz), kurz DSG.
• In Deutschland gilt das Bundesdatenschutzgesetz, kurz BDSG.`,
    contentEn: `In the following privacy policy, we provide you with transparent information about the legal principles and regulations, i.e., the legal bases of the General Data Protection Regulation, which enable us to process personal data.

We only process your data if at least one of the following conditions applies:

• Consent (Article 6(1)(a) GDPR): You have given us your consent to process data for a specific purpose. An example would be the storage of your entered data from a contact form.
• Contract (Article 6(1)(b) GDPR): To fulfill a contract or pre-contractual obligations with you, we process your data. For example, if we conclude a purchase contract with you, we need personal information in advance.
• Legal Obligation (Article 6(1)(c) GDPR): If we are subject to a legal obligation, we process your data. For example, we are legally required to keep invoices for accounting purposes. These usually contain personal data.
• Legitimate Interests (Article 6(1)(f) GDPR): In the case of legitimate interests that do not restrict your fundamental rights, we reserve the right to process personal data. For example, we need to process certain data to operate our website securely and economically efficiently.

In addition to the EU regulation, national laws also apply:
• In Austria, this is the Federal Act concerning the Protection of Personal Data (Data Protection Act), or DSG for short.
• In Germany, the Federal Data Protection Act (Bundesdatenschutzgesetz, BDSG) applies.`,
  },
  {
    titleDe: 'Speicherdauer',
    titleEn: 'Storage Duration',
    contentDe: `Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist, gilt als allgemeines Kriterium für uns. Das bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall des ursprünglichen Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung.

Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht, gelöscht.`,
    contentEn: `That we only store personal data for as long as is absolutely necessary for the provision of our services and products is a general criterion for us. This means that we delete personal data as soon as the reason for data processing no longer exists. In some cases, we are legally obliged to store certain data even after the original purpose has ceased to exist, for example for accounting purposes.

If you request the deletion of your data or revoke consent for data processing, the data will be deleted as quickly as possible and if there is no obligation to store it.`,
  },
  {
    titleDe: 'Rechte laut Datenschutz-Grundverordnung',
    titleEn: 'Rights under the General Data Protection Regulation',
    contentDe: `Gemäß Artikeln 13 und 14 DSGVO informieren wir Sie über folgende Rechte, die Ihnen zustehen, um eine faire und transparente Verarbeitung von Daten zu gewährleisten:

• Recht auf Auskunft (Art. 15 DSGVO): Sie haben das Recht zu erfahren, ob wir Daten über Sie verarbeiten, für welchen Zweck, in welchen Kategorien, an wen sie weitergegeben werden, wie lange sie gespeichert werden und weitere Informationen.
• Recht auf Berichtigung (Art. 16 DSGVO): Sie haben das Recht auf Berichtigung der Daten – wir müssen Daten richtigstellen, wenn Sie Fehler finden.
• Recht auf Löschung (Art. 17 DSGVO): Sie haben das Recht auf Löschung ('Recht auf Vergessenwerden'), d.h. Sie können die Löschung Ihrer Daten verlangen.
• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO): Wir dürfen die Daten speichern, aber nicht weiter verwenden.
• Recht auf Datenübertragbarkeit (Art. 20 DSGVO): Wir müssen Ihnen Ihre Daten auf Anfrage in einem gängigen Format bereitstellen.
• Widerspruchsrecht (Art. 21 DSGVO): Sie können der Datenverarbeitung widersprechen. Basiert die Verarbeitung auf berechtigten Interessen oder öffentlichem Interesse, können Sie widersprechen. Bei Direktwerbung oder Profiling können Sie der Verarbeitung jederzeit widersprechen.
• Recht, nicht automatisierten Entscheidungen unterworfen zu werden (Art. 22 DSGVO): Sie haben unter Umständen das Recht, nicht einer ausschließlich auf automatisierter Verarbeitung beruhenden Entscheidung unterworfen zu werden.
• Recht auf Beschwerde (Art. 77 DSGVO): Sie haben das Recht, sich bei der Datenschutzbehörde zu beschweren, wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.

Kurz gesagt: Sie haben Rechte – zögern Sie nicht, die oben genannte verantwortliche Stelle zu kontaktieren!

Zuständige Datenschutzbehörde für Sachsen-Anhalt:
Landesbeauftragter für den Datenschutz: Albert Cohaus (V.i.A.)
Anschrift: Leiterstraße 9, 39104 Magdeburg
Telefon: 03 91/818 03-0
E-Mail: poststelle@lfd.sachsen-anhalt.de
Website: https://datenschutz.sachsen-anhalt.de/datenschutz-in-sachsen-anhalt/`,
    contentEn: `According to Articles 13 and 14 GDPR, we inform you about the following rights you have to ensure fair and transparent processing of data:

• Right to information (Art. 15 GDPR): You have the right to know whether we process data about you, for what purpose, in what categories, to whom it is disclosed, how long it is stored and further information.
• Right to rectification (Art. 16 GDPR): You have the right to rectification – we must correct data if you find errors.
• Right to erasure (Art. 17 GDPR): You have the right to erasure ('right to be forgotten'), which specifically means that you can request the deletion of your data.
• Right to restriction of processing (Art. 18 GDPR): We may store the data but not use it further.
• Right to data portability (Art. 20 GDPR): We must provide you with your data in a common format upon request.
• Right to object (Art. 21 GDPR): You can object to the processing of your data. If processing is based on legitimate interests or public interest, you can object. For direct marketing or profiling, you can object at any time.
• Right not to be subject to automated decisions (Art. 22 GDPR): You may have the right not to be subject to a decision based solely on automated processing (e.g. profiling).
• Right to lodge a complaint (Art. 77 GDPR): You have the right to complain to the data protection authority if you believe that the processing of your data violates the GDPR.

In short: You have rights – don't hesitate to contact the responsible party listed above!

Competent supervisory authority for Saxony-Anhalt:
State Commissioner for Data Protection: Albert Cohaus (V.i.A.)
Address: Leiterstraße 9, 39104 Magdeburg
Phone: 03 91/818 03-0
Email: poststelle@lfd.sachsen-anhalt.de
Website: https://datenschutz.sachsen-anhalt.de/datenschutz-in-sachsen-anhalt/`,
  },
  {
    titleDe: 'Datenweitergabe in Drittländer',
    titleEn: 'Data Transfer to Third Countries',
    contentDe: `Wir übermitteln oder verarbeiten Daten nur dann in Länder außerhalb der EU (Drittländer), wenn Sie dieser Verarbeitung zustimmen, dies gesetzlich vorgeschrieben oder vertraglich notwendig ist und in jedem Fall nur soweit dies generell erlaubt ist. Ihre Einwilligung ist in den meisten Fällen der wichtigste Grund, warum wir Daten in Drittländern verarbeiten lassen.

Wir weisen ausdrücklich darauf hin, dass nach Ansicht des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Die Datenverarbeitung durch US-Dienste (etwa Google Analytics) kann dazu führen, dass Daten nicht anonym verarbeitet und gespeichert werden. Außerdem können US-Regierungsbehörden Zugriff auf einzelne Daten haben. Es kann auch passieren, dass erhobene Daten mit Daten aus anderen Diensten desselben Anbieters zusammengeführt werden, wenn Sie ein entsprechendes Nutzerkonto haben.`,
    contentEn: `We only transfer or process data to countries outside the EU (third countries) if you consent to this processing, it is legally required or contractually necessary, and in any case only to the extent that it is generally permitted. Your consent is in most cases the most important reason why we have data processed in third countries.

We expressly point out that according to the European Court of Justice, there is currently no adequate level of protection for data transfer to the USA. Data processing by US services (such as Google Analytics) may result in data not being processed and stored anonymously. Furthermore, US government authorities may be able to access individual data. It may also happen that collected data is linked with data from other services of the same provider if you have a corresponding user account.`,
  },
  {
    titleDe: 'Sicherheit der Datenverarbeitung',
    titleEn: 'Security of Data Processing',
    contentDe: `Zum Schutz personenbezogener Daten haben wir sowohl technische als auch organisatorische Maßnahmen umgesetzt. Wo es möglich ist, verschlüsseln oder pseudonymisieren wir personenbezogene Daten. Damit machen wir es im Rahmen unserer Möglichkeiten so schwer wie möglich, dass Dritte aus unseren Daten auf persönliche Informationen schließen können.

Art. 25 DSGVO spricht von „Datenschutz durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen" und meint damit, dass man sowohl bei Software (z.B. Formulare) als auch Hardware (z.B. Zugang zum Serverraum) immer an Sicherheit denkt und entsprechende Maßnahmen setzt.`,
    contentEn: `To protect personal data, we have implemented both technical and organizational measures. Where possible, we encrypt or pseudonymize personal data. This makes it as difficult as possible within our capabilities for third parties to infer personal information from our data.

Art. 25 GDPR refers to "data protection by design and by default" and means that one always thinks about security for both software (e.g., forms) and hardware (e.g., access to the server room) and implements appropriate measures.`,
  },
  {
    titleDe: 'TLS-Verschlüsselung mit https',
    titleEn: 'TLS Encryption with https',
    contentDe: `TLS, Verschlüsselung und https klingen sehr technisch und sind es auch. Wir verwenden HTTPS (das Hypertext Transfer Protocol Secure) um Daten abhörsicher im Internet zu übertragen. Dies bedeutet, dass die komplette Übertragung aller Daten von Ihrem Browser zu unserem Webserver gesichert ist – niemand kann „mithören".

Damit haben wir eine zusätzliche Sicherheitsschicht eingeführt und erfüllen Datenschutz durch Technikgestaltung (Artikel 25 Absatz 1 DSGVO). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet, können wir den Schutz vertraulicher Daten sicherstellen.
Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol links oben im Browser und der Verwendung des Schemas https als Teil unserer Internetadresse.`,
    contentEn: `TLS, encryption and https sound very technical and they are. We use HTTPS (the Hypertext Transfer Protocol Secure) to transfer data securely over the Internet. This means that the complete transfer of all data from your browser to our web server is secured - nobody can "eavesdrop".

With this, we have introduced an additional security layer and fulfill data protection by design (Article 25 Paragraph 1 GDPR). Through the use of TLS (Transport Layer Security), an encryption protocol for secure data transmission on the Internet, we can ensure the protection of confidential data.
You can recognize the use of this data transfer security by the small lock symbol in the top left of the browser and the use of the https scheme as part of our internet address.`,
  },
  {
    titleDe: 'Webhosting',
    titleEn: 'Webhosting',
    contentDe: `Kurzzusammenfassung:
• Betroffene: Websitebesucher
• Zweck: professionelles Hosting der Website und Absicherung des Betriebs
• Verarbeitete Daten: IP-Adresse, Zeitpunkt des Websitebesuchs, verwendeter Browser u.a.
• Speicherdauer: abhängig vom jeweiligen Anbieter, i.d.R. 2 Wochen
• Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)

Wenn Sie Websites besuchen, werden automatisch Informationen – auch personenbezogene Daten – erstellt und gespeichert. Ihr Browser muss sich mit einem Webserver verbinden, auf dem der Code der Website gespeichert ist. Beim Verbinden und bei der Datenübertragung werden automatisch folgende Daten verarbeitet:

• die vollständige Internetadresse (URL) der aufgerufenen Webseite
• Browser und Browserversion (z.B. Chrome 87)
• das verwendete Betriebssystem (z.B. Windows 10)
• die Adresse (URL) der zuvor besuchten Seite (Referrer URL)
• Hostname und IP-Adresse des Geräts, von dem aus zugegriffen wird
• Datum und Uhrzeit
• in Dateien, den sogenannten Webserver-Logfiles

Diese Daten werden in der Regel für ca. zwei Wochen gespeichert und dann automatisch gelöscht. Wir geben diese Daten nicht weiter, können aber nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten von Behörden eingesehen werden.

Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen), da die Nutzung professionellen Hostings notwendig ist, um das Unternehmen sicher und benutzerfreundlich im Internet zu präsentieren und Angriffe und Ansprüche von dort verfolgen zu können.`,
    contentEn: `Summary:
• Affected parties: Website visitors
• Purpose: professional hosting of the website and securing operations
• Processed data: IP address, time of website visit, browser used and other data
• Storage duration: depends on the respective provider, but usually 2 weeks
• Legal basis: Art. 6 para. 1 lit. f GDPR (Legitimate interests)

When you visit websites, certain information - including personal data - is automatically created and stored. Your browser needs to connect to a web server where the website's code is stored. When connecting and during data transfer, the following data is automatically processed:

• the complete internet address (URL) of the accessed website
• browser and browser version (e.g. Chrome 87)
• the operating system used (e.g. Windows 10)
• the address (URL) of the previously visited page (referrer URL)
• hostname and IP address of the device from which access is made
• date and time
• in files, the so-called web server log files

This data is generally stored for two weeks and then automatically deleted. We do not pass on this data, but cannot exclude that this data may be accessed by authorities in the event of illegal behavior.

Legal basis: Art. 6 para. 1 lit. f GDPR (legitimate interests), as the use of professional hosting with a provider is necessary to present the company on the internet securely and user-friendly and to be able to pursue attacks and claims from there if necessary.`,
  },
  {
    titleDe: 'GitHub Pages Datenschutzerklärung',
    titleEn: 'GitHub Pages Privacy Policy',
    contentDe: `Wir verwenden den Webhosting-Dienst GitHub Pages. Anbieter ist das amerikanische Unternehmen GitHub Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA.

GitHub verarbeitet Daten u.a. auch in den USA. Wir weisen darauf hin, dass nach Ansicht des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen.

Als Grundlage der Datenverarbeitung verwendet GitHub sogenannte Standardvertragsklauseln (= Art. 46 Abs. 2 und 3 DSGVO). Diese sollen sicherstellen, dass Ihre Daten auch bei einer Übertragung in Drittländer (wie die USA) europäischen Datenschutzstandards entsprechen.

Die GitHub Datenverarbeitungsbedingungen (Data Protection Agreement) finden Sie unter https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement

Mehr über die Daten, die durch die Verwendung von GitHub verarbeitet werden, erfahren Sie in der Datenschutzerklärung unter https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement`,
    contentEn: `We use the web hosting service GitHub Pages. The provider is the American company GitHub Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA.

GitHub processes your data, among other things, also in the USA. We would like to point out that, in the opinion of the European Court of Justice, there is currently no adequate level of protection for data transfer to the USA. This can go hand in hand with various risks for the lawfulness and security of data processing.

As a basis for data processing, GitHub uses so-called standard contractual clauses (= Art. 46 Para. 2 and 3 GDPR). These are intended to ensure that your data also meets European data protection standards when transferred to third countries (such as the USA) and stored there.

The GitHub data processing terms (Data Protection Agreement) can be found at https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement

Learn more about the data processed by using GitHub in the privacy policy at https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement`,
  },
  {
    titleDe: 'Namecheap Datenschutzerklärung',
    titleEn: 'Namecheap Privacy Policy',
    contentDe: `Wir verwenden den Webhosting-Dienst Namecheap. Anbieter ist das amerikanische Unternehmen Namecheap Inc., 4600 East Washington Street Suite 305, Phoenix, AZ 85034, USA.

Namecheap verarbeitet Daten u.a. auch in den USA. Wir weisen darauf hin, dass nach Ansicht des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen.

Als Grundlage der Datenverarbeitung verwendet Namecheap sogenannte Standardvertragsklauseln (= Art. 46 Abs. 2 und 3 DSGVO). Diese sollen sicherstellen, dass Ihre Daten auch bei einer Übertragung in Drittländer europäischen Datenschutzstandards entsprechen.

Die Namecheap Datenverarbeitungsbedingungen (Data Processing Addendum) finden Sie unter https://www.namecheap.com/legal/universal/data-processing-addendum/

Mehr über die Daten, die durch die Verwendung von Namecheap verarbeitet werden, erfahren Sie in der Datenschutzerklärung unter https://www.namecheap.com/legal/general/privacy-policy/`,
    contentEn: `We use the web hosting service Namecheap. The provider is the American company Namecheap Inc., 4600 East Washington Street Suite 305, Phoenix, AZ 85034, USA.

Namecheap processes your data, among other things, also in the USA. We would like to point out that, in the opinion of the European Court of Justice, there is currently no adequate level of protection for data transfer to the USA. This can go hand in hand with various risks for the lawfulness and security of data processing.

As a basis for data processing, Namecheap uses so-called standard contractual clauses (= Art. 46 Para. 2 and 3 GDPR). These are intended to ensure that your data also meets European data protection standards when transferred to third countries and stored there.

The Namecheap data processing terms (Data Processing Addendum) can be found at https://www.namecheap.com/legal/universal/data-processing-addendum/

Learn more about the data processed by using Namecheap in the privacy policy at https://www.namecheap.com/legal/general/privacy-policy/`,
  },
]

export function DataSec() {
  const { language } = useLanguage()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const de = language === 'de'

  const formatContent = (text: string) =>
    text.split('\n').map((line, i) => {
      const urlMatch = line.match(/(https?:\/\/[^\s]+)/)
      if (urlMatch) {
        const url = urlMatch[0]
        const [before, after] = line.split(url)
        return <span key={i}>{before}<a href={url} target="_blank" rel="noreferrer" className="text-accent-2 hover:text-white transition-colors underline underline-offset-2 break-all">{url}</a>{after}<br/></span>
      }
      return <span key={i}>{line}<br/></span>
    })

  return (
    <div className="min-h-screen bg-bg">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background:'radial-gradient(ellipse at 50% 0%, rgba(123,108,255,0.07), transparent 70%)' }} />
      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 py-24 md:py-32">
        <Link to="/" className="inline-flex items-center gap-2 text-white/35 hover:text-white text-sm mb-12 no-underline transition-colors group">
          <svg width="16" height="16" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {de ? 'Zurück zur Startseite' : 'Back to homepage'}
        </Link>
        <div className="mb-12">
          <p className="text-xs tracking-[0.15em] uppercase text-accent font-semibold mb-3">Legal</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-[-0.03em] text-white">
            {de ? 'Datenschutzerklärung' : 'Privacy Policy'}
          </h1>
          <p className="text-white/35 text-sm mt-3">{de ? 'Zuletzt aktualisiert: 19.03.2026' : 'Last updated: 19.03.2026'}</p>
        </div>
        <div className="space-y-4">
          {SECTIONS.map((s, i) => (
            <div key={i} className="rounded-2xl p-7" style={{ background:'#1c1c26', border:'1px solid var(--border)' }}>
              <h2 className="font-display font-bold text-base text-white mb-3">{de ? s.titleDe : s.titleEn}</h2>
              <p className="text-white/50 font-light leading-relaxed text-[0.9rem]">
                {formatContent(de ? s.contentDe : s.contentEn)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl p-6 text-center" style={{ background:'rgba(123,108,255,0.06)', border:'1px solid rgba(123,108,255,0.15)' }}>
          <p className="text-white/40 text-sm font-light">
            {de ? 'Fragen zum Datenschutz? ' : 'Questions about privacy? '}
            <a href="mailto:TomHelling.DevTech@gmail.com" className="text-accent-2 hover:text-white transition-colors underline underline-offset-2">
              TomHelling.DevTech@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
