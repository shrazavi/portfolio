import CustomCursor from "../components/CustomCursor/CustomCursor";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetail.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const project = projects.find((p) => p.id === id);
  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % project.screenshots.length);
  };
useEffect(() => {
  const handleKeyDown = (e) => {
    if (selectedIndex === null) return;

    if (e.key === "Escape") {
      setSelectedIndex(null);
    }

    if (e.key === "ArrowRight") {
      setSelectedIndex(
        (prev) => (prev + 1) % project.screenshots.length
      );
    }

    if (e.key === "ArrowLeft") {
      setSelectedIndex(
        (prev) =>
          prev === 0
            ? project.screenshots.length - 1
            : prev - 1
      );
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () =>
    window.removeEventListener("keydown", handleKeyDown);
}, [selectedIndex, project]);
  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1,
    );
  };
  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return (
    <section className="project-details">
  
      <div className="project-hero">
        <img src={project.image} alt={project.title} className="hero-image" />
      </div>

      <div className="project-container">
        <span className="project-category">{project.category}</span>

        <h1 className="project-heading">{project.title}</h1>

        <p className="project-overview">{project.fullDescription}</p>

        <div className="project-links">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Live Demo
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Github
          </a>
        </div>

        <div className="divider" />

        <h2>Tech Stack</h2>

        <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {project.screenshots?.length > 0 && (
          <>
            <div className="divider" />

            <h2>Screenshots</h2>

            <div className="screenshots-grid">
              {project.screenshots.map((image, index) => (
                <div
                  key={index}
                  className="screenshot-card"
                  onClick={() => setSelectedIndex(index)}
                >
                  <img src={image} alt={`Screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          </>
        )}

        <div className="divider" />

        <Link to="/#projects" className="back-link">
          ← Back To Projects
        </Link>
      </div>
      {selectedIndex !== null && (
        
        <div className="image-modal" onClick={() => setSelectedIndex(null)}>
          <CustomCursor />
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button
              className="close-modal"
              onClick={() => setSelectedIndex(null)}
            >
              ✕
            </button>

            <button className="nav-btn left" onClick={prevImage}>
              ❮
            </button>

            <img
              src={project.screenshots[selectedIndex]}
              alt="Project Screenshot"
            />
            <div className="image-counter">
              {selectedIndex + 1} / {project.screenshots.length}
            </div>
            <button className="nav-btn right" onClick={nextImage}>
              ❯
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;
