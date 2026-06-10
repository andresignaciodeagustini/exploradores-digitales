import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/programs";
import "../styles/Programs.css";

function Programs() {
  return (
    <section id="cursos" className="programs">
      <div className="section-heading">
        <h2>Nuestros programas</h2>
      </div>

      <div className="programs-grid">
        {programs.map((program) => (
          <ProgramCard
            key={program.title}
            title={program.title}
            description={program.description}
            extra={program.extra}
            image={program.image}
            color={program.color}
          />
        ))}
      </div>
    </section>
  );
}

export default Programs;