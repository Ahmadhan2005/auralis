"use client";

import { motion } from "framer-motion";
import { AudioLines, Captions, Layers3, SlidersHorizontal } from "lucide-react";

const previewBars = [
  "h-3", "h-5", "h-7", "h-4", "h-9", "h-6", "h-11", "h-5",
];

const overviewCards = [
  {
    title: "A workspace that gets out of your way",
    description: "A calm, precise creative space for shaping every detail of your sound.",
    icon: SlidersHorizontal,
    tint: "from-indigo-400/20 via-violet-400/10 to-transparent",
  },
  {
    title: "Every word, right on time",
    description: "Keep dialogue and audio in sync with clear, accurate transcripts.",
    icon: Captions,
    tint: "from-emerald-400/20 via-teal-400/10 to-transparent",
  },
];

export function Overview() {
  return (
    <section className="mx-auto mb-24 max-w-auralis px-5 sm:mb-40 sm:px-8" id="overview">
      <motion.div
        className="mx-auto mb-10 max-w-3xl text-center sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-section">
          Two systems.
          <br />
          <span className="text-secondary/55">One shared intelligence.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-secondary sm:mt-6 sm:text-lg">
          Create expressive audio and deploy responsive voice experiences with
          a platform designed to work beautifully together.
        </p>
      </motion.div>
      <div className="mb-6 grid gap-5 md:grid-cols-2">
        {overviewCards.map(({ title, description, icon: Icon, tint }, index) => (
          <motion.article
            className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-900/60 p-5 text-white shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-emerald-300/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.16)] sm:min-h-[285px] sm:p-9"
            initial={{ opacity: 0, y: 20 }}
            key={title}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-gradient-to-br ${tint} opacity-45 transition-opacity group-hover:opacity-75`}
            />
            <Icon aria-hidden="true" className="relative z-10 text-emerald-200" size={20} strokeWidth={1.7} />
            <div className="relative z-10 max-w-md">
              <h3 className="text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                {title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-300">
                {description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-900/60 p-4 text-white shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        whileHover={{ borderColor: "rgba(110, 231, 183, 0.5)", boxShadow: "0 0 60px rgba(16, 185, 129, 0.16)" }}
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-300">Auralis workspace</p>
            <p className="mt-1 text-sm font-semibold">Project overview</p>
          </div>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-slate-300">
            Interface concept
          </span>
        </div>
        <p className="mb-3 text-[10px] text-slate-400">
          Illustrative interface concept — not a live product screenshot.
        </p>
        <div className="grid min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 shadow-soft backdrop-blur-xl md:min-h-[300px] md:grid-cols-[190px_1fr]">
          <aside className="hidden border-r border-white/10 bg-white/[0.03] p-5 md:block">
            <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-white">
              <span className="h-5 w-5 rounded-md bg-emerald-400" />
              Auralis Studio
            </div>
            <div className="space-y-4 text-[11px] text-slate-300">
              <p className="font-medium text-emerald-200">My projects</p>
              <p>Voice library</p>
              <p>Discover</p>
              <p>Settings</p>
            </div>
          </aside>
          <div className="p-4 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  Recent project
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight">
                  A brighter tomorrow
                </p>
              </div>
              <button
                aria-label="Audio project options"
                className="rounded-full border border-white/15 p-2 text-slate-300"
                type="button"
              >
                <Layers3 aria-hidden="true" size={15} />
              </button>
            </div>
            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:mt-7 sm:p-5">
              <div className="mb-4 flex items-center gap-2 text-[11px] font-medium text-slate-300">
                <AudioLines aria-hidden="true" size={15} />
                Voice track · Rachel
              </div>
              <div className="flex h-14 items-center gap-1 overflow-hidden">
                {Array.from({ length: 56 }, (_, index) => (
                  <span
                    className={`${previewBars[index % previewBars.length]} w-1 shrink-0 rounded-full ${
                      index > 34 ? "bg-emerald-300" : "bg-cyan-300/60"
                    }`}
                    key={index}
                  />
                ))}
              </div>
              <div className="mt-4 flex justify-between text-[10px] text-slate-400">
                <span>00:00</span>
                <span>00:42</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
