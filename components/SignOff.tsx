"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SectionDivider } from "@/components/SectionDivider";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@auralis.ai";

export function SignOff() {
  const [emailPrepared, setEmailPrepared] = useState(false);

  function prepareContactEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent("Auralis product inquiry")}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setEmailPrepared(true);
  }

  return (
    <section
      className="mx-auto mb-20 max-w-auralis px-4 sm:mb-36 sm:px-8"
      id="contact-form"
    >
      <SectionDivider label="Contact" />
      <motion.div
        className="grid gap-8 rounded-[24px] border border-emerald-500/30 bg-zinc-900/60 p-5 text-white shadow-[0_0_50px_rgba(16,185,129,0.1)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-emerald-300/50 hover:shadow-[0_0_60px_rgba(16,185,129,0.16)] sm:gap-10 sm:rounded-[28px] sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center lg:py-4 lg:text-left">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-secondary">
            Your next idea is waiting
          </p>
          <h2 className="mx-auto max-w-3xl text-section lg:mx-0">
            The future of voice starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-secondary lg:mx-0">
            Tell us what you&apos;re building. Your details will be placed in a
            draft email for you to review and send.
          </p>
          <Link
            className="mt-6 inline-flex max-w-full items-center gap-2 break-all text-sm font-medium text-slate-200 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            href={`mailto:${contactEmail}`}
          >
            <Mail aria-hidden="true" size={15} />
            {contactEmail}
            <ArrowUpRight aria-hidden="true" size={14} />
          </Link>
        </div>

        <form className="space-y-4 text-left" onSubmit={prepareContactEmail}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium" htmlFor="contact-name">
                Name
              </label>
              <input
                autoComplete="name"
                className="w-full rounded-xl border border-white/15 bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                id="contact-name"
                maxLength={100}
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium" htmlFor="contact-email">
                Work email
              </label>
              <input
                autoComplete="email"
                className="w-full rounded-xl border border-white/15 bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                id="contact-email"
                maxLength={254}
                name="email"
                placeholder="you@company.com"
                required
                type="email"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium" htmlFor="contact-company">
              Company <span className="font-normal text-secondary">(optional)</span>
            </label>
            <input
              autoComplete="organization"
              className="w-full rounded-xl border border-white/15 bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              id="contact-company"
              maxLength={120}
              name="company"
              placeholder="Company name"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium" htmlFor="contact-message">
              What are you looking to build?
            </label>
            <textarea
              className="min-h-28 w-full resize-y rounded-xl border border-white/15 bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              id="contact-message"
              maxLength={2000}
              name="message"
              placeholder="Tell us a little about your project..."
              required
              rows={4}
            />
          </div>
          <motion.button
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-300 sm:w-auto"
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Prepare inquiry <ArrowUpRight aria-hidden="true" size={16} />
          </motion.button>
          <p aria-live="polite" className="text-xs leading-relaxed text-slate-300" role="status">
            {emailPrepared
              ? `If your email app did not open, send your inquiry to ${contactEmail}.`
              : "This form opens your email app. It does not send or store your details on this website."}
          </p>
        </form>
      </motion.div>
    </section>
  );
}
