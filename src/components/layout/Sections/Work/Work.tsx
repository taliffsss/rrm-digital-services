'use client';

import { WORK_FILTERS } from '@/constants/content';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { WorkProps } from './Work.types';
import { GALLERY_ROWS } from './Work.data';
import { getWidthClass } from './Work.utils';

export default function WorkSection({ className }: WorkProps) {
  return (
    <section id="work" className={cn('section', className)}>
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="heading-3">Our Work</h3>
        </div>

        {/* Filter Badges */}
        <div className="mt-8 flex justify-center items-center gap-3 lg:gap-4">
          {WORK_FILTERS.map((filter, index) => (
            <Badge
              key={`work-${filter.id}-${index}`}
              size="md"
              className="font-body"
            >
              {filter.label}
            </Badge>
          ))}
        </div>

        {/* Work Gallery */}
        <div className="mt-16">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {GALLERY_ROWS.map(row => (
              <div
                key={row.id}
                className="flex gap-4 sm:gap-6 md:gap-8 h-48 sm:h-56 md:h-64"
              >
                {row.items.map(item => (
                  <div
                    key={`work-item-${item.id}`}
                    className={`${getWidthClass(item.width)} group relative overflow-hidden rounded-lg border border-[var(--border-primary)] bg-[var(--bg-card)] hover:border-[var(--accent-primary)] hover:shadow-[0_0_30px_rgba(118,183,20,0.3)] transition-all duration-300 cursor-pointer`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      loading="eager"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <h4 className="font-body text-lg font-semibold mb-1 text-[var(--accent-primary)]">
                          {item.title}
                        </h4>
                        <p className="font-body text-sm text-[var(--text-secondary)]">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <Button variant="secondary" size="md" className="group font-body">
              View More
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
    </section>
  );
}
