'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLang } from '@/lib/lang-context';
import { content } from '@/lib/content';

function useTypewriter(text: string, speed = 45, startDelay = 400) {
  const [out, setOut] = useState('');

  useEffect(() => {
    setOut('');
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length && interval) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return out;
}

const floatingOrbs = [
  { className: 'top-24 left-[8%] h-64 w-64', color: 'bg-cyan-500/20', delay: 0 },
  { className: 'top-40 right-[10%] h-72 w-72', color: 'bg-sky-500/15', delay: 1.2 },
  { className: 'bottom-16 left-[35%] h-56 w-56', color: 'bg-teal-400/10', delay: 2.4 },
];

export default function Hero() {
  const { lang } = useLang();
  const c = content.hero;

  const typedTitle = useTypewriter(c.title[lang], 32, 300);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 18 });
  const springY = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-8deg', '8deg']);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section
      id="home"
      onPointerMove={onPointerMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.className}
          aria-hidden
          className={`pointer-events-none absolute ${orb.className} ${orb.color} rounded-full blur-3xl`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: orb.delay, repeat: Infinity, repeatType: 'reverse' }}
        />
      ))}

      <div className="section-shell relative z-10 grid items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 font-mono text-sm text-cyan-400"
          >
            {c.greeting[lang]}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            <span className="neon-text">{c.name[lang]}</span>
          </motion.h1>

          <motion.p
            key={lang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="typed-caret mt-5 min-h-[3.5rem] font-mono text-base text-cyan-300/90 sm:text-lg"
          >
            {'> '}
            {typedTitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-4 max-w-xl leading-relaxed text-slate-400"
          >
            {c.bio[lang]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => go('contact')}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3 text-sm font-semibold text-abyss shadow-glow-strong transition"
            >
              {c.ctaContact[lang]}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => go('projects')}
              className="rounded-xl border border-cyan-400/30 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-cyan-200 backdrop-blur transition hover:border-cyan-300/60 hover:shadow-glow"
            >
              {c.ctaProjects[lang]}
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {c.status[lang]}
          </motion.div>
        </div>

        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="glass-card glass-card-hover p-6 font-mono text-sm">
            <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-slate-500">~/portfolio — zsh</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <p><span className="text-cyan-400">$</span> whoami</p>
              <p className="text-teal-300">{lang === 'mn' ? 'маргад-эрдэнэ' : 'margad-erdene'}</p>
              <p><span className="text-cyan-400">$</span> cat stack.txt</p>
              <p className="text-slate-400">Arch Linux · C · Python · TypeScript</p>
              <p className="text-slate-400">Next.js · React · Supabase · SQL</p>
              <p><span className="text-cyan-400">$</span> cat ctf.log | head -3</p>
              <p className="text-cyan-300">NUMCTF 2025 — 2nd place 🏆</p>
              <p className="text-cyan-300">Haruulzangi CTF 2026 — Top 50 🚩</p>
              <p className="text-cyan-300">OpenwaveWanderlab — 3rd place 🔬</p>
              <p>
                <span className="text-cyan-400">$</span>{' '}
                <span className="inline-block h-4 w-2 animate-pulse bg-cyan-400 align-middle" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => go('achievements')}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyan-400/70 transition hover:text-cyan-300"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.button>
    </section>
  );
}
