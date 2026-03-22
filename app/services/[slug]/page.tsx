import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBanner from "@/components/layout/CtaBanner";
import PageHero from "@/components/layout/PageHero";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import ServiceOverview from "@/components/services/ServiceOverview";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import {
  getServiceBySlug,
  getServicePageProps,
  services,
} from "@/lib/services";
import { buildSeoMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return buildSeoMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
    image: service.heroImage,
  });
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

  const servicePage = getServicePageProps(service);

  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader activePage="services" />
      <PageHero
        eyebrow={servicePage.heroEyebrow}
        title={service.title}
        description={service.summary}
        image={service.heroImage}
      >
        <ServiceBreadcrumb title={service.title} />
      </PageHero>
      <ServiceOverview title={servicePage.overviewTitle} intro={service.intro} body={service.body} />
      <CtaBanner
        eyebrow={servicePage.ctaEyebrow}
        title={servicePage.ctaTitle}
        description={servicePage.ctaDescription}
        primaryHref={servicePage.ctaPrimaryHref}
        primaryLabel={servicePage.ctaPrimaryLabel}
        secondaryHref={servicePage.ctaSecondaryHref}
        secondaryLabel={servicePage.ctaSecondaryLabel}
        secondaryAsLink
      />
      <SiteFooter />
    </main>
  );
}
