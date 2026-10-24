import type { Metadata } from 'next';
import Script from 'next/script';
import { MotionConfig } from 'framer-motion';
import { LangProvider } from '@/lib/lang-context';
import { ThemeProvider } from '@/lib/theme-context';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';
import { publicPath } from '@/lib/public-path';

export const metadata: Metadata = {
  title: 'Margad-Erdene Byambabasan | IT Student & Cybersecurity Specialist',
  description:
    'Third-year Information Technology student passionate about cybersecurity — CTFs, system security and pentesting. Works with Linux, Windows and macOS.',
  keywords: [
    'Margad-Erdene Byambabasan',
    'Cybersecurity',
    'CTF',
    'Arch Linux',
    'Next.js',
  ],
  authors: [{ name: 'Margad-Erdene Byambabasan' }],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn" className="dark" data-theme="green" suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <Script src={publicPath('/theme-init.js')} strategy="beforeInteractive" />
        <MotionConfig reducedMotion="user">
          <ThemeProvider>
            <LangProvider>
              <ScrollToTop />
              {children}
            </LangProvider>
          </ThemeProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
