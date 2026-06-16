"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Heart, Users, Sparkles } from "lucide-react";

// ─── Teaser (homepage snippet) ───────────────────────────────────────────────

const AboutTeaser = () => (
  <section
    aria-label="About U4U Wellness Center"
    className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_480px] items-center">

        {/* Left: copy */}
        <div className="space-y-6 max-w-xl">
          <p className="text-xs uppercase tracking-[0.32em] text-emerald-700/80 font-semibold">
            Our story
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 leading-tight">
            About{" "}
            <span className="text-emerald-600">U4U</span>{" "}
            Wellness Center
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A compassionate space dedicated to mental wellness, personal growth,
            and emotional healing — rooted in Nakuru, built for Kenya.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Meet the therapists and founders who blend clinical expertise with
            warmth and local understanding to support your journey.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
          >
            Learn About Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Right: team photo */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-green-100">
          <div className="relative h-80 md:h-[420px] w-full">
            <Image
              src="/talks.jpeg"
              alt="U4U Wellness team in a session"
              fill
              className="object-cover"
              style={{ objectPosition: "center center" }}
              quality={88}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-5 left-5 right-5">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-sm border border-emerald-100 shadow-lg px-4 py-3">
              <ShieldCheck className="h-5 w-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-semibold text-green-900">
                Registered and licensed · Kenya Counsellors & Psychologists Board
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Founder card ─────────────────────────────────────────────────────────────

type FounderProps = {
  name: string;
  title: string;
  photo: string;
  alt: string;
  accent: "emerald" | "teal";
  bio: string[];
  offerTitle?: string;
  offers?: { label: string; desc: string }[];
  flip?: boolean;
};

const accentStyles = {
  emerald: {
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    heading: "text-emerald-800",
    subheading: "text-emerald-600",
    ring: "ring-emerald-500/30",
    offerBg: "bg-emerald-50 border-emerald-100",
    offerTitle: "text-emerald-800",
    dot: "bg-emerald-500",
  },
  teal: {
    badge: "bg-teal-100 text-teal-800 border-teal-200",
    heading: "text-teal-800",
    subheading: "text-teal-600",
    ring: "ring-teal-500/30",
    offerBg: "bg-teal-50 border-teal-100",
    offerTitle: "text-teal-800",
    dot: "bg-teal-500",
  },
};

const FounderCard = ({
  name,
  title,
  photo,
  alt,
  accent,
  bio,
  offerTitle,
  offers,
  flip = false,
}: FounderProps) => {
  const s = accentStyles[accent];

  const photoCol = (
    <div className="flex items-start justify-center lg:justify-start">
      <div className="relative w-full max-w-sm">
        {/* Soft glow */}
        <div
          className={`absolute -inset-3 rounded-3xl ${
            accent === "emerald" ? "bg-emerald-100" : "bg-teal-100"
          } blur-2xl opacity-60 pointer-events-none`}
        />
        {/* Portrait card */}
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl ring-4 ${s.ring} bg-white`}
          style={{ aspectRatio: "3/4" }}
        >
          <Image
            src={photo}
            alt={alt}
            fill
            className="object-cover"
            style={{ objectPosition: "center top" }}
            quality={90}
            priority
          />
          {/* Name overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-white font-extrabold text-lg leading-tight">{name}</p>
            <p
              className={`text-sm font-medium mt-0.5 ${
                accent === "emerald" ? "text-emerald-300" : "text-teal-300"
              }`}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const textCol = (
    <div className="space-y-5">
      <div>
        <span
          className={`inline-block text-xs uppercase tracking-[0.28em] font-semibold px-3 py-1 rounded-full border ${s.badge} mb-4`}
        >
          {title}
        </span>
        <h2 className={`text-3xl md:text-4xl font-extrabold ${s.heading} leading-tight`}>
          {name}
        </h2>
      </div>

      <div className="space-y-3">
        {bio.map((para, i) => (
          <p key={i} className="text-gray-700 leading-relaxed text-base md:text-lg">
            {para}
          </p>
        ))}
      </div>

      {offers && offerTitle && (
        <div className={`rounded-2xl border ${s.offerBg} p-5 space-y-4`}>
          <h3 className={`font-bold text-base ${s.offerTitle}`}>{offerTitle}</h3>
          {offers.map((o) => (
            <div key={o.label} className="flex items-start gap-3">
              <span className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${s.dot}`} />
              <div>
                <p className="font-semibold text-gray-800 text-sm">{o.label}</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-0.5">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-10 xl:gap-16 items-start">
      {flip ? (
        <>
          {textCol}
          {photoCol}
        </>
      ) : (
        <>
          {photoCol}
          {textCol}
        </>
      )}
    </div>
  );
};

