"use client";

import { FaRegLightbulb, FaCheckCircle, FaSearch, FaTrademark, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";

const tips = [
  {
    title: "Keep it Short",
    desc: "Choose a domain name that's brief to make it easy for people to remember and type.",
    icon: <FaRegLightbulb size={48} />,
    colorClass: "text-[#1E5128]",
  },
  {
    title: "Keep it Simple",
    desc: "Make sure your domain is easy to spell and doesn’t use hyphens or random characters.",
    icon: <FaCheckCircle size={48} />,
    colorClass: "text-[#1E5128]",
  },
  {
    title: "Check Availability",
    desc: "Before you settle on a name, use the domain search to see if it’s available.",
    icon: <FaSearch size={48} />,
    colorClass: "text-[#1E5128]",
  },
  {
    title: "Use Your Brand Name",
    desc: "Use your brand name or niche keywords to boost recognition and credibility.",
    icon: <FaTrademark size={48} />,
    colorClass: "text-[#D4AF37]",
  },
  {
    title: "Think Locally",
    desc: "If your business is local, use a country-specific extension to attract local customers.",
    icon: <FaMapMarkerAlt size={48} />,
    colorClass: "text-[#D4AF37]",
  },
  {
    title: "Get it ASAP",
    desc: "Register your domain name as soon as possible, before someone else does.",
    icon: <FaShoppingCart size={48} />,
    colorClass: "text-[#1E5128]",
  },
];

export default function DomainTips() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F]">
          6 Tips to Choosing the Perfect Domain Name
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="text-white transition p-6 flex flex-col items-center"
          >
            <div className={`${tip.colorClass} mb-4`}>
              {tip.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1E5128]">{tip.title}</h3>
            <p className="mt-2 text-black">{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
