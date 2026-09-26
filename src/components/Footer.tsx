import React from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { Phone, MapPin, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0D0E] border-t border-[#2E3238] pt-16 pb-12 text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#2E3238]">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C84B19] flex items-center justify-center font-heading font-bold text-white text-lg tracking-wider border border-[#4B515D]">
                IC
              </div>
              <span className="font-heading text-xl font-bold tracking-wider text-white uppercase">
                IRON CULTURE
              </span>
            </div>
            <p className="text-xs text-[#8B93A0] leading-relaxed font-sans">
              The underground sanctuary of raw strength and patient coaching in Gulistan-e-Johar, Karachi. 
              Built on heavy iron, clean equipment, and honest rates.
            </p>
            <div className="pt-2">
              <span className="text-xs font-mono text-[#C84B19] uppercase font-bold">
                Rating 4.8★ (123 Google Reviews)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-heading uppercase text-xs tracking-wider">
            <h4 className="text-sm font-bold text-white tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#why-train" className="hover:text-[#C84B19] transition-colors">
                  Why Iron Culture
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#C84B19] transition-colors">
                  Programs & Classes
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-[#C84B19] transition-colors">
                  Meet the Coaches
                </a>
              </li>
              <li>
                <a href="#facility" className="hover:text-[#C84B19] transition-colors">
                  Facility Tour
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-[#C84B19] transition-colors">
                  Membership Rates
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C84B19] transition-colors">
                  FAQ & Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="space-y-3 text-xs">
            <h4 className="text-sm font-heading font-bold uppercase text-white tracking-widest">
              Facility Coordinates
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C84B19] shrink-0 mt-0.5" />
                <span className="text-[#D0D5DD] leading-relaxed">
                  {GYM_DETAILS.address}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C84B19] shrink-0 mt-0.5" />
                <span className="text-[#D0D5DD]">
                  {GYM_DETAILS.hoursDetail}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C84B19] shrink-0 mt-0.5" />
                <a
                  href={`tel:${GYM_DETAILS.rawPhone}`}
                  className="text-white hover:text-[#C84B19] font-mono tabular-nums transition-colors"
                >
                  {GYM_DETAILS.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Current Promo Alert */}
          <div className="bg-[#14161B] border border-[#2E3238] p-5 space-y-3">
            <span className="text-[11px] font-heading font-bold uppercase text-[#C84B19] tracking-wider block">
              Limited-Time Incentive
            </span>
            <p className="text-xs font-heading uppercase text-white font-bold tracking-wide">
              {GYM_DETAILS.promoTitle}
            </p>
            <p className="text-[11px] text-[#8B93A0] leading-relaxed font-sans">
              Admission fee waived (save Rs. 2,500) for all new memberships registered on or before 31st July 2026.
            </p>
            <a
              href="#membership"
              className="inline-block text-xs font-heading uppercase text-[#C84B19] hover:underline font-bold"
            >
              View Tiers & Enroll →
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B93A0]">
          <p>© 2026 {GYM_DETAILS.name}. All rights reserved. Gulistan-e-Johar, Karachi, Pakistan.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-heading uppercase hover:text-white transition-colors border border-[#2E3238] px-3 py-1.5 cursor-pointer"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C84B19]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
