export default function Hero({ img, cls = "", children }) {
  return <section className={`hero ${cls}`} style={{ backgroundImage: `url(${img}), var(--grad)` }}>{children}</section>;
}
