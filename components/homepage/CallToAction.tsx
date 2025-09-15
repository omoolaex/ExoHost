// components/sections/CallToAction.tsx
"use client";

import React from "react";
import Link from "next/link";

const CallToAction: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center">
      <div className="bg-[var(--color-foreground)] rounded-2xl py-24 px-6 md:px-12 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-light)] mb-3">
          Join Hundreds of Thriving Businesses 🚀
        </h2>
        <p className="text-[var(--color-light)] text-lg mb-6">
          Be part of the ExoHost community and experience hosting that’s{" "}
          <span className="text-[var(--color-accent)] font-semibold">
            resilient, reliable, and built for growth
          </span>
          .
        </p>
        <Link
          href="#pricing"
          className="inline-block bg-[var(--color-secondary)] text-[var(--background)] font-semibold py-3 px-6 rounded-md hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
