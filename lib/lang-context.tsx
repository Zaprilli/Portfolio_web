'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { Lang } from '@/lib/content';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue>({
  lang: 'mn',
  setLang: () => {},
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('mn');

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-lang');
    if (stored === 'mn' || stored === 'en') {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem('portfolio-lang', next);
    document.documentElement.lang = next;
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === 'mn' ? 'en' : 'mn';
      window.localStorage.setItem('portfolio-lang', next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
