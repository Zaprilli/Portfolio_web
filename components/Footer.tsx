'use client';

import { SocialRow } from './Socials';
import { useLang } from '@/lib/lang-context';
import { useTheme } from '@/lib/theme-context';
import { content } from '@/lib/content';

export default function Footer() {
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="relative border-t border-brand-400/10 bg-abyss/60 backdrop-blur">
      <div className="section-shell flex flex-col items-center gap-5 py-8 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-white">
            xinn06<span className="text-brand-400">@</span>portfolio
          </p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} Margad-Erdene Byambabasan. {content.footer.rights[lang]}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <SocialRow copiedLabel={content.contactSection.copySuccess[lang]} plain />
          <span className="hidden h-6 w-px bg-white/10 sm:block" aria-hidden />
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={`Theme: ${theme}`}
              className="rounded-lg border border-brand-400/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-brand-300 transition-colors hover:border-brand-400/60 hover:shadow-glow"
            >
              {theme === 'green' ? 'green' : 'purple'}
            </button>
            <button
              onClick={toggleLang}
              aria-label="Toggle language MN / EN"
              className="rounded-lg border border-brand-400/25 px-3 py-1.5 font-mono text-[11px] tracking-widest text-brand-300 transition-colors hover:border-brand-400/60 hover:shadow-glow"
            >
              {lang === 'mn' ? 'EN' : 'MN'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
