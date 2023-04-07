import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { theme, handleThemeChange } = useContextGlobal();

  return (
    <nav className={theme === "dark" ? "dark" : ""}>
      <Link to="/">Home</Link>
      <Link to="/favs">Destacados</Link>
      <Link to="/contacto">Contacto</Link>
      <button onClick={handleThemeChange}>{theme === "" ? "🌞" : "🌙"}</button>
    </nav>
  );
};

export default Navbar;