import React from "react";

import { FaCode, FaLaptopCode, FaLayerGroup, FaRocket } from "react-icons/fa";

import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-glow"></div>

      <div className="container-custom">
        <div className="about-layout">
          {/* LEFT */}

          <div className="about-left">
            <span className="about-label">ABOUT ME</span>

            <h2 className="about-title">
              Passionate developer crafting modern digital experiences.
            </h2>

            <p className="about-description">
              I’m a full stack developer focused on building scalable web
              applications, realtime systems and modern user interfaces. I enjoy
              transforming ideas into premium digital products with clean
              architecture and smooth user experiences.
            </p>

            <p className="about-description">
              My experience includes React.js, Node.js, MongoDB, MySQL, WebRTC
              and realtime communication systems.
            </p>

            {/* STATS */}

            <div className="about-stats">
              <div className="about-stat-item">
                <h3>4+</h3>

                <span>Years Experience</span>
              </div>

              <div className="about-stat-item">
                <h3>20+</h3>

                <span>Projects Built</span>
              </div>

              <div className="about-stat-item">
                <h3>10+</h3>

                <span>Technologies</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="about-right">
            <div className="about-card">
              <div className="about-card-icon">
                <FaCode />
              </div>

              <div>
                <h3>Clean Code</h3>

                <p>Scalable architecture and reusable components.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FaLaptopCode />
              </div>

              <div>
                <h3>Full Stack Development</h3>

                <p>Frontend, backend and realtime systems.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FaLayerGroup />
              </div>

              <div>
                <h3>Modern UI/UX</h3>

                <p>Responsive premium interfaces and smooth interactions.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FaRocket />
              </div>

              <div>
                <h3>Performance Focused</h3>

                <p>Optimized applications with modern technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
