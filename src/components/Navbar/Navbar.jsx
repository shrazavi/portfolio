import React, { useEffect, useState } from "react";
import "./Navbar.css";

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
            href="https://api.cloudinary.com/v1_1/dwuhamihv/image/download?api_key=626134544524892&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiNjI0NGMxMzdiZTJkZTFkMjYwNjg4Y2QxYWY3NTZkODIiLCJ1c2VyX2V4dGVybmFsX2lkIjoiYWZkYTA4OTA2YmM5YjVmYTdkNmIwYWE2YTU5NGQ0IiwidXNlcl9jdXN0b21faWQiOiJzaHJhemF2aTExMEBnbWFpbC5jb20iLCJjb21wb25lbnQiOiJjb25zb2xlIn0%3D&public_id=download_2_arbamp&signature=5a532da8df07a1af1da25e718f70c22afe4ab3f9&source=ml&target_filename=download_2_arbamp&timestamp=1780145670&type=upload"
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
