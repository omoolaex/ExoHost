"use client";

import Pricing from "../homepage/Pricing";

export default function HostingPricing() {
  return (
    <section id="pricing" className="container mx-auto px-6 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-teal-500 mb-2">
          Hosting Packages &amp; Pricing
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          Web Hosting Packages Tailored to Your Needs
        </h3>
      </div>
      <div>
        <Pricing />
      </div>
    </section>
  );
}
