import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import InteractiveTerminal from './components/InteractiveTerminal';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import { Terminal as TerminalIcon } from 'lucide-react';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('theme-cyan');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className={`app-wrapper ${theme}`}>
      {/* Interactive Canvas Background */}
      <ParticleBackground />

      {/* Smooth Trailing Glow Cursor */}
      <CustomCursor />

      {/* Header & Navigation */}
      <Navbar currentTheme={theme} onThemeChange={setTheme} />

      {/* Main Content Sections */}
      <main className="main-content">
        <HeroSection />

        <ProjectsSection />

        <SkillsSection />

        {/* Terminal Interactive Section */}
        <section id="terminal" className="terminal-section">
          <div className="section-container">
            <div className="section-header-centered">
              <div className="section-subtitle-pill">
                <TerminalIcon size={14} />
                <span>Interaktiv Konsol</span>
              </div>
              <h2 className="section-main-title">
                Dasturchi <span className="gradient-text">Terminali & Kodi</span>
              </h2>
              <p className="section-desc">
                Buyruqlar yozing, profil konfiguratsiyasini ko'ring yoki JSON formatida nusxalab oling.
              </p>
            </div>

            <InteractiveTerminal />
          </div>
        </section>

        <ExperienceSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
