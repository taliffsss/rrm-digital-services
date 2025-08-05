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
  title: 'RRM DIGITAL - Building Digital Experiences That Matter',
  description:
    'We create elegant, high-performing websites and web applications. Specializing in UI/UX design, full-stack development, and digital transformation.',
  keywords: [
    'Web Design',
    'Web Development',
    'UI/UX Design',
    'Digital Agency',
    'Full-stack Development',
  ],
  authors: [{ name: 'RRM DIGITAL' }],
  creator: 'RRM DIGITAL',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rrmdigital.com',
    title: 'RRM DIGITAL - Building Digital Experiences That Matter',
    description:
      'We create elegant, high-performing websites and web applications. Specializing in UI/UX design, full-stack development, and digital transformation.',
    siteName: 'RRM DIGITAL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RRM DIGITAL - Building Digital Experiences That Matter',
    description:
      'We create elegant, high-performing websites and web applications. Specializing in UI/UX design, full-stack development, and digital transformation.',
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
