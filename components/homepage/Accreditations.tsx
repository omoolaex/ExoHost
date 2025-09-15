// components/sections/Accreditations.tsx
"use client";

import React from "react";

const logos = [
  { alt: "NiRA logo", src: "/logos/nira.svg", width: 133, height: 46 },
  { alt: "ZACR logo", src: "/logos/zacr.svg", width: 83, height: 46 },
  { alt: ".Africa logo", src: "/logos/dotafrica.svg", width: 100, height: 55 },
  { alt: "CentralNic logo", src: "/logos/centralnic.svg", width: 183, height: 96 },
  { alt: ".LA logo", src: "/logos/dotla.svg", width: 35, height: 47 },
  { alt: ".PH logo", src: "/logos/dotph.svg", width: 52, height: 40 },
  { alt: ".PW logo", src: "/logos/dotpw.svg", width: 66, height: 36 },
  { alt: ".UG logo", src: "/logos/dotug.svg", width: 72, height: 26 },
  { alt: "NIXI logo", src: "/logos/nixi.svg", width: 81, height: 32 },
];

const Accreditations: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-6">
        <p className="text-gray-700 font-medium">
          We are accredited with the following domain name registries
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-10 md:h-12 lg:h-14 object-contain grayscale hover:grayscale-0 transition"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Accreditations;
