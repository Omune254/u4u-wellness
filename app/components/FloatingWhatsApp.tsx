"use client";
import { useState, useEffect } from "react";

export const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const tooltipTimer = setTimeout(() => setTooltip(false), 6000);
    return () => { clearTimeout(timer); clearTimeout(tooltipTimer); };
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      {/* Tooltip */}
      {tooltip && (
        <div className="bg-white text-gray-800 text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap animate-fade-in">
          Chat with us on WhatsApp 👋
          <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>
      )}
      {/* Button */}
      <a
        href="https://wa.me/254110707361?text=Hi%20U4U%20Team,%20I'd%20like%20to%20book%20a%20session"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with U4U Wellness team on WhatsApp"
        title="Chat with us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300 transition-transform duration-200"
        style={{ backgroundColor: "#25D366" }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: "#25D366" }} />
        {/* WhatsApp SVG logo */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.405a.75.75 0 0 0 .916.938l5.733-1.505A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.027-1.381l-.36-.214-3.733.98.995-3.64-.234-.373A9.772 9.772 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
        </svg>
      </a>
    </div>
  );
};
