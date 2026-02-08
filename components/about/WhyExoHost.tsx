import React from "react";
// Assuming you use Lucide or similar for icons, otherwise SVG paths work perfectly
import { ShieldAlert, Target } from "lucide-react"; 

const WhyExoHost: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* THE PROBLEM: Why ExoHost Exists */}
          <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md md:p-12">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <ShieldAlert size={24} />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Why ExoHost Exists
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We exist because too many businesses fail not from lack of ideas, 
              but from <span className="text-slate-900 font-medium">fragile infrastructure, poor support</span>, 
              and platforms that don’t grow with them. 
              ExoHost was created to fix that.
            </p>
          </div>

          {/* THE FOCUS: What We Focus On */}
          <div className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md md:p-12">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-secondary-light)] text-[var(--color-secondary)]">
              <Target size={24} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
              What We Focus On
            </h3>

            <div className="mt-6 space-y-4">
              <p className="text-lg leading-relaxed text-slate-600">
                We focus on what matters most to your bottom line, removing the 
                "noise" of traditional hosting:
              </p>
              
              <ul className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { label: "Uptime", color: "bg-green-500" },
                  { label: "Performance", color: "bg-blue-500" },
                  { label: "Security", color: "bg-purple-500" },
                  { label: "Clarity", color: "bg-orange-500" }
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3 font-semibold text-slate-800">
                    <span className={`h-1.5 w-1.5 rounded-full ${item.color}`}></span>
                    {item.label}
                  </li>
                ))}
              </ul>
              
              <p className="mt-4 text-sm font-medium text-[var(--color-secondary)] italic">
                — Without unnecessary complexity or bloated pricing.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyExoHost;