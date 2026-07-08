import { useState } from 'react';
import { Play } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';

const VIMEO_ID = '1020392003';
const POSTER = '/images/home-page/home-page-jpg.webp';

export function FeaturedFilm() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="film" className="bg-deep-forest-950 py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="light">The Film</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-limestone-100 sm:text-4xl">
            A place best understood in motion.
          </h2>
          <p className="mt-4 text-limestone-100/70">No narration necessary.</p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mx-auto mt-14 max-w-5xl border border-metallic-bronze-500/20 p-2 sm:p-3"
        >
          <div className="relative aspect-video overflow-hidden">
            {playing ? (
              <iframe
                className="h-full w-full"
                src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&title=0&byline=0&portrait=0`}
                title="Preserve Life — Featured Film"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group relative block h-full w-full"
                aria-label="Play the Preserve Life film"
              >
                <img
                  src={POSTER}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-deep-forest-950/30 transition-colors duration-300 group-hover:bg-deep-forest-950/15" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-limestone-100/40 bg-deep-forest-950/40 backdrop-blur-md transition-colors duration-300 group-hover:border-metallic-bronze-400">
                    <Play aria-hidden="true" className="ml-1 h-6 w-6 fill-limestone-100 text-limestone-100" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
