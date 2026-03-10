import ZebraHousingContent from "@/components/case-studies/ZebraHousingContent";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function ZebraHousingPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="Case Study"
        title="Zebra Housing"
        description="A case study covering long-term cleaning support for Zebra Housing across residential sites, communal areas and tenancy turnover work."
        image="https://images.pexels.com/photos/7937325/pexels-photo-7937325.jpeg?auto=compress&cs=tinysrgb&w=1600"
        overlayClassName="bg-[linear-gradient(135deg,rgba(15,77,15,0.76)_0%,rgba(24,96,24,0.66)_55%,rgba(47,138,47,0.5)_100%)]"
      />
      <ZebraHousingContent />
      <CtaBanner
        eyebrow="Need a similar outcome?"
        title="Talk to Happy Hands about your cleaning requirements."
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
