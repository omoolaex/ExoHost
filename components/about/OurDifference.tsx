import React from "react";

const differences = [
  {
    title: "Built for Growth, Not Just Launch",
    description:
      "We design infrastructure with tomorrow in mind. Our systems scale horizontally to ensure your success on day 1,000 is as smooth as day one.",
  },
  {
    title: "Human Support, Real Answers",
    description:
      "When things break, you talk to engineers who understand the architecture—not customer service agents reading from a script.",
  },
  {
    title: "Clear Pricing, No Smoke",
    description:
      "No hidden fees. No 'introductory' rates that triple upon renewal. Just straightforward, honest value for growing businesses.",
  },
  {
    title: "Business-Aware Infrastructure",
    description:
      "We don’t just think like engineers—we think like operators. We optimize for your bottom line, not just your uptime.",
  },
];

const OurDifference: React.FC = () => {
  return (
    <section className="w-full bg-slate-950 py-24 md:py-32 overflow-hidden relative">
      {/* Subtle Background Glow for Brand Alignment */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[var(--color-secondary)] opacity-10 blur-[120px] rounded-full"></div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Left Side: Sticky Introduction */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                The ExoHost Edge
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                How We’re <br />
                <span className="text-slate-500">Different.</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-slate-400 max-w-sm">
                There’s no shortage of hosting companies. What’s rare is 
                <span className="text-white"> honesty, intention, and real partnership.</span>
              </p>
            </div>
          </div>

          {/* Right Side: Differences Grid */}
          <div className="lg:col-span-7">
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-1">
              {differences.map((item, index) => (
                <div 
                  key={item.title} 
                  className="group relative border-l border-slate-800 pl-8 transition-colors hover:border-[var(--color-secondary)]"
                >
                  {/* Numbering for Visual Flow */}
                  <span className="absolute -left-3 top-0 text-[10px] font-mono font-bold text-slate-600 group-hover:text-[var(--color-secondary)] bg-slate-950 py-1">
                    0{index + 1}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[var(--color-secondary)]">
                    {item.title}
                  </h3>
                  
                  <p className="mt-4 text-base leading-relaxed text-slate-400 group-hover:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurDifference;