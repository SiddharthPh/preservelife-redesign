import { cn } from '../../lib/cn';

interface EyebrowProps {
  children: string;
  tone?: 'dark' | 'light';
  className?: string;
}

export function Eyebrow({ children, tone = 'dark', className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'font-mono text-xs uppercase tracking-[0.22em]',
        tone === 'dark' ? 'text-ink-700' : 'text-mist-400',
        className,
      )}
    >
      {children}
    </span>
  );
}
