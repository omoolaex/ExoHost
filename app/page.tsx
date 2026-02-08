import { Metadata } from "next";
import Accreditations from "@/components/homepage/Accreditations";
import AllInOne from "@/components/homepage/AllInOne";
import CallToAction from "@/components/homepage/CallToAction";
import FAQ from "@/components/homepage/FAQ";
import Hero from "@/components/homepage/hero";
import Migration from "@/components/homepage/Migration";
import Pricing from "@/components/homepage/Pricing";
import Security from "@/components/homepage/Security";
import WhyChoose from "@/components/homepage/whychooseus";

export const metadata: Metadata = {
  title: "Affordable Domains & Reliable Web Hosting",
  description:
    "ExoHost offers high-performance SSD web hosting, one-click WordPress installs, and affordable domain registration. Build your digital foundation on solid ground.",
  alternates: {
    canonical: "https://exohost.com.ng",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <WhyChoose />
      {/* Primary CTA: Generic funnel entry */}
      <CallToAction /> 
      <AllInOne />
      <Security />
      <Migration />
      {/* Secondary CTA: Migration specific */}
      <CallToAction /> 
      <FAQ />
      <Accreditations />
    </>
  );
}