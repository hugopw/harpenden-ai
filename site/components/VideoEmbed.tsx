"use client";

export function VideoEmbed({
  youtubeId,
  title,
  caption,
}: {
  youtubeId: string;
  title: string;
  caption?: string;
}) {
  return (
    <figure className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-black shadow-glow">
      <div className="relative aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption ? (
        <figcaption className="bg-ink px-5 py-3 text-sm text-chalk/80">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
