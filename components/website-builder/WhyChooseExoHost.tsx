"use client";

import Image from "next/image";

export default function WhyChooseExoHost() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/dashboard.webp"
            alt="ExoHost client area dashboard"
            width={600}
            height={400}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 flex flex-col justify-center md:pl-8">
          <h2 className="text-sm uppercase tracking-widest text-teal-600 mb-2">
            Why Choose ExoHost?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            You Deserve The Best
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>Get 24/7 expert support you can trust, for your peace of mind.</li>
            <li>Enjoy top website speed with our efficient NginX servers.</li>
            <li>Our Tier 3 Datacenter guarantees 99.9% uptime, keeping your website online.</li>
            <li>Get more for less with a free domain, SSL, backups and malware protection.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
