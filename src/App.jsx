import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-text font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <main className="flex flex-col w-full overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
