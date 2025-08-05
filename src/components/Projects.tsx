
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder for projects */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Project 1</h3>
          <p>A brief description of the project.</p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Project 2</h3>
          <p>A brief description of the project.</p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Project 3</h3>
          <p>A brief description of the project.</p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
