// components/sections/Pricing.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, Monitor, Globe, Server } from "lucide-react";

interface PricingCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  price: string;
  link: string;
  features: { text: string; available: boolean; highlight?: boolean }[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  icon,
  title,
  desc,
  price,
  link,
  features,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col relative">
      {/* Icon */}
      <div className="flex justify-center items-center mb-4 text-[var(--color-primary)]">
        {icon}
      </div>

      <h2 className="text-lg font-semibold text-center">{title}</h2>
      <p className="text-center text-gray-600 text-sm">{desc}</p>

      {/* Price */}
      <div className="my-3 text-center">
        <span className="text-gray-500 text-xs">from</span>{" "}
        <span className="text-xl font-bold text-[var(--color-primary)]">
          ₦{price}
        </span>
        <span className="text-gray-500 text-sm">/mo</span>
      </div>

      {/* CTA */}
        <Link
        href={link}
        className="bg-[var(--color-secondary)] hover:opacity-90 text-white rounded-md py-2 px-4 text-center font-medium text-sm mb-3"
        >
        Choose Plan
        </Link>

      {/* Features */}
      <ul className="space-y-2 text-sm">
        {features.slice(0, expanded ? features.length : 5).map((f, idx) => (
          <li
            key={idx}
            className={`flex items-start gap-2 ${
              f.highlight ? "text-[var(--color-accent)] font-medium" : ""
            }`}
          >
            {f.available ? (
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
            ) : (
              <XCircle className="h-4 w-4 text-red-400 mt-0.5" />
            )}
            {f.text}
          </li>
        ))}
      </ul>

      {/* Reveal toggle */}
      {features.length > 5 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-[var(--color-primary)] font-medium text-xs flex items-center gap-1 justify-center"
        >
          {expanded ? "See less ▲" : "See all ▼"}
        </button>
      )}
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Basic Hosting",
      desc: "Perfect for individuals getting started.",
      price: "1,800.00",
      link: "https://hosting.omoolaex.com.ng/client-area/index.php?rp=/store/web-hosting/basic",
      features: [
        { text: "2 GB SSD Storage", available: true, highlight: true },
        { text: "1 Website", available: true },
        { text: "Unlimited Bandwidth", available: true },
        { text: "Free .com.ng Domain", available: true },
        { text: "Free SSL Certificates", available: true },
        { text: "Unlimited Email Accounts", available: true },
        { text: "Daily Backups", available: false },
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Standard Hosting",
      desc: "Best for growing websites & small businesses.",
      price: "3,200.00",
      link: "https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&pid=2&carttpl=standard_cart",
      features: [
        { text: "5 GB SSD Storage", available: true, highlight: true },
        { text: "Up to 3 Websites", available: true },
        { text: "Unlimited Bandwidth", available: true },
        { text: "Free .com.ng Domain", available: true },
        { text: "Free SSL Certificates", available: true },
        { text: "Unlimited Email Accounts", available: true },
        { text: "Daily Backups", available: true, highlight: true },
      ],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Premium Hosting",
      desc: "For businesses that need more power.",
      price: "5,000.00",
      link: "https://hosting.omoolaex.com.ng/client-area/index.php?rp=/store/web-hosting/premium",
      features: [
        { text: "10 GB SSD Storage", available: true, highlight: true },
        { text: "Up to 5 Websites", available: true },
        { text: "Unlimited Bandwidth", available: true },
        { text: "Free .com.ng Domain", available: true },
        { text: "Free SSL Certificates", available: true },
        { text: "Unlimited Email Accounts", available: true },
        { text: "Daily & Weekly Backups", available: true, highlight: true },
        { text: "Free Malware Scanning", available: true },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-30" id="pricing">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
