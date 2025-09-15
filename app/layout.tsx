import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // better performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ExoHost – Affordable Domains & Hosting",
  description: "Find and register your perfect domain with ExoHost. Reliable web hosting & website solutions for businesses.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Ensures responsive scaling on all devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-gray-900 flex flex-col min-h-screen`}
      >
        {/* Global Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow w-full">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
