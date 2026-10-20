"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Pause, Play, Sparkles, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

const products = ["Auralis Studio", "Auralis Agents", "Auralis API"] as const;
const productDetails = {
  "Auralis Studio": {
    label: "AI Voice Generator",
    features: ["AI Voice Generator", "Text to Speech", "Music", "Sound Effects", "Voice Cloning"],
    preview:
      "Welcome to Auralis Studio. Create natural, expressive audio and bring every voice experience to life.",
  },
  "Auralis Agents": {
    label: "Conversational Agents",
    features: ["Conversational Agents", "Realtime Responses", "Voice Handoff", "Analytics"],
    preview:
      "Hello, welcome to Auralis. I can help you create a natural voice experience for your customers.",
  },
  "Auralis API": {
    label: "Developer API",
    features: ["Speech API", "Streaming Audio", "Voice Library", "Developer Tools"],
    preview:
      "Build with the Auralis API. Integrate natural voice experiences into the products you create.",
  },
};
const bars = [
  "h-8", "h-12", "h-16", "h-10", "h-20", "h-14", "h-24", "h-16", "h-10",
  "h-20", "h-12", "h-24", "h-16", "h-8", "h-12", "h-20", "h-14", "h-24",
  "h-10", "h-16", "h-12", "h-20", "h-8", "h-14", "h-24", "h-12", "h-[4.5rem]",
];

export function ProductPanel() {
  const [activeProduct, setActiveProduct] = useState<(typeof products)[number]>(products[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState("");
  const productDetail = productDetails[activeProduct];

  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, []);

  function togglePreview() {
    if (!("speechSynthesis" in window)) {
      setAudioError("Audio preview is not supported by this browser.");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(productDetail.preview);
    utterance.lang = "en-US";
    utterance.rate = 0.92;
    utterance.onstart = () => {
      setAudioError("");
      setIsPlaying(true);
    };
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = (event) => {
      setIsPlaying(false);
      if (event.error !== "canceled" && event.error !== "interrupted") {
        setAudioError("The voice preview could not be played. Please try again.");
      }
    };
    window.speechSynthesis.speak(utterance);
  }

  return (
    <section className="mx-auto mb-20 mt-10 max-w-auralis px-4 sm:mb-32 sm:mt-16 sm:px-8" id="product">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[24px] border border-emerald-500/30 bg-zinc-900/60 p-4 text-white shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl transition-shadow duration-300 hover:border-emerald-300/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.16)] sm:min-h-[590px] sm:rounded-[28px] sm:p-8 lg:p-10"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <div className="auralis-orb left-[12%] top-[32%] h-56 w-56 bg-rose-500/20 sm:h-72 sm:w-72" />
          <div className="auralis-orb left-[33%] top-[18%] h-72 w-72 bg-indigo-500/20 sm:h-[26rem] sm:w-[26rem]" />
          <div className="auralis-orb left-[52%] top-[34%] h-56 w-56 bg-emerald-400/20 sm:h-72 sm:w-72" />
          <div className="auralis-orb right-[4%] top-[20%] h-64 w-64 bg-sky-500/20 sm:h-[22rem] sm:w-[22rem]" />
          <div className="absolute inset-0 bg-zinc-950/30" />
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
          <div
            aria-label="Choose a product"
            className="flex max-w-full gap-0.5 overflow-x-auto rounded-full border border-white/15 bg-zinc-950/50 p-1 shadow-sm backdrop-blur-xl sm:gap-1"
            role="group"
          >
            {products.map((product) => (
              <button
                aria-pressed={activeProduct === product}
                className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[10px] font-medium transition-colors sm:px-4 sm:text-xs ${
                  activeProduct === product
                    ? "bg-emerald-400/20 text-emerald-100 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
                key={product}
                onClick={() => setActiveProduct(product)}
                type="button"
              >
                {product}
              </button>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto my-7 flex w-full max-w-3xl flex-col items-center text-center sm:my-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-950/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-200 backdrop-blur-md sm:mb-6 sm:text-[10px] sm:tracking-[0.16em]">
            <Sparkles aria-hidden="true" size={13} />
            {productDetail.label} preview
          </div>
          <div
            aria-label="Audio waveform visualization"
            className="flex h-20 w-full items-center justify-center gap-1 sm:h-40 sm:gap-1.5"
          >
            {bars.map((height, index) => (
              <span
                aria-hidden="true"
                className={`${isPlaying ? "waveform-bar-active" : "waveform-bar-idle"} ${height} w-1 rounded-full bg-gradient-to-t ${
                  index > 15
                    ? "from-cyan-400/50 to-emerald-400"
                    : "from-emerald-400/40 to-cyan-500"
                } sm:w-1.5`}
                key={`${height}-${index}`}
              />
            ))}
          </div>
          <motion.button
            aria-label={isPlaying ? "Pause audio preview" : "Play audio preview"}
            className="mt-2 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/40 bg-zinc-800/90 text-white shadow-[0_0_24px_rgba(16,185,129,0.18)] transition-shadow hover:shadow-[0_0_32px_rgba(16,185,129,0.28)] sm:mt-3 sm:h-[72px] sm:w-[72px]"
            onClick={togglePreview}
            type="button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            {isPlaying ? (
              <Pause aria-hidden="true" className="fill-current" size={22} />
            ) : (
              <Play aria-hidden="true" className="ml-1 fill-current" size={22} />
            )}
          </motion.button>
          <span className="mt-2 text-[11px] font-medium text-slate-200 sm:mt-3 sm:text-xs">
            {isPlaying ? "Playing browser voice preview" : "Listen to a browser voice preview"}
          </span>
          {audioError && (
            <p aria-live="polite" className="mt-2 text-xs font-medium text-rose-300" role="status">
              {audioError}
            </p>
          )}
          <p className="mt-2 max-w-sm text-[9px] leading-relaxed text-slate-300 sm:text-[10px]">
            <Volume2 aria-hidden="true" className="mr-1 inline" size={12} />
            Sample speech uses your browser&apos;s built-in voice; it is not a
            generated Auralis audio file.
          </p>
        </div>

        <div className="relative z-10 flex flex-col justify-between gap-3 rounded-2xl border border-white/15 bg-zinc-950/50 p-3 shadow-sm backdrop-blur-xl sm:flex-row sm:items-center sm:gap-4 sm:p-4">
          <div aria-label={`${activeProduct} capabilities`} className="flex gap-4 overflow-x-auto px-2 py-1 sm:gap-5" role="list">
            {productDetail.features.map((feature) => (
              <span
                className="whitespace-nowrap text-xs font-medium text-slate-200"
                key={feature}
                role="listitem"
              >
                {feature}
              </span>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-xs font-semibold text-zinc-950 transition-colors hover:bg-emerald-300"
              href="#contact-form"
            >
              Try Auralis <ArrowUpRight aria-hidden="true" size={14} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
