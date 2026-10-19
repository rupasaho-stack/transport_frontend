import Link from "next/link";
import Hero from "@/components/Hero";
import AppDownloads from "@/components/AppDownloads";

const players = [
  { title: "Truck Drivers", text: "Find loads directly and keep more of what you earn.", variant: "drivers" },
  { title: "Fleet Owners", text: "Coordinate your fleet and find work for every truck.", variant: "alt" },
  { title: "Freight Companies", text: "Post loads and connect with verified drivers.", variant: "alt-2" },
  { title: "Logistics Teams", text: "Manage shipments and coordinate deliveries in one place.", variant: "alt-3" },
];

const steps = [
  ["Register", "Create your verified profile in minutes"],
  ["Post / Find Load", "Browse loads or post your freight requirement"],
  ["Chat & Negotiate", "Agree on rates directly inside the app"],
  ["Book Trip", "Confirm booking with digital contract"],
  ["Track Live", "Follow the trip with live GPS updates"],
  ["Delivery", "Confirm delivery & release payment"],
];

const reviews = [
  ["RK", "Rahul kumar", "Truck Driver, Mumbai", "\"Pehle broker ₹6000 leta tha per trip. Ab seedha company se baat karta hoon. TruckLink ne meri life badal di.\"", 5],
  ["YS", "Yashpal Singh", "Logistics Head, Surat", "\"We reduced logistics cost by 22% in the first quarter after switching to TruckLink. Tracking feature is excellent.\"", 4],
  ["VP", "Vishal Prasad", "Fleet Owner, Delhi", "\"We reduced logistics cost by 22% in the first quarter after switching to TruckLink. Tracking feature is excellent.\"", 5],
];

const metrics = [
  { value: "₹5000", label: "Saved per trip", text: "Every trip you book directly saves you the full broker commission." },
  { value: "0%", label: "Zero middleman", text: "No broker, no agent, no hidden fee — just driver and company, directly." },
  { value: "100%", label: "Transparent pricing", text: "See all rates upfront. No surprise deductions at the end of every trip." },
];

export default function Home() {
  return (
    <div className="landing-page">
      <Hero img="/hero.jpg" cls="hero-home hero-reference">
        <div className="hero-copy">
          <h1 className="h-hero">Connect Drivers Directly<br />with Companies</h1>
          <p className="hero-sub">No middlemen. No hidden fees. Save ₹5000 per trip and grow your business faster with direct, verified connections.</p>
          <div className="btn-row">
            <Link href="/drivers" className="btn grey">I am a driver</Link>
            <Link href="/companies" className="btn purple">Join as a company</Link>
          </div>
        </div>
        <svg className="hero-wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 38C230 90 405 100 610 66C850 26 1040 48 1235 58C1325 63 1390 56 1440 42V100H0Z" fill="#fff" />
        </svg>
        <img className="hero-truck" src="/truck.png" alt="" aria-hidden="true" />
      </Hero>

      <section className="player-section">
        <div className="player-intro">
          <h2>Built for every player in freight</h2>
          <p>Whether you own one truck or a hundred, Transporter is designed for you.</p>
        </div>
        <div className="player-grid">
          {players.map(({ title, text, variant }) => (
            <article key={title} className={`player-card ${variant}`}>
              <div className="player-card__clouds" aria-hidden="true"><span /><span /></div>
              <div className="player-card__avatar" aria-hidden="true">🙂</div>
              <div className="player-card__content">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-band__intro">
          <h2>Everything you need in one platform</h2>
          <p>Connect, manage, and grow your transport business with tools designed for the road.</p>
        </div>
        <div className="feature-list">
          <article><span aria-hidden="true">↔</span><h3>Direct Chat</h3><p>Talk directly with drivers and companies. No broker in between.</p></article>
          <article><span aria-hidden="true">⌖</span><h3>Live GPS Tracking</h3><p>Know where your truck is throughout every trip.</p></article>
          <article><span aria-hidden="true">₹</span><h3>Zero Commission</h3><p>Keep more of what you earn with transparent pricing.</p></article>
          <article><span aria-hidden="true">▤</span><h3>Digital Contract</h3><p>Confirm bookings and trip details in one place.</p></article>
        </div>
      </section>

      <section className="wrap center steps">
        <h2 className="h-dark">From register to delivery in 6 steps</h2>
        <p className="sub">A seamless workflow that eliminates paperwork, brokers, and uncertainty.</p>
        <div className="step-row">
          {steps.map(([t, d], i) => (
            <div className="step" key={t}><span className="num">{i + 1}</span><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      <section className="numbers">
        <h2 className="h-white left">The numbers speak for themselves</h2>
        {metrics.map(({ value, label, text }) => (
          <div key={label}>
            <b>{value}</b>
            <h3>{label}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section className="wrap center reviews-section">
        <h2 className="h-dark">Trusted by drivers & companies</h2>
        <p className="sub">Real results from real users across India.</p>
        <div className="reviews">
          {reviews.map(([ini, n, r, q, s]) => (
            <figure key={n}>
              <div className="stars" aria-label={`${s} stars`}>{"☆".repeat(s)}</div>
              <blockquote>{q}</blockquote>
              <figcaption><span className="avatar">{ini}</span><span><b>{n}</b><br />{r}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <AppDownloads />
    </div>
  );
}
