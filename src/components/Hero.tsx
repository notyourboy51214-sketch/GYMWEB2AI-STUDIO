import React from 'react';
import { ArrowRight, MapPin, Clock, ShieldCheck, Dumbbell } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
import heroGymImage from '../assets/images/hero_iron_culture_gym_1790416620919.jpg';

interface HeroProps {
  onOpenClaimModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenClaimModal }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 border-b border-[#2E3238]">
      {/* Full-bleed gym photo background with rugged industrial scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGymImage}
          alt="Iron Culture Fitness Strength Facility Basement"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12]"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim gradient to ensure WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/75 to-[#121316]/40 pointer-events-none" />
        {/* Industrial rust ambient glow vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,75,25,0.18),transparent_60%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Unboxed metadata line with typographic separators (anti-slop, zero-pill) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium tracking-wider text-[#A0A7B5] mb-5 uppercase font-heading">
            <span className="text-[#C84B19] font-bold">Gulistan-e-Johar, Karachi</span>
            <span aria-hidden="true">·</span>
            <span>Block 16 Basement</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E5E7EB]">Open Daily till 10:30 PM</span>
          </div>

          {/* Primary Display Headline (Oswald font, sharp, condensed, balanced) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase font-heading leading-[1.02] text-balance mb-6">
            REAL IRON. <br />
            HONEST COACHING. <br />
            <span className="text-[#C84B19]">ZERO EGO.</span>
          </h1>

          {/* Concrete subheadline */}
          <p className="text-base sm:text-lg text-[#C8CED8] leading-relaxed max-w-2xl mb-8 font-sans">
            Karachi's raw strength haven located in the basement of Block 16, Gulistan-e-Johar. 
            Built for lifters seeking calibrated iron plates, power racks, and genuinely patient coaching 
            that adapts workouts around medical conditions and injury history.
          </p>

          {/* Action Button Row - Fully Square, Sheen Sweep, Clear Outcome */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenClaimModal}
              className="sheen-btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C84B19] hover:bg-[#D45524] text-white font-heading font-bold text-sm tracking-widest uppercase border border-[#4B515D] transition-colors cursor-pointer group"
            >
              <span>Claim Free Admission</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#membership"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#181A1F] hover:bg-[#22252C] text-[#E5E7EB] hover:text-white font-heading font-semibold text-sm tracking-widest uppercase border border-[#2E3238] hover:border-[#4B515D] transition-colors"
            >
              <span>View Transparent Plans</span>
            </a>
          </div>

          {/* Trust Anchors Strip (Bottom of Hero) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#2E3238]/60">
            <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
              <div className="w-8 h-8 bg-[#181A1F] border border-[#2E3238] flex items-center justify-center text-[#C84B19] shrink-0">
                <Dumbbell className="w-4 h-4" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-xs uppercase tracking-wider">Heavy Calibrated Iron</p>
                <p className="text-[11px] text-[#8B93A0]">Barbells, dumbells & racks</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
              <div className="w-8 h-8 bg-[#181A1F] border border-[#2E3238] flex items-center justify-center text-[#C84B19] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-xs uppercase tracking-wider">Medical Adaptation</p>
                <p className="text-[11px] text-[#8B93A0]">Specialized coach Ghazal</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
              <div className="w-8 h-8 bg-[#181A1F] border border-[#2E3238] flex items-center justify-center text-[#C84B19] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-xs uppercase tracking-wider">Daily Till 10:30 PM</p>
                <p className="text-[11px] text-[#8B93A0]">Evening floor coaching on duty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
