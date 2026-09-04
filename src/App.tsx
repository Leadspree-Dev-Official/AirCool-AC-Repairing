/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PricingPlans } from './components/PricingPlans';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteBookingModal } from './components/QuoteBookingModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceId(undefined);
  };

  const handleExploreServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Bar matching reference */}
      <TopBar />

      {/* Main Navigation Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections matching reference layout */}
      <main className="flex-grow">
        {/* 1. Hero Section with SERVICE Watermark, Technician, & CTA */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Who We Are - Welcome To Ac Repair Service Section with 15+ Yrs Badge & Collage */}
        <WhoWeAre
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreServices={handleExploreServices}
        />

        {/* 3. Featured Services - Popular Repair Service 4-card Grid */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4. Our Recent Projects - Completed Projects Section with Dark Background */}
        <ProjectsSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 5. Metrics, Brand Support & Trust Highlights */}
        <WhyChooseUs />

        {/* 6. Pricing Packages & Plans */}
        <PricingPlans onSelectPlan={(planId) => handleOpenQuoteModal(planId)} />

        {/* 7. Client Reviews & Feedback */}
        <Testimonials />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. Contact & Emergency Callback Desk */}
        <ContactSection />
      </main>

      {/* Footer with Mandatory Developer & Powered By Links */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Interactive Get A Quote & Appointment Booking Modal */}
      <QuoteBookingModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedServiceId={selectedServiceId}
      />

      {/* Floating Mobile Sticky Action Bar */}
      <MobileQuickBar onOpenQuoteModal={() => handleOpenQuoteModal()} />
    </div>
  );
}
