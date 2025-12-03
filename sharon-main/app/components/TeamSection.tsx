"use client";
import React from "react";
import Image from "next/image";

function TeamSection() {
  return (
    <section id="team" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              About Dr. Sharon
            </h2>
            <p className="text-gray-700 mb-4">
              With over 3 years of experience, I specialize in helping
              individuals navigate through life&apos;s challenges and discover
              their path to emotional well-being. As a licensed therapist with a
              doctorate in Clinical Psychology, I believe in a personalized
              approach that honors your unique story.ooh i do got a cute guy
              love that nigga so bad
            </p>
            <p className="text-gray-700 mb-4">
              My therapeutic approach combines evidence-based techniques with
              compassion and understanding. I create a safe, non-judgmental
              space where you can explore your thoughts and feelings freely.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="font-bold text-teal-600 mb-1">Education</div>
                <div className="text-gray-600">
                  Ph.D. Clinical Psychology, Moi University
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="font-bold text-teal-600 mb-1">License</div>
                <div className="text-gray-600">
                  Licensed Psychologist #LP12345
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="font-bold text-teal-600 mb-1">Experience</div>
                <div className="text-gray-600">
                  3+ Years of Clinical Practice
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="font-bold text-teal-600 mb-1">Approach</div>
                <div className="text-gray-600">
                  Cognitive Behavioral Therapy, Mindfulness
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/queen.jpg"
              alt="Dr. Sharon, Licensed Therapist"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
