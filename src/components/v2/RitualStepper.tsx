"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import ritualStep1 from "../../../public/images/ritual_step1_prepare.png";
import ritualStep2 from "../../../public/images/ritual_step2_apply.png";
import ritualStep3 from "../../../public/images/ritual_step3_massage.png";
import ritualStep4 from "../../../public/images/ritual_step4_absorb.png";

const CARD_GAP = 12;
const DESKTOP_CARD_GAP = 24;

export default function RitualStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const swipeHintRef = useRef<HTMLDivElement>(null);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isDragging = useRef(false);

  const steps = [
    {
      label: "Step 1",
      title: "Prepare",
      description: "Clean, dry navel. Lie down. Let your body settle and relax.",
      image: ritualStep1,
    },
    {
      label: "Step 2",
      title: "Apply",
      description:
        "Put 6 drops directly into your navel. Our dropper is calibrated for precision.",
      image: ritualStep2,
    },
    {
      label: "Step 3",
      title: "Massage",
      description:
        "Gently massage the navel area in a circular motion to stimulate key nerve endings.",
      image: ritualStep3,
    },
    {
      label: "Step 4",
      title: "Absorb",
      description:
        "Wait for 2-3 minutes for the oil to be completely absorbed before sleeping.",
      image: ritualStep4,
    },
  ];

  const animateToStep = (step: number) => {
    if (!sliderRef.current || !cardRef.current) return;
    const gap = window.innerWidth < 768 ? CARD_GAP : DESKTOP_CARD_GAP;
    const cardWidth = cardRef.current.offsetWidth;
    gsap.to(sliderRef.current, {
      x: -(step * (cardWidth + gap)),
      duration: 0.45,
      ease: "power2.out",
    });
  };

  // Slide to active step whenever it changes
  useEffect(() => {
    animateToStep(activeStep);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  // Re-snap on resize (e.g. orientation change)
  useEffect(() => {
    const onResize = () => animateToStep(activeStep);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

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

  // Nudge animation on mount (mobile only) — bounces left to reveal peek
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;
    const t = setTimeout(() => {
      if (!sliderRef.current || !cardRef.current) return;
      const nudge = cardRef.current.offsetWidth * 0.09;
      gsap.to(sliderRef.current, {
        x: -nudge,
        duration: 0.4,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(sliderRef.current, {
            x: 0,
            duration: 0.4,
            ease: "power1.inOut",
          });
        },
      });
    }, 900);
    return () => clearTimeout(t);
  }, []);

  /* ─── Touch handlers ─── */
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
      setActiveStep((prev) =>
        dx < 0
          ? Math.min(steps.length - 1, prev + 1)
          : Math.max(0, prev - 1)
      );
      setShowSwipeHint(false);
    }

    touchStartX.current = null;
    touchStartY.current = null;
    isDragging.current = false;
  };

  return (
    <section
      id="ritual"
      className="bg-[#faf6e9]/40 dark:bg-zinc-900/10 border-y border-secondary-container/10 py-16 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-max-width mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-10 px-4 md:px-section-padding-h">
          <div className="flex items-center justify-center gap-1 text-brand-button mb-2">
            <span className="material-symbols-outlined text-lg">spa</span>
            <span className="font-sans text-[11px] uppercase tracking-widest font-extrabold">
              The Ritual
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-heading font-bold tracking-tight">
            30 SECONDS. EVERY NIGHT.
          </h2>
        </div>

        {/* ── Stepper Progress Bar ── */}
        <div className="relative max-w-xl mx-auto mb-12 px-8 flex justify-between items-center select-none">
          {/* Background track — from center of first circle to center of last */}
          <div className="absolute left-12 right-12 h-0.5 bg-secondary-container/20 dark:bg-zinc-800 top-1/2 -translate-y-1/2 z-0" />
          {/* Filled track — grows from circle center to circle center */}
          <div
            className="absolute left-12 h-0.5 bg-brand-button top-1/2 -translate-y-1/2 z-0 transition-all duration-500"
            style={{
              width: `calc(${(activeStep / (steps.length - 1)) * 100}% - ${(activeStep / (steps.length - 1)) * 6}rem)`
            }}
          />

          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className="relative z-10 flex flex-col items-center cursor-pointer"
            >
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 bg-white dark:bg-zinc-950 ${
                  idx <= activeStep
                    ? "border-brand-button text-brand-button"
                    : "border-secondary-container/30 text-on-surface-variant/40"
                }`}
              >
                {idx === activeStep ? (
                  <span className="material-symbols-outlined text-sm">spa</span>
                ) : (
                  <span className="font-sans text-xs font-bold">{idx + 1}</span>
                )}
              </div>
              <span
                className={`font-sans text-[10px] uppercase font-bold tracking-wider mt-2 transition-colors ${
                  idx === activeStep
                    ? "text-brand-button"
                    : "text-on-surface-variant/50"
                }`}
              >
                {step.label}
              </span>
            </button>
          ))}
        </div>

        {/* ── Carousel ── */}
        <div
          className="overflow-hidden pb-3 md:pb-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative">
            {/* Track */}
            <div
              ref={sliderRef}
              className="flex gap-3 md:gap-6 pl-4 pr-2 md:pl-[16%]"
              style={{ willChange: "transform" }}
            >
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  ref={idx === 0 ? cardRef : undefined}
                  className={`w-[86%] md:w-[68%] shrink-0 overflow-hidden rounded-2xl bg-white dark:bg-zinc-950 border border-secondary-container/10 shadow-sm grid grid-cols-1 md:grid-cols-2 items-center transition-opacity duration-500 ${
                    idx !== activeStep ? "md:opacity-40" : "md:opacity-100"
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-4/3 md:aspect-square w-full overflow-hidden bg-[#faf6e9]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 86vw, 41vw"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>

                  {/* Text */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <span className="text-brand-button font-serif text-sm font-semibold tracking-wide mb-1">
                      Step {idx + 1}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-on-surface dark:text-surface font-bold tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-on-surface-variant dark:text-secondary-container leading-relaxed">
                      {step.description}
                    </p>

                  </div>
                </div>
              ))}
            </div>

            {/* Swipe hint — mobile only */}
            {showSwipeHint && (
              <div
                ref={swipeHintRef}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 md:hidden
                           flex items-center gap-1.5 px-3 py-1.5 rounded-full
                           bg-black/50 backdrop-blur-sm text-white text-[11px]
                           font-sans font-medium pointer-events-none select-none z-20"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                  swipe
                </span>
                Swipe to explore
              </div>
            )}
          </div>
        </div>

        {/* ── Bottom bar: ← dots → ── */}
        <div className="flex items-center justify-center gap-3 mt-5">
          {/* Left arrow — desktop only */}
          <button
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-secondary-container/20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-on-surface cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                aria-label={`Go to step ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeStep
                    ? "w-6 h-2 bg-brand-button"
                    : "w-2 h-2 bg-secondary-container/30"
                }`}
              />
            ))}
          </div>

          {/* Right arrow — desktop only */}
          <button
            onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStep === steps.length - 1}
            className="hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-secondary-container/20 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-on-surface cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>

      </div>
    </section>
  );
}
