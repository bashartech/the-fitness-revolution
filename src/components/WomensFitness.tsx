import React from 'react';
import { Clock, ShieldCheck, Heart, MessageCircle } from 'lucide-react';
import { gymData } from '../lib/gymData';
import womenTrainingImg from '../assets/images/women_fitness_training_1790962142471.jpg';

export const WomensFitness: React.FC = () => {
  const whatsappLadiesUrl = `https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent(
    "Hello TFR! I'd like to ask about ladies' training hours (11:00 AM – 4:00 PM), female trainer availability, and membership fees."
  )}`;

  return (
    <section id="women" className="py-20 lg:py-28 bg-[#0B0B0B] border-t border-white/5 relative overflow-hidden">
      {/* Cyan/Blue subtle ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src={womenTrainingImg}
                alt="Women training with confidence during dedicated ladies hours at The Fitness Revolution Karachi"
                className="w-full h-full object-cover filter contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Timing badge on photo */}
              <div className="absolute top-5 left-5 bg-black/80 backdrop-blur-md border border-[#00AEEF]/40 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  11:00 AM – 4:00 PM DAILY
                </span>
              </div>

              {/* Bottom quote */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                <p className="text-xs text-neutral-300 italic">
                  "Safe, focused, and dedicated hours reserved exclusively for female members to train and build consistent workout routines."
                </p>
                <span className="text-[11px] font-bold text-[#00AEEF] uppercase mt-2 block tracking-wider">
                  The Fitness Revolution · Nazimabad No. 4
                </span>
              </div>
            </div>
          </div>

          {/* Text Content & Features (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#00AEEF] font-bold">
                WOMEN'S FITNESS
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none mb-6">
              A SPACE TO TRAIN<br />
              <span className="text-[#00AEEF]">WITH CONFIDENCE.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              At The Fitness Revolution, female fitness enthusiasts have access to a dedicated
              daily training slot from <strong className="text-white">11:00 AM to 4:00 PM</strong>, Monday through Saturday.
              Whether your goal is weight loss, muscular toning, core strengthening, or overall cardiovascular health,
              our environment empowers you to train comfortably.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#111111] border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                  <span>Exclusive Dedicated Timing</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Private training window reserved strictly for female members between 11 AM and 4 PM.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#111111] border border-white/10">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <Heart className="w-4 h-4 text-[#FFC400]" />
                  <span>All Fitness Levels</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Welcoming guidance for beginners learning gym machines as well as experienced lifters.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappLadiesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#00AEEF] hover:bg-[#20bbf2] text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-[0_0_25px_rgba(0,174,239,0.3)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ASK ABOUT LADIES' TRAINING</span>
              </a>

              <a
                href={`tel:${gymData.contact.phoneRaw}`}
                className="inline-flex items-center px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
              >
                Call Front Desk
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
