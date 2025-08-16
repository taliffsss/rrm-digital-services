'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { SERVICES } from '@/constants/content';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { ServicesProps } from './Services.types';
import { getServiceIconName } from './Services.utils';
import { Icon } from '@iconify/react';
import useEmblaCarousel from 'embla-carousel-react';

export default function ServicesSection({ className }: ServicesProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    dragFree: false,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (!emblaApi || !isAutoPlaying) return;

    autoPlayIntervalRef.current = setInterval(() => {
      if (emblaApi && isAutoPlaying) {
        emblaApi.scrollNext();
      }
    }, 10000); // 10 seconds
  }, [emblaApi, isAutoPlaying]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  }, []);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    stopAutoPlay();
  }, [stopAutoPlay]);

  const resumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
    startAutoPlay();
  }, [startAutoPlay]);

  // Handle user interaction - pause auto-play temporarily
  const handleUserInteraction = useCallback(() => {
    pauseAutoPlay();

    // Resume auto-play after 5 seconds of no interaction
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }

    userInteractionTimeoutRef.current = setTimeout(() => {
      resumeAutoPlay();
    }, 5000);
  }, [pauseAutoPlay, resumeAutoPlay]);

  // Set up event listeners
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    // Add user interaction listeners
    emblaApi.on('pointerDown', handleUserInteraction);
    emblaApi.on('init', handleUserInteraction);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('pointerDown', handleUserInteraction);
      emblaApi.off('init', handleUserInteraction);
    };
  }, [emblaApi, onSelect, handleUserInteraction]);

  // Start auto-play when component mounts or emblaApi changes
  useEffect(() => {
    if (emblaApi && isAutoPlaying) {
      startAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [emblaApi, isAutoPlaying, startAutoPlay, stopAutoPlay]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className={cn('section section-compact', className)}>
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="heading-3">What We Do</h3>
        </div>

        {/* Badge Navigation */}
        <div className="mt-4 flex justify-center items-center gap-3 lg:gap-4">
          {['Design', 'Code', 'Deliver'].map((badge, index) => (
            <Badge
              key={`services-${badge}-${index}`}
              size="md"
              className="font-body"
            >
              {badge}
            </Badge>
          ))}
        </div>

        {/* Services Carousel */}
        <div className="w-full max-w-6xl mx-auto mt-6">
          {/* Cards Container */}
          <div
            className="overflow-visible md:overflow-hidden py-12"
            ref={emblaRef}
          >
            <div className="embla__container flex">
              {SERVICES.map(service => (
                <div
                  key={service.id}
                  className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pr-6"
                >
                  <Card
                    variant="elevated"
                    className="card-effect group relative transition-all duration-300 h-full"
                  >
                    <span className="floating-elements">
                      <span className="small-rect-1"></span>
                      <span className="small-rect-2"></span>
                      <span className="small-rect-3"></span>
                      <span className="small-rect-4"></span>
                    </span>
                    <CardContent className="card-content !p-7 flex flex-col h-full">
                      <div className="mb-3">
                        <Icon
                          icon={getServiceIconName(service.id)}
                          width={48}
                          height={48}
                          className="w-16 h-16 text-[var(--accent-primary)]"
                        />
                      </div>
                      <h5 className="heading-5 mb-2">{service.title}</h5>
                      <p className="font-body mb-3 text-[var(--text-secondary)] flex-grow">
                        {service.description}
                      </p>
                      <div className="mb-3">
                        <ul className="space-y-2">
                          {service.includes.map(item => (
                            <p
                              key={item}
                              className="font-body flex items-center text-[var(--text-secondary)]"
                            >
                              <span className="mr-2 text-[var(--accent-primary)]">
                                ✓
                              </span>
                              {item}
                            </p>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation and Indicators - Below the cards */}
          <div className="flex flex-col items-center gap-4">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => {
                  scrollPrev();
                  handleUserInteraction();
                }}
                className="w-10 h-10 rounded-full border border-[var(--border-primary)] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-center group"
                aria-label="Previous slide"
              >
                <svg
                  className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Slider Indicators */}
              <div className="flex items-center gap-2">
                {SERVICES.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      scrollTo(index);
                      handleUserInteraction();
                    }}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      selectedIndex === index
                        ? 'bg-[var(--accent-primary)] w-4'
                        : 'bg-[var(--border-primary)] hover:bg-[var(--text-secondary)]'
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  scrollNext();
                  handleUserInteraction();
                }}
                className="w-10 h-10 rounded-full border border-[var(--border-primary)] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-center group"
                aria-label="Next slide"
              >
                <svg
                  className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
