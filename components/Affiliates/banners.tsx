"use client";

import Image from "next/image";

export default function AffiliateBanners() {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-2xl font-bold text-gray-900 mb-2">
          Download Banners
        </h4>
        <p className="text-gray-600">
          Download high quality banners for use on your website.
        </p>
      </div>

      {/* Top Row */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="flex-1">
          <Image
            src="/images/affiliates/dk-domain-banner.webp"
            alt="Domain banner"
            width={844}
            height={219}
            className="w-full h-auto rounded shadow"
          />
        </div>
        <div className="w-full lg:w-64">
          <Image
            src="/images/affiliates/dk-web-hosting-banner-square.webp"
            alt="Web hosting banner square"
            width={260}
            height={217}
            className="w-full h-auto rounded shadow"
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left group */}
        <div className="flex flex-1 gap-6 justify-center">
          <Image
            src="/images/affiliates/dk-wp-banner-narrow.webp"
            alt="WP banner narrow"
            width={160}
            height={600}
            className="rounded shadow"
          />
          <Image
            src="/images/affiliates/dk-site-builder-banner.webp"
            alt="Site builder banner"
            width={300}
            height={600}
            className="rounded shadow"
          />
          <Image
            src="/images/affiliates/dk-web-hosting-banner.webp"
            alt="Web hosting banner"
            width={160}
            height={600}
            className="rounded shadow"
          />
        </div>

        {/* Right group */}
        <div className="flex flex-1 gap-6 justify-center">
          <Image
            src="/images/affiliates/dk-wp-banner.webp"
            alt="WP banner"
            width={300}
            height={600}
            className="rounded shadow"
          />
          <Image
            src="/images/affiliates/dk-site-builder-banner-narrow.webp"
            alt="Site builder banner narrow"
            width={160}
            height={600}
            className="rounded shadow"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <a
          href="/resources/banners/banner-pack.zip"
          download="banner-pack"
          className="bg-yellow-400 text-black px-6 py-3 rounded font-medium shadow hover:bg-yellow-500 transition"
        >
          Download Banner Pack
        </a>
      </div>
    </section>
  );
}
