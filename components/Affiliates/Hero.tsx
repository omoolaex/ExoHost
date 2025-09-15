"use client";

import Image from "next/image";

export default function AffiliateHero() {
  return (
    <section className="container mx-auto px-6 py-16" id="affiliate-hero">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-sm uppercase tracking-widest text-teal-600 mb-2">
            Affiliate Program Nigeria
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Become an Affiliate <br /> Get Paid for Referrals
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>5% Commission per Referral</li>
            <li>₦8,500 Signup Bonus</li>
            <li>Monthly Recurring Payments</li>
            <li>No Signup Fee</li>
          </ul>

          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://hosting.omoolaex.com.ng/client-area/register.php"
              className="bg-teal-600 hover:bg-yellow-400 text-white px-6 py-3 rounded shadow font-medium transition"
            >
              Sign up now
            </a>
          </div>

          {/* TrustPilot Section */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/trustpilot.svg"
              alt="TrustPilot Logo"
              width={75}
              height={19}
              priority
            />
            <span className="text-gray-700">
              TrustScore <span className="font-semibold">4.9 | 548</span> reviews
            </span>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="lg:w-7/12">
          <Image
            src="/images/exohost-web-hosting-header.webp"
            alt="Affiliate Program ExoHost"
            width={700}
            height={450}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
