import CtaBanner from "@/components/CtaBanner";
import FoggingDocuments from "@/components/health-and-safety/FoggingDocuments";
import HealthAndSafetyOverview from "@/components/health-and-safety/HealthAndSafetyOverview";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function HealthAndSafetyPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="Happy Hands Standards"
        title="Health and Safety"
        description="We maintain clear health and safety procedures to protect our clients, our staff, and every environment we work in across London and the Home Counties."
        image="https://images.pexels.com/photos/4108711/pexels-photo-4108711.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <HealthAndSafetyOverview />
      <FoggingDocuments />
      <CtaBanner
        eyebrow="Work with Happy Hands"
        title="Need a cleaning team with strong standards?"
        description="Speak to us about cleaning support backed by professional processes, reliable staff, and consistent site care."
        primaryHref="tel:+447973403788"
        primaryLabel="Call 07973 403 788"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Email our team"
      />
      <SiteFooter />
    </main>
  );
}
