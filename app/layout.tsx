import type { Metadata } from 'next';
import { Orbitron, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/providers';
import { MAIN_NAV_ITEMS } from '@/constants/navigation';

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RRM Digital Services | Future-Ready Websites, Apps & AI Solutions',
  description:
    'At RRM Digital Services, we render, refine, and mobilize your success. We design stunning websites, build powerful apps, and create AI solutions that turn ideas into reality, refine them for peak performance, and launch them for growth.',
  keywords:
    'RRM Digital Services, web development, app development, AI solutions, UI/UX design, scalable platforms, digital strategy, business growth, startup solutions, backend optimization, campaign strategy, future-ready technology, software development agency',
  authors: [{ name: 'RRM Digital Services' }],
  creator: 'RRM Digital Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rrmdigital.com',
    title: 'RRM Digital Services | Future-Ready Websites, Apps & AI Solutions',
    description:
      'We turn ideas into reality, refine them for perfection, and mobilize them for growth. Websites, apps, and AI tools for startups and businesses.',
    siteName: 'RRM Digital Services',
    images: [
      {
        url: 'https://rrmdigital.com/og-image.jpg', // Replace with your OG image
        width: 1200,
        height: 630,
        alt: 'RRM Digital Services - Future-Ready Websites, Apps & AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RRM Digital Services | Future-Ready Websites, Apps & AI Solutions',
    description:
      'We turn ideas into reality, refine them for perfection, and mobilize them for growth. Websites, apps, and AI tools for startups and businesses.',
    images: ['https://rrmdigital.com/og-image.jpg'], // Replace with your Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider>
          <Navbar items={MAIN_NAV_ITEMS} />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
