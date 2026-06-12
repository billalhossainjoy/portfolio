import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import JsonLd from "@/components/JsonLd";
import PageLoader from "@/components/page-loader";
import CursorSpotlight from "@/components/cursor-spotlight";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-serif",
  subsets: ["latin"],
    weight: ['400']
});

const siteUrl = "https://billalhossain.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Billal Hossain — Full-Stack Developer",
    template: "%s | Billal Hossain",
  },
  description:
    "Billal Hossain is a full-stack developer building fast, type-safe web and mobile applications with Next.js, React, Node.js and NestJS.",
  keywords: [
    "Billal Hossain",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Billal Hossain", url: siteUrl }],
  creator: "Billal Hossain",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Billal Hossain",
    title: "Billal Hossain — Full-Stack Developer",
    description:
      "Full-stack developer building fast, type-safe web and mobile applications with Next.js, React, Node.js and NestJS.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billal Hossain — Full-Stack Developer",
    description:
      "Full-stack developer building fast, type-safe web and mobile applications with Next.js, React, Node.js and NestJS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.variable, calistoga.variable, "antialiased bg-gray-900 text-white font-sans")}
      >
        <JsonLd />
        <PageLoader />
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
