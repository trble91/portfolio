import React from 'react';

const TechnologyStack = () => {
  const technologies = [
    'React',
    'Node.js',
    'Express',
    // Add more technologies here...
  ];

  return (
    <div className="technology-stack">
      <h3>Technology Stack</h3>
      <ul>
        {technologies.map(technology => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologyStack;
