import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContentFrameBox } from "./components/ContentFrameBox";
import { DataSec } from "./components/dataSec";
import { ImPrint } from "./components/imprint";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ContentFrameBox />} />
          <Route path="/dataSec" element={<DataSec />} />
          <Route path="/imprint" element={<ImPrint />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;