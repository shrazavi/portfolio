import React from "react";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* BACKGROUND GLOW */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container-custom">
        <div className="hero-layout">
          {/* LEFT CONTENT */}

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="hero-label">FULL STACK DEVELOPER</span>
            <img
              src="https://res.cloudinary.com/dwuhamihv/image/upload/v1781138601/profile_2_juvxg9.jpg"
              alt="Hossein Razavi - Full-Stack Developer"
              className="hero-profile"
            />
            <h1 className="hero-title">
              Hossein Razavi
              <br />
              <span>Full-Stack Developer</span>
              <br />
              <span className="gradient-text">
                React • Node.js • Real-Time Systems
              </span>
            </h1>

            <p className="hero-description">
              Full-Stack Developer building scalable products from idea to
              production. I specialize in React, Node.js and real-time systems,
              with hands-on experience delivering marketplace, healthcare and
              educational applications used in real-world scenarios.
            </p>

            {/* BUTTONS */}

            <div className="hero-buttons">
              <a href="#projects" className="hero-primary-btn">
                View Projects
              </a>

              <a href="#contact" className="hero-secondary-btn">
                Contact Me
              </a>
            </div>

            {/* SOCIALS */}

            <div className="hero-socials">
              <a href="https://github.com/shrazavi">
                <FaGithub />
              </a>

              <a href="https://linkedin.com/in/hossein-razavi">
                <FaLinkedinIn />
              </a>

              <a href="https://t.me/Shrazavi510">
                <FaTelegramPlane />
              </a>
            </div>
          </motion.div>

          {/* RIGHT MOCKUP */}

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mockup-wrapper">
              <div className="mockup-glow"></div>

              <motion.img
                animate={{
                  y: [0, -18, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="https://res.cloudinary.com/dwuhamihv/image/upload/v1780152365/hero-mockup.png_h8qgot.png"
                alt="mockup"
                className="hero-mockup"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <div className="scroll-indicator">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path d="M0 0h36v36H0z" fill="none" />
            <path
              stroke="#7c3aed"
              fill="currentColor"
              d="M18 34A10 10 0 0 1 8 24V12a10 10 0 0 1 20 0v12a10 10 0 0 1-10 10m0-30a8 8 0 0 0-8 8v12a8 8 0 0 0 16 0V12a8 8 0 0 0-8-8"
              class="clr-i-outline clr-i-outline-path-1"
            />
            <path
              stroke="#7c3aed"
              fill="currentColor"
              d="M18 15a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
              class="clr-i-outline clr-i-outline-path-2"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7c3aed"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mouse-icon lucide-mouse"
          >
            <rect x="5" y="2" width="14" height="20" rx="7" />
            <path d="M12 6v4" />
          </svg> */}
        </span>
      </div>
    </section>
  );
};

export default Hero;
