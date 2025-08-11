'use client';

import { Card, CardContent } from '@/components/ui/Card';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { AboutProps } from './About.types';
import { ABOUT_PILLARS } from './About.data';

export default function AboutSection({ className }: AboutProps) {
  return (
    <section id="about" className={cn('section section-compact', className)}>
      <div className="container-content">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 min-h-[600px]">
          {/* Left column: Title, badges, and description */}
          <div className="flex flex-col justify-center">
            <h3 className="heading-3 text-left">Who We Are</h3>

            {/* Description */}
            <div className="mt-4">
              <p className="font-body text-[var(--text-secondary)] leading-relaxed">
                At RRM Digital Services, we don&apos;t just build digital
                products — we bring ideas to life, shape them to perfection, and
                help them reach the world.
              </p>

              {/* Three pillars: Render, Refine, Mobilize */}
              <div className="mt-8 grid grid-cols-1 gap-4 max-w-4xl">
                {ABOUT_PILLARS.map(pillar => (
                  <Card
                    key={pillar.id}
                    variant="elevated"
                    className="group relative"
                  >
                    <CardContent className="card-content px-6 py-4 text-left">
                      <div className="flex items-center gap-5 mb-4">
                        <Icon
                          icon={pillar.icon}
                          className="w-8 h-8 text-[var(--accent-primary)]"
                          width={24}
                          height={24}
                        />
                        <h4 className="text-[var(--accent-primary)] font-semibold text-xl heading-5">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="font-body text-[var(--text-secondary)] leading-relaxed">
                        {pillar.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="font-body text-[var(--text-secondary)] leading-relaxed mt-8">
                We&apos;re a creative and driven team of developers, designers,
                and strategists focused on building future-ready solutions that
                help startups and businesses grow and succeed in the digital
                age.
              </p>

              <p className="font-body text-[var(--text-secondary)] leading-relaxed mt-8">
                RRM Digital Services — we render, refine, and mobilize your
                success.
              </p>
            </div>
          </div>

          {/* Right column: Team image with floating rectangles */}
          <div className="relative flex items-center">
            <div className="relative w-full">
              <Image
                src="/images/rrm.png"
                alt="Team collaboration"
                width={800}
                height={800}
                className="w-full h-auto rounded-lg object-cover"
                loading="eager"
              />

              {/* Floating rectangles - always visible with animation */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top-left rectangles - overlapping outside */}
                <div
                  className="absolute -top-4 left-4 w-16 h-10 bg-[var(--accent-primary)] opacity-60 rounded-sm shadow-lg"
                  style={{
                    animation: 'float-smooth 3s ease-in-out infinite',
                  }}
                ></div>
                <div
                  className="absolute -top-8 left-24 w-6 h-6 bg-[var(--accent-primary)] opacity-40 rounded-sm shadow-md"
                  style={{
                    animation: 'float-smooth 3s ease-in-out infinite 0.5s',
                  }}
                ></div>

                {/* Bottom-right rectangles - overlapping outside */}
                <div
                  className="absolute bottom-4 -right-4 w-16 h-10 bg-[var(--accent-primary)] opacity-60 rounded-sm shadow-lg"
                  style={{
                    animation: 'float-smooth 3s ease-in-out infinite 0.2s',
                  }}
                ></div>
                <div
                  className="absolute bottom-0 right-14 w-6 h-6 bg-[var(--accent-primary)] opacity-40 rounded-sm shadow-md"
                  style={{
                    animation: 'float-smooth 3s ease-in-out infinite 0.7s',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
