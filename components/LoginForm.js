"use client";
import { useState } from "react";

export default function LoginForm({ role }) {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const label = role === "driver" ? "Driver" : "Company";
  return (
    <section className="login-wrap">
      <div className="login-outer">
        <h1 className="h-white">Log in here</h1>
        <div className="login-box">
          <h2>Enter {label} Mobile Number</h2>
          <label className="login-phone-label" htmlFor="login-phone">Mobile number</label>
          <input
            id="login-phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={10}
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value.replace(/\D/g, ""));
              setMessage("");
            }}
          />
          <small>Phone login is not available until authentication is connected.</small>
          <button
            className="btn purple"
            disabled={phone.length !== 10}
            onClick={() => setMessage("Authentication is not connected yet. Please contact support@transporter.in for help.")}
          >
            Continue
          </button>
          {message && <p className="login-status" role="status">{message}</p>}
        </div>
      </div>
    </section>
  );
}
