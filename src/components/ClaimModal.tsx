import React, { useState } from 'react';
import { X, Tag, Check, CheckCircle2, ShieldCheck, Printer, Download, MessageSquare } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface ClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
}

export const ClaimModal: React.FC<ClaimModalProps> = ({
  isOpen,
  onClose,
  preselectedPlan = 'Monthly Iron Pass'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(preselectedPlan);
  const [isGenerated, setIsGenerated] = useState(false);
  const [voucherId, setVoucherId] = useState('');

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const code = `IC-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setVoucherId(code);
    setIsGenerated(true);
  };

  const handleReset = () => {
    setIsGenerated(false);
    onClose();
  };

  const sendVoucherToWhatsApp = () => {
    const text = `Hi Iron Culture Fitness! I generated a Free Admission Voucher on the website:\n• Voucher ID: ${voucherId}\n• Name: ${name}\n• Phone: ${phone}\n• Selected Plan: ${selectedPlan}\n• Promo: 100% Free Admission (Saved Rs. 2,500)\nPlease verify my registration for House #B10 Basement!`;
    const url = `https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#181A1F] border-2 border-[#C84B19] max-w-lg w-full p-6 sm:p-8 sharp-card relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 border border-[#2E3238] hover:border-[#C84B19] text-[#D0D5DD] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isGenerated ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-[#C84B19] font-bold mb-2">
              <Tag className="w-4 h-4" />
              <span>Limited-Time Season Voucher</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading uppercase text-white tracking-wide mb-2">
              CLAIM FREE ADMISSION PASS
            </h3>

            <p className="text-xs sm:text-sm text-[#A0A7B5] mb-6 font-sans">
              Save Rs. 2,500 on admission. Valid for any new membership registration at our 
              Gulistan-e-Johar facility on or before <strong className="text-white">31st July 2026</strong>.
            </p>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-[#A0A7B5] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Asad Siddiqui"
                  className="w-full bg-[#121316] border border-[#2E3238] focus:border-[#C84B19] px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-[#A0A7B5] mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full bg-[#121316] border border-[#2E3238] focus:border-[#C84B19] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-mono tabular-nums"
                />
              </div>

              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-[#A0A7B5] mb-1">
                  Preferred Membership Tier
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full bg-[#121316] border border-[#2E3238] focus:border-[#C84B19] px-4 py-3 text-xs text-white focus:outline-none transition-colors font-heading uppercase tracking-wider"
                >
                  <option value="Monthly Iron Pass (Rs. 3,500/mo)">Monthly Iron Pass (Rs. 3,500/mo)</option>
                  <option value="Quarterly Strength (Rs. 9,500/3 mos)">Quarterly Strength (Rs. 9,500/3 mos)</option>
                  <option value="Annual Iron Culture (Rs. 32,000/yr)">Annual Iron Culture (Rs. 32,000/yr)</option>
                  <option value="Specialized Rehab with Coach Ghazal">Specialized Rehab with Coach Ghazal</option>
                </select>
              </div>

              <div className="bg-[#121316] border border-[#2E3238] p-3 text-xs text-[#D0D5DD] space-y-1">
                <div className="flex items-center justify-between text-[#8B93A0]">
                  <span>Regular Admission Fee:</span>
                  <span className="line-through font-mono">Rs. 2,500</span>
                </div>
                <div className="flex items-center justify-between text-white font-bold">
                  <span>Promo Admission Fee:</span>
                  <span className="text-[#C84B19] font-mono uppercase">Rs. 0 (100% OFF)</span>
                </div>
              </div>

              <button
                type="submit"
                className="sheen-btn w-full py-4 bg-[#C84B19] hover:bg-[#D45524] text-white font-heading font-bold text-xs uppercase tracking-widest border border-[#4B515D] transition-colors cursor-pointer"
              >
                Generate Official Admission Voucher
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#8B93A0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C84B19]" />
              <span>No credit card required. Show voucher at desk upon visit.</span>
            </div>
          </div>
        ) : (
          /* Voucher Digital Ticket State */
          <div className="text-center space-y-4">
            <div className="inline-flex p-3 bg-[#121316] border border-[#10B981] text-[#10B981] mb-1">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold font-heading uppercase text-white tracking-wide">
              FREE ADMISSION VOUCHER ACTIVE
            </h3>

            {/* Industrial Voucher Pass Card */}
            <div className="bg-[#121316] border-2 border-dashed border-[#C84B19] p-6 text-left space-y-4">
              <div className="flex items-center justify-between border-b border-[#2E3238] pb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#8B93A0] uppercase">Authorized Venue</span>
                  <p className="font-heading font-bold uppercase text-white text-sm">{GYM_DETAILS.name}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#8B93A0] uppercase">Voucher ID</span>
                  <p className="font-mono font-bold text-[#C84B19] text-xs tabular-nums">{voucherId}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-[#8B93A0] uppercase font-heading">Bearer Name:</span>
                  <p className="font-semibold text-white">{name}</p>
                </div>
                <div>
                  <span className="text-[10px] text-[#8B93A0] uppercase font-heading">Phone:</span>
                  <p className="font-mono text-white tabular-nums">{phone}</p>
                </div>
                <div>
                  <span className="text-[10px] text-[#8B93A0] uppercase font-heading">Waiver Applied:</span>
                  <p className="font-bold text-[#10B981]">100% Free Admission</p>
                </div>
                <div>
                  <span className="text-[10px] text-[#8B93A0] uppercase font-heading">Expiry Date:</span>
                  <p className="font-mono text-white">31 July 2026</p>
                </div>
              </div>

              <div className="border-t border-[#2E3238] pt-3 text-[11px] text-[#9CA3AF]">
                <p>📍 House #B10 Basement, Block 16, Gulistan-e-Johar, Karachi</p>
                <p>🕒 Open Daily until 10:30 PM</p>
              </div>
            </div>

            {/* Send to WhatsApp Action */}
            <button
              onClick={sendVoucherToWhatsApp}
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer border border-[#20BA5A]"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Forward Voucher to Gym on WhatsApp</span>
            </button>

            <p className="text-xs text-[#A0A7B5] font-sans">
              A copy has been recorded in our front-desk system. You can take a screenshot or provide your phone number when you walk into the gym.
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-3 bg-[#121316] hover:bg-[#22252C] text-[#E5E7EB] border border-[#2E3238] text-xs font-heading uppercase font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save</span>
              </button>

              <button
                onClick={handleReset}
                className="sheen-btn flex-1 py-3 bg-[#C84B19] hover:bg-[#D45524] text-white border border-[#4B515D] text-xs font-heading uppercase font-bold tracking-wider cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
