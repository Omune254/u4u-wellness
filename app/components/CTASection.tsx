// app/components/CTASection.tsx
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export const CTASection = () => (
  <section className="relative py-16 md:py-24 overflow-hidden dark-bg">
    {/* Background */}
    <div className="absolute inset-0">
      <Image
        src="/cta-open-path.jpg"
        alt="Open path in nature - symbolizing the start of your healing journey"
        fill
        className="object-cover"
        quality={85}
      />
      {/* Stronger neutral overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />
    </div>

    {/* Content */}
    <div className="relative container mx-auto px-4 text-center z-10 text-white">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
        Ready to Begin Your Healing Journey?
      </h2>

      <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200 font-medium">
        Take the first step toward emotional wellness with compassionate,
        professional support.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        {/* Book a Session */}
        <Link
          href="/contact"
          className="px-10 py-5 text-lg font-extrabold rounded-full
                     bg-white text-gray-900
                     shadow-2xl hover:shadow-3xl hover:scale-105
                     transition-all duration-300"
        >
          Book a Session
        </Link>

        {/* WhatsApp */}
        <a
          href="https://wa.me/254110707361?text=Hi%20U4U%20Wellness%20Team%2C%20I%20would%20like%20to%20book%20a%20session"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-5 text-lg font-extrabold rounded-full
                     border-2 border-white text-white
                     flex items-center justify-center gap-3
                     hover:bg-white hover:text-gray-900
                     transition-all duration-300 backdrop-blur-sm shadow-2xl"
          aria-label="Chat with U4U on WhatsApp"
        >
          <MessageCircle size={24} />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>
);
