import { useState } from 'react';
import { Mail, Send, MessageSquare, Copy, Check, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import GithubIcon from './GithubIcon';
import confetti from 'canvas-confetti';
import TiltCard from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { playClick, playSuccess } from '../utils/soundFx';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    playSuccess();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    playSuccess();
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-centered">
          <div className="section-subtitle-pill">
            <Mail size={14} />
            <span>Bog'lanish</span>
          </div>
          <h2 className="section-main-title">
            Keling, Birga <span className="gradient-text">Ajoyib Loyiha</span> Yaratamiz!
          </h2>
          <p className="section-desc">
            Savollaringiz bormi yoki yangi veb-ilova bo'yicha hamkorlik qilmoqchimisiz?
            Menga xabar yozing yoki to'g'ridan-to'g'ri bog'laning.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Quick Connect Cards */}
          <div className="contact-info-col">
            {/* Email Card */}
            <TiltCard className="contact-card glass-panel" maxTilt={10}>
              <div className="contact-card-icon email-icon">
                <Mail size={22} />
              </div>
              <div className="contact-card-info">
                <h4 className="contact-card-title">Elektron Pochta</h4>
                <p className="contact-card-value">{portfolioData.personal.email}</p>
              </div>
              <button
                type="button"
                className="copy-chip-btn"
                onClick={handleCopyEmail}
                title="Pochtani nusxalash"
              >
                {copiedEmail ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Nusxalandi!' : 'Nusxa olish'}</span>
              </button>
            </TiltCard>

            {/* GitHub Card */}
            <TiltCard className="contact-card glass-panel" maxTilt={10}>
              <div className="contact-card-icon github-icon">
                <GithubIcon size={22} />
              </div>
              <div className="contact-card-info">
                <h4 className="contact-card-title">GitHub Profil</h4>
                <p className="contact-card-value">@{portfolioData.personal.githubUsername}</p>
              </div>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-card-action"
                onClick={playClick}
              >
                <span>Profilga o'tish</span>
              </a>
            </TiltCard>

            {/* Telegram Card */}
            <TiltCard className="contact-card glass-panel" maxTilt={10}>
              <div className="contact-card-icon telegram-icon">
                <MessageSquare size={22} />
              </div>
              <div className="contact-card-info">
                <h4 className="contact-card-title">Telegram Aloqa</h4>
                <p className="contact-card-value">@yahyorustamjonov</p>
              </div>
              <a
                href={portfolioData.personal.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-card-action"
                onClick={playClick}
              >
                <span>Xabar yozish</span>
              </a>
            </TiltCard>

            {/* Location & Status Card */}
            <div className="location-status-card glass-panel">
              <div className="loc-row">
                <MapPin size={18} color="#00f2fe" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="loc-status-pill">
                <span className="pill-dot-pulse" />
                <span>{portfolioData.personal.status}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <TiltCard className="contact-form-card glass-panel" maxTilt={6}>
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={48} color="#10b981" />
                  </div>
                  <h3 className="success-title">Xabaringiz Qabul Qilindi!</h3>
                  <p className="success-desc">
                    Rahmat, {formData.name || "do'stim"}! Tez orada siz bilan bog'lanaman.
                  </p>
                  <div className="success-confetti-badge">
                    <Sparkles size={16} />
                    <span>Konfetti yuborildi!</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-heading">Menga Xabar Yuboring</h3>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Ismingiz
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Masalan: Sardor Aliyev"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email manzilingiz yoki Telegram
                    </label>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      required
                      placeholder="Masalan: sardor@example.com yoki @sardor_dev"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Loyiha yoki xabar mazmuni
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Assalomu alaykum Yahyo, bizga yangi veb sayt kerak edi..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    onClick={playClick}
                  >
                    <span>Xabarni Yuborish</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
