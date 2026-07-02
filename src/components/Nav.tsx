import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/cn';

const links = [
  { href: '#the-land', label: 'The Land' },
  { href: '#method', label: 'The Method' },
  { href: '#labs', label: 'Longevity Labs' },
  { href: '#sleep-suites', label: 'Sleep Suites' },
  { href: '#nutrition', label: 'Nutrition' },
  { href: '#corporate-homes', label: 'Corporate Homes' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled ? 'bg-canopy-950/90 backdrop-blur-md shadow-[0_1px_0_0_rgb(0,0,0,0.3)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-10">
        <a id="logo" href="#top" className="relative z-10 block h-8 w-auto" aria-label="Preserve Life — home">
          <img src="/images/logos/main-logo.png" alt="Preserve Life" className="h-8 w-auto" />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-stone-100/90 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="#invitation" variant="primary" className="!px-5 !py-3">
            Request a Private Introduction
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center text-stone-100 lg:hidden"
        >
          <Menu aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-canopy-950 lg:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <span id="logo" className="block h-7 w-auto">
              <img src="/images/logos/main-logo.png" alt="Preserve Life" className="h-7 w-auto" />
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center text-stone-100"
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-2 px-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-stone-100/90 py-3 transition-colors hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="px-8 pb-10">
            <Button href="#invitation" variant="primary" onClick={() => setOpen(false)} className="w-full">
              Request a Private Introduction
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
