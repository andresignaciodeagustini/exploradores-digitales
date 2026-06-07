type ProgramCardProps = {
  title: string;
  description: string;
  image: string;
  color: string;
};

function ProgramCard({
  title,
  description,
  image,
  color,
}: ProgramCardProps) {
  return (
    <article className="program-card">
      <img src={image} alt={title} />

      <div className="program-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <button
          style={{
            backgroundColor: color,
          }}
        >
          ➜
        </button>
      </div>
    </article>
  );
}

export default ProgramCard;