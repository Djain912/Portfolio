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
            <section id="home">
              <Home />
            </section>
            <section id="about-me">
              <About />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="skills">
              <Languages />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="publications">
              <Publications />
            </section>
            <section id="awards">
              <Awards />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;