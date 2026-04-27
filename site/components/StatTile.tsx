export function StatTile({
  value,
  label,
  source,
}: {
  value: string;
  label: string;
  source?: string;
}) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white/80 p-6 backdrop-blur">
      <p className="font-display text-4xl text-ink md:text-5xl">{value}</p>
      <p className="mt-2 text-sm text-ink/80">{label}</p>
      {source ? (
        <p className="mt-3 text-[11px] uppercase tracking-wider text-ink/45">
          {source}
        </p>
      ) : null}
    </div>
  );
}
