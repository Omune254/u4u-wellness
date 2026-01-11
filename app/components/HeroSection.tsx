// app/components/HeroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden dark-bg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-nature-sunset.jpg"
          alt="Peaceful nature sunset - symbolizing hope and healing"
          fill
          priority
          quality={85}
          className="object-cover"
        />

        {/* Contrast overlay (stronger + elegant) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-28 lg:py-32 z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-white"
          >
            {/* Logo + Brand */}
            <div className="flex items-center gap-5">
              <div className="relative">
                <Image
                  src="/MyLogo.jpg"
                  alt="U4U Wellness Center Logo"
                  width={84}
                  height={84}
                  className="rounded-full border-4 border-white/30 shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                U4U
                <br />
                <span className="block mt-1 text-2xl md:text-3xl font-medium text-green-100">
                  Wellness Center
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl font-medium text-green-50 max-w-xl">
              Your safe space for healing, growth, and emotional wellness.
            </p>

            {/* Description */}
            <div className="space-y-4 text-green-100 text-lg leading-relaxed max-w-xl">
              <p>
                At U4U Wellness Center, we believe healing begins the moment you
                feel truly heard.
              </p>
              <p>
                Founded by two licensed psychologists, we offer compassionate,
                evidence-based care that helps you overcome anxiety, stress, life
                transitions, and emotional challenges with warmth,
                confidentiality, and real understanding.
              </p>
              <p className="font-semibold text-white">
                You don’t have to face it alone. Your journey to peace starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full
                           shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Book a Session Today
              </button>

              <a
                href="https://wa.me/254110707361?text=Hi%20U4U%20Team%2C%20I%20would%20like%20to%20book%20a%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600/40 backdrop-blur-sm border-2 border-white
                           text-white font-bold text-lg rounded-full text-center
                           hover:bg-white hover:text-green-700 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* PROMISE CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
        >
          {[
            { title: "Safe & Confidential", desc: "Your privacy is sacred" },
            { title: "Evidence-Based Care", desc: "Proven methods that actually work" },
            { title: "You Are Not Alone", desc: "We walk with you every step" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl text-center
                         border border-white/20 hover:bg-white/30 transition"
            >
              <h3 className="text-2xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-green-50">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
