import type { Metadata } from "next";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import CtaBanner from "@/components/layout/CtaBanner";
import PageHero from "@/components/layout/PageHero";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { buildSeoMetadata } from "@/lib/seo";

const caseStudiesPageDescription =
  "A selection of client examples showing how Happy Hands delivers reliable cleaning support across communal spaces, managed housing, and compliance-led environments.";

export const metadata: Metadata = buildSeoMetadata({
  title: "Case Studies",
  description: caseStudiesPageDescription,
  path: "/case-studies",
  image:
    "https://images.pexels.com/photos/6197044/pexels-photo-6197044.jpeg?auto=compress&cs=tinysrgb&w=1600",
});

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="Case Studies"
        title="See how Happy Hands supports clients in the real world"
        description={caseStudiesPageDescription}
        image="https://images.pexels.com/photos/6197044/pexels-photo-6197044.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <CaseStudiesGrid />
      <CtaBanner
        eyebrow="Need a similar outcome?"
        title="Talk to Happy Hands about your cleaning requirements."
        description="If you need dependable cleaning support for housing, workplaces, shared spaces, or specialist environments, speak to our team."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Get Quote"
      />
      <SiteFooter />
    </main>
  );
}
