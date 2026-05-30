import React, { useEffect, useState } from "react";
import "./Navbar.css";
import resume from "../../assets/images/resume.pdf";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container-custom navbar-wrapper">
          {/* LOGO */}
          <a href="#home" className="navbar-logo">
            Hossein Razavi
          </a>

          {/* DESKTOP MENU */}
          <ul className="navbar-links">
            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* RESUME BUTTON */}
          <a
            href={resume}
            className="resume-button"
          >
            Resume
          </a>

          {/* MOBILE TOGGLE */}
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <a href="/resume.pdf" className="mobile-resume-btn">
          Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
