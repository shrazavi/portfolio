const ProjectCard = () => {
  return (
    <div className="project-card">
       
      <div className="row align-items-center">
        <div className="col-lg-7">
          <img
            src="/assets/projects/store.jpg"
            className="img-fluid project-image"
            alt="project"
          />
        </div>

        <div className="col-lg-5">
          <span className="project-category">Featured Project</span>

          <h2 className="project-title">E-Commerce Platform</h2>

          <p className="project-description">
            A modern multi-vendor e-commerce platform built with React and
            Node.js featuring advanced filtering, responsive design and seller
            dashboard.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
