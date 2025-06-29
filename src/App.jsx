import React from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

function App() {
  return (

    <div>
      <Navbar />
      <Hero />
      <Contact />
      <Projects />
      <Skills />
      <ThemeToggle />

    </div>
  );
}

export default App;
