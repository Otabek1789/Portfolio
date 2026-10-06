import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code, Globe, Zap, Send, ShieldCheck } from 'lucide-react';
import GithubIcon from './GithubIcon';
import TiltCard from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { playClick } from '../utils/soundFx';

const ROLES = [
  "React Developer",
  "Creative Frontend Engineer",
  "UI/UX Animatsiya Ustasi",
  "Web Performance Enthusiast"
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayText !== currentFullRole) {
      timeout = setTimeout(() => {
        setDisplayText(currentFullRole.slice(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText === currentFullRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText !== '') {
      timeout = setTimeout(() => {
        setDisplayText(currentFullRole.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    playClick();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow-orb top-left" aria-hidden="true" />
      <div className="hero-glow-orb bottom-right" aria-hidden="true" />

      <div className="hero-layout">
        {/* Left Column: Intro & Headline */}
        <div className="hero-content">
          {/* Top Status Pill */}
          <div className="hero-pill-badge">
            <span className="pill-dot-pulse" />
            <span className="pill-text">
              ✨ Dasturchi &bull; Toshkent, O'zbekiston &bull; Ish uchun ochiq
            </span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            Salom, men <br />
            <span className="gradient-text hero-name">{portfolioData.personal.name}</span>
          </h1>

          {/* Typewriter Subtitle */}
          <div className="hero-typewriter-container">
            <span className="typewriter-prefix">Men </span>
            <span className="typewriter-text">{displayText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <p className="hero-bio">
            {portfolioData.personal.bio}
          </p>

          {/* Legendary Gojo Quote Banner */}
          <div className="hero-quote-card">
            <div className="quote-icon-col">
              <Zap size={18} color="#00f2fe" />
            </div>
            <div className="quote-text-col">
              <span className="quote-phrase">"{portfolioData.personal.quote}"</span>
              <span className="quote-author">— Gojo Satoru &bull; @{portfolioData.personal.githubUsername}</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary hero-btn"
              onClick={() => scrollToSection('#projects')}
            >
              <span>Loyihalarni Ko'rish</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero-btn"
              onClick={playClick}
            >
              <GithubIcon size={18} />
              <span>GitHub Profilim</span>
            </a>

            <button
              type="button"
              className="btn btn-outline hero-btn"
              onClick={() => scrollToSection('#contact')}
            >
              <Send size={16} />
              <span>Aloqaga Chiqish</span>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats-row">
            {portfolioData.stats.map((stat, i) => (
              <div key={i} className="hero-stat-item">
                <span className="stat-number gradient-text">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Holographic Avatar Card */}
        <div className="hero-visual-col">
          <TiltCard className="hero-avatar-card glass-panel" maxTilt={14} scale={1.03}>
            {/* Holographic Glowing Ring */}
            <div className="avatar-ring-outer">
              <div className="avatar-ring-inner">
                <img
                  src={portfolioData.personal.avatarUrl}
                  alt={portfolioData.personal.name}
                  className="hero-avatar-img"
                  loading="eager"
                />
              </div>
            </div>

            {/* Avatar Floating Name & Role */}
            <div className="avatar-details">
              <h2 className="avatar-name">{portfolioData.personal.name}</h2>
              <p className="avatar-handle">@{portfolioData.personal.githubUsername}</p>
              <div className="avatar-tags">
                <span className="avatar-tag">
                  <Code size={13} /> Frontend
                </span>
                <span className="avatar-tag">
                  <Globe size={13} /> React.js
                </span>
                <span className="avatar-tag verified">
                  <ShieldCheck size={13} /> Vercel Live
                </span>
              </div>
            </div>

            {/* Floating Orbit Badges */}
            <div className="floating-badge badge-react">
              <span className="badge-glow" />
              <span>⚛️ React 19</span>
            </div>

            <div className="floating-badge badge-code">
              <span>⚡ Vite 8</span>
            </div>

            <div className="floating-badge badge-projects">
              <Sparkles size={14} color="#f59e0b" />
              <span>8+ Jonli Sayt</span>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
