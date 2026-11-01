import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import type { CSSProperties } from "react";
import { caseStudies, getCaseStudy, type Figure } from "@/lib/case-studies";

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

  return (
    <>
      <Nav />
      <main className="case">
        <Link href="/#work" className="case-back">← Back to work</Link>
        <h1 className="case-title">{c.title}</h1>
        <p className="case-intro">{c.intro}</p>

        <div className="case-visual">
          <span className="soon">Cover screens coming soon</span>
        </div>

        {c.sections.map((s) => (
          <Reveal key={s.id}>
            <section id={s.id} className="case-section">
              <h2>{s.title}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {s.figure && (
                <figure className="case-figure">
                  <div className="case-shot">
                    <Image src={s.figure.src} alt={s.figure.alt} width={s.figure.width} height={s.figure.height} />
                  </div>
                  <figcaption>{s.figure.caption}</figcaption>
                </figure>
              )}

              {s.groups?.map((g) => (
                <div key={g.title} className="problem-group">
                  <h3>{g.title}</h3>
                  {g.figures.map((f) => (
                    <Annotated key={f.src} f={f} />
                  ))}
                </div>
              ))}
            </section>
          </Reveal>
        ))}
      </main>
    </>
  );
}
