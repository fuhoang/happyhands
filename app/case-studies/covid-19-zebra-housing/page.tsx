import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import CovidZebraHousingContent from "@/components/case-studies/CovidZebraHousingContent";
import { getCaseStudyBySlug } from "@/lib/case-studies";

export default function Covid19ZebraHousingPage() {
  const caseStudy = getCaseStudyBySlug("covid-19-zebra-housing");

  if (!caseStudy) {
    throw new Error("Missing case study data for covid-19-zebra-housing");
  }

  return (
    <CaseStudyPage caseStudy={caseStudy}>
      <CovidZebraHousingContent />
    </CaseStudyPage>
  );
}
