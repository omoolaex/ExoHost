import React from "react";

const services = [
  {
    title: "Web Hosting & Cloud Servers",
    description: "Fast, stable environments for websites, applications, and APIs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
    ),
  },
  {
    title: "Infrastructure Management",
    description: "Setup, optimization, monitoring, and ongoing support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M20 12h2"/><path d="M2 12h2"/></svg>
    ),
  },
  {
    title: "Scalable Architecture",
    description: "Systems designed to grow seamlessly as your business scales.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 20-4-4h3V5c0-1.1-.9-2-2-2h-5"/><path d="M12 7v14"/><path d="m15 18-3 3-3-3"/><path d="m17 21 3-3h-3V5c0-1.1-.9-2-2-2h-5"/></svg>
    ),
  },
  {
    title: "Security & Reliability",
    description: "Built-in best practices, consistent backups, and protection.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
    ),
  },
  {
    title: "Developer-Friendly",
    description: "Tools and configurations that align with your modern workflow.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading - Perfectly Balanced */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
            Our Solutions
          </span>
          
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            What We Do
          </h2>
          
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            ExoHost provides dependable hosting and cloud infrastructure
            solutions designed for real-world use. We build the foundation so you can build the future.
          </p>

          <div className="mt-8 h-1 w-12 rounded-full bg-[var(--color-secondary)] opacity-30"></div>
        </div>

        {/* Services Grid - 3x2 Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition-colors group-hover:bg-[var(--color-secondary)] group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--color-secondary)] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Partnership Card - Balanced to match grid height */}
          <div className="flex flex-col justify-between rounded-2xl bg-[var(--color-secondary)] p-8 text-white shadow-lg shadow-[var(--color-secondary)]/20 hover:-translate-y-2 transition-all duration-300">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
              </div>
              <h3 className="text-xl font-bold">Need a custom setup?</h3>
              <p className="mt-4 opacity-90 leading-relaxed text-sm">
                We design bespoke systems that grow as your business scales. Let’s build your foundation together.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="https://clients.exohost.com.ng/contact.php" 
                className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-[var(--color-secondary)] transition hover:bg-slate-800 active:scale-95"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-20 flex flex-col items-center">
          <div className="w-full max-w-4xl border-t border-slate-200 pt-10 text-center">
            <p className="text-lg font-medium text-slate-800 italic">
              "We handle the infrastructure, so you can focus on building products and running your business."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;