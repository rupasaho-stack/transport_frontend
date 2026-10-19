import Link from "next/link";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import AppDownloads from "@/components/AppDownloads";

export default function Drivers() {
  return (
    <div className="drivers-page">
      <Hero img="/drivers-hero.png" cls="driver-hero">
        <div className="driver-hero__sr-only">
          <h1>Earn More. Keep Everything.</h1>
          <p>No broker. No commission. Connect directly with companies and grow your income.</p>
        </div>
        <div className="driver-hero__actions">
          <Link href="/login?role=driver" aria-label="Register as driver">Register as driver</Link>
          <Link href="/features" aria-label="See features">See features</Link>
        </div>
      </Hero>

      <Cards title="Why 10,000+ drivers chose TruckLink" sub="No middlemen means more money in your pocket after every trip." items={[
        ["₹", "No Commission", "Keep 100% of every payment. No cuts, no surprises."],
        ["▦", "More Work", "Browse hundreds of load listings from verified companies."],
        ["☆", "Direct Clients", "Build real long-term relationships with company clients."],
        ["▦", "Earnings Dashboard", "Track all trips, payments, and ratings in one place."],
      ]} />

      <section className="driver-join">
        <h2>Join 10,000+ drivers earning more today</h2>
        <p>Register now for free. Start finding loads in under 5 minutes.</p>
        <Link href="/login?role=driver" className="btn grey">Register Now</Link>
      </section>

      <AppDownloads />
    </div>
  );
}
