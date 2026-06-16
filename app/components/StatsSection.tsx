"use client";
import { useEffect, useRef, useState } from "react";
import { Users, Calendar, Mic, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Users, value: 200, suffix: "+", label: "Clients Supported", desc: "Lives touched across Kenya", color: "emerald" },
  { icon: Calendar, value: 2023, suffix: "", label: "Founded", desc: "Serving Nakuru since 2023", color: "teal" },
  { icon: Mic, value: 50, suffix: "+", label: "Talks & Workshops", desc: "Community outreach events", color: "cyan" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Confidential", desc: "Every session, always private", color: "emerald" },
];

const colorMap: Record<string, { bg: string; text: string; ring: string; glow: string }> = {
  emerald: { bg: "bg-emerald-500/15", text: "text-emerald-300", ring: "ring-emerald-400/20", glow: "shadow-emerald-500/10" },
  teal: { bg: "bg-teal-500/15", text: "text-teal-300", ring: "ring-teal-400/20", glow: "shadow-teal-500/10" },
  cyan: { bg: "bg-cyan-500/15", text: "text-cyan-300", ring: "ring-cyan-400/20", glow: "shadow-cyan-500/10" },
};

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 1800;
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.round(easeOut(progress) * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export const StatsSection = () => (
  <section
    aria-label="U4U Wellness Center impact statistics"
    className="relative py-20 overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950" />
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
    </div>

    <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.32em] text-emerald-300/70 font-semibold mb-3">Trusted care</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Impact That <span className="text-emerald-300">Matters</span>
        </h2>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const c = colorMap[stat.color];
          return (
            <div
              key={stat.label}
              className={`relative group flex flex-col items-center text-center p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm ring-1 ${c.ring} hover:bg-white/10 transition-all duration-300 shadow-xl ${c.glow}`}
            >
              {/* Icon */}
              <div className={`h-14 w-14 rounded-2xl ${c.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`h-7 w-7 ${c.text}`} aria-hidden="true" />
              </div>
              {/* Number */}
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2 tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              {/* Label */}
              <p className="text-white font-semibold text-sm md:text-base mb-1">{stat.label}</p>
              <p className="text-green-100/45 text-xs leading-snug">{stat.desc}</p>
              {/* Decorative line */}
              <div className={`absolute bottom-0 left-1/4 right-1/4 h-0.5 ${c.bg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
