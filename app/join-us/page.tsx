import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import RecruitmentContent from "@/components/recruitment/RecruitmentContent";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function JoinUsPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="Join Happy Hands"
        title="Join our cleaner recruitment team"
        description="Apply to work with Happy Hands and help deliver dependable cleaning services across homes, offices, communal buildings, and managed properties."
        image="https://images.pexels.com/photos/6197044/pexels-photo-6197044.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <RecruitmentContent />
        <CtaBanner
          eyebrow="Ready to apply"
          title="Send your cleaner application today."
          description="Tell us about your experience, availability, and where you can work, and our team will review your application."
          primaryHref="mailto:happyhandscustomerservice@gmail.com?subject=Cleaner%20Application"
          primaryLabel="Apply by Email"
          secondaryHref="tel:+447973403788"
          secondaryLabel="Call Recruitment"
          className="pb-16"
        />
      </div>
      <SiteFooter />
    </main>
  );
}
