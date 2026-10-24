'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Palette } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { useTheme } from '@/lib/theme-context';
import { content } from '@/lib/content';

const links = [
  { id: 'home', key: 'home' as const },
  { id: 'achievements', key: 'achievements' as const },
  { id: 'skills', key: 'skills' as const },
  { id: 'experience', key: 'experience' as const },
  { id: 'contact', key: 'contact' as const },
];

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-brand-400/10 bg-abyss/80 shadow-glow backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2 font-mono text-sm font-semibold text-white"
          aria-label={content.nav.home[lang]}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-brand-400/30 bg-brand-400/10 text-brand-300 transition group-hover:shadow-glow-strong">
            <svg
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
              aria-label="Arch Linux"
              role="img"
            >
              <path d="M12 2.5 3 21.5h4.6L12 11.2l4.4 10.3H21L12 2.5Z" />
              <path d="M8.2 16.4h7.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="hidden sm:inline">
            mrgd06
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ id, key }) => (
            <li key={id}>
              <button
                onClick={() => go(id)}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === id ? 'text-brand-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                {content.nav[key][lang]}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-brand-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            onClick={toggleTheme}
            aria-label={`Theme: ${theme}`}
            title={theme === 'blue' ? 'Switch to purple' : 'Switch to blue'}
            className="grid h-9 w-9 place-items-center rounded-lg border border-brand-400/25 bg-brand-400/10 text-brand-300 transition hover:border-brand-300/60 hover:shadow-glow"
          >
            <Palette className="h-4 w-4" strokeWidth={1.8} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            onClick={toggleLang}
            aria-label="Toggle language MN / EN"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs font-semibold tracking-widest text-slate-200 transition hover:border-brand-400/50 hover:text-white hover:shadow-glow"
          >
            <Globe className="h-3.5 w-3.5" strokeWidth={1.8} />
            {lang === 'mn' ? 'EN' : 'MN'}
          </motion.button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-brand-400/20 text-brand-300 lg:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-0.5 w-full bg-current transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition ${open ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full bg-current transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-brand-400/10 bg-abyss/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="section-shell flex flex-col gap-1 py-4">
              {links.map(({ id, key }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => go(id)}
                    className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${
                      active === id ? 'bg-brand-400/10 text-brand-300' : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {content.nav[key][lang]}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
