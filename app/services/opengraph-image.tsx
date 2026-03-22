import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og";

export const runtime = "edge";
export const alt = "Happy Hands cleaning services in London";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return buildOgImage({
    eyebrow: "Services",
    title: "Cleaning services in London for homes, offices, events, and managed properties.",
    description:
      "Explore domestic cleaning, office cleaning, end of tenancy cleaning, event support, and specialist cleaning from Happy Hands.",
  });
}
