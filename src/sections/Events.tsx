import eventoIcono from "../assets/evento-icono.png";
import eventoChat from "../assets/evento-chat.png";
import eventosBanner from "../assets/eventos-banner.png";
import "../styles/Events.css";

function Events() {
  const consultarEventos = () => {
    const mensaje = document.getElementById(
      "mensaje"
    ) as HTMLTextAreaElement | null;

    if (mensaje && !mensaje.value.trim()) {
      mensaje.value =
        "Hola, me gustaría recibir información sobre los próximos eventos presenciales de Exploradores Digitales.\n\nQuisiera enterarme de nuevas fechas, actividades y aperturas de inscripción.";
    }

    document
      .getElementById("contacto")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="eventos" className="events-section">
      <div className="events-banner">
        <img className="events-icon" src={eventoIcono} alt="Eventos" />

        <div className="events-content">
          <h2>Eventos presenciales</h2>
          <h3>Casa Díaz Rönner - Mar del Plata</h3>

          <div className="events-list">
            <p>✓ Actividades guiadas</p>
            <p>✓ Cupos reducidos</p>
            <p>✓ Merienda incluida</p>
            <p>✓ Trabajo en equipo</p>
          </div>

          <button type="button" onClick={consultarEventos}>
            Ver próximos eventos ➜
          </button>
        </div>

        <img
          className="events-photo"
          src={eventosBanner}
          alt="Chicos aprendiendo"
        />

        <img className="events-chat" src={eventoChat} alt="Corazón" />
      </div>
    </section>
  );
}

export default Events;