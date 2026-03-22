import type { Metadata } from "next";

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
