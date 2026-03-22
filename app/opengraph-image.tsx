import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og";

export const runtime = "edge";
export const alt = "Happy Hands Cleaning Services";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return buildOgImage({
    eyebrow: "Cleaning Services",
    title: "Professional cleaning for homes, workplaces, and specialist spaces.",
    description:
      "Domestic, office, event, retail, hospitality, and managed property cleaning across London and the Home Counties.",
  });
}
