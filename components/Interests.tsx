'use client';

import { motion } from 'framer-motion';
import SectionHeading, { Reveal } from './SectionHeading';
import { useLang } from '@/lib/lang-context';
import { content } from '@/lib/content';

const icons = ['🔧', '🚙', '🧱', '🏃'];

export default function Interests() {
  const { lang } = useLang();
  const items = content.interestsSection.items;

  return (
    <section className="relative py-24">
      <div className="section-shell">
        <SectionHeading titleKey="interestsSection" subtitleKey="interestsSection" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.en} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="glass-card glass-card-hover group flex h-full flex-col items-center gap-3 p-6 text-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl transition group-hover:shadow-glow">
                  {icons[i]}
                </span>
                <p className="text-sm font-medium text-slate-300 transition group-hover:text-white">
                  {item[lang]}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
