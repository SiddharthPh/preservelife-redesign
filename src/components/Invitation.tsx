import { useState, type FormEvent } from 'react';
import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';
import { Button } from './ui/Button';

const fieldClasses =
  'w-full border-b border-stone-100/25 bg-transparent py-3 text-stone-100 placeholder:text-stone-100/60 focus:border-gold-400 focus:outline-none transition-colors';
const labelClasses = 'font-mono text-[11px] uppercase tracking-[0.14em] text-stone-100/60';

export function Invitation() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="invitation" className="bg-canopy-950 py-28 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <Eyebrow tone="light">The Invitation</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-stone-100 sm:text-5xl">
              Preserve Life is not open to the public.
            </h2>
            <p className="mt-5 max-w-md text-stone-100/70 leading-relaxed">
              Access begins with a private conversation, not an application form. Tell us a little
              about yourself, and we&apos;ll be in touch.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            {submitted ? (
              <div className="border border-stone-100/15 p-8">
                <p className="font-display text-2xl text-stone-100">Thank you.</p>
                <p className="mt-3 text-stone-100/70">
                  Your request has been received. A member of our team will reach out privately
                  within a few days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className={labelClasses} htmlFor="name">
                    Full Name
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" className={fieldClasses} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className={labelClasses} htmlFor="email">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={fieldClasses} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className={labelClasses} htmlFor="phone">
                    Phone <span className="normal-case tracking-normal text-stone-100/60">(optional)</span>
                  </label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClasses} />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className={labelClasses} htmlFor="message">
                    What brings you to Preserve Life? <span className="normal-case tracking-normal text-stone-100/60">(optional)</span>
                  </label>
                  <textarea id="message" name="message" rows={3} className={fieldClasses + ' resize-none'} />
                </div>

                <div className="sm:col-span-2">
                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    Request a Private Introduction
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
