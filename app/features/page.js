import AppDownloads from "@/components/AppDownloads";

const f = [
  ["GPS Live Tracking", "Real-time location visible to both driver and company. Accurate to 50 meters. Works offline with last-known sync."],
  ["In-App Chat System", "Direct messaging between driver and company. Share documents, photos, and negotiate rates within the app."],
  ["Digital Contracts", "Confirm every booking with a digital contract. No paperwork, no disputes."],
  ["Secure Payments", "Release payment on confirmed delivery with a full, transparent trip record."],
  ["Driver Verification", "KYC-verified profiles, license checks, and confirmed truck details."],
  ["Ratings & Reviews", "Mutual ratings after every trip help build a trusted freight network."],
];
export default function Features() {
  return (
    <div className="features-page">
      <section className="feat">
        {f.map(([t, d]) => (
          <article className="feat-box" key={t}>
            <h2>{t}</h2>
            <p>{d}</p>
          </article>
        ))}
      </section>
      <AppDownloads />
    </div>
  );
}
