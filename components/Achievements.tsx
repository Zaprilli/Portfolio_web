'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading, { Reveal } from './SectionHeading';
import { useLang } from '@/lib/lang-context';
import { achievements } from '@/lib/content';

export default function Achievements() {
  const { lang } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section id="achievements" ref={ref} className="relative py-24">
      <div className="section-shell">
        <SectionHeading titleKey="achievementsSection" subtitleKey="achievementsSection" />

        <div className="relative">
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-cyan-400 via-teal-400/60 to-transparent sm:left-1/2"
            aria-hidden
          />

          <div className="space-y-8">
            {achievements.map((a, i) => (
              <Reveal key={a.event} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.35, rotate: 12 }}
                    className={`absolute left-4 top-2 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border border-cyan-400/50 bg-abyss text-[10px] text-cyan-300 shadow-glow sm:left-0 ${
                      i % 2 === 0 ? 'sm:left-auto sm:-right-3 sm:translate-x-0' : 'sm:-left-3'
                    }`}
                  >
                    ●
                  </motion.span>

                  <motion.article
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="glass-card glass-card-hover p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl" aria-hidden>
                        {a.icon}
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-white">{a.event}</h3>
                          <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2 py-0.5 font-mono text-[11px] text-cyan-300">
                            {a.year}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-400">{a.detail[lang]}</p>
                      </div>
                    </div>
                  </motion.article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
