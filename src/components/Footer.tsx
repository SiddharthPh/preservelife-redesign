const explore = [
  { href: '#the-land', label: 'The Land' },
  { href: '#method', label: 'The Method' },
  { href: '#labs', label: 'Longevity Labs' },
  { href: '#sleep-suites', label: 'Sleep Suites' },
  { href: '#nutrition', label: 'Nutrition' },
  { href: '#corporate-homes', label: 'Corporate Homes' },
];

const company = [
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Press' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
];

const socials = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Facebook' },
  { href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-smoked-obsidian py-14">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span id="logo" className="block h-9 w-auto">
              <img src="/images/logos/main-logo.png" alt="Preserve Life" className="h-9 w-auto" />
            </span>
            <p className="mt-5 font-micro text-xs uppercase tracking-[0.2em] text-metallic-bronze-500">Come Alive</p>
            <p className="mt-5 max-w-xs text-sm text-limestone-100/65 leading-relaxed">
              A private longevity sanctuary on 1,200+ acres, forty minutes from Atlanta, Georgia.
            </p>

            <ul className="mt-8 flex items-center gap-5">
              {socials.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-micro text-[11px] uppercase tracking-[0.12em] text-limestone-100/70 transition-colors hover:text-metallic-bronze-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Explore" className="lg:col-span-3 lg:col-start-6">
            <p className="font-micro text-[11px] uppercase tracking-[0.14em] text-limestone-100/60">Explore</p>
            <ul className="mt-5 flex flex-col gap-3">
              {explore.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-limestone-100/70 transition-colors hover:text-metallic-bronze-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-3 lg:col-start-9">
            <p className="font-micro text-[11px] uppercase tracking-[0.14em] text-limestone-100/60">Company</p>
            <ul className="mt-5 flex flex-col gap-3">
              {company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-limestone-100/70 transition-colors hover:text-metallic-bronze-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-limestone-100/10 pt-8 text-xs text-limestone-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Preserve Life. All rights reserved.</p>
          <p>By invitation only.</p>
        </div>
      </div>
    </footer>
  );
}
