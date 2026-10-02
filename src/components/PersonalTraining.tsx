import React from 'react';
import { Target, CheckCircle2, MessageCircle, Flame, ArrowRight } from 'lucide-react';
import { gymData } from '../lib/gymData';
import personalCoachingImg from '../assets/images/personal_coaching_session_1790962153679.jpg';

interface PersonalTrainingProps {
  onOpenJoinModal: () => void;
}

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({ onOpenJoinModal }) => {
  const whatsappPtUrl = `https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent(
    "Hello The Fitness Revolution! I'm interested in Personal Training packages and coach availability."
  )}`;

  const benefits = [
    { title: "One-on-One Guided Coaching", desc: "Direct oversight of every repetition, posture adjustment, and safe loading." },
    { title: "Goal-Focused Programming", desc: "Structured workout plans customized specifically around your physique and strength goals." },
    { title: "Biomechanical Assessment", desc: "Initial evaluation of mobility, joint integrity, and foundational baseline strength." },
    { title: "Progressive Overload Tracking", desc: "Documented tracking of weights and resistance increases over weeks and months." },
  ];

  return (
    <section id="training" className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#FFC400] font-bold">
                1-ON-1 COACHING
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none mb-6">
              TRAIN WITH PURPOSE.<br />
              <span className="text-[#FFC400]">TRAIN WITH GUIDANCE.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              Whether you are stepping into a gym for the first time or seeking to break through a stubborn
              lifting plateau, personalized coaching provides the precision, accountability, and technical
              discipline necessary to achieve measurable, lasting transformations.
            </p>

            {/* Structured benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((b, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0F0F0F] border border-white/10">
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFC400] shrink-0" />
                    <span>{b.title}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappPtUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#FFC400] hover:bg-[#ffd54f] text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-[0_0_25px_rgba(255,196,0,0.3)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ENQUIRE ABOUT PERSONAL TRAINING</span>
              </a>

              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white border border-white/10 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span>Request Form Callback</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Visual Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
              <img
                src={personalCoachingImg}
                alt="Personal training coaching at The Fitness Revolution Karachi"
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute top-5 right-5 bg-black/80 backdrop-blur-md border border-[#FFC400]/40 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-[#FFC400]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  DIRECT ACCOUNTABILITY
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-widest text-[#FFC400] uppercase font-bold">
                      COACHING FOCUS
                    </span>
                    <h3 className="font-display text-xl font-bold text-white uppercase">
                      Precision Form & Technique
                    </h3>
                  </div>
                  <Target className="w-6 h-6 text-[#C7FF00]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
