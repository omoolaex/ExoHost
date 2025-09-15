// components/sections/FAQ.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "How can I get a free .com.ng domain with ExoHost?",
    answer:
      "You get a free .com.ng domain when you purchase a hosting plan for at least 1 year and choose domain registration during checkout.",
  },
  {
    question: "Is the free domain available without hosting?",
    answer: "No, the free domain is only available when bundled with a hosting plan.",
  },
  {
    question: "How long is the free domain valid?",
    answer:
      "The domain is free for the first year. Standard renewal charges apply from the second year onward.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes, we offer a 7-day money-back guarantee on hosting packages.",
  },
  {
    question: "Where are your servers located?",
    answer: "Our servers are hosted in world-class Tier-3 datacenters across Africa and Europe.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Yes, you can switch plans anytime to better suit your project’s needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept payments via Paystack, Monnify, bank transfer, and major cards (Visa, Mastercard, Verve).",
  },
  {
    question: "How do I migrate my website to ExoHost?",
    answer:
      "Our team offers free migration support. We’ll move your files, emails, and databases securely without downtime.",
  },
  {
    question: "What security measures are included?",
    answer:
      "All plans include SSL, DDoS protection, malware scanning, and daily automated backups.",
  },
  {
    question: "How often do you perform backups?",
    answer: "We run automated daily and weekly backups to keep your data safe.",
  },
  {
    question: "Do you limit bandwidth?",
    answer: "All plans include unmetered bandwidth, fair-usage applies for excessive traffic above 500GB monthly.",
  },
  {
    question: "What is your refund policy?",
    answer: (
      <>
        We provide a 7-day money-back guarantee on hosting fees under certain
        conditions. See our{" "}
        <a href="/refund-policy" className="text-[var(--color-primary)] underline">
          refund policy
        </a>{" "}
        for details.
      </>
    ),
  },
  {
    question: "Where can I read your terms of service?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <a href="/terms" className="text-[var(--color-primary)] underline">
            Terms and Conditions
          </a>
        </li>
        <li>
          <a href="/privacy" className="text-[var(--color-primary)] underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/aup" className="text-[var(--color-primary)] underline">
            Acceptable Use Policy
          </a>
        </li>
      </ul>
    ),
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--color-primary)]">
          Frequently Asked Questions
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">Have a Question?</h3>
        <p className="text-gray-600 mt-2">
          Find answers to the most commonly asked questions
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-md">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {faq.question}
              <ChevronDown
                className={`h-5 w-5 transform transition-transform ${
                  openIndex === idx ? "rotate-180 text-[var(--color-primary)]" : ""
                }`}
              />
            </button>
            {openIndex === idx && (
              <div className="px-4 pb-4 text-sm text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm italic">
          Still have questions?{" "}
          <a
            href="javascript:void(Tawk_API?.maximize?.())"
            className="text-[var(--color-secondary)] font-medium underline"
          >
            Speak to a consultant
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
