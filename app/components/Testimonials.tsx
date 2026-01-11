// app/components/Testimonials.tsx
import { Quote } from "lucide-react";
import Image from "next/image";

export const Testimonials = () => {
  const items = [
    { name: "Jane K.", text: "Sharon helped me through the toughest year of my life." },
    { name: "David M.", text: "The youth program gave my son confidence." },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image - Soft and calming */}
      <div className="absolute inset-0">
        <Image
          src="/testimonial-background-soft.jpg"  // ← Your image here (in public/ folder)
          alt="Soft calming background for client testimonials"
          fill
          className="object-cover brightness-75"
          quality={85}
        />
        {/* Gentle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content on top */}
      <div className="relative container mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Client Stories
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((t, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/30 transition-all hover:shadow-2xl"
            >
              <Quote className="w-12 h-12 text-green-600 mx-auto mb-6 opacity-40" />
              <p className="italic text-gray-800 text-lg mb-6 leading-relaxed">
                “{t.text}”
              </p>
              <p className="font-semibold text-green-800 text-right">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};