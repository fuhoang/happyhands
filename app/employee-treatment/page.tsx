import CtaBanner from "@/components/layout/CtaBanner";
import EmployeeTreatmentContent from "@/components/employee-treatment/EmployeeTreatmentContent";
import PageHero from "@/components/layout/PageHero";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export default function EmployeeTreatmentPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader />
      <PageHero
        eyebrow="Happy Hands Standards"
        title="Employee Treatment"
        description="We believe strong service begins with fair treatment, clear processes, and respect for every member of the Happy Hands team."
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <EmployeeTreatmentContent />
      <CtaBanner
        eyebrow="Work with Happy Hands"
        title="Want to work with a professional team?"
        description="Speak to us if you are looking for a cleaning company built on clear standards, reliable service, and fair treatment of staff."
        primaryHref="tel:+447973403788"
        primaryLabel="Call 07973 403 788"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Email our team"
      />
      <SiteFooter />
    </main>
  );
}
