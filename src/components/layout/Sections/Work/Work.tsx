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
    <section id="work" className={cn('section section-compact', className)}>
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="heading-3">Our Work</h3>
        </div>

        {/* Filter Badges */}
        <div className="mt-4 flex justify-center items-center gap-3 lg:gap-4">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ROWS.flatMap(row => row.items).map(item => (
              <div
                key={`work-item-${item.id}`}
                className="group relative overflow-hidden rounded-lg border border-[var(--border-primary)] bg-[var(--bg-card)] hover:border-[var(--accent-primary)] hover:shadow-[0_0_30px_rgba(118,183,20,0.3)] transition-all duration-300 cursor-pointer"
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <div className="relative w-full h-48 sm:h-56 md:h-64">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      {/* Hover Arrow */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <div className="w-8 h-8 bg-[var(--accent-primary)] rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </div>
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
                  </a>
                ) : (
                  <div className="relative w-full h-48 sm:h-56 md:h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
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
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
