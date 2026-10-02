import React from 'react';
import { ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import { gymData } from '../lib/gymData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0B0B0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C7FF00]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C7FF00] font-bold">
              PROGRAMS & AMENITIES
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
            WHAT WE <span className="text-[#FFC400]">OFFER.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mt-3">
            Tailored fitness environments and coaching programs designed to accommodate every
            training level in Nazimabad.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gymData.services.map((service, index) => {
            const isConfirmed = service.status === 'Confirmed';
            const indexNumber = `0${index + 1}`;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className={`group relative rounded-2xl overflow-hidden bg-[#111111] border border-white/10 transition-all duration-300 hover:border-white/30 flex flex-col justify-between cursor-pointer ${
                  !isConfirmed ? 'opacity-85' : ''
                }`}
              >
                {/* Visual Header Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/80">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />
                  
                  {/* Editorial Index Number */}
                  <span className="absolute top-4 left-4 font-display text-2xl font-black text-white/70">
                    {indexNumber}
                  </span>

                  {/* Status Indicator */}
                  <span
                    className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                      isConfirmed
                        ? 'bg-black/70 text-[#C7FF00] border-[#C7FF00]/40'
                        : 'bg-black/70 text-neutral-400 border-white/10'
                    }`}
                  >
                    {service.status}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#FFC400] block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#C7FF00] transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-semibold tracking-wider uppercase group-hover:text-white transition-colors">
                      {isConfirmed ? 'Learn & Inquire' : 'Check Availability'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-[#C7FF00] group-hover:text-black transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
