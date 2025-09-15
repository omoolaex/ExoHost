// components/sections/AllInOne.tsx
"use client";

import React from "react";
import { Globe, Mail, Zap, Layout } from "lucide-react";

const AllInOne: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--color-primary)] mb-2">
            Everything you need to succeed online
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ExoHost All-in-One Solutions
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-[var(--color-primary)] mt-1" />
              <span>
                <strong>Register & manage domains</strong> seamlessly, starting with
                a free <strong>.com.ng</strong> for your first year.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-[var(--color-primary)] mt-1" />
              <span>
                Build trust with <strong>professional business emails</strong> on
                your own domain.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-[var(--color-primary)] mt-1" />
              <span>
                <strong>Lightning-fast hosting</strong> powered by advanced
                LiteSpeed servers and SSD storage.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Layout className="h-5 w-5 text-[var(--color-primary)] mt-1" />
              <span>
                Launch your brand with our <strong>no-code Website Builder</strong>{" "}
                — design, drag, and publish in minutes.
              </span>
            </li>
          </ul>
        </div>

        {/* Image (placeholder for ExoHost graphic) */}
        <div className="order-1 md:order-2">
          <img
            src="/images/all-in-one-exohost.webp"
            alt="ExoHost all-in-one solutions"
            className="w-full h-auto"
            width={400}
            height={280}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AllInOne;
