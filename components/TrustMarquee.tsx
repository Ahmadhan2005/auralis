const capabilities = [
  { name: "Voice creation", mark: "✳" },
  { name: "Conversational agents", mark: "◈" },
  { name: "Speech generation", mark: "✦" },
  { name: "Audio tools", mark: "▦" },
  { name: "Voice API", mark: "⌘" },
  { name: "Voice design", mark: "◉" },
  { name: "Audio intelligence", mark: "✧" },
  { name: "Realtime speech", mark: "◌" },
  { name: "Voice workflows", mark: "⌁" },
  { name: "Speech technology", mark: "✳" },
];

export function TrustMarquee() {
  return (
    <section aria-label="Auralis platform capabilities" className="mb-20 sm:mb-36">
      <p className="mb-6 px-5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary/75 sm:mb-8 sm:text-xs sm:tracking-[0.18em]">
        One platform for modern audio experiences
      </p>
      <div className="marquee-track overflow-hidden">
        <div aria-hidden="true" className="marquee-content flex w-max animate-marquee will-change-transform">
          {[0, 1].map((copy) => (
            <div
              className="flex min-w-[100vw] shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10"
              key={copy}
            >
              {capabilities.map((capability) => (
                <div
                  className="flex shrink-0 items-center gap-1.5 text-white/50 sm:gap-2"
                  key={capability.name}
                >
                  <span className="text-3xl text-emerald-300/80 sm:text-4xl">{capability.mark}</span>
                  <span className="text-xl font-semibold uppercase tracking-[-0.05em] sm:text-2xl">
                    {capability.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
