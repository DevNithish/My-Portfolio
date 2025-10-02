import { useState, useEffect } from "react";
import "./Navbar.css";
import Hamburger from "../hamburger/Hamburger";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        !event.target.closest(".links") &&
        !event.target.closest(".ham")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <nav className="navbar">
      <h1>
        nikux<span>.</span>
      </h1>
      <div className={`links ${open ? "open" : ""}`}>
        <a href="#home" onClick={handleLinkClick}>
          Home
        </a>
        <a href="#about" onClick={handleLinkClick}>
          About
        </a>
        <a href="#projects" onClick={handleLinkClick}>
          Projects
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          Contact
        </a>
      </div>
      <div className="ham">
        <Hamburger open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
