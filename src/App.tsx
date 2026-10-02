import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { About } from './components/About';
import { Services } from './components/Services';
import { MembershipPlans } from './components/MembershipPlans';
import { Classes } from './components/Classes';
import { PersonalTraining } from './components/PersonalTraining';
import { WomensFitness } from './components/WomensFitness';
import { Transformation } from './components/Transformation';
import { BmiCalculator } from './components/BmiCalculator';
import { Gallery } from './components/Gallery';
import { Schedule } from './components/Schedule';
import { Testimonials } from './components/Testimonials';
import { SocialSection } from './components/SocialSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MembershipModal } from './components/MembershipModal';
import { OffersModal } from './components/OffersModal';
import { MembershipPlan, GymClass } from './lib/gymData';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [isOffersModalOpen, setIsOffersModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section on scroll for navbar indicator
  useEffect(() => {
    const sectionIds = ['home', 'about', 'membership', 'classes', 'training', 'schedule', 'gallery', 'contact', 'faq'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenJoinModal = (plan?: MembershipPlan) => {
    if (plan) {
      setSelectedPlan(plan);
    } else {
      setSelectedPlan(null);
    }
    setIsJoinModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    // Open inquiry modal pre-seeded with this service
    setIsJoinModalOpen(true);
  };

  const handleBookClass = (cls: GymClass) => {
    setIsJoinModalOpen(true);
  };

  const handleClaimOffer = (offerTitle: string) => {
    setIsJoinModalOpen(true);
  };

  const handleConsultGoal = (goalInfo: string) => {
    setIsJoinModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#C7FF00] selection:text-black">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Promotional Top Strip */}
      <AnnouncementBar onViewOffers={() => setIsOffersModalOpen(true)} />

      {/* Main Sticky Navbar */}
      <Navbar
        onOpenJoinModal={() => handleOpenJoinModal()}
        activeSection={activeSection}
      />

      {/* Page Content in Exact Conversion Flow */}
      <main className="flex-1">
        {/* 1. Dramatic Hero Section */}
        <Hero onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* 2. Quick Attributes & Trust Bar */}
        <QuickStats />

        {/* 3. About The Fitness Revolution */}
        <About onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* 4. Services Grid */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Membership Plans & Rates */}
        <MembershipPlans onSelectPlan={(plan) => handleOpenJoinModal(plan)} />

        {/* 6. Classes & Disciplines */}
        <Classes onBookClass={handleBookClass} />

        {/* 7. Personal Training Focus */}
        <PersonalTraining onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* 8. Dedicated Women's Fitness */}
        <WomensFitness />

        {/* 9. Mindset & Transformation Motivation */}
        <Transformation onOpenJoinModal={() => handleOpenJoinModal()} />

        {/* 10. Interactive BMI Calculator */}
        <BmiCalculator onConsultGoal={handleConsultGoal} />

        {/* 11. Visual Gallery with Lightbox */}
        <Gallery />

        {/* 12. Gym Hours & Timetable */}
        <Schedule />

        {/* 13. Verified Reviews & Member Feedback */}
        <Testimonials />

        {/* 14. Social Media Previews */}
        <SocialSection />

        {/* 15. Facility Location & Google Map */}
        <LocationSection />

        {/* 16. Contact Desk & Message Form */}
        <ContactSection />

        {/* 17. Frequently Asked Questions */}
        <FaqSection />

        {/* 18. Final High-Conversion CTA */}
        <FinalCta onOpenJoinModal={() => handleOpenJoinModal()} />
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Desktop Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Mobile Bottom Sticky Bar */}
      <MobileStickyCta onOpenJoinModal={() => handleOpenJoinModal()} />

      {/* Membership Inquiry Modal */}
      <MembershipModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        selectedPlan={selectedPlan}
      />

      {/* Offers Modal */}
      <OffersModal
        isOpen={isOffersModalOpen}
        onClose={() => setIsOffersModalOpen(false)}
        onClaimOffer={handleClaimOffer}
      />
    </div>
  );
}
