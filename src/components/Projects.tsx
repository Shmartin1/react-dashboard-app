import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import PageHeading from './PageHeading';
import ProjectArtwork from './ProjectArtwork';
import Reveal from './Reveal';

const Projects: React.FC = () => (
  <div className="page-shell">
    <div className="app-main">
      <PageHeading eyebrow="Selected work" title="Personal Projects" />
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 60}>
            <div className="content-card project-card">
              <ProjectArtwork kind={project.artwork} />
              <div className="project-details">
                <p className="eyebrow">{project.category}</p>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.technologies.map(tech => <span key={tech} className="pill-label">{tech}</span>)}</div>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`View ${project.title} on GitHub`}><Github size={17} aria-hidden="true" />View on GitHub<ArrowUpRight size={18} aria-hidden="true" /></a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
