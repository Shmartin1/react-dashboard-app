import React from 'react';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Personal Portfolio Dashboard",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dynamic dashboard showcasing various widgets including real-time statistics, task management, weather updates, and activity tracking. Implements dark mode theming and responsive design patterns.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      githubUrl: "https://github.com/Shmartin1/react-dashboard-app"
    },
    {
      title: "Frontend Interview Practice",
      description: "A comprehensive collection of practice interview questions focused on frontend UI implementation using vanilla JavaScript, HTML, and CSS. This project serves as both a learning resource and a practical demonstration of fundamental web development concepts without relying on modern frameworks.",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Shmartin1/frontend-practice"
    },
    {
      title: "AI Roast App",
      description: "A unique mobile application that combines image processing with AI to generate humorous roasts based on user-uploaded photos. This project demonstrates integration of AI services with mobile development technologies for an entertaining user experience.",
      technologies: ["React Native", "AWS S3", "AWS Rekognition", "ChatGPT", "TypeScript"],
      githubUrl: "https://github.com/Shmartin1/ai-roast-app"
    }
  ];

  return (
    <div className="page-shell">
      <div className="app-main space-y-8">
        <div>
          <p className="page-eyebrow">Selected Work</p>
          <h1 className="page-title">
            Personal Projects
          </h1>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="flex items-start justify-between gap-4">
                <h2 className="project-title">
                  {project.title}
                </h2>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <Github size={24} />
                </a>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="pill-label"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
