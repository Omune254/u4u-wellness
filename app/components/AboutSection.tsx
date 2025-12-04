// app/components/AboutSection.tsx
import Image from "next/image";

const AboutTeaser = () => (
  <section className="py-16 bg-gray-50 text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-4">
        About U4U Wellness Center
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

        <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700 text-center mb-16">
          <p>
            Welcome to U4U Wellness Center, your safe space for healing, growth, and emotional well-being.
          </p>
          <p>
            We believe that everyone deserves to feel heard, understood, and supported without judgment.
          </p>
          <p>
            Founded by two passionate licensed psychologists, U4U is built on empathy, confidentiality, and culturally sensitive care.
          </p>
        </div>

        {/* Directors Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Sharon Muchemi */}
          <div className="order-2 md:order-1 text-center md:text-left space-y-6">
            <h2 className="text-3xl font-bold text-green-800">Sharon Muchemi</h2>
            <p className="text-xl font-medium text-green-700">Founder & CEO</p>
            <p className="text-gray-700">
              A Registered Psychologist with the Kenya Counsellors and Psychologists (C&P) Board.
            </p>
            <p className="text-gray-700">
              Driven by a deep belief that healing begins with genuine connection, Sharon founded U4U Wellness Center 
              to create a space where individuals, families, and communities can find support through life’s challenges.
            </p>
            <p className="text-gray-700">
              Her approach combines evidence-based methods including Cognitive Behavioral Therapy (CBT), Psychoeducation, 
              and Trauma-Informed Care delivered with warmth and cultural understanding.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-8 border-green-600">
              <Image
                src="/sharon.jpg"
                alt="Sharon Muchemi – Founder & CEO, U4U Wellness Center"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Wanjiku Ngugi */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-8 border-teal-600">
            <Image
              src="/wanjiru.jpg"
              alt="Wanjiku Ngugi – Co-Founder, U4U Wellness Center"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold text-teal-800">Wanjiku Ngugi</h2>
            <p className="text-xl font-medium text-teal-700">Co-Founder</p>
            <p className="text-gray-700">
              I am a licensed psychologist and Co-Founder of U4U Wellness Center, whose journey began long before my formal training.
            </p>
            <p className="text-gray-700">
              For nearly two years, I’ve helped individuals navigate anxiety, self-esteem issues, life transitions, and emotional overwhelm 
              in schools, hospitals, and community settings.
            </p>
            <p className="text-gray-700">
              My approach blends empathetic counseling with evidence-based techniques like CBT, Psychoeducation, and Trauma-Informed Care.
            </p>

            <div className="mt-8 bg-teal-50 p-6 rounded-xl">
              <h3 className="font-bold text-teal-800 mb-3">What I Offer</h3>
              <p className="font-medium">Mental Health Counseling</p>
              <p className="text-sm text-gray-700 mb-3">
                Support for anxiety, stress, self-esteem, emotional regulation, and life transitions.
              </p>
              <p className="font-medium">Professional Mentorship</p>
              <p className="text-sm text-gray-700">
                Guidance for overcoming imposter syndrome, improving communication, gaining career clarity, and building confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center max-w-4xl mx-auto">
          <p className="text-2xl font-semibold text-green-800">
            You are not alone. Your healing journey starts here with U4U.
          </p>
        </div>
      </div>
    </section>
  );
};