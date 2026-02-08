import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-32">
      {/* BRAND ALIGNMENT: 
          Subtle grid background represents "Infrastructure" and "Solid Ground" 
      */}
      <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Page Label - Clarity Over Hype */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full bg-[var(--color-secondary-light)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
            About ExoHost
          </span>
        </div>

        {/* Headline - Built for Growth */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          Reliable Infrastructure. <br />
          <span className="text-[var(--color-secondary)]">Built for Growth.</span>
        </h1>

        {/* Description - Partner Messaging */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
          ExoHost is a modern hosting and cloud infrastructure company built to make 
          reliable, scalable technology accessible to startups, developers, and growing 
          businesses <strong>especially in Africa and emerging markets.</strong> 
        </p>

        {/* Trust Indicators - Human/Partner focus */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 border-t border-slate-100 pt-10 text-sm font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            99.9% Uptime Priority
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--color-secondary)]"></span>
            Human-Led Support
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            Developer-Friendly
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;