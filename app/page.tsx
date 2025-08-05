import {
  HERO_CONTENT,
  SERVICES,
  WORK_FILTERS,
  PROCESS_STEPS,
  TEAM_CONTENT,
  CONTACT_CONTENT,
  COMPANY_INFO,
} from '@/constants/content';
import { FOOTER_SECTIONS } from '@/constants/navigation';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import FloatingElements from '@/components/ui/FloatingElements';
import GlowBackground from '@/components/ui/GlowBackground';
import Footer from '@/components/layout/Footer';

// Icon mapping for services
const getServiceIcon = (serviceId: string) => {
  const iconMap = {
    design: '/icon/web_design.svg',
    development: '/icon/web_development.svg',
    desktop: '/icon/graphic_design.svg',
  };
  return iconMap[serviceId as keyof typeof iconMap] || serviceId;
};

// Gallery data - organized by rows with uniform height
const GALLERY_ROWS = [
  // Row 1: 4 items with different widths but same height
  {
    id: 'row-1',
    items: [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        title: 'Web Analytics Dashboard',
        category: 'Web Development',
        width: 'w-2/5', // 40% width
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&q=80',
        title: 'Mobile Banking App',
        category: 'Mobile Design',
        width: 'w-1/5', // 20% width
      },
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        title: 'E-commerce Platform',
        category: 'Web Development',
        width: 'w-1/5', // 20% width
      },
      {
        id: 4,
        image:
          'https://images.unsplash.com/photo-1753998943918-dd2dfc4ee6ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZGUlMjBlZGl0b3J8ZW58MHx8MHx8fDA%3D',
        title: 'Code Editor Interface',
        category: 'Desktop App',
        width: 'w-1/5', // 20% width
      },
    ],
  },
  // Row 2: 4 items with different widths but same height
  {
    id: 'row-2',
    items: [
      {
        id: 5,
        image:
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        title: 'Restaurant Website',
        category: 'Web Design',
        width: 'w-1/4', // 25% width
      },
      {
        id: 6,
        image:
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
        title: 'Data Visualization',
        category: 'Web Development',
        width: 'w-1/3', // 33% width
      },
      {
        id: 7,
        image:
          'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80',
        title: 'Mobile Chat App',
        category: 'Mobile Design',
        width: 'w-1/6', // 16.67% width
      },
      {
        id: 8,
        image:
          'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
        title: 'Marketing Landing Page',
        category: 'Web Design',
        width: 'w-1/4', // 25% width
      },
    ],
  },
  // Row 3: 4 items with different widths but same height
  {
    id: 'row-3',
    items: [
      {
        id: 9,
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
        title: 'CRM Dashboard',
        category: 'Web Development',
        width: 'w-1/3', // 33% width
      },
      {
        id: 10,
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        title: 'SaaS Platform',
        category: 'Web Development',
        width: 'w-1/6', // 16.67% width
      },
      {
        id: 11,
        image:
          'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
        title: 'Mobile App Design',
        category: 'Mobile Design',
        width: 'w-2/5', // 40% width
      },
      {
        id: 12,
        image:
          'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80',
        title: 'Desktop Software',
        category: 'Desktop App',
        width: 'w-1/6', // 16.67% width
      },
    ],
  },
];

// Helper function to get width classes for uniform height gallery
const getWidthClass = (width: string) => {
  return width; // Return the width class directly
};

