import eventoIcono from "../assets/evento-icono.png";
import eventoChat from "../assets/evento-chat.png";
import eventosBanner from "../assets/eventos-banner.png";
import "../styles/Events.css";

function Events() {
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

          <button>Ver próximos eventos ➜</button>
        </div>

        <img className="events-photo" src={eventosBanner} alt="Chicos aprendiendo" />
        <img className="events-chat" src={eventoChat} alt="Corazón" />
      </div>
    </section>
  );
}

export default Events;