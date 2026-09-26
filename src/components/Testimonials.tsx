import React from 'react';
import { TESTIMONIALS } from '../data/gymData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#14161B] relative border-b border-[#2E3238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#C84B19] font-semibold mb-3">
            <span>Verified Member Experiences</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#8B93A0]">Google 4.8 Rating</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
            WHAT OUR MEMBERS SAY ABOUT THE IRON CULTURE EXPERIENCE
          </h2>
          <p className="text-base text-[#9CA3AF] mt-4 font-sans leading-relaxed">
            Authentic feedback from working professionals, rehab clients, and serious lifters across Gulistan-e-Johar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="sharp-card bg-[#181A1F] border border-[#2E3238] p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header of review: Stars + Google Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#8B93A0] uppercase border border-[#2E3238] px-2 py-0.5">
                    {t.date}
                  </span>
                </div>

                {/* Highlight Kicker */}
                <h3 className="text-lg font-bold font-heading uppercase text-white tracking-wide mb-3 group-hover:text-[#E05822] transition-colors">
                  "{t.highlight}"
                </h3>

                {/* Paraphrased Review Body */}
                <p className="text-sm text-[#A0A7B5] leading-relaxed mb-6 font-sans">
                  "{t.text}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-[#2E3238]/60 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#8B93A0] font-sans">
                    {t.role}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#10B981]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-mono text-[11px]">Verified Member</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
