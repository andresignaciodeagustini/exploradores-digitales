import { useState } from "react";
import "../styles/Footer.css";
import logoFooter from "../assets/logo-footer.png";
import instagram from "../assets/instagram-footer.png";
import youtube from "../assets/youtube-footer.png";
import tiktok from "../assets/tiktok-footer.png";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const openComingSoon = () => {
    setShowModal(true);
  };

  const closeComingSoon = () => {
    setShowModal(false);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <a href="#inicio" className="footer-logo-link" aria-label="Volver al inicio">
            <img
              className="footer-logo"
              src={logoFooter}
              alt="Exploradores Digitales"
            />
          </a>

          <div className="footer-center">
            <h3>Aprendemos jugando, creamos sin límites.</h3>
            <p>© 2025 Exploradores Digitales. Todos los derechos reservados.</p>
          </div>

          <div className="footer-social">
            <h4>Seguinos</h4>

            <div>
              <a
                href="https://www.instagram.com/exploradoresdigitalesargentina/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>

              <img src={youtube} alt="YouTube" onClick={openComingSoon} />

              <img src={tiktok} alt="TikTok" onClick={openComingSoon} />
            </div>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="social-modal-overlay" onClick={closeComingSoon}>
          <div
            className="social-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="social-modal-icon">🚀</div>

            <h3>¡Estamos creciendo!</h3>

            <p>
              Nuestros canales de YouTube y TikTok están en construcción.
            </p>

            <p>
              Muy pronto compartiremos tutoriales, proyectos, desafíos y
              contenido creado por nuestros Exploradores Digitales.
            </p>

            <div className="social-modal-buttons">
              <a
                href="https://www.instagram.com/exploradoresdigitalesargentina/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-instagram-btn"
              >
                Seguir en Instagram
              </a>

              <button className="social-close-btn" onClick={closeComingSoon}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;