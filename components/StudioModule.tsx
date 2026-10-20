"use client";

import { motion } from "framer-motion";
import { AudioLines, Captions, Film, Music2, SlidersHorizontal, Sparkles } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

const creationTools = [
  { label: "Music", icon: Music2 },
  { label: "Sound effects", icon: AudioLines },
  { label: "Voice library", icon: Sparkles },
  { label: "Image & video", icon: Film },
];

const studioWaveform = [
  "h-[30%]", "h-[50%]", "h-[40%]", "h-[75%]", "h-[48%]", "h-[90%]", "h-[64%]",
  "h-[38%]", "h-[70%]", "h-[52%]", "h-[84%]", "h-[44%]", "h-[62%]", "h-[34%]",
  "h-[76%]", "h-[54%]",
];

export function StudioModule() {
  return (
    <section className="mx-auto mb-24 max-w-auralis px-5 sm:mb-40 sm:px-8" id="studio">
      <SectionDivider label="Auralis Studio" />
      <div className="mb-8 grid gap-4 sm:mb-12 sm:gap-6 lg:grid-cols-2 lg:items-end">
        <h2 className="max-w-xl text-section">
          Create, refine &amp; scale audio in one place.
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-secondary lg:justify-self-end">
          Your complete creative toolkit, built to turn a spark of an idea into
          studio-quality audio without slowing you down.
        </p>
      </div>
      <div className="mb-5 grid gap-5 md:grid-cols-2">
        <motion.article
          className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-900/60 p-5 text-white shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-emerald-300/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.16)] sm:min-h-[300px] sm:p-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          whileHover={{ scale: 1.02 }}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-emerald-400/15 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
          <div aria-hidden="true" className="relative z-10 flex h-28 w-full items-end justify-center gap-1.5 opacity-80">
            {studioWaveform.map((height, index) => (
              <span
                className={`w-2 rounded-full ${height} ${
                  index > 7 ? "bg-emerald-300" : "bg-green-500"
                }`}
                key={index}
              />
            ))}
          </div>
          <div className="relative z-10 mx-auto max-w-sm text-center">
            <SlidersHorizontal aria-hidden="true" className="mx-auto mb-4 text-emerald-200" size={20} strokeWidth={1.7} />
            <h3 className="text-xl font-semibold tracking-tight">A soft place to create</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Shape voices, refine delivery, and bring every project together
              in a thoughtful editor.
            </p>
          </div>
        </motion.article>
        <motion.article
          className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-900/60 p-5 text-white shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-emerald-300/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.16)] sm:min-h-[300px] sm:p-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-emerald-400/15 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
          <div className="relative z-10 flex max-w-md gap-3 pt-1">
            <span className="rounded-xl border border-white/10 bg-white/5 p-3 text-emerald-200 shadow-sm">
              <Captions aria-hidden="true" size={20} strokeWidth={1.7} />
            </span>
            <div className="flex-1 rounded-xl border border-white/10 bg-zinc-950/50 p-4 text-sm leading-relaxed shadow-sm">
              <p className="text-slate-400">00:04</p>
              <p className="mt-1">Every great story begins with a voice.</p>
              <div className="mt-3 h-1 w-3/4 rounded-full bg-emerald-400/50" />
            </div>
          </div>
          <div className="relative z-10 max-w-sm">
            <h3 className="text-xl font-semibold tracking-tight">Words in perfect sync</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Stay in flow with an accurate transcript that follows every
              moment of your audio.
            </p>
          </div>
        </motion.article>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {creationTools.map(({ label, icon: Icon }, index) => (
          <motion.div
            className="flex min-h-24 flex-col justify-between rounded-2xl border border-emerald-500/25 bg-zinc-900/60 p-4 text-slate-200 shadow-[0_0_35px_rgba(16,185,129,0.08)] backdrop-blur-2xl transition-[border-color,box-shadow,background-color] duration-300 hover:border-emerald-300/50 hover:bg-zinc-800/70 hover:shadow-[0_0_45px_rgba(16,185,129,0.14)] sm:min-h-32 sm:p-5"
            initial={{ opacity: 0, y: 16 }}
            key={label}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ scale: 1.02 }}
          >
            <Icon aria-hidden="true" className="text-emerald-200" size={20} strokeWidth={1.7} />
            <span className="text-sm font-medium">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
