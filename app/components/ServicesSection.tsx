"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  Users,
  GraduationCap,
  Briefcase,
  Globe,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

type Props = { full?: boolean };

// ── Teaser service cards data ──────────────────────────────────────────────
const teaserServices = [
  {
    icon: Brain,
    title: "Individual Therapy",
    desc: "Private therapy for anxiety, depression, trauma, and self-growth.",
    color: "emerald",
  },
  {
    icon: Users,
    title: "Family & Relationship",
    desc: "Guided support for couples, parents, and family dynamics.",
    color: "teal",
  },
  {
    icon: Globe,
    title: "Online Counseling",
    desc: "Flexible virtual sessions for your comfort and convenience.",
    color: "cyan",
  },
];

const teaserAccent: Record<string, { icon: string; badge: string; border: string }> = {
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    badge: "text-emerald-700",
    border: "border-emerald-100 hover:border-emerald-300",
  },
  teal: {
    icon: "bg-teal-100 text-teal-700",
    badge: "text-teal-700",
    border: "border-teal-100 hover:border-teal-300",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-700",
    badge: "text-cyan-700",
    border: "border-cyan-100 hover:border-cyan-300",
  },
};

// ── Full service cards data ────────────────────────────────────────────────
const fullServices = [
  {
    icon: Brain,
    title: "Individual Therapy",
    imageSrc: "/therapy-room-plants.jpg",
    imageAlt: "Therapy room with plants and warm natural light",
    accent: "emerald" as const,
    intro: "A confidential space to talk openly and heal at your own pace.",
    points: [
      "Anxiety and depression",
      "Trauma and grief",
      "Relationship or work stress",
      "Life transitions and burnout",
    ],
    close: "Goal: understand your emotions, build skills, and find lasting peace.",
  },
  {
    icon: Users,
    title: "Family & Relationship Counseling",
    imageSrc: "/contact-office-welcome.jpg",
    imageAlt: "Welcoming counseling office for family sessions",
    accent: "teal" as const,
    intro: "Relationships shape our wellbeing. We help rebuild communication and trust.",
    points: [
      "Couples and marriage support",
      "Parenting and co-parenting",
      "Family conflict resolution",
    ],
    close: "A welcoming, non-judgmental space for every family dynamic.",
  },
  {
    icon: GraduationCap,
    title: "Youth & Student Support",
    imageSrc: "/doctor.jpg",
    imageAlt: "Young person in a bright consultation room with a therapist",
    accent: "emerald" as const,
    intro: "Young people face unique pressures. We help them grow through them.",
    points: [
      "Academic stress and pressure",
      "Resilience and self-esteem",
      "Healthy relationships",
    ],
    close: "Guided by empathy, structure, and real empowerment.",
  },
  {
    icon: Briefcase,
    title: "Workplace & Community Wellness",
    imageSrc: "/service-anxiety-relax.jpg",
    imageAlt: "Group wellness workshop in a calm space",
    accent: "teal" as const,
    intro: "Mental health drives performance. We bring wellness into your organisation.",
    points: [
      "Stress management workshops",
      "Emotional intelligence training",
      "Burnout prevention",
      "Team resilience programmes",
    ],
    close: "Tailored for organisations, schools, and community groups.",
  },
  {
    icon: Globe,
    title: "Online Counseling",
    imageSrc: "/therapy-room-plants.jpg",
    imageAlt: "Laptop ready for a virtual counseling session",
    accent: "emerald" as const,
    intro: "Flexible, secure virtual sessions by phone or video — from anywhere.",
    points: [
      "Phone and video sessions",
      "Same confidential standards",
      "Flexible scheduling",
    ],
    close: "The same compassionate care, from the comfort of your own space.",
  },
  {
    icon: Heart,
    title: "Psychological First Aid & Outreach",
    imageSrc: "/hero-nature-sunset.jpg",
    imageAlt: "Calm nature scene representing community recovery",
    accent: "teal" as const,
    intro: "We go beyond the clinic into communities and crisis response.",
    points: [
      "Crisis intervention support",
      "Community mental health outreach",
      "Schools and NGO partnerships",
    ],
    close: "Ensuring care reaches those who need it most.",
  },
];

