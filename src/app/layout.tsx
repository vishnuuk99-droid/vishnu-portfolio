import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Vishnu U K - Business Analyst & Data Professional',
    template: '%s | Vishnu U K Portfolio'
  },
  description: 'Portfolio of Vishnu U K - Business Analyst specializing in data analytics, Power BI dashboards, SQL analytics, and business intelligence solutions. 3+ years experience in data-driven decision making.',
  keywords: [
    'Business Analyst',
    'Data Analytics', 
    'Power BI',
    'SQL',
    'Dashboards',
    'Business Intelligence',
    'Data Visualization',
    'ZeOmega',
    'Healthcare Analytics',
    'Process Optimization',
    'Python',
    'Azure',
    'Tableau'
  ],
  authors: [{ name: 'Vishnu U K' }],
  creator: 'Vishnu U K',
  publisher: 'Vishnu U K',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vishnuuk.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vishnu U K - Business Analyst & Data Professional Portfolio',
    description: 'Professional portfolio showcasing 3+ years of expertise in business analysis, Power BI dashboards, SQL analytics, and data-driven solutions for healthcare and enterprise clients.',
    url: 'https://vishnuuk.com',
    siteName: 'Vishnu U K Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vishnu U K - Business Analyst Portfolio'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishnu U K - Business Analyst Portfolio',
    description: 'Professional portfolio showcasing expertise in business analysis, Power BI, SQL, and data analytics.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}