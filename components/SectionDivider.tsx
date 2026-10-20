export function SectionDivider({ label }: { label: string }) {
  return (
    <div className="mb-8 flex items-center gap-3 sm:gap-4">
      <span className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/90 sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[0.13em]">
        {label}
      </span>
      <span aria-hidden="true" className="h-px min-w-0 flex-1 bg-white/25" />
    </div>
  );
}
