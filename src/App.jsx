import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarr from './components/Navbar';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Languages from "./components/Languages";
import Projects from "./components/Project";
import Footer from './components/Footer';
import Contact from './components/Contact';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Experience from './components/Experience';
import OpenSource from './components/OpenSource';
import ScrollProgress from './components/ScrollProgress';
import CursorTrail from './components/CursorTrail';

function App() {
  return (
    <Router>
      <CursorTrail />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={
          <>
            <Navbarr />
            {/* Each component below renders its own <section id="...">, so
                they are mounted directly — wrapping them here would produce
                duplicate IDs and break anchor links and scrollspy. */}
            <section id="home">
              <Home />
            </section>
            <About />
            <Experience />
            <Languages />
            <Projects />
            <OpenSource />
            <Publications />
            <Awards />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;