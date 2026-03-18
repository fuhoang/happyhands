import CovidZebraHousingContent from "@/components/case-studies/CovidZebraHousingContent";
import CtaBanner from "@/components/layout/CtaBanner";
import PageHero from "@/components/layout/PageHero";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export default function Covid19ZebraHousingPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="Case Study"
        title="COVID-19 Zebra Housing"
        description="A case study focused on Covid-related cleaning delivery, staff protection and compliance-led working practices at Zebra Housing."
        image="https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=1600"
        overlayClassName="bg-[linear-gradient(135deg,rgba(15,77,15,0.82)_0%,rgba(24,96,24,0.72)_55%,rgba(47,138,47,0.54)_100%)]"
      />
      <CovidZebraHousingContent />
      <CtaBanner
        eyebrow="Need a similar outcome?"
        title="Talk to Happy Hands about compliant cleaning support."
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
