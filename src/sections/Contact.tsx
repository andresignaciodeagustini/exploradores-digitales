import { useState } from "react";
import contactMail from "../assets/contact-mail.png";
import contactEmail from "../assets/contact-email.png";
import contactInstagram from "../assets/contact-instagram.png";
import sendIcon from "../assets/send-icon.png";
import "../styles/Contact.css";

function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Respuesta Web3Forms:", result);

      if (response.ok) {
        setStatus("Consulta enviada correctamente.");
        form.reset();
      } else {
        setStatus("No se pudo enviar. Probá nuevamente.");
      }
    } catch (error) {
      console.error("Error Web3Forms:", error);
      setStatus("No se pudo enviar. Revisá tu conexión.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-box">
        <div className="contact-info">
          <img
            className="contact-main-icon"
            src={contactMail}
            alt="Contacto"
          />

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

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="21d1f173-2387-412f-bc42-c27aa2d2ba50"
          />

          <input
            type="hidden"
            name="subject"
            value="Nueva consulta desde Exploradores Digitales"
          />

          <input
            type="hidden"
            name="from_name"
            value="Exploradores Digitales"
          />

          <div className="contact-inputs-row">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="contact-bottom-row">
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Mensaje"
              required
            ></textarea>

            <button type="submit" disabled={sending}>
              <img src={sendIcon} alt="" />
              <span>
                {sending
                  ? "Enviando..."
                  : "Quiero más información"}
              </span>
            </button>
          </div>

          {status && (
            <p className="contact-status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;