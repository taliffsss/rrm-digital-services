'use client';

import { cn } from '@/lib/utils';
import { FooterProps } from './Footer.types';
import Image from 'next/image';

const Footer = ({
  sections,
  logo,
  description,
  socialLinks,
  className,
}: FooterProps) => {
  return (
    <footer className={cn('bg-[var(--bg-primary)]', className)}>
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            {logo || (
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo/rrm_logo.svg"
                  alt="RRM DIGITAL"
                  width={500}
                  height={500}
                  className="h-16 w-auto"
                />
              </div>
            )}
            <div className="mb-6">
              <h3 className="font-body font-semibold text-[var(--text-primary)] mb-2">
                RRM Digital Services
              </h3>
              <p className="font-body text-[var(--text-secondary)]">
                design. code. deliver.
              </p>
            </div>
            {socialLinks && <div className="flex space-x-4">{socialLinks}</div>}
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
              {sections.map(section => (
                <div
                  key={section.title}
                  className={`flex-1 ${
                    section.title === 'Contact' ? 'block' : 'hidden sm:block'
                  }`}
                >
                  <h5 className="font-title text-[var(--text-primary)] mb-4">
                    {section.title}
                  </h5>
                  <ul className="space-y-3">
                    {section.items.map((item, index) => (
                      <li key={`${item.href}-${index}`}>
                        <a
                          href={item.href}
                          className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
                          target={item.external ? '_blank' : undefined}
                          rel={
                            item.external ? 'noopener noreferrer' : undefined
                          }
                        >
                          {item.icon && (
                            <span className="text-[var(--accent-primary)] text-base">
                              {item.icon.startsWith('/') ? (
                                <img
                                  src={item.icon}
                                  alt=""
                                  className="w-4 h-4"
                                />
                              ) : (
                                item.icon
                              )}
                            </span>
                          )}
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border-primary)]">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="font-body text-sm text-[var(--text-muted)]">
              RRM Digital 2025 All Rights Reserved
            </p>
            <div className="flex space-x-6 text-sm text-[var(--text-muted)]">
              <a
                href="/privacy"
                className="font-body hover:text-[var(--text-primary)] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="font-body hover:text-[var(--text-primary)] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
