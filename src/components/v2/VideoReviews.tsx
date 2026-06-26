"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

interface VideoReviewsProps {
  onOpenVideoModal: (url: string) => void;
  onAddToCart: (
    id: string,
    name: string,
    price: number,
    image: string,
    size: string,
  ) => void;
}

const customerVideos = [
  {
    name: "Suresh P.",
    location: "Mumbai",
    videoUrl: "/ugc/ugc_1.mp4",
    productName: "Snore Off Nabhi Oil",
  },
  {
    name: "Karan M.",
    location: "Pune",
    videoUrl: "/ugc/ugc_2.mp4",
    productName: "Snore Off Nabhi Oil",
  },
  {
    name: "Rajesh K.",
    location: "Ahmedabad",
    videoUrl: "/ugc/ugc_3.mp4",
    productName: "Snore Off Nabhi Oil",
  },
  {
    name: "Mohit S.",
    location: "Delhi",
    videoUrl: "/ugc/ugc_4.mp4",
    productName: "Snore Off Nabhi Oil",
  },
  {
    name: "Vikram L.",
    location: "Bangalore",
    videoUrl: "/ugc/ugc_5.mp4",
    productName: "Snore Off Nabhi Oil",
  },
  {
    name: "Arun R.",
    location: "Chennai",
    videoUrl: "/ugc/ugc_6.mp4",
    productName: "Snore Off Nabhi Oil",
  },
];

export default function VideoReviews({}: VideoReviewsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const header = section.querySelector(".ugc-header");
    const cards = section.querySelectorAll(".ugc-card");
    gsap.set(header, { opacity: 0, y: 35 });
    gsap.set(cards, { opacity: 0, y: 45, scale: 0.95 });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        gsap.to(header, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.15,
        });
      },
      { threshold: 0.05 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white dark:bg-zinc-950 py-14 md:py-24 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-max-width mx-auto px-4 md:px-section-padding-h">
        {/* Header */}
        <div className="ugc-header text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-1 text-brand-button mb-2">
            <span className="material-symbols-outlined text-lg">groups</span>
            <span className="font-sans text-[11px] uppercase tracking-widest font-extrabold">
              Real Customers
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-heading font-bold tracking-tight">
            HEAR IT FROM THE PEOPLE USING IT.
          </h2>
          <div className="w-12 h-px bg-brand-button mx-auto mt-4" />
        </div>

        {/* ── Mobile: horizontal scroll row ── */}
        <div
          className="md:hidden flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {customerVideos.map((item, idx) => (
            <VideoCard key={idx} item={item} mobile />
          ))}
        </div>

        {/* ── Desktop: 6-up grid ── */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-5">
          {customerVideos.map((item, idx) => (
            <VideoCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── */
/*  Self-contained card — owns its own ref + state  */
/* ─────────────────────────────────────────────── */
interface VideoCardProps {
  item: (typeof customerVideos)[0];
  mobile?: boolean;
}

function VideoCard({ item, mobile }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  // Only render <video> after client mount to avoid browser-extension hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    if (mobile) return;
    const video = videoRef.current;
    if (video && video.paused) {
      video
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (mobile) return;
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
      video.currentTime = 0;
      setPlaying(false);
    }
  };

  const handleEnded = () => {
    setPlaying(false);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareData = {
      title: "Snore Off Nabhi Oil",
      text: `${item.name} from ${item.location} swears by Snore Off! Check it out.`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* user cancelled */
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        /* clipboard denied */
      }
    }
  };

  const wrapClass = mobile
    ? "ugc-card shrink-0 snap-start w-[200px]"
    : "ugc-card w-full";

  return (
    <div className={wrapClass}>
      <div
        className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-black"
        style={{ aspectRatio: "9/16" }}
        onClick={toggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video — object-contain ensures the full frame is always visible */}
        {mounted && (
          <video
            ref={videoRef}
            src={item.videoUrl}
            muted
            playsInline
            onEnded={handleEnded}
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Gold frame accent */}
        <div className="absolute inset-[6px] border border-brand-button/20 group-hover:border-brand-button/50 transition-colors duration-500 rounded-xl pointer-events-none z-10" />

        {/* Share button — top-right */}
        <div className="absolute top-2.5 right-2.5 z-30">
          <button
            onClick={handleShare}
            className="w-8 h-8 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-brand-button hover:text-black hover:border-brand-button transition-all duration-200"
            title={copied ? "Link copied!" : "Share this video"}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px" }}
            >
              {copied ? "check" : "share"}
            </span>
          </button>
        </div>

        {/* Play icon — fades when playing */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <span
            className={`material-symbols-outlined text-white/90 drop-shadow-lg transition-opacity duration-300 ${
              mobile ? "text-4xl" : "text-5xl"
            } ${playing ? "opacity-0" : "opacity-75"}`}
          >
            play_circle
          </span>
        </div>

        {/* Name, location & product name */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-2.5 pb-2.5 pt-8">
          <p className="font-sans text-[9px] text-brand-button/90 uppercase tracking-widest font-bold leading-tight truncate mb-0.5">
            {item.productName}
          </p>
          <p className="font-sans text-[10px] font-black text-white uppercase tracking-wide leading-tight truncate">
            {item.name}
          </p>
          <p className="font-sans text-[9px] text-white/60 leading-tight">
            {item.location}
          </p>
        </div>
      </div>
    </div>
  );
}
