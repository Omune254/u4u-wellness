import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 flex-shrink-0"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.405a.75.75 0 0 0 .916.938l5.733-1.505A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.027-1.381l-.36-.214-3.733.98.995-3.64-.234-.373A9.772 9.772 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

export const CTASection = () => (
  <section
    aria-label="Start your healing journey with U4U Wellness Center"
    className="relative py-24 md:py-32 overflow-hidden bg-black min-h-[580px] flex items-center"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <Image
        src="/cta-open-path.jpg"
        alt="Open path through nature symbolising the start of a healing journey"
        fill
        className="object-cover"
        quality={88}
      />
      {/* Gradient — darker on edges, lighter in center so the image reads through */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
      {/* Subtle green tint at bottom to connect to footer */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto max-w-4xl px-4 sm:px-6 text-center text-white">

      {/* Eyebrow */}
      <p className="text-xs uppercase tracking-[0.32em] text-emerald-300/90 font-semibold mb-5">
        Your journey starts here
      </p>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
        Ready to Begin Your{" "}
        <span className="text-emerald-300">Healing Journey</span>?
      </h2>

      {/* Subtext */}
      <p className="text-base md:text-lg text-slate-200/80 max-w-2xl mx-auto mb-10 leading-relaxed">
        Take the first step toward emotional wellness with compassionate,
        professional support — no pressure, just a conversation.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-bold rounded-full bg-white text-green-800 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          Book a Session
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <a
          href="https://wa.me/254110707361?text=Hi%20U4U%20Wellness%20Team%2C%20I%20would%20like%20to%20book%20a%20session"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with U4U Wellness Center on WhatsApp"
          className="inline-flex items-center justify-center gap-2.5 px-9 py-4 text-base font-bold rounded-full bg-white/10 border border-white/30 text-white backdrop-blur-sm hover:bg-white hover:text-green-800 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <WhatsAppIcon />
          Chat on WhatsApp
        </a>
      </div>

      {/* Trust micro-copy */}
      <p className="mt-8 text-xs text-slate-300/55 tracking-wide">
        · Strictly confidential · Registered and licensed professionals
      </p>
    </div>
  </section>
)
