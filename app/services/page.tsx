import PageHero from "@/components/layout/PageHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader activePage="services" />
      <PageHero
        eyebrow="Happy Hands Services"
        title="Cleaning services for homes, businesses, events, and managed properties."
        description="Explore the full Happy Hands service range and choose the cleaning support that fits your property, schedule, and operational needs."
        image="https://images.pexels.com/photos/6197120/pexels-photo-6197120.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <ServicesGrid />
      <SiteFooter />
    </main>
  );
}
