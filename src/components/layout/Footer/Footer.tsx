'use client';

import { cn } from '@/lib/utils';
import { FooterProps } from './Footer.types';
import ThemeAwareLogo from '@/components/ui/ThemeAwareLogo';
import Image from 'next/image';

const Footer = ({ sections, logo, socialLinks, className }: FooterProps) => {
  return (
    <footer
      className={cn(
        'bg-[var(--bg-primary)] border-t border-[var(--border-primary)]/20',
        className
      )}
    >
      <div className="container py-12 lg:py-16 xl:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            {logo || (
              <div className="flex items-center space-x-3 mb-6">
                <ThemeAwareLogo
                  alt="RRM DIGITAL"
                  className="h-12 w-auto lg:h-16"
                />
              </div>
            )}
            <div className="mb-6 lg:mb-8">
              <h3 className="font-body font-semibold text-[var(--text-primary)] mb-2 lg:mb-3">
                RRM Digital Services
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                We render, refine, and mobilize your success.
              </p>
            </div>
            {socialLinks && <div className="flex space-x-4">{socialLinks}</div>}
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-between">
              {sections.map(section => (
                <div
                  key={section.title}
                  className={`flex-1 ${
                    section.title === 'Contact' ? 'block' : 'hidden sm:block'
                  }`}
                >
                  <h5 className="font-title text-[var(--text-primary)] mb-4 lg:mb-6">
                    {section.title}
                  </h5>
                  <ul className="space-y-3 lg:space-y-4">
                    {section.items.map((item, index) => (
                      <li key={`${item.href}-${index}`}>
                        <a
                          href={item.href}
                          className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2 lg:gap-3"
                          target={item.external ? '_blank' : undefined}
                          rel={
                            item.external ? 'noopener noreferrer' : undefined
                          }
                        >
                          {item.icon && (
                            <span className="text-[var(--accent-primary)] text-base flex items-center">
                              {item.icon.startsWith('/') ? (
                                <div className="w-5 h-5 flex items-center justify-center">
                                  <Image
                                    src={item.icon}
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="w-4 h-4 object-contain"
                                  />
                                </div>
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
        <div className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-[var(--border-primary)]/30">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="font-body text-sm text-[var(--text-secondary)]">
              RRM Digital Services {new Date().getFullYear()} All Rights
              Reserved
            </p>
            <div className="flex space-x-6 lg:space-x-8 text-sm text-[var(--text-secondary)]">
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
