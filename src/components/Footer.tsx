import "../styles/footer.css";
import logoFooter from "../assets/logo-footer.png";
import instagram from "../assets/instagram-footer.png";
import youtube from "../assets/youtube-footer.png";
import tiktok from "../assets/tiktok-footer.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <img
          className="footer-logo"
          src={logoFooter}
          alt="Exploradores Digitales"
        />

        <div className="footer-center">
          <h3>Aprendemos jugando, creamos sin límites.</h3>
          <p>© 2025 Exploradores Digitales. Todos los derechos reservados.</p>
        </div>

        <div className="footer-social">
          <h4>Seguinos</h4>

          <div>
            <img src={instagram} alt="Instagram" />
            <img src={youtube} alt="YouTube" />
            <img src={tiktok} alt="TikTok" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;