import type { Metadata } from 'next';
import { LangProvider } from '@/lib/lang-context';
import './globals.css';

export const metadata: Metadata = {
  title: 'Margad-Erdene Byambabasan | IT Student & Cybersecurity Specialist',
  description:
    'Third-year IT student at the National University of Mongolia (NUM-MTES) specializing in system security, Arch Linux, C, Python and full-stack development.',
  keywords: [
    'Margad-Erdene Byambabasan',
    'Cybersecurity',
    'CTF',
    'Arch Linux',
    'Next.js',
    'NUM-MTES',
  ],
  authors: [{ name: 'Margad-Erdene Byambabasan' }],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn" className="dark">
      <body className="min-h-screen font-sans">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
