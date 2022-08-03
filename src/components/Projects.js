import React from "react";
import '../App.css';
import projectsData from "./data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="project-section">
      <h3>Projects</h3>
      <div className="project-map">
        {
          projectsData.map((proj) => (
            <ProjectCard proj={proj} key={proj.id} />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;