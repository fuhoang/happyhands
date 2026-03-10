import AboutOverview from "@/components/about/AboutOverview";
import AboutTeam from "@/components/about/AboutTeam";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="About Happy Hands"
        title="Professional cleaning built on consistency, trust, and care."
        description="Happy Hands has built its reputation by delivering reliable cleaning services with high standards, friendly support, and attention to detail across homes, businesses, and specialist environments."
        image="https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <AboutOverview />
      <AboutTeam />
      <CtaBanner
        eyebrow="Work with Happy Hands"
        title="Looking for reliable cleaning support?"
        description="Speak to our team about tailored cleaning support for homes, offices, retail, hospitality, and events."
        primaryHref="tel:+447973403788"
        primaryLabel="Call 07973 403 788"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Email our team"
      />
      <SiteFooter />
    </main>
  );
}
