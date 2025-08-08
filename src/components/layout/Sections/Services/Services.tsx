'use client';

import { SERVICES } from '@/constants/content';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ServicesProps } from './Services.types';
import { getServiceIcon } from './Services.utils';

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

        {/* Services Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(service => (
              <Card
                key={service.id}
                variant="elevated"
                className="card-effect group relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(118,183,20,0.3)]"
              >
                <span className="floating-elements">
                  <span className="small-rect-1"></span>
                  <span className="small-rect-2"></span>
                  <span className="small-rect-3"></span>
                  <span className="small-rect-4"></span>
                </span>
                <CardContent className="card-content p-6">
                  <div className="mb-4">
                    <Image
                      src={getServiceIcon(service.id)}
                      alt={service.title}
                      width={48}
                      height={48}
                      loading="eager"
                      className="w-12 h-12 service-icon"
                    />
                  </div>
                  <h5 className="heading-5 mb-3">{service.title}</h5>
                  <p className="font-body mb-4 text-[var(--text-secondary)]">
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
                    className="w-full font-body transition-all duration-300 group-hover:bg-[var(--btn-primary-bg)] group-hover:text-[var(--btn-primary-text)] group-hover:border-[var(--btn-primary-bg)]"
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
