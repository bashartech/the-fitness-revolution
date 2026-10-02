import React from 'react';
import { MapPin, Navigation, Clock, Building, ArrowUpRight } from 'lucide-react';
import { gymData } from '../lib/gymData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#FFC400] font-bold">
              FACILITY LOCATION
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
            FIND THE <span className="text-[#C7FF00]">REVOLUTION.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mt-3">
            Located conveniently in the heart of Nazimabad No. 4 at Main Hadi Market,
            directly in the Basement of Meezan Bank.
          </p>
        </div>

        {/* Location Details & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0B0B0B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              {/* Address Block */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC400] block mb-2">
                  OFFICIAL PHYSICAL ADDRESS
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                  The Fitness Revolution
                </h3>
                <div className="flex items-start gap-3 text-xs text-neutral-300 leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#FFC400] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Main Hadi Market, Block C, Plot #7</p>
                    <p className="text-[#C7FF00] font-medium">Basement of Meezan Bank</p>
                    <p>Nazimabad No. 4, Karachi 74600, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Landmark notes */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                  <Building className="w-4 h-4 text-[#00AEEF]" />
                  <span>Prominent Landmark</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Easily accessible landmark in Main Hadi Market. Look for Meezan Bank; TFR is located directly in the facility basement.
                </p>
              </div>

              {/* Operating hours summary */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                  <Clock className="w-4 h-4 text-[#C7FF00]" />
                  <span>Standard Training Windows</span>
                </div>
                <div className="text-xs text-neutral-400 space-y-1">
                  <p>• Morning Floor: <span className="text-white">6:00 AM – 11:00 AM</span></p>
                  <p>• Ladies Slot: <span className="text-[#00AEEF]">11:00 AM – 4:00 PM</span></p>
                  <p>• Evening/Night: <span className="text-white">5:00 PM – 2:00 AM</span></p>
                  <p className="text-[11px] text-neutral-500 italic mt-1">Sunday Closed</p>
                </div>
              </div>

            </div>

            {/* Direction CTA */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href={gymData.address.googleMapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#C7FF00] hover:bg-[#d5ff33] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(199,255,0,0.25)]"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>

          </div>

          {/* Interactive Google Map Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 bg-[#0B0B0B] min-h-[380px] relative shadow-2xl">
            <iframe
              title="The Fitness Revolution Location Map"
              src="https://maps.google.com/maps?q=The%20Fitness%20Revolution%20Nazimabad%204%20Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] border-0 filter invert-[90%] hue-rotate-180 contrast-125"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </section>
  );
};
