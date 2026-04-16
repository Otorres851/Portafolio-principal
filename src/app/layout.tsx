import type { Metadata } from 'next';
import './globals.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Oscar Torres | Front-End Developer',
  description:
    'Portafolio de Oscar Torres, Front-End Developer especializado en React, Next.js, TypeScript y UI moderna.',
  icons: {
    icon: [{ url: '/images/favicon.ico' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
