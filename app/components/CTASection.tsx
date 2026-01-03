// app/components/CTASection.tsx
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const CTASection = () => (
  <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Begin Your Healing Journey?
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
        Take the first step toward emotional wellness with compassionate, professional support.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Book a Session Button */}
        <Link
          href="/contact"
          className="btn-primary px-8 py-4 text-lg font-bold"
        >
          Book a Session
        </Link>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/254110707361?text=Hi%20U4U%20Wellness%20Team%2C%20I%20would%20like%20to%20book%20a%20session"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline border-2 border-white text-white px-8 py-4 text-lg font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
          aria-label="Chat with U4U on WhatsApp"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>
);