// ─── Full About page ──────────────────────────────────────────────────────────

const AboutFull = () => (
  <section
    id="about"
    aria-label="About U4U Wellness Center — full"
    className="py-20 bg-white"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-xs uppercase tracking-[0.32em] text-emerald-600 font-semibold">
          Who we are
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight">
          About{" "}
          <span className="text-emerald-600">U4U</span>{" "}
          Wellness Center
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Community-focused mental wellness, rooted in Nakuru — built for Kenya.
        </p>
      </div>

      {/* Mission block */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-[420px] w-full">
            <Image
              src="/therapy-room-plants.jpg"
              alt="Calm therapy room with plants and soft natural light"
              fill
              className="object-cover"
              style={{ objectPosition: "center center" }}
              quality={88}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent" />
          </div>
        </div>

        <div className="space-y-5 text-gray-700">
          <p className="text-lg leading-relaxed">
            U4U Wellness Center is a community-focused mental wellness organization
            dedicated to supporting individuals, families, and groups through
            accessible, confidential, and culturally sensitive mental-health services.
          </p>
          <p className="text-lg font-semibold text-green-800 leading-relaxed">
            Our core belief: when you heal, the people around you benefit.
          </p>
          <p className="text-base leading-relaxed">
            The first "U" represents you — the individual. The second "U" represents
            the community connected to you. Every step toward emotional wellness
            creates a positive ripple effect in your relationships and beyond.
          </p>
          <p className="text-base leading-relaxed">
            From individual therapy and family support to stress management, trauma
            care, and youth guidance — our goal is to make emotional support
            available, affordable, and stigma-free.
          </p>

          {/* Value pillars */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: ShieldCheck, label: "Confidential" },
              { icon: Heart, label: "Compassionate" },
              { icon: Sparkles, label: "Evidence-Based" },
              { icon: Users, label: "Community-First" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3"
              >
                <Icon className="h-5 w-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-emerald-900">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-100" />
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium">
          Meet the founders
        </p>
        <div className="h-px flex-1 bg-gray-100" />
      </div>

      {/* Sharon */}
      <FounderCard
        name="Sharon Muchemi"
        title="Founder & CEO"
        photo="/sharon.jpg"
        alt="Sharon Muchemi – Founder & CEO of U4U Wellness Center"
        accent="emerald"
        flip={false}
        bio={[
          "A Registered Psychologist with the Kenya Counsellors and Psychologists Board, Sharon created U4U Wellness Center from a deep belief that healing begins with genuine human connection.",
          "Her approach combines evidence-based methods — including Cognitive Behavioral Therapy (CBT), psychoeducation, and trauma-informed care — delivered with warmth and cultural understanding.",
          "Sharon's mission is to make compassionate psychological care accessible to individuals, families, and communities across Kenya.",
        ]}
      />

      {/* Wanjiku */}
      <FounderCard
        name="Wanjiku Ngugi"
        title="Co-Founder"
        photo="/wanjiru.jpg"
        alt="Wanjiku Ngugi – Co-Founder of U4U Wellness Center"
        accent="teal"
        flip={true}
        bio={[
          "A licensed psychologist with hands-on experience supporting youth, families, and community groups, Wanjiku brings empathy and practical tools to every session.",
          "Her caring, evidence-based practice helps clients manage anxiety, build self-worth, and navigate life transitions with confidence.",
          "She blends empathetic counseling with techniques that promote long-term resilience and emotional wellbeing.",
        ]}
        offerTitle="What Wanjiku offers"
        offers={[
          {
            label: "Mental Health Counseling",
            desc: "Support for anxiety, stress, self-esteem, emotional regulation, and life transitions.",
          },
          {
            label: "Professional Mentorship",
            desc: "Guidance for overcoming imposter syndrome, improving communication, and building confidence.",
          },
        ]}
      />

      {/* Closing CTA */}
      <div className="text-center py-10 px-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
        <p className="text-2xl md:text-3xl font-extrabold text-green-900 mb-4">
          You are not alone.
        </p>
        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
          Your healing journey starts here with U4U.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
        >
          Book a Session Today
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

// ─── Export ───────────────────────────────────────────────────────────────────

export const AboutSection = ({ full = false }: { full?: boolean }) => {
  if (!full) return <AboutTeaser />;
  return <AboutFull />;
};
