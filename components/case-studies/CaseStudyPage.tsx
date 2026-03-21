import { ReactNode } from "react";
import CtaBanner from "@/components/layout/CtaBanner";
import PageHero from "@/components/layout/PageHero";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { CaseStudySummary } from "@/lib/case-studies";

type CaseStudyPageProps = {
  caseStudy: CaseStudySummary;
  children: ReactNode;
};

export default function CaseStudyPage({ caseStudy, children }: CaseStudyPageProps) {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="Case Study"
        title={caseStudy.title}
        description={caseStudy.description}
        image={caseStudy.image}
        overlayClassName={caseStudy.overlayClassName}
      />
      {children}
      <CtaBanner
        eyebrow="Need a similar outcome?"
        title={caseStudy.ctaTitle}
        description=""
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Get Quote"
      />
      <SiteFooter />
    </main>
  );
}
