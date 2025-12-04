// components/StatsSection.tsx
export const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Clients Supported" },
    { number: "2+", label: "Years of Experience" },
    { number: "50+", label: "Community Talks & Workshops" },
    { number: "100%", label: "Confidential & Safe" },
  ];

  return (
    <section className="bg-green-50 section-py">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="space-y-3">
              <div className="text-4xl md:text-5xl font-bold text-green-700">
                {s.number}
              </div>
              <div className="text-sm md:text-base text-gray-700 font-medium leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};