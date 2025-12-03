// components/CTASection.tsx
import Link from "next/link";

export const CTASection = () => (
  <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white section-py">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Begin Your Healing Journey?
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
        Take the first step toward emotional wellness with compassionate, professional support.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/contact" className="btn-primary">
          Book a Session
        </Link>
        <a
          href="https://wa.me/254700000000"
          target="_blank"
          className="btn-outline text-white border-white hover:bg-white/20"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>
);