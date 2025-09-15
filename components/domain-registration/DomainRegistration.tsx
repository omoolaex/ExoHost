"use client";

import React, { useState } from "react";

const DomainRegistration: React.FC = () => {
  const [domain, setDomain] = useState("");

  return (
    <section
      className="relative bg-gray-900 text-white py-8 mx-12 my-6 rounded-4xl overflow-hidden"
      style={{
        background: "url('/images/banner-image.webp') center/cover no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
      <div className="relative container mx-auto px-4 text-center">

        {/* Heading */}
        <span className="text-sm uppercase tracking-wider text-green-400 font-semibold">
          Domain Registration in Nigeria
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          Secure Your <br /> Digital Foundation
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Register your domain name with Nigeria’s trusted registrar. Build your business on unshakable ground.
        </p>

        {/* Domain Search Form */}
        <form
          action="https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=register"
          method="post"
          className="mt-8 flex flex-col md:flex-row bg-white rounded-xl items-center justify-center gap-2 md:gap-0 max-w-3xl mx-auto"
        >
          <input
            type="text"
            value="www."
            disabled
            className="px-4 py-3 rounded-l-md border-0 bg-gray-800 text-gray-300 w-full md:w-auto"
          />
          <input
            type="text"
            name="query"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="my-domain.ng"
            required
            className="px-4 py-3 w-full md:flex-1 text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="mt-2 md:mt-0 md:ml-2 px-6 py-3 bg-green-500 hover:bg-green-600 font-semibold rounded-md transition"
          >
            Check Availability
          </button>
        </form>

        {/* Pricing Info */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-gray-100">
          {[ 
            { tld: ".com", price: "₦17,738" },
            { tld: ".com.ng", price: "₦6,449" },
            { tld: ".ng", price: "₦17,500" },
            { tld: ".org", price: "₦20,000" },
            { tld: ".net", price: "₦22,000" },
            { tld: ".africa", price: "₦20,000" },
          ].map((item) => (
            <div
              key={item.tld}
              className="px-5 py-3 bg-gray-800 rounded-lg shadow hover:shadow-lg transition text-center min-w-[100px]"
            >
              <span className="font-semibold text-green-400">{item.tld}</span>
              <span className="block mt-1 text-white">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Transfer Link */}
        <p className="mt-8 text-gray-300">
          Already own a domain?{" "}
          <a href="https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=transfer" 
            className="text-green-400 underline font-semibold">
            Transfer It!
          </a>
        </p>

      </div>
    </section>
  );
};

export default DomainRegistration;
