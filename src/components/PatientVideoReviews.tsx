"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { Play } from "lucide-react";
import type { PatientVideo } from "@/lib/patient-videos";

interface PatientVideoReviewsProps {
  videos: PatientVideo[];
  variant?: "navy" | "light";
}

function formatDuration(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

export default function PatientVideoReviews({ videos, variant = "navy" }: PatientVideoReviewsProps) {
  const isLight = variant === "light";
  // Videos mount only after a click, so no video bytes load on page view.
  const [started, setStarted] = useState<string[]>([]);
  const players = useRef(new Map<string, HTMLVideoElement>());

  const pauseOthers = (id: string) => {
    players.current.forEach((player, key) => {
      if (key !== id && !player.paused) player.pause();
    });
  };

  return (
    <div className="mb-14">
      <h3
        className={`font-heading font-bold text-[22px] md:text-[26px] text-center mb-2 ${
          isLight ? "text-[var(--sv-navy)]" : "text-white"
        }`}
      >
        In Their Own Words
      </h3>
      <p className={`text-base text-center mb-7 ${isLight ? "text-[var(--sv-navy)]/70" : "text-white/70"}`}>
        Short video reviews from patients treated by Dr. Schulman.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {videos.map((video) => {
          const isStarted = started.includes(video.id);
          return (
            <div
              key={video.id}
              className={`rounded-2xl overflow-hidden ${
                isLight ? "bg-white border border-[var(--sv-border)] shadow-sm" : "bg-white/5 border border-white/10"
              }`}
            >
              <div className="relative aspect-video bg-[var(--sv-navy)]">
                {isStarted ? (
                  <video
                    ref={(el) => {
                      if (el) players.current.set(video.id, el);
                      else players.current.delete(video.id);
                    }}
                    className="absolute inset-0 w-full h-full"
                    src={video.src}
                    controls
                    playsInline
                    preload="none"
                    crossOrigin="anonymous"
                    onPlay={() => pauseOthers(video.id)}
                  >
                    <track kind="captions" srcLang="en" label="English" src={video.captions} />
                  </video>
                ) : (
                  <button
                    type="button"
                    aria-label={video.ariaLabel}
                    onClick={() => {
                      // Mount the player synchronously and start it inside the click,
                      // so playback counts as a user gesture (no autoplay on load).
                      flushSync(() => setStarted((ids) => [...ids, video.id]));
                      const player = players.current.get(video.id);
                      player?.focus();
                      player?.play().catch(() => {});
                    }}
                    className="group absolute inset-0 w-full h-full focus-visible:outline-none"
                  >
                    <Image
                      src={video.poster}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 md:w-[68px] md:h-[68px] rounded-full bg-[var(--sv-teal)] ring-[3px] ring-white/90 shadow-lg transition-colors group-hover:bg-[var(--sv-teal-light)] group-focus-visible:bg-[var(--sv-teal-light)] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-[3px] group-focus-visible:outline-[var(--sv-teal-light)]"
                    >
                      <Play className="w-[26px] h-[26px] text-white fill-white translate-x-[2px]" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-3 right-3 rounded-full bg-[var(--sv-navy)]/80 px-[9px] py-[6px] text-xs font-semibold leading-none text-white"
                    >
                      {formatDuration(video.durationSeconds)}
                    </span>
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <div>
                  <p className={`text-[15px] font-semibold ${isLight ? "text-[var(--sv-navy)]" : "text-white"}`}>
                    {video.name}
                  </p>
                  <p className={`text-[13px] ${isLight ? "text-[var(--sv-navy)]/55" : "text-white/55"}`}>
                    {video.meta}
                  </p>
                </div>
                <span
                  title="Captions available"
                  className={`shrink-0 rounded border px-1.5 py-0.5 text-[11px] font-semibold ${
                    isLight
                      ? "text-[var(--sv-teal)] border-[var(--sv-teal)]/50"
                      : "text-[var(--sv-teal-light)] border-[var(--sv-teal-light)]/50"
                  }`}
                >
                  CC
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <p className={`mt-4 text-xs text-center ${isLight ? "text-[var(--sv-navy)]/55" : "text-white/50"}`}>
        Individual results vary.
      </p>
    </div>
  );
}
