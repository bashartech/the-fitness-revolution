import React from 'react';
import { Check, ArrowRight, MessageCircle, HelpCircle } from 'lucide-react';
import { gymData, MembershipPlan } from '../lib/gymData';

interface MembershipPlansProps {
  onSelectPlan: (plan: MembershipPlan) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="membership" className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#FFC400] font-bold">
              MEMBERSHIP TIERS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
            CHOOSE YOUR<br />
            <span className="text-[#C7FF00]">FITNESS JOURNEY.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed">
            Transparent packages designed for both beginners and dedicated athletes. 
            Official fees are confirmed directly through gym management.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111111] border border-white/10 text-xs text-neutral-400">
            <HelpCircle className="w-3.5 h-3.5 text-[#FFC400]" />
            <span>Pricing updated regularly — inquiry locks current package promotions</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {gymData.membershipPlans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#0E0E0E] border-2 border-[#C7FF00] shadow-[0_0_40px_rgba(199,255,0,0.15)] md:-translate-y-2'
                    : 'bg-[#0B0B0B] border border-white/10 hover:border-white/25'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#C7FF00] text-black font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Duration / Name */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase font-bold tracking-widest text-[#FFC400]">
                      {plan.duration}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">Standard Access</span>
                  </div>

                  <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Tag (Contact for Current Price) */}
                  <div className="py-4 px-4 rounded-xl bg-black/60 border border-white/5 mb-6">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                      MEMBERSHIP FEE
                    </span>
                    <div className="font-display text-2xl font-bold text-[#C7FF00] tracking-wide">
                      {plan.price}
                    </div>
                    <span className="text-[11px] text-neutral-400 mt-1 block">
                      Inquire via form or WhatsApp for exact current rate
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-400 block">
                      WHAT'S INCLUDED:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-[#C7FF00] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-[#C7FF00] text-black hover:bg-[#d5ff33] shadow-[0_0_20px_rgba(199,255,0,0.3)]'
                        : 'bg-white text-black hover:bg-neutral-200'
                    }`}
                  >
                    <span>JOIN NOW</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </button>

                  <a
                    href={`https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent(
                      `Hello TFR! I'd like to ask about the price and details for the ${plan.name} (${plan.duration}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-white/5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
