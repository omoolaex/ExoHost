import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-24 md:py-32">
      {/* CONTINUITY ELEMENT: 
          Subtle vertical line coming from the previous section to 'thread' the story together 
      */}
      <div className="absolute top-0 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-slate-200 to-transparent"></div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-stretch lg:gap-0">
          
          {/* Mission Side - Focused on the 'Now' */}
          <div className="relative flex-1 pb-12 lg:border-r lg:border-slate-100 lg:pb-0 lg:pr-16">
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-[var(--color-secondary)] shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
              </div>
              
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                The Mission
              </span>
              
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Empowering <br />
                <span className="text-[var(--color-secondary)]">Progress.</span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                Our mission is to provide <span className="font-semibold text-slate-900">reliable, secure, and scalable</span> infrastructure. We remove the technical friction so businesses can grow without limits.
              </p>
            </div>
          </div>

          {/* Vision Side - Focused on the 'Future' */}
          <div className="relative flex-1 pt-12 lg:pt-0 lg:pl-16">
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="M12 6V2"/><path d="M12 22v-4"/></svg>
              </div>

              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                The Vision
              </span>
              
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Africa and <br />
                <span className="text-blue-600">Beyond.</span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                To be the <span className="font-semibold text-slate-900">infrastructure partner</span> of choice for emerging markets proving that world-class hosting is accessible, honest, and built for builders.
              </p>
            </div>
          </div>

        </div>

        {/* Brand Connectivity Footer */}
        <div className="mt-24">
          <div className="group relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 text-center">
            {/* Subtle Grid overlay for continuity with Hero */}
            <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(white,transparent)]">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="footer-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#footer-grid)" />
              </svg>
            </div>

            <p className="relative z-10 text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
              ExoHost Core Principles
            </p>
            <h3 className="relative z-10 mt-4 text-2xl font-bold text-white md:text-3xl">
              Built for the next generation of digital builders.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;