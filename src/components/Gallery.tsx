import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { gymData } from '../lib/gymData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['ALL', 'GYM', 'TRAINING', 'WOMEN', 'COACHING'];

  const filteredItems = gymData.gallery.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev! + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0B0B0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#FFC400] font-bold">
                VISUAL SHOWCASE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              FACILITY & <span className="text-[#C7FF00]">TRAINING.</span>
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md">
            Inside The Fitness Revolution: heavy iron, modern selectorized stations, dedicated ladies slots,
            and focused athletic atmosphere in Nazimabad.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#141414] rounded-2xl border border-white/10 w-fit mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#C7FF00] text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-black border border-white/10 cursor-pointer transition-all duration-300 hover:border-[#C7FF00]/50 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#C7FF00]" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFC400] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev! + 1) % filteredItems.length);
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-2xl border border-white/15 shadow-2xl"
            />
            <div className="text-center mt-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFC400]">
                {filteredItems[selectedImageIndex].category}
              </span>
              <h4 className="font-display text-2xl font-bold text-white uppercase tracking-wide">
                {filteredItems[selectedImageIndex].title}
              </h4>
              <p className="text-xs text-neutral-400 max-w-lg mt-1">
                {filteredItems[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
