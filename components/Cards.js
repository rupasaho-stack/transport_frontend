export default function Cards({ title, sub, items }) {
  return (
    <section className="wrap">
      <h2 className="h-dark">{title}</h2>
      <p className="sub left">{sub}</p>
      <div className="cards">
        {items.map(([icon, t, d]) => (
          <div className="card" key={t}>
            <span className="icon">{icon}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
