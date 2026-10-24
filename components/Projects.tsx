'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { Icon } from './icons';
import { useLang } from '@/lib/lang-context';
import { projects } from '@/lib/content';

export default function Projects() {
  const { lang } = useLang();

  return (
    <section id="projects" className="relative py-24">
      <div className="section-shell">
        <SectionHeading titleKey="projectsSection" subtitleKey="projectsSection" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const body = (
              <>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-400/25 bg-brand-400/10 text-brand-300 transition group-hover:shadow-glow">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white transition group-hover:text-brand-200">
                        {p.name}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-brand-500/80">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`h-5 w-5 shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1 ${
                      p.href ? 'text-brand-400' : 'text-white/15'
                    }`}
                  />
                </div>

                <p className="relative mt-4 text-sm leading-relaxed text-slate-400">
                  {p.description[lang]}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300 transition group-hover:border-brand-400/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            const cardClass =
              'glass-card glass-card-hover group relative block h-full overflow-hidden p-6';

            return (
              <Reveal key={p.name} delay={i * 0.09} className="h-full">
                {p.href ? (
                  <motion.a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className={cardClass}
                  >
                    {body}
                  </motion.a>
                ) : (
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className={cardClass}
                  >
                    {body}
                  </motion.article>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
