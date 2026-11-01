import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { journey } from "@/lib/journey";
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

          {projects.map((p) => (
            <Reveal key={p.slug}>
              <article id={p.slug} className="project">
                <h3>{p.title}</h3>
                <p>{renderBold(p.description)}</p>

                <a href={`#${p.slug}`} className="case-card" aria-label={`${p.title} case study`}>
                  <div className="zoom">
                    <div className="screen screen-a" />
                    <div className="screen screen-b" />
                  </div>
                  <span className="soon">Screens coming soon</span>
                </a>

                <div className="project-cta">
                  <a href={`#${p.slug}`} className="pill-link">View case study →</a>
                </div>
              </article>
            </Reveal>
          ))}
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
                <svg className="pen" width="30" height="30" viewBox="0 0 30 30" aria-hidden>
                  <path d="M4 4l7.5 2.5 8 8-5 5-8-8z" fill="#f5a623" stroke="#1d1d1f" strokeWidth="1.6" strokeLinejoin="round" />
                  <circle cx="9.5" cy="9.5" r="1.7" fill="#fff" stroke="#1d1d1f" strokeWidth="1.2" />
                  <rect x="18" y="19" width="8" height="5" rx="2.5" transform="rotate(40 22 21.5)" fill="#f5a623" stroke="#1d1d1f" strokeWidth="1.4" />
                </svg>
                <svg className="sel-arrow" width="30" height="30" viewBox="0 0 24 24" aria-hidden>
                  <path d="M3 2l17 8-7.5 2.2L9.8 20z" fill="#111" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              </span>
            </h2>
          </Reveal>

          <ol className="timeline">
            {journey.map((s, i) => (
              <li
                key={s.label}
                className={`stage ${i === journey.length - 1 ? "latest" : ""}`}
              >
                <Reveal>
                  <span className="stage-label">{s.label}</span>
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
