import { Metadata } from "next";
import React from "react";

// Import all modular sections
import AboutHero from "@/components/about/AboutHero";
import WhyExoHost from "@/components/about/WhyExoHost";
import OurStory from "@/components/about/OurStory";
import WhatWeDo from "@/components/about/WhatWeDo";
import OurDifference from "@/components/about/OurDifference";
import WhoWeServe from "@/components/about/WhoWeServe";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import AboutCTA from "@/components/about/AboutCTA";

// 1. SEO Metadata for the About Page
export const metadata: Metadata = {
  title: "Our Mission & Infrastructure Philosophy",
  description: "Discover the story behind ExoHost. From our mission to provide reliable cloud infrastructure to the core values that drive our support for startups and developers.",
  openGraph: {
    title: "About ExoHost | Built for Builders",
    description: "We handle the infrastructure so you can focus on the product. Learn about our mission and vision.",
    url: "https://exohost.com.ng/about",
  },
};

const AboutPage: React.FC = () => {
  // 2. Structured Data (Schema.org) to build brand authority
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "ExoHost",
      "foundingLocation": "Africa",
      "description": "ExoHost provides dependable hosting and cloud infrastructure designed for startups and developers.",
      "knowsAbout": [
        "Cloud Computing",
        "Web Hosting",
        "Digital Infrastructure",
        "Server Management"
      ]
    }
  };

  return (
    <>
      {/* 3. Injecting Page-Specific Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="w-full min-h-screen font-sans bg-white text-slate-900">
        <AboutHero />
        <WhyExoHost />
        <OurStory />
        <WhatWeDo />
        <OurDifference />
        <WhoWeServe />
        <MissionVision />
        <CoreValues />
        <AboutCTA />
      </main>
    </>
  );
};

export default AboutPage;