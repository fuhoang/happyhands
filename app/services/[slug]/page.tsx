import { notFound } from "next/navigation";
import CtaBanner from "@/components/layout/CtaBanner";
import PageHero from "@/components/layout/PageHero";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import ServiceOverview from "@/components/services/ServiceOverview";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import {
  getServiceBySlug,
  getServiceCtaTitle,
  getServiceQuoteHref,
  services,
} from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

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
        title={getServiceCtaTitle(service)}
        description="Speak to Happy Hands about availability, property details, and the cleaning support you need."
        primaryHref={getServiceQuoteHref(service)}
        primaryLabel="Contact Happy Hands"
        secondaryHref="/services"
        secondaryLabel="Back to all services"
        secondaryAsLink
      />
      <SiteFooter />
    </main>
  );
}
