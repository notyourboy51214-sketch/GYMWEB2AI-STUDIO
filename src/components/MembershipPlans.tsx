import React from 'react';
import { PRICING_PLANS, GYM_DETAILS } from '../data/gymData';
import { Check, ArrowRight, Tag, ShieldCheck } from 'lucide-react';

interface MembershipPlansProps {
  onOpenClaimModal: () => void;
  onSelectPlan: (planName: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({
  onOpenClaimModal,
  onSelectPlan
}) => {
  return (
    <section id="membership" className="py-24 bg-[#121316] relative border-b border-[#2E3238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#C84B19] font-semibold mb-3">
            <span>Honest & Affordable Rates</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#8B93A0]">Zero Hidden Surcharges</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
            NO CONTRACT TRAPS. REAL AFFORDABILITY.
          </h2>
          <p className="text-base text-[#9CA3AF] mt-4 font-sans leading-relaxed">
            Consistently rated 4.8★ for providing genuine heavy equipment and coaching without extortionate fees. 
            All memberships currently qualify for our limited-time <strong className="text-white">Free Admission Promotion</strong> until 31st July 2026.
          </p>
        </div>

        {/* Pricing Cards Grid with sharp square styling and staggered delays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={plan.id}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className={`sharp-card bg-[#181A1F] border p-8 flex flex-col justify-between relative group ${
                plan.popular 
                  ? 'border-[#C84B19] shadow-[0_0_20px_rgba(200,75,25,0.15)] bg-[#191716]' 
                  : 'border-[#2E3238]'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#C84B19] text-white text-[10px] font-heading uppercase font-bold tracking-widest px-3 py-1 border-b border-l border-[#4B515D]">
                  Most Popular
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold font-heading uppercase text-white tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] mt-1 font-sans">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-6 my-4 border-y border-[#2E3238]/80">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight font-mono tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#8B93A0] uppercase font-heading font-medium tracking-wider">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Promo Admission Callout */}
                  <div className="mt-3 flex items-center justify-between text-xs bg-[#121316] p-2.5 border border-[#2E3238]">
                    <span className="text-[#8B93A0]">Admission Fee:</span>
                    <div className="flex items-center gap-2">
                      <span className="line-through text-[#6B7280] font-mono">{plan.regularAdmissionFee}</span>
                      <span className="text-[#E05822] font-bold font-mono uppercase">{plan.currentPromoFee}</span>
                    </div>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <p className="text-[11px] font-heading uppercase tracking-wider text-[#8B93A0] font-semibold">
                    Plan Privileges:
                  </p>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#D0D5DD]">
                      <Check className="w-4 h-4 text-[#C84B19] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  onSelectPlan(plan.name);
                  onOpenClaimModal();
                }}
                className={`sheen-btn w-full py-4 text-xs font-heading font-bold uppercase tracking-widest border transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                  plan.popular
                    ? 'bg-[#C84B19] hover:bg-[#D45524] text-white border-[#4B515D]'
                    : 'bg-[#121316] hover:bg-[#C84B19] text-white border-[#2E3238] hover:border-[#4B515D]'
                }`}
              >
                <span>Select & Claim Free Pass</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Promo guarantee footnote */}
        <div className="mt-12 p-6 bg-[#181A1F] border border-[#2E3238] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <div className="flex items-center gap-3">
            <Tag className="w-5 h-5 text-[#C84B19] shrink-0" />
            <span>
              <strong>Free Admission Guarantee:</strong> Pay 0 rupees admission fees before 31st July 2026. 
              No forced annual renewals, lock-in penalties, or locker surcharges.
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 font-heading uppercase text-white font-bold">
            <ShieldCheck className="w-4 h-4 text-[#C84B19]" />
            <span>Walk-in payment accepted</span>
          </div>
        </div>

      </div>
    </section>
  );
};
