import { useState } from "react";

import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar_container">
      <div className={`link_container ${isOpen ? "open" : ""}`}>
        <a href="#" onClick={toggleMenu}>
          Inicio
        </a>
        <a href="#sobre" onClick={toggleMenu}>
          Sobre
        </a>
        <a href="#">Catálogo</a>
        <a href="#contato" onClick={toggleMenu}>
          Contato
        </a>
      </div>

      <div className="menu_icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
