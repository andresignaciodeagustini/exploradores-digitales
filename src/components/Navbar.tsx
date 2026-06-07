import { useState } from "react";

import logo from "../assets/logo.png";
import botonIcon from "../assets/iconobotonhome.png";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#inicio" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Exploradores Digitales" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#inicio" onClick={closeMenu}>
          Inicio
        </a>

        <a href="#cursos" onClick={closeMenu}>
          Cursos
        </a>

        <a href="#eventos" onClick={closeMenu}>
          Eventos
        </a>

        <a href="#proyectos" onClick={closeMenu}>
          Proyectos
        </a>

        <a href="#nosotros" onClick={closeMenu}>
          Nosotros
        </a>

        <a href="#contacto" onClick={closeMenu}>
          Contacto
        </a>
      </nav>

      <a href="#contacto" className="cta-navbar" onClick={closeMenu}>
        <span>Reservar lugar</span>
        <img src={botonIcon} alt="Calendario" />
      </a>
    </header>
  );
}

export default Navbar;