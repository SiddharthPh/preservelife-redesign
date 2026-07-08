import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'outline' | 'ghost';
type Tone = 'dark' | 'light';

interface SharedProps {
  variant?: Variant;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}

function classesFor(variant: Variant, tone: Tone) {
  if (variant === 'primary') {
    return 'inline-flex items-center justify-center gap-2 font-micro text-xs uppercase tracking-[0.18em] rounded-[3px] px-7 py-4 min-h-[44px] transition-colors duration-200 bg-metallic-bronze-500 text-deep-forest-950 hover:bg-metallic-bronze-400';
  }
  if (variant === 'outline') {
    return cn(
      'inline-flex items-center justify-center gap-2 font-micro text-xs uppercase tracking-[0.18em] rounded-[3px] px-7 py-4 min-h-[44px] transition-colors duration-200 border',
      tone === 'dark'
        ? 'border-sage-400/40 text-limestone-100 hover:border-metallic-bronze-400 hover:text-metallic-bronze-400'
        : 'border-rich-black-900/25 text-rich-black-900 hover:border-metallic-bronze-700 hover:text-metallic-bronze-700',
    );
  }
  return cn(
    'inline-flex items-center gap-2 font-micro text-xs uppercase tracking-[0.18em] py-3 min-h-[44px] transition-colors duration-200 group',
    tone === 'dark' ? 'text-limestone-100/85 hover:text-metallic-bronze-400' : 'text-rich-black-900/80 hover:text-metallic-bronze-700',
  );
}

type ButtonProps = SharedProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function Button({ variant = 'primary', tone = 'dark', children, className, href, ...props }: ButtonProps) {
  const classes = cn(classesFor(variant, tone), className);
  const content =
    variant === 'ghost' ? (
      <>
        <span className="underline-offset-4 group-hover:underline">{children}</span>
        <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
