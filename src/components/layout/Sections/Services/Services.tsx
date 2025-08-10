'use client';

import { SERVICES } from '@/constants/content';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { ServicesProps } from './Services.types';
import { getServiceIconName, getServiceIconColor } from './Services.utils';
import { Icon } from '@iconify/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel/carousel';

export default function ServicesSection({ className }: ServicesProps) {
  return (
    <section id="services" className={cn('section', className)}>
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="heading-3">What We Do</h3>
        </div>

        {/* Badge Navigation */}
        <div className="mt-8 flex justify-center items-center gap-3 lg:gap-4">
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
        <div className="mx-4">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="ml-0 py-8 mx-3">
              {SERVICES.map(service => (
                <CarouselItem
                  key={service.id}
                  className="px-4 md:basis-1/2 lg:basis-1/3 py-8"
                >
                  <Card
                    variant="elevated"
                    className="card-effect group relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(118,183,20,0.3)] h-full"
                  >
                    <span className="floating-elements">
                      <span className="small-rect-1"></span>
                      <span className="small-rect-2"></span>
                      <span className="small-rect-3"></span>
                      <span className="small-rect-4"></span>
                    </span>
                    <CardContent className="card-content p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <Icon
                          icon={getServiceIconName(service.id)}
                          color={getServiceIconColor(service.id)}
                          width={48}
                          height={48}
                          className="w-12 h-12 service-icon"
                        />
                      </div>
                      <h5 className="heading-5 mb-3">{service.title}</h5>
                      <p className="font-body mb-4 text-[var(--text-secondary)] flex-grow">
                        {service.description}
                      </p>
                      <div className="mb-4">
                        <ul className="space-y-1">
                          {service.includes.map(item => (
                            <li
                              key={item}
                              className="font-body flex items-center text-sm text-[var(--text-secondary)]"
                            >
                              <span className="mr-2 text-[var(--accent-primary)]">
                                ✓
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <h5 className="font-body mb-2 text-sm font-medium text-[var(--text-primary)]">
                        {service.footer}
                      </h5>
                      <Button
                        variant="secondary"
                        size="md"
                        className="cursor-pointer w-full font-body transition-all duration-300 group-hover:bg-[var(--btn-primary-bg)] group-hover:text-[var(--btn-primary-text)] group-hover:border-[var(--btn-primary-bg)] mt-auto"
                      >
                        Explore
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
