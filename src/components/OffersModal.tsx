import React from 'react';
import { X, Tag, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';
import { gymData } from '../lib/gymData';

interface OffersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimOffer: (offerTitle: string) => void;
}

export const OffersModal: React.FC<OffersModalProps> = ({ isOpen, onClose, onClaimOffer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0F0F0F] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close offers"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#FFC400]" />
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#FFC400]">
            SPECIAL PROMOTIONS & DEALS
          </span>
        </div>

        <h3 className="font-display text-3xl font-black uppercase text-white mb-2">
          TFR MEMBERSHIP OFFERS
        </h3>

        <p className="text-xs text-neutral-400 mb-6">
          Check out our latest seasonal packages and discount offers for new and returning members at Nazimabad No. 4.
        </p>

        {/* Offers List */}
        <div className="space-y-4 mb-6">
          {gymData.offers.map((offer) => (
            <div
              key={offer.id}
              className={`p-5 rounded-2xl border transition-all ${
                offer.active
                  ? 'bg-[#141414] border-[#C7FF00]/40 shadow-lg'
                  : 'bg-black/40 border-white/5 opacity-75'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-xl font-bold uppercase text-white">
                  {offer.title}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                    offer.active
                      ? 'bg-[#C7FF00] text-black'
                      : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {offer.active ? offer.discount : 'Archived'}
                </span>
              </div>

              <p className="text-xs text-neutral-300 mb-3">
                {offer.description}
              </p>

              <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2 border-t border-white/5">
                <span>Validity: {offer.validUntil}</span>
                {offer.active && (
                  <button
                    onClick={() => {
                      onClose();
                      onClaimOffer(offer.title);
                    }}
                    className="text-[#C7FF00] hover:underline font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Claim Offer →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Historical offer disclaimer */}
        <div className="p-3.5 rounded-xl bg-black border border-white/10 flex items-start gap-2.5 text-[11px] text-neutral-400">
          <AlertCircle className="w-4 h-4 text-[#FFC400] shrink-0 mt-0.5" />
          <span>
            Note: Historical social posts (e.g. past seasonal discounts) are updated based on active gym management campaigns. Please confirm current rates before joining.
          </span>
        </div>

        <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
