import { useState } from 'react';
import { Sparkles, ExternalLink, Filter } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { playClick } from '../utils/soundFx';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (catId) => {
    playClick();
    setActiveCategory(catId);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-subtitle-pill">
            <Sparkles size={14} />
            <span>Tanlangan Ishlar</span>
          </div>
          <h2 className="section-main-title">
            Mening <span className="gradient-text">Jonli Loyihalarim</span>
          </h2>
          <p className="section-desc">
            Har bir loyiha noldan yaratilgan, toza arxitektura va Vercel platformasida jonli
            ishlaydi. Kod va jonli ko'rinish bilan tanishing.
          </p>

          {/* Category Filter Tabs */}
          <div className="category-filter-tabs">
            {portfolioData.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <span>{cat.name}</span>
                {cat.id === 'all' && (
                  <span className="count-badge">{portfolioData.projects.length}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>

        {/* GitHub External Banner */}
        <div className="github-explore-banner glass-panel">
          <div className="gh-banner-left">
            <div className="gh-banner-icon">
              <GithubIcon size={28} />
            </div>
            <div>
              <h3 className="gh-banner-title">
                GitHub'da yana 15+ ta ochiq kodli loyihalar bor!
              </h3>
              <p className="gh-banner-subtitle">
                Otabek1789 akkauntidagi barcha repozitoriyalar, o'rganish materiallari va kod bazasi.
              </p>
            </div>
          </div>

          <a
            href={portfolioData.personal.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={playClick}
          >
            <span>GitHub Repolarga O'tish</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
