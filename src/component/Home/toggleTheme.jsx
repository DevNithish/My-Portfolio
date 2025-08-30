import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import './toggleTheme.css'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <span className="slider">
        <FaSun className="icon sun" />
        <FaMoon className="icon moon" />
      </span>
    </label>
  );
};

export default ThemeToggle;
