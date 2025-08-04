import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import QueryProvider from '@/providers/QueryProvider'
import ReduxProvider from '@/providers/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Next.js Boilerplate',
  description: 'A Next.js boilerplate with TypeScript, Tailwind CSS, React Query, Axios, and Redux',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <QueryProvider>
            <main className="min-h-screen">
              {children}
            </main>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}