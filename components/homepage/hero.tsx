"use client";

import React, { useState } from "react";

const Hero: React.FC = () => {
  const [domain, setDomain] = useState("");

  // Update this to your actual WHMCS installation URL
  const WHMCS_URL = "https://clients.exohost.com.ng/cart.php?a=add&domain=register";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;
    
    // Redirects user to WHMCS cart with the query pre-filled
    window.location.href = `${WHMCS_URL}&query=${encodeURIComponent(domain)}`;
  };

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

        {/* Domain Search Wired Up */}
        <form 
          onSubmit={handleSearch}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch justify-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto border-2 border-transparent focus-within:border-[var(--color-accent)] transition-all"
        >
          <span className="hidden sm:flex items-center px-6 text-gray-400 font-medium">
            www.
          </span>
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="my-domain.ng"
            className="flex-1 px-4 py-4 text-gray-900 placeholder-gray-400 focus:outline-none text-base md:text-lg"
          />
          <button 
            type="submit"
            className="bg-[var(--color-primary)] hover:bg-black text-white font-bold px-8 py-4 text-sm sm:text-base transition-colors"
          >
            Check Availability
          </button>
        </form>

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
              onClick={() => setDomain(item.ext)} // Small UX: clicking price tags fills input
              className="bg-white text-gray-900 px-4 sm:px-5 py-3 rounded-lg shadow-sm min-w-[100px] text-center cursor-pointer hover:scale-105 transition-transform"
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