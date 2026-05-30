import React from "react";

import "./styles/globals.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/CustomCursor/CustomCursor";

import "./styles/globals.css";

function App() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <Hero />

      <FeaturedProjects />

      <Skills />

      <About />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
