import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-serif",
  subsets: ["latin"],
    weight: ['400']
});

export const metadata: Metadata = {
  title: "Open Paradox",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.variable, calistoga.variable,`antialiased bg-gray-900 text-white font-sans`)}
      >
        {children}
      </body>
    </html>
  );
}
