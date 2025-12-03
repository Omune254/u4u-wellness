// components/Testimonials.tsx
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const items = [
    { name: "Jane K.", text: "Sharon helped me through the toughest year of my life." },
    { name: "David M.", text: "The youth program gave my son confidence." },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
          Client Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md border border-green-100">
              <Quote className="w-12 h-12 text-green-600 mx-auto mb-6 mb-6 opacity-20" />
              <p className="italic text-gray-700 text-lg mb-6 leading-relaxed">
                “{t.text}”
              </p>
              <p className="font-semibold text-green-700 text-right">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};