import RecruitmentApplicationForm from "@/components/recruitment/RecruitmentApplicationForm";
import RecruitmentBenefits from "@/components/recruitment/RecruitmentBenefits";

export default function RecruitmentContent() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <RecruitmentBenefits />
      <div className="mt-10">
        <RecruitmentApplicationForm />
      </div>
    </section>
  );
}
