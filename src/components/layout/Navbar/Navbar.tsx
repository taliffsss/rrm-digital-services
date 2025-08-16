'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { NavbarProps, MobileMenuProps } from './Navbar.types';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ThemeAwareLogo from '@/components/ui/ThemeAwareLogo';
import { Icon } from '@iconify/react';

const MobileMenu = ({ items, isOpen, onClose }: MobileMenuProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to ensure the element is rendered before animation starts
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    // Small delay to allow animation to complete
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // Icon mapping for navigation items
  const getIconForItem = (label: string) => {
    switch (label.toLowerCase()) {
      case 'services':
        return 'ph:briefcase-simple';
      case 'projects':
        return 'ph:target';
      case 'how we work':
        return 'ph:gear-six';
      case 'about us':
        return 'ph:users';
      default:
        return 'ph:briefcase-simple'; // fallback
    }
  };

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className={`fixed inset-0 bg-[var(--bg-overlay)] transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
        onKeyDown={e => e.key === 'Escape' && handleClose()}
        role="button"
        tabIndex={0}
        aria-label="Close mobile menu"
      />
      {/* Floating Menu Box */}
      <div
        className={`fixed left-4 right-4 bg-[var(--bg-mobile-menu)] backdrop-blur-xl rounded-2xl transition-all duration-300 ease-out ${
          isAnimating
            ? 'top-4 translate-y-0 opacity-100'
            : 'top-4 -translate-y-full opacity-0'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4">
          <h4 className="font-orbitron text-[var(--text-primary)]">Menu</h4>
          <button
            onClick={handleClose}
            className="font-orbitron text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
          >
            X
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-6 py-10 border-t border-[var(--border-mobile-menu)]">
          <nav className="space-y-4">
            {items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 group"
                onClick={handleClose}
              >
                <div className="w-5 h-5 flex-shrink-0">
                  <Icon
                    icon={getIconForItem(item.label)}
                    className="w-full h-full text-[var(--accent-primary)]"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-body text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ items, cta, logo, className }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={cn('sticky top-4 z-40 w-full', className)}>
        <div className="container mx-auto">
          <nav
            className={cn(
              'flex h-16 lg:h-20 items-center justify-between backdrop-blur-lg border rounded-xl px-4 sm:px-6 lg:px-8 xl:px-10 transition-all duration-200',
              {
                'bg-white/10 border-white/20': hasScrolled && theme === 'dark',
                'bg-white/50 border-white/20 shadow-sm':
                  hasScrolled && theme === 'light',
                'bg-transparent border-transparent': !hasScrolled,
              }
            )}
          >
            {/* Logo */}
            <div className="flex items-center">
              {logo || (
                <Link
                  href="/"
                  className="flex items-center space-x-3"
                  aria-label="Home"
                >
                  <ThemeAwareLogo
                    alt="RRM Digital Services"
                    className="h-12 w-auto lg:h-16"
                  />
                </Link>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {items.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center">
              <div className="flex items-center gap-3 lg:gap-4">
                {/* CTA Button */}
                {cta || (
                  <a href="#contact">
                    <div className="hidden lg:block">
                      <Button
                        variant="primary"
                        size="sm"
                        className="font-body cursor-pointer"
                      >
                        Connect with us!
                      </Button>
                    </div>
                  </a>
                )}

                {/* Theme Toggle */}
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="cursor-pointer relative flex items-center rounded-full border border-[var(--border-primary)] p-1 w-16 h-8 lg:w-20 lg:h-10 transition-all duration-200 hover:border-[var(--border-accent)]"
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  >
                    {/* Sliding Background */}
                    <div
                      className={`absolute w-6 h-6 lg:w-8 lg:h-8 bg-[var(--accent-primary)] rounded-full transition-all duration-300 ease-in-out ${
                        theme === 'light'
                          ? 'translate-x-8 lg:translate-x-10'
                          : 'translate-x-0'
                      }`}
                    />

                    {/* Icons Container */}
                    <div className="relative z-10 flex items-center justify-between w-full h-full">
                      {/* Moon Icon */}
                      <div className="flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 rounded-full transition-all duration-200">
                        <svg
                          className={`h-3 w-3 lg:h-4 lg:w-4 transition-colors duration-200 ${
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
                      <div className="flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 rounded-full transition-all duration-200">
                        <svg
                          className={`h-3 w-3 lg:h-4 lg:w-4 transition-colors duration-200 ${
                            theme === 'light'
                              ? 'text-[var(--text-primary)]'
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
                  className="lg:hidden flex flex-col items-end justify-center gap-1.5"
                  aria-label="Open mobile menu"
                >
                  <div className="w-7 h-1 rounded-full bg-[var(--accent-primary)] transition-all duration-200"></div>
                  <div className="w-5 h-1 rounded-full bg-[var(--accent-primary)] transition-all duration-200"></div>
                  <div className="w-7 h-1 rounded-full bg-[var(--accent-primary)] transition-all duration-200"></div>
                </button>
              </div>
            </div>
          </nav>
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
