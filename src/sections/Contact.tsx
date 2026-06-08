import contactMail from "../assets/contact-mail.png";
import contactEmail from "../assets/contact-email.png";
import contactInstagram from "../assets/contact-instagram.png";
import sendIcon from "../assets/send-icon.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-box">
        <div className="contact-info">
          <img className="contact-main-icon" src={contactMail} alt="Contacto" />

          <div className="contact-text">
            <h2>¿Tenés preguntas?</h2>
            <p>Escribinos y te contamos más.</p>

            <div className="contact-line">
              <img src={contactEmail} alt="Email" />
              <span>info@exploradoresdigitales.com</span>
            </div>

            <div className="contact-line">
              <img src={contactInstagram} alt="Instagram" />
              <span>@exploradoresdigitales</span>
            </div>
          </div>
        </div>

        <div className="contact-divider"></div>

        <form className="contact-form">
          <div className="contact-inputs-row">
            <input type="text" placeholder="Nombre" />
            <input type="tel" placeholder="Teléfono" />
            <input type="email" placeholder="Email" />
            
          </div>

          <div className="contact-bottom-row">
            <textarea placeholder="Mensaje"></textarea>

            <button type="button">
              <img src={sendIcon} alt="" />
              <span>Quiero más información</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;