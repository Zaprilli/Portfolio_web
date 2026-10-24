'use client';

import { Globe, Palette } from 'lucide-react';
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
            mrgd06<span className="text-brand-400">@</span>portfolio
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
              title={theme === 'blue' ? 'Switch to purple' : theme === 'purple' ? 'Switch to green' : 'Switch to blue'}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-brand-400/50 hover:text-brand-300 hover:shadow-glow"
            >
              <Palette className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button
              onClick={toggleLang}
              aria-label="Toggle language MN / EN"
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs font-semibold tracking-widest text-slate-200 transition hover:border-brand-400/50 hover:text-white hover:shadow-glow"
            >
              <Globe className="h-3.5 w-3.5" strokeWidth={1.8} />
              {lang === 'mn' ? 'EN' : 'MN'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
