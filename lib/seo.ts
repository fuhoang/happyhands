import type { Metadata } from "next";
import { type CaseStudySummary } from "@/lib/case-studies";
import { contactInfo, socialLinks } from "@/lib/site-content";
import { type ServiceItem } from "@/lib/services";

export const siteName = "Happy Hands";
export const siteTitle = "Happy Hands Cleaning Services";
export const siteDescription =
  "Professional cleaning services for homes, offices, events, managed properties, and specialist environments.";

function resolveSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://happyhands.vercel.app");

  return new URL(configuredUrl);
}

export const siteUrl = resolveSiteUrl();

export function buildSeoMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = new URL(path, siteUrl).toString();
  const images = image ? [{ url: image, alt: title }] : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName,
      images,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export function buildBreadcrumbStructuredData(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}

export function buildLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: siteName,
    url: siteUrl.toString(),
    telephone: contactInfo.phoneHref.replace("tel:", ""),
    email: contactInfo.email,
    areaServed: ["London", "Home Counties"],
    serviceType: "Cleaning services",
    sameAs: socialLinks
      .filter((link) => !link.isPlaceholder && !link.href.startsWith("mailto:"))
      .map((link) => link.href),
  };
}

export function buildServiceStructuredData(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "LocalBusiness",
      name: siteName,
      url: siteUrl.toString(),
      telephone: contactInfo.phoneHref.replace("tel:", ""),
      email: contactInfo.email,
    },
    areaServed: ["London", "Home Counties"],
    serviceType: service.title,
    url: new URL(`/services/${service.slug}`, siteUrl).toString(),
    image: service.heroImage,
  };
}

export function buildCaseStudyStructuredData(caseStudy: CaseStudySummary) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.description,
    image: [caseStudy.image],
    author: {
      "@type": "Organization",
      name: siteName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
    },
    mainEntityOfPage: new URL(`/case-studies/${caseStudy.slug}`, siteUrl).toString(),
    about: caseStudy.summary,
  };
}
