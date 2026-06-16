"use client";
import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  { name: "Jane K.", role: "Teacher, Nakuru", initial: "J", color: "bg-emerald-600", rating: 5, text: "Sharon helped me through the toughest year of my life. The sessions were gentle and practical, and I finally feel like I have tools to manage my anxiety." },
  { name: "David M.", role: "Father & Business Owner", initial: "D", color: "bg-teal-600", rating: 5, text: "The youth program gave my son confidence and better communication skills. The team checked in with us every step of the way and made us feel supported." },
  { name: "Maria S.", role: "University Student", initial: "M", color: "bg-cyan-600", rating: 5, text: "I felt heard and supported every step of the way. The counselors helped me build resilience during an extremely stressful term." },
  { name: "Lilian A.", role: "Nurse, Eldoret", initial: "L", color: "bg-emerald-700", rating: 5, text: "U4U helped me restore balance after a difficult season. The practical tools were gentle, effective, and rooted in respect." },
  { name: "Samuel T.", role: "Community Leader", initial: "S", color: "bg-teal-700", rating: 5, text: "The counseling experience was professional and compassionate. I now feel more confident in my decisions and relationships." },
  { name: "Selina W.", role: "Social Worker", initial: "S", color: "bg-green-700", rating: 5, text: "The strategy sessions were empowering and clear. I left each appointment with a stronger sense of direction and emotional stability." },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => setCurrent((c) => (c + 1) % items.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + items.length) % items.length), []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const visibleCount = 3;
  const visibleItems = Array.from({ length: visibleCount }, (_, i) => items[(current + i) % items.length]);

  return (
    <section
      aria-label="Client testimonials"
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900" />
        <div className="absolute inset-0 opacity-10">
          {/* Decorative pattern */}
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
          }} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.32em] text-emerald-300/80 font-semibold mb-3">
            Real client experiences
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 bg-emerald-400 mx-auto rounded-full mb-6" />
          <p className="text-base text-green-100/60 max-w-xl mx-auto">
            Real stories from people who took the first step toward healing.
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10">
          {visibleItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className={`relative bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-7 transition-all duration-500 ${idx === 0 ? "ring-2 ring-emerald-400/40 bg-white/15" : ""}`}
            >
              <Quote className="h-8 w-8 text-emerald-400/40 mb-4" aria-hidden="true" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-green-100/85 text-sm md:text-base leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className={`h-11 w-11 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-lg`}>
                  {item.initial}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.name}</p>
                  <p className="text-green-100/55 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden mb-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-7">
            <Quote className="h-8 w-8 text-emerald-400/40 mb-4" aria-hidden="true" />
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: items[current].rating }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <p className="text-green-100/85 text-base leading-relaxed mb-6 italic">
              &ldquo;{items[current].text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className={`h-11 w-11 rounded-full ${items[current].color} flex items-center justify-center text-white font-bold text-base flex-shrink-0`}>
                {items[current].initial}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{items[current].name}</p>
                <p className="text-green-100/55 text-xs">{items[current].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => { prev(); setIsAutoPlaying(false); }}
            className="h-11 w-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2.5 bg-emerald-400" : "w-2.5 h-2.5 bg-white/25 hover:bg-white/40"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => { next(); setIsAutoPlaying(false); }}
            className="h-11 w-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Trust note */}
        <p className="text-center text-xs text-green-100/35 mt-8 tracking-wide">
          All testimonials are from real clients. Names used with permission.
        </p>
      </div>
    </section>
  );
};
