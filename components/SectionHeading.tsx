'use client';

import { motion, type Variants } from 'framer-motion';
import { useLang } from '@/lib/lang-context';
import { content } from '@/lib/content';

interface SectionHeadingProps {
  titleKey: keyof typeof content;
  subtitleKey?: keyof typeof content;
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function SectionHeading({ titleKey, subtitleKey }: SectionHeadingProps) {
  const { lang } = useLang();
  const section = content[titleKey] as { heading: { mn: string; en: string }; subheading?: { mn: string; en: string } };

  const text = (value?: { mn: string; en: string }) => (value ? value[lang] : '');

  return (
    <motion.header
      className="mb-12 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.p
        variants={fadeUpVariants}
        className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-brand-400/70"
      >
        {'// '}
        {lang === 'mn' ? 'ангилал' : 'section'}
      </motion.p>
      <motion.h2
        variants={fadeUpVariants}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        {text(section.heading)}
      </motion.h2>
      {subtitleKey ? (
        <motion.p variants={fadeUpVariants} className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
          {text((content[subtitleKey] as { subheading: { mn: string; en: string } }).subheading)}
        </motion.p>
      ) : null}
      <motion.div
        variants={fadeUpVariants}
        className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-brand-400/70 to-transparent"
      />
    </motion.header>
  );
}
