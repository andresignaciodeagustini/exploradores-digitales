import junior from "../assets/junior.png";
import avanzado from "../assets/avanzado.png";

import minecraftIcon from "../assets/minecraft-icon.png";
import scratchIcon from "../assets/scratch-icon.png";
import robotIcon from "../assets/robot-icon.png";

import codeIcon from "../assets/code-icon.png";
import hardwareIcon from "../assets/hardware-icon.png";
import chipIcon from "../assets/chip-icon.png";
import "../styles/AgeGroups.css";

function AgeGroups() {
  return (
    <section id="proyectos" className="age-section">
      <h2>Para quiénes</h2>

      <div className="age-grid">
        <article className="age-card junior-card">
          <img className="age-character junior-character" src={junior} alt="Exploradores Junior" />

          <div className="age-content">
            <h3>Exploradores Junior</h3>
            <span>6 a 10 años</span>
            <p>Descubren el mundo digital jugando y creando.</p>

            <div className="age-icons">
              <img src={minecraftIcon} alt="Minecraft" />
              <img src={scratchIcon} alt="Scratch" />
              <img src={robotIcon} alt="Robot" />
            </div>
          </div>
        </article>

        <article className="age-card advanced-card">
          <div className="age-content">
            <h3>Exploradores Avanzados</h3>
            <span>11 a 15 años</span>
            <p>Profundizan conocimientos y crean proyectos más complejos.</p>

            <div className="age-icons">
              <img src={codeIcon} alt="Código" />
              <img src={hardwareIcon} alt="Hardware" />
              <img src={chipIcon} alt="Chip" />
            </div>
          </div>

          <img className="age-character advanced-character" src={avanzado} alt="Exploradores Avanzados" />
        </article>
      </div>
    </section>
  );
}

export default AgeGroups;