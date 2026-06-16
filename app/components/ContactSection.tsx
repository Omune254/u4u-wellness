"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, CheckCircle2, AlertCircle, MapPin, ArrowRight, Send } from "lucide-react";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.405a.75.75 0 0 0 .916.938l5.733-1.505A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.027-1.381l-.36-.214-3.733.98.995-3.64-.234-.373A9.772 9.772 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

const inputClass = "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm transition-all duration-200 focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200";

export const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || "xpwzgkqb"}`,
        { method: "POST", body: formData, headers: { Accept: "application/json" } }
      );
      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! We'll reply within 24 hours.");
        form.reset();
      } else { throw new Error(); }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please reach out via WhatsApp below.");
    }
  };

  return (
    <section id="contact" aria-label="Contact U4U Wellness Center" className="w-full bg-gradient-to-b from-gray-50 via-white to-emerald-50/30 py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.32em] text-emerald-600 font-semibold mb-3">We'd love to hear from you</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Get in <span className="text-emerald-600">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Ready to book a session or have questions? Reach out — we&apos;re here to support you with compassion and care.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: form */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
            <p className="text-sm text-gray-500 mb-7">We respond within 24 hours on business days.</p>

            {status === "success" && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-800 font-medium">{message}</p>
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl bg-red-50 border border-red-200 p-4">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700 font-medium">{message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                  <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="0110 707 361" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="service" className="block text-xs font-semibold text-gray-700 mb-1.5">Service of Interest</label>
                <select id="service" name="service" className={inputClass}>
                  <option value="">Select a service (optional)</option>
                  <option>Individual Therapy</option>
                  <option>Family & Relationship Counseling</option>
                  <option>Youth & Student Support</option>
                  <option>Online Counseling</option>
                  <option>Workplace Wellness</option>
                  <option>Community Outreach</option>
                  <option>Other / Not sure yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">Message <span className="text-red-400">*</span></label>
                <textarea id="message" name="message" required rows={4} placeholder="How can we support you today?" className={`${inputClass} resize-none`} />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                {status === "loading" ? (
                  <><div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : (
                  <><Send className="h-4 w-4" /> Send Message</>
                )}
              </button>
            </form>

            {/* WhatsApp fallback */}
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-400 mb-3">Prefer to chat directly?</p>
              <a href="https://wa.me/254110707361?text=Hi%20U4U%20Team%2C%20I%20would%20like%20to%20book%20a%20session" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <WhatsAppIcon />
                Book via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: info panel */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="space-y-6">
            {/* Contact details */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-0.5">Call or Text</p>
                    <div className="space-y-0.5">
                      <a href="tel:+254110707361" className="block text-sm text-emerald-700 font-medium hover:text-emerald-900 transition-colors">0110 707 361</a>
                      <a href="tel:+254110003924" className="block text-sm text-emerald-700 font-medium hover:text-emerald-900 transition-colors">0110 003 924</a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-0.5">Email</p>
                    <a href="mailto:u4uwellnesscenter@gmail.com" className="text-sm text-emerald-700 font-medium hover:text-emerald-900 transition-colors break-all">u4uwellnesscenter@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-0.5">Location</p>
                    <p className="text-sm text-gray-500">Nakuru, Kenya</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-0.5">Working Hours</p>
                    <div className="text-sm text-gray-500 space-y-0.5">
                      <p>Mon – Fri: 9:00 AM – 7:00 PM</p>
                      <p>Saturday: 10:00 AM – 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* What to expect */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-emerald-600 font-semibold mb-4">What to expect</p>
              <ul className="space-y-3">
                {["A welcoming session with a licensed therapist","Practical tools tailored to your needs","Clear guidance between appointments","Strictly confidential, judgement-free space"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="bg-emerald-600 px-5 py-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white" aria-hidden="true" />
                <span className="text-white font-semibold text-sm">Find Us in Nakuru</span>
              </div>
              <iframe
                title="U4U Wellness Center location in Nakuru, Kenya"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.85!2d36.0800!3d-0.3031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182972c7e2b3b3b3%3A0x0!2sNakuru%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
