'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { Icon } from './icons';
import { useLang } from '@/lib/lang-context';
import { achievements, content, ctfLinks } from '@/lib/content';

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
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-brand-400 via-accent-400/60 to-transparent sm:left-1/2"
            aria-hidden
          />

          <div className="space-y-6">
            {achievements.map((a, i) => (
              <Reveal key={a.event} delay={i * 0.07}>
                <div
                  className={`relative flex flex-col pl-12 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.35, rotate: 12 }}
                    className={`absolute left-4 top-3 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border border-brand-400/50 bg-abyss text-brand-300 shadow-glow sm:left-0 ${
                      i % 2 === 0 ? 'sm:left-auto sm:-right-3 sm:translate-x-0' : 'sm:-left-3'
                    }`}
                  >
                    <Icon name={a.icon} className="h-3 w-3" />
                  </motion.span>

                  <motion.article
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="glass-card glass-card-hover p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand-400">
                        <Icon name={a.icon} className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-white">{a.event}</h3>
                          <span className="rounded-full border border-brand-400/25 bg-brand-400/10 px-2 py-0.5 font-mono text-[11px] text-brand-300">
                            {a.year}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-400">{a.detail[lang]}</p>
                        {a.href && (
                          <a
                            href={a.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center gap-1 rounded-md border border-brand-400/25 bg-brand-400/10 px-2 py-1 font-mono text-[11px] text-brand-300 transition hover:border-brand-300/60 hover:shadow-glow"
                          >
                            {(() => {
                              const h = a.href!.toLowerCase();
                              if (h.endsWith('.pdf')) return 'PDF';
                              if (/ctftime|ctf\.mn|hackthebox|hackerrank|cylab|tetr\.io/.test(h))
                                return lang === 'mn' ? 'профайл' : 'profile';
                              if (/news|site\.num/.test(h)) return lang === 'mn' ? 'мэдээ' : 'news';
                              return lang === 'mn' ? 'линк' : 'link';
                            })()}
                            <ArrowUpRight className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.3em] text-brand-400/70">
              {'// '}
              {content.achievementsSection.trackLabel[lang]}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ctfLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card glass-card-hover group p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-white transition group-hover:text-brand-200">
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-400/70 transition group-hover:text-brand-300" />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{link.note[lang]}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
