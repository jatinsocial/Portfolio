import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { journey } from "@/lib/journey";
import { getCaseStudy } from "@/lib/case-studies";
import { projects } from "@/lib/projects";

// Turns **word** markers in a description into <strong>.
function renderBold(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 ? <strong key={i}>{part}</strong> : part
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top">
        <Hero />

        <section id="about" className="about">
          <Reveal>
            <p className="about-text">
              I&apos;m drawn to the parts of a product people rarely praise but
              always feel: a reviews inbox that never makes you hunt, a report
              that answers the question before you ask it, an AI feature that
              earns trust in its first minute. My work is making those moments
              quietly clear for the teams who run social every day.
            </p>
          </Reveal>
        </section>

        <section id="work" className="work">
          <Reveal>
            <h2 className="work-heading">
              <span className="wh-box">Work</span>
              <span>that I&apos;m</span>
              <span className="wh-comp">
                <i className="comp-tag">❖ Main component</i>
                extremely
              </span>
              <span className="wh-orange">proud of</span>
            </h2>
          </Reveal>

          {projects.map((p) => {
            const href = getCaseStudy(p.slug) ? `/work/${p.slug}` : `#${p.slug}`;
            return (
            <Reveal key={p.slug}>
              <article id={p.slug} className="project">
                <h3>{p.title}</h3>
                <p>{renderBold(p.description)}</p>

                <a href={href} className="case-card" aria-label={`${p.title} case study`}>
                  <div className="zoom">
                    <div className="screen screen-a" />
                    <div className="screen screen-b" />
                  </div>
                  <span className="soon">Screens coming soon</span>
                </a>

                <div className="project-cta">
                  <a href={href} className="pill-link">View case study →</a>
                </div>
              </article>
            </Reveal>
            );
          })}
        </section>

        <section className="quote">
          <Reveal>
            <p className="quote-label">Philosophy</p>
            <blockquote>
              <em>&ldquo;Make it obvious first. Then make it delightful.&rdquo;</em>
            </blockquote>
          </Reveal>
        </section>

        <section id="journey" className="journey">
          <Reveal>
            <h2 className="work-heading sel-heading">
              <span>How it all</span>
              <span className="sel">
                started
                <i className="cr tl" aria-hidden />
                <i className="cr tr" aria-hidden />
                <i className="cr bl" aria-hidden />
                <i className="cr br" aria-hidden />
                <svg className="pen" viewBox="0 0 36 36" aria-hidden>
                  {/* Pen-tool nib: drawn pointing up, rotated so the tip points up-left */}
                  <g transform="translate(16 16) rotate(-45)">
                    <path
                      d="M0 -13 C3.5 -7 8.5 -3 8.5 3 L8.5 7 Q8.5 10.5 5 10.5 L-5 10.5 Q-8.5 10.5 -8.5 7 L-8.5 3 C-8.5 -3 -3.5 -7 0 -13 Z"
                      fill="#f5a623" stroke="#1d1d1f" strokeWidth="1.8" strokeLinejoin="round"
                    />
                    <path d="M0 -10 L0 -1.6" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="0" cy="1.4" r="2.4" fill="#fff" stroke="#1d1d1f" strokeWidth="1.5" />
                  </g>
                  <rect x="25" y="26" width="8.5" height="5" rx="2.5" transform="rotate(40 29 28.5)" fill="#f5a623" stroke="#1d1d1f" strokeWidth="1.5" />
                </svg>
              </span>
            </h2>
          </Reveal>

          <ol className="timeline">
            {journey.map((s, i) => (
              <li
                key={s.title}
                className={`stage ${i === journey.length - 1 ? "latest" : ""} ${s.label ? "" : "plain"}`}
              >
                <Reveal>
                  {s.label && <span className="stage-label">{s.label}</span>}
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  {s.items && (
                    <ul className="stage-list">
                      {s.items.map((it) => (
                        <li key={it.name}>
                          <strong>{it.name}</strong>
                          <span>{it.note}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="contact">
          <Reveal>
            <h2 className="section-title">Let&apos;s talk.</h2>
            <a className="btn btn-dark" href="mailto:jatin.solanki@group.one">
              Say hello
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="mailto:jatin.solanki@group.one">Email</a>
          <a href="#">LinkedIn</a>
        </div>
        <span>India · © 2026 Jatin Solanki</span>
      </footer>
    </>
  );
}