const fullAccent = {
  emerald: {
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    dot: "text-emerald-500",
    glow: "bg-emerald-50",
  },
  teal: {
    badge: "bg-teal-100 text-teal-800 border-teal-200",
    dot: "text-teal-500",
    glow: "bg-teal-50",
  },
};

// ── ServiceCard (full page) ────────────────────────────────────────────────
const ServiceCard = ({
  icon: Icon,
  title,
  imageSrc,
  imageAlt,
  accent,
  intro,
  points,
  close,
  reverse = false,
  index = 0,
}: (typeof fullServices)[0] & { reverse?: boolean; index?: number }) => {
  const a = fullAccent[accent];

  const photo = (
    <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[300px] md:min-h-[380px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        quality={85}
        style={{ objectPosition: "center center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );

  const content = (
    <div className="flex flex-col justify-center space-y-5 py-2">
      <div>
        <span
          className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] font-semibold px-3 py-1.5 rounded-full border ${a.badge} mb-4`}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
          {title}
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
          {title}
        </h2>
      </div>
      <p className="text-gray-700 leading-relaxed">{intro}</p>
      <ul className="space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2.5">
            <CheckCircle2
              className={`h-5 w-5 flex-shrink-0 mt-0.5 ${a.dot}`}
              aria-hidden="true"
            />
            <span className="text-gray-700 text-sm leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm font-semibold text-gray-800 leading-relaxed">{close}</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.6, ease: "easeOut" }}
      className="group grid md:grid-cols-2 gap-8 xl:gap-12 items-center"
    >
      {reverse ? (
        <>
          {content}
          {photo}
        </>
      ) : (
        <>
          {photo}
          {content}
        </>
      )}
    </motion.div>
  );
};

// ── Teaser (homepage) ──────────────────────────────────────────────────────
const ServicesTeaser = () => (
  <section
    aria-label="Our core services"
    className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50"
  >
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-emerald-600 font-semibold mb-3">
          What we offer
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Our Core Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Individual · Family · Youth · Workplace · Online
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-6 lg:grid-cols-3 mb-12">
        {teaserServices.map((svc, i) => {
          const a = teaserAccent[svc.color];
          const Icon = svc.icon;
          return (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`rounded-2xl border bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${a.border}`}
            >
              <div
                className={`inline-flex items-center justify-center h-12 w-12 rounded-xl mb-5 ${a.icon}`}
              >
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${a.badge}`}>{svc.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
        >
          See All Services
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

// ── Full Services Page ─────────────────────────────────────────────────────
const ServicesFull = () => (
  <section
    id="services"
    aria-label="All services — U4U Wellness Center"
    className="py-20 bg-white"
  >
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">

      {/* Hero banner */}
      <div className="relative h-64 md:h-80 lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl mb-16">
        <Image
          src="/service-anxiety-relax.jpg"
          alt="Peaceful wellness scene symbolising healing and calm"
          fill
          className="object-cover"
          style={{ objectPosition: "center center" }}
          priority
          quality={88}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center pb-10 px-6">
          <div className="text-center text-white max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300 font-semibold mb-3">
              Support for every step of your healing journey
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
              Our Services
            </h1>
            <p className="text-lg text-slate-200/90">
              Compassionate, evidence-based support tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Section intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center pb-8"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Discover How We Can Support You
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Every service is designed to meet you where you are — with care, confidentiality,
          and cultural understanding.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="flex items-center gap-4 pb-4">
        <div className="h-px flex-1 bg-gray-100" />
        <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium">
          What we offer
        </span>
        <div className="h-px flex-1 bg-gray-100" />
      </div>

      {/* Service cards — alternating layout */}
      <div className="space-y-20 pt-4">
        {fullServices.map((svc, i) => (
          <ServiceCard key={svc.title} {...svc} reverse={i % 2 !== 0} index={i} />
        ))}
      </div>

      {/* Closing CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="mt-20 text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100"
      >
        <p className="text-2xl md:text-3xl font-extrabold text-green-900 mb-3">
          Ready to take the first step?
        </p>
        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
          Book a free consultation today — no commitment, just a conversation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
        >
          Book a Session
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </motion.div>
    </div>
  </section>
);

// ── Export ─────────────────────────────────────────────────────────────────
export default function ServicesSection({ full = false }: Props) {
  if (!full) return <ServicesTeaser />;
  return <ServicesFull />;
}
