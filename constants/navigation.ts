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
    title: 'Contact',
    items: [
      { label: 'Oriental Mindoro', href: '#', icon: '/icon/map-pin.svg' },
      {
        label: '+09123456789',
        href: 'tel:+09123456789',
        icon: '/icon/phone.svg',
      },
      {
        label: 'hello@rrmdigital.com',
        href: 'mailto:hello@rrmdigital.com',
        icon: '/icon/mail.svg',
      },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61578835422442',
        icon: '/icon/facebook.svg',
        external: true,
      },
    ],
  },
];
