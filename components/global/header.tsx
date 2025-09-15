// components/global/Header.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [alertVisible, setAlertVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownBase =
    "absolute left-0 mt-3 w-72 bg-[var(--background)] shadow-xl rounded-xl p-3 z-50 animate-fade-in";
  const dropdownLink =
    "block px-4 py-3 rounded-lg transition hover:bg-gray-100";

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Alert bar */}
      {alertVisible && (
        <div className="w-full bg-green-600 text-white text-center py-2 px-4 text-sm relative">
          <p>
            Beware potential phishing attack.{" "}
            <a href="#" className="underline font-medium hover:text-gray-100">
              See details
            </a>
          </p>
          <button
            onClick={() => setAlertVisible(false)}
            className="absolute right-4 top-2 text-white hover:text-gray-200"
          >
            ✕
          </button>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-[var(--background)] shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img src="/logo-exohost.svg" alt="ExoHost" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <ul
            className="hidden md:flex items-center space-x-8 font-medium text-sm"
            ref={dropdownRef}
          >
            {/* Domains */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("domains")}
                className="flex items-center hover:text-[var(--color-primary)] transition"
              >
                Domains
                <svg
                  className="ml-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openDropdown === "domains" && (
                <div className={dropdownBase}>
                  <Link href="/domain-registration" className={dropdownLink}>
                    <p className="font-semibold">Register Domain</p>
                    <p className="text-xs text-black/50">Find the perfect domain</p>
                  </Link>
                  <Link
                    href="https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=transfer"
                    className={dropdownLink}
                  >
                    <p className="font-semibold">Domain Transfers</p>
                    <p className="text-xs text-black/50">Switch & save on renewals</p>
                  </Link>
                  <Link href="/whois-lookup" className={dropdownLink}>
                    <p className="font-semibold">WHOIS Lookup</p>
                    <p className="text-xs text-black/50">Check domain details</p>
                  </Link>
                </div>
              )}
            </li>

            {/* Hosting */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("hosting")}
                className="flex items-center hover:text-[var(--color-primary)] transition"
              >
                Hosting
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openDropdown === "hosting" && (
                <div className={dropdownBase}>
                  <Link href="/web-hosting" className={dropdownLink}>
                    <p className="font-semibold">Web Hosting</p>
                    <p className="text-xs text-gray-500">Affordable & reliable</p>
                  </Link>
                </div>
              )}
            </li>

            {/* Websites */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("websites")}
                className="flex items-center hover:text-[var(--color-primary)] transition"
              >
                Websites
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openDropdown === "websites" && (
                <div className={dropdownBase}>
                  <Link href="/website-builder" className={dropdownLink}>
                    <p className="font-semibold">Website Builder</p>
                    <p className="text-xs text-gray-500">Create sites in minutes</p>
                  </Link>
                </div>
              )}
            </li>

            {/* Partners */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("partners")}
                className="flex items-center hover:text-[var(--color-primary)] transition"
              >
                Partners
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openDropdown === "partners" && (
                <div className={dropdownBase}>
                  <Link href="https://hosting.omoolaex.com.ng/client-area/affiliates.php" className={dropdownLink}>
                    <p className="font-semibold">Affiliates</p>
                    <p className="text-xs text-gray-500">Earn by referring</p>
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="#" className="hover:text-[var(--color-primary)]">
                Blog
              </Link>
            </li>
          </ul>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://hosting.omoolaex.com.ng/client-area/submitticket.php"
              className="hover:text-[var(--color-primary)] text-sm font-medium"
            >
              Support
            </Link>
            <Link
              href="https://hosting.omoolaex.com.ng/client-area/index.php/login"
              className="px-4 py-2 border rounded-sm bg-white text-black font-semibold hover:opacity-90"
            >
              Login
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer as Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop (closes on click) */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          ></div>

          {/* Drawer */}
          <div
            ref={mobileRef}
            className="relative z-50 w-72 max-w-full h-full bg-[var(--background)] shadow-xl p-6 overflow-y-auto animate-slide-in-left"
            onClick={(e) => e.stopPropagation()} // prevent clicks inside from closing
          >
            {/* Mobile menu items */}
            <div className="space-y-4">
              {/* Domains */}
              <div>
                <button
                  onClick={() => toggleDropdown("m-domains")}
                  className="w-full flex justify-between items-center py-2 font-medium"
                >
                  Domains <span>{openDropdown === "m-domains" ? "−" : "+"}</span>
                </button>
                {openDropdown === "m-domains" && (
                  <div className="flex flex-col pl-4 space-y-1">
                    <Link href="/domain-registration" className="block w-full px-2 py-2 rounded hover:bg-gray-100">Register Domain</Link>
                    <Link href="https://hosting.omoolaex.com.ng/client-area/cart.php?a=add&domain=transfer" className="block w-full px-2 py-2 rounded hover:bg-gray-100">Domain Transfers</Link>
                    <Link href="/whois-lookup" className="block w-full px-2 py-2 rounded hover:bg-gray-100">WHOIS Lookup</Link>
                  </div>
                )}
              </div>

              {/* Hosting */}
              <div>
                <button
                  onClick={() => toggleDropdown("m-hosting")}
                  className="w-full flex justify-between items-center py-2 font-medium"
                >
                  Hosting <span>{openDropdown === "m-hosting" ? "−" : "+"}</span>
                </button>
                {openDropdown === "m-hosting" && (
                  <div className="flex flex-col pl-4 space-y-1">
                    <Link href="/web-hosting" className="block w-full px-2 py-2 rounded hover:bg-gray-100">Web Hosting</Link>
                  </div>
                )}
              </div>

              {/* Websites */}
              <div>
                <button
                  onClick={() => toggleDropdown("m-websites")}
                  className="w-full flex justify-between items-center py-2 font-medium"
                >
                  Websites <span>{openDropdown === "m-websites" ? "−" : "+"}</span>
                </button>
                {openDropdown === "m-websites" && (
                  <div className="flex flex-col pl-4 space-y-1">
                    <Link href="/website-builder" className="block w-full px-2 py-2 rounded hover:bg-gray-100">Website Builder</Link>
                  </div>
                )}
              </div>

              {/* Partners */}
              <div>
                <button
                  onClick={() => toggleDropdown("m-partners")}
                  className="w-full flex justify-between items-center py-2 font-medium"
                >
                  Partners <span>{openDropdown === "m-partners" ? "−" : "+"}</span>
                </button>
                {openDropdown === "m-partners" && (
                  <div className="flex flex-col pl-4 space-y-1">
                    <Link href="https://hosting.omoolaex.com.ng/client-area/affiliates.php" className="block w-full px-2 py-2 rounded hover:bg-gray-100">Affiliates</Link>
                  </div>
                )}
              </div>

              <Link href="#" className="block py-2 font-medium">Blog</Link>

              <div className="border-t pt-4">
                <Link
                  href="https://hosting.omoolaex.com.ng/client-area/submitticket.php"
                  className="block py-2"
                >
                  Support
                </Link>
                <Link
                  href="https://hosting.omoolaex.com.ng/client-area/index.php/login"
                  className="block py-2 font-semibold"
                >
                  <span className="border rounded-3xl bg-white text-black p-2">Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
