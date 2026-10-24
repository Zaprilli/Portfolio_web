'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, FolderGit2, Mail, Target } from 'lucide-react';
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
  { className: 'top-24 left-[8%] h-64 w-64', color: 'bg-brand-500/20', delay: 0 },
  { className: 'top-40 right-[10%] h-72 w-72', color: 'bg-accent-500/15', delay: 1.2 },
  { className: 'bottom-16 left-[35%] h-56 w-56', color: 'bg-accent-400/10', delay: 2.4 },
];

export default function Hero() {
  const { lang } = useLang();
  const c = content.hero;

  const typedTitle = useTypewriter(c.title[lang], 32, 300);
  const cvHref = lang === 'mn' ? '/cv/CV_Mongolia.pdf' : '/cv/CV_English.pdf';

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
            className="mb-4 font-mono text-sm text-brand-400"
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
            className="typed-caret mt-5 min-h-[3.5rem] font-mono text-base text-brand-300/90 sm:text-lg"
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
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3 text-sm font-semibold text-abyss shadow-glow-strong transition"
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
              {c.ctaContact[lang]}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => go('projects')}
              className="inline-flex items-center gap-2 rounded-xl border border-brand-400/30 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-brand-200 backdrop-blur transition hover:border-brand-300/60 hover:shadow-glow"
            >
              <FolderGit2 className="h-4 w-4" strokeWidth={2} />
              {c.ctaProjects[lang]}
            </motion.button>
            <motion.a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-brand-400/50 hover:text-white hover:shadow-glow"
            >
              <Download className="h-4 w-4" strokeWidth={2} />
              {c.ctaCv[lang]}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {c.status[lang]}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-1.5 text-xs text-brand-300">
              <Target className="h-3.5 w-3.5" strokeWidth={2} />
              {c.ctfGoal[lang]}
            </span>
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative ml-auto w-[85%] overflow-hidden rounded-3xl border border-brand-400/25 bg-white/[0.04] p-1.5 shadow-glow-strong backdrop-blur-xl"
          >
            <div className="relative overflow-hidden rounded-[1.15rem]">
              <Image
                src="/images/profile.jpg"
                alt="Margad-Erdene Byambabasan"
                width={640}
                height={830}
                priority
                className="h-[400px] w-full object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="glass-card relative z-10 -mt-10 ml-0 w-[85%] p-5 font-mono text-xs"
          >
            <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-400/70" />
              <span className="text-[11px] text-slate-500">margad@portfolio:~</span>
            </div>
            <div className="space-y-1.5 text-slate-300">
              <p>
                <span className="text-brand-400">$</span> whoami
              </p>
              <p className="text-accent-300">{lang === 'mn' ? 'маргад-эрдэнэ' : 'margad-erdene'}</p>
              <p>
                <span className="text-brand-400">$</span> cat stack.txt
              </p>
              <p className="text-slate-400">Arch Linux · C · Python · TypeScript</p>
              <p className="text-slate-400">Next.js · React · Supabase · SQL</p>
              <p>
                <span className="text-brand-400">$</span>{' '}
                <span className="inline-block h-3.5 w-2 animate-pulse bg-brand-400 align-middle" />
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => go('achievements')}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand-400/70 transition hover:text-brand-300"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.button>
    </section>
  );
}
