import React from 'react';

const Project = ({ title, summary, technologies, role, features, screenshot }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{summary}</p>
      <p>Technologies used: {technologies}</p>
      <p>Role: {role}</p>
      <p>Key features: {features}</p>
      <img src={screenshot} alt="Project Screenshot" />
    </div>
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'PawMeets',
      summary: '',
      technologies: 'React, Node.js, MongoDb, Express',
      role: 'Backend Developer',
      features: 'Built Api, Developed logos and assisted on Frontend',
      screenshot: 
    },
    
  ];

  return (
    <div className="project-showcase">
      {projects.map(project => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
};

export default ProjectShowcase;
