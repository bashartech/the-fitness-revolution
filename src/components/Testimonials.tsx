import React from 'react';
import { ThumbsUp, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { gymData } from '../lib/gymData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C7FF00]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C7FF00] font-bold">
              VERIFIED FEEDBACK
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
            WHAT MEMBERS <span className="text-[#FFC400]">SAY.</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3">
            We value genuine member experiences and believe in transparent, unexaggerated feedback.
          </p>
        </div>

        {/* Public Verified Stat Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#0F0F0F] border border-white/10 p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#00AEEF]/10 border border-[#00AEEF]/30 flex items-center justify-center text-[#00AEEF] shrink-0">
                <ThumbsUp className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00AEEF] block">
                  PUBLIC SOCIAL METRIC
                </span>
                <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                  66% RECOMMEND
                </div>
                <span className="text-xs text-neutral-400">
                  Based on 7 verified public Facebook reviews
                </span>
              </div>
            </div>

            <a
              href={gymData.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              <span>View On Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-300">
            <div className="p-4 rounded-xl bg-black/60 border border-white/5 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C7FF00] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Transparent Transparency</strong>
                <p className="text-neutral-400">
                  We don't publish fabricated star ratings or fake testimonials. All reviews can be verified on public social channels.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/5 flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-[#FFC400] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Are You a Member?</strong>
                <p className="text-neutral-400">
                  Share your experience with the Nazimabad community and help fellow fitness enthusiasts find their training home.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
