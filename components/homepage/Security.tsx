"use client";

import React from "react";
import { ShieldCheck, Bug, Lock, Database } from "lucide-react";
import Image from "next/image";

const Security: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <Image
            src="/images/exohost-security.webp"
            alt="ExoHost Security"
            width={400}
            height={280}
            className="w-full h-auto"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--color-primary)] mb-2">
            Rock-Solid Protection
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Security for Your Peace of Mind
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-[var(--color-primary)] mt-1" />
              <span>
                Keep your website stable with <strong>advanced DDoS defense</strong>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Bug className="h-5 w-5 text-[var(--color-primary)] mt-1" />
              <span>
                Stay ahead of threats with <strong>proactive malware scanning</strong>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="h-5 w-5 text-[var(--color-primary)] mt-1" />
              <span>
                Build customer trust using <strong>secure SSL encryption</strong>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Database className="h-5 w-5 text-[var(--color-primary)] mt-1" />
              <span>
                Safeguard your content with <strong>automated daily backups</strong>.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Security;
