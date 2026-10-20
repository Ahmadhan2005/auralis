"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Headphones, MessageCircle, UserRound } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

const analyticsBars = [
  "h-[30%]", "h-[48%]", "h-[72%]", "h-[54%]", "h-[86%]", "h-[64%]",
  "h-full", "h-[72%]", "h-1/2", "h-[68%]", "h-[42%]",
];

export function AgentsModule() {
  return (
    <section className="mx-auto mb-24 max-w-auralis px-5 sm:mb-40 sm:px-8" id="agents">
      <SectionDivider label="Auralis Agents" />
      <div className="mb-8 grid gap-4 sm:mb-12 sm:gap-6 lg:grid-cols-2 lg:items-end">
        <h2 className="max-w-xl text-section">
          Build agents that listen, respond &amp; act.
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-secondary lg:justify-self-end">
          Make every conversation feel effortless with responsive voice agents
          that connect naturally across your customer experience.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <motion.article
          className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-900/60 p-4 text-white shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-emerald-300/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.16)] sm:min-h-[450px] sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          whileHover={{ scale: 1.02 }}
        >
          <div aria-hidden="true" className="auralis-orb left-[20%] top-[15%] h-48 w-48 bg-sky-400/20" />
          <div aria-hidden="true" className="auralis-orb right-[10%] top-[32%] h-48 w-48 bg-violet-400/20" />
          <div className="relative z-10 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-zinc-950/50 px-4 py-2 text-xs font-medium text-slate-200 shadow-sm backdrop-blur">
            <Headphones aria-hidden="true" className="text-emerald-200" size={18} strokeWidth={1.7} />
            Omnichannel agents
          </div>
          <div className="relative z-10 space-y-3 rounded-2xl border border-white/10 bg-zinc-950/55 p-4 shadow-soft backdrop-blur-xl sm:p-5">
            <div className="flex items-end gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-zinc-950">
                <Bot aria-hidden="true" size={15} />
              </span>
              <p className="rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.08] px-4 py-3 text-xs text-slate-100 sm:text-sm">
                Hello! How can I help you today?
              </p>
            </div>
            <div className="flex items-end justify-end gap-2">
              <p className="rounded-2xl rounded-br-sm bg-emerald-400 px-4 py-3 text-xs text-zinc-950 sm:text-sm">
                I need help checking my deployment.
              </p>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-slate-200">
                <UserRound aria-hidden="true" size={15} />
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1 text-[10px] text-slate-300">
              <MessageCircle aria-hidden="true" size={13} />
              Natural conversation, no waiting.
            </div>
          </div>
        </motion.article>

        <motion.article
          className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-900/60 p-4 text-white shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-emerald-300/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.16)] sm:min-h-[450px] sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-2/3 items-end justify-center gap-2 px-8 opacity-50">
            {analyticsBars.map((height, index) => (
              <span
                className={`w-full rounded-t-md ${height} ${index === 6 ? "bg-emerald-400/30" : "bg-white/10"}`}
                key={index}
              />
            ))}
          </div>
          <div className="relative z-10 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-zinc-950/50 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur">
            Illustrative analytics preview <ArrowUpRight aria-hidden="true" size={13} />
          </div>
          <div className="relative z-10 rounded-2xl border border-white/10 bg-zinc-950/55 p-4 shadow-soft backdrop-blur-xl sm:p-6">
            <p className="text-xs font-medium text-slate-400">Example dashboard · sample values</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">Deep insights</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-300">
              Understand every interaction with real-time quality, engagement,
              and performance metrics.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 sm:mt-5 sm:gap-3">
              {[
                ["—", "Resolution"],
                ["—", "Response"],
                ["—", "Satisfaction"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-sm font-semibold">{value}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-wide text-slate-400 sm:text-[10px]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
