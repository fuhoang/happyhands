import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import ZebraHousingContent from "@/components/case-studies/ZebraHousingContent";
import { getCaseStudyBySlug } from "@/lib/case-studies";

export default function ZebraHousingPage() {
  const caseStudy = getCaseStudyBySlug("zebra-housing");

  if (!caseStudy) {
    throw new Error("Missing case study data for zebra-housing");
  }

  return (
    <CaseStudyPage caseStudy={caseStudy}>
      <ZebraHousingContent />
    </CaseStudyPage>
  );
}
