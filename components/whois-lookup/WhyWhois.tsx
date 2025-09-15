// components/whois/WhyWhois.tsx
import React from "react";
import { Search, User, Calendar } from "lucide-react";

const features = [
  {
    icon: <Search className="w-12 h-12 text-teal-500" />,
    title: "Check Availability",
    description:
      "Check to see if the domain you want is available before you settle on a name.",
  },
  {
    icon: <User className="w-12 h-12 text-teal-500" />,
    title: "Find Out Who Owns It",
    description:
      "Domain taken? Find out who owns it and see if they’re willing to sell.",
  },
  {
    icon: <Calendar className="w-12 h-12 text-teal-500" />,
    title: "See When it Expires",
    description:
      "Can’t find the owner’s info? See when a domain will expire so you can grab it.",
  },
];

const WhyWhois: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why do a Whois search?
        </h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWhois;
