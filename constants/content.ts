// Types are imported when needed for specific content structures

export const HERO_CONTENT = {
  title: 'We Build DIGITAL EXPERIENCES That Matters',
  subtitle:
    'We design, develop, and deliver elegant, high-performing websites and web applications — built by real developers who understand what your business needs to grow.',
  ctaPrimary: "Let's Talk",
  ctaSecondary: 'Learn More',
};

export const SERVICES = [
  {
    id: 'design',
    title: 'Web & Mobile Design',
    description:
      'Beautiful, intuitive interfaces that users love to interact with.',
    icon: '🎨',
    includes: ['UI/UX Design', 'Wireframing', 'Prototyping', 'User Research'],
  },
  {
    id: 'development',
    title: 'Web Development',
    description:
      'Robust, scalable web applications built with modern technologies.',
    icon: '💻',
    includes: [
      'Frontend Development',
      'Backend Development',
      'API Integration',
      'Performance Optimization',
    ],
  },
  {
    id: 'desktop',
    title: 'Desktop Applications',
    description: 'Cross-platform desktop applications for modern businesses.',
    icon: '🖥️',
    includes: [
      'Cross-platform Development',
      'Native Performance',
      'Offline Capability',
      'System Integration',
    ],
  },
];

export const WORK_FILTERS = [
  { id: 'all', label: 'real.' },
  { id: 'recent', label: 'tested.' },
  { id: 'delivered', label: 'delivered.' },
];

export const PROCESS_STEPS = [
  {
    id: 'discover',
    title: 'Discover',
    description:
      'We start with a conversation — to understand your goals, pain points, and vision. No assumptions. No jargon.',
    icon: '🔍',
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'We translate ideas into wireframes and clean UI — always with usability and business impact in mind.',
    icon: '✏️',
  },
  {
    id: 'develop',
    title: 'Develop',
    description:
      'Using modern frameworks, we build fast, secure, and scalable solutions — all custom, never bloated.',
    icon: '⚡',
  },
  {
    id: 'deliver',
    title: 'Deliver',
    description:
      "We test, deploy, and support you post-launch — because launch day isn't the end, it's just the start.",
    icon: '🚀',
  },
];

export const TEAM_CONTENT = {
  title: 'Who We Are',
  description:
    'We take a direct approach to digital transformation. With decades of experience in UI/UX, full-stack development, and product architecture, we help businesses achieve their digital goals.',
  member: {
    name: 'Raffy Francisco',
    role: 'UI/UX Designer',
    image: '/team/raffy.jpg',
  },
};

export const CONTACT_CONTENT = {
  title: "Let's Talk",
  description:
    "Ready to start your next project? Whether you need a new website, web application, or consultation, we're here to help.",
  motto: "We don't do hard sells - just honest conversations",
  responseTime: 'We usually respond within 24 hours',
  contactInfo: {
    email: 'hello@rrmdigital.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Street, Tech City, TC 12345',
  },
};

export const COMPANY_INFO = {
  name: 'RRM DIGITAL',
  logo: 'RRM',
  description: 'Building digital experiences that matter.',
  socialLinks: [
    { platform: 'Facebook', url: '#', icon: '📘' },
    { platform: 'Twitter', url: '#', icon: '🐦' },
    { platform: 'YouTube', url: '#', icon: '📺' },
    { platform: 'Instagram', url: '#', icon: '📷' },
  ],
};
