import React, { useState } from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface LocationContactProps {
  onOpenClaimModal: () => void;
  selectedPlan?: string;
}

export const LocationContact: React.FC<LocationContactProps> = ({
  onOpenClaimModal,
  selectedPlan = 'Monthly Iron Pass'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'General Gym Membership (Free Admission)',
    timing: 'Evening (6:00 PM - 10:30 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitting(true);
    // Simulate real form dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="location" className="py-24 bg-[#14161B] relative border-b border-[#2E3238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#C84B19] font-semibold mb-3">
            <span>Find & Connect</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#8B93A0]">Gulistan-e-Johar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading uppercase text-white tracking-tight leading-tight">
            LOCATION, HOURS & DIRECT DESK INQUIRY
          </h2>
          <p className="text-base text-[#9CA3AF] mt-4 font-sans leading-relaxed">
            Visit our House #B10 basement facility directly in Block 16, call our front desk, 
            or reserve your Free Admission voucher below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Coordinates, Hours, Phone, Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address Card */}
              <div className="bg-[#181A1F] border border-[#2E3238] p-5 sharp-card">
                <div className="flex items-center gap-2.5 text-xs uppercase font-heading font-bold text-[#C84B19] mb-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Exact Address</span>
                </div>
                <p className="text-sm font-semibold text-white mb-1">
                  {GYM_DETAILS.address}
                </p>
                <p className="text-xs text-[#8B93A0]">
                  Convenient basement access, landmark in Block 16.
                </p>
              </div>

              {/* Hours Card */}
              <div className="bg-[#181A1F] border border-[#2E3238] p-5 sharp-card">
                <div className="flex items-center gap-2.5 text-xs uppercase font-heading font-bold text-[#C84B19] mb-2">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Operating Hours</span>
                </div>
                <p className="text-sm font-semibold text-white mb-1">
                  {GYM_DETAILS.hoursText}
                </p>
                <p className="text-xs text-[#8B93A0]">
                  {GYM_DETAILS.hoursDetail}
                </p>
              </div>

            </div>

            {/* Direct Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${GYM_DETAILS.rawPhone}`}
                className="sheen-btn flex-1 py-3.5 px-4 bg-[#C84B19] hover:bg-[#D45524] text-white border border-[#4B515D] flex items-center justify-center gap-2 text-xs font-heading uppercase font-bold tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Desk: {GYM_DETAILS.phone}</span>
              </a>

              <a
                href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Iron%20Culture%20Fitness,%20I%20would%20like%20to%20inquire%20about%20the%20Free%20Admission%20promo%20and%20memberships.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 bg-[#121316] hover:bg-[#1E2127] text-[#D0D5DD] hover:text-white border border-[#2E3238] flex items-center justify-center gap-2 text-xs font-heading uppercase font-bold tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#10B981]" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="border border-[#2E3238] overflow-hidden bg-[#121316] relative aspect-[16/9] min-h-[300px]">
              <iframe
                title="Iron Culture Fitness Map Location"
                src="https://maps.google.com/maps?q=Gulistan-e-Johar%20Block%2016%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-[#121316]/95 border border-[#2E3238] p-3 text-xs text-[#E5E7EB]">
                <p className="font-heading font-bold uppercase text-white">{GYM_DETAILS.name}</p>
                <p className="text-[11px] text-[#9CA3AF]">House #B10 Basement, Block 16, Johar</p>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry / Claim Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#181A1F] border-2 border-[#2E3238] p-8 sharp-card h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-[#C84B19] font-bold mb-2">
                  <span>Priority Booking</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#8B93A0]">Promo Valid Till July 31</span>
                </div>

                <h3 className="text-2xl font-bold font-heading uppercase text-white tracking-wide mb-2">
                  RESERVE YOUR FREE ADMISSION
                </h3>

                <p className="text-xs text-[#9CA3AF] mb-6 font-sans">
                  Leave your details and our front desk will verify your admission waiver (saving Rs. 2,500) within 2 business hours.
                </p>

                {submitted ? (
                  <div className="bg-[#121316] border border-[#10B981] p-6 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#10B981] mx-auto" />
                    <h4 className="text-xl font-heading font-bold text-white uppercase">
                      Pass Reservation Confirmed
                    </h4>
                    <p className="text-xs text-[#D0D5DD] font-sans">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your Free Admission pass for <strong className="text-[#C84B19]">{GYM_DETAILS.name}</strong> has been logged.
                    </p>
                    <div className="p-3 bg-[#181A1F] border border-[#2E3238] text-[11px] font-mono text-[#A0A7B5]">
                      Reference Code: <span className="text-white font-bold">IC-FREE-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
                    </div>

                    <a
                      href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                        `Hi Iron Culture Fitness! I just registered my Free Admission pass on the website.\nName: ${formData.name}\nPhone: ${formData.phone}\nProgram: ${formData.interest}\nTiming: ${formData.timing}${formData.message ? `\nNotes: ${formData.message}` : ''}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer border border-[#20BA5A]"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Send Pass Copy to Desk on WhatsApp</span>
                    </a>

                    <p className="text-xs text-[#8B93A0]">
                      Present this reference or your phone number ({formData.phone}) when you visit House #B10 Basement.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-heading uppercase text-[#C84B19] hover:underline pt-2 cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-[#A0A7B5] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Abbasi"
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 3XX XXXXXXX"
                        className="w-full bg-[#121316] border border-[#2E3238] focus:border-[#C84B19] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-mono tabular-nums"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-[#A0A7B5] mb-1">
                        Primary Training Focus
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-[#121316] border border-[#2E3238] focus:border-[#C84B19] px-4 py-3 text-xs text-white focus:outline-none transition-colors font-heading uppercase tracking-wider"
                      >
                        <option value="General Gym Membership (Free Admission)">General Gym Membership (Free Admission)</option>
                        <option value="Medical / Rehab Training with Coach Ghazal">Medical / Rehab Training with Coach Ghazal</option>
                        <option value="Women's Strength Program">Women's Strength Program</option>
                        <option value="Heavy Barbell Strength & Powerlifting">Heavy Barbell Strength & Powerlifting</option>
                        <option value="Personal 1-on-1 Coaching">Personal 1-on-1 Coaching</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-[#A0A7B5] mb-1">
                        Preferred Training Hours
                      </label>
                      <select
                        value={formData.timing}
                        onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                        className="w-full bg-[#121316] border border-[#2E3238] focus:border-[#C84B19] px-4 py-3 text-xs text-white focus:outline-none transition-colors font-heading uppercase tracking-wider"
                      >
                        <option value="Morning (6:00 AM - 12:00 PM)">Morning (6:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 5:00 PM)">Afternoon (12:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 10:30 PM)">Evening (5:00 PM - 10:30 PM)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-[#A0A7B5] mb-1">
                        Injury / Health Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention any joint, spine, or medical considerations for Coach Ghazal"
                        className="w-full bg-[#121316] border border-[#2E3238] focus:border-[#C84B19] px-4 py-2.5 text-xs text-white focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="flex flex-col gap-2.5 pt-1">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="sheen-btn w-full py-4 bg-[#C84B19] hover:bg-[#D45524] text-white font-heading font-bold text-xs uppercase tracking-widest border border-[#4B515D] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{submitting ? 'Locking In Voucher...' : 'Lock In Free Admission Waiver'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (!formData.name || !formData.phone) {
                            alert('Please enter your name and phone number first.');
                            return;
                          }
                          const text = `Hi Iron Culture Fitness! I want to claim the Free Admission offer.\nName: ${formData.name}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\nPreferred Timing: ${formData.timing}${formData.message ? `\nNotes: ${formData.message}` : ''}`;
                          window.open(`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
                        }}
                        className="w-full py-3 bg-[#121316] hover:bg-[#1E2127] text-[#25D366] hover:text-white border border-[#25D366]/60 hover:border-[#25D366] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 fill-[#25D366]" />
                        <span>Instant Inquire on WhatsApp (+92 334 3288995)</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <div className="pt-4 mt-6 border-t border-[#2E3238] flex items-center justify-between text-[11px] text-[#8B93A0]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C84B19]" />
                  <span>Zero Spam Guarantee</span>
                </div>
                <span>Offer ends July 31, 2026</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
