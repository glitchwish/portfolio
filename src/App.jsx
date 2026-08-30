import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Loader from './components/loader';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import './App.css';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [pageLoading, setPageLoading] = useState(() => document.readyState !== 'complete');
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    const finishLoading = () => {
      document.getElementById('initial-loader')?.remove();
      setPageLoading(false);
    };

    if (document.readyState === 'complete') finishLoading();
    else window.addEventListener('load', finishLoading, { once: true });

    return () => window.removeEventListener('load', finishLoading);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <>
      <AnimatePresence>{pageLoading && <Loader />}</AnimatePresence>

      <main className="min-h-screen bg-white text-black">
        <Navbar isDarkMode={isDarkMode} onThemeChange={setIsDarkMode} />
        <Hero />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Research />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
