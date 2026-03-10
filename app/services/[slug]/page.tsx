import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { serviceMap, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceMap[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader activePage="services" />
      <PageHero
        eyebrow="Happy Hands Service"
        title={service.title}
        description={service.summary}
        image={service.heroImage}
      >
          <nav
            aria-label="Breadcrumb"
            className="mb-8 mt-1 flex flex-wrap items-center gap-2 text-sm font-black tracking-[0.08em] text-white/78"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-white/45">/</span>
            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>
            <span className="text-white/45">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
      </PageHero>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10">
        <div>
          <h2 className="site-h2">
            Service overview
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5f7d5f]">
            {service.intro}
          </p>
          {service.body?.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-base leading-8 text-[#5f7d5f]">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <CtaBanner
        eyebrow="Ready to book"
        title={`Request a tailored quote for ${service.title.toLowerCase()}.`}
        description="Speak to Happy Hands about availability, property details, and the cleaning support you need."
        primaryHref="/contact"
        primaryLabel="Contact Happy Hands"
        secondaryHref="/services"
        secondaryLabel="Back to all services"
        secondaryAsLink
      />
      <SiteFooter />
    </main>
  );
}
