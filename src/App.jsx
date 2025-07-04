import React from "react";
//import  ParallaxImage  from "./components/ParallaxImage";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
//import ProjectCarousel from "./components/ProjectCarousel";
import SampleCarousel from "./components/ProjectCarousel";


function App() {
  return (

    <div>
      <Navbar />
      <Hero />
      <Contact />
      <SampleCarousel />
      <Skills />
      <ThemeToggle />
     {/* <ProjectCarousel />
     */} 
      <Projects />
      {/* <ParallaxImage /> */}

    </div>
  );
}

export default App;
