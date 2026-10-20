import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InteractiveDotGrid from "@/components/background/InteractiveDotGrid";
import PortfolioAssistant from "@/components/assistant/PortfolioAssistant";
import { Toast } from "@heroui/react";
import { siteConfig } from "@/utils/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.headline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "Portfolio of Md. Nafiul Islam, a Computer Science & Engineering student at BAIUST building full-stack web applications with React, Next.js, Node.js and MongoDB. Open to internship opportunities.",
  keywords: [
    "Md. Nafiul Islam",
    "Nafiul Islam",
    "full stack developer",
    "Next.js developer",
    "React developer",
    "CSE student",
    "BAIUST",
    "portfolio",
    "Bangladesh developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.links.github }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description:
      "Computer Science & Engineering student at BAIUST building full-stack web applications. Open to internship opportunities.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description:
      "Computer Science & Engineering student at BAIUST building full-stack web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-base font-sans text-slate-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[2000] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-base"
        >
          Skip to content
        </a>

        <InteractiveDotGrid />

        <Navbar />

        <main id="main-content" className="relative flex-1">
          {children}
        </main>

        <Footer />

        <PortfolioAssistant />

        <Toast.Provider placement="bottom end" />
      </body>
    </html>
  );
}
