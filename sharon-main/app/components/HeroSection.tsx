"use client";

import React from "react";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Begin Your Healing Journey Today
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Professional therapy services tailored to help you overcome
            challenges and discover your best self.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-6 py-3 bg-white text-teal-600 font-medium rounded-md hover:bg-gray-100 transition"
            >
              Book a Session
            </button>
            <button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-teal-600 hover:bg-opacity-10 transition"
            >
              Explore Services
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/doctor.jpg"
            alt="Peaceful therapy setting"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
