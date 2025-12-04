// app/components/ContactSection.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

export const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! We'll reply within 24 hours.");
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please use WhatsApp below.");
    }
  };

  return (
    <section id="contact" className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to book a session or have questions? Reach out we’re here for you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* LEFT — FORM */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="0110 707 361"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  placeholder="How can we support you today?"
                />
              </div>

              {/* Success / Error */}
              {status === "success" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-700 bg-green-50 p-4 rounded-lg">
                  <CheckCircle size={22} />
                  <span>{message}</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-700 bg-red-50 p-4 rounded-lg">
                  <AlertCircle size={22} />
                  <span>{message}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-lg transition disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* WhatsApp CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/254110707361?text=Hi%20U4U%20Team%2C%20I%20would%20like%20to%20book%20a%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition shadow-lg"
              >
                <MessageCircle size={24} />
                Book via WhatsApp (Fastest)
              </a>
            </div>
          </div>

          {/* RIGHT — CONTACT INFO */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg h-full"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>

              <div className="space-y-7 text-lg">
                <div className="flex items-center gap-4">
                  <Phone className="text-teal-600" size={24} />
                  <div>
                    <p className="font-medium">Call or Text</p>
                    <div className="space-x-4">
                      <a href="tel:+254110707361" className="text-teal-600 hover:underline font-bold">0110707361</a>
                      <span>/</span>
                      <a href="tel:+254110003924" className="text-teal-600 hover:underline font-bold">0110003924</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-teal-600" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:u4uwellnesscenter@gmail.com" className="text-teal-600 hover:underline font-bold">
                      u4uwellnesscenter@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-teal-600 mt-1" size={24} />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-gray-600">
                      Mon–Fri: 9:00 am – 7:00 pm<br />
                      Saturday: 10:00 am – 3:00 pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-xl">
                <h4 className="font-bold text-amber-900 mb-2">In Crisis?</h4>
                <p className="text-amber-800">
                  Call Kenya Mental Health Helpline: <strong className="text-xl">1196</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};