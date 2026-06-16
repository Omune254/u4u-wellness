"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What happens during my first session?",
    a: "Your first session is a relaxed, confidential conversation where your therapist listens to your concerns, learns about your background, and works with you to understand what you hope to achieve. There is no pressure — it is simply a safe space for you to be heard.",
  },
  {
    q: "How long does therapy typically take?",
    a: "The duration varies depending on your goals and the nature of your concerns. Some clients find significant relief in 6–8 sessions, while others benefit from longer-term support. Your therapist will discuss a personalised plan with you after the initial assessment.",
  },
  {
    q: "Is everything I share kept confidential?",
    a: "Yes. All sessions are strictly confidential. We adhere to the ethical guidelines of the Kenya Counsellors and Psychologists Board. The only exceptions are situations where there is a risk of serious harm to yourself or others, which we will always discuss with you openly.",
  },
  {
    q: "Do you offer online sessions?",
    a: "Absolutely. We offer secure, flexible online counseling sessions via video call for clients who prefer the comfort of their own space or who are not based in Nakuru. Online sessions are just as effective as in-person appointments.",
  },
  {
    q: "How much does a session cost?",
    a: "Session fees are discussed during your initial inquiry and are kept as accessible as possible. We believe quality mental health care should be affordable. Please reach out via WhatsApp or our contact form to get current pricing and any available packages.",
  },
  {
    q: "Do you work with children and teenagers?",
    a: "Yes. We have dedicated youth and student support programs designed for children, teenagers, and young adults. Our therapists use age-appropriate, evidence-based approaches to help young people navigate anxiety, academic pressure, social challenges, and more.",
  },
  {
    q: "How do I book a session?",
    a: "You can book a session by filling in our contact form on this page, sending us a WhatsApp message, or calling us directly. We aim to respond within 24 hours and will schedule your first appointment at a time that suits you.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="py-24 bg-gradient-to-b from-white to-emerald-50/40"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-100 mb-5">
            <HelpCircle className="h-7 w-7 text-emerald-600" aria-hidden="true" />
          </div>
          <p className="text-xs uppercase tracking-[0.32em] text-emerald-600 font-semibold mb-3">
            Common questions
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Everything you need to know before taking your first step. If you have a question not listed here, please reach out — we are happy to help.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-emerald-200 shadow-md bg-white" : "border-gray-100 bg-white hover:border-emerald-100 hover:shadow-sm"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-base leading-snug ${isOpen ? "text-emerald-700" : "text-gray-900"}`}>
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-emerald-100 text-emerald-600 rotate-180" : "bg-gray-100 text-gray-500"}`}>
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
                  aria-hidden={!isOpen}
                >
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
          <p className="text-gray-700 font-medium mb-4">Still have questions? We&apos;re here to help.</p>
          <a
            href="https://wa.me/254110707361?text=Hi%20U4U%20Team%2C%20I%20have%20a%20question%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
