import React, { useState } from 'react';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { gymData, GymClass } from '../lib/gymData';

interface ClassesProps {
  onBookClass: (cls: GymClass) => void;
}

export const Classes: React.FC<ClassesProps> = ({ onBookClass }) => {
  const [filter, setFilter] = useState<'all' | 'strength' | 'women' | 'cardio' | 'coaching'>('all');

  const filteredClasses = gymData.classes.filter((c) => {
    if (filter === 'all') return true;
    return c.category === filter;
  });

  return (
    <section id="classes" className="py-20 lg:py-28 bg-[#0B0B0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#00AEEF] font-bold">
                TRAINING CATEGORIES
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              FITNESS <span className="text-[#C7FF00]">CLASSES.</span>
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md">
            Structured fitness coaching sessions tailored for functional capability, body composition,
            and ladies dedicated development.
          </p>
        </div>

        {/* Interactive Segmented Filter Control */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#141414] rounded-2xl border border-white/10 w-fit mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-[#C7FF00] text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Classes
          </button>
          <button
            onClick={() => setFilter('strength')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer ${
              filter === 'strength'
                ? 'bg-[#C7FF00] text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Strength & Hypertrophy
          </button>
          <button
            onClick={() => setFilter('women')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer ${
              filter === 'women'
                ? 'bg-[#C7FF00] text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Ladies Dedicated
          </button>
          <button
            onClick={() => setFilter('cardio')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer ${
              filter === 'cardio'
                ? 'bg-[#C7FF00] text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Cardio & Endurance
          </button>
          <button
            onClick={() => setFilter('coaching')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer ${
              filter === 'coaching'
                ? 'bg-[#C7FF00] text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            1-on-1 Coaching
          </button>
        </div>

        {/* Classes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC400]">
                    {cls.category === 'women' ? "WOMEN'S FITNESS" : cls.category.toUpperCase()}
                  </span>
                  <span className="text-[11px] font-medium text-neutral-400 px-2 py-0.5 rounded bg-white/5">
                    {cls.difficulty}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
                  {cls.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {cls.description}
                </p>

                {/* Metadata List */}
                <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10 text-xs text-neutral-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#00AEEF] shrink-0" />
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#FFC400] shrink-0" />
                    <span className="truncate">{cls.trainer}</span>
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C7FF00] shrink-0" />
                    <span>{cls.schedule}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => onBookClass(cls)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#C7FF00] transition-colors cursor-pointer"
                >
                  <span>BOOK / ENQUIRE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent(
                    `Hello TFR! I would like to inquire about the schedule and slots for ${cls.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#25D366] hover:underline font-semibold"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
