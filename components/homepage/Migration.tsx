"use client";

import React from "react";
import { MoveRight, FileStack, Globe } from "lucide-react";
import Image from "next/image";

const Migration: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--color-primary)] mb-2">
            Free Migration
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Move Your Site Effortlessly
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <MoveRight className="h-5 w-5 text-[var(--color-primary)] mt-1" />
              <span>
                <strong>Switch with ease</strong> — our migration experts handle
                everything for you.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FileStack className="h-5 w-5 text-[var(--color-primary)] mt-1" />
              <span>
                We’ll securely move <strong>all your files, emails, and databases</strong>{" "}
                so you don’t have to lift a finger.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-[var(--color-primary)] mt-1" />
              <span>
                <strong>No downtime</strong> — your site stays live while we move it
                behind the scenes.
              </span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <Image
            src="/images/exohost-migration.webp"
            alt="ExoHost Migration"
            width={400}
            height={280}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Migration;
