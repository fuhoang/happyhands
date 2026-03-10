import CtaBanner from "@/components/CtaBanner";
import ContactDetails from "@/components/contact/ContactDetails";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f2a1f]">
      <SiteHeader activePage="contact" />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Happy Hands"
        description="Speak to our team about domestic, commercial, retail, hospitality, event, and specialist cleaning services across London and the Home Counties."
        image="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <ContactDetails />
      <CtaBanner
        eyebrow="Ready to book"
        title="Request your cleaning quote"
        description="Tell us the property type, service needed, and preferred timing, and Happy Hands will get back to you with a tailored response."
        primaryHref="tel:+447973403788"
        primaryLabel="Call now"
        secondaryHref="mailto:happyhandscustomerservice@gmail.com"
        secondaryLabel="Email us"
      />
      <SiteFooter />
    </main>
  );
}
