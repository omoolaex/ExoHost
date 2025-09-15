"use client";

import { FaBullhorn, FaCoins, FaCreditCard } from "react-icons/fa";

export default function AffiliateSteps() {
  const steps = [
    {
      icon: (
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-teal-600 text-4x shadow">
          <FaBullhorn size={60} />
        </div>
      ),
      title: "Refer Clients",
      desc: "Promote ExoHost to your network using your affiliate link.",
    },
    {
      icon: (
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-yellow-500 text-4xl shadow">
          <FaCoins size={60}/>
        </div>
      ),
      title: "Earn Commission",
      desc: "Receive a 5% commission on every successful signup.",
    },
    {
      icon: (
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-teal-600 text-4xl shadow">
          <FaCreditCard size={60} />
        </div>
      ),
      title: "Get Paid",
      desc: "Earn a steady income for active services.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-widest text-teal-600">
          3 simple steps
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          How Our Affiliate Program Works
        </h3>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition"
          >
            <div className="flex justify-center items-center mb-4">
              {step.icon}
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900">
              {step.title}
            </h4>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
