"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

function greeting(h: number) {
  if (h < 12) return "Good morning! Thanks for stopping by.";
  if (h < 17) return "Good afternoon! Thanks for stopping by.";
  return "Good evening! Thanks for stopping by.";
}

// Floating pill: monogram, live IST time, inline links and a primary action,
// with a small time-of-day greeting underneath.
export default function Nav() {
  const [time, setTime] = useState("");
  const [hello, setHello] = useState("");
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    const tick = () => {
      const d = new Date();
      setTime(fmt.format(d));
      setHello(greeting(Number(fmt.format(d).slice(0, 2))));
    };
    tick();
    const id = setInterval(tick, 15000);
    const show = setTimeout(() => setToast(true), 1200);
    const hide = setTimeout(() => setToast(false), 9000);
    return () => {
      clearInterval(id);
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  return (
    <header className="pill-wrap">
      <div className="pill">
        <div className="pill-left">
          <a href="#top" className="pill-logo" aria-label="Home">JS</a>
          <span className="pill-time" aria-label="Time in India">
            {time || "--:--"} <small>IST</small>
          </span>
        </div>
        <nav className="pill-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="pill-right">
          <button
            className="pill-menu"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
          <a href="#contact" className="pill-cta">Get in touch</a>
        </div>
      </div>

      {open && (
        <nav className="pill-sheet" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}

      <div className={`toast ${toast && hello ? "show" : ""}`} role="status">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        {hello}
      </div>
    </header>
  );
}
