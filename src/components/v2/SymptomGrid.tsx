"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import snoringImg from "../../../public/pain/1.png";
import dryThroatImg from "../../../public/pain/2.png";
import wakingImg from "../../../public/pain/3.png";
import exhaustionImg from "../../../public/pain/4.png";

const CARD_GAP = 12; // gap-3 = 12px

export default function SymptomGrid() {
  const [activeCard, setActiveCard] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const swipeHintRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isDragging = useRef(false);

  const symptoms = [
    {
      title: "Loud, disruptive snoring",
      description:
        "Dry airway passages and tissue vibration causing noisy respiratory airflow.",
      image: snoringImg,
      alt: "Disruptive snoring",
    },
    {
      title: "Morning dry throat",
      description:
        "A scratchy, parched sensation in the throat due to mouth breathing.",
      image: dryThroatImg,
      alt: "Parched dry throat in the morning",
    },
    {
      title: "Frequent midnight waking",
      description:
        "Arousals and sudden restlessness triggered by minor oxygen flow dips.",
      image: wakingImg,
      alt: "Restless sleep and waking up at midnight",
    },
    {
      title: "Daytime exhaustion",
      description:
        "Brain fog, low energy, and fatigue due to lack of deep, restorative REM cycles.",
      image: exhaustionImg,
      alt: "Tiredness and fatigue during the day",
    },
  ];

  // Scroll entrance animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const header = section.querySelector(".symptom-header");
    const cards = section.querySelectorAll(".symptom-desktop-card");
    gsap.set(header, { opacity: 0, y: 35 });
    gsap.set(cards, { opacity: 0, y: 45, scale: 0.96 });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        gsap.to(header, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
        gsap.to(cards, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "power2.out", delay: 0.15 });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* ── Animate to card ── */
  const animateToCard = (idx: number) => {
    if (!sliderRef.current) return;
    const isMobile = window.innerWidth < 1024; // lg breakpoint

    if (isMobile && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      gsap.to(sliderRef.current, {
        x: -(idx * (cardWidth + CARD_GAP)),
        duration: 0.45,
        ease: "power2.out",
      });
    } else {
      // Desktop — no animation needed (grid layout)
    }
  };

  useEffect(() => {
    animateToCard(activeCard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  // Re-snap on resize / orientation change
  useEffect(() => {
    const onResize = () => animateToCard(activeCard);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  // Swipe hint: fade out after 3 s
  useEffect(() => {
    if (!showSwipeHint) return;
    const t = setTimeout(() => {
      if (swipeHintRef.current) {
        gsap.to(swipeHintRef.current, {
          opacity: 0,
          y: 6,
          duration: 0.5,
          onComplete: () => setShowSwipeHint(false),
        });
      }
    }, 3000);
    return () => clearTimeout(t);
  }, [showSwipeHint]);

  // Nudge on mount — reveals peek to signal swipeability
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 1024) return;
    const t = setTimeout(() => {
      if (!sliderRef.current || !cardRef.current) return;
      const nudge = cardRef.current.offsetWidth * 0.09;
      gsap.to(sliderRef.current, {
        x: -nudge,
        duration: 0.4,
        ease: "power1.out",
        onComplete: () =>
          gsap.to(sliderRef.current, {
            x: 0,
            duration: 0.4,
            ease: "power1.inOut",
          }),
      });
    }, 900);
    return () => clearTimeout(t);
  }, []);

  /* ── Touch handlers ── */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) + 5) isDragging.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (isDragging.current && Math.abs(dx) > 50) {
      setActiveCard((prev) =>
        dx < 0
          ? Math.min(symptoms.length - 1, prev + 1)
          : Math.max(0, prev - 1)
      );
      setShowSwipeHint(false);
    }
    touchStartX.current = null;
    touchStartY.current = null;
    isDragging.current = false;
  };

  return (
    <section ref={sectionRef} className="bg-white dark:bg-zinc-950 py-12 md:py-24 transition-colors duration-300">
      <div className="max-w-max-width mx-auto">
        {/* Header */}
        <div className="symptom-header text-center max-w-2xl mx-auto mb-10 md:mb-16 px-4 md:px-section-padding-h">
          <div className="flex items-center justify-center gap-1 text-brand-button mb-2">
            <span className="material-symbols-outlined text-lg">
              sentiment_dissatisfied
            </span>
            <span className="font-sans text-[11px] uppercase tracking-widest font-extrabold">
              Sounds Familiar?
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-brand-heading font-bold tracking-tight mb-5 md:mb-6">
            YOUR SLEEP ISN&apos;T BROKEN. IT&apos;S UNDER-SUPPORTED.
          </h2>

          <p className="font-sans text-sm md:text-base text-on-surface-variant dark:text-secondary-container leading-relaxed font-medium">
            These aren&apos;t separate problems. In Ayurvedic Physiology, they
            share one root: weakened Prana flow and dry respiratory pathways.
            One imbalance. Many expressions.
          </p>
        </div>

        {/* ── Mobile / tablet: peeking GSAP carousel ── */}
        <div className="lg:hidden">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative">
              {/* Track */}
              <div
                ref={sliderRef}
                className="flex gap-3 pl-4 pr-2"
                style={{ willChange: "transform" }}
              >
                {symptoms.map((symptom, idx) => (
                  <div
                    key={idx}
                    ref={idx === 0 ? cardRef : undefined}
                    className="group relative flex-none w-[82%] aspect-square overflow-hidden rounded-2xl border border-secondary-container/10 bg-[#faf6e9] dark:bg-zinc-900/10 shadow-md"
                  >
                    <Image
                      src={symptom.image}
                      alt={symptom.alt}
                      fill
                      className="object-cover"
                      sizes="82vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-base font-bold text-white tracking-wide leading-snug">
                        {symptom.title}
                      </h3>
                      <p className="font-sans text-[11px] text-zinc-300 mt-1 leading-relaxed opacity-90">
                        {symptom.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Swipe hint pill */}
              {showSwipeHint && (
                <div
                  ref={swipeHintRef}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2
                             flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             bg-black/50 backdrop-blur-sm text-white text-[11px]
                             font-sans font-medium pointer-events-none select-none z-20"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "14px" }}
                  >
                    swipe
                  </span>
                  Swipe to explore
                </div>
              )}
            </div>
          </div>

          {/* Pill dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {symptoms.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCard(idx)}
                aria-label={`Go to symptom ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeCard
                    ? "w-6 h-2 bg-brand-button"
                    : "w-2 h-2 bg-secondary-container/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop: 4-column grid (unchanged) ── */}
        <div className="hidden lg:grid grid-cols-4 gap-6 max-w-6xl mx-auto px-section-padding-h">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="symptom-desktop-card group relative aspect-square overflow-hidden rounded-3xl border border-secondary-container/10 bg-[#faf6e9] dark:bg-zinc-900/10 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={symptom.image}
                alt={symptom.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-serif text-lg font-bold text-white tracking-wide leading-snug">
                  {symptom.title}
                </h3>
                <p className="font-sans text-[11px] text-zinc-300 mt-1 leading-relaxed opacity-90">
                  {symptom.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
