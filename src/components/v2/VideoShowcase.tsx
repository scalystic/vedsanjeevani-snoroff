"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

interface VideoShowcaseProps {
  onOpenVideoModal: (url: string) => void;
}

export default function VideoShowcase({
  onOpenVideoModal,
}: VideoShowcaseProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // Only render <video> after client mount to avoid browser-extension hydration mismatch
  const [mounted, setMounted] = useState(false);

  const videoData = [
    {
      title: "Dr. Ayesha Mehra",
      role: "Founder & Formulator",
      quote:
        "We spent 3 years perfecting this blend of ancient Ayurvedic herbs to address snoring at its root cause.",
      videoUrl: "/founder/founder_1.mp4",
    },
    {
      title: "Dr. Ayesha Mehra",
      role: "Founder & Formulator",
      quote:
        "Every ingredient in Snore Off is cold-pressed, ethically sourced, and clinically validated.",
      videoUrl: "/founder/founder_2.mp4",
    },
    {
      title: "Dr. Ayesha Mehra",
      role: "Founder & Formulator",
      quote:
        "We stand behind every bottle — if you don't sleep better in 30 days, we'll refund you fully.",
      videoUrl: "/founder/founder_3.mp4",
    },
  ];

  // Set mounted after first client render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Track which card is in view via IntersectionObserver
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveIndex(idx);
            }
          });
        },
        {
          root: container,
          threshold: 0.5,
        },
      );
      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Scroll carousel to a specific card index
  const scrollToCard = useCallback((idx: number) => {
    const card = cardRefs.current[idx];
    const container = scrollContainerRef.current;
    if (!card || !container) return;
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  const handlePlayHover = (idx: number) => {
    const video = videoRefs.current[idx];
    if (video && playingIndex !== idx) {
      video.play().catch(() => {});
      setPlayingIndex(idx);
    }
  };

  const handlePlayLeave = (idx: number) => {
    const video = videoRefs.current[idx];
    if (video) {
      video.pause();
      video.currentTime = 0;
      setPlayingIndex(null);
    }
  };

  const handleTouchPlay = (idx: number) => {
    const video = videoRefs.current[idx];
    if (!video) return;
    if (playingIndex === idx) {
      video.pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null && videoRefs.current[playingIndex]) {
        videoRefs.current[playingIndex]!.pause();
        videoRefs.current[playingIndex]!.currentTime = 0;
      }
      video.play().catch(() => {});
      setPlayingIndex(idx);
    }
  };

  return (
    <section className="bg-white dark:bg-zinc-950 py-16 md:py-24 transition-colors duration-300 overflow-hidden">
      <div className="max-w-max-width mx-auto px-4 md:px-section-padding-h">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-1.5 text-brand-button mb-3">
            <span className="material-symbols-outlined text-lg">
              person_play
            </span>
            <span className="font-sans text-[11px] uppercase tracking-widest font-extrabold">
              Brand&apos;s Message
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-heading font-bold tracking-tight">
            WATCH. UNDERSTAND. TRUST.
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant/70 dark:text-zinc-400 mt-3 max-w-md mx-auto leading-relaxed">
            Hear directly from our leaders on the science, sourcing, and story
            behind Snore Off.
          </p>
          <div className="w-12 h-px bg-brand-button mx-auto mt-5" />
        </div>

        {/* Mobile: horizontal scroll snap | Desktop: 3-col grid */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {videoData.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="snap-center shrink-0 w-[78vw] max-w-[300px] md:w-auto md:max-w-none md:shrink group relative aspect-[9/16] overflow-hidden rounded-3xl border border-secondary-container/10 bg-[#faf6e9] dark:bg-zinc-900/10 cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
              onMouseEnter={() => handlePlayHover(idx)}
              onMouseLeave={() => handlePlayLeave(idx)}
              onClick={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  onOpenVideoModal(item.videoUrl);
                } else {
                  handleTouchPlay(idx);
                }
              }}
            >
              {/* Video — only rendered on client to prevent browser-extension hydration mismatch */}
              {mounted && (
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={item.videoUrl}
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 group-hover:via-black/40 transition-all duration-300" />

              {/* Gold frame accent */}
              <div className="absolute inset-4 border border-brand-button/20 group-hover:border-brand-button/50 transition-colors duration-500 rounded-2xl pointer-events-none z-10" />

              {/* Content overlay */}
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between z-10 text-white">
                {/* Top: Play Button only (no Founder badge) */}
                <div className="flex justify-end">
                  <div
                    className={`w-10 h-10 backdrop-blur-md rounded-full border flex items-center justify-center transition-all duration-300 ${
                      playingIndex === idx
                        ? "bg-brand-button border-brand-button text-black"
                        : "bg-white/10 border-white/20 group-hover:bg-brand-button group-hover:text-black group-hover:border-brand-button"
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl ml-0.5">
                      {playingIndex === idx ? "pause" : "play_arrow"}
                    </span>
                  </div>
                </div>

                {/* Bottom: Quote only */}
                <div>
                  <p className="font-sans text-sm font-semibold leading-relaxed text-zinc-100 group-hover:text-white transition-colors">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <span className="md:hidden font-sans text-[9px] text-zinc-400 italic mt-2 block">
                    Tap to play
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: dot indicators — synced + clickable */}
        <div className="flex justify-center gap-3 mt-5 md:hidden">
          {videoData.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to video ${idx + 1}`}
              onClick={() => scrollToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === idx
                  ? "w-6 bg-brand-button"
                  : "w-2 bg-brand-button/30 hover:bg-brand-button/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
