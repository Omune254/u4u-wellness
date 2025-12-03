// app/components/BenefitsGrid.tsx
import { Shield, Heart, Users, Clock } from "lucide-react";

export const BenefitsGrid = () => {
  const benefits = [
    { icon: Shield, title: "Confidential & Safe", desc: "Your privacy is our priority." },
    { icon: Heart, title: "Compassionate Care", desc: "You’re seen, heard, and valued." },
    { icon: Users, title: "Expert Guidance", desc: "Evidence-based therapy by a registered psychologist." },
    { icon: Clock, title: "Flexible Sessions", desc: "In-person or online — your choice." },
  ];

  return (
    <section className="section-py bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
          Why Choose U4U?
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="glass-card text-center p-6">
              <b.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};