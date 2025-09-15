// components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-xl">
      {/* Top links */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h5 className="text-white font-semibold mb-3">Domain Names</h5>
          <ul className="space-y-2">
            <li><Link href="/domain-registrationr" className="hover:text-white">Register a Domain</Link></li>
            <li><Link href="/domain-registration#domainTable" className="hover:text-white">Domain Pricing</Link></li>
            <li><Link href="https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=transfer" className="hover:text-white">Domain Transfers</Link></li>
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
            <li><Link href="http://localhost:3000/web-hosting" className="hover:text-white">Web Hosting</Link></li>
            <li><Link href="#" className="hover:text-white">WordPress Hosting</Link></li>
            <li><Link href="#" className="hover:text-white">Reseller Hosting</Link></li>
            <li><Link href="/website-builder" className="hover:text-white">Site Builder</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h5 className="text-white font-semibold mb-3">Get Help</h5>
          <ul className="space-y-2">
            <li><Link href="https://hosting.omoolaex.com.ng/client-area/submitticket.php" className="hover:text-white">Submit a Support Ticket</Link></li>
            <li><Link href="https://hosting.omoolaex.com.ng/client-area/submitticket.php" className="hover:text-white">Submit a Sales Enquiry</Link></li>
            <li><Link href="https://hosting.omoolaex.com.ng/client-area/submitticket.php" className="hover:text-white">Report Abuse</Link></li>
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
        <span className="absolute bg-gray-900 px-4 text-gray-400 text-xs">
          ExoHost is a brand of{" "}
          <Link
            href="https://omoolaex.com.ng"
            target="_blank"
            className="text-white hover:underline"
          >
            <span className="text-white hover:text-[var(--color-primary)]">OmoolaEx Ltd</span>
          </Link>
        </span>
      </div>

      {/* Payment + Social */}
      <div>
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Payments */}
          <div className="flex items-center gap-4 text-xs">
            <span>We Accept:</span>
            <img src="/payments/monnify.svg" alt="Monnify" className="h-5" />
            <img src="/payments/flutterwave.svg" alt="Flutterwave" className="h-5" />
            <img src="/payments/visa.svg" alt="Visa" className="h-4" />
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com/exohost" target="_blank" aria-label="Facebook">
              <Facebook className="h-5 w-5 hover:text-white" />
            </Link>
            <Link href="https://twitter.com/exohost" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-white" />
            </Link>
            <Link href="https://linkedin.com/company/exohost" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>
            By visiting this website, you agree to its{" "}
            <Link href="/legal/terms-of-use"><span className="text-white hover:text-gray-500">terms of use</span></Link>.
          </p>
          <p>© {new Date().getFullYear()} ExoHost | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
