import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richard Manansala | Fullstack Web Developer",
  description: "Portfolio of Richard Manansala, a fullstack web developer specialized in React, Next.js, and modern web technologies. Mathematician and Computer Scientist.",
  keywords: ["Fullstack Developer", "React Developer", "Next.js", "Portfolio", "Richard Manansala", "Web Development"],
  authors: [{ name: "Richard Manansala" }],
  openGraph: {
    title: "Richard Manansala | Fullstack Web Developer",
    description: "Portfolio of Richard Manansala, a fullstack web developer.",
    type: "website",
    locale: "en_US",
    siteName: "Richard Manansala Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:px-4 focus:py-2 focus:bg-primary focus:text-black focus:rounded-md focus:font-bold">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
