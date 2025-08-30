import { useState } from "react";
import "./Navbar.css";
import Hamburger from "../hamburger/Hamburger";
// import ThemeToggle from "../Home/toggleTheme";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <h1>
        nikux<span>.</span>
      </h1>

      {/* Links */}
      <div className={`links ${open ? "open" : ""}`}>
        <a href="#Home" onClick={() => setOpen(!open)}>
          Home
        </a>
        <a href="#About" onClick={() => setOpen(!open)}>
          About
        </a>
        <a href="#Projects" onClick={() => setOpen(!open)}>
          Projects
        </a>
        <a href="#Contact" onClick={() => setOpen(!open)}>
          Contact
        </a>
        {/* <ThemeToggle /> */}
      </div>

      {/* Hamburger (pass props) */}
      <div className="ham">
        <Hamburger open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
