'use client';

import { FOOTER_SECTIONS } from '@/constants/navigation';
import { COMPANY_INFO } from '@/constants/content';
import Footer from '@/components/layout/Footer';
import {
  HeroSection,
  ServicesSection,
  WorkSection,
  ProcessSection,
  AboutSection,
  ContactSection,
} from '@/components/layout/Sections';

export default function Home() {
  // Handle successful form submission
  const handleContactSuccess = (data: unknown) => {
    console.log('Contact form submitted successfully:', data);
    // You can add additional success handling here
    // For example: send analytics event, show toast notification, etc.
  };

  // Handle form submission error
  const handleContactError = (error: unknown) => {
    console.error('Contact form submission failed:', error);
    // You can add additional error handling here
    // For example: send error to monitoring service, show fallback options, etc.
  };

  return (
    <div className="overflow-hidden lg:overflow-visible">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Work Section */}
      <WorkSection />

      {/* Process Section */}
      <ProcessSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection
        onSubmitSuccess={handleContactSuccess}
        onSubmitError={handleContactError}
      />

      {/* Footer */}
      <Footer
        sections={FOOTER_SECTIONS}
        description={COMPANY_INFO.description}
      />
    </div>
  );
}
