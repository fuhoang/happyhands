import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import ZebraHousingContent from "@/components/case-studies/ZebraHousingContent";
import { getCaseStudyBySlug } from "@/lib/case-studies";
import { buildSeoMetadata } from "@/lib/seo";

function getRequiredCaseStudy() {
  const caseStudy = getCaseStudyBySlug("zebra-housing");

  if (!caseStudy) {
    throw new Error("Missing case study data for zebra-housing");
  }

  return caseStudy;
}

const caseStudy = getRequiredCaseStudy();

export const metadata: Metadata = buildSeoMetadata({
  title: caseStudy.title,
  description: caseStudy.description,
  path: `/case-studies/${caseStudy.slug}`,
  image: caseStudy.image,
});

export default function ZebraHousingPage() {
  return (
    <CaseStudyPage caseStudy={caseStudy}>
      <ZebraHousingContent />
    </CaseStudyPage>
  );
}
