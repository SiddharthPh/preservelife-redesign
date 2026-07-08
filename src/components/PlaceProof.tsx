import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';

const stats = [
  { value: '1,200+', label: 'Acres of Forest' },
  { value: '3', label: 'Private Lakes' },
  { value: '40', label: 'Minutes From Atlanta' },
  { value: '1', label: 'Way In — By Invitation' },
];

export function PlaceProof() {
  return (
    <section id="the-land" className="bg-limestone-100 py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="-mx-6 lg:col-span-7 lg:mx-0">
            <div className="aspect-[4/5] overflow-hidden lg:aspect-[16/11]">
              <img
                src="/images/home-page/Aerial-Wellness-web-1-1536x854.webp"
                srcSet="
                  /images/home-page/Aerial-Wellness-web-1-768x427.webp 768w,
                  /images/home-page/Aerial-Wellness-web-1-1024x569.webp 1024w,
                  /images/home-page/Aerial-Wellness-web-1-1536x854.webp 1536w,
                  /images/home-page/Aerial-Wellness-web-1-2048x1139.webp 2048w
                "
                sizes="(min-width: 1024px) 58vw, 100vw"
                alt="Aerial view of the Preserve Life lodge, a slender wood-and-glass structure set on a forested peninsula surrounded by lake water"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="dark">The Land</Eyebrow>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-rich-black-900 sm:text-4xl">
                A nature preserve first. A sanctuary because of it.
              </h2>
              <p className="mt-5 max-w-md text-rich-black-700 leading-relaxed">
                The land came before the program. Twelve hundred acres of hardwood forest and
                still water, held in trust and left mostly alone — the same quiet that makes the
                work here possible.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-rich-black-900/10 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-heading text-3xl text-metallic-bronze-600 sm:text-4xl">{stat.value}</dd>
                    <p className="mt-1.5 font-micro text-[11px] uppercase tracking-[0.14em] text-rich-black-700">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
