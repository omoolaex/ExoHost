// components/sections/Hero.tsx
"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--background)] text-white py-12 md:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight md:leading-snug">
          Your Perfect{" "}
          <span className="text-[var(--color-accent)]">.com.ng</span> Domain
          <br className="hidden sm:block" />
          is Now Just{" "}
          <span className="text-[var(--color-accent)]">₦5,999</span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200">
          <strong>.com</strong> domains now only{" "}
          <span className="font-semibold">₦17,000</span> for registration!
          <br className="hidden sm:block" />
          Let your business be found, trusted, and clicked.
        </p>

        {/* Domain Search */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch justify-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto">
          <span className="hidden sm:flex items-center px-4 text-gray-600 font-medium">
            www.
          </span>
          <input
            type="text"
            placeholder="my-domain.ng"
            className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none text-sm sm:text-base"
          />
          <button className="bg-[var(--color-primary)] hover:opacity-90 text-white font-semibold px-6 py-3 text-sm sm:text-base">
            Check Availability
          </button>
        </div>

        {/* Pricing list */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            { ext: ".com", price: "₦17,738" },
            { ext: ".com.ng", price: "₦6,449" },
            { ext: ".ng", price: "₦17,500" },
            { ext: ".org", price: "₦20,000" },
          ].map((item) => (
            <div
              key={item.ext}
              className="bg-white text-gray-900 px-4 sm:px-5 py-3 rounded-lg shadow-sm min-w-[100px] text-center"
            >
              <span className="block font-bold text-[var(--color-primary)] text-base sm:text-lg">
                {item.ext}
              </span>
              <span className="block text-xs sm:text-sm">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
