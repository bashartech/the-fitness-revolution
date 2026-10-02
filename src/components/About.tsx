import React from 'react';
import { Shield, Zap, Target, Users, ArrowUpRight } from 'lucide-react';
import { gymData } from '../lib/gymData';
import gymInteriorImg from '../assets/images/gym_interior_modern_1790962131488.jpg';

interface AboutProps {
  onOpenJoinModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenJoinModal }) => {
  const pillars = [
    {
      icon: Shield,
      title: "STRENGTH",
      description: "Build functional strength, muscular density, and long-term physical capability with free weights and guided machines.",
      accent: "text-[#FFC400]",
      border: "border-[#FFC400]/20",
    },
    {
      icon: Zap,
      title: "FITNESS",
      description: "Improve overall cardiovascular conditioning, stamina, and energy through balanced athletic training regimens.",
      accent: "text-[#C7FF00]",
      border: "border-[#C7FF00]/20",
    },
    {
      icon: Target,
      title: "TRAINING",
      description: "Structured coaching pathways and floor supervision to refine lifting mechanics and maintain safe progression.",
      accent: "text-[#00AEEF]",
      border: "border-[#00AEEF]/20",
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description: "A motivating and respectful fitness environment welcoming residents of Nazimabad pursuing their transformation goals.",
      accent: "text-white",
      border: "border-white/20",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#FFC400] font-bold">
                ABOUT THE FITNESS REVOLUTION
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              MORE THAN A GYM.<br />
              <span className="text-[#C7FF00]">IT'S A REVOLUTION.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
            The Fitness Revolution is a gym and physical fitness center serving the Nazimabad
            community in Karachi. We provide a focused environment where members train, build
            strength, pursue physical transformation, and develop consistent fitness habits.
          </p>
        </div>

        {/* Asymmetric Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Visual: Real TFR Gym Facility & Dumbbells rack */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0B0B]">
              <img
                src={gymInteriorImg}
                alt="The Fitness Revolution gym interior in Nazimabad Karachi"
                className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Bottom Card on Image */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#FFC400]">
                    FACILITY & EQUIPMENT
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                    Yellow & Black Strength Floor
                  </h3>
                  <p className="text-xs text-neutral-300 max-w-sm mt-1">
                    Nazimabad No. 4, Main Hadi Market (Basement of Meezan Bank).
                  </p>
                </div>

                <button
                  onClick={onOpenJoinModal}
                  className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-white text-black font-black text-xs uppercase tracking-wider rounded-lg hover:bg-[#C7FF00] transition-colors"
                >
                  <span>VISIT US</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Pillars List (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-xl bg-[#0B0B0B] border border-white/10 hover:${pillar.border} transition-colors group`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-black/60 shrink-0 ${pillar.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-wider text-white uppercase">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed pl-1">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
