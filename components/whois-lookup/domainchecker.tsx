// app/whois/page.tsx
"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";

const WhoisLookupHero: React.FC = () => {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;
    setLoading(true);

    // TODO: Hook up to WHOIS API for ExoHost
    setTimeout(() => {
      setLoading(false);
      alert(`Searching WHOIS info for: ${domain}`);
    }, 2000);
  };

  return (
    <div className="bg-gray-900 text-white py-16 mx-12 my-8  rounded-3xl">
      <section className="container mx-auto px-6 text-center">
        <h1 className="text-sm uppercase tracking-widest text-teal-400 mb-2">
          WHOIS Domain Lookup
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Find out who owns a domain
        </h2>
        <h3 className="text-lg md:text-xl text-gray-300 mb-10">
          Search the WHOIS database to find registrant information for domain
          names
        </h3>

        {/* WHOIS Search Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto flex items-center gap-2 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <input
            type="text"
            placeholder="Enter the domain or IP address..."
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="flex-1 px-4 py-3 text-gray-800 outline-none"
          />
          <button
            type="submit"
            disabled={!domain || loading}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition rounded-r-2xl"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            Search
          </button>
        </form>

        {/* Result / Alert Placeholder */}
        <div
          id="result-alert"
          className="hidden mt-8 p-4 rounded-lg text-gray-900 bg-teal-100 max-w-xl mx-auto"
        >
          <span className="font-medium">This domain is available!</span>
          <button className="ml-3 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm">
            Register now
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhoisLookupHero;
