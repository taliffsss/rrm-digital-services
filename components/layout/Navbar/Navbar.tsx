'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { NavbarProps, MobileMenuProps } from './Navbar.types';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

const MobileMenu = ({ items, isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-[var(--bg-overlay)]"
        onClick={onClose}
        onKeyDown={e => e.key === 'Escape' && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close mobile menu"
      />
      <div className="fixed right-0 top-0 h-full w-80 bg-[var(--bg-primary)] border-l border-[var(--border-primary)] shadow-[var(--shadow-xl)]">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-6 border-b border-[var(--border-primary)]">
            <h2 className="font-body text-lg font-semibold text-[var(--text-primary)]">
              Menu
            </h2>
            <button
              onClick={onClose}
              className="rounded-md p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              {items.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body block text-lg text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ items, logo, cta, className }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <>
      <header
        className={cn(
          'sticky top-4 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-[var(--bg-primary)]/80',
          className
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {logo || (
              <Link
                href="/"
                className="flex items-center space-x-3"
                aria-label="Home"
              >
                <Image
                  src="/logo/rrm_logo.svg"
                  alt="RRM DIGITAL"
                  width={500}
                  height={500}
                  className="h-16 w-auto"
                />
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="relative flex items-center rounded-full border border-[var(--border-primary)] p-1 w-20 h-10 transition-all duration-200 hover:border-[var(--border-accent)]"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {/* Sliding Background */}
                <div
                  className={`absolute w-8 h-8 bg-[var(--accent-primary)] rounded-full transition-all duration-300 ease-in-out ${
                    theme === 'light' ? 'translate-x-10' : 'translate-x-0'
                  }`}
                />

                {/* Icons Container */}
                <div className="relative z-10 flex items-center justify-between w-full h-full px-0">
                  {/* Moon Icon */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200">
                    <svg
                      className={`h-4 w-4 transition-colors duration-200 ${
                        theme === 'dark'
                          ? 'text-[var(--text-inverse)]'
                          : 'text-[var(--accent-primary)]'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </div>

                  {/* Sun Icon */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200">
                    <svg
                      className={`h-4 w-4 transition-colors duration-200 ${
                        theme === 'light'
                          ? 'text-[#000525]'
                          : 'text-[var(--accent-primary)]'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden rounded-md p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
              aria-label="Open mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        items={items}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
