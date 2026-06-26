"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import snoreOffNabhiOil from "../../../public/snore-off-nabhi-oil.png";
import productImage1 from "../../../public/images/product_image_1.jpg";
import productImage2 from "../../../public/images/product_image_2.jpg";
import productImage3 from "../../../public/images/product_image_3.jpg";

interface HeroProps {
  selectedFormat: "starter" | "monthly";
  setSelectedFormat: (val: "starter" | "monthly") => void;
  onAddToCart: (
    id: string,
    name: string,
    price: number,
    image: string,
    size: string,
  ) => void;
  onOpenVideoModal: (url: string) => void;
}

export default function Hero({
  selectedFormat,
  setSelectedFormat,
  onAddToCart,
  onOpenVideoModal,
}: HeroProps) {
  const productImages = [productImage3, productImage1, productImage2];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "power2.out" } });
      tl.from(".hero-left", { opacity: 0, x: -60, duration: 0.8 })
        .from(".hero-right", { opacity: 0, x: 60, duration: 0.8 }, "-=0.6");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const currentPrice = selectedFormat === "starter" ? 549 : 998;
  const originalPrice = selectedFormat === "starter" ? 699 : 1398;
  const productId =
    selectedFormat === "starter" ? "snore-off-30ml" : "snore-off-60ml";
  const productName =
    selectedFormat === "starter"
      ? "Snore Off Nabhi Oil (30ml Starter)"
      : "Snore Off Nabhi Oil (60ml Monthly Pack)";
  const productSize =
    selectedFormat === "starter" ? "30ml Starter Kit" : "60ml Monthly Bottle";

  return (
    <section
      ref={heroRef}
      id="shop"
      className="max-w-max-width mx-auto px-4 md:px-section-padding-h pt-12 md:pt-20 pb-4 md:pb-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
    >
      {/* Left Column: Image Gallery */}
      <div className="hero-left lg:col-span-6 w-full flex flex-col gap-4">
        {/* Breadcrumbs */}
        <nav className="flex gap-2 text-on-surface-variant/70 dark:text-secondary-container/70 font-sans text-[11px] tracking-widest mb-2 uppercase">
          <a
            className="hover:text-primary-container transition-colors"
            href="#"
          >
            HOME
          </a>
          <span>»</span>
          <a
            className="hover:text-primary-container transition-colors"
            href="#shop"
          >
            SHOP ALL
          </a>
          <span>»</span>
          <span className="text-on-surface dark:text-surface font-semibold">
            SNORE OFF NABHI OIL
          </span>
        </nav>

        {/* Main Hero Image */}
        <div className="w-full aspect-square bg-[#f5efe6] dark:bg-zinc-900/40 relative overflow-hidden rounded-3xl border border-secondary-container/10">
          <Image
            className="hero-main-image w-full h-full object-cover transition-all duration-300"
            alt="Premium photograph of Ved Sanjeevani Snore Off Nabhi Oil"
            src={productImages[selectedImageIndex]}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-3">
          {productImages.map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={`aspect-square bg-[#f5efe6] dark:bg-zinc-900/40 cursor-pointer overflow-hidden border rounded-xl transition-all ${
                selectedImageIndex === idx
                  ? "border-brand-button opacity-100 ring-2 ring-brand-button/40"
                  : "border-secondary-container/10 opacity-75 hover:opacity-100"
              }`}
              aria-label={`View product image ${idx + 1}`}
            >
              <Image
                className="w-full h-full object-cover"
                alt={`Thumbnail ${idx + 1}`}
                src={imgUrl}
              />
            </button>
          ))}

          {/* Thumbnail 4: Video trigger */}
          <button
            onClick={() => {}}
            className="aspect-square bg-[#f5efe6] dark:bg-zinc-900/40 flex flex-col items-center justify-center cursor-pointer border border-secondary-container/10 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-on-surface-variant dark:text-surface-variant gap-1"
            aria-label="Play product video"
          >
            <span className="material-symbols-outlined text-3xl text-brand-button animate-pulse">
              play_circle
            </span>
            <span className="font-sans text-[8px] uppercase tracking-wider font-bold">
              PLAY RITUAL
            </span>
          </button>
        </div>
      </div>

      {/* Right Column: Product Information */}
      <div className="hero-right lg:col-span-6 flex flex-col pt-2 lg:pt-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-brand-button">
            {[1, 2, 3, 4].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined !text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
            <span
              className="material-symbols-outlined !text-base"
              style={{ fontVariationSettings: "'FILL' 0.5" }}
            >
              star_half
            </span>
          </div>
          <span className="text-xs text-on-surface-variant/80 dark:text-secondary-container/85 font-semibold font-sans tracking-wide">
            4.76 Rating
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl text-brand-heading mb-2 font-bold tracking-tight">
          SNORE OFF NABHI OIL
        </h1>

        {/* Subdescription */}
        <p className="font-sans text-base text-on-surface-variant dark:text-secondary-container mb-4 leading-relaxed font-medium">
          Your navel has a direct route to your airways. We formulated for that
          pathway.
        </p>

        {/* Value Proposition Bullets */}
        <div className="flex items-center gap-4 text-xs font-semibold text-on-surface-variant dark:text-secondary-container mb-6 flex-wrap">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-button"></span>{" "}
            Patent-filed
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-button"></span>{" "}
            Clinically studied
          </span>
          <a
            href="#science"
            className="text-brand-button underline decoration-brand-button/30 hover:opacity-80 transition-opacity"
          >
            SEE THE SCIENCE
          </a>
        </div>

        {/* Dynamic Product Price Display */}
        <div className="flex items-baseline gap-3.5 mb-6">
          <span className="font-serif text-3xl font-bold text-brand-heading">
            ₹{currentPrice}
          </span>
          <span className="font-serif text-lg line-through text-on-surface-variant/40">
            ₹{originalPrice}
          </span>
          <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Save{" "}
            {Math.round(((originalPrice - currentPrice) / originalPrice) * 100)}
            %
          </span>
        </div>

        <hr className="border-secondary-container/20 mb-6" />

        {/* Choose Your Format Option Selector */}
        <div className="mb-6">
          <h3 className="font-sans text-[11px] text-brand-button mb-3 tracking-widest uppercase font-extrabold">
            CHOOSE YOUR FORMAT
          </h3>
          <div className="flex flex-col gap-5 mt-3">
            {/* Option 1: 30ml Starter */}
            <div
              onClick={() => setSelectedFormat("starter")}
              className={`relative p-4 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                selectedFormat === "starter"
                  ? "bg-[#faf6e9] dark:bg-zinc-900/30 border-brand-button shadow-sm"
                  : "bg-transparent border-secondary-container/20 hover:border-secondary-container/40 opacity-80"
              }`}
            >
              <span
                className={`absolute -top-2.5 left-4 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider transition-all duration-300 border ${
                  selectedFormat === "starter"
                    ? "bg-brand-button text-white border-brand-button shadow-xs"
                    : "bg-[#e5e2e1] dark:bg-zinc-800 text-on-surface-variant/80 dark:text-secondary-container/80 border-secondary-container/10"
                }`}
              >
                Recommended
              </span>

              <div className="flex items-center gap-3">
                {/* Custom radio button */}
                <div className="relative flex items-center justify-center">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                      selectedFormat === "starter"
                        ? "border-brand-button"
                        : "border-on-surface-variant/40"
                    }`}
                  >
                    {selectedFormat === "starter" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-button"></div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="font-sans text-xs font-extrabold text-on-surface dark:text-surface">
                    21-Day Starter Kit (30ml)
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="font-sans text-xs font-black text-brand-button">
                      ₹549
                    </span>
                    <span className="font-sans text-[10px] line-through text-on-surface-variant/50">
                      ₹699
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini Product Image */}
              <div className="w-12 h-12 rounded-lg border border-secondary-container/10 overflow-hidden shrink-0 relative">
                <Image
                  src={snoreOffNabhiOil}
                  alt="30ml kit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Option 2: 60ml Monthly */}
            <div
              onClick={() => setSelectedFormat("monthly")}
              className={`relative p-4 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                selectedFormat === "monthly"
                  ? "bg-[#faf6e9] dark:bg-zinc-900/30 border-brand-button shadow-sm"
                  : "bg-transparent border-secondary-container/20 hover:border-secondary-container/40 opacity-80"
              }`}
            >
              <span
                className={`absolute -top-2.5 left-4 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider transition-all duration-300 border ${
                  selectedFormat === "monthly"
                    ? "bg-brand-button text-white border-brand-button shadow-xs"
                    : "bg-[#e5e2e1] dark:bg-zinc-800 text-on-surface-variant/80 dark:text-secondary-container/80 border-secondary-container/10"
                }`}
              >
                Most Purchased
              </span>

              <div className="flex items-center gap-3">
                {/* Custom radio button */}
                <div className="relative flex items-center justify-center">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                      selectedFormat === "monthly"
                        ? "border-brand-button"
                        : "border-on-surface-variant/40"
                    }`}
                  >
                    {selectedFormat === "monthly" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-button"></div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="font-sans text-xs font-extrabold text-on-surface dark:text-surface">
                    60ml Monthly Bottle
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="font-sans text-xs font-black text-brand-button">
                      ₹998
                    </span>
                    <span className="font-sans text-[10px] line-through text-on-surface-variant/50">
                      ₹1,098
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini Product Image */}
              <div className="w-12 h-12 bg-white dark:bg-zinc-850 p-1.5 rounded-lg border border-secondary-container/10 flex items-center justify-center shrink-0">
                <Image
                  src={snoreOffNabhiOil}
                  alt="60ml bottle"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={() =>
              onAddToCart(
                productId,
                productName,
                currentPrice,
                "/snore-off-nabhi-oil.png",
                productSize,
              )
            }
            className="w-full bg-brand-button hover:bg-brand-button/90 text-white font-extrabold py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center font-button tracking-wider text-sm cursor-pointer"
          >
            ADD TO CART - ₹{currentPrice}
          </button>

          <button
            onClick={() =>
              onAddToCart(
                productId,
                productName,
                currentPrice,
                "/snore-off-nabhi-oil.png",
                productSize,
              )
            }
            className="w-full border-2 border-brand-button text-brand-button hover:bg-brand-button/5 font-extrabold py-4 px-6 rounded-full transition-all duration-300 text-center font-button tracking-wider text-sm cursor-pointer"
          >
            {selectedFormat === "starter"
              ? "BEGIN YOUR 21-DAY RITUAL"
              : "BEGIN YOUR JOURNEY"}
          </button>
        </div>

        {/* Payment Partner Logos */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/50 dark:text-secondary-container/50 mb-2">
            Secure Payment Options
          </span>
          <div className="flex items-center justify-center gap-3 px-4 py-2">
            <img
              src="/payments/bhim-bharat-interface-for-money-seeklogo.png"
              alt="BHIM UPI"
              className="h-4 sm:h-5 w-auto object-contain"
            />
            <div className="w-px h-3 bg-secondary-container/40"></div>
            <img
              src="/payments/google-pay-seeklogo.png"
              alt="Google Pay"
              className="h-4 sm:h-5 w-auto object-contain"
            />
            <div className="w-px h-3 bg-secondary-container/40"></div>
            <img
              src="/payments/phone-pe-2020-seeklogo.png"
              alt="PhonePe"
              className="h-4 sm:h-5 w-auto object-contain"
            />
            <div className="w-px h-3 bg-secondary-container/40"></div>
            <img
              src="/payments/paytm-seeklogo.png"
              alt="Paytm"
              className="h-4 sm:h-5 w-auto object-contain"
            />
            <div className="w-px h-3 bg-secondary-container/40"></div>
            <img
              src="/payments/visa-seeklogo.png"
              alt="Visa"
              className="h-4 sm:h-5 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
