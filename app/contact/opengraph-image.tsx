import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og";

export const runtime = "edge";
export const alt = "Contact Happy Hands";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return buildOgImage({
    eyebrow: "Contact",
    title: "Request a cleaning quote from Happy Hands.",
    description:
      "Speak to Happy Hands about house cleaning, office cleaning, end of tenancy cleaning, and specialist cleaning across London and the Home Counties.",
  });
}
