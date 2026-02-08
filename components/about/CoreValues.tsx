import React from "react";

const values = [
  {
    number: "01",
    title: "Reliability First",
    description: "If it’s not stable, nothing else matters. We prioritize uptime and redundancy over experimental features.",
  },
  {
    number: "02",
    title: "Clarity Over Hype",
    description: "Honest solutions beat flashy promises. We speak the language of engineers and operators, not marketing scripts.",
  },
  {
    number: "03",
    title: "Growth-Driven Thinking",
    description: "Infrastructure should enable progress, not limit it. We build systems that scale horizontally as your user base grows.",
  },
  {
    number: "04",
    title: "Responsibility",
    description: "We treat our clients’ systems like our own. Ownership is the foundation of our support and management model.",
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading - Left Aligned for a Professional Look */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between lg:mb-24">
          <div className="max-w-2xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
              The Manifesto
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Our Core Values
            </h2>
          </div>
          <p className="mt-6 max-w-sm text-lg text-slate-500 md:mt-0">
            The non-negotiable standards that drive every server we deploy.
          </p>
        </div>

        {/* Values Grid - Using a "Blueprint" Border Logic */}
        <div className="grid border-t border-slate-100 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative flex flex-col border-b border-slate-100 p-8 transition-colors hover:bg-slate-50 md:p-10 lg:border-r last:lg:border-r-0"
            >
              {/* Numbering Accent */}
              <span className="mb-8 block font-mono text-sm font-bold text-slate-300 transition-colors group-hover:text-[var(--color-secondary)]">
                {value.number}
              </span>

              <h3 className="text-xl font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
              
              {/* Subtle hover indicator at bottom */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--color-secondary)] transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;