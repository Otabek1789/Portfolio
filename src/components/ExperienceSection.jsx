import { Calendar, Briefcase, ChevronRight, Award } from 'lucide-react';
import TiltCard from './TiltCard';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-centered">
          <div className="section-subtitle-pill">
            <Award size={14} />
            <span>Yo'l Xaritasi</span>
          </div>
          <h2 className="section-main-title">
            Tajriba & <span className="gradient-text">Rivojlanish Yo'li</span>
          </h2>
          <p className="section-desc">
            Har bir bosqich yangi bilimlar, chuqur amaliyot va mustahkam loyihalar bilan to'ldirilgan.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-line-glow" aria-hidden="true" />

          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
              </div>

              <TiltCard className="timeline-content-card glass-panel" maxTilt={6}>
                <div className="timeline-meta-row">
                  <span className="timeline-badge">
                    <Calendar size={13} />
                    {exp.year}
                  </span>
                  <span className="timeline-location">
                    <Briefcase size={13} />
                    {exp.place}
                  </span>
                </div>

                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-description">{exp.description}</p>

                <div className="timeline-tags">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="timeline-tag">
                      <ChevronRight size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
