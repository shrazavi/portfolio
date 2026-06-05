import React from "react";
import "./FeaturedProjects.css";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";

const FeaturedProjects = () => {
  const visibleProjects = projects.slice(0, 3);
  return (
    <section className="featured-projects-section" id="projects">
      <span className="label">FEATURED WORK</span>
      <div className="view-all-container">
        <Link to="/portfolio" className="view-all-btn">
          View All Projects
        </Link>
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
