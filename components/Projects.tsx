'use client';

import { motion } from 'framer-motion';
import SectionHeading, { Reveal } from './SectionHeading';
import { useLang } from '@/lib/lang-context';
import { projects } from '@/lib/content';

export default function Projects() {
  const { lang } = useLang();

  return (
    <section id="projects" className="relative py-24">
      <div className="section-shell">
        <SectionHeading titleKey="projectsSection" subtitleKey="projectsSection" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.09}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="glass-card glass-card-hover group relative h-full overflow-hidden p-6"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-xl transition group-hover:shadow-glow">
                      {p.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white transition group-hover:text-cyan-200">
                        {p.name}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-500/70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <motion.span
                    aria-hidden
                    initial={false}
                    animate={{ x: 0, y: 0 }}
                    whileHover={{ x: 4, y: -4 }}
                    className="text-cyan-400/60 transition group-hover:text-cyan-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </motion.span>
                </div>

                <p className="relative mt-4 text-sm leading-relaxed text-slate-400">
                  {p.description[lang]}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300 transition group-hover:border-cyan-400/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
