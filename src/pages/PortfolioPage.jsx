import React from "react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import "./PortfolioPage.css";

const PortfolioPage = () => {
  return (
    <section className="portfolio-page">
     
      <div className="portfolio-header">
        <span className="portfolio-label">PORTFOLIO</span>

        <h1 className="portfolio-title">Selected Projects</h1>

        <p className="portfolio-subtitle">
          A collection of web applications, real-time systems and Android
          projects I've built over the years.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="back-home-container">
        <Link to="/" className="back-home-btn">
          ← Back To Home
        </Link>
      </div>
    </section>
  );
};

export default PortfolioPage;
