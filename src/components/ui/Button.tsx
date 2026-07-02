import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'outline';
type Tone = 'dark' | 'light';

interface SharedProps {
  variant?: Variant;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.18em] rounded-[3px] px-7 py-4 transition-colors duration-200 min-h-[44px]';

function variantClasses(variant: Variant, tone: Tone) {
  if (variant === 'primary') {
    return 'bg-gold-500 text-canopy-950 hover:bg-gold-400';
  }
  return tone === 'dark'
    ? 'border border-mist-400/40 text-stone-100 hover:border-gold-400 hover:text-gold-400'
    : 'border border-ink-900/25 text-ink-900 hover:border-gold-700 hover:text-gold-700';
}

type ButtonProps = SharedProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function Button({ variant = 'primary', tone = 'dark', children, className, href, ...props }: ButtonProps) {
  const classes = cn(base, variantClasses(variant, tone), className);

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
