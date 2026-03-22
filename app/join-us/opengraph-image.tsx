import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og";

export const runtime = "edge";
export const alt = "Cleaner jobs at Happy Hands";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return buildOgImage({
    eyebrow: "Cleaner Jobs",
    title: "Apply for cleaner jobs with Happy Hands.",
    description:
      "Tell us about your cleaning experience, availability, and preferred working areas in London and the Home Counties.",
  });
}
