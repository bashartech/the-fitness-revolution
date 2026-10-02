import React from 'react';
import { ArrowRight, MessageCircle, MapPin, Clock, ShieldCheck, Dumbbell } from 'lucide-react';
import { gymData } from '../lib/gymData';
import heroAthleteImg from '../assets/images/hero_athlete_dark_1790962119516.jpg';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  const whatsappUrl = `https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent(gymData.contact.whatsappDefaultMessage)}`;

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#050505] pt-4 pb-16 lg:py-24">
      {/* Background radial gradients for depth */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FFC400]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[#C7FF00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#00AEEF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-Impact Typography & Conversion CTA (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Label with authentic location marker */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C7FF00] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C7FF00] font-bold">
                {gymData.eyebrow}
              </span>
              <span className="text-neutral-600">·</span>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                Nazimabad No. 4, Karachi
              </span>
            </div>

            {/* Giant Bold Headline */}
            <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] mb-6">
              BUILD <span className="text-white">STRENGTH.</span><br />
              <span className="text-[#C7FF00]">TRANSFORM</span> YOUR BODY.<br />
              OWN YOUR <span className="text-[#FFC400]">REVOLUTION.</span>
            </h1>

            {/* Supporting Value Proposition Copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed mb-8">
              Train with purpose. Build strength. Improve your fitness. Become stronger,
              healthier, and more confident with The Fitness Revolution.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#C7FF00] text-black font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-[0_0_25px_rgba(199,255,0,0.35)] cursor-pointer"
              >
                <span>JOIN THE REVOLUTION</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <a
                href="#membership"
                className="inline-flex items-center px-6 sm:px-7 py-3.5 sm:py-4 bg-[#111111] hover:bg-[#1a1a1a] text-white font-bold text-sm uppercase tracking-wider rounded-xl border border-white/15 hover:border-white/30 transition-colors"
              >
                VIEW MEMBERSHIPS
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 sm:py-4 bg-[#0B0B0B] hover:bg-[#161616] text-[#25D366] hover:text-[#34e275] font-bold text-sm uppercase tracking-wider rounded-xl border border-[#25D366]/30 hover:border-[#25D366]/60 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* Non-numeric verified feature pills / indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFC400] shrink-0" />
                <span className="truncate">Main Hadi Market, Nazimabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span className="truncate">Ladies Slot (11 AM – 4 PM)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C7FF00] shrink-0" />
                <span className="truncate">Personal & Floor Guidance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset & Floating UI Cards (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-[480px] aspect-[4/5] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              
              {/* Main Athlete Visual */}
              <img
                src={heroAthleteImg}
                alt="Muscular athlete training at The Fitness Revolution in Karachi"
                className="w-full h-full object-cover object-center filter contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-[#050505]/20" />

              {/* Top-Right Badge: TFR Crest */}
              <div className="absolute top-4 right-4 bg-[#050505]/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
                <span className="font-display tracking-widest text-xs font-bold text-white uppercase">
                  TFR ATHLETIC
                </span>
              </div>

              {/* Floating Card: STRENGTH */}
              <div className="absolute top-1/4 -left-4 sm:-left-6 bg-[#0B0B0B]/90 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl shadow-2xl max-w-[190px] transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md bg-[#FFC400]/20 flex items-center justify-center text-[#FFC400]">
                    <Dumbbell className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-display tracking-wider text-sm font-bold text-white uppercase">
                    STRENGTH
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-tight">
                  Free weights, dumbbells & heavy resistance floor.
                </p>
              </div>

              {/* Floating Card: PERSONAL TRAINING */}
              <div className="absolute bottom-28 -right-4 sm:-right-6 bg-[#0B0B0B]/90 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl shadow-2xl max-w-[200px] transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display tracking-wider text-sm font-bold text-[#C7FF00] uppercase">
                    PERSONAL TRAINING
                  </span>
                </div>
                <p className="text-[11px] text-neutral-300 leading-tight">
                  Customized 1-on-1 coaching & goal-oriented routines.
                </p>
              </div>

              {/* Bottom Card: TRANSFORMATION & COMMUNITY */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#050505]/90 backdrop-blur-md border border-white/10 p-3.5 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] tracking-widest uppercase text-neutral-400 font-semibold">
                      PHYSICAL TRANSFORMATION
                    </div>
                    <div className="font-display text-lg font-bold text-white tracking-wide">
                      DISCIPLINE OVER MOTIVATION
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#00AEEF] uppercase px-2 py-0.5 border border-[#00AEEF]/30 rounded">
                    KARACHI
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
