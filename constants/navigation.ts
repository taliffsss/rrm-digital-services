import { NavItem, NavSection } from '@/types';

export const MAIN_NAV_ITEMS: NavItem[] = [
  { id: 1, label: 'Services', href: '#services' },
  { id: 2, label: 'Projects', href: '#work' },
  { id: 3, label: 'About Us', href: '#about' },
  { id: 4, label: 'Process', href: '#process' },
];

export const FOOTER_SECTIONS: NavSection[] = [
  {
    title: 'Services',
    items: [
      { id: 5, label: 'Web Design', href: '#services' },
      { id: 6, label: 'Web Development', href: '#services' },
      { id: 7, label: 'Desktop Apps', href: '#services' },
      { id: 8, label: 'UI/UX Design', href: '#services' },
    ],
  },
  {
    title: 'Company',
    items: [
      { id: 9, label: 'About Us', href: '#about' },
      { id: 10, label: 'Our Process', href: '#process' },
      { id: 11, label: 'Case Studies', href: '#work' },
      { id: 12, label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { id: 13, label: 'Barangka Drive Mandaluyong City, Philippines', href: '#', icon: '/icon/map-pin.svg' },
      {
        id: 14,
        label: '+639190950915',
        href: 'tel:+639190950915',
        icon: '/icon/phone.svg',
      },
      {
        id: 15,
        label: 'hello@rrmdigital.com',
        href: 'mailto:hello@rrmdigital.com',
        icon: '/icon/mail.svg',
      },
      {
        id: 16,
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61578835422442',
        icon: '/icon/facebook.svg',
        external: true,
      },
    ],
  },
];
