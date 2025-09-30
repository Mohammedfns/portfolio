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
  title: "Portfolio | EL-FANNASSI Mohammed - Développeur Web",
  description: "Portfolio professionnel de EL-FANNASSI Mohammed.",
  keywords: ["data analyst", "portfolio", "React", "Next.js", "Tailwind CSS", "frontend", "data scientist"],
  authors: [{ name: "EL-FANNASSI Mohammed" }],
  creator: "EL-FANNASSI Mohammed",
  publisher: "EL-FANNASSI Mohammed",
  robots: "index, follow",
  metadataBase: new URL("https://elfannassimohammed-portfolio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Portfolio | EL-FANNASSI Mohammed - Data Analyst/Data Scientist",
    description: "Portfolio professionnel de EL-FANNASSI Mohammed.",
    url: "https://elfannassimohammed-portfolio.com",
    siteName: "Portfolio de EL-FANNASSI Mohammed",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | EL-FANNASSI Mohammed - Data Analyst/Data Scientist ",
    description: "Portfolio professionnel de EL-FANNASSI.",
    creator: "@elfannassimohammed",
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
