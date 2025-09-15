// components/whois/HostingPlans.tsx
"use client";

import { useState } from "react";
import Pricing from "../homepage/Pricing";


export default function HostingPlans() {
  return (
    <section className="container mx-auto px-6 py-16" id="pricing">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Found a domain? Don’t forget about hosting.
        </h2>
      <Pricing />
      </div>
    </section>
  );
}
