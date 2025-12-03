"use client";
import React from "react";
import { Phone, Mail, Clock } from "lucide-react";
export const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to schedule an appointment? Reach out to us
            using the form below or contact us directly.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your phone"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Tell us how we can help you"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-teal-600 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-teal-600 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">contact@Sharons_therapy.com</p>
                  </div>
                </div>
                {/* TODO: to be included once there is an office  */}
                {/* <div className="flex items-start">
                  <MapPin className="text-teal-600 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Office Location
                    </h4>
                    <p className="text-gray-600">
                      123 Healing Street, Suite 101
                      <br />
                      Wellness City, WC 12345
                    </p>
                  </div>
                </div> */}
                <div className="flex items-start">
                  <Clock className="text-teal-600 mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">Working Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 7pm
                      <br />
                      Saturday: 10am - 3pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-2">
                  Emergency Support
                </h4>
                <p className="text-gray-600 mb-4">
                  If you are experiencing a mental health emergency, please call
                  the 24/7 Crisis Hotline at{" "}
                  <span className="font-medium">1-800-273-8255</span> or text
                  HOME to 741741.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
