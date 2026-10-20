"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Studio", href: "#studio" },
  { label: "Agents", href: "#agents" },
  { label: "API", href: "#api" },
  { label: "Contact", href: "#contact-form" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080c09]/80 text-white shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[68px] max-w-auralis items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-8"
        id="main-navigation"
      >
        <Link
          aria-label="Auralis home"
          className="shrink-0 text-[21px] font-semibold tracking-[-0.07em] text-white"
          href="#top"
        >
          Auralis<span className="text-secondary">.</span>
        </Link>
        <div className="hidden items-center gap-4 lg:flex xl:gap-7">
          {links.map((link) => (
            <Link
              className="whitespace-nowrap text-[12px] font-medium text-white/70 transition-colors hover:text-white xl:text-[13px]"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <Link
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13px] font-medium text-primary transition hover:bg-white/90 lg:inline-flex"
            href="#contact-form"
          >
            Get started <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/15 lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="border-t border-white/10 bg-[#080c09]/95 px-4 py-4 text-white shadow-soft backdrop-blur-xl lg:hidden sm:px-8"
          id="mobile-navigation"
        >
          <div className="mx-auto flex max-w-auralis flex-col">
            {links.map((link) => (
              <Link
                className="rounded-xl px-3 py-3 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                href={link.href}
                key={link.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-white/90"
              href="#contact-form"
              onClick={() => setIsMenuOpen(false)}
            >
              Get started <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
