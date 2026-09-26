import React, { useState, useEffect } from 'react';
import { Tag, Sparkles, ArrowRight, Clock } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface PromoBannerProps {
  onOpenClaimModal: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenClaimModal }) => {
  // Countdown to July 31, 2026
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(GYM_DETAILS.promoDeadline).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#181A1F] py-6 px-4 sm:px-6 lg:px-8 border-y-2 border-[#C84B19] promo-pulse relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left: Promo Statement & Value */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left w-full lg:w-auto">
          <div className="w-12 h-12 bg-[#C84B19] flex items-center justify-center shrink-0 border border-[#4B515D]">
            <Tag className="w-6 h-6 text-white" />
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E05822] font-semibold mb-1">
              <span>Limited-Time Season Incentive</span>
              <span aria-hidden="true">·</span>
              <span className="text-white">Save Rs. 2,500 Upfront</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase text-white tracking-wide">
              FREE ADMISSION UNTIL 31ST JULY 2026
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-0.5">
              Zero registration fee. Zero admission charges. Pay only your regular monthly fee with no lock-in contract.
            </p>
          </div>
        </div>

        {/* Center / Right: Countdown Timer & Claim CTA */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full lg:w-auto justify-between lg:justify-end">
          {/* Countdown Boxes with sharp square corners and tabular numerals */}
          <div className="flex items-center gap-2 font-mono text-center">
            <div className="bg-[#121316] border border-[#2E3238] px-3 py-2 min-w-[50px]">
              <span className="block text-base sm:text-lg font-bold text-white tabular-nums">
                {timeLeft.days}
              </span>
              <span className="block text-[10px] text-[#8B93A0] uppercase tracking-wider font-heading">
                Days
              </span>
            </div>

            <span className="text-[#8B93A0] font-bold">:</span>

            <div className="bg-[#121316] border border-[#2E3238] px-3 py-2 min-w-[45px]">
              <span className="block text-base sm:text-lg font-bold text-white tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="block text-[10px] text-[#8B93A0] uppercase tracking-wider font-heading">
                Hrs
              </span>
            </div>

            <span className="text-[#8B93A0] font-bold">:</span>

            <div className="bg-[#121316] border border-[#2E3238] px-3 py-2 min-w-[45px]">
              <span className="block text-base sm:text-lg font-bold text-white tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="block text-[10px] text-[#8B93A0] uppercase tracking-wider font-heading">
                Min
              </span>
            </div>

            <span className="text-[#8B93A0] font-bold">:</span>

            <div className="bg-[#121316] border border-[#2E3238] px-3 py-2 min-w-[45px]">
              <span className="block text-base sm:text-lg font-bold text-[#C84B19] tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="block text-[10px] text-[#8B93A0] uppercase tracking-wider font-heading">
                Sec
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onOpenClaimModal}
            className="sheen-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C84B19] hover:bg-[#D45524] text-white font-heading font-bold text-xs uppercase tracking-widest border border-[#4B515D] transition-colors shrink-0 cursor-pointer"
          >
            <span>Lock In Free Admission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
