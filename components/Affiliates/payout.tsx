"use client";

import Image from "next/image";

export default function AffiliatePayoutInfo() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/affiliate-dash-dk.webp"
            alt="Affiliate dashboard"
            width={600}
            height={400}
            className="w-full h-auto"
            priority={false}
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col justify-center md:pl-8">
          <h2 className="text-sm uppercase tracking-widest text-teal-600 mb-2">
            Payout Information
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How do Payouts work?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              You'll be paid for each successful referral, with payouts starting
              from ₦25,199.
            </li>
            <li>
              For each successful referral, we'll apply a credit directly to your
              affiliate account.
            </li>
            <li>
              Once your account reaches a minimum credit of ₦25,199, you can
              request a payout straight to your bank account.
            </li>
            <li>
              Request a payout whenever you reach the minimum threshold and watch
              your earnings flow in!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
