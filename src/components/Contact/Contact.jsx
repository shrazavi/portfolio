import React from "react";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow"></div>

      <div className="container-custom">
        <div className="contact-layout">
          {/* LEFT */}

          <div className="contact-left">
            <span className="contact-label">CONTACT</span>

            <h2 className="contact-title">
              Let’s build something amazing together.
            </h2>

            <p className="contact-description">
              Interested in working together, building a product or discussing a
              new project? Feel free to reach out.
            </p>

            {/* CONTACT CARDS */}

            <div className="contact-cards">
              <a href="mailto:shrazavi110@gmail.com" className="contact-card">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h3>Email</h3>

                  <p>shrazavi110@gmail.com</p>
                </div>
              </a>

              <a href="https://github.com/shrazavi" className="contact-card">
                <div className="contact-icon">
                  <FaGithub />
                </div>

                <div>
                  <h3>GitHub</h3>

                  <p>github.com/shrazavi</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/hossein-razavi"
                className="contact-card"
              >
                <div className="contact-icon">
                  <FaLinkedinIn />
                </div>

                <div>
                  <h3>LinkedIn</h3>

                  <p>linkedin.com/in/hossein-razavi</p>
                </div>
              </a>

              <a href="https://t.me/Shrazavi510" className="contact-card">
                <div className="contact-icon">
                  <FaTelegramPlane />
                </div>

                <div>
                  <h3>Telegram</h3>

                  <p>@Shrazavi510</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>

                <input type="text" placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input type="email" placeholder="you@example.com" />
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  rows="6"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
