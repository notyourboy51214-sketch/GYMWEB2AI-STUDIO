import React from 'react';

interface IconProps {
  className?: string;
}

// Industrial Barbell Icon
export const BarbellIcon: React.FC<IconProps> = ({ className = "w-6 h-6 text-[#8B93A0]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="M2 12h20" />
    <path d="M6 7v10" />
    <path d="M4 9v6" />
    <path d="M18 7v10" />
    <path d="M20 9v6" />
    <rect x="7" y="10" width="1" height="4" fill="currentColor" />
    <rect x="16" y="10" width="1" height="4" fill="currentColor" />
  </svg>
);

// Industrial Chain Link Icon
export const ChainLinkIcon: React.FC<IconProps> = ({ className = "w-6 h-6 text-[#8B93A0]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <rect x="3" y="8" width="8" height="8" rx="0" />
    <rect x="13" y="8" width="8" height="8" rx="0" />
    <line x1="9" y1="12" x2="15" y2="12" strokeWidth="3" />
  </svg>
);

// Industrial Weight Plate Icon
export const WeightPlateIcon: React.FC<IconProps> = ({ className = "w-6 h-6 text-[#8B93A0]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="3" x2="12" y2="7" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <line x1="3" y1="12" x2="7" y2="12" />
    <line x1="17" y1="12" x2="21" y2="12" />
  </svg>
);

// Industrial Anvil / Forged Stamp
export const AnvilIcon: React.FC<IconProps> = ({ className = "w-6 h-6 text-[#8B93A0]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="M4 8h16l-2 4h-3v4l3 3H6l3-3v-4H6L4 8z" />
    <line x1="3" y1="8" x2="21" y2="8" strokeWidth="2" />
  </svg>
);

// Industrial Shield / Armor Icon
export const ArmorShieldIcon: React.FC<IconProps> = ({ className = "w-6 h-6 text-[#8B93A0]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
    <path d="M12 2L4 5v7c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V5l-8-3z" />
    <line x1="12" y1="6" x2="12" y2="18" />
  </svg>
);
