import { LazyMotion, domAnimation } from 'framer-motion';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { PlaceProof } from './components/PlaceProof';
import { FeaturedFilm } from './components/FeaturedFilm';
import { PreserveMethod } from './components/PreserveMethod';
import { Split } from './components/Split';
import { Invitation } from './components/Invitation';
import { Footer } from './components/Footer';

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:bg-metallic-bronze-500 focus:px-4 focus:py-2 focus:font-micro focus:text-xs focus:uppercase focus:tracking-[0.14em] focus:text-deep-forest-950"
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <PlaceProof />
        <FeaturedFilm />
        <PreserveMethod />

        <Split
          id="labs"
          tone="dark"
          eyebrow="Longevity Labs"
          heading="Data, not guesswork."
          aspect="aspect-[4/5] lg:aspect-[7/4]"
          image={{
            src: '/images/home-page/1-1-1536x889.webp',
            srcSet:
              '/images/home-page/1-1-768x445.webp 768w, /images/home-page/1-1-1024x593.webp 1024w, /images/home-page/1-1-1536x889.webp 1536w',
            sizes: '(min-width: 1024px) 50vw, 100vw',
            alt: 'A cantilevered wood-slat roofline over glass walls, part of the Longevity Labs facility set among trees',
          }}
        >
          <p>
            Every guest begins with a full biological assessment — bloodwork, body composition,
            cardiovascular and metabolic markers — reviewed by clinicians, not an algorithm alone.
            What we find shapes the days that follow.
          </p>
          <p className="mt-4">We don&apos;t promise reversal. We promise clarity you can act on.</p>
        </Split>

        <Split
          id="sleep-suites"
          tone="light"
          reverse
          eyebrow="Sleep Suites"
          heading="Ten hours of undisturbed forest."
          aspect="aspect-[4/5] lg:aspect-[5/3]"
          image={{
            src: '/images/home-page/Lodge-Window-View-web-jpg.webp',
            srcSet:
              '/images/home-page/Lodge-Window-Small-1024x573.webp 1024w, /images/home-page/Lodge-Window-View-web-jpg.webp 2500w',
            sizes: '(min-width: 1024px) 50vw, 100vw',
            alt: 'A private Sleep Suite bedroom with forest-facing windows, wood ceiling beams, and warm lamplight',
          }}
        >
          <p>
            Each suite stands apart in the trees — single-occupant, sound-isolated,
            circadian-lit, temperature-zoned through the night. No shared walls. No shared air.
          </p>
          <p className="mt-4">Here, sleep architecture is not a metaphor. It&apos;s the actual architecture.</p>
        </Split>

        <Split
          id="nutrition"
          tone="dark"
          eyebrow="Nutrition Nest · Only Organics"
          heading="From greenhouse to plate, same afternoon."
          aspect="aspect-[4/5] lg:aspect-[2/1]"
          image={{
            src: '/images/home-page/230412_Wellness-center-Interior-Nutrition-Area-57-copy-1536x786.webp',
            srcSet:
              '/images/home-page/230412_Wellness-center-Interior-Nutrition-Area-57-copy-768x393.webp 768w, /images/home-page/230412_Wellness-center-Interior-Nutrition-Area-57-copy-1024x524.webp 1024w, /images/home-page/230412_Wellness-center-Interior-Nutrition-Area-57-copy-1536x786.webp 1536w',
            sizes: '(min-width: 1024px) 50vw, 100vw',
            alt: 'Chefs preparing food at stainless steel islands in the Nutrition Nest culinary studio, with a living moss wall behind them',
          }}
        >
          <p>
            Our kitchen works from what the property grows. A working greenhouse, orchard, and
            garden supply the table daily, and meals are built around your labs rather than a
            printed menu.
          </p>
          <p className="mt-4">Little arrives from more than a mile away unless the season insists.</p>
        </Split>

        <Split
          id="corporate-homes"
          tone="light"
          reverse
          eyebrow="Corporate Homes"
          heading="Where leadership recovers off the record."
          aspect="aspect-[4/5] lg:aspect-[6/5]"
          image={{
            src: '/images/home-page/1-2-768x648.webp',
            srcSet: '/images/home-page/1-2-300x253.webp 300w, /images/home-page/1-2-768x648.webp 768w',
            sizes: '(min-width: 1024px) 50vw, 100vw',
            alt: 'A private courtyard at dusk with a firepit and seating arranged among tensile canopy tents',
          }}
        >
          <p>
            A small number of private residences, reserved for executive teams who need distance
            from signal — not another offsite with a keynote.
          </p>
          <p className="mt-4">Meetings happen if you choose them. Mostly, they don&apos;t.</p>
        </Split>

        <Invitation />
      </main>

      <Footer />
    </LazyMotion>
  );
}

export default App;
