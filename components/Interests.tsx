'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { Icon } from './icons';
import { useLang } from '@/lib/lang-context';
import { content } from '@/lib/content';

const interestIcons = ['cpu', 'puzzle', 'gamepad', 'dumbbell'];

export default function Interests() {
  const { lang } = useLang();
  const items = content.interestsSection.items;

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading titleKey="interestsSection" subtitleKey="interestsSection" />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, i) => {
            const card = (
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="glass-card glass-card-hover group flex h-full flex-col items-center gap-3 p-6 text-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brand-400/20 bg-brand-400/10 text-brand-300 transition group-hover:shadow-glow">
                  <Icon name={interestIcons[i] ?? 'activity'} className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-slate-300 transition group-hover:text-white">
                  {item[lang]}
                </p>
                {item.subs && (
                  <ul className="space-y-1 text-left">
                    {item.subs.map((sub) => (
                      <li
                        key={sub.en}
                        className="flex items-start gap-1.5 text-xs leading-relaxed text-slate-500 transition group-hover:text-slate-400"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400/70" />
                        {sub.href ? (
                          <a
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-brand-400 transition hover:text-brand-300 hover:underline"
                          >
                            {sub[lang]}
                            <ExternalLink className="h-3 w-3 shrink-0" />
                          </a>
                        ) : (
                          sub[lang]
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {item.href && (
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-brand-400 transition group-hover:text-brand-300">
                    {new URL(item.href).hostname.replace(/^www\./, '')}
                    <ExternalLink className="h-3 w-3" />
                  </span>
                )}
              </motion.div>
            );

            return (
              <Reveal key={item.en} delay={i * 0.08}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
