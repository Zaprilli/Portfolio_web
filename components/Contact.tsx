'use client';

import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Download, Send, Target, UserRound } from 'lucide-react';
import SectionHeading, { Reveal } from './SectionHeading';
import { SocialRow } from './Socials';
import { useLang } from '@/lib/lang-context';
import { content } from '@/lib/content';
import { buttonHover, buttonTap } from '@/lib/motion';

type Errors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const { lang } = useLang();
  const cs = content.contactSection;
  const cvHref = content.cv[lang];

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = cs.errorRequired[lang];
    if (!form.email.trim()) next.email = cs.errorRequired[lang];
    else if (!EMAIL_RE.test(form.email.trim())) next.email = cs.errorEmail[lang];
    if (!form.message.trim()) next.message = cs.errorRequired[lang];
    return next;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    // Frontend-only mock. Replace with a POST request when an API is available.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const fieldClass = (hasError?: string) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none backdrop-blur transition focus:bg-white/[0.06] ${
      hasError
        ? 'border-red-400/60 focus:border-red-400'
        : 'border-white/10 focus:border-brand-400/60 focus:shadow-glow'
    }`;

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading titleKey="contactSection" subtitleKey="contactSection" />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass-card flex h-full flex-col gap-6 p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-400/25 bg-brand-400/10 text-brand-300">
                  <Send className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-brand-400/80">{'// secure_channel'}</p>
                  <p className="text-sm text-slate-400">{cs.sideNote[lang]}</p>
                </div>
              </div>

              <div className="rounded-xl border border-brand-400/25 bg-brand-400/10 p-4">
                <p className="flex items-start gap-2 text-xs leading-relaxed text-brand-200">
                  <Target className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {cs.ctfInvite[lang]}
                </p>
              </div>

              <div>
                <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                  <Briefcase className="h-3.5 w-3.5" />
                  {cs.services.heading[lang]}
                </p>
                <ul className="space-y-2">
                  {cs.services.items.map((item) => (
                    <li
                      key={item.en}
                      className="flex min-w-0 items-start gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs leading-relaxed text-slate-300 [overflow-wrap:break-word]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                  <UserRound className="h-3.5 w-3.5" />
                  {cs.channelsLabel[lang]}
                </p>
                <SocialRow copiedLabel={cs.copySuccess[lang]} />
              </div>

              <a
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-white hover:shadow-glow active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                {content.hero.ctaCv[lang]}
              </a>

              <p className="rounded-lg border border-amber-400/25 bg-amber-400/10 p-3 text-xs text-amber-200/90">
                {cs.disclaimer[lang]}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-3">
            <form onSubmit={onSubmit} noValidate className="glass-card p-6 sm:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-400">
                    {cs.fields.name.label[lang]}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={set('name')}
                    placeholder={cs.fields.name.placeholder[lang]}
                    aria-invalid={Boolean(errors.name)}
                    className={fieldClass(errors.name)}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-400">
                    {cs.fields.email.label[lang]}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder={cs.fields.email.placeholder[lang]}
                    aria-invalid={Boolean(errors.email)}
                    className={fieldClass(errors.email)}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-400">
                  {cs.fields.message.label[lang]}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={set('message')}
                  placeholder={cs.fields.message.placeholder[lang]}
                  aria-invalid={Boolean(errors.message)}
                  className={`${fieldClass(errors.message)} resize-none`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <motion.button
                  type="submit"
                  disabled={status !== 'idle'}
                  whileHover={status === 'idle' ? buttonHover : undefined}
                  whileTap={status === 'idle' ? buttonTap : undefined}
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3 text-sm font-semibold text-abyss shadow-glow-strong transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? cs.sending[lang] : cs.submit[lang]}
                  {status === 'idle' && <Send className="h-4 w-4" />}
                </motion.button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-sm text-emerald-300"
                    >
                      {cs.success[lang]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
