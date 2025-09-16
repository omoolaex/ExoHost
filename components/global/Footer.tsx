// components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      {/* Top links */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h5 className="text-white font-semibold mb-3">Domain Names</h5>
          <ul className="space-y-2">
            <li><Link href="/domain-registration" className="hover:text-white">Register a Domain</Link></li>
            <li><Link href="/domain-registration#domainTable" className="hover:text-white">Domain Pricing</Link></li>
            <li><Link href="https://clients.exohost.com.ng/cart.php?a=add&domain=transfer" className="hover:text-white">Domain Transfers</Link></li>
            <li><Link href="/whois-lookup" className="hover:text-white">WHOIS Lookup</Link></li>
          </ul>

          <h5 className="text-white font-semibold mt-6 mb-3">Security</h5>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-white">SSL Certificates</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h5 className="text-white font-semibold mb-3">Hosting</h5>
          <ul className="space-y-2">
            <li><Link href="/web-hosting" className="hover:text-white">Web Hosting</Link></li>
            <li><Link href="#" className="hover:text-white">WordPress Hosting</Link></li>
            <li><Link href="#" className="hover:text-white">Reseller Hosting</Link></li>
            <li><Link href="/website-builder" className="hover:text-white">Site Builder</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h5 className="text-white font-semibold mb-3">Get Help</h5>
          <ul className="space-y-2">
            <li><Link href="https://clients.exohost.com.ng/submitticket.php" className="hover:text-white">Submit a Support Ticket</Link></li>
            <li><Link href="https://clients.exohost.com.ng/submitticket.php" className="hover:text-white">Submit a Sales Enquiry</Link></li>
            <li><Link href="https://clients.exohost.com.ng/submitticket.php" className="hover:text-white">Report Abuse</Link></li>
            <li><Link href="#" className="hover:text-white">Blog</Link></li>
            <li><Link href="#" className="hover:text-white">About Us</Link></li>
            <li><Link href="#" className="hover:text-white">Payment Help</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h5 className="text-white font-semibold mb-3">Legals</h5>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-white">Refund Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Acceptable Use Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Affiliate Terms</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider with brand text in the middle */}
      <div className="relative flex items-center justify-center my-6">
        <div className="w-full border-t border-gray-700"></div>
        <span className="absolute bg-gray-900 px-4 text-gray-400 text-xs text-center">
          ExoHost is a brand of{" "}
          <Link
            href="https://omoolaex.com.ng"
            target="_blank"
            className="hover:text-[var(--color-primary)] font-medium"
          >
            OmoolaEx Ltd
          </Link>
        </span>
      </div>

      {/* Payment + Social */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Payments */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span>We Accept:</span>
          <Image src="/payments/monnify.svg" alt="Monnify" width={60} height={20} className="h-5 w-auto" />
          <Image src="/payments/flutterwave.svg" alt="Flutterwave" width={60} height={20} className="h-5 w-auto" />
          <Image src="/payments/visa.svg" alt="Visa" width={50} height={20} className="h-4 w-auto" />
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <Link href="https://facebook.com/exohost" target="_blank" aria-label="Facebook">
            <Facebook className="h-5 w-5 hover:text-white transition" />
          </Link>
          <Link href="https://twitter.com/exohost" target="_blank" aria-label="Twitter">
            <Twitter className="h-5 w-5 hover:text-white transition" />
          </Link>
          <Link href="https://linkedin.com/company/exohost" target="_blank" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 hover:text-white transition" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
          <p className="text-center md:text-left">
            By visiting this website, you agree to its{" "}
            <Link href="#" className="text-white hover:text-gray-500">
              terms of use
            </Link>.
          </p>
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} ExoHost | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
