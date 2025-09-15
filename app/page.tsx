import Accreditations from "@/components/homepage/Accreditations";
import AllInOne from "@/components/homepage/AllInOne";
import CallToAction from "@/components/homepage/CallToAction";
import FAQ from "@/components/homepage/FAQ";
import Hero from "@/components/homepage/hero";
import Migration from "@/components/homepage/Migration";
import Pricing from "@/components/homepage/Pricing";
import Security from "@/components/homepage/Security";
import WhyChoose from "@/components/homepage/whychooseus";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pricing />
      <WhyChoose />
      <CallToAction />
      <AllInOne />
      <Security />
      <Migration />
      <CallToAction />
      <FAQ />
      <Accreditations />
    </main>
  );
}