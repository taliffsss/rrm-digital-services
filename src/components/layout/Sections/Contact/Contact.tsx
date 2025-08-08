'use client';

import { CONTACT_CONTENT } from '@/constants/content';
import GlowBackground from '@/components/ui/GlowBackground';
import ContactUs from '@/components/layout/Forms/ContactUs';
import { cn } from '@/lib/utils';
import { ContactProps } from './Contact.types';

export default function ContactSection({
  className,
  onSubmitSuccess,
  onSubmitError,
}: ContactProps) {
  // Default handlers if not provided
  const handleContactSuccess = (data: unknown) => {
    console.log('Contact form submitted successfully:', data);
    if (onSubmitSuccess) {
      onSubmitSuccess(data);
    }
    // You can add additional success handling here
    // For example: send analytics event, show toast notification, etc.
  };

  const handleContactError = (error: unknown) => {
    console.error('Contact form submission failed:', error);
    if (onSubmitError) {
      onSubmitError(error);
    }
    // You can add additional error handling here
    // For example: send error to monitoring service, show fallback options, etc.
  };

  return (
    <section id="contact" className={cn('section relative', className)}>
      {/* Background Glowing Effect for contact section */}
      <GlowBackground variant="contact" color="primary" intensity="strong" />

      <div className="container-content relative">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="heading-3">{CONTACT_CONTENT.title}</h3>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          {/* Contact Form - Using the ContactUs component */}
          <ContactUs
            onSubmitSuccess={handleContactSuccess}
            onSubmitError={handleContactError}
          />
        </div>
      </div>
    </section>
  );
}
