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
            projectKey="robert"
            link={"https://github.com/IllusiveCoder/Robert-Assistent"}
          />
          <ContentFrame
            projectKey="colourChanger"
            link={"https://github.com/IllusiveCoder/Colourchanger"}
          />
          <ContentFrame
            projectKey="unilexika"
            link={"https://github.com/IllusiveCoder/Unilexika"}
          />
          <ContentFrame
            projectKey="updatedUnilexika"
            link={"https://github.com/IllusiveCoder/Updated-Unilexika"}
          />
          <ContentFrame
            projectKey="listApp"
            link={"https://github.com/IllusiveCoder/Listenapp"}
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
            projectKey="arrayProject"
            link={"https://github.com/IllusiveCoder/Arrays"}
          />
          <ContentFrame
            projectKey="icAutodocker"
            link={"https://github.com/IllusiveCoder/IC-Autodocker"}
          />
          <ContentFrame
            projectKey="icAutodockerPython"
            link={"https://github.com/IllusiveCoder/IC-Autodocker-Python-Package"}
          />
          <ContentFrame
            projectKey="website"
            link={"https://github.com/IllusiveCoder/Project-Website"}
          />
          <ContentFrame
            projectKey="gradeCalculator"
            link={"https://github.com/IllusiveCoder/gradecalculator"}
          />
          <ContentFrame
            projectKey="pythonCourse"
            link={"https://github.com/IllusiveCoder/Python-Course"}
          />
          <ContentFrame
            projectKey="apiPictureGenerator"
            link={"https://github.com/IllusiveCoder/ImageGenerator"}
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
            projectKey="simpleAIChatBot"
            link={"https://github.com/tomdevtech/SimpleAI-Chatbot"}
          />
          <ContentFrame
            projectKey="aiAPI"
            link={"https://github.com/tomdevtech/AI-API"}
          />
          <ContentFrame
            projectKey="workTimeManagement"
            link={"https://github.com/tomdevtech/Work-Time-Mgt"}
          />
          <ContentFrame
            projectKey="customAIAgent"
            link={"https://github.com/tomdevtech/Custom-AI-Agent"}
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
