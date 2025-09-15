"use client";

import Image from "next/image";

export default function SiteSecuritySection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <Image
            src="/images/exohost-security.webp"
            alt="Security dashboard"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
            priority={false}
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center md:pl-10">
          <h2 className="text-sm uppercase tracking-widest text-teal-600 mb-2">
            Robust Security Measures
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            For Your Peace of Mind
          </h3>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Enhance site stability with our robust DDoS protection.</li>
            <li>Secure your site with proactive malware scanning.</li>
            <li>Build visitor trust with secure SSL encryption.</li>
            <li>Protect your content with daily automatic backups.</li>
            <li>Create a business email with outgoing spam protection.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
