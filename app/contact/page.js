"use client";
import { useState } from "react";
import AppDownloads from "@/components/AppDownloads";

const info = [
  ["📞", "Phone / WhatsApp", "+91 98765 43210"],
  ["✉️", "Email", "support@transporter.in"],
  ["📍", "Office", "123, Logistics Hub, Delhi NCR — 110001"],
  ["⏰", "Support Hours", "24/7 for premium users | 9AM–9PM for free"],
];

export default function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `TruckLink contact request from ${formData.get("name")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Email: ${formData.get("email")}`,
      `I am a: ${formData.get("role")}`,
      "",
      `Message: ${formData.get("message")}`,
    ].join("\n");

    setMessage("Your email app should open with the message ready. Send it there to contact our team.");
    window.location.href = `mailto:support@transporter.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="contact-page">
      <section className="contact-content">
        <h1 className="h-dark center-t">Get in Touch</h1>
        <div className="contact-box">
          <div className="c-info">
            <p>Whatever your question—driver support, company boarding, or technical help—we're available 24/7.</p>
            {info.map(([i, t, v]) => (
              <div className="c-row" key={t}><span className="c-ico">{i}</span><div><span>{t}</span><br />{v}</div></div>
            ))}
          </div>
          <form className="c-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            <div className="two"><label>YOUR NAME<input name="name" required autoComplete="name" placeholder="Full name" /></label><label>PHONE NUMBER<input name="phone" required type="tel" autoComplete="tel" placeholder="+91 xxxxxxxxxx" /></label></div>
            <label>EMAIL ADDRESS<input name="email" required type="email" autoComplete="email" placeholder="you@gmail.com" /></label>
            <label>I AM A<select name="role" required defaultValue=""><option value="" disabled>select please</option><option>Driver</option><option>Company</option></select></label>
            <label>MESSAGE<textarea name="message" required rows={3} placeholder="Type your message here" /></label>
            <button className="send" type="submit">Open email app</button>
            {message && <p className="contact-status" role="status">{message}</p>}
          </form>
        </div>
      </section>
      <AppDownloads />
    </div>
  );
}
