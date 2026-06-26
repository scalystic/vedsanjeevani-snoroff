"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import castorOilImg from "../../../public/castor_oil.png";
import blackPepperImg from "../../../public/black_pepper.png";
import tulsiImg from "../../../public/tulsi.png";
import cinnamonImg from "../../../public/cinnamon.png";
import ingredientsImg from "../../../public/ingredients.png";

const ingredients = [
  {
    name: "Castor Oil",
    type: "Lubricant",
    description:
      "Deeply penetrates tissue layers to lubricate dry membranes and quiet localized muscle vibrations.",
    image: castorOilImg,
    color: "#fdf3e3",
  },
  {
    name: "Black Pepper",
    type: "Warming Agent",
    description:
      "Ayurvedic heating agent that stimulates respiratory pathways and facilitates healthy, clear airflow.",
    image: blackPepperImg,
    color: "#f3ede3",
  },
  {
    name: "Tulsi",
    type: "Adaptogen",
    description:
      "An anti-inflammatory adaptogen that purifies the throat area and helps keep respiratory passages unblocked.",
    image: tulsiImg,
    color: "#edf3e8",
  },
  {
    name: "Cinnamon",
    type: "Soothing Extract",
    description:
      "Eases throat tension and has natural warming qualities to maintain smooth and relaxed breathing.",
    image: cinnamonImg,
    color: "#fbeee3",
  },
];

export default function FormulaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  // Prevents handleScroll from fighting a programmatic scrollTo
  const isProgrammatic = useRef(false);
  const scrollDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll entrance animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const header = section.querySelector(".formula-header");
    const img = section.querySelector(".formula-ingredients-img");
    const cards = section.querySelectorAll(".formula-desktop-card");
    gsap.set(header, { opacity: 0, y: 35 });
    gsap.set(img, { opacity: 0, scale: 0.88 });
    gsap.set(cards, { opacity: 0, y: 40 });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        gsap.to(header, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
        gsap.to(img, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", delay: 0.1 });
        gsap.to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out", delay: 0.2 });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (idx: number) => {
    const container = scrollRef.current;
    const card = cardRefs.current[idx];
    if (!container || !card) return;

    isProgrammatic.current = true;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const targetScrollLeft =
      container.scrollLeft +
      cardRect.left -
      containerRect.left -
      (containerRect.width - cardRect.width) / 2;

    container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });

    // Release guard after smooth scroll finishes (~500 ms)
    setTimeout(() => { isProgrammatic.current = false; }, 550);
  };

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  // Debounced — only updates activeIndex after the user STOPS scrolling
  const handleScroll = () => {
    if (isProgrammatic.current) return; // ignore scroll events we caused
    if (scrollDebounce.current) clearTimeout(scrollDebounce.current);
    scrollDebounce.current = setTimeout(() => {
      const container = scrollRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      let closest = 0;
      let minDist = Infinity;
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const dist = Math.abs(cardCenter - containerCenter);
        if (dist < minDist) { minDist = dist; closest = idx; }
      });
      setActiveIndex(closest);
    }, 120);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };
  const stopDrag = () => { isDragging.current = false; };

  const handlePrev = () =>
    setActiveIndex((p) => (p === 0 ? ingredients.length - 1 : p - 1));
  const handleNext = () =>
    setActiveIndex((p) => (p === ingredients.length - 1 ? 0 : p + 1));

  return (
    <section ref={sectionRef} className="bg-[#faf6e9]/40 dark:bg-zinc-900/10 border-y border-secondary-container/10 py-16 md:py-24 transition-colors duration-300 overflow-hidden">
      <div className="max-w-max-width mx-auto px-4">

        {/* Header */}
        <div className="formula-header text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-1 text-brand-button mb-2">
            <span className="material-symbols-outlined text-lg">science</span>
            <span className="font-sans text-[11px] uppercase tracking-widest font-extrabold">
              The Formula
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-heading font-bold tracking-tight">
            4 BOTANICALS. ZERO FILLERS.
          </h2>
          <div className="w-12 h-px bg-brand-button mx-auto mt-4" />
        </div>

        {/* Main Ingredients Image — no border, no shadow, pure flat */}
        <div className="formula-ingredients-img relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-10 md:mb-14">
          <Image
            src={ingredientsImg}
            alt="Snoroff formula ingredients – castor oil, black pepper, tulsi and cinnamon"
            width={480}
            height={480}
            sizes="(max-width: 768px) 80vw, 480px"
            className="w-full h-auto object-contain rounded-full"
            priority
          />
        </div>

        {/* Mobile: Carousel slider */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            className="flex gap-4 overflow-x-auto pb-2 cursor-grab active:cursor-grabbing"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* left spacer */}
            <div className="shrink-0 w-[calc(50vw-140px)]" aria-hidden />

            {ingredients.map((ing, idx) => (
              <div
                key={idx}
                ref={(el) => { cardRefs.current[idx] = el; }}
                onClick={() => setActiveIndex(idx)}
                style={{ scrollSnapAlign: "center" }}
                className={`
                  shrink-0 w-[260px] sm:w-[280px]
                  p-6 rounded-2xl flex flex-col items-center text-center
                  cursor-pointer select-none
                  transition-all duration-300
                  ${activeIndex === idx ? "scale-105 opacity-100" : "scale-95 opacity-50"}
                `}
              >
                <Image src={ing.image} alt={ing.name} width={96} height={96} className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-5 rounded-full" />
                <span className="inline-block bg-black/5 dark:bg-white/10 text-on-surface-variant dark:text-secondary-container text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                  {ing.type}
                </span>
                <h3 className="font-serif text-lg font-bold text-on-surface dark:text-surface mb-2">{ing.name}</h3>
                <p className="font-sans text-xs text-on-surface-variant dark:text-secondary-container leading-relaxed">{ing.description}</p>
              </div>
            ))}

            {/* right spacer */}
            <div className="shrink-0 w-[calc(50vw-140px)]" aria-hidden />
          </div>

          {/* Navigation dots + arrows */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <button onClick={handlePrev} className="w-9 h-9 flex items-center justify-center rounded-full text-on-surface/60 hover:text-on-surface transition-colors cursor-pointer" aria-label="Previous ingredient">
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <div className="flex gap-2 items-center">
              {ingredients.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to ingredient ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? "w-5 h-2 bg-brand-button" : "w-2 h-2 bg-secondary-container/30"}`}
                />
              ))}
            </div>
            <button onClick={handleNext} className="w-9 h-9 flex items-center justify-center rounded-full text-on-surface/60 hover:text-on-surface transition-colors cursor-pointer" aria-label="Next ingredient">
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Desktop: Static row — all 4 ingredients side by side */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {ingredients.map((ing, idx) => (
            <div
              key={idx}
              className="formula-desktop-card p-6 rounded-2xl flex flex-col items-center text-center border border-secondary-container/10 bg-white/60 dark:bg-zinc-900/20"
            >
              <Image src={ing.image} alt={ing.name} width={120} height={120} className="w-28 h-28 object-contain mb-4 rounded-full" />
              <span className="inline-block bg-black/5 dark:bg-white/10 text-on-surface-variant dark:text-secondary-container text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
                {ing.type}
              </span>
              <h3 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1.5">{ing.name}</h3>
              <p className="font-sans text-[10px] text-on-surface-variant dark:text-secondary-container leading-relaxed">{ing.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
