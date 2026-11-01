import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

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
            </section>
          </Reveal>
        ))}
      </main>
    </>
  );
}
