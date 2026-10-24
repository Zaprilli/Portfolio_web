'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { Icon } from './icons';
import { useLang } from '@/lib/lang-context';
import { content } from '@/lib/content';

const interestIcons = ['cpu', 'mountain', 'puzzle', 'dumbbell'];

export default function Interests() {
  const { lang } = useLang();
  const items = content.interestsSection.items;

  return (
    <section className="relative py-24">
      <div className="section-shell">
        <SectionHeading titleKey="interestsSection" subtitleKey="interestsSection" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const card = (
              <motion.div
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="glass-card glass-card-hover group flex h-full flex-col items-center gap-3 p-6 text-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-brand-400/20 bg-brand-400/10 text-brand-300 transition group-hover:shadow-glow">
                  <Icon name={interestIcons[i] ?? 'activity'} className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-slate-300 transition group-hover:text-white">
                  {item[lang]}
                </p>
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
