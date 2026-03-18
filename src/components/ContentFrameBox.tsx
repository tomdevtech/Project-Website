import { NavLink } from "react-router-dom";
import ContentFrame from "./ContentFrame";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import WelcomeComponent from "./WelcomeComponent";

export function ContentFrameBox() {
  const { language } = useLanguage();
  const { privacy, imprint } = translations[language].navigation;

  return (
    <div className="background">
      <div className="ContentFrameBox">
        <header className="relative px-4 pt-4 pb-2 sm:px-6 sm:py-4 lg:px-8 lg:py-8">
          <div className="headline">Tom DevTech</div>
          <div className="mt-8 mb-4 sm:mt-0 sm:mb-0 flex justify-center sm:block sm:absolute sm:right-6 sm:top-1/2 sm:-translate-y-1/2 lg:right-8 xl:right-8 z-50">
            <LanguageSelector />
          </div>
        </header>
        <WelcomeComponent
          areaid="welcome"
        />
        <div className="body">
          <ContentFrame
            projectKey="unilexika"
            link={"https://github.com/IllusiveCoder/Unilexika"}
          />
          <ContentFrame
            projectKey="updatedUnilexika"
            link={"https://github.com/IllusiveCoder/Updated-Unilexika"}
          />
          <ContentFrame
            projectKey="linkApp"
            link={"https://github.com/IllusiveCoder/Link-App"}
          />
          <ContentFrame
            projectKey="penAndPaper"
            link={"https://github.com/IllusiveCoder/Pen-and-Paper"}
          />
          <ContentFrame
            projectKey="portfolio"
            link={"https://github.com/IllusiveCoder/Portfolio"}
          />
          <ContentFrame
            projectKey="pythonCourse"
            link={"https://github.com/IllusiveCoder/Python-Course"}
          />
          <ContentFrame
            projectKey="exampleLibrary"
            link={"https://github.com/IllusiveCoder/ExampleLibrary"}
          />
          <ContentFrame
            projectKey="learnProgramming"
            link={"https://github.com/IllusiveCoder/LearnProgramming"}
          />
          <ContentFrame
            projectKey="customAIAgent"
            link={"https://github.com/tomdevtech/Custom-AI-Agent"}
          />
          <ContentFrame
            projectKey="sendMailsLibrary"
            link={"https://github.com/tomdevtech/SendMailsLibrary"}
          />
          <ContentFrame
            projectKey="agenticScraper"
            link={"https://github.com/tomdevtech/Agentic-Scraper"}
          />
          <ContentFrame
            projectKey="qGISExtensionMapillary"
            link={"https://github.com/tomdevtech/QGIS-Extension-Mapillary"}
          />
          <ContentFrame
            projectKey="aIAgentForBC"
            link={"https://github.com/tomdevtech/AI-Agent-For-BC"}
          />
          <ContentFrame
            projectKey="aIDataCreator"
            link={"https://github.com/tomdevtech/AI-Data-Creator"}
          />
          <ContentFrame
            projectKey="gitHubUserDashboard"
            link={"https://github.com/tomdevtech/GitHub-User-Dashboard"}
          />
          <ContentFrame
            projectKey="workTimeMgt"
            link={"https://github.com/tomdevtech/Work-Time-Mgt"}
          />
          <ContentFrame
            projectKey="aIAPI"
            link={"https://github.com/tomdevtech/AI-API"}
          />
          <ContentFrame
            projectKey="simpleAIChatbot"
            link={"https://github.com/tomdevtech/SimpleAI-Chatbot"}
          />
          <ContentFrame
            projectKey="imageGenerator"
            link={"https://github.com/tomdevtech/ImageGenerator"}
          />
          <ContentFrame
            projectKey="courseCreator"
            link={"https://github.com/tomdevtech/CourseCreator"}
          />
          <ContentFrame
            projectKey="gradecalculator"
            link={"https://github.com/tomdevtech/gradecalculator"}
          />
          <ContentFrame
            projectKey="arrays"
            link={"https://github.com/tomdevtech/Arrays"}
          />
          <ContentFrame
            projectKey="iCAutodockerPythonPackage"
            link={"https://github.com/tomdevtech/IC-Autodocker-Python-Package"}
          />
          <ContentFrame
            projectKey="iCAutodocker"
            link={"https://github.com/tomdevtech/IC-Autodocker"}
          />
          <ContentFrame
            projectKey="listenapp"
            link={"https://github.com/tomdevtech/Listenapp"}
          />
          <ContentFrame
            projectKey="colourchanger"
            link={"https://github.com/tomdevtech/Colourchanger"}
          />
          <ContentFrame
            projectKey="robertAssistent"
            link={"https://github.com/tomdevtech/Robert-Assistent"}
          />
        </div>
        <footer className="footer">
          <NavLink className="footerElement" to={"/dataSec"}>
            {privacy}
          </NavLink>
          <NavLink className="footerElement" to={"/imprint"}>
            {imprint}
          </NavLink>
          <br/><br/>
        </footer>
      </div>
    </div>
  );
}
