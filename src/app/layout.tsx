import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import SmoothScroll from "@/components/ui/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | John Doe - Développeur Web",
  description: "Portfolio professionnel de John Doe, développeur web spécialisé en React, Next.js et Tailwind CSS.",
  keywords: ["développeur web", "portfolio", "React", "Next.js", "Tailwind CSS", "frontend", "développeur frontend"],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  publisher: "John Doe",
  robots: "index, follow",
  metadataBase: new URL("https://johndoe-portfolio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Portfolio | John Doe - Développeur Web",
    description: "Portfolio professionnel de John Doe, développeur web spécialisé en React, Next.js et Tailwind CSS.",
    url: "https://johndoe-portfolio.com",
    siteName: "Portfolio de John Doe",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | John Doe - Développeur Web",
    description: "Portfolio professionnel de John Doe, développeur web spécialisé en React, Next.js et Tailwind CSS.",
    creator: "@johndoe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212] text-white`}
      >
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
