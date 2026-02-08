import React from "react";

const OurStory: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* LEFT: Section Label & Title */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                The Origin
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Our Story
              </h2>
              <div className="mt-4 h-1.5 w-12 bg-[var(--color-secondary)]"></div>
            </div>
          </div>

          {/* RIGHT: Narrative with "Infrastructure Path" line */}
          <div className="relative border-l border-slate-100 pl-8 lg:col-span-8 lg:pl-12">
            <div className="space-y-10 text-lg leading-relaxed text-slate-600">
              
              {/* Point 1: Experience */}
              <div className="relative">
                <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-[var(--color-secondary)] lg:-left-[53px]"></span>
                <p>
                  ExoHost was born out of years of hands-on experience building, 
                  deploying, and managing digital products for businesses of all sizes. 
                  We didn't start in a boardroom; we started in the server room.
                </p>
              </div>

              {/* Point 2: The Pain Points */}
              <div className="relative">
                <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-slate-200 lg:-left-[53px]"></span>
                <p>
                  We&apos;ve seen firsthand what happens when companies rely on <span className="text-slate-900 font-medium">cheap, unreliable hosting</span> or 
                  overpay for systems they don’t fully understand. We’ve dealt with downtime 
                  at the worst moments and support teams that disappear when things break.
                </p>
              </div>

              {/* Point 3: The Pivot */}
              <div className="relative">
                <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-slate-200 lg:-left-[53px]"></span>
                <p className="font-medium text-slate-900">
                  Infrastructure should be a growth engine, not a bottleneck. 
                  So we decided to build ExoHost differently.
                </p>
              </div>

              {/* Point 4: The Mission Result */}
              <div className="relative rounded-2xl bg-slate-50 p-6 md:p-8">
                <p className="italic text-slate-700">
                  "Not as any hosting provider, but as an <strong>infrastructure partner</strong> one 
                  that understands business realities, technical constraints, and the need 
                  to scale without chaos."
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;