import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toast } from "@heroui/react";
import InteractiveDotGrid from "@/components/bacground/InteractiveDotGrid";

const firaSans = Fira_Sans({
  weight: ["400", "500", "600", "700", '800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Portfolio | Md Nafiul Islam",
  description: "Portfolio of Md Nafiul Islam Eshan",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${firaSans.className} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0A1220] text-slate-100">
        <Navbar />
        <main className="grow">
          <InteractiveDotGrid/>
          {children}
          <Toast.Provider />
        </main>
        <Footer />
      </body>
    </html>
  );
}
