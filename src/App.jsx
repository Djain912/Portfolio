import React from 'react';
import Navbarr from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Languages from "./components/Languages";
import Projects from "./components/Project";
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Navbarr />
            <section id="home">
                <Home />
            </section>
            <section id="about-me">
                <About />
            </section>
            <section id="skills">
                <Languages />
            </section>
            <section id="projects">
                <Projects />
            </section>
           
            <section id="contact">
                <Contact />
            </section>
            <Footer />

        </>
    );
}

export default App;
