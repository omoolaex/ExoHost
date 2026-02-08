import React from "react";

const audiences = [
  {
    target: "Startups",
    need: "Launching and scaling digital products with speed.",
  },
  {
    target: "Developers",
    need: "Reliable environments that don't fight your workflow.",
  },
  {
    target: "SMEs",
    need: "Moving from basic shared hosting to serious infrastructure.",
  },
  {
    target: "Founders",
    need: "Stability and growth without enterprise-level complexity.",
  },
];

const WhoWeServe: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Balanced Heading Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
            Our Ecosystem
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Who We Serve
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-slate-100"></div>
        </div>

        {/* Audience Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => (
            <div 
              key={item.target} 
              className="relative flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:bg-white hover:shadow-lg hover:shadow-slate-200/50"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {item.target}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.need}
              </p>
              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <div className="h-8 w-8 rounded-bl-xl border-t-2 border-r-2 border-[var(--color-secondary)]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Line - Brand Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-full bg-slate-900 px-6 py-3">
            <p className="text-base font-medium text-white">
              If your business depends on being online, <span className="text-[var(--color-secondary)]">ExoHost is for you.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeServe;