import React from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaArrowUp,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>

      <div className="container-custom">
        {/* TOP */}

        <div className="footer-top">
          {/* LEFT */}

          <div className="footer-brand">
            <h2>Hossein Razavi</h2>

            <p>
              Full stack developer focused on creating premium digital
              experiences, realtime systems and modern web applications.
            </p>
          </div>

          {/* RIGHT */}

          <div className="footer-links-wrapper">
            <div className="footer-links">
              <h3>Navigation</h3>

              <a href="#home">Home</a>

              <a href="#projects">Projects</a>

              <a href="#skills">Skills</a>

              <a href="#about">About</a>

              <a href="#contact">Contact</a>
            </div>

            <div className="footer-links">
              <h3>Socials</h3>

              <a href="https://github.com/shrazavi">GitHub</a>

              <a href="https://linkedin.com/in/hossein-razavi">LinkedIn</a>

              <a href="https://t.me/Shrazavi510">Telegram</a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}

        <div className="footer-divider"></div>

        {/* BOTTOM */}

        <div className="footer-bottom">
          <p>© 2026 Hossein Razavi. All rights reserved.</p>

          <div className="footer-social-icons">
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

          {/* SCROLL TOP */}

          <a href="#home" className="scroll-top-btn">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
