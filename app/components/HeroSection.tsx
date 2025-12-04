// app/components/HeroSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gradient-to-br from-green-700 via-teal-700 to-green-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            {/* Logo + Name */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/MyLogo.jpg"   
                  alt="U4U Wellness Center Logo"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white/30 shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                U4U<br />
                <span className="text-2xl md:text-3xl font-medium text-green-100">
                  Wellness Center
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl font-medium text-green-50">
              Your safe space for healing, growth, and emotional wellness.
            </p>

            <div className="space-y-4 text-green-100 text-lg leading-relaxed">
              <p>
                At U4U Wellness Center, we believe healing begins the moment you feel truly heard.
              </p>
              <p>
                Founded by two licensed psychologists, we offer compassionate, evidence-based care 
                that helps you overcome anxiety, stress, life transitions, and emotional challenges
                with warmth, confidentiality, and real understanding.
              </p>
              <p className="font-semibold text-white">
                You don’t have to face it alone. Your journey to peace starts here.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Book a Session Today
              </button>
              <a
                href="https://wa.me/254110707361?text=Hi%20U4U%20Team%2C%20I%20would%20like%20to%20book%20a%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600/30 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/talks.jpeg" 
              alt="Sharon Muchemi & Wanjiku Ngugi – Founders of U4U Wellness Center"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl">
              <p className="text-green-800 font-bold text-lg">
                Safe • Confidential • Caring
              </p>
            </div>
          </motion.div>
        </div>

        {/* Promise Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { title: "Safe & Confidential", desc: "Your privacy is sacred" },
            { title: "Evidence-Based Care", desc: "Proven methods that actually work" },
            { title: "You Are Not Alone", desc: "We walk with you every step" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition"
            >
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-green-100">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};