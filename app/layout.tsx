import type { Metadata } from 'next';
import Script from 'next/script';
import { LangProvider } from '@/lib/lang-context';
import { ThemeProvider } from '@/lib/theme-context';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

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
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        <ThemeProvider>
          <LangProvider>
            <ScrollToTop />
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
