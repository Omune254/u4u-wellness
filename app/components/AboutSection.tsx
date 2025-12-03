// app/components/AboutSection.tsx
import Image from "next/image";

const AboutTeaser = () => (
  <section className="py-16 bg-gray-50 text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-4">
        About U4U
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        A compassionate space dedicated to mental wellness, personal growth, and emotional healing.
      </p>
    </div>
  </section>
);

export const AboutSection = ({ full = false }: { full?: boolean }) => {
  if (!full) return <AboutTeaser />;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-12">
          About U4U Wellness Center
        </h1>

        <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700">
          <p>
            Welcome to U4U Wellness Center, a compassionate space dedicated to mental wellness, personal growth, and emotional healing.
          </p>
          <p>
            We believe that everyone deserves a place where they can be heard, understood, and supported without judgment.
          </p>
          <p>
            At U4U, we provide professional psychological care grounded in empathy, confidentiality, and cultural understanding.
          </p>
          <p>
            Our focus is on helping individuals, families, and communities navigate life’s challenges — from stress, trauma, and grief to everyday emotional struggles — with warmth and guidance.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="/sharon.jpg" alt="Sharon Muchemi" width={500} height={500} className="rounded-xl shadow-lg" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-800">About Sharon Muchemi</h2>
            <p>
              I’m <strong>Sharon Muchemi</strong>, a Registered Psychologist with the Kenya Counsellors and Psychologists (C&P) Board.
            </p>
            <p>
              I founded U4U Wellness Center out of a deep belief that healing begins with connection — when people feel truly seen and supported.
            </p>
            <p>
              Over the years, I’ve worked with individuals from all walks of life — in hospitals, schools, and community settings — helping them manage anxiety, depression, trauma, and other emotional challenges.
            </p>
            <p>
              My approach blends <strong>Cognitive Behavioral Therapy (CBT)</strong>, <strong>Psychoeducation</strong>, and <strong>Trauma-Informed Care</strong>.
            </p>
          </div>
        </div>

        {/* Add more sections as needed */}
      </div>
    </section>
  );
};