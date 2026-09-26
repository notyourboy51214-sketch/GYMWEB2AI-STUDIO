import React, { useState } from 'react';
import { FACILITY_GALLERY } from '../data/gymData';
import { Maximize2, X, Check, Shield } from 'lucide-react';

export const FacilityGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof FACILITY_GALLERY[0] | null>(null);

  return (
    <section id="facility" className="py-24 bg-[#14161B] relative border-b border-[#2E3238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#C84B19] font-semibold mb-3">
              <span>Facility Tour</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#8B93A0]">House #B10 Basement</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
              INSIDE THE IRON SANCTUARY
            </h2>
            <p className="text-base text-[#9CA3AF] mt-3 font-sans">
              No fragile machines, no broken pins, and no smoke and mirrors. Clean air, heavy iron racks, 
              and well-oiled equipment in our Gulistan-e-Johar basement.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#A0A7B5] font-heading uppercase border border-[#2E3238] bg-[#121316] px-4 py-3 self-start md:self-end">
            <Shield className="w-4 h-4 text-[#C84B19]" />
            <span>Daily Sanitization & Calibrated Maintenance</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FACILITY_GALLERY.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="sharp-card bg-[#181A1F] border border-[#2E3238] overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#121316]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute top-3 right-3 p-2 bg-[#121316]/80 border border-[#2E3238] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#C84B19]" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-heading uppercase tracking-wider text-[#C84B19] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold font-heading uppercase text-white tracking-wide mb-2 group-hover:text-[#E05822] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#2E3238]/60 flex items-center justify-between text-xs text-[#8B93A0]">
                  <span>Click to expand</span>
                  <span className="font-mono text-[#C84B19]">0{idx + 1} / 03</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Checklist Footer Strip */}
        <div className="mt-12 bg-[#181A1F] border border-[#2E3238] p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#D0D5DD]">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#C84B19] shrink-0" />
            <span>Heavy Cast-Iron Plates</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#C84B19] shrink-0" />
            <span>Industrial Air Exhaust</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#C84B19] shrink-0" />
            <span>Dual Cable Cross Towers</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#C84B19] shrink-0" />
            <span>Clean Basement Lockers</span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#181A1F] border-2 border-[#C84B19] max-w-4xl w-full p-4 sm:p-6 sharp-card relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2E3238]">
              <div>
                <span className="text-xs font-heading uppercase text-[#C84B19] font-bold">
                  {selectedPhoto.category}
                </span>
                <h3 className="text-xl font-bold font-heading uppercase text-white">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 border border-[#2E3238] hover:border-[#C84B19] text-[#D0D5DD] hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] bg-[#121316] border border-[#2E3238] overflow-hidden mb-4">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-[#C8CED8] font-sans">
              {selectedPhoto.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
