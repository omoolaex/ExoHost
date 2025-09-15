"use client";

import Image from "next/image";

export default function WebHostingHero() {
  return (
    <section className="container mx-auto px-12 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left Text Content */}
        <div className="lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-sm uppercase tracking-widest text-teal-500 mb-2">
            Web Hosting in Nigeria
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Affordable. Reliable. Simply the Best.
          </h2>
          <h3 className="text-lg text-gray-600 mb-6">
            Up to <span className="font-bold text-teal-600">75%</span> off Hosting + Free Domain *
          </h3>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Free .com.ng Domain*</li>
            <li>Free Website Migration</li>
            <li>World-Class 24/7 Support</li>
          </ul>

          <div className="text-3xl font-bold mb-6 text-gray-900">
            <sup className="text-sm font-normal">from ₦</sup>805.00
            <sub className="text-base font-normal">/mo</sub>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <a
              href="#pricing"
              className="bg-teal-600 hover:bg-yellow-400 text-white px-6 py-3 rounded shadow font-medium transition"
            >
              Claim this deal
            </a>
            {/* Placeholder for countdown ticker */}
            <div className="flex gap-1 font-mono text-gray-700">
              <span>00</span>:<span>00</span>:<span>00</span>:<span>00</span>
            </div>
          </div>

          {/* TrustPilot Section */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/trustpilot.svg"   // ✅ Correct logo file
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
        <div className="lg:w-7/12 relative">
          <Image
            src="/images/exohost-web-hosting-header.webp"   // ✅ Hero image
            alt="ExoHost Web Hosting"
            width={700}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

      </div>
    </section>
  );
}
