import { NavItem, NavSection } from '@/types';

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Case Study', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
];

export const FOOTER_SECTIONS: NavSection[] = [
  {
    title: 'Services',
    items: [
      { label: 'Web Design', href: '#services' },
      { label: 'Web Development', href: '#services' },
      { label: 'Desktop Apps', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Case Studies', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  },
];
