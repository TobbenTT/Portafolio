import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Certificates from './components/Certificates'
import Philosophy from './components/Philosophy'
import Timeline from './components/Timeline' // Imported
import ContactCTA from './components/ContactCTA' // Imported
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="container">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <Philosophy />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <TechStack />
        </ScrollReveal>
        <ScrollReveal>
          <Certificates />
        </ScrollReveal>
        <ScrollReveal>
          <Timeline />
        </ScrollReveal>
        <ScrollReveal>
          <ContactCTA />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}

export default App
