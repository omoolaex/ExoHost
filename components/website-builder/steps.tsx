"use client";

import { FaRegImages, FaEdit, FaMousePointer } from "react-icons/fa";

export default function StepsToGetStarted() {
  const steps = [
    {
      icon: (
        <div className="flex justify-center mb-4 text-teal-600">
          <FaRegImages size={60} />
        </div>
      ),
      title: "Choose a Template",
      desc: "Pick a template that suits your business. Choose from a range of professionally designed templates.",
    },
    {
      icon: (
        <div className="flex justify-center mb-4 text-yellow-500">
          <FaEdit size={60} />
        </div>
      ),
      title: "Edit Your Website",
      desc: "Edit your template, add or remove sections, content and images until you’re happy with your website.",
    },
    {
      icon: (
        <div className="flex justify-center mb-4 text-teal-600">
          <FaMousePointer size={60} />
        </div>
      ),
      title: "Go Live",
      desc: "Once you’re happy with everything, publish your website with the click of a button.",
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
          Easy to Get Started
        </h3>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            {step.icon}
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
