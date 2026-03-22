import type { Metadata } from "next";
import CtaBanner from "@/components/layout/CtaBanner";
import ContactDetails from "@/components/contact/ContactDetails";
import QuoteRequestForm from "@/components/contact/QuoteRequestForm";
import PageHero from "@/components/layout/PageHero";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Contact Happy Hands",
  description:
    "Request a cleaning quote from Happy Hands for house cleaning, office cleaning, end of tenancy cleaning, event support, and specialist cleaning across London and the Home Counties.",
  path: "/contact",
  image:
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const prefilledService =
    typeof resolvedSearchParams.service === "string" ? resolvedSearchParams.service : "";

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
      <QuoteRequestForm prefilledService={prefilledService} />
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
