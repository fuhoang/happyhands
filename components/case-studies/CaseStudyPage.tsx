import { ReactNode } from "react";
import StructuredData from "@/components/seo/StructuredData";
import CtaBanner from "@/components/layout/CtaBanner";
import PageHero from "@/components/layout/PageHero";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { CaseStudySummary } from "@/lib/case-studies";
import {
  buildBreadcrumbStructuredData,
  buildCaseStudyStructuredData,
} from "@/lib/seo";

type CaseStudyPageProps = {
  caseStudy: CaseStudySummary;
  children: ReactNode;
};

export default function CaseStudyPage({ caseStudy, children }: CaseStudyPageProps) {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <StructuredData
        data={[
          buildBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: caseStudy.title, path: `/case-studies/${caseStudy.slug}` },
          ]),
          buildCaseStudyStructuredData(caseStudy),
        ]}
      />
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
