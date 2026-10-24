'use client';

import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface Social {
  label: string;
  href?: string;
  copy?: string;
  icon: ReactNode;
}

const glyph = 'h-[18px] w-[18px]';

export const socials: Social[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/zaprilli',
    icon: (
      <svg className={glyph} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.19-3.1-.12-.3-.52-1.47.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.23 2.76.12 3.05.74.8 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/mrgd.rdn06',
    icon: (
      <svg className={glyph} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mrgd06/',
    icon: (
      <svg className={glyph} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'TETR.IO',
    href: 'https://ch.tetr.io/u/mrgd06',
    icon: (
      <svg className={glyph} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M8 9h8M12 9v7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Discord',
    copy: 'mrgderdnee',
    icon: (
      <svg className={glyph} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.32 4.94A19.8 19.8 0 0 0 15.43 3.4a.07.07 0 0 0-.08.04c-.21.38-.44.87-.61 1.25a18.3 18.3 0 0 0-5.48 0c-.17-.39-.41-.87-.62-1.25a.08.08 0 0 0-.08-.04c-1.7.29-3.33.79-4.89 1.54a.07.07 0 0 0-.03.03C.53 9.05-.32 13.04.1 16.98a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .09-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.11c-.65-.25-1.27-.55-1.87-.9a.08.08 0 0 1 0-.13l.37-.29a.08.08 0 0 1 .08 0 14.2 14.2 0 0 0 12.06 0 .08.08 0 0 1 .08 0l.37.3a.08.08 0 0 1 0 .12c-.6.35-1.22.65-1.87.9a.08.08 0 0 0-.04.11c.36.7.78 1.36 1.23 2a.08.08 0 0 0 .09.03 19.9 19.9 0 0 0 6-3.03.08.08 0 0 0 .03-.05c.5-4.55-.84-8.5-3.54-11.97a.06.06 0 0 0-.03-.03ZM8.02 14.62c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.95-2.42 2.16-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z" />
      </svg>
    ),
  },
];

export function useCopyUsername() {
  const [copied, setCopied] = useState(false);

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard unavailable — fail silently.
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, copy };
}

export function SocialIcon({ social }: { social: Social }) {
  return social.icon;
}

export function SocialButton({
  social,
  copiedLabel,
  onCopy,
}: {
  social: Social;
  copiedLabel: string;
  onCopy: (value: string) => void;
}) {
  const shared =
    'grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-brand-400/40 hover:text-brand-300 hover:shadow-glow';

  if (social.copy) {
    return (
      <motion.button
        type="button"
        onClick={() => onCopy(social.copy!)}
        aria-label={`${social.label} — ${social.copy}`}
        title={`${social.label}: ${social.copy}`}
        whileHover={{ y: -4, scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className={shared}
      >
        {social.icon}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      title={social.label}
      whileHover={{ y: -4, scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={shared}
    >
      {social.icon}
    </motion.a>
  );
}

export function SocialRow({ copiedLabel }: { copiedLabel: string }) {
  const { copied, copy } = useCopyUsername();

  return (
    <div className="flex items-center gap-3">
      {socials.map((s) => (
        <SocialButton key={s.label} social={s} copiedLabel={copiedLabel} onCopy={copy} />
      ))}
      <span
        aria-live="polite"
        className={`ml-1 font-mono text-[11px] text-emerald-300 transition-opacity duration-300 ${
          copied ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {copiedLabel}
      </span>
    </div>
  );
}
