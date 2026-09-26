import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface NavbarProps {
  onOpenClaimModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenClaimModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Solidifies and darkens on scroll rather than shrinking
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const url = `https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Iron%20Culture%20Fitness!%20I'm%20inquiring%20about%20the%20Free%20Admission%20offer%20and%20gym%20hours.`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#0D0E11]/95 backdrop-blur-md border-b border-[#2E3238] shadow-2xl'
          : 'bg-transparent border-b border-[#2E3238]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark in Oswald display font */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B19]"
            aria-label="Iron Culture Fitness Home"
          >
            <div className="w-8 h-8 bg-[#C84B19] flex items-center justify-center font-heading font-bold text-white text-lg tracking-wider border border-[#4B515D]">
              IC
            </div>
            <span className="font-heading text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-[#C84B19] transition-colors">
              IRON CULTURE
            </span>
          </a>

          {/* Zone 2: 4-6 text navigation links with clean hover styling */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a
              href="#why-train"
              className="text-[#D0D5DD] hover:text-[#C84B19] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C84B19] hover:after:w-full after:transition-all uppercase font-heading text-xs tracking-widest"
            >
              Why Iron Culture
            </a>
            <a
              href="#programs"
              className="text-[#D0D5DD] hover:text-[#C84B19] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C84B19] hover:after:w-full after:transition-all uppercase font-heading text-xs tracking-widest"
            >
              Programs
            </a>
            <a
              href="#trainers"
              className="text-[#D0D5DD] hover:text-[#C84B19] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C84B19] hover:after:w-full after:transition-all uppercase font-heading text-xs tracking-widest"
            >
              Coaches
            </a>
            <a
              href="#facility"
              className="text-[#D0D5DD] hover:text-[#C84B19] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C84B19] hover:after:w-full after:transition-all uppercase font-heading text-xs tracking-widest"
            >
              Facility
            </a>
            <a
              href="#membership"
              className="text-[#D0D5DD] hover:text-[#C84B19] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C84B19] hover:after:w-full after:transition-all uppercase font-heading text-xs tracking-widest"
            >
              Membership
            </a>
            <a
              href="#location"
              className="text-[#D0D5DD] hover:text-[#C84B19] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C84B19] hover:after:w-full after:transition-all uppercase font-heading text-xs tracking-widest"
            >
              Location
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions + WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-heading font-medium tracking-wider text-[#25D366] border border-[#2E3238] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors uppercase cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
              <span className="hidden xl:inline">WhatsApp</span>
            </button>
            <a
              href={`tel:${GYM_DETAILS.rawPhone}`}
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-xs font-heading font-medium tracking-wider text-[#D0D5DD] border border-[#2E3238] hover:border-[#4B515D] hover:text-white transition-colors uppercase"
            >
              <Phone className="w-3.5 h-3.5 text-[#C84B19]" />
              <span className="tabular-nums font-mono">{GYM_DETAILS.phone}</span>
            </a>
            <button
              onClick={onOpenClaimModal}
              className="sheen-btn px-5 py-2.5 bg-[#C84B19] hover:bg-[#D45524] text-white font-heading font-semibold text-xs tracking-widest uppercase border border-[#4B515D] transition-colors cursor-pointer"
            >
              Free Admission Pass
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={openWhatsApp}
              className="p-2 border border-[#25D366] text-[#25D366] bg-[#25D366]/10 cursor-pointer"
              aria-label="Open WhatsApp chat"
            >
              <MessageSquare className="w-4 h-4 fill-[#25D366]" />
            </button>
            <button
              onClick={onOpenClaimModal}
              className="sheen-btn px-3 py-2 bg-[#C84B19] text-white font-heading text-xs uppercase tracking-wider border border-[#4B515D]"
            >
              Claim Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#D0D5DD] hover:text-white border border-[#2E3238]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0E11] border-b border-[#2E3238] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-heading uppercase text-sm tracking-wider">
            <a
              href="#why-train"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D0D5DD] hover:text-[#C84B19] py-2 border-b border-[#1E2127]"
            >
              Why Iron Culture
            </a>
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D0D5DD] hover:text-[#C84B19] py-2 border-b border-[#1E2127]"
            >
              Programs & Classes
            </a>
            <a
              href="#trainers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D0D5DD] hover:text-[#C84B19] py-2 border-b border-[#1E2127]"
            >
              Meet the Coaches
            </a>
            <a
              href="#facility"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D0D5DD] hover:text-[#C84B19] py-2 border-b border-[#1E2127]"
            >
              Facility Gallery
            </a>
            <a
              href="#membership"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D0D5DD] hover:text-[#C84B19] py-2 border-b border-[#1E2127]"
            >
              Membership Plans
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D0D5DD] hover:text-[#C84B19] py-2 border-b border-[#1E2127]"
            >
              FAQ
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D0D5DD] hover:text-[#C84B19] py-2"
            >
              Location & Contact
            </a>
          </nav>

          <div className="pt-4 border-t border-[#2E3238] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-heading font-medium tracking-wider text-[#25D366] border border-[#25D366] bg-[#25D366]/10 uppercase cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-[#25D366]" />
              <span>Chat on WhatsApp: {GYM_DETAILS.phone}</span>
            </button>
            <a
              href={`tel:${GYM_DETAILS.rawPhone}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-heading font-medium tracking-wider text-[#D0D5DD] border border-[#2E3238] uppercase"
            >
              <Phone className="w-4 h-4 text-[#C84B19]" />
              <span>Call Us: {GYM_DETAILS.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenClaimModal();
              }}
              className="sheen-btn w-full py-3 bg-[#C84B19] text-white font-heading font-bold text-xs tracking-widest uppercase border border-[#4B515D]"
            >
              Claim Free Admission (Until 31 July 2026)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
