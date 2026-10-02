import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { gymData } from '../lib/gymData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#FFC400] font-bold">
              COMMON INQUIRIES
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
            FREQUENTLY ASKED <span className="text-[#C7FF00]">QUESTIONS.</span>
          </h2>
          <p className="text-sm text-neutral-400 mt-3">
            Clear, honest answers regarding our facility, operating hours, ladies slots, and memberships.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {gymData.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0F0F0F] border-[#C7FF00]/40 shadow-lg'
                    : 'bg-[#0B0B0B] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full bg-white/5 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#C7FF00]' : 'text-neutral-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0F0F0F] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white uppercase">
                Have an unlisted question?
              </h3>
              <p className="text-xs text-neutral-400">
                Our front desk team is available on WhatsApp to assist with any custom inquiries.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${gymData.contact.whatsappRaw}?text=${encodeURIComponent("Hello TFR! I have a question about the gym.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-black font-black text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
