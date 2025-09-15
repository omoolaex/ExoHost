"use client";

import Image from "next/image";

export default function WebsiteBuilderHero() {
  return (
    <main className="bg-gray-50">
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-sm uppercase tracking-widest text-teal-600 mb-2">
              Website Builder Nigeria
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Create a Professional Website in Minutes
            </h2>
            <h3 className="text-lg text-gray-600 mb-6">
              Build, Launch, and Thrive Online
            </h3>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Free .com.ng Domain</li>
              <li>Drag and Drop Editor</li>
              <li>World-Class 24/7 Support</li>
            </ul>

            {/* Pricing */}
            <div className="text-3xl font-bold mb-6 text-gray-900">
              <sup className="text-sm font-normal">from ₦</sup>2,520.00
              <sub className="text-base font-normal">/mo</sub>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4 mb-6">
              <a
                href="#pricing"
                className="bg-teal-600 hover:bg-yellow-400 text-white hover:text-black px-6 py-3 rounded shadow font-medium transition"
              >
                View Site Builder Plans
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

          {/* Right Image */}
          <div className="lg:w-7/12 relative">
            <Image
              src="/images/exohost-sitebuilder-hero.webp"
              alt="ExoHost Site Builder Dashboard"
              width={700}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
