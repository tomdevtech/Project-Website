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
                "Meet Robert, your helpful assistant with a wide range of tools, including a gallery, a music player, and more. He's not only capable of entertaining you with jokes but also comes with a built-in help menu."
              }
              link={"https://github.com/IllusiveCoder/Robert-Assistent"}
            ></ContentFrame>
            <ContentFrame
              title={"Colour Changer"}
              descriptive_text={
                "This program allows you to experiment with various colors for GUIs. You can input hexadecimal values or choose from a range of color names."
              }
              link={"https://github.com/IllusiveCoder/Colourchanger"}
            ></ContentFrame>
            <ContentFrame
              title={"Unilexika"}
              descriptive_text={
                "Serves as a small notebook for storing and reading text files."}
              link={"https://github.com/IllusiveCoder/Unilexika"}
            ></ContentFrame>
            <ContentFrame
              title={"Updated Unilexika"}
              descriptive_text={
                "The updated version now allows editing existing entries, not just reading them."
              }
              link={"https://github.com/IllusiveCoder/Updated-Unilexika"}
            ></ContentFrame>
            <ContentFrame
              title={"List App"}
              descriptive_text={
                "This app is designed for users who seek quick and free access to websites where they can download books for free. However, 'Developer Options' must be enabled for the installation."
              }
              link={"https://github.com/IllusiveCoder/Listenapp"}
            ></ContentFrame>
            <ContentFrame
              title={"Link App"}
              descriptive_text={
                "Using this app, you can store, delete, and optionally edit links. Ultimately, the app serves the purpose of easily saving and accessing websites."
              }
              link={"https://github.com/IllusiveCoder/Link-App"}
            ></ContentFrame>
            <ContentFrame
              title={"Pen and Paper Storage System"}
              descriptive_text={
                "This application is exclusive to Windows and allows users to create, edit, and delete data about characters and stories using the JSON storage system."}
              link={"https://github.com/IllusiveCoder/Pen-and-Paper"}
            ></ContentFrame>
            <ContentFrame
              title={"Portfolio Website"}
              descriptive_text={
                "My old (and first) website as a prototype. Created to showcase all projects in a better organized and concise manner."
              }
              link={"https://github.com/IllusiveCoder/Portfolio"}
            ></ContentFrame>
            <ContentFrame
              title={"Array Project"}
              descriptive_text={
                "This project is an exemplary program aimed at illustrating how elements in arrays, with dimensions ranging from 1 to 3, are read, deleted, and modified in general."
              }
              link={"https://github.com/IllusiveCoder/Arrays"}
            ></ContentFrame>
            <ContentFrame
              title={"IC-Autodocker"}
              descriptive_text={
                "An interactive Docker exploration tool to playfully approach and experiment with all functionalities."
              }
              link={"https://github.com/IllusiveCoder/IC-Autodocker"}
            ></ContentFrame>
            <ContentFrame
              title={"IC-Autodocker Python Package"}
              descriptive_text={
                "Full-featured Python package of IC-Autodocker, excluding the GUI."
              }
              link={
                "https://github.com/IllusiveCoder/IC-Autodocker-Python-Package"
              }
            ></ContentFrame>
            <ContentFrame
              title={"Website"}
              descriptive_text={
                "New portfolio website showcasing my projects as a software developer. Built with React and Tailwind CSS."
              }
              link={"https://github.com/IllusiveCoder/Project-Website"}
            ></ContentFrame>
            <ContentFrame
              title={"Grade Calculator"}
              descriptive_text={
                "Calculate your university grade point average with this small program featuring a graphical user interface."
              }
              link={"https://github.com/IllusiveCoder/gradecalculator"}
            ></ContentFrame>
            <ContentFrame
              title={"Python 3 Course"}
              descriptive_text={
                "A self-created Python 3 course for learning the fundamentals of the programming language and mastering related concepts."
              }
              link={"https://github.com/IllusiveCoder/Python-Course"}
            ></ContentFrame>
            <ContentFrame
              title={"API Picture Generator"}
              descriptive_text={
                "Generates images using an API. For enhanced user experience, a graphical interface was created using PyQT5."
              }
              link={"https://github.com/IllusiveCoder/ImageGenerator"}
            ></ContentFrame>
            <ContentFrame
              title={"Example Library"}
              descriptive_text={
                "This project is a comprehensive code sample library covering Java, Python, Ruby, C/C++, and Web Development (HTML, CSS, JavaScript with React)"
              }
              link={"https://github.com/IllusiveCoder/ExampleLibrary"}
            ></ContentFrame>
            <ContentFrame
              title={"Learn Programming"}
              descriptive_text={
                "The repository is a curated collection of websites and platforms offering tutorials, courses, and information to help individuals learn and enhance their programming skills."
              }
              link={"https://github.com/IllusiveCoder/LearnProgramming"}
            ></ContentFrame>
          </div>
          <footer className="footer">
            <NavLink className="footerElement" to={"/dataSec"}>
              Privacy
            </NavLink>
            <NavLink className="footerElement" to={"/imprint"}>
              Imprint
            </NavLink>
            <br/><br/>
          </footer>
        </div>
    </div>
  );
}
