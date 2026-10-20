"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Braces, Code2, Workflow } from "lucide-react";
import Link from "next/link";
import { SectionDivider } from "@/components/SectionDivider";

const capabilities = [
  {
    icon: Braces,
    title: "Built for developers",
    description: "Bring voice generation into the products and experiences you create.",
  },
  {
    icon: Workflow,
    title: "Fits your workflow",
    description: "Explore a voice API concept alongside Studio and Agents.",
  },
];

export function ApiModule() {
  return (
    <section className="mx-auto mb-24 max-w-auralis px-5 text-white sm:mb-40 sm:px-8" id="api">
      <SectionDivider label="Auralis API" />
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-secondary sm:text-xs">
            <Code2 aria-hidden="true" size={15} />
            Voice, ready to build with
          </p>
          <h2 className="max-w-xl text-section">
            Bring natural voice into your product.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-secondary sm:text-base">
            Explore the Auralis API concept for adding expressive speech to
            digital experiences. Contact us to discuss access and integration.
          </p>
          <motion.div className="mt-7 inline-flex" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-white/90"
              href="#contact-form"
            >
              Ask about the API <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </motion.div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                className="rounded-2xl border border-emerald-500/30 bg-zinc-900/60 p-4 text-white shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-emerald-300/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.16)] sm:p-5"
                initial={{ opacity: 0, y: 16 }}
                key={title}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
              >
                <Icon aria-hidden="true" className="mb-4 text-emerald-200" size={20} strokeWidth={1.7} />
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="min-w-0 overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-900/60 text-white shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-emerald-300/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.16)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ borderColor: "rgba(110, 231, 183, 0.5)", boxShadow: "0 0 60px rgba(16, 185, 129, 0.16)" }}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="ml-2 text-[10px] text-white/50 sm:text-xs">voice-example.ts</span>
            </div>
            <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-wider text-white/50">
              Preview
            </span>
          </div>
          <pre className="overflow-x-auto p-4 text-[11px] leading-6 sm:p-6 sm:text-xs sm:leading-7">
            <code>
              <span className="text-violet-300">const</span>
              {" voice = "}
              <span className="text-sky-300">await</span>
              {" auralis.speech.create({\n"}
              {"  "}
              <span className="text-emerald-300">text</span>
              {": "}
              <span className="text-amber-200">&quot;Hello, world.&quot;</span>
              {",\n  "}
              <span className="text-emerald-300">voice</span>
              {": "}
              <span className="text-amber-200">&quot;aria&quot;</span>
              {",\n  "}
              <span className="text-emerald-300">format</span>
              {": "}
              <span className="text-amber-200">&quot;mp3&quot;</span>
              {"\n});\n\n"}
              <span className="text-violet-300">await</span>
              {" voice.play();"}
            </code>
          </pre>
          <p className="border-t border-white/10 px-4 py-3 text-[10px] leading-relaxed text-white/50 sm:px-6">
            Illustrative code only — this is not a live endpoint or working SDK.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
