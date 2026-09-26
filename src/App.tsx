import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoBanner } from './components/PromoBanner';
import { TrustBar } from './components/TrustBar';
import { WhyTrainHere } from './components/WhyTrainHere';
import { Programs } from './components/Programs';
import { Trainers } from './components/Trainers';
import { FacilityGallery } from './components/FacilityGallery';
import { MembershipPlans } from './components/MembershipPlans';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { ClaimModal } from './components/ClaimModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const [claimModalOpen, setClaimModalOpen] = useState(false);
  const [selectedPlanForClaim, setSelectedPlanForClaim] = useState('Monthly Iron Pass');

  const handleOpenClaimModal = () => {
    setClaimModalOpen(true);
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanForClaim(planName);
  };

  return (
    <div className="min-h-screen bg-[#121316] text-[#E5E7EB] font-sans selection:bg-[#C84B19] selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenClaimModal={handleOpenClaimModal} />

      <main>
        {/* 1. Hero Section */}
        <Hero onOpenClaimModal={handleOpenClaimModal} />

        {/* 2. Limited-Time Offer Banner */}
        <PromoBanner onOpenClaimModal={handleOpenClaimModal} />

        {/* 3. Trust Bar (Rating, Reviews, Hours, Phone) */}
        <TrustBar />

        {/* 4. Why Train Here */}
        <WhyTrainHere />

        {/* 5. Programs & Classes */}
        <Programs onOpenClaimModal={handleOpenClaimModal} />

        {/* 6. Meet the Trainers */}
        <Trainers onOpenClaimModal={handleOpenClaimModal} />

        {/* 7. Facility Gallery */}
        <FacilityGallery />

        {/* 8. Membership Plans */}
        <MembershipPlans 
          onOpenClaimModal={handleOpenClaimModal}
          onSelectPlan={handleSelectPlan}
        />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Location & Contact with Inquiry Form */}
        <LocationContact 
          onOpenClaimModal={handleOpenClaimModal}
          selectedPlan={selectedPlanForClaim}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Concierge Widget */}
      <WhatsAppWidget />

      {/* Interactive Free Admission Voucher Claim Modal */}
      <ClaimModal
        isOpen={claimModalOpen}
        onClose={() => setClaimModalOpen(false)}
        preselectedPlan={selectedPlanForClaim}
      />
    </div>
  );
}
