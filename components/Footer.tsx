'use client';

import { SocialRow } from './Socials';
import { useLang } from '@/lib/lang-context';
import { content } from '@/lib/content';

export default function Footer() {
  const { lang } = useLang();

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
          <SocialRow copiedLabel={content.contactSection.copySuccess[lang]} plain showLabels />
        </div>
      </div>
    </footer>
  );
}
