"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import stressOil from "../../../public/product/stressoil.png";
import digestionOil from "../../../public/product/digestionoil.png";

interface ProductSliderProps {
  onAddToCart: (
    id: string,
    name: string,
    price: number,
    image: string,
    size: string,
  ) => void;
}

export default function ProductSlider({ onAddToCart }: ProductSliderProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const header = section.querySelector(".slider-header");
    const cards = section.querySelectorAll(".product-card");
    const cta = section.querySelector(".slider-cta");
    gsap.set([header, cards, cta], { opacity: 0, y: 35 });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        gsap.to(header, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
        gsap.to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", delay: 0.15 });
        gsap.to(cta, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.4 });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const suggestedProducts = [
    {
      id: "sleep-stress-nabhi-15ml",
      name: "Sleep Inducing Stress Relief Nabhi Oil",
      price: 599,
      originalPrice: 699,
      rating: 4.8,
      tags: ["Deep Sleep", "Stress Relief", "Calming"],
      image: stressOil,
      imageSrc: "/product/stressoil.png",
      size: "15ml Bottle",
    },
    {
      id: "digestion-detox-30ml",
      name: "Digestion & Detox Nabhi Oil",
      price: 549,
      originalPrice: 649,
      rating: 4.7,
      tags: ["Digestion", "Gut Health", "Detox"],
      image: digestionOil,
      imageSrc: "/product/digestionoil.png",
      size: "30ml Bottle",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white dark:bg-zinc-950 py-16 md:py-14 transition-colors duration-300">
      <div className="max-w-max-width mx-auto px-4 md:px-section-padding-h">
        {/* Header */}
        <div className="slider-header text-center mb-16 md:mb-8">
          <div className="flex items-center justify-center gap-1 text-brand-button mb-2">
            <span className="material-symbols-outlined text-lg">
              shopping_basket
            </span>
            <span className="font-sans text-[11px] uppercase tracking-widest font-extrabold">
              Complete Your Ritual
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-heading font-bold tracking-tight">
            ONE METHOD. MANY CONCERNS.<br />BUILD YOUR NABHI RITUAL.
          </h2>
          <div className="w-12 h-px bg-brand-button mx-auto mt-4"></div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 md:max-w-2xl mx-auto">
          {suggestedProducts.map((p) => (
            <div
              key={p.id}
              className="product-card bg-zinc-50 dark:bg-zinc-900/10 border border-secondary-container/10 p-2 md:p-4 rounded-2xl flex flex-col justify-between group hover:border-brand-button/30 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Rating Badge top-right */}
              <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xs border border-secondary-container/15 px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full text-[8px] md:text-[10px] font-black text-on-surface dark:text-surface flex items-center gap-0.5 select-none z-10">
                <span className="text-brand-button text-[8px] md:text-[10px]">
                  ★
                </span>{" "}
                {p.rating}
              </div>

              {/* Product Photo — large, dominant */}
              <div className="aspect-square md:aspect-auto md:h-52 bg-white dark:bg-zinc-950/50 p-2 mb-2 md:mb-3 rounded-xl flex items-center justify-center overflow-hidden border border-secondary-container/5">
                <Image
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Info — compact on mobile */}
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-[11px] md:text-sm font-bold text-on-surface dark:text-surface leading-tight md:mb-1">
                  {p.name}
                </h3>

                {/* Tags — hidden on mobile to save space */}
                <div className="hidden md:flex flex-wrap gap-1 mb-2">
                  {p.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#faf6e9] dark:bg-zinc-800 text-on-surface-variant dark:text-secondary-container text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 md:gap-1.5 mb-2 md:mb-3">
                  <span className="font-sans text-[11px] md:text-sm font-black text-brand-button">
                    ₹{p.price}
                  </span>
                  {p.originalPrice !== p.price && (
                    <span className="font-sans text-[9px] md:text-xs line-through text-on-surface-variant/40">
                      ₹{p.originalPrice}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() =>
                    onAddToCart(p.id, p.name, p.price, p.imageSrc, p.size)
                  }
                  className="w-full bg-brand-button hover:bg-brand-button/90 text-white font-extrabold py-1.5 md:py-2 px-2 md:px-3 rounded-full transition-all duration-300 font-button tracking-wider text-[8px] md:text-xs cursor-pointer shadow-xs"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Products CTA */}
        <div className="slider-cta flex justify-center mt-10">
          <button className="border border-brand-button text-brand-button hover:bg-brand-button hover:text-white font-extrabold py-3 px-10 rounded-full transition-all duration-300 font-button tracking-wider text-xs cursor-pointer">
            EXPLORE ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}
