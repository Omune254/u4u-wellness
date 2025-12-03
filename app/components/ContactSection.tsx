// app/components/ContactSection.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";

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
        setMessage("Thank you! We'll get back to you within 24 hours.");
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
      setMessage("Oops! Something went wrong. Try WhatsApp instead.");
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
          <div className="w-20 h-1 bg-teal--500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to schedule? Reach out below or contact us directly.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* FORM */}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="Your name"
                  aria-label="Full name"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="your@email.com"
                  aria-label="Email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="+254 700 000 000"
                  aria-label="Phone number"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                  placeholder="How can we help you today?"
                  aria-label="Your message"
                />
              </div>

              {/* STATUS */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md"
                >
                  <CheckCircle size={20} />
                  <span>{message}</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md"
                >
                  <AlertCircle size={20} />
                  <span>{message}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>Sending...</>
                ) : (
                  <>Send Message</>
                )}
              </button>
            </form>

            {/* WHATSAPP CTA */}
            <div className="mt-6 text-center">
              <a
                href="https://wa.me/254700000000?text=Hi%20Sharon,%20I'd%20like%20to%20book%20a%20session"
                target="_blank"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
              >
                <MessageCircle size={20} />
                Or message us on WhatsApp
              </a>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm h-full"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="text-teal-600 mt-1" size={20} aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <a href="tel:+254700000000" className="text-teal-600 hover:underline">
                      +254 700 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-teal-600 mt-1" size={20} aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a href="mailto:contact@myspacecare.com" className="text-teal-600 hover:underline">
                      contact@myspacecare.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-teal-600 mt-1" size={20} aria-hidden="true" />
                  <div>
                    <h4 className="font-medium text-gray-800">Working Hours</h4>
                    <p className="text-gray-600 text-sm">
                      Mon–Fri: 9am–7pm<br />
                      Sat: 10am–3pm<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-md">
                <h4 className="font-medium text-amber-900 mb-2">Emergency Support</h4>
                <p className="text-sm text-amber-800">
                  In crisis? Call Kenya Mental Health Helpline: <strong>1196</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};