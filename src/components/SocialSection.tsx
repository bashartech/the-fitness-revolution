import React from 'react';
import { Instagram, Youtube, Facebook, ArrowUpRight } from 'lucide-react';
import { gymData } from '../lib/gymData';
import heroAthleteImg from '../assets/images/hero_athlete_dark_1790962119516.jpg';
import gymInteriorImg from '../assets/images/gym_interior_modern_1790962131488.jpg';
import womenTrainingImg from '../assets/images/women_fitness_training_1790962142471.jpg';
import strengthBarbellImg from '../assets/images/strength_barbell_training_1790962165181.jpg';

export const SocialSection: React.FC = () => {
  const posts = [
    {
      image: heroAthleteImg,
      tag: "@tfr_0fficial",
      caption: "Commitment over excuses. Heavy strength floor daily at Nazimabad No. 4.",
      platform: "instagram",
    },
    {
      image: gymInteriorImg,
      tag: "The Fitness Revolution",
      caption: "Inside our weight room. Yellow and black aesthetic with selectorized equipment.",
      platform: "facebook",
    },
    {
      image: womenTrainingImg,
      tag: "@tfr_0fficial",
      caption: "Ladies dedicated slot (11:00 AM – 4:00 PM). Train with focus and confidence.",
      platform: "instagram",
    },
    {
      image: strengthBarbellImg,
      tag: "The Fitness Revolution",
      caption: "Deadlifts, presses, and compound barbell training. Build real functional power.",
      platform: "youtube",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#0B0B0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C7FF00]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C7FF00] font-bold">
                COMMUNITY CHANNELS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              FOLLOW THE <span className="text-[#FFC400]">REVOLUTION.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={gymData.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#141414] hover:bg-white/10 text-white border border-white/10 transition-colors"
              aria-label="TFR Instagram"
            >
              <Instagram className="w-5 h-5 text-[#E1306C]" />
            </a>
            <a
              href={gymData.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#141414] hover:bg-white/10 text-white border border-white/10 transition-colors"
              aria-label="TFR Facebook"
            >
              <Facebook className="w-5 h-5 text-[#1877F2]" />
            </a>
            <a
              href={gymData.social.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#141414] hover:bg-white/10 text-white border border-white/10 transition-colors"
              aria-label="TFR YouTube"
            >
              <Youtube className="w-5 h-5 text-[#FF0000]" />
            </a>
          </div>
        </div>

        {/* Social Cards Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href={gymData.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden bg-[#111111] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-black">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white">
                  <ArrowUpRight className="w-4 h-4 text-[#C7FF00]" />
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-neutral-300 line-clamp-2 mb-3">
                  {post.caption}
                </p>
                <span className="text-[11px] font-bold text-[#FFC400] uppercase tracking-wider">
                  {post.tag}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
