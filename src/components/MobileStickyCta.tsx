import React from 'react';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { gymData } from '../lib/gymData';

interface MobileStickyCtaProps {
  onOpenJoinModal: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onOpenJoinModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#050505]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2 items-center">
        {/* Call Button */}
        <a
          href={`tel:${gymData.contact.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#111111] border border-white/10 text-white font-bold text-[11px] uppercase tracking-wider active:scale-95 transition-transform"
          aria-label="Call TFR"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFC400]" />
          <span>CALL</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent(gymData.contact.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-bold text-[11px] uppercase tracking-wider active:scale-95 transition-transform"
          aria-label="WhatsApp TFR"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WHATSAPP</span>
        </a>

        {/* Join Button */}
        <button
          onClick={onOpenJoinModal}
          className="flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-[#C7FF00] text-black font-black text-[11px] uppercase tracking-wider active:scale-95 transition-transform shadow-[0_0_15px_rgba(199,255,0,0.3)] cursor-pointer"
          aria-label="Join TFR"
        >
          <span>JOIN NOW</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
