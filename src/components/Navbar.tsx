import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function createHomeAnchorLink(hash: string) {
    return `/${hash}`;
  }

  function createContactLink() {
    const currentPath = location.pathname;

    if (currentPath === "/") {
      return "/#contato";
    }

    return `${currentPath}#contato`;
  }

  return (
    <nav className="navbar_container">
      <div className={`link_container ${isOpen ? "open" : ""}`}>
        <Link to={createHomeAnchorLink("#hero")} onClick={toggleMenu}>
          Inicio
        </Link>
        <Link to="/#sobre" onClick={toggleMenu}>
          Sobre
        </Link>
        <Link to="/catalogo#catalogo">Catálogo</Link>
        <Link to={createContactLink()} onClick={toggleMenu}>
          Contato
        </Link>
      </div>

      <div className="menu_icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
