import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar.jsx";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import Projects from "./component/Projects/Projects.jsx";
import Contact from "./component/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
