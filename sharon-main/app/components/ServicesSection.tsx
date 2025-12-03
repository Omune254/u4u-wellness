"use client";
import React from "react";
import { Brain, Users, Heart, User, Home, Star } from "lucide-react";
export const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="text-teal-600" size={24} />,
      title: "Individual Therapy",
      description:
        "One-on-one sessions tailored to address your specific needs, goals, and challenges.",
    },
    {
      icon: <Users className="text-teal-600" size={24} />,
      title: "Couples Counseling",
      description:
        "Build stronger relationships through improved communication, conflict resolution, and emotional connection.",
    },
    {
      icon: <Heart className="text-teal-600" size={24} />,
      title: "Trauma Therapy",
      description:
        "Evidence-based approaches to help you process and heal from past trauma.",
    },
    {
      icon: <User className="text-teal-600" size={24} />,
      title: "Anxiety & Depression",
      description:
        "Learn effective strategies to manage symptoms and improve your quality of life.",
    },
    {
      icon: <Home className="text-teal-600" size={24} />,
      title: "Family Therapy",
      description:
        "Resolve conflicts and strengthen family bonds through collaborative therapy sessions.",
    },
    {
      icon: <Star className="text-teal-600" size={24} />,
      title: "Mindfulness & Stress Management",
      description:
        "Develop practical skills to reduce stress and increase present-moment awareness.",
    },
  ];
  return (
    <section id="services" className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I offer a wide range of therapeutic services designed to support
            your mental health and well-being. All services are provided by
            licensed professionals with extensive training and experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which service is right for you? We offer free 15-minute
            consultations to help you find the best fit.
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
