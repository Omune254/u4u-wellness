"use client";
import React from "react";
import { Check } from "lucide-react";
export const PricingSection = () => {
  const packages = [
    {
      name: "Single Session",
      price: "$120",
      period: "per session",
      description: "One-time therapy session without commitment",
      features: [
        "50-minute session",
        "Initial assessment",
        "Personalized approach",
        "Flexible scheduling",
        "Online or in-person options",
      ],
      isPopular: false,
      buttonText: "Book a Session",
    },
    {
      name: "Monthly Package",
      price: "$400",
      period: "per month",
      description: "Weekly sessions at a discounted rate",
      features: [
        "4 sessions per month",
        "Save $80 compared to single sessions",
        "Consistent weekly schedule",
        "Progress tracking",
        "Email support between sessions",
        "Online or in-person options",
      ],
      isPopular: true,
      buttonText: "Choose This Plan",
    },
    {
      name: "Quarterly Package",
      price: "$1,080",
      period: "per quarter",
      description: "Long-term therapy at our best rate",
      features: [
        "12 sessions over 3 months",
        "Save $360 compared to single sessions",
        "Priority scheduling",
        "Comprehensive treatment plan",
        "Email support between sessions",
        "Online or in-person options",
        "Quarterly progress review",
      ],
      isPopular: false,
      buttonText: "Choose This Plan",
    },
  ];
  return (
    <section id="pricing" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Therapy Packages & Pricing
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I offer flexible pricing options to make therapy accessible. Choose
            the package that best fits your needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden ${
                pkg.isPopular
                  ? "border-2 border-teal-500 shadow-lg"
                  : "border border-gray-200 shadow-sm"
              }`}
            >
              {pkg.isPopular && (
                <div className="bg-teal-500 text-white text-center py-2">
                  <p className="font-medium">Most Popular</p>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {pkg.price}
                  </span>
                  <span className="text-gray-600 ml-1">{pkg.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check
                        size={18}
                        className="text-teal-500 mr-2 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className={`w-full py-3 rounded-md font-medium transition ${
                    pkg.isPopular
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-2">
            I do accept most major insurance plans. Contact me to verify your
            coverage.
          </p>
          <p className="text-gray-600">
            Sliding scale fees are available for those experiencing financial
            hardship.
          </p>
        </div>
      </div>
    </section>
  );
};
