import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import CovidZebraHousingContent from "@/components/case-studies/CovidZebraHousingContent";
import { getCaseStudyBySlug } from "@/lib/case-studies";
import { buildSeoMetadata } from "@/lib/seo";

const caseStudy = getCaseStudyBySlug("covid-19-zebra-housing");

if (!caseStudy) {
  throw new Error("Missing case study data for covid-19-zebra-housing");
}

export const metadata: Metadata = buildSeoMetadata({
  title: caseStudy.title,
  description: caseStudy.description,
  path: `/case-studies/${caseStudy.slug}`,
  image: caseStudy.image,
});

export default function Covid19ZebraHousingPage() {
  return (
    <CaseStudyPage caseStudy={caseStudy}>
      <CovidZebraHousingContent />
    </CaseStudyPage>
  );
}
