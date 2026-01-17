"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, Monitor, Globe, Server, Zap } from "lucide-react";

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
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col border border-gray-100 relative group">
      {/* Icon */}
      <div className="flex justify-center items-center mb-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h2 className="text-xl font-bold text-center text-gray-900">{title}</h2>
      <p className="text-center text-gray-500 text-sm mt-2 leading-relaxed">{desc}</p>

      {/* Price */}
      <div className="my-6 text-center bg-gray-50 py-4 rounded-xl">
        <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Starting at</span>{" "}
        <div className="flex items-center justify-center gap-1">
          <span className="text-2xl font-extrabold text-[var(--color-primary)]">
            ₦{price}
          </span>
          <span className="text-gray-500 text-sm">/mo</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        href={link}
        className="bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] text-[var(--color-light)] hover:text-[var(--color-light)] rounded-lg py-3 px-4 text-center font-bold text-sm mb-6 transition-colors shadow-lg shadow-emerald-900/10"
      >
        Order Now
      </Link>

      {/* Features List */}
      <ul className="space-y-3 text-sm flex-1">
        {features.slice(0, expanded ? features.length : 6).map((f, idx) => (
          <li
            key={idx}
            className={`flex items-start gap-3 ${
              f.highlight ? "text-[var(--color-primary)] font-semibold" : "text-gray-600"
            }`}
          >
            {f.available ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
            ) : (
              <XCircle className="h-5 w-5 text-gray-300 flex-shrink-0" />
            )}
            <span>{f.text}</span>
          </li>
        ))}
      </ul>

      {/* Reveal toggle */}
      {features.length > 6 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-[var(--color-primary)] font-bold text-xs flex items-center gap-1 justify-center hover:underline"
        >
          {expanded ? "SHOW LESS ▲" : "VIEW ALL FEATURES ▼"}
        </button>
      )}
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      icon: <Monitor className="h-10 w-10" />,
      title: "Exo-Foundation",
      desc: "Essential features for your first professional website.",
      price: "2,500.00",
      link: "https://clients.exohost.com.ng/cart.php?a=add&pid=1", // Update with actual PID
      features: [
        { text: "1 Website", available: true },
        { text: "5GB SSD Storage", available: true, highlight: true },
        { text: "5 Email Accounts", available: true },
        { text: "Free SSL Certificate", available: true },
        { text: "Free .com.ng Domain (Annual)", available: true, highlight: true },
        { text: "DirectAdmin Control Panel", available: true },
        { text: "Daily Backups", available: true },
        { text: "Free Wordpress Setup", available: true },
        { text: "Linux/PHP v5/Perl/CGI", available: true },
        { text: "24/7 support", available: true },
      ],
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Exo-Momentum",
      desc: "Enhanced performance for growing businesses and blogs.",
      price: "4,500.00",
      link: "https://clients.exohost.com.ng/cart.php?a=add&pid=2", // Update with actual PID
      features: [
        { text: "Up to 5 Websites", available: true, highlight: true },
        { text: "20GB SSD Storage", available: true, highlight: true },
        { text: "Unmetered Bandwidth", available: true },
        { text: "20 Email Accounts", available: true },
        { text: "Free .com.ng Domain (Annual)", available: true },
        { text: "Daily Automated Backups", available: true, highlight: true },
        { text: "Priority Support", available: true },
        { text: "Linux/PHP 7 Optimized", available: true },
        { text: "5 Subdomains", available: true },
        { text: "Free Wordpress Setup", available: true },
      ],
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Exo-Capacity",
      desc: "Maximum power and speed for high-traffic agencies.",
      price: "7,000.00",
      link: "https://clients.exohost.com.ng/cart.php?a=add&pid=3", // Update with actual PID
      features: [
        { text: "Up to 10 Websites", available: true, highlight: true },
        { text: "50GB SSD Storage", available: true, highlight: true },
        { text: "50 Email Accounts", available: true },
        { text: "4x Faster Website Speed", available: true, highlight: true },
        { text: "Free .com.ng Domain (Annual)", available: true },
        { text: "Free SSL Certificate", available: true },
        { text: "Priority Support", available: true },
        { text: "DirectAdmin Control Panel", available: true },
        { text: "Daily Backups", available: true },
      ],
    },
  ];

  return (
    <section className="bg-slate-50 py-24" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Choose Your Hosting Plan</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Scale your digital presence with infrastructure built for the Nigerian market. Paid in Naira, supported locally.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;