import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { caseStudies, getCaseStudy, type Crop } from "@/lib/case-studies";

// Shows one region of a screenshot with outlines drawn on it (all positions come from the source pixels).
function CropView({ c }: { c: Crop }) {
  const pct = (v: number, of: number) => `${(v / of) * 100}%`;
  return (
    <div className="crop" role="img" aria-label={c.alt} style={{ aspectRatio: `${c.w} / ${c.h}` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="crop-img" src={c.src} alt="" />
      {c.marks.map((m, i) => (
        <span
          key={i}
          className={`mark${m.dashed ? " dashed" : ""}`}
          style={{
            left: pct(m.x - c.x, c.w),
            top: pct(m.y - c.y, c.h),
            width: pct(m.w, c.w),
            height: pct(m.h, c.h),
          }}
        >
          {m.label && <em>{m.label}</em>}
        </span>
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
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.title}>
                        <div className="problem-text">
                          <h4>{it.title}</h4>
                          <p>{it.text}</p>
                        </div>
                        <CropView c={it.crop} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </Reveal>
        ))}
      </main>
    </>
  );
}
