import React from 'react';
import { MessageCircle } from 'lucide-react';
import { gymData } from '../lib/gymData';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent(gymData.contact.whatsappDefaultMessage)}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="hidden sm:block fixed bottom-6 right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with The Fitness Revolution on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-black font-black text-xs uppercase tracking-wider rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 group"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden md:inline group-hover:inline transition-all">
          Chat With TFR
        </span>
      </a>
    </aside>
  );
};
