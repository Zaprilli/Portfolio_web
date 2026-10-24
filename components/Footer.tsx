'use client';

import { motion } from 'framer-motion';
import { SocialRow } from './Socials';
import { useLang } from '@/lib/lang-context';
import { useTheme } from '@/lib/theme-context';
import { content } from '@/lib/content';

export default function Footer() {
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="relative border-t border-brand-400/10 bg-abyss/60 backdrop-blur">
      <div className="section-shell flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-white">
            xinn06<span className="text-brand-400">@</span>portfolio
          </p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} Margad-Erdene Byambabasan. {content.footer.rights[lang]}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <SocialRow copiedLabel={content.contactSection.copySuccess[lang]} />
          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              aria-label={`Theme: ${theme}`}
              className="rounded-lg border border-brand-400/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-brand-300 transition hover:shadow-glow"
            >
              {theme === 'green' ? 'green' : 'purple'}
            </motion.button>
            <motion.button
              onClick={toggleLang}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              className="rounded-lg border border-brand-400/25 px-3 py-1.5 font-mono text-[11px] tracking-widest text-brand-300 transition hover:shadow-glow"
            >
              {lang === 'mn' ? 'EN' : 'MN'}
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
