import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/Button';
import { Eyebrow } from './ui/Eyebrow';

const POSTER = '/images/home-page/backtonature-jpg-2048x1260.webp';
const VIDEO = '/videos/home-page/Preserve%20Life%20Property.mp4';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAllowMotion(!query.matches);
  }, []);

  useEffect(() => {
    if (!allowMotion) videoRef.current?.pause();
  }, [allowMotion]);

  return (
    <section id="top" className="relative flex min-h-dvh items-end overflow-hidden bg-canopy-950">
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
          <img src={POSTER} alt="" aria-hidden="true" className="h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-canopy-950 via-canopy-950/20 to-canopy-950/50" />
        <div className="absolute inset-0 canopy-drift" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-40 sm:pb-28 lg:px-10 lg:pb-32">
        <div className="max-w-2xl">
          <Eyebrow tone="light">1,200+ Acres · Near Atlanta · By Invitation</Eyebrow>
          <h1 className="mt-5 font-display text-[2.75rem] leading-[1.05] text-stone-100 sm:text-6xl lg:text-[5.5rem]">
            Enter slowly.
            <br />
            Leave different.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone-100/75 sm:text-lg">
            Preserve Life is a private longevity sanctuary set on untouched Georgia forest, forty
            minutes from Atlanta — reached only by invitation.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#invitation" variant="primary">
              Request a Private Introduction
            </Button>
            <Button href="#the-land" variant="outline" tone="dark">
              Explore the Preserve
            </Button>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden h-12 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-stone-100/50 to-transparent sm:block"
      />
    </section>
  );
}
