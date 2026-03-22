import type { Metadata } from "next";
import SupportChatWidget from "@/components/chat/SupportChatWidget";
import StructuredData from "@/components/seo/StructuredData";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { buildLocalBusinessStructuredData, siteDescription, siteTitle, siteUrl } from "@/lib/seo";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: "%s | Happy Hands",
  },
  description: siteDescription,
  applicationName: "Happy Hands",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Happy Hands",
    title: siteTitle,
    description: siteDescription,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${montserrat.variable} antialiased`}>
        <StructuredData data={buildLocalBusinessStructuredData()} />
        {children}
        <SupportChatWidget />
      </body>
    </html>
  );
}
