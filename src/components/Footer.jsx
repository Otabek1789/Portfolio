import { useState, useEffect } from 'react';
import { ArrowUp, Heart, Terminal, Sparkles, Clock } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { portfolioData } from '../data/portfolioData';
import { playClick } from '../utils/soundFx';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('uz-UZ', {
          timeZone: 'Asia/Tashkent',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="section-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="brand-logo-text">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">Yahyo</span>
              <span className="logo-dot">.</span>
              <span className="logo-ext">dev</span>
              <span className="logo-bracket"> /&gt;</span>
            </div>
            <p className="footer-motto">
              "{portfolioData.personal.quote}"
            </p>
          </div>

          <div className="footer-time-box glass-panel">
            <Clock size={16} color="#00f2fe" />
            <span className="time-label">Toshkent vaqti (UTC+5):</span>
            <span className="time-val">{time || '19:45'}</span>
          </div>

          <button
            type="button"
            className="scroll-top-btn glass-panel"
            onClick={scrollToTop}
            title="Yuqoriga qaytish"
            aria-label="Yuqoriga qaytish"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-bottom-divider" />

        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. Barcha huquqlar himoyalangan.
          </p>

          <div className="footer-tech-note">
            <span>React 19 &bull; Vite &bull; Vanilla Modern CSS bilan yaratildi</span>
          </div>

          <div className="footer-social-links">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
