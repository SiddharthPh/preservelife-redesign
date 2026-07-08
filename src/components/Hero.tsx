import { useEffect, useRef, useState } from 'react';
import { m, useReducedMotion, type Variants } from 'framer-motion';
import { Button } from './ui/Button';
import { Eyebrow } from './ui/Eyebrow';

const POSTER = '/images/home-page/backtonature-jpg-2048x1260.webp';
const VIDEO = '/videos/home-page/Preserve%20Life%20Property.mp4';
const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowMotion, setAllowMotion] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAllowMotion(!query.matches);
  }, []);

  useEffect(() => {
    if (!allowMotion) videoRef.current?.pause();
  }, [allowMotion]);

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
  };

  const lineMask: Variants = {
    hidden: { y: reduceMotion ? 0 : '105%' },
    visible: { y: '0%', transition: { duration: 1.1, ease: EASE } },
  };

  return (
    <section id="top" className="relative flex min-h-dvh items-end overflow-hidden bg-deep-forest-950">
      <div className="absolute inset-0">
        {allowMotion && (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={VIDEO}
            poster={POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        )}
        {!allowMotion && (
          <img
            src={POSTER}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest-950 via-deep-forest-950/20 to-deep-forest-950/50" />
        <div className="absolute inset-0 canopy-drift" />
      </div>

      <m.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-40 sm:pb-28 lg:px-10 lg:pb-32"
      >
        <div className="max-w-2xl">
          <m.div variants={fadeUp}>
            <Eyebrow tone="light">1,200+ Acres · Near Atlanta · By Invitation</Eyebrow>
          </m.div>

          <h1 className="mt-5 font-heading text-[2.75rem] leading-[1.05] text-limestone-100 sm:text-6xl lg:text-[5.5rem]">
            <span className="block overflow-hidden">
              <m.span variants={lineMask} className="block">
                Enter slowly.
              </m.span>
            </span>
            <span className="block overflow-hidden">
              <m.span variants={lineMask} className="block">
                Leave <em className="italic text-metallic-bronze-400">different</em>.
              </m.span>
            </span>
          </h1>

          <m.p variants={fadeUp} className="mt-6 max-w-md text-base leading-relaxed text-limestone-100/75 sm:text-lg">
            Preserve Life is a private longevity sanctuary set on untouched Georgia forest, forty
            minutes from Atlanta — reached only by invitation.
          </m.p>

          <m.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="#invitation" variant="primary">
              Request a Private Introduction
            </Button>
            <Button href="#the-land" variant="ghost" tone="dark">
              Explore the Preserve
            </Button>
          </m.div>
        </div>
      </m.div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden h-12 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-limestone-100/50 to-transparent sm:block"
      />
    </section>
  );
}
