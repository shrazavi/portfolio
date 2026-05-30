import React from "react";

import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaAndroid,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiSocketdotio,
  SiWebrtc,
} from "react-icons/si";

import "./Skills.css";

const skills = [
  {
    icon: <FaReact />,
    title: "React Development",
    description:
      "Building scalable and responsive frontend applications with reusable component architecture.",
  },

  {
    icon: <FaNodeJs />,
    title: "Node.js Backend",
    description:
      "Designing REST APIs, authentication systems and scalable backend services.",
  },

  {
    icon: <SiMongodb />,
    title: "MongoDB Database",
    description:
      "Working with NoSQL databases, aggregation pipelines and optimized collections.",
  },

  {
    icon: <SiMysql />,
    title: "MySQL Systems",
    description:
      "Relational database design, queries, joins and optimized schema structures.",
  },

  {
    icon: <SiSocketdotio />,
    title: "Realtime Systems",
    description:
      "Developing chat systems, live communication and realtime event handling.",
  },

  {
    icon: <SiWebrtc />,
    title: "WebRTC Communication",
    description:
      "Voice/video call systems and peer-to-peer communication applications.",
  },

  {
    icon: <FaBootstrap />,
    title: "Responsive UI",
    description:
      "Modern responsive interfaces with premium layouts and mobile-first design.",
  },

  {
    icon: <FaAndroid />,
    title: "Android Development",
    description:
      "Interactive Android applications and educational gamification systems.",
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-glow"></div>

      <div className="container-custom">
        <div className="section-header">
          <span className="skills-label">TECH STACK</span>

          <h2 className="section-title">Skills & Technologies</h2>

          <p className="section-subtitle">
            Technologies and tools I use to build modern, scalable and
            high-performance applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>

              <h3 className="skill-title">{skill.title}</h3>

              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
