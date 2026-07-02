import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';
import { cn } from '../lib/cn';

interface SplitProps {
  id: string;
  tone: 'dark' | 'light';
  reverse?: boolean;
  eyebrow: string;
  heading: string;
  children: ReactNode;
  image: {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt: string;
  };
  aspect?: string;
  footer?: ReactNode;
}

export function Split({
  id,
  tone,
  reverse = false,
  eyebrow,
  heading,
  children,
  image,
  aspect = 'aspect-[4/5] lg:aspect-[4/3]',
  footer,
}: SplitProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn('py-24 lg:py-36', tone === 'dark' ? 'bg-canopy-800' : 'bg-stone-200')}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal
            className={cn(
              '-mx-6 lg:mx-0',
              reverse ? 'lg:order-last lg:col-span-6 lg:col-start-7' : 'lg:col-span-6',
            )}
          >
            <div className={cn(aspect, 'overflow-hidden')}>
              <m.img
                src={image.src}
                srcSet={image.srcSet}
                sizes={image.sizes}
                alt={image.alt}
                loading="lazy"
                initial={{ scale: reduceMotion ? 1 : 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className={cn('flex flex-col justify-center lg:col-span-5', reverse && 'lg:col-start-1 lg:row-start-1')}>
            <Reveal>
              <Eyebrow tone={tone === 'dark' ? 'light' : 'dark'}>{eyebrow}</Eyebrow>
              <h2
                className={cn(
                  'mt-4 font-display text-3xl leading-tight sm:text-4xl',
                  tone === 'dark' ? 'text-stone-100' : 'text-ink-900',
                )}
              >
                {heading}
              </h2>
              <div
                className={cn(
                  'mt-5 max-w-md leading-relaxed',
                  tone === 'dark' ? 'text-stone-100/70' : 'text-ink-700',
                )}
              >
                {children}
              </div>
              {footer && <div className="mt-8">{footer}</div>}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
