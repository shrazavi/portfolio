import { Link } from "react-router-dom";
import "./ProjectCard.css";
const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="project-link">
      <div className="project-card">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <div className="project-content">
          <span className="project-category">{project.category}</span>

          <h3 className="project-title">{project.title}</h3>

          <p className="project-description">{project.shortDescription}</p>

          <div className="tech-stack">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
