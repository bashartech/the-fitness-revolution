import React from 'react';
import { ArrowRight, Trophy, Flame } from 'lucide-react';
import strengthBarbellImg from '../assets/images/strength_barbell_training_1790962165181.jpg';

interface TransformationProps {
  onOpenJoinModal: () => void;
}

export const Transformation: React.FC<TransformationProps> = ({ onOpenJoinModal }) => {
  const pillars = [
    { title: "CONSISTENCY", desc: "Showing up day after day until the habit becomes second nature." },
    { title: "DISCIPLINE", desc: "Executing your sets and nutrition when motivation fades." },
    { title: "TRAINING", desc: "Progressive, intelligent resistance work targeted to your goals." },
    { title: "PROGRESS", desc: "Measurable gains in strength, confidence, and daily vitality." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0B0B0B] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner with large visual and dramatic typography */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#050505] p-8 sm:p-12 lg:p-16">
          
          {/* Background image with dramatic dark scrim */}
          <div className="absolute inset-0 z-0">
            <img
              src={strengthBarbellImg}
              alt="Athlete chalking hands for heavy barbell lift at The Fitness Revolution"
              className="w-full h-full object-cover object-center filter contrast-125 opacity-30"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/60" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-[#FFC400]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#FFC400] font-bold">
                MINDSET & REVOLUTION
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none mb-6">
              YOUR TRANSFORMATION<br />
              <span className="text-[#C7FF00]">STARTS HERE.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              Physical transformation is not an overnight miracle. It is built through deliberate effort,
              proper mechanics, and the persistent desire to be stronger than yesterday. 
              At The Fitness Revolution, you get the equipment and environment to turn ambition into reality.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {pillars.map((p, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-black/60 border border-white/10">
                  <span className="font-display text-lg font-bold text-white tracking-wider block">
                    {p.title}
                  </span>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenJoinModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C7FF00] hover:bg-[#d5ff33] text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(199,255,0,0.3)] cursor-pointer"
            >
              <span>START YOUR JOURNEY TODAY</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
