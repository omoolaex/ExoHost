import React from "react";

const AboutCTA: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-primary)]/90 py-24 md:py-32">
      {/* Visual Connectivity: Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(white,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Decorative Brand Glow */}
      <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--color-secondary)] opacity-20 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="mb-6 inline-block text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-secondary)]">
          Ready to Begin?
        </span>
        
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
          Let’s Build on <br />
          <span className="text-slate-400 font-normal italic">Solid Ground.</span>
        </h2>

        <div className="mt-8 space-y-4">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Whether you’re launching your first product or scaling an existing
            platform, ExoHost gives you the foundation to move forward with
            confidence.
          </p>
          <p className="text-base font-medium text-slate-300">
            Because great businesses deserve infrastructure that doesn’t get in
            the way.
          </p>
        </div>

        {/* CTA Buttons - High Visual Weight */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/get-started"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--color-secondary)] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95 sm:w-auto"
          >
            <span>Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>

          <a
            href="/contact"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition hover:bg-slate-800 sm:w-auto"
          >
            Contact Sales
          </a>
        </div>
        
        {/* Support Tagline */}
        <p className="mt-10 text-xs font-mono text-white uppercase tracking-widest">
          Available for migration support and custom architecture
        </p>
      </div>
    </section>
  );
};

export default AboutCTA;