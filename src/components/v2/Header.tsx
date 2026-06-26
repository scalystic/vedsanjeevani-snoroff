"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import headerLogo from "../../../public/header-llogo.avif";

interface HeaderProps {
  cartTotalItems: number;
  onCartToggle: () => void;
  onSearchToggle: () => void;
  onMobileMenuToggle: () => void;
}

export default function Header({
  cartTotalItems,
  onCartToggle,
  onSearchToggle,
  onMobileMenuToggle,
}: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const banner = header.querySelector(".header-banner");
    const logo = header.querySelector(".header-logo");
    const navLinks = header.querySelectorAll(".nav-link");
    const icons = header.querySelectorAll(".header-icon");

    gsap.set(banner, { y: -50, opacity: 0 });
    gsap.set(logo, { opacity: 0, scale: 0.9 });
    gsap.set(navLinks, { opacity: 0, y: -8 });
    gsap.set(icons, { opacity: 0, x: 14 });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.to(banner, { y: 0, opacity: 1, duration: 0.5 })
      .to(logo, { opacity: 1, scale: 1, duration: 0.4 }, "-=0.2")
      .to(navLinks, { opacity: 1, y: 0, duration: 0.3, stagger: 0.07 }, "-=0.25")
      .to(icons, { opacity: 1, x: 0, duration: 0.3, stagger: 0.07 }, "-=0.35");

    return () => {
      tl.kill();
      gsap.set([banner, logo, ...Array.from(navLinks), ...Array.from(icons)], { clearProps: "all" });
    };
  }, []);

  return (
    <header ref={headerRef} className="bg-surface/90 dark:bg-zinc-950/90 backdrop-blur-md text-on-surface dark:text-surface fixed top-0 left-0 right-0 border-b border-secondary-container/10 z-40 transition-colors duration-300">
      {/* Top Banner */}
      <div className="header-banner bg-brand-button text-white text-center py-2 font-button text-[11px] font-bold uppercase tracking-widest">
        Stay ahead of your day.
      </div>

      <div className="flex justify-between items-center h-20 px-4 md:px-section-padding-h max-w-max-width mx-auto relative">
        {/* Navigation Links (Left) */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            className="nav-link font-button text-[12px] uppercase tracking-widest text-brand-heading border-b-2 border-brand-heading pb-1 font-bold"
            href="#shop"
          >
            SHOP
          </a>
          <a
            className="nav-link font-button text-[12px] uppercase tracking-widest text-on-surface-variant dark:text-secondary-container hover:text-brand-button transition-colors duration-300 font-semibold"
            href="#science"
          >
            SCIENCE
          </a>
          <a
            className="nav-link font-button text-[12px] uppercase tracking-widest text-on-surface-variant dark:text-secondary-container hover:text-brand-button transition-colors duration-300 font-semibold"
            href="#ritual"
          >
            RITUAL
          </a>
          <a
            className="nav-link font-button text-[12px] uppercase tracking-widest text-on-surface-variant dark:text-secondary-container hover:text-brand-button transition-colors duration-300 font-semibold"
            href="#reviews"
          >
            REVIEWS
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={onMobileMenuToggle}
          className="md:hidden text-on-surface dark:text-surface p-2 scale-95 active:opacity-80 transition-transform cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          <span className="material-symbols-outlined text-2xl font-light">
            menu
          </span>
        </button>

        {/* Brand Logo (Center) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a
            className="header-logo hover:opacity-80 transition-opacity flex items-center"
            href="#"
          >
            <Image
              src={headerLogo}
              alt="Ved Sanjeevani Logo"
              className="h-10 md:h-12 w-auto object-contain rounded-md"
              priority
            />
          </a>
        </div>

        {/* Trailing Icons (Right) */}
        <div className="flex gap-2 sm:gap-4 items-center">
          {/* Search Toggle */}
          <button
            onClick={onSearchToggle}
            className="header-icon text-on-surface dark:text-surface hover:text-brand-button transition-all duration-300 scale-95 active:opacity-80 p-2 cursor-pointer"
            aria-label="Open search modal"
          >
            <span className="material-symbols-outlined text-xl">search</span>
          </button>

          {/* Shopping Cart Button */}
          <button
            onClick={onCartToggle}
            className="header-icon text-on-surface dark:text-surface hover:text-brand-button transition-all duration-300 scale-95 active:opacity-80 relative p-2 cursor-pointer"
            aria-label="Open shopping cart"
          >
            <span className="material-symbols-outlined text-xl">
              shopping_bag
            </span>
            {cartTotalItems > 0 && (
              <span className="absolute top-0 right-0 bg-brand-button text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {cartTotalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
