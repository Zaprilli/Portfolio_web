'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
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

  const applyLanguage = useCallback((next: Lang) => {
    const update = () => {
      setLangState(next);
      window.localStorage.setItem('portfolio-lang', next);
      document.documentElement.lang = next;
    };
    const transitionDocument = document as Document & {
      startViewTransition?: (callback: () => void) => unknown;
    };

    if (
      transitionDocument.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      transitionDocument.startViewTransition(() => flushSync(update));
    } else {
      update();
    }
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-lang');
    if (stored === 'mn' || stored === 'en') {
      setLangState(stored);
      document.documentElement.lang = stored;
    } else {
      document.documentElement.lang = 'mn';
    }
  }, []);

  const setLang = useCallback((next: Lang) => applyLanguage(next), [applyLanguage]);

  const toggleLang = useCallback(() => {
    applyLanguage(lang === 'mn' ? 'en' : 'mn');
  }, [applyLanguage, lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
