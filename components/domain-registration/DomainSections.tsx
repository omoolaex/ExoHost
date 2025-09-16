"use client";

import Image from "next/image";

export default function ExoHostDomainSections() {
  return (
    <div className="space-y-16">

      {/* Section 1: Free With Every Domain */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/domain-features.webp"
              alt="ExoHost domain features"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="md:w-1/2 md:pl-12 flex flex-col justify-start mt-2 md:mt-0">
            <h2 className="text-3xl font-bold mb-4 text-[#1E5128]">Free With Every Domain</h2>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li><strong>DNS Hosting:</strong> Manage your DNS directly from your ExoHost client area without needing hosting.</li>
              <li><strong>Nameserver Management:</strong> Point your domain to any host or use custom nameservers easily.</li>
              <li><strong>Domain Parking:</strong> Secure your domains for future use or resale.</li>
              <li><strong>Domain Privacy:</strong> Protect your personal information with free privacy on selected domains.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Move Your Existing Domain */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 flex flex-col justify-center mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4 text-[#1E5128]">Move Your Existing Domain</h2>
            <p className="mb-4 text-black">
              Transfer your domain to ExoHost and enjoy hassle-free management. Certain domains get a free renewal when you transfer.
            </p>
            <a
              href="https://clients.exohost.com.ng/cart.php?a=add&domain=transfer"
              className="inline-block"
            >
            <span className=" text-black px-6 py-2 hover:text-green-500">Transfer Your Domain </span>                
            </a>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/exohost-migration.webp"
              alt="ExoHost domain migration"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 3: Get a Free Domain */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/dashboard.webp"
              alt="ExoHost dashboard"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="md:w-1/2 md:pl-12 flex flex-col justify-center mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4 text-[#1E5128]">Get a Free Domain</h2>
            <p className="mb-4 text-black">
              Receive a free .com.ng domain with any of our hosting packages. Domains renew at normal rates after the first year.
            </p>
            <a
              href="/web-hosting"
              className="inline-block"
            >
            <span className=" text-black px-6 py-2 hover:text-green-500">See Hosting Packages</span>                
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
