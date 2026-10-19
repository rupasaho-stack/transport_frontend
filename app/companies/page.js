import Link from "next/link";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import AppDownloads from "@/components/AppDownloads";

export default function Companies() {
  return (
    <div className="companies-page">
      <Hero img="/companies-hero.png" cls="company-hero">
        <div className="company-hero__copy">
          <h1 className="h-hero">Direct freight booking.<br />Zero agent commission.</h1>
          <p>Connect directly with 50,000+ verified truck drivers. Post your freight, compare quotes, track live — all without a single middleman.</p>
          <div className="btn-row">
            <Link href="/login" className="btn grey">Register Company</Link>
          </div>
        </div>
      </Hero>
      <Cards title="Cut freight costs by up to 30%" sub="Direct access to thousands of verified drivers across India." items={[
        ["₹", "Low Cost Transport", "No broker markup — pay drivers directly at fair market rates."],
        ["▦", "Compare Prices", "See multiple driver quotes side by side and choose the best deal."],
        ["☆", "Verified Drivers", "Every driver is KYC-verified with license and truck details confirmed."],
        ["⌖", "Track Shipment", "Live GPS updates from pickup to delivery for complete peace of mind."],
      ]} />

      <section className="company-join">
        <h2>Ready to reduce your freight costs?</h2>
        <p>Register now for free. Start finding loads in under 5 minutes.</p>
        <Link href="/login" className="btn grey">Register Now</Link>
      </section>

      <AppDownloads />
    </div>
  );
}
