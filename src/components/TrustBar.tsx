import React from 'react';
import { Star, MessageSquare, Clock, Phone, MapPin } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
import { Counter } from './Counter';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#121316] border-b border-[#2E3238] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#2E3238]">
          
          {/* Stat 1: Google Rating */}
          <div className="pt-4 sm:pt-0 sm:px-6 first:px-0">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                ))}
              </div>
              <span className="text-xs uppercase font-heading font-semibold text-[#8B93A0]">Google Verified</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight flex items-baseline gap-1">
              <Counter end={4.8} decimals={1} duration={1600} />
              <span className="text-base text-[#8B93A0] font-sans font-normal">/ 5.0</span>
            </div>
            <p className="text-xs text-[#9CA3AF] mt-1">Community rated strength hub</p>
          </div>

          {/* Stat 2: Verified Reviews */}
          <div className="pt-4 sm:pt-0 sm:px-6">
            <div className="flex items-center gap-2 mb-1 text-[#8B93A0]">
              <MessageSquare className="w-4 h-4 text-[#C84B19]" />
              <span className="text-xs uppercase font-heading font-semibold">Real Lifters</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight flex items-baseline gap-1">
              <Counter end={123} duration={1800} suffix="+" />
            </div>
            <p className="text-xs text-[#9CA3AF] mt-1">Positive Google reviews logged</p>
          </div>

          {/* Stat 3: Daily Operating Hours */}
          <div className="pt-4 sm:pt-0 sm:px-6">
            <div className="flex items-center gap-2 mb-1 text-[#8B93A0]">
              <Clock className="w-4 h-4 text-[#C84B19]" />
              <span className="text-xs uppercase font-heading font-semibold">Operating Schedule</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight uppercase">
              DAILY TILL 10:30 PM
            </div>
            <p className="text-xs text-[#9CA3AF] mt-1">Open 7 days: 06:00 AM – 10:30 PM</p>
          </div>

          {/* Stat 4: Phone & Direct Line */}
          <div className="pt-4 sm:pt-0 sm:px-6">
            <div className="flex items-center gap-2 mb-1 text-[#8B93A0]">
              <Phone className="w-4 h-4 text-[#C84B19]" />
              <span className="text-xs uppercase font-heading font-semibold">Direct Desk Line</span>
            </div>
            <a
              href={`tel:${GYM_DETAILS.rawPhone}`}
              className="text-lg sm:text-xl font-bold font-mono text-[#D0D5DD] hover:text-[#C84B19] transition-colors block tracking-wide tabular-nums"
            >
              {GYM_DETAILS.phone}
            </a>
            <p className="text-xs text-[#9CA3AF] mt-1">Gulistan-e-Johar, Block 16</p>
          </div>

        </div>
      </div>
    </section>
  );
};
