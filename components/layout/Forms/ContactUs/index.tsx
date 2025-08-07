'use client';

import React, { useState } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/ui/Button';

// Form data interface
interface ContactFormData {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
}

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  contactNumber: Yup.string()
    .matches(/^[+]?[\d\s\-\(\)]+$/, 'Invalid contact number format')
    .min(10, 'Contact number must be at least 10 digits')
    .required('Contact number is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
    .required('Message is required'),
});

// Initial form values
const initialValues: ContactFormData = {
  name: '',
  email: '',
  contactNumber: '',
  message: '',
};

interface ContactUsProps {
  onSubmitSuccess?: (data: ContactFormData) => void;
  onSubmitError?: (error: unknown) => void;
}

const ContactUs: React.FC<ContactUsProps> = ({
  onSubmitSuccess,
  onSubmitError,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Handle form submission
  const handleSubmit = async (
    values: ContactFormData,
    { setSubmitting, resetForm }: FormikHelpers<ContactFormData>
  ) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Success handling
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });

      resetForm();
      onSubmitSuccess?.(values);
    } catch (error) {
      // Error handling
      setSubmitStatus({
        type: 'error',
        message:
          'Sorry, there was an error sending your message. Please try again.',
      });

      onSubmitError?.(error);
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-8 max-w-md mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting: formikSubmitting, errors, touched }) => (
          <Form className="space-y-4">
            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`p-3 rounded-lg text-sm font-body ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Name Field */}
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={`w-full px-4 py-3 bg-white/15 backdrop-blur-sm border rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] font-body focus:outline-none transition-colors ${
                  errors.name && touched.name
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-white/20 focus:border-[var(--accent-primary)]'
                }`}
              />
            </div>

            {/* Email and Contact Number Fields in one row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`w-full px-4 py-3 bg-white/15 backdrop-blur-sm border rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] font-body focus:outline-none transition-colors ${
                    errors.email && touched.email
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-white/20 focus:border-[var(--accent-primary)]'
                  }`}
                />
              </div>

              <div>
                <Field
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  className={`w-full px-4 py-3 bg-white/15 backdrop-blur-sm border rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] font-body focus:outline-none transition-colors ${
                    errors.contactNumber && touched.contactNumber
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-white/20 focus:border-[var(--accent-primary)]'
                  }`}
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                rows={4}
                className={`w-full px-4 py-3 bg-white/15 backdrop-blur-sm border rounded-lg text-[var(--text-primary)] placeholder-[var(--text-secondary)] font-body focus:outline-none transition-colors resize-none ${
                  errors.message && touched.message
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-white/20 focus:border-[var(--accent-primary)]'
                }`}
              />
            </div>

            {/* Send Button */}
            <div>
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full group font-body disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={formikSubmitting || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send
                    <svg
                      className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
