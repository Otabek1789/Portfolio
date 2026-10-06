import { Code2, Sparkles, Wrench, Smartphone, CheckCircle } from 'lucide-react';
import TiltCard from './TiltCard';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Sparkles: Sparkles,
  Wrench: Wrench,
  Smartphone: Smartphone
};

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-centered">
          <div className="section-subtitle-pill">
            <Code2 size={14} />
            <span>Texnologik Stack</span>
          </div>
          <h2 className="section-main-title">
            Ko'nikmalar & <span className="gradient-text">Texnologiyalar</span>
          </h2>
          <p className="section-desc">
            Har bir interfeysni tezkor, silliq va ishonchli qiluvchi zamonaviy vositalar va bilimlar.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="skills-grid">
          {portfolioData.skillCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <TiltCard key={idx} className="skill-category-card glass-panel" maxTilt={8}>
                <div className="category-header-row">
                  <div className="category-icon-box">
                    <IconComponent size={22} color="#00f2fe" />
                  </div>
                  <div>
                    <h3 className="category-title">{cat.name}</h3>
                    <p className="category-desc">{cat.description}</p>
                  </div>
                </div>

                <div className="skills-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item-row">
                      <div className="skill-info-top">
                        <div className="skill-name-wrap">
                          <CheckCircle size={14} className="skill-check-icon" />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="progress-bar-bg">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <span className="skill-note">{skill.note}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Floating Tech Badges Marquee */}
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track">
            {[
              "React 19", "JavaScript (ES6+)", "Vite 8", "HTML5 Semantics",
              "CSS3 Animations", "3D Tilt Effects", "Web Audio API", "Vercel Deploy",
              "Git / GitHub", "Responsive Design", "Glassmorphism", "Canvas Particles"
            ].map((tech, i) => (
              <span key={i} className="marquee-chip">
                ⚡ {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
