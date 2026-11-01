"use client";

import { useEffect, useState } from "react";

const greetings = ["Hello,", "Namaste,", "Bonjour,", "Hola,"];

// Two-column hero: cycling greeting, intro and actions on the left, tilted polaroid on the right.
export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % greetings.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-in">
            <em key={i} className="greeting" aria-live="off">
              {greetings[i]}
            </em>
            <span className="hero-name">
              I am Jatin Solanki <b className="wave" aria-hidden>👋</b>
            </span>
          </h1>

          <p className="hero-role hero-in" style={{ animationDelay: "100ms" }}>
            Product Designer at{" "}
            <span className="chip"><i className="chip-ico">S</i>SocialPilot</span>
          </p>
          <p className="hero-sub hero-in" style={{ animationDelay: "180ms" }}>
            Based in India, designing thoughtful analytics and AI experiences.
            Right now I&apos;m shaping{" "}
            <span className="chip"><i className="chip-ico chip-ai">AI</i>AI Lab</span>
            , an agentic layer for the SocialPilot product suite.
          </p>

          <div className="hero-actions hero-in" style={{ animationDelay: "260ms" }}>
            <a href="#contact" className="btn-hero btn-soft">Say hi 👋</a>
            <a href="#" className="btn-hero btn-dark">Resume 📄</a>
          </div>
        </div>

        {/* Placeholder portrait: replace .polaroid-photo with <img src="/me.jpg"> (black and white works well) */}
        <div className="polaroid-wrap hero-in" style={{ animationDelay: "200ms" }}>
          <div className="polaroid">
            <div className="polaroid-photo">JS</div>
            <span className="polaroid-cap">me_01.jpeg</span>
          </div>
          <div className="cursor" aria-hidden>
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M3 2l17 8-7.5 2.2L9.8 20z" fill="#38bdf8" />
            </svg>
            <span>Jatin Solanki</span>
          </div>
        </div>
      </div>
    </section>
  );
}
