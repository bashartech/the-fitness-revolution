import React from 'react';
import { Dumbbell, UserCheck, Sparkles, MapPin } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const trustItems = [
    {
      icon: Dumbbell,
      label: "HEAVY STRENGTH FLOOR",
      desc: "Free weights, selectorized machines & platforms",
      accent: "text-[#FFC400]",
      border: "hover:border-[#FFC400]/40",
    },
    {
      icon: Sparkles,
      label: "SEPARATE LADIES HOURS",
      desc: "11:00 AM – 4:00 PM private dedicated training",
      accent: "text-[#00AEEF]",
      border: "hover:border-[#00AEEF]/40",
    },
    {
      icon: UserCheck,
      label: "STRUCTURED COACHING",
      desc: "Experienced trainers for tailored guidance & form",
      accent: "text-[#C7FF00]",
      border: "hover:border-[#C7FF00]/40",
    },
    {
      icon: MapPin,
      label: "PRIME NAZIMABAD LOCATION",
      desc: "Main Hadi Market, Basement of Meezan Bank",
      accent: "text-white",
      border: "hover:border-white/40",
    },
  ];

  return (
    <section className="relative z-20 bg-[#0B0B0B] border-y border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl bg-[#111111]/60 border border-white/5 transition-all duration-300 ${item.border} flex items-start gap-4`}
              >
                <div className={`p-2.5 rounded-lg bg-black/60 shrink-0 ${item.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-wide text-white uppercase leading-none mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
