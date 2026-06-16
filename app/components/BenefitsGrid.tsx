import { Shield, Heart, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Confidential & Safe",
    desc: "Every session is held in a secure, private space where your story stays with us.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    tag: "Your privacy, always",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    desc: "Our team listens deeply and responds with warmth, respect, and gentle guidance.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    tag: "No judgement, ever",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    desc: "Led by registered and licensed mental health professionals using evidence-based practices.",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    tag: "Registered & licensed professionals",
  },
  {
    icon: Clock,
    title: "Flexible Sessions",
    desc: "Book online or in-person, with appointment times that fit your life.",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    tag: "Online & in-person",
  },
];

export const BenefitsGrid = () => (
  <section
    aria-label="Why choose U4U Wellness Center"
    className="py-20 bg-gradient-to-b from-white to-emerald-50/40"
  >
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.32em] text-emerald-600 font-semibold mb-3">
          Our commitment to you
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Why Choose <span className="text-emerald-600">U4U</span>?
        </h2>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="group relative flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-7 shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Top row: icon + tag */}
              <div className="flex items-center justify-between">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${b.iconBg} ${b.iconColor}`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold text-gray-400 tracking-wide">
                  {b.tag}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>

              {/* Subtle bottom accent line on hover */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full ${b.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
