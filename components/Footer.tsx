import Link from "next/link";

const footerLinks = [
  { label: "Studio", href: "#studio" },
  { label: "Agents", href: "#agents" },
  { label: "API", href: "#api" },
  { label: "Contact", href: "#contact-form" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080c09]/80 text-white backdrop-blur-xl" id="footer">
      <div className="mx-auto max-w-auralis px-5 py-8 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <Link className="w-fit text-lg font-semibold tracking-[-0.07em]" href="#top">
              Auralis<span className="text-secondary">.</span>
            </Link>
            <p className="text-xs text-secondary">
              © 2026 Auralis AI. Engineered for precision.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                className="text-xs text-secondary transition-colors hover:text-primary"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="text-xs text-secondary transition-colors hover:text-primary"
              href="https://github.com"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </Link>
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-2 border-t border-outline pt-5 text-[11px] text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            Created by <span className="font-semibold text-primary">Ahmadhan</span>
          </p>
          <p>Designed with care for better voice experiences.</p>
        </div>
      </div>
    </footer>
  );
}
