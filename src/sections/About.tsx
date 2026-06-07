import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import "../styles/About.css";

function About() {
  return (
    <section id="nosotros" className="about">
      <div className="section-heading">
        <h2>
          ¿Qué es <span>Exploradores Digitales?</span>
        </h2>
        <p>
          Un espacio donde niños y adolescentes aprenden tecnología de forma
          divertida y creativa.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <img src={about1} alt="Aprender jugando" />
          <div>
            <h3>Aprender jugando</h3>
            <p>
              Utilizamos videojuegos como Minecraft y Roblox para aprender de
              forma divertida.
            </p>
          </div>
        </article>

        <article className="about-card">
          <img src={about2} alt="Crear tecnología" />
          <div>
            <h3>Crear tecnología</h3>
            <p>
              Programamos, construimos robots y exploramos la inteligencia
              artificial.
            </p>
          </div>
        </article>

        <article className="about-card">
          <img src={about3} alt="Desarrollar habilidades" />
          <div>
            <h3>Desarrollar habilidades</h3>
            <p>
              Fomentamos la creatividad, el pensamiento lógico y el trabajo en
              equipo.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;