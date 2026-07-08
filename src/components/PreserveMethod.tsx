import { Reveal } from './ui/Reveal';
import { Eyebrow } from './ui/Eyebrow';

const disciplines = [
  {
    label: 'Sleep',
    copy: 'The body repairs in the dark. Suites are built to protect that hour — sound, light, and temperature, tuned nightly to you.',
  },
  {
    label: 'Heal',
    copy: 'Longevity Labs read your biology before anyone recommends anything. Precision first. Theater never.',
  },
  {
    label: 'Nourish',
    copy: 'What is on your plate that week was picked that morning. Nutrition Nest and Only Organics answer to your labs, not a menu.',
  },
];

export function PreserveMethod() {
  return (
    <section id="method" className="bg-limestone-100 py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <Eyebrow tone="dark">The Method</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-rich-black-900 sm:text-4xl">
            Three disciplines. One rhythm.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-rich-black-900/10 pt-14 sm:grid-cols-3 sm:gap-8">
          {disciplines.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <p className="font-micro text-xs uppercase tracking-[0.2em] text-metallic-bronze-700">{item.label}</p>
              <p className="mt-4 text-rich-black-700 leading-relaxed">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
