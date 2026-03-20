export type CaseStudySummary = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
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
  },
  {
    slug: "covid-19-zebra-housing",
    title: "COVID-19 Zebra Housing",
    eyebrow: "Compliance-led pandemic response",
    summary:
      "A case study focused on Covid-related cleaning delivery, cleaner protection, and compliance-led working practices at Zebra Housing.",
    image:
      "https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];
