import React, { useState } from 'react';
import { FAQ_LIST } from '../data/gymData';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#121316] relative border-b border-[#2E3238]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#C84B19] font-semibold mb-3">
            <span>Clear Answers</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#8B93A0]">Policy Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base text-[#9CA3AF] mt-4 font-sans leading-relaxed">
            Everything you need to know regarding hours, walk-ins, Coach Ghazal's medical adaptations, 
            and claiming the Free Admission offer before 31st July 2026.
          </p>
        </div>

        {/* Accordion List with Sharp Square Corners and active borders */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`border transition-colors ${
                  isOpen ? 'border-[#C84B19] bg-[#181A1F]' : 'border-[#2E3238] bg-[#16181D] hover:border-[#4B515D]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 border shrink-0 transition-colors ${
                    isOpen ? 'border-[#C84B19] text-[#C84B19] bg-[#121316]' : 'border-[#2E3238] text-[#8B93A0]'
                  }`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#A0A7B5] leading-relaxed font-sans border-t border-[#2E3238]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
