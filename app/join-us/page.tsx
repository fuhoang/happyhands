import type { Metadata } from "next";
import CtaBanner from "@/components/layout/CtaBanner";
import PageHero from "@/components/layout/PageHero";
import RecruitmentContent from "@/components/recruitment/RecruitmentContent";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { RECRUITMENT_EMAIL_FALLBACK } from "@/lib/recruitment";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Cleaner Jobs at Happy Hands",
  description:
    "Apply for cleaner jobs with Happy Hands in London and tell us about your cleaning experience, availability, and preferred working areas.",
  path: "/join-us",
  image:
    "https://images.pexels.com/photos/6197044/pexels-photo-6197044.jpeg?auto=compress&cs=tinysrgb&w=1600",
});

export default function JoinUsPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="Join Happy Hands"
        title="Apply for cleaner jobs with Happy Hands"
        description="Join Happy Hands as a cleaner and help deliver dependable home cleaning, office cleaning, communal cleaning, and managed property support across London and the Home Counties."
        image="https://images.pexels.com/photos/6197044/pexels-photo-6197044.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <RecruitmentContent />
        <CtaBanner
          eyebrow="Ready to apply"
          title="Send your cleaner application today."
          description="Tell us about your experience, availability, and where you can work, and our team will review your application."
          primaryHref={`mailto:${RECRUITMENT_EMAIL_FALLBACK}?subject=Cleaner%20Application`}
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
