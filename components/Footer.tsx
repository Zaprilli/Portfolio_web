'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/lang-context';
import { content } from '@/lib/content';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.19-3.1-.12-.3-.52-1.47.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.58.23 2.76.12 3.05.74.8 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: 'HackerRank',
    href: 'https://www.hackerrank.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0 4.5 4.3v15.4L12 24l7.5-4.3V4.3L12 0Zm0 4.6 3.9 2.25v4.5L12 13.6 8.1 11.35v-4.5L12 4.6Zm0 10.05 3.9-2.25v4.5L12 19.2l-3.9-2.25v-4.5L12 14.65Z" />
      </svg>
    ),
  },
  {
    label: 'Strava',
    href: 'https://www.strava.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M15.4 13.9h-3.1L9.3 6 6.4 13.9H3.3L8.2 24h3.1L15.4 13.9Zm5.4-1.3h-2.5l-1.3-2.6-1.3 2.6h-2.5l3.8-7.4 3.8 7.4Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { lang, toggleLang } = useLang();

  return (
    <footer className="relative border-t border-cyan-400/10 bg-abyss/60 backdrop-blur">
      <div className="section-shell flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-white">
            margad<span className="text-cyan-400">@</span>portfolio
          </p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} Margad-Erdene Byambabasan. {content.footer.rights[lang]}
          </p>
          <p className="mt-0.5 text-[11px] text-slate-600">{content.footer.builtWith[lang]}</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-glow"
            >
              {s.icon}
            </motion.a>
          ))}
          <motion.button
            onClick={toggleLang}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            className="ml-1 rounded-xl border border-cyan-400/25 px-3 py-2 font-mono text-xs tracking-widest text-cyan-300 transition hover:shadow-glow"
          >
            {lang === 'mn' ? 'EN' : 'MN'}
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
