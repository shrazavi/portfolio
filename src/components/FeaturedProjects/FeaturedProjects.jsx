import React from "react";
import "./FeaturedProjects.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Featured Project",
    description:
      "A modern multi-vendor e-commerce platform with responsive design, advanced filtering and seller dashboard.",
    image:"https://res.cloudinary.com/dwuhamihv/image/upload/v1780149078/market_geleh3.png",
    technologies: ["React", "Node.js", "MongoDB"],
    reverse: false,
  },

  {
    id: 2,
    title: "Voice & Video Chat App",
    category: "Real-Time System",
    description:
      "Real-time communication application using WebRTC and Socket.io with encrypted messaging support.",
    image: "https://res.cloudinary.com/dwuhamihv/image/upload/v1780149074/darmano_ddripd.png",
    technologies: ["WebRTC", "Socket.io", "Node.js"],
    reverse: true,
  },

  {
    id: 3,
    title: "Math Learning Game",
    category: "Android Application",
    description:
      "Interactive math learning game designed for elementary school students using gamification concepts.",
    image: "https://res.cloudinary.com/dwuhamihv/image/upload/v1780149024/game_mtyoom.png",
    technologies: ["Android", "Java", "Gamification"],
    reverse: false,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects-section" id="projects">
      <span className="label">FEATURED WORK</span>
      {/* <div dir="rtl">
        <button className="resume-button">➜ View All Project </button>
      </div> */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card">
            <img src={project.image} className="project-image" />

            <div className="project-content">
              <span className="project-category">{project.category}</span>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
