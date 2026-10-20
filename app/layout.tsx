import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { AnalyticsConsent } from "@/components/AnalyticsConsent";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://auralis.ai"),
  title: "Auralis — AI voice infrastructure",
  description:
    "Create natural voice experiences and build conversational agents with Auralis AI voice infrastructure.",
  applicationName: "Auralis",
  keywords: [
    "AI voice",
    "text to speech",
    "voice agents",
    "audio infrastructure",
    "speech generation",
  ],
  openGraph: {
    title: "Auralis — AI voice infrastructure",
    description:
      "Create natural voice experiences and build conversational agents with Auralis.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auralis — AI voice infrastructure",
    description:
      "Create natural voice experiences and build conversational agents with Auralis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <a className="skip-to-content" href="#main-content">
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <AnalyticsConsent />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
