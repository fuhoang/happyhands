export type CaseStudySummary = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  description: string;
  overlayClassName: string;
  ctaTitle: string;
};

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "zebra-housing",
    title: "Zebra Housing",
    eyebrow: "Residential and communal cleaning",
    summary:
      "Long-term cleaning support for Zebra Housing across communal spaces, shared facilities, and end of tenancy turnover work.",
    image:
      "https://images.pexels.com/photos/7937325/pexels-photo-7937325.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "A case study covering long-term cleaning support for Zebra Housing across residential sites, communal areas and tenancy turnover work.",
    overlayClassName:
      "bg-[linear-gradient(135deg,rgba(15,77,15,0.76)_0%,rgba(24,96,24,0.66)_55%,rgba(47,138,47,0.5)_100%)]",
    ctaTitle: "Talk to Happy Hands about your cleaning requirements.",
  },
  {
    slug: "covid-19-zebra-housing",
    title: "COVID-19 Zebra Housing",
    eyebrow: "Compliance-led pandemic response",
    summary:
      "A case study focused on Covid-related cleaning delivery, cleaner protection, and compliance-led working practices at Zebra Housing.",
    image:
      "https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "A case study focused on Covid-related cleaning delivery, staff protection and compliance-led working practices at Zebra Housing.",
    overlayClassName:
      "bg-[linear-gradient(135deg,rgba(15,77,15,0.82)_0%,rgba(24,96,24,0.72)_55%,rgba(47,138,47,0.54)_100%)]",
    ctaTitle: "Talk to Happy Hands about compliant cleaning support.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
