import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { servicesIndexContent } from "@/lib/services";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Cleaning Services",
  description: servicesIndexContent.heroDescription,
  path: "/services",
  image: servicesIndexContent.heroImage,
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader activePage="services" />
      <PageHero
        eyebrow={servicesIndexContent.heroEyebrow}
        title={servicesIndexContent.heroTitle}
        description={servicesIndexContent.heroDescription}
        image={servicesIndexContent.heroImage}
      />
      <ServicesGrid />
      <SiteFooter />
    </main>
  );
}
