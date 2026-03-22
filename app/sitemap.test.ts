import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("includes core static, service, and case study routes", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toContain("https://happyhands.vercel.app/");
    expect(urls).toContain("https://happyhands.vercel.app/services");
    expect(urls).toContain("https://happyhands.vercel.app/contact");
    expect(urls).toContain("https://happyhands.vercel.app/services/home-cleaning");
    expect(urls).toContain("https://happyhands.vercel.app/case-studies/zebra-housing");
  });
});
