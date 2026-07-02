import { m, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Slight upward drift as it fades in. Set to 0 for a plain crossfade. */
  distance?: number;
  as?: 'div' | 'span';
}

export function Reveal({ children, className, delay = 0, distance = 18, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const d = reduceMotion ? 0 : distance;

  const variants: Variants = {
    hidden: { opacity: 0, y: d },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const Component = m[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
