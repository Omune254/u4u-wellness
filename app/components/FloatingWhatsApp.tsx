// components/FloatingWhatsApp.tsx
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/254759795304?text=Hi%20Sharon,%20I'd%20like%20to%20book%20a%20session"
    target="_blank"
    className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
  >
    <MessageCircle className="w-8 h-8" />
  </a>
);