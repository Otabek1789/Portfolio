import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Globe, Layers } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { playClick } from '../utils/soundFx';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container glass-panel"
        onClick={(e) => e.stopPropagation()}
        style={{ '--modal-accent': project.accentColor }}
      >
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={() => {
            playClick();
            onClose();
          }}
          aria-label="Yopish"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge-row">
            <span
              className="modal-badge"
              style={{
                borderColor: `${project.accentColor}50`,
                color: project.accentColor
              }}
            >
              {project.badge}
            </span>
            <span className="modal-category">{project.categoryName}</span>
          </div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-tagline">{project.tagline}</p>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-desc-box">
            <h4 className="modal-subheading">Loyiha haqida batafsil</h4>
            <p>{project.description}</p>
          </div>

          <div className="modal-highlights">
            <h4 className="modal-subheading">Asosiy imkoniyatlar & arxitektura</h4>
            <ul className="highlights-list">
              <li>
                <CheckCircle2 size={16} color={project.accentColor} />
                <span>Moslashuvchan (Responsive) zamonaviy interfeys va silliq foydalanuvchi tajribasi</span>
              </li>
              <li>
                <CheckCircle2 size={16} color={project.accentColor} />
                <span>Toza va tushunarli komponent arxitekturasi</span>
              </li>
              <li>
                <CheckCircle2 size={16} color={project.accentColor} />
                <span>Vercel platformasida avtomatlashtirilgan CI/CD va yuqori yuklanish tezligi</span>
              </li>
              <li>
                <CheckCircle2 size={16} color={project.accentColor} />
                <span>Zamonaviy CSS effektlari va optimal render holatlari</span>
              </li>
            </ul>
          </div>

          <div className="modal-tech-section">
            <h4 className="modal-subheading">
              <Layers size={16} /> Qo'llanilgan texnologiyalar
            </h4>
            <div className="modal-tech-list">
              {project.tech.map((item, idx) => (
                <span key={idx} className="tech-chip highlighted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={playClick}
            >
              <Globe size={16} />
              <span>Jonli Saytni Ochish</span>
              <ExternalLink size={15} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              onClick={playClick}
            >
              <GithubIcon size={16} />
              <span>GitHub Kodini Ko'rish</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
