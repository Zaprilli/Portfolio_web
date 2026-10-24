'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading, { Reveal } from './SectionHeading';
import { Icon } from './icons';
import { useLang } from '@/lib/lang-context';
import { content, timeline } from '@/lib/content';

const typeStyles: Record<string, string> = {
  education: 'border-accent-400/40 bg-accent-400/10 text-accent-300',
  work: 'border-brand-400/40 bg-brand-400/10 text-brand-300',
  service: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
  training: 'border-violet-400/40 bg-violet-400/10 text-violet-300',
};

const typeIcons: Record<string, string> = {
  education: 'graduation-cap',
  work: 'briefcase',
  service: 'shield-check',
  training: 'terminal',
};

export default function Experience() {
  const { lang } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const progress = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  const labels = content.experienceSection.labels;

  return (
    <section id="experience" ref={ref} className="relative py-24">
      <div className="section-shell">
        <SectionHeading titleKey="experienceSection" subtitleKey="experienceSection" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 sm:left-1/2" aria-hidden />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-brand-400 to-accent-400 shadow-glow sm:left-1/2"
            aria-hidden
          />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={`${item.org.en}-${item.period}`} delay={i * 0.1}>
                  <div
                    className={`relative flex flex-col pl-12 sm:w-1/2 ${
                      isLeft ? 'sm:pl-0 sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.3 }}
                      className={`absolute left-4 top-1 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border bg-abyss sm:left-0 ${
                        isLeft ? 'sm:left-auto sm:-right-3.5 sm:translate-x-0' : 'sm:-left-3.5'
                      } ${typeStyles[item.type]}`}
                    >
                      <Icon name={typeIcons[item.type]} className="h-3.5 w-3.5" />
                    </motion.span>

                    <motion.article
                      whileHover={{ y: -6 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                      className="glass-card glass-card-hover p-5"
                    >
                      <div
                        className={`mb-2 flex flex-wrap items-center gap-2 ${isLeft ? 'sm:justify-end' : ''}`}
                      >
                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${typeStyles[item.type]}`}
                        >
                          {labels[item.type][lang]}
                        </span>
                        <span className="font-mono text-[11px] text-slate-500">{item.period}</span>
                      </div>

                      <h3 className="font-semibold text-white">{item.role[lang]}</h3>
                      <p className="mt-0.5 text-sm text-brand-400/90">{item.org[lang]}</p>
                      {item.description && (
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                          {item.description[lang]}
                        </p>
                      )}
                    </motion.article>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
