import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrismBackgroundLoader from "@/components/PrismBackgroundLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaptik-subtitle.vercel.app"),
  title: "Kaptik — Ultimate Subtitle for Kpop Fans",
  description:
    "For every Kpop moment. Accurate subtitles with speaker identification, fandom glossary, and support across Bubble, Weverse, YouTube & more.",
  openGraph: {
    title: "Kaptik — Ultimate Subtitle for Kpop Fans",
    description:
      "For every Kpop moment. Accurate subtitles with speaker identification, fandom glossary, and support across Bubble, Weverse, YouTube & more.",
    url: "https://kaptik-subtitle.vercel.app/",
    type: "website",
    images: [
      {
        url: "/kaptik-og.png",
        width: 936,
        height: 468,
        alt: "Kaptik",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PrismBackgroundLoader />
        {children}
      </body>
    </html>
  );
}
