// Types are imported when needed for specific content structures

export const HERO_CONTENT = {
  title: 'We Build DIGITAL EXPERIENCES That Matters',
  subtitle:
    'We create stunning, high-performance websites and apps that bring your vision to life and drive business growth.',
  ctaPrimary: 'Connect with us',
  ctaSecondary: 'Learn More',
};

export const SERVICES = [
  {
    id: 1,
    title: 'Web & Mobile Design',
    description:
      'Crafting beautiful, user-friendly designs that feel natural and easy to use. We make sure your users enjoy every interaction.',
    icon: '🎨',
    iconPath: '/icon/web_design.svg',
    includes: [
      'UI/UX Design that makes sense',
      'Wireframes that map out great ideas',
      'Clickable prototypes that bring your vision to life',
      'User research to guide smart design decisions',
    ],
    footer: 'Let’s explore how your brand can stand out.',
  },
  {
    id: 2,
    title: 'Web Development',
    description:
      'Need powerful desktop software? We build cross-platform apps that help your business run better online or offline.',
    icon: '💻',
    iconPath: '/icon/web_development.svg',
    includes: [
      'Frontend that looks good and feels right',
      'Backend that powers everything smoothly',
      'Seamless API integrations',
      'Performance that keeps things fast and reliable',
    ],
    footer: 'Explore how we bring ideas to life online.',
  },
  {
    id: 3,
    title: 'Desktop Applications',
    description:
      'Need powerful desktop software? We build cross-platform apps that help your business run better online or offline.',
    icon: '🖥️',
    iconPath: '/icon/graphic_design.svg',
    includes: [
      'Develop apps that work on Windows & Mac',
      'Ensure native-like speed and feel',
      'Add offline capabilities when needed',
      'Seamlessly integrate with your existing systems',
    ],
    footer: 'Explore desktop solutions tailored for your workflow.',
  },
  {
    id: 4,
    title: 'Web Hosting',
    description:
      'Fast, secure, and scalable hosting solutions to keep your website running smoothly—no matter the traffic.',
    icon: '🌐',
    iconPath: '/icon/web_hosting.svg',
    includes: [
      'Blazing-fast load times with global CDN',
      '99.9% uptime guarantee for peace of mind',
      'Scalable infrastructure to handle growth',
      'Daily backups and strong security measures',
    ],
    footer: 'Let’s host your project with performance and reliability.',
  },
];
export const WORK_FILTERS = [
  { id: 'all', label: 'Real' },
  { id: 'recent', label: 'Tested' },
  { id: 'delivered', label: 'Delivered' },
];

export const PROCESS_STEPS = [
  {
    id: 'discover',
    title: 'Discover',
    description:
      'We begin with a real conversation to understand your goals, challenges, and what success looks like for you. No assumptions. Just honest, strategic discovery.',
    icon: '🔍',
  },
  {
    id: 'design',
    title: 'Design',
    description:
      'We turn ideas into thoughtful wireframes and sleek UI always crafted for usability, performance, and real business results.',
    icon: '✏️',
  },
  {
    id: 'develop',
    title: 'Develop',
    description:
      'We develop thoughtful, reliable digital solutions that are tailored to your needs with clean code, smart architecture, and a focus on long-term success.',
    icon: '⚡',
  },
  {
    id: 'deliver',
    title: 'Deliver',
    description:
      "We don't just launch we stay with you. From testing to deployment and beyond, we support your growth long after go-live.",
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
