import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck, Check, Clock, UserCheck } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Free Admission Pass');

  const topics = [
    {
      id: 'promo',
      label: 'Free Admission Promo',
      prefill: `Hi Iron Culture Fitness! I want to claim the Free Admission offer (valid until 31st July 2026). Please send me details on how to register.`
    },
    {
      id: 'ghazal',
      label: 'Coach Ghazal (Medical / Rehab)',
      prefill: `Hi Coach Ghazal! I'm inquiring about your specialized workout adaptations for medical conditions and joint/spinal care.`
    },
    {
      id: 'timing',
      label: 'Evening Training & Walk-in',
      prefill: `Hi Iron Culture Fitness! What are your walk-in pass rates and evening coaching hours today?`
    },
    {
      id: 'location',
      label: 'Directions to House #B10 Basement',
      prefill: `Hi! Can you share the exact Google Maps location pin for House #B10 Basement, Block 16, Gulistan-e-Johar?`
    }
  ];

  const handleSend = (textToSend?: string) => {
    const message = textToSend || customMessage || topics.find(t => t.label === selectedTopic)?.prefill || 'Hi Iron Culture Fitness!';
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick WhatsApp Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#181A1F] border-2 border-[#25D366] shadow-[0_10px_25px_rgba(0,0,0,0.8)] sharp-card overflow-hidden">
          {/* Header */}
          <div className="bg-[#121316] border-b border-[#2E3238] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#25D366] flex items-center justify-center text-white shrink-0">
                <MessageSquare className="w-5 h-5 fill-white text-[#121316]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
                  <span>Front Desk WhatsApp</span>
                  <span className="w-2 h-2 bg-[#25D366] inline-block animate-pulse"></span>
                </h4>
                <p className="text-[11px] text-[#9CA3AF] font-mono">
                  {GYM_DETAILS.phone} · Active daily
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-[#9CA3AF] hover:text-white border border-transparent hover:border-[#2E3238] cursor-pointer"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#16181D]">
            <div className="bg-[#121316] p-3 border border-[#2E3238] text-xs text-[#D0D5DD] leading-relaxed">
              <p className="font-heading uppercase text-white font-bold text-[11px] mb-1 text-[#25D366]">
                Iron Culture Concierge
              </p>
              Welcome to Iron Culture Fitness! Send us a message on WhatsApp for instant assistance, free admission vouchers, or Coach Ghazal consultations.
            </div>

            {/* Quick Topic Chips */}
            <div>
              <p className="text-[11px] font-heading uppercase tracking-wider text-[#8B93A0] mb-2 font-semibold">
                Select Quick Inquiry:
              </p>
              <div className="space-y-1.5">
                {topics.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleSend(t.prefill)}
                    className="w-full text-left p-2.5 bg-[#121316] hover:bg-[#20242B] border border-[#2E3238] hover:border-[#25D366] text-xs text-[#E5E7EB] flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <span className="font-sans text-[12px]">{t.label}</span>
                    <Send className="w-3 h-3 text-[#25D366] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="pt-2 border-t border-[#2E3238]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  placeholder="Type a custom message..."
                  className="flex-1 bg-[#121316] border border-[#2E3238] focus:border-[#25D366] px-3 py-2 text-xs text-white focus:outline-none"
                />
                <button
                  onClick={() => handleSend()}
                  className="px-3 py-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-heading text-xs uppercase font-bold flex items-center justify-center cursor-pointer border border-[#20BA5A]"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#8B93A0] pt-1">
              <span>Direct to +92 334 3288995</span>
              <span>Closes 10:30 PM</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button with Sharp Square Design */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sheen-btn flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-heading uppercase text-xs font-bold tracking-wider border-2 border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.6)] cursor-pointer transition-transform hover:scale-105"
        aria-label="Open WhatsApp Desk Support"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
        </div>
        <span className="hidden sm:inline">WhatsApp Desk</span>
        <span className="w-2 h-2 bg-white inline-block animate-ping sm:hidden"></span>
      </button>
    </div>
  );
};
