'use client';

import { motion } from 'framer-motion';
import SectionHeading, { Reveal } from './SectionHeading';
import { Icon } from './icons';
import { useLang } from '@/lib/lang-context';
import { skillCategories } from '@/lib/content';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 32, rotateX: -12 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Skills() {
  const { lang } = useLang();

  return (
    <section id="skills" className="relative py-24">
      <div className="section-shell">
        <SectionHeading titleKey="skillsSection" subtitleKey="skillsSection" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          style={{ perspective: 1000 }}
        >
          {skillCategories.map((cat) => (
            <motion.div key={cat.category.en} variants={card}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="glass-card glass-card-hover group h-full p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand-400/25 bg-brand-400/10 text-brand-300 transition group-hover:shadow-glow">
                    <Icon name={cat.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-white">{cat.category[lang]}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * j, duration: 0.35 }}
                      whileHover={{ y: -3, borderColor: 'rgba(var(--brand-rgb), 0.7)' }}
                      className="cursor-default rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <div className="glass-card mt-10 overflow-hidden py-4">
            <div className="flex w-max animate-marquee gap-8 font-mono text-xs text-brand-400/80">
              {[...skillCategories.flatMap((c) => c.items), ...skillCategories.flatMap((c) => c.items)].map(
                (item, i) => (
                  <span key={`${item}-${i}`} className="whitespace-nowrap">
                    {item} <span className="text-accent-400/60">◆</span>
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
