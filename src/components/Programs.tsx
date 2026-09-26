import React, { useState } from 'react';
import { PROGRAMS } from '../data/gymData';
import { ArrowRight, CheckSquare, Clock } from 'lucide-react';

interface ProgramsProps {
  onOpenClaimModal: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenClaimModal }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredPrograms = activeTab === 'all' 
    ? PROGRAMS 
    : activeTab === 'specialty'
    ? PROGRAMS.filter(p => p.id === 'womens-adaptive' || p.id === 'medical-rehab')
    : PROGRAMS.filter(p => p.id !== 'womens-adaptive' && p.id !== 'medical-rehab');

  return (
    <section id="programs" className="py-24 bg-[#14161B] relative border-b border-[#2E3238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#C84B19] font-semibold mb-3">
              <span>Disciplines & Guidance</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#8B93A0]">Tailored Pacing</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
              PROGRAMS BUILT FOR MEASURABLE PROGRESS
            </h2>
            <p className="text-base text-[#9CA3AF] mt-3 font-sans">
              From competitive barbell powerlifting to specialized medical workout adaptation led by Coach Ghazal.
            </p>
          </div>

          {/* Clean Segmented Filter Controls (functional buttons with handlers) */}
          <div className="flex items-center gap-1 bg-[#121316] p-1 border border-[#2E3238] self-start md:self-end">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-heading uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#C84B19] text-white font-bold'
                  : 'text-[#8B93A0] hover:text-white'
              }`}
            >
              All Disciplines ({PROGRAMS.length})
            </button>
            <button
              onClick={() => setActiveTab('specialty')}
              className={`px-4 py-2 text-xs font-heading uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'specialty'
                  ? 'bg-[#C84B19] text-white font-bold'
                  : 'text-[#8B93A0] hover:text-white'
              }`}
            >
              Women's & Rehab Specialty
            </button>
            <button
              onClick={() => setActiveTab('strength')}
              className={`px-4 py-2 text-xs font-heading uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'strength'
                  ? 'bg-[#C84B19] text-white font-bold'
                  : 'text-[#8B93A0] hover:text-white'
              }`}
            >
              Iron & Hypertrophy
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program, idx) => {
            const isHighlight = program.id === 'womens-adaptive' || program.id === 'medical-rehab';

            return (
              <div
                key={program.id}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`sharp-card bg-[#181A1F] border p-7 flex flex-col justify-between group ${
                  isHighlight ? 'border-[#C84B19]/70 bg-[#1A1817]' : 'border-[#2E3238]'
                }`}
              >
                <div>
                  {/* Category kicker */}
                  <div className="flex items-center justify-between text-xs mb-3 font-heading uppercase tracking-wider">
                    <span className={isHighlight ? 'text-[#E05822] font-bold' : 'text-[#8B93A0]'}>
                      {program.category}
                    </span>
                    {isHighlight && (
                      <span className="text-[10px] text-[#C84B19] font-mono border border-[#C84B19]/40 px-2 py-0.5">
                        Coach Ghazal Special
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-heading uppercase text-white tracking-wide group-hover:text-[#E05822] transition-colors mb-3">
                    {program.title}
                  </h3>

                  <p className="text-sm text-[#A0A7B5] leading-relaxed mb-6 font-sans">
                    {program.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#D0D5DD]">
                        <CheckSquare className="w-3.5 h-3.5 text-[#C84B19] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2E3238]/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#8B93A0]">
                    <Clock className="w-3.5 h-3.5 text-[#8B93A0]" />
                    <span className="text-[11px] font-mono">{program.schedule}</span>
                  </div>

                  <button
                    onClick={onOpenClaimModal}
                    className="text-xs font-heading uppercase tracking-wider text-[#C84B19] hover:text-white flex items-center gap-1 font-bold group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>Enroll With Free Pass</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
