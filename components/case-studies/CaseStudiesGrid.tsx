import Link from "next/link";
import InfoCard from "@/components/ui/InfoCard";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudiesGrid() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
            Case studies
          </p>
          <h2 className="mt-3 site-h2">Examples of how Happy Hands delivers in practice</h2>
          <p className="mt-5 text-base leading-8 text-[#5f7d69]">
            Explore a selection of client work covering managed housing, communal
            cleaning, and compliance-led delivery in complex environments.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <InfoCard key={caseStudy.slug} className="overflow-hidden p-0">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(135deg, rgba(13,59,13,0.28), rgba(22,110,22,0.16)), url(${caseStudy.image})` }}
              />
              <div className="p-8">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#008000]">
                  {caseStudy.eyebrow}
                </p>
                <h3 className="mt-3 site-h3">{caseStudy.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#5f7d69]">
                  {caseStudy.summary}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/case-studies/${caseStudy.slug}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#008000] px-6 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#006600]"
                  >
                    Read Case Study
                  </Link>
                </div>
              </div>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
