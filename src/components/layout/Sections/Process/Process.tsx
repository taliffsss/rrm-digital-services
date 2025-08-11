'use client';

import { PROCESS_STEPS } from '@/constants/content';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ProcessProps } from './Process.types';
import { getStepNumber } from './Process.utils';

export default function ProcessSection({ className }: ProcessProps) {
  return (
    <section id="process" className={cn('section section-compact', className)}>
      <div className="container-content">
        {/* Two-column layout for title and badges */}
        <div className="flex flex-row items-end gap-8 lg:gap-12 mb-16">
          {/* Left column: Title and badges */}
          <div className="lg:w-auto">
            <h3 className="heading-3 text-left">How We Work</h3>

            {/* Badge Navigation */}
            <div className="mt-4 flex flex-wrap items-center gap-3 lg:gap-4">
              {['Clarity', 'Structure', 'Results'].map((badge, index) => (
                <Badge
                  key={`process-${badge}-${index}`}
                  size="md"
                  className="font-body"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right column: Solid line */}
          <div className="flex-1 flex items-end">
            <div className="h-0.5 w-full bg-[var(--accent-primary)]"></div>
          </div>
        </div>

        {/* Process Steps Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map(step => (
              <Card
                key={step.id}
                variant="elevated"
                className="card-effect group relative transition-all duration-300"
              >
                <span className="floating-elements">
                  <span className="small-rect-1"></span>
                  <span className="small-rect-2"></span>
                  <span className="small-rect-3"></span>
                  <span className="small-rect-4"></span>
                </span>
                <CardContent className="card-content p-6 sm:p-7 lg:p-8 text-left">
                  <div className="mb-4">
                    <h2 className="font-orbitron text-[var(--accent-primary)]">
                      {String(getStepNumber(step.id)).padStart(2, '0')}
                    </h2>
                  </div>
                  <h5 className="heading-5 mb-3">{step.title}</h5>
                  <p className="font-body text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-12 sm:mt-14">
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 sm:p-7 lg:p-8 border border-[var(--border-primary)]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-7 lg:gap-8 text-center lg:text-left">
              {/* Profile images and text - grouped together */}
              <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-5 lg:gap-6">
                {/* Circular profile images */}
                <div className="flex -space-x-4">
                  <Image
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt="Team member 1"
                    className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    width={50}
                    height={50}
                    loading="eager"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="Team member 2"
                    className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    width={50}
                    height={50}
                    loading="eager"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Team member 3"
                    className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    width={50}
                    height={50}
                    loading="eager"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt="Team member 4"
                    className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    width={50}
                    height={50}
                    loading="eager"
                  />
                </div>

                {/* Text */}
                <div>
                  <h5 className="font-body text-[var(--text-primary)] text-base sm:text-lg">
                    Build with Teams That Don&apos;t Compromise on Quality
                  </h5>
                </div>
              </div>

              {/* Button */}
              <div>
                <Button
                  variant="primary"
                  size="md"
                  className="group font-body cursor-pointer"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Connect with us</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