export default function Home() {
  return (
    <div className="overflow-hidden md:overflow-visible">
      {/* Hero Section */}
      <section className="section relative">
        {/* Background Glowing Effect - inside hero section */}
        <GlowBackground variant="hero" color="secondary" intensity="medium" />

        {/* Floating Elements */}
        <FloatingElements />

        <div className="container relative z-20">
          <div className="text-center">
            <h4 className="heading-4">We Build</h4>
            <h2 className="heading-2">
              <span className="block">DIGITAL EXPERIENCES</span>
              <span className="block">That Matters</span>
            </h2>
            <p className="mt-6 text-sm max-w-2xl leading-8 text-[var(--text-secondary)] sm:text-base mx-auto">
              {HERO_CONTENT.subtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button
                size="md"
                className="group font-body glow-button"
                style={{
                  animation: 'float-smooth 3s ease-in-out infinite',
                }}
              >
                {HERO_CONTENT.ctaPrimary}
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>

            {/* SVG Ellipse inside the container, below the button */}
            <div className="mt-16 w-full relative z-30">
              <img
                src="/elements/elipse_planet_shape.svg"
                alt="Planet shape"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="heading-3">What We Do</h3>
          </div>

          {/* Badge Navigation */}
          <div className="mt-8 flex justify-center items-center gap-3 lg:gap-4">
            {['design.', 'code.', 'deliver.'].map((badge, index) => (
              <Badge
                key={`services-${badge}-${index}`}
                size="md"
                className="font-body"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {SERVICES.map(service => (
                <Card
                  key={service.id}
                  variant="elevated"
                  className="card-effect group relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(118,183,20,0.3)]"
                >
                  <span className="floating-elements">
                    <span className="small-rect-1"></span>
                    <span className="small-rect-2"></span>
                    <span className="small-rect-3"></span>
                    <span className="small-rect-4"></span>
                  </span>
                  <CardContent className="card-content p-6">
                    <div className="mb-4">
                      <img
                        src={getServiceIcon(service.id)}
                        alt={service.title}
                        className="w-12 h-12 service-icon"
                      />
                    </div>
                    <h5 className="heading-5 mb-3">{service.title}</h5>
                    <p className="font-body mb-4 text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <h5 className="font-body mb-2 text-sm font-medium text-[var(--text-primary)]">
                        INCLUDES:
                      </h5>
                      <ul className="space-y-1">
                        {service.includes.map(item => (
                          <li
                            key={item}
                            className="font-body flex items-center text-sm text-[var(--text-secondary)]"
                          >
                            <span className="mr-2 text-[var(--accent-primary)]">
                              ✓
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      variant="secondary"
                      size="md"
                      className="w-full font-body transition-all duration-300 group-hover:bg-[var(--btn-primary-bg)] group-hover:text-[var(--btn-primary-text)] group-hover:border-[var(--btn-primary-bg)]"
                    >
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="heading-3">See Our Work in Action</h3>
          </div>

          {/* Filter Badges */}
          <div className="mt-8 flex justify-center items-center gap-3 lg:gap-4">
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
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="space-y-4">
              {GALLERY_ROWS.map(row => (
                <div key={row.id} className="flex gap-4 h-64">
                  {row.items.map(item => (
                    <div
                      key={`work-item-${item.id}`}
                      className={`${getWidthClass(item.width)} group relative overflow-hidden rounded-lg border border-[var(--border-primary)] bg-[var(--bg-card)] hover:border-[var(--accent-primary)] hover:shadow-[0_0_30px_rgba(118,183,20,0.3)] transition-all duration-300 cursor-pointer`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="secondary" size="md" className="group font-body">
                View More
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section">
        <div className="container">
          {/* Two-column layout for title and badges */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
            {/* Left column: Title and badges */}
            <div className="lg:w-auto">
              <h3 className="heading-3 text-left">How We Work</h3>

              {/* Badge Navigation */}
              <div className="mt-8 flex flex-wrap items-center gap-3 lg:gap-4">
                {['clarity.', 'structure.', 'results.'].map((badge, index) => (
                  <Badge
                    key={`process-${badge}-${index}`}
                    size="md"
                    className="font-body"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Right column: Solid line */}
            <div className="lg:flex-1 mt-8 lg:mt-0 flex items-end">
              <div className="h-0.5 w-full bg-[var(--accent-primary)]"></div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {PROCESS_STEPS.map(step => (
                <Card
                  key={step.id}
                  variant="elevated"
                  className="card-effect group relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(118,183,20,0.3)]"
                >
                  <span className="floating-elements">
                    <span className="small-rect-1"></span>
                    <span className="small-rect-2"></span>
                    <span className="small-rect-3"></span>
                    <span className="small-rect-4"></span>
                  </span>
                  <CardContent className="card-content p-8 text-left">
                    <div className="mb-6">
                      <h2 className="font-orbitron text-[var(--accent-primary)]">
                        {String(
                          step.id === 'discover'
                            ? 1
                            : step.id === 'design'
                              ? 2
                              : step.id === 'develop'
                                ? 3
                                : 4
                        ).padStart(2, '0')}
                      </h2>
                    </div>
                    <h5 className="heading-5 mb-4">{step.title}</h5>
                    <p className="font-body text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="mt-16">
            <div className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border-primary)]">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left side: Profile images and text */}
                <div className="flex items-center gap-6">
                  {/* Circular profile images */}
                  <div className="flex -space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                      alt="Team member 1"
                      className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                      alt="Team member 2"
                      className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Team member 3"
                      className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                      alt="Team member 4"
                      className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h5 className="font-body text-[var(--text-primary)]">
                      Align with Businesses that Choose Quality
                    </h5>
                  </div>
                </div>

                {/* Right side: Start Now button */}
                <div>
                  <Button
                    variant="primary"
                    size="md"
                    className="group font-body"
                  >
                    <span>Start Now</span>
                    <svg
                      className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
            {/* Left column: Title, badges, and description */}
            <div>
              <h3 className="heading-3 text-left">{TEAM_CONTENT.title}</h3>

              {/* Badge Navigation */}
              <div className="mt-8 flex flex-wrap items-center gap-3 lg:gap-4">
                {['people.', 'purpose.', 'precision.'].map((badge, index) => (
                  <Badge
                    key={`team-${badge}-${index}`}
                    size="md"
                    className="font-body"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <div className="mt-8">
                <p className="font-body text-[var(--text-secondary)] leading-relaxed">
                  At RRM Digital, you don&apos;t get handed off to interns or
                  account managers. You speak directly to the people doing the
                  work — the ones who care as much about the outcome as you do.
                </p>
                <p className="font-body text-[var(--text-secondary)] leading-relaxed mt-4">
                  We bring together a years of experience across UI/UX design,
                  full-stack development, and product architecture — as well as
                  graphic design services like branding, custom illustrations,
                  and ad creatives. From small startups to complex enterprise
                  systems, we craft solutions that are both visually striking
                  and technically robust.
                </p>
              </div>
            </div>

            {/* Right column: Regular image with floating rectangles */}
            <div className="relative">
              <div className="relative">
                <img
                  src="/images/rrm.png"
                  alt="Team collaboration"
                  className="w-full h-auto rounded-lg object-cover"
                />
                {/* Floating rectangles - always visible with animation */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top-left rectangles - overlapping outside */}
                  <div
                    className="absolute -top-4 left-4 w-16 h-10 bg-[var(--accent-primary)] opacity-60 rounded-sm shadow-lg"
                    style={{
                      animation: 'float-smooth 3s ease-in-out infinite',
                    }}
                  ></div>
                  <div
                    className="absolute -top-8 left-24 w-6 h-6 bg-[var(--accent-primary)] opacity-40 rounded-sm shadow-md"
                    style={{
                      animation: 'float-smooth 3s ease-in-out infinite 0.5s',
                    }}
                  ></div>

                  {/* Bottom-right rectangles - overlapping outside */}
                  <div
                    className="absolute bottom-4 -right-4 w-16 h-10 bg-[var(--accent-primary)] opacity-60 rounded-sm shadow-lg"
                    style={{
                      animation: 'float-smooth 3s ease-in-out infinite 0.2s',
                    }}
                  ></div>
                  <div
                    className="absolute bottom-0 right-14 w-6 h-6 bg-[var(--accent-primary)] opacity-40 rounded-sm shadow-md"
                    style={{
                      animation: 'float-smooth 3s ease-in-out infinite 0.7s',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section relative">
        {/* Background Glowing Effect for contact section */}
        <GlowBackground variant="contact" color="primary" intensity="strong" />

        <div className="container relative z-20">
          <div className="mx-auto max-w-2xl text-center px-4 sm:px-0">
            <h3 className="heading-3">{CONTACT_CONTENT.title}</h3>
          </div>

          {/* Filter Badges */}
          <div className="mt-8 flex justify-center items-center gap-2 sm:gap-3 lg:gap-4 flex-wrap">
            {['direct', 'simple', 'human'].map((filter, index) => (
              <Badge
                key={`contact-${filter}-${index}`}
                size="md"
                className="font-body"
              >
                {filter}
              </Badge>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl text-center relative z-30 px-4 sm:px-0">
            {/* Subtle gradient overlay for enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-primary)]/5 to-transparent rounded-2xl pointer-events-none" />

            <div className="relative">
              <p className="font-body text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Have a project in mind? Not sure where to start? Let&apos;s
                talk. Whether it&apos;s a full build or just a quick
                consultation, we&apos;re happy to help you figure out the best
                path forward. We don&apos;t do hard sells — just honest
                conversations.
              </p>
              <div className="mt-6 sm:mt-8">
                <Button
                  variant="primary"
                  size="md"
                  className="group font-body glow-button w-full sm:w-auto"
                  style={{
                    animation: 'float-smooth 3s ease-in-out infinite',
                  }}
                >
                  Send us an email
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </Button>
              </div>
              <p className="font-body mt-4 text-xs sm:text-sm text-[var(--text-secondary)]">
                {CONTACT_CONTENT.responseTime}
              </p>
            </div>
          </div>

          {/* SVG Ellipse inside the container, below the button - same as hero section */}
          <div className="mt-16 w-full relative z-30">
            <img
              src="/elements/elipse_planet_shape.svg"
              alt="Planet shape"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        sections={FOOTER_SECTIONS}
        description={COMPANY_INFO.description}
      />
    </div>
  );
}
