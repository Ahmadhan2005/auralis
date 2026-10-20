"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative isolate mx-auto flex min-h-[calc(100svh-68px)] max-w-auralis flex-col items-center justify-center overflow-hidden px-5 py-14 text-center sm:min-h-[calc(100svh-72px)] sm:px-8 sm:py-20"
      id="top"
    >
      <div aria-hidden="true" className="hero-orb pointer-events-none absolute right-[4%] top-[18%] h-44 w-44 opacity-45 sm:right-[8%] sm:top-[12%] sm:h-64 sm:w-64 lg:right-[12%] lg:h-72 lg:w-72" />
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex w-full flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 sm:mb-8 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
          AI voice infrastructure
        </p>
        <h1 className="max-w-[1100px] text-[clamp(3.25rem,12vw,5.5rem)] leading-[0.94] tracking-[-0.075em] sm:text-[clamp(5rem,9vw,8.5rem)]">
          AI audio that
          <br />
          <span className="text-white/60">sounds human.</span>
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-white/90 sm:min-h-14 sm:px-8 sm:py-4 sm:text-base"
              href="#contact-form"
            >
              Start creating <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </motion.div>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:min-h-14 sm:px-8 sm:py-4 sm:text-base"
            href="#contact-form"
          >
            Talk to sales
          </Link>
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mt-8 flex flex-col items-center sm:mt-10"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="max-w-2xl text-base leading-relaxed text-white/75 sm:text-xl sm:leading-relaxed">
          From the first word to the final interaction, give every voice a
          little more life.
        </p>
        <Link
          className="mt-6 inline-flex w-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-white sm:mt-8 sm:text-xs"
          href="#product"
        >
          Explore the platform <ArrowDown aria-hidden="true" size={14} />
        </Link>
      </motion.div>
    </section>
  );
}
