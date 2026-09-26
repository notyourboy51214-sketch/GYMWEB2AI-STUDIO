import React from 'react';
import { TRAINERS } from '../data/gymData';
import { Award, Check, Calendar, ArrowRight } from 'lucide-react';

interface TrainersProps {
  onOpenClaimModal: () => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenClaimModal }) => {
  return (
    <section id="trainers" className="py-24 bg-[#121316] relative border-b border-[#2E3238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#C84B19] font-semibold mb-3">
            <span>Coaching Philosophy</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#8B93A0]">Individual Attention</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
            MEET THE COACHES ON YOUR SIDE
          </h2>
          <p className="text-base text-[#9CA3AF] mt-4 font-sans leading-relaxed">
            Highlighted consistently across 120+ Google reviews: trainers who listen, adapt to your injuries, 
            and stand by you on the floor every single evening.
          </p>
        </div>

        {/* Featured Trainer Spotlight: Coach Ghazal */}
        <div className="mb-14 bg-[#1A1817] border-2 border-[#C84B19] p-6 sm:p-10 sharp-card relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Trainer Photo with Desaturate default / Full color hover effect */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-[#4B515D] overflow-hidden aspect-[3/4] max-h-[460px] bg-[#121316]">
                <img
                  src={TRAINERS[0].image}
                  alt="Coach Ghazal - Iron Culture Fitness Specialist"
                  className="w-full h-full object-cover object-top grayscale-[35%] group-hover:grayscale-0 transition-all duration-500 scale-[1.01] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#121316] via-[#121316]/60 to-transparent p-4">
                  <span className="text-xs uppercase font-heading font-bold text-[#E05822] tracking-wider block">
                    Standout Specialist
                  </span>
                  <span className="text-xl font-bold font-heading text-white uppercase">
                    Coach Ghazal
                  </span>
                </div>
              </div>
            </div>

            {/* Coach Ghazal In-Depth Bio & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-heading uppercase tracking-wider text-[#A0A7B5] mb-2">
                  <span className="text-[#C84B19] font-bold">Client Favorite</span>
                  <span aria-hidden="true">·</span>
                  <span>Known for Patience & Medical Adaptations</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold font-heading uppercase text-white tracking-wide mb-4">
                  {TRAINERS[0].name}
                </h3>

                <p className="text-sm sm:text-base text-[#D0D5DD] leading-relaxed mb-6 font-sans">
                  {TRAINERS[0].bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase font-heading font-semibold text-[#8B93A0] tracking-wider mb-3">
                    Core Specializations & Clinical Adaptations:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {TRAINERS[0].specialties.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#E5E7EB]">
                        <Check className="w-4 h-4 text-[#C84B19] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications line */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#8B93A0] font-mono pb-6 border-b border-[#2E3238]">
                  <Award className="w-4 h-4 text-[#C84B19] shrink-0" />
                  <span>Credentials: {TRAINERS[0].certifications.join(' · ')}</span>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenClaimModal}
                  className="sheen-btn px-6 py-3.5 bg-[#C84B19] hover:bg-[#D45524] text-white font-heading font-bold text-xs uppercase tracking-widest border border-[#4B515D] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Assessment with Coach Ghazal</span>
                </button>
                <span className="text-xs text-[#8B93A0] text-center sm:text-left">
                  Included free with current admission promotion
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Secondary Coaches Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRAINERS.slice(1).map((trainer, idx) => (
            <div
              key={trainer.id}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="sharp-card bg-[#181A1F] border border-[#2E3238] p-6 flex flex-col sm:flex-row gap-6 group"
            >
              <div className="sm:w-44 shrink-0 aspect-[3/4] relative border border-[#2E3238] overflow-hidden bg-[#121316]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top grayscale-[35%] group-hover:grayscale-0 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-heading uppercase tracking-wider text-[#C84B19] font-semibold block mb-1">
                    {trainer.badge}
                  </span>
                  <h4 className="text-2xl font-bold font-heading uppercase text-white tracking-wide mb-2 group-hover:text-[#E05822] transition-colors">
                    {trainer.name}
                  </h4>
                  <p className="text-xs text-[#9CA3AF] mb-4 font-sans leading-relaxed">
                    {trainer.bio}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {trainer.specialties.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#D0D5DD]">
                        <Check className="w-3.5 h-3.5 text-[#C84B19] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#2E3238] flex items-center justify-between">
                  <span className="text-[11px] text-[#8B93A0] font-mono">Evening Hours On Duty</span>
                  <button
                    onClick={onOpenClaimModal}
                    className="text-xs font-heading uppercase text-[#C84B19] hover:text-white flex items-center gap-1 font-bold cursor-pointer"
                  >
                    <span>Train Here</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
