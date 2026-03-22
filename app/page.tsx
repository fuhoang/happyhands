import type { Metadata } from "next";
import HomeFinalCta from "@/components/home/HomeFinalCta";
import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import HomeStats from "@/components/home/HomeStats";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeWhyUs from "@/components/home/HomeWhyUs";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { buildSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Cleaning Services Across London and the Home Counties",
  description:
    "Happy Hands delivers house cleaning, office cleaning, end of tenancy cleaning, retail, hospitality, event, and specialist cleaning services across London and the Home Counties.",
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#5a160d]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_100%)]" />
      <SiteHeader mode="home" />
      <HomeHero />
      <HomeStats />
      <HomeServices />
      <HomeWhyUs />
      <HomeTestimonials />
      <HomeFinalCta />
      <SiteFooter />
    </main>
  );
}
