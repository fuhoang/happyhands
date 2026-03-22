import { buildBreadcrumbStructuredData, buildSeoMetadata, siteUrl } from "@/lib/seo";

describe("seo helpers", () => {
  it("builds canonical and social metadata for a route", () => {
    const metadata = buildSeoMetadata({
      title: "Cleaning Services",
      description: "Professional cleaning across London.",
      path: "/services",
      image: "https://example.com/og.png",
    });

    expect(metadata.alternates?.canonical).toBe("/services");
    expect(metadata.openGraph?.url).toBe(new URL("/services", siteUrl).toString());
    expect(metadata.openGraph?.images).toEqual([
      { url: "https://example.com/og.png", alt: "Cleaning Services" },
    ]);
    expect(metadata.twitter?.card).toBe("summary_large_image");
  });

  it("builds breadcrumb structured data with absolute URLs", () => {
    const data = buildBreadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]);

    expect(data["@type"]).toBe("BreadcrumbList");
    expect(data.itemListElement).toEqual([
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: new URL("/", siteUrl).toString(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: new URL("/services", siteUrl).toString(),
      },
    ]);
  });
});
