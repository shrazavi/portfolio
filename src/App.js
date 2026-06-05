import React from "react";
import {  Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import PortfolioPage from "./pages/PortfolioPage";
import "./styles/globals.css";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
    <CustomCursor/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}

export default App;
