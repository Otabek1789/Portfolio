import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Terminal, Sparkles, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { toggleSound, isSoundEnabled, playClick } from '../utils/soundFx';

export default function Navbar({ currentTheme, onThemeChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
  };

  const navLinks = [
    { label: 'Asosiy', href: '#hero' },
    { label: 'Loyihalar', href: '#projects' },
    { label: 'Ko\'nikmalar', href: '#skills' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Tajriba', href: '#experience' },
    { label: 'Aloqa', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo / Brand */}
        <a
          href="#hero"
          className="brand-logo"
          onClick={() => handleNavClick('#hero')}
        >
          <div className="brand-logo-icon">
            <Terminal size={18} />
          </div>
          <div className="brand-logo-text">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Yahyo</span>
            <span className="logo-dot">.</span>
            <span className="logo-ext">dev</span>
            <span className="logo-bracket"> /&gt;</span>
          </div>
          <span className="live-status-indicator" title="Ish uchun mavjud">
            <span className="status-pulse" />
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action Controls */}
        <div className="nav-controls">
          {/* Sound FX Toggle */}
          <button
            type="button"
            className="control-icon-btn"
            onClick={handleSoundToggle}
            title={soundOn ? "Ovoz effektlarini o'chirish" : "Ovoz effektlarini yoqish"}
            aria-label="Ovoz sozlamasi"
          >
            {soundOn ? <Volume2 size={18} color="#00f2fe" /> : <VolumeX size={18} color="#94a3b8" />}
          </button>

          {/* Theme Palette Switcher */}
          <div className="theme-switcher" title="Mavzuni almashtirish">
            <button
              type="button"
              className={`theme-dot cyan ${currentTheme === 'theme-cyan' ? 'active' : ''}`}
              onClick={() => {
                playClick();
                onThemeChange('theme-cyan');
              }}
              aria-label="Cyan mavzusi"
            />
            <button
              type="button"
              className={`theme-dot purple ${currentTheme === 'theme-purple' ? 'active' : ''}`}
              onClick={() => {
                playClick();
                onThemeChange('theme-purple');
              }}
              aria-label="Purple mavzusi"
            />
            <button
              type="button"
              className={`theme-dot emerald ${currentTheme === 'theme-emerald' ? 'active' : ''}`}
              onClick={() => {
                playClick();
                onThemeChange('theme-emerald');
              }}
              aria-label="Emerald mavzusi"
            />
          </div>

          {/* Contact Direct CTA Button */}
          <a
            href="#contact"
            className="btn btn-nav-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
          >
            <span>Bog'lanish</span>
            <Send size={14} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  <Sparkles size={16} />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary full-width"
            >
              GitHub Profilim (@Otabek1789)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
