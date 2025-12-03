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
    <section className="w-full bg-gradient-to-br from-green-600 via-teal-600 to-green-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Logo + Title */}
            <div className="flex items-center gap-3">
              <Image
                src="/MyLogo.jpg"
                alt="U4U Logo"
                width={60}
                height={60}
                className="rounded-full border-2 border-white/30"
              />
              <h1 className="text-3xl md:text-4xl font-extrabold">
                U4U Wellness Center
              </h1>
            </div>

            <p className="text-lg md:text-xl font-medium text-green-50">
              Your safe space for healing, growth, and emotional wellness.
            </p>

            {/* Document Content */}
            <div className="space-y-4 text-green-100">
              <p>
                At U4U Wellness Center, we believe that healing begins the moment you feel heard.
              </p>
              <p>
                Our mission is to provide compassionate, evidence-based psychological care and wellness programs that empower individuals to build resilience, discover balance, and live emotionally healthy lives.
              </p>
              <p>
                Whether you’re seeking support through a difficult season, dealing with stress, anxiety, or loss — or simply looking to understand yourself better — you’ll find a calm, non-judgmental space here.
              </p>
              <p>
                We combine professional psychology with a human touch — creating personalized care that meets you where you are.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Book a Session
              </button>
              <Link
                href="/contact"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-all text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-80 md:h-96 lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="/doctor.jpg" // Replace with /sharon.jpg if you have it
              alt="Sharon Muchemi - U4U Wellness Center"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
              <p className="text-sm font-medium text-gray-800">Safe • Confidential • Caring</p>
            </div>
          </motion.div>
        </div>

        {/* Our Promise - 3 Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { title: "A safe, confidential space", desc: "Your privacy is our priority" },
            { title: "Evidence-based support", desc: "Proven methods that work" },
            { title: "Genuine care", desc: "You’re never alone here" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-green-100 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};