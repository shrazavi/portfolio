import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedProjects />

      <Skills />

      <About />

      <Contact />

      <Footer />
    </>
  );
};

export default Home;
