import { ExternalLink, Eye, Sparkles } from 'lucide-react';
import GithubIcon from './GithubIcon';
import TiltCard from './TiltCard';
import { playClick } from '../utils/soundFx';

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <TiltCard className="project-card interactive-card">
      <div
        className="card-glow-bg"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.accentColor}25 0%, transparent 70%)`
        }}
        aria-hidden="true"
      />

      {/* Card Header & Badge */}
      <div className="card-top-row">
        <span
          className="project-badge"
          style={{
            borderColor: `${project.accentColor}40`,
            color: project.accentColor
          }}
        >
          <Sparkles size={12} />
          {project.badge}
        </span>
        <span className="project-category-tag">{project.categoryName}</span>
      </div>

      {/* Title & Tagline */}
      <div className="card-content">
        <h3 className="project-title" style={{ '--project-accent': project.accentColor }}>
          {project.title}
        </h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-description">{project.description}</p>
      </div>

      {/* Tech Stack Pills */}
      <div className="tech-stack-container">
        {project.tech.map((t, idx) => (
          <span key={idx} className="tech-chip">
            {t}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="card-actions">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn primary-action"
            onClick={playClick}
            style={{
              '--btn-accent': project.accentColor
            }}
          >
            <span>Jonli Sayt</span>
            <ExternalLink size={14} />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn secondary-action"
            onClick={playClick}
            title="GitHub Repositoriyasini ko'rish"
          >
            <GithubIcon size={15} />
            <span>Kod</span>
          </a>
        )}

        <button
          type="button"
          className="action-btn info-action"
          onClick={() => {
            playClick();
            onOpenDetails(project);
          }}
          title="Tafsilotlar"
        >
          <Eye size={15} />
        </button>
      </div>
    </TiltCard>
  );
}
