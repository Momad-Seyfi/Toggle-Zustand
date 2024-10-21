import React, { useEffect, useState } from "react";
import "./../styles/theme.css"; 

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme || (systemPrefersDark ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"} Mode</button>;
}

export default ThemeToggle;
