import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/Footer";

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

// Centralized SEO Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://exohost.com.ng"),
  title: {
    default: "ExoHost – Reliable Cloud Infrastructure & Hosting",
    template: "%s | ExoHost", 
  },
  description: "ExoHost provides dependable hosting and cloud infrastructure designed for startups, developers, and businesses across Africa and beyond.",
  keywords: ["Cloud Hosting", "Web Hosting Africa", "Domain Registration", "Scalable Infrastructure", "Startups"],
  
  // Highlighting the relationship: ExoHost is the creator, OmoolaEx is the publisher/owner
  authors: [
    { name: "ExoHost Team" },
    { name: "OmoolaEx", url: "https://omoolaex.com.ng" } 
  ],
  publisher: "OmoolaEx",
  creator: "ExoHost",
  
  verification: {
    google: "vj_aE2-_vqBxj7kpCjPTZL45iE5XEE8jh9ghCGc6qwI",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", 
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://exohost.com.ng",
    siteName: "ExoHost",
    title: "ExoHost – Built for the next generation of builders",
    description: "Reliable, secure, and scalable infrastructure that empowers businesses to grow.",
    images: [
      {
        url: "/logo-exohost.png",
        width: 1200,
        height: 630,
        alt: "ExoHost Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExoHost | Cloud Infrastructure",
    description: "Infrastructure that removes technical friction so you can focus on growth.",
    images: ["/logo-exohost.png"],
    creator: "@exohost",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data: Establishing the Parent-Child Organization Link
  const jsonLd = {
    "@context": "https://schema.org",
    "@id": "https://exohost.com.ng/#organization",
    "@type": "Organization",
    "name": "ExoHost",
    "url": "https://exohost.com.ng",
    "logo": "https://exohost.com.ng/logo-exohost.png",
    "description": "Reliable cloud infrastructure and hosting services.",
    // This property establishes OmoolaEx as the parent organization
    "parentOrganization": {
      "@type": "Organization",
      "name": "OmoolaEx",
      "url": "https://omoolaex.com.ng"
    },
    "sameAs": [
      "https://twitter.com/exohost",
      "https://linkedin.com/company/exohost"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Injecting JSON-LD for Search Engine Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-gray-900 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}