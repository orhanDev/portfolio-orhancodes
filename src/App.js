import React from 'react';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import i18n from './i18n';

function App() {
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <MyNavbar onLanguageChange={handleLanguageChange} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
