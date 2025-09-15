"use client";

import React from "react";

const domains = [
  { tld: ".com", desc: "Ideal for global businesses and brands.", price: 17737.5, link: "https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=register" },
  { tld: ".com.ng", desc: "Perfect for businesses and brands in Nigeria.", price: 6448.93, link: "https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=register" },
  { tld: ".ng", desc: "Show your Nigerian presence online.", price: 17500, link: "https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=register" },
  { tld: ".org", desc: "Great for organizations and nonprofits.", price: 20000, link: "https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=register" },
  { tld: ".africa", desc: "Showcase your connection to Africa.", price: 20000, link: "https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=register" },
  { tld: ".org.ng", desc: "For Nigerian nonprofits and organizations.", price: 7800, link: "https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=register" },
  { tld: ".net.ng", desc: "Network with Nigeria through your domain.", price: 7800, link: "https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=register" },
  { tld: ".i.ng", desc: "Create a unique Nigerian identity online.", price: 7800, link: "https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=register" },
];

const DomainVariety: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Discover a Wide Variety of Domains
        </h2>
      </div>

      {/* Domain Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {domains.map((domain) => (
          <div key={domain.tld} className="bg-gray-900 text-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                {domain.tld}
              </h3>
              <p className="text-gray-300">{domain.desc}</p>
            </div>
            <div className="mt-6">
              <div className="text-3xl font-semibold mb-4">
                <sup>₦</sup> {domain.price.toLocaleString()}<sub className="text-sm">/year</sub>
              </div>
              <a 
                href={domain.link} 
                className="inline-block w-full text-center px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md font-semibold transition"
              >
                Register
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Domains Button */}
      <div className="mt-12 text-center">
        <a 
          href="#domainTable" 
          className="inline-block px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-md font-semibold transition"
        >
          View All Domains
        </a>
      </div>
    </section>
  );
};

export default DomainVariety;
