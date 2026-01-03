import { useEffect, useState } from "react";
import { Play } from "lucide-react";

export function HeroVideoDialog({
  className = "",
  animationStyle = "top-in-bottom-out",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Vídeo",
  thumbnailClassName = "w-full",
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        className={`group relative block overflow-hidden rounded-2xl ${thumbnailClassName}`}
        onClick={() => setOpen(true)}
        aria-label="Reproduzir vídeo"
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#c3f5bf] transition group-hover:scale-105">
          <Play className="h-10 w-10 drop-shadow" />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`relative w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl transition-transform duration-300 ${
              animationStyle === "top-in-bottom-out" ? "translate-y-0" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {videoSrc?.endsWith(".mp4") ? (
              <video
                src={videoSrc}
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] w-full"
              />
            ) : (
              <iframe
                src={videoSrc}
                title="Hero Video"
                className="aspect-video h-auto w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
            <button
              type="button"
              className="absolute right-3 top-3 rounded-md bg-white/10 px-2 py-1 text-sm text-white backdrop-blur hover:bg-white/20"
              onClick={() => setOpen(false)}
              aria-label="Fechar vídeo"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
