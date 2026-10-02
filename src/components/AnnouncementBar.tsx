import React, { useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import { gymData } from '../lib/gymData';

interface AnnouncementBarProps {
  onViewOffers?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onViewOffers }) => {
  const [visible, setVisible] = useState(true);
  const activeOffer = gymData.offers.find((o) => o.active);

  if (!visible) return null;

  return (
    <div className="bg-[#0B0B0B] border-b border-[#222222] text-xs py-2 px-4 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-neutral-300 mx-auto sm:mx-0 overflow-hidden text-ellipsis whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-[#FFC400] shrink-0" />
          <span className="font-semibold text-white uppercase tracking-wider text-[11px]">
            {activeOffer ? activeOffer.title : "SPECIAL MEMBERSHIP OFFERS"}
          </span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline text-neutral-400">
            {activeOffer 
              ? activeOffer.description 
              : "Limited-time deals available — contact TFR for current pricing and seasonal discounts."}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onViewOffers}
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C7FF00] hover:text-white transition-colors group cursor-pointer"
          >
            <span>VIEW OFFERS</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={() => setVisible(false)}
            aria-label="Dismiss banner"
            className="text-neutral-500 hover:text-white transition-colors p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
