"use client";
import React from "react";
import { Heart, Shield, Users } from "lucide-react";
import Image from "next/image";
export const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About My Practice
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I offer a range of therapeutic services designed to address various
            mental health concerns and life challenges. Each approach is
            tailored to your unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={28} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Compassionate Care
            </h3>
            <p className="text-gray-600">
              approach each client with empathy and understanding, creating a
              judgment-free space for healing.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={28} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Evidence-Based Methods
            </h3>
            <p className="text-gray-600">
              therapeutic approaches are grounded in research and proven to help
              clients achieve meaningful results.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={28} className="text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Personalized Treatment
            </h3>
            <p className="text-gray-600">
              therapeutic approaches to meet your unique needs, goals, and
              circumstances.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src="/houses.jpg"
              alt="Therapist office"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              My Approach
            </h3>
            <p className="text-gray-600 mb-4">
              I believe that therapy is a collaborative journey. Our therapists
              work alongside you to identify challenges, develop coping
              strategies, and build resilience. Whether you&apos;re dealing with
              anxiety, depression, relationship issues, or life transitions, i
              am here to support you.
            </p>
            <p className="text-gray-600 mb-6">
              my practice combines traditional therapeutic techniques with
              modern approaches to provide comprehensive care that addresses the
              whole person—mind, body, and spirit.
            </p>
            <button
              onClick={() =>
                document.getElementById("team")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition"
            >
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
