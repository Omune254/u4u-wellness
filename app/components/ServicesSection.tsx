// app/components/ServicesSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Users,
  GraduationCap,
  Briefcase,
  Globe,
  Heart,
} from "lucide-react";
import Link from "next/link";

type Props = { full?: boolean };

// ── Animation Config ──
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5, ease: "easeOut" }, // still valid string!
});

const fadeUpVariants = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
});

// ── Reusable Wrappers ──
const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="container mx-auto px-4">{children}</div>
);

const ServiceCard = ({
  icon: Icon,
  title,
  children,
  reverse = false,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
  delay?: number;
}) => (
  <motion.div
    // Spread only the safe props
    initial={fadeUpVariants(delay).initial}
    whileInView={fadeUpVariants(delay).whileInView}
    viewport={fadeUpVariants(delay).viewport}
    // Pass transition separately → fixes the type error
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
    className="grid md:grid-cols-2 gap-8 items-center"
  >
    {/* Text First on Mobile */}
    <div className={reverse ? "md:order-2" : ""}>
      <h3 className="text-2xl font-semibold text-green-700 flex items-center gap-2 mb-3">
        <Icon className="w-7 h-7" aria-hidden="true" />
        <span>{title}</span>
      </h3>
      <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
    </div>

    {/* Placeholder Image */}
    <div
      className={`bg-gradient-to-br from-green-50 to-teal-50 h-56 rounded-xl flex items-center justify-center ${
        reverse ? "md:order-1" : ""
      }`}
    >
      <Icon className="w-20 h-20 text-green-600 opacity-30" aria-hidden="true" />
    </div>
  </motion.div>
);

export default function ServicesSection({ full = false }: Props) {
  if (!full) {
    return (
      <section className="py-16 bg-green-50">
        <SectionWrapper>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Core Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Individual • Family • Youth • Workplace • Online
            </p>
          </div>
        </SectionWrapper>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-white">
      <SectionWrapper>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800"
        >
          Our Services
        </motion.h1>

        <div className="max-w-5xl mx-auto space-y-20">
          <ServiceCard icon={Brain} title="Individual Therapy" delay={0.1}>
            <p>A confidential space to talk openly and heal. We help with:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Anxiety and depression</li>
              <li>Trauma and grief</li>
              <li>Relationship or work stress</li>
              <li>Life transitions and burnout</li>
            </ul>
            <p className="mt-3">Goal: understand emotions, build skills, find peace.</p>
          </ServiceCard>

          <ServiceCard icon={Users} title="Family and Relationship Counseling" reverse delay={0.2}>
            <p>Relationships shape well-being. We improve communication and rebuild bonds.</p>
            <p className="mt-3">Support for couples, parents, and families — safe and non-judgmental.</p>
          </ServiceCard>

          <ServiceCard icon={GraduationCap} title="Youth and Student Support" delay={0.3}>
            <p>Young people face unique challenges. We help them:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Manage stress and pressure</li>
              <li>Build resilience and self-esteem</li>
              <li>Develop healthy relationships</li>
            </ul>
            <p className="mt-3">Guided by empathy and empowerment.</p>
          </ServiceCard>

          <ServiceCard icon={Briefcase} title="Workplace & Community Wellness" reverse delay={0.4}>
            <p>Mental health drives performance. We deliver workshops on:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Stress management</li>
              <li>Emotional intelligence</li>
              <li>Burnout prevention</li>
              <li>Team resilience</li>
            </ul>
            <p className="mt-3">Tailored for organizations and communities.</p>
          </ServiceCard>

          <ServiceCard icon={Globe} title="Online Counseling" delay={0.5}>
            <p>Flexible, secure virtual sessions via phone or video.</p>
            <p className="mt-3">Same compassionate care — from your own space.</p>
          </ServiceCard>

          <ServiceCard icon={Heart} title="Psychological First Aid & Outreach" reverse delay={0.6}>
            <p>We go beyond therapy — into communities and crisis response.</p>
            <p className="mt-3">Ensuring care reaches those who need it most.</p>
          </ServiceCard>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block">
            Book a Session
          </Link>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}