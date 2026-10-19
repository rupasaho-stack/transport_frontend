"use client";
import { useEffect, useState } from "react";

const CONSENT_KEY = "trucklink-cookie-consent";

export default function Cookie() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      setOpen(localStorage.getItem(CONSENT_KEY) === null);
    } catch (error) {
      console.error("Could not read cookie preferences.", error);
      setOpen(true);
      setMessage("Your browser could not read saved preferences. Your choice may not be remembered.");
    } finally {
      setReady(true);
    }
  }, []);

  function savePreference(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
      setMessage("");
      setOpen(false);
    } catch (error) {
      console.error("Could not save cookie preferences.", error);
      setMessage("Your browser could not save this choice. Please check your privacy settings and try again.");
    }
  }

  if (!ready) return null;

  return (
    <>
      {open ? (
        <aside className="cookie" aria-label="Cookie preferences">
          <div className="cookie__message">
            <p>Essential browser storage remembers your choice. Optional analytics and marketing cookies are not currently enabled.</p>
            {message && <p className="cookie__status" role="alert">{message}</p>}
          </div>
          <div className="cookie__actions">
            <button className="c-no" onClick={() => savePreference("essential")}>Essential only</button>
            <button className="c-yes" onClick={() => savePreference("all")}>Allow optional cookies</button>
            <button className="c-x" aria-label="Close cookie preferences" onClick={() => setOpen(false)}>✕</button>
          </div>
        </aside>
      ) : (
        <button className="cookie-settings" onClick={() => setOpen(true)}>Cookie settings</button>
      )}
    </>
  );
}
