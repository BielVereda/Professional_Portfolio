import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Volunteering from './components/Volunteering';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer para animações de seção
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observar todas as seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    const handleScroll = () => {
      const sectionIds = ['home', 'story', 'education', 'skills', 'projects', 'certificates', 'volunteering', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={`min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#070b14] to-slate-900"></div>
      </div>

      <Header setMobileOpen={setMobileOpen} />
      <Navbar activeSection={activeSection} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main className="max-w-6xl mx-auto px-6 pt-24 lg:pt-28 lg:pr-24 space-y-28">
        <Hero />
        <Story />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Volunteering />
        <Footer />
      </main>
    </div>
  );
}