import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          padding: '10px 15px',
          borderRadius: '6px',
          backgroundColor: darkMode ? '#f0f4f8' : '#2a2a2a',
          color: darkMode ? '#2a2a2a' : '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
      </button>

      <Header />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Internship />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
