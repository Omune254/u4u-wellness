// app/components/Footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-green-800 to-green-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">U4U</span>
            </Link>
            <p className="text-green-100 text-sm max-w-xs">
              Your safe space for healing, growth, and emotional wellness.
            </p>
            <p className="text-xs text-green-200">
              Registered with Kenya Counsellors & Psychologists Board
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-green-300 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-300 transition">About</Link></li>
              <li><Link href="/services" className="hover:text-green-300 transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-green-300 transition">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-green-300 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-300" />
                <a href="tel:+254759795304" className="hover:text-green-300">+254 700 000 000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-300" />
                <a href="mailto:contact@myspacecare.com" className="hover:text-green-300">psychologist.sharonmuchemi@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-300 mt-0.5" />
                <span>Nakuru, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-300" />
                <span>Mon–Fri: 8AM–5PM</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Begin Your Journey</h3>
            <p className="text-sm text-green-100 mb-4">
              Take the first step toward emotional wellness today.
            </p>
            <a
              href="https://wa.me/254700000000?text=Hi%20Sharon,%20I'd%20like%20to%20book%20a%20session"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-green-800 px-5 py-3 rounded-full font-medium hover:bg-green-50 transition shadow-lg"
            >
              <Heart className="w-5 h-5" />
              Book a Session
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-700 text-center text-sm text-green-200">
          <p>
            © {currentYear} U4U Wellness Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};