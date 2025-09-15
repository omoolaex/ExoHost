// components/sections/WhyChoose.tsx
"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const WhyChoose: React.FC = () => {
  const points = [
    "Rely on 24/7 dedicated support that treats your business like our own.",
    "Enjoy fast, secure websites powered by modern infrastructure and LiteSpeed tech.",
    "Count on our Tier 3 Datacenter for 99.9% uptime—your ideas stay online, always.",
    "Unlock more value with a free domain, SSL, backups, and advanced security bundled in.",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
      {/* Image */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/images/dashboard.webp" // swap with ExoHost’s dashboard illustration/screenshot
          alt="ExoHost dashboard preview"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center md:pl-8">
        <h2 className="text-sm font-semibold uppercase text-[var(--color-primary)] mb-2">
          Why Choose ExoHost?
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          You Deserve The Best
        </h3>

        <ul className="space-y-3">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChoose;
