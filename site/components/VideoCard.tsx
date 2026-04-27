import { Play } from "lucide-react";

export function VideoCard({
  youtubeId,
  title,
  description,
  tag,
  href,
}: {
  youtubeId: string;
  title: string;
  description: string;
  tag?: string;
  href?: string;
}) {
  const link = href ?? `https://www.youtube.com/watch?v=${youtubeId}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-glow"
    >
      <div className="relative aspect-video bg-ink">
        <img
          src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
          alt=""
          className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-ink shadow-warm">
            <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
          </span>
        </span>
      </div>
      <div className="p-5">
        {tag ? (
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-sun-warm">
            {tag}
          </p>
        ) : null}
        <h4 className="font-display text-lg leading-snug">{title}</h4>
        <p className="mt-2 text-sm text-ink/70">{description}</p>
      </div>
    </a>
  );
}
