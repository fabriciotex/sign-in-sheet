import "./styles.css";

export function Card({ name, timestamp }) {
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{timestamp}</small>
    </div>
  );
}
