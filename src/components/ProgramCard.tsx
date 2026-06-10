import { useState } from "react";

type ProgramCardProps = {
  title: string;
  description: string;
  extra: string;
  image: string;
  color: string;
};

function ProgramCard({
  title,
  description,
  extra,
  image,
  color,
}: ProgramCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="program-card">
      <img src={image} alt={title} />

      <div className="program-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {open && <p className="program-extra">{extra}</p>}

        <button
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: color,
          }}
        >
          {open ? "−" : "➜"}
        </button>
      </div>
    </article>
  );
}

export default ProgramCard;