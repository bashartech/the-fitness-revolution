import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { gymData } from '../lib/gymData';
import heroAthleteImg from '../assets/images/hero_athlete_dark_1790962119516.jpg';

interface FinalCtaProps {
  onOpenJoinModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenJoinModal }) => {
  const whatsappUrl = `https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent(gymData.contact.whatsappDefaultMessage)}`;

  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Background visual with rich dark scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroAthleteImg}
          alt="Athlete focused on fitness transformation at The Fitness Revolution"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C7FF00] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C7FF00] font-bold">
            TAKE ACTION
          </span>
        </div>

        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6">
          YOUR REVOLUTION<br />
          <span className="text-[#C7FF00]">STARTS TODAY.</span>
        </h2>

        <p className="text-base sm:text-xl text-neutral-300 max-w-xl mx-auto font-normal leading-relaxed mb-10">
          Stop waiting for the perfect time. Start building your stronger self.
          Step into The Fitness Revolution in Nazimabad No. 4, Karachi.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenJoinModal}
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 sm:py-5 bg-[#C7FF00] hover:bg-[#d5ff33] text-black font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-[0_0_35px_rgba(199,255,0,0.4)] cursor-pointer"
          >
            <span>JOIN THE FITNESS REVOLUTION</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-4 sm:py-5 bg-[#111111]/80 hover:bg-[#1a1a1a] text-[#25D366] font-bold text-sm uppercase tracking-wider rounded-xl border border-[#25D366]/40 hover:border-[#25D366]/70 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WHATSAPP TFR</span>
          </a>
        </div>

      </div>
    </section>
  );
};
