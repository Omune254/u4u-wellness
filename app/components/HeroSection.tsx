"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Users, Star, ArrowRight } from "lucide-react";

const heroCards = [
  { title: "Safe & Confidential", desc: "Your privacy is protected with secure, judgement-free care.", icon: ShieldCheck, color: "emerald" },
  { title: "Evidence-Based Care", desc: "Therapy grounded in research and tailored to your needs.", icon: Sparkles, color: "teal" },
  { title: "You Are Not Alone", desc: "A compassionate team supports your healing every step of the way.", icon: Users, color: "cyan" },
];

const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-300", border: "border-emerald-400/30", glow: "shadow-emerald-500/20" },
  teal: { bg: "bg-teal-500/20", text: "text-teal-300", border: "border-teal-400/30", glow: "shadow-teal-500/20" },
  cyan: { bg: "bg-cyan-500/20", text: "text-cyan-300", border: "border-cyan-400/30", glow: "shadow-cyan-500/20" },
};

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.405a.75.75 0 0 0 .916.938l5.733-1.505A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.027-1.381l-.36-.214-3.733.98.995-3.64-.234-.373A9.772 9.772 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

export const HeroSection = () => {
  return (
    <section aria-label="U4U Wellness Center hero" className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/hero-nature-sunset.jpg" alt="Peaceful nature at sunrise" fill priority quality={90} className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/35 to-emerald-950/55" />
        {/* Decorative orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-10 xl:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-7 text-white max-w-2xl"
          >
            {/* Brand lockup */}
            <div className="flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-emerald-400/20 blur-md pointer-events-none" />
                <Image src="/MyLogo.jpg" alt="U4U Wellness Center logo" width={72} height={72} className="rounded-full border-[3px] border-white/30 shadow-xl relative" priority />
              </div>
              <div>
                <p className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight">
                  U4U <span className="text-emerald-300">Wellness</span>
                </p>
                <p className="text-sm md:text-base text-green-100/70 font-medium tracking-wide mt-0.5">Center · Nakuru, Kenya</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-white/15" />
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80 font-medium">Calm · Trusted · Compassionate</span>
              <div className="h-px flex-1 bg-white/15" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight text-balance">
              Your safe space for{" "}
              <span className="text-emerald-300">healing</span>,<br />
              growth & emotional wellness.
            </h1>

            {/* Body text */}
            <div className="space-y-3 text-green-100/80 text-base md:text-lg leading-relaxed">
              <p>At U4U Wellness Center, healing begins the moment you feel truly heard.</p>
              <p>Founded by registered and licensed psychologists, we provide compassionate, evidence-based support for anxiety, trauma, grief, and life transitions.</p>
              <p className="font-semibold text-white/95">You don&apos;t have to face it alone — your journey to peace starts here.</p>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex -space-x-2">
                {["J","D","M","L"].map((l) => (
                  <div key={l} className="h-9 w-9 rounded-full border-2 border-white/30 bg-emerald-800/60 flex items-center justify-center text-xs text-emerald-200 font-bold">{l}</div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />)}
                </div>
                <p className="text-xs text-green-100/60 mt-0.5">Trusted by 200+ clients across Kenya</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base rounded-full shadow-lg shadow-emerald-900/40 hover:shadow-emerald-700/50 hover:scale-[1.03] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="https://wa.me/254110707361?text=Hi%20U4U%20Team%2C%20I%20would%20like%20to%20book%20a%20session" target="_blank" rel="noopener noreferrer" aria-label="Chat with U4U Wellness Center on WhatsApp" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-base rounded-full backdrop-blur-sm hover:bg-white hover:text-green-700 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-green-100/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                Licensed & Registered
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-green-100/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-teal-400" aria-hidden="true" />
                Evidence-Based
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-green-100/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                <Users className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                Online & In-Person
              </span>
            </div>
          </motion.div>

          {/* Right column: Sharon card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-2xl pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-2xl shadow-2xl">
              <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
                <Image src="/sharon.jpg" alt="Sharon Muchemi — Licensed & Registered Psychologist and Founder of U4U Wellness Center" fill className="object-cover" style={{ objectPosition: "center top" }} quality={90} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                {/* Live badge */}
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/40 border border-emerald-400/40 backdrop-blur-sm px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    <span className="text-xs text-emerald-200 font-semibold">Now accepting clients · Nakuru</span>
                  </div>
                </div>
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-extrabold text-xl leading-tight">Sharon Muchemi</p>
                  <p className="text-emerald-300 text-sm font-medium mt-0.5">Licensed & Registered Psychologist · Founder</p>
                </div>
              </div>
              {/* Card footer */}
              <div className="p-5 space-y-4">
                <p className="text-sm leading-relaxed text-green-100/80">Sharon brings trusted clinical expertise and deep cultural empathy to every session — helping you feel confident, calm, and supported.</p>
                <div className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/8 p-4">
                  <div className="mt-0.5 flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-snug">Licensed & Registered · Kenya Counsellors & Psychologists Board</p>
                    <p className="text-xs text-green-100/55 mt-1">All sessions are strictly confidential.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16"
        >
          {heroCards.map((card) => {
            const Icon = card.icon;
            const c = colorMap[card.color];
            return (
              <div key={card.title} className={`flex items-start gap-4 rounded-2xl border ${c.border} bg-white/8 backdrop-blur-sm p-5 shadow-lg ${c.glow} hover:bg-white/12 transition-all duration-300`}>
                <div className={`flex-shrink-0 h-11 w-11 rounded-xl ${c.bg} flex items-center justify-center`}>
                  <Icon className={`h-5 w-5 ${c.text}`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{card.title}</h3>
                  <p className="text-green-100/65 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};
