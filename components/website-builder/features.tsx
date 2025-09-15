"use client";

import {
  FaShoppingCart,
  FaPenFancy,
  FaMobileAlt,
  FaSearch,
  FaBullhorn,
  FaRegImages,
  FaCreditCard,
  FaShoppingBasket,
  FaCoins,
} from "react-icons/fa";

export default function SiteBuilderFeatures() {
  const features = [
    {
      icon: (
        <div className="flex justify-center mb-4 text-teal-600">
          <FaShoppingCart size={50} />
        </div>
      ),
      title: "Ecommerce",
      desc: "Enhance your website with an online store, add your products, and start selling effortlessly.",
    },
    {
      icon: (
        <div className="flex justify-center mb-4 text-yellow-500">
          <FaPenFancy size={50} />
        </div>
      ),
      title: "Blogs",
      desc: "Create and share your articles and expert opinions easily with our blog editor.",
    },
    {
      icon: (
        <div className="flex justify-center mb-4 text-teal-600">
          <FaMobileAlt size={50} />
        </div>
      ),
      title: "Mobile-Friendly",
      desc: "Easily adapt your website to any device with simple and modern responsiveness tools.",
    },
    {
      icon: (
        <div className="flex justify-center mb-4 text-yellow-500">
          <FaSearch size={50} />
        </div>
      ),
      title: "SEO Tools",
      desc: "Easy-to-use SEO tools and Analytics to track your statistics and visitors.",
    },
    {
      icon: (
        <div className="flex justify-center mb-4 text-teal-600">
          <FaBullhorn size={50} />
        </div>
      ),
      title: "Social Media Integration",
      desc: "Add your social media feeds to your website with easy-to-use plugins.",
    },
    {
      icon: (
        <div className="flex justify-center mb-4 text-yellow-500">
          <FaRegImages size={50} />
        </div>
      ),
      title: "Media",
      desc: "Adding media is easy, upload your own files or link them from external sources.",
    },
    {
      icon: (
        <div className="flex justify-center mb-4 text-teal-600">
          <FaCreditCard size={50} />
        </div>
      ),
      title: "Local Payment Gateways",
      desc: "Easily accept payments on your website with various payment gateways.",
    },
    {
      icon: (
        <div className="flex justify-center mb-4 text-yellow-500">
          <FaShoppingBasket size={50} />
        </div>
      ),
      title: "No Product Limits",
      desc: "There are no product limitations, so you can add as many as you need and sell freely.",
    },
    {
      icon: (
        <div className="flex justify-center mb-4 text-teal-600">
          <FaCoins size={50} />
        </div>
      ),
      title: "No Per Product Fees",
      desc: "There are no hidden fees or additional charges for any of the products you sell.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-widest text-teal-600">
          Site Builder Plans Include
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          Everything You Need to Create a Business Website
        </h3>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            {feature.icon}
            <h4 className="text-xl font-semibold mb-2 text-gray-900">
              {feature.title}
            </h4>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
