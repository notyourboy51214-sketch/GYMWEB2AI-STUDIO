import React from 'react';
import { BarbellIcon, ChainLinkIcon, WeightPlateIcon, AnvilIcon } from './IndustrialIcons';
import { Check } from 'lucide-react';

export const WhyTrainHere: React.FC = () => {
  const pillars = [
    {
      icon: <WeightPlateIcon className="w-8 h-8 text-[#C84B19]" />,
      index: "01",
      title: "Genuinely Affordable Memberships",
      summary: "High-caliber training without extortionate Karachi gym pricing.",
      description: "We eliminate unnecessary fluff, predatory lock-in contracts, and hidden maintenance fees. Our monthly dues are accessible to neighborhood residents, students, and working professionals who demand serious iron without inflated price tags.",
      points: [
        "Transparent monthly pricing with zero surprise charges",
        "Free admission promo active through 31st July 2026",
        "Student and quarterly savings packages available"
      ]
    },
    {
      icon: <BarbellIcon className="w-8 h-8 text-[#C84B19]" />,
      index: "02",
      title: "Impeccably Maintained Facility & Iron",
      summary: "Clean air, oiled cables, and heavy iron that never breaks down.",
      description: "Our basement strength center features high-density rubber shock flooring, industrial exhaust ventilation, and calibrated cast-iron weights. Every barbell is straight, every cable pulley runs smoothly, and sanitation is maintained around the clock.",
      points: [
        "Heavy free-weight racks up to demanding strength thresholds",
        "Continuous machine calibration and hygiene sanitization",
        "Fresh air intake systems designed for underground endurance"
      ]
    },
    {
      icon: <ChainLinkIcon className="w-8 h-8 text-[#C84B19]" />,
      index: "03",
      title: "Supportive Evening Staff & Front Desk",
      summary: "Zero-ego atmosphere where coaches actually assist you on the floor.",
      description: "From our front desk reception to our evening floor supervisor Farhan, you will never be left guessing how to set up an exercise. We spot heavy sets, check your lower back alignment, and welcome lifters of every background with genuine respect.",
      points: [
        "Evening floor coach actively spotting and correcting technique",
        "Welcoming front desk reception that greets you by name",
        "Safe, respectful environment for beginners and powerlifters alike"
      ]
    },
    {
      icon: <AnvilIcon className="w-8 h-8 text-[#C84B19]" />,
      index: "04",
      title: "Expert Adaptive & Medical Modification",
      summary: "Patience and individual care led by standout specialist Coach Ghazal.",
      description: "Suffering from lumbar pain, joint stiffness, or recovering from surgery? Coach Ghazal has earned a standout reputation across Johar for her extraordinary patience and medical exercise adaptation, ensuring you build real strength safely.",
      points: [
        "Individual movement screening before loading spine or joints",
        "Specialized non-axial loading alternatives",
        "Proven success with clients managing chronic orthopedic concerns"
      ]
    }
  ];

  return (
    <section id="why-train" className="py-24 bg-[#121316] relative border-b border-[#2E3238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#C84B19] font-semibold mb-3">
            <span>The Iron Culture Standard</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#8B93A0]">Gulistan-e-Johar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
            WHY SERIOUS ATHLETES & BEGINNERS CHOOSE TO TRAIN HERE
          </h2>
          <p className="text-base text-[#9CA3AF] mt-4 font-sans leading-relaxed">
            Derived directly from 123+ real member reviews: an underground strength facility built on 
            uncompromised equipment hygiene, honest dues, and coaches who invest their time in your safety.
          </p>
        </div>

        {/* 4 Pillars Grid with sharp-card hover effect and staggered animation timing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.index}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="sharp-card bg-[#181A1F] border border-[#2E3238] p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#121316] border border-[#2E3238] group-hover:border-[#C84B19] transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-[#4B515D] group-hover:text-[#C84B19] transition-colors tabular-nums">
                    {pillar.index}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading uppercase text-white tracking-wide group-hover:text-[#E05822] transition-colors mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs uppercase font-heading font-semibold text-[#C84B19] tracking-wider mb-4">
                  {pillar.summary}
                </p>

                <p className="text-sm text-[#A0A7B5] leading-relaxed mb-6 font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2E3238]/60 space-y-2.5">
                {pillar.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#D0D5DD]">
                    <Check className="w-4 h-4 text-[#C84B19] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
