import "./Navbar.css";
import ThemeToggle from "../Home/toggleTheme";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        nikux<span>.</span>
      </h1>
      <div className="links">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};

export default Navbar;
