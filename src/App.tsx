import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { Navbar }   from './components/Navbar'
import { Hero }     from './components/Hero'
import { About }    from './components/About'
import { Projects } from './components/Projects'
import { Contact }  from './components/Contact'
import { Footer }   from './components/Footer'
import { DataSec }  from './components/dataSec'
import { ImPrint }  from './components/imprint'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/dataSec" element={<DataSec />} />
          <Route path="/imprint" element={<ImPrint />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  )
}

export default App
