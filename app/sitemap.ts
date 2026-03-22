import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { siteUrl } from "@/lib/seo";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/contact",
    "/join-us",
    "/health-and-safety",
    "/employee-treatment",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: new URL(path || "/", siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: new URL(`/services/${service.slug}`, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...caseStudies.map((caseStudy) => ({
      url: new URL(`/case-studies/${caseStudy.slug}`, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
