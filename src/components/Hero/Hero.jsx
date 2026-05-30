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

            <h1 className="hero-title">
              Building premium digital experiences with
              <span className="gradient-text"> React & Node.js. </span>
            </h1>

            <p className="hero-description">
              I create responsive web applications, real-time systems and modern
              user interfaces focused on performance and user experience.
            </p>

            {/* BUTTONS */}

            <div className="hero-buttons">
              <a href="#projects" className="hero-primary-btn">
                View Projects
              </a>

              <a
                href="https://api.cloudinary.com/v1_1/dwuhamihv/image/download?api_key=626134544524892&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiNjI0NGMxMzdiZTJkZTFkMjYwNjg4Y2QxYWY3NTZkODIiLCJ1c2VyX2V4dGVybmFsX2lkIjoiYWZkYTA4OTA2YmM5YjVmYTdkNmIwYWE2YTU5NGQ0IiwidXNlcl9jdXN0b21faWQiOiJzaHJhemF2aTExMEBnbWFpbC5jb20iLCJjb21wb25lbnQiOiJjb25zb2xlIn0%3D&public_id=download_2_arbamp&signature=5a532da8df07a1af1da25e718f70c22afe4ab3f9&source=ml&target_filename=download_2_arbamp&timestamp=1780145670&type=upload"
                className="hero-secondary-btn"
              >
                Download Resume
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
                src="https://res.cloudinary.com/dwuhamihv/image/upload/v1780150287/hero-mockup_ghnqcv.png"
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
