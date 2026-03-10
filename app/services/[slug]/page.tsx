import { notFound } from "next/navigation";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import ServiceOverview from "@/components/services/ServiceOverview";
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
        <ServiceBreadcrumb title={service.title} />
      </PageHero>
      <ServiceOverview intro={service.intro} body={service.body} />
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
