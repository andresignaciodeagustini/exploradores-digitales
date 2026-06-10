import heroImage from "../assets/imagenhome.png";
import heroMobile from "../assets/imagenhomemovil.png";

import icono1 from "../assets/icono1home.png";
import icono2 from "../assets/icono2home.png";
import icono3 from "../assets/icono3home.png";
import "../styles/Hero.css";

function Hero() {
  const scrollToCursos = () => {
    document
      .getElementById("cursos")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const reservarLugar = () => {
    const mensaje = document.getElementById(
      "mensaje"
    ) as HTMLTextAreaElement | null;

    if (mensaje && !mensaje.value.trim()) {
      mensaje.value =
        "Hola, estoy interesado/a en recibir información sobre Exploradores Digitales.";
    }

    document
      .getElementById("contacto")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-left">
        <h1>
          Aprendemos jugando,
          <br />
          <span>creamos sin límites</span>
        </h1>

        <p>
          Programación, Minecraft, Roblox, robótica e inteligencia artificial
          para niños y adolescentes.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={reservarLugar}
          >
            Reservar lugar
          </button>

          <button
            className="secondary-btn"
            onClick={scrollToCursos}
          >
            Ver cursos
          </button>
        </div>

        <div className="hero-data">
          <div className="hero-data-item">
            <img src={icono1} alt="Edad" className="hero-icon-img" />
            <p>6 a 15 años</p>
          </div>

          <div className="hero-divider"></div>

          <div className="hero-data-item">
            <img src={icono2} alt="Ubicación" className="hero-icon-img" />
            <p>Mar del Plata</p>
          </div>

          <div className="hero-divider"></div>

          <div className="hero-data-item">
            <img src={icono3} alt="Cupos" className="hero-icon-img" />
            <p>Cupos limitados</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <picture>
          <source media="(max-width: 900px)" srcSet={heroMobile} />
          <img
            className="hero-image"
            src={heroImage}
            alt="Avatar Exploradores Digitales"
          />
        </picture>
      </div>
    </section>
  );
}

export default Hero;