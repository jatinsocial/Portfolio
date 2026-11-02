import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import SelHeading from "@/components/SelHeading";
import type { CSSProperties } from "react";
import { caseStudies, getCaseStudy, type CaseSection, type Compare, type Figure } from "@/lib/case-studies";

// A screenshot with dots on it, joined by thin lines to short notes beside it.
// Every position is a % of the figure, worked out here from page pixels so the markup can stay plain CSS.
function Annotated({ f }: { f: Figure }) {
  const img = f.img ?? 68;
  const side = f.side ?? "right";
  const imgL = side === "right" ? 0 : 100 - img;
  const edge = side === "right" ? img + 6 : imgL - 6;
  const px = (v: number) => imgL + img * ((v - f.x) / f.w);
  const py = (v: number) => (100 * (v - f.y)) / f.h;
  const aspect = f.w / (img / 100) / f.h;

  return (
    <div
      className="anno"
      data-side={side}
      style={{ "--img": `${img}%`, "--imgL": `${imgL}%`, "--ar": aspect } as CSSProperties}
    >
      <div className="anno-shot" style={{ aspectRatio: `${f.w} / ${f.h}` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={f.src} alt={f.alt} />
      </div>

      <svg className="anno-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        {f.callouts.map((c) => {
          const g = c.g ?? 0;
          const gx = side === "right" ? img + 2 + g : imgL - 2 - g;
          return (
            <path
              key={c.title}
              d={`M${px(c.ax)} ${py(c.ay)} H${gx} V${py(c.cy ?? c.ay)} H${edge}`}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {f.callouts.map((c) => (
        <span key={c.title} className="anno-dot" style={{ left: `${px(c.ax)}%`, top: `${py(c.ay)}%` }} aria-hidden />
      ))}

      {f.callouts.map((c) => (
        <div
          key={c.title}
          className="callout"
          style={{ "--cy": `${py(c.cy ?? c.ay)}%`, "--edge": `${edge}%` } as CSSProperties}
        >
          <h4>{c.title}</h4>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
}

// Before and after, side by side: two framed screenshots with a label each.
function CompareView({ c }: { c: Compare }) {
  return (
    <div className="compare">
      {(c.title || c.text) && (
        <div className="compare-head">
          {c.title && <h3>{c.title}</h3>}
          {c.text && <p>{c.text}</p>}
        </div>
      )}
      <div className="compare-grid">
        {([["Before", c.before], ["After", c.after]] as const).map(([label, shot]) => (
          <figure key={label} className={`shot shot-${label.toLowerCase()}`}>
            <span className="shot-label">{label}</span>
            <div className="shot-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={shot.src} alt={shot.alt} />
            </div>
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function SectionView({ s }: { s: CaseSection }) {
  return (
    <Reveal>
      <section id={s.id} className="case-section">
        {s.heading ? <SelHeading lead={s.heading.lead} word={s.heading.word} /> : <h2>{s.title}</h2>}
        {s.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {s.quote && <blockquote className="pull">{s.quote}</blockquote>}

        {s.hmw && (
          <ol className="hmw">
            {s.hmw.map((q, i) => (
              <li key={q}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {q}
              </li>
            ))}
          </ol>
        )}

        {s.compare?.map((c) => (
          <CompareView key={c.before.src} c={c} />
        ))}

        {s.legend && (
          <div className="legend">
            {s.legend.map((l) => (
              <div key={l.title}>
                <h4>{l.title}</h4>
                <p>{l.text}</p>
              </div>
            ))}
          </div>
        )}

        {s.figures?.map((f) => (
          <Annotated key={f.src} f={f} />
        ))}

        {s.groups?.map((g) => (
          <div key={g.title + g.figures.length + (g.figures[0]?.src ?? "")} className="problem-group">
            {g.title && <h3>{g.title}</h3>}
            {g.notes?.map((n) => (
              <div key={n.title} className="idea">
                <h4>{n.title}</h4>
                <p>{n.text}</p>
              </div>
            ))}
            {g.figures.map((f) => (
              <Annotated key={f.src} f={f} />
            ))}
          </div>
        ))}
      </section>
    </Reveal>
  );
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const c = getCaseStudy((await params).slug);
  return { title: c ? `${c.title} · Jatin Solanki` : "Case study" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const c = getCaseStudy((await params).slug);
  if (!c) notFound();

  const byId = new Map(c.sections.map((x) => [x.id, x]));

  return (
    <>
      <Nav />
      <main className="case">
        <header className="case-hero">
          <Link href="/#work" className="case-back">← Back to work</Link>
          <h1 className="case-title">{c.title}</h1>
          <p className="case-intro">{c.intro}</p>

          <dl className="glance">
            {c.glance.map((g) => (
              <div key={g.label}>
                <dt>{g.label}</dt>
                <dd>{g.value}</dd>
              </div>
            ))}
          </dl>

          <div className="case-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.cover.src} alt={c.cover.alt} />
          </div>

          <nav className="case-nav" aria-label="Case study parts">
            {c.parts.map((p) => (
              <a key={p.id} href={`#${p.id}`}>{p.title}</a>
            ))}
          </nav>
        </header>

        {c.parts.map((p) => (
          <div key={p.id} id={p.id} className={`part part-${p.id}`}>
            {p.sections.map((id) => {
              const s = byId.get(id);
              return s ? <SectionView key={id} s={s} /> : null;
            })}
          </div>
        ))}
      </main>
    </>
  );
}
