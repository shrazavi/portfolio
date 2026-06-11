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
              Full-Stack Developer building scalable products from idea to
              production.
            </h2>

            <p className="about-description">
              Hi, I'm Hossein Razavi, a Full-Stack Developer specializing in
              React, Node.js, MERN Stack, WebRTC and scalable real-time
              applications. Over the past several years, I've built marketplace
              platforms, telemedicine solutions, educational products and
              scheduling systems — taking products from concept and MVP to
              production-ready applications. My experience spans the entire
              software development lifecycle, including requirements analysis,
              system architecture, implementation, deployment and continuous
              improvement. I have hands-on experience developing multi-vendor
              marketplaces, healthcare applications with real-time
              communication, Android educational games, and startup MVPs using
              technologies such as React.js, Node.js, Express.js, MongoDB,
              MySQL, WebRTC and REST APIs. What differentiates me is my ability
              to combine technical execution with product thinking. I enjoy
              solving complex problems, designing scalable architectures and
              building software that delivers measurable value to users and
              businesses.
            </p>

            <p className="about-description">
              Core expertise: React.js, Node.js, TypeScript, MongoDB, MySQL,
              WebRTC, REST APIs, Android Development and scalable application
              architecture.
            </p>

            {/* STATS */}

            <div className="about-stats">
              <div className="about-stat-item">
                <h3>5+</h3>

                <span>Years Experience</span>
              </div>

              <div className="about-stat-item">
                <h3>10+</h3>

                <span>Projects Built</span>
              </div>

              <div className="about-stat-item">
                <h3>20+</h3>

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
                <h3>Clean Architecture</h3>

                <p>Designing maintainable and scalable software systems.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FaLaptopCode />
              </div>

              <div>
                <h3>Product Ownership</h3>

                <p>
                  From idea validation and MVP delivery to production
                  deployment.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FaLayerGroup />
              </div>

              <div>
                <h3>Real-Time Systems</h3>

                <p>
                  Building communication platforms with WebRTC and modern APIs.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-icon">
                <FaRocket />
              </div>

              <div>
                <h3>Business Impact</h3>

                <p>
                  Creating products that solve real user problems and support
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
