"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Local image imports for optimal sizing and placeholder generation
import headerLogo from "../../public/header-llogo.avif";
import snoreOffNabhiOil from "../../public/snore-off-nabhi-oil.png";
import ingredientsImg from "../../public/ingredients.png";
import blackPepperImg from "../../public/black_pepper.png";
import castorOilImg from "../../public/castor_oil.png";
import tulsiImg from "../../public/tulsi.png";
import cinnamonImg from "../../public/cinnamon.png";
import howToUseDropperImg from "../../public/how_to_use_dropper.png";

// Media & Retail Partner Logos
import forbesLogo from "../../public/logos/forbes_india.svg";
import amazonLogo from "../../public/logos/amazon.svg";
import flipkartLogo from "../../public/logos/flipkart.svg";
import myntraLogo from "../../public/logos/myntra.svg";
import meeshoLogo from "../../public/logos/meesho.png";

// Custom Media Logos
const BusinessConnectLogo = () => (
  <div className="flex items-center gap-2 select-none">
    {/* BC logo block */}
    <div className="flex flex-col items-center justify-center bg-[#D62027] text-white px-2 py-1 rounded-sm font-sans font-black text-[12px] leading-none">
      <span>B</span>
      <span>C</span>
    </div>
    {/* Text block */}
    <div className="flex flex-col items-start leading-none">
      <div className="font-sans font-bold text-[15px] tracking-tight text-on-surface dark:text-surface">
        <span className="text-[#D62027]">Business</span>{" "}
        <span className="text-on-surface dark:text-surface">Connect</span>
      </div>
      <span className="text-[6px] tracking-widest text-[#D62027] uppercase mt-0.5 font-bold">
        Inspiring Business Community
      </span>
    </div>
  </div>
);

const TheLiveNagpurLogo = () => (
  <div className="flex items-center select-none font-sans">
    {/* THE vertical */}
    <div className="flex flex-col text-[8px] font-bold text-[#0D4C92] leading-none pr-1 border-r border-[#0D4C92]/20">
      <span>T</span>
      <span>H</span>
      <span>E</span>
    </div>
    {/* LIVE & NAGPUR stacked */}
    <div className="flex flex-col pl-1.5 justify-center">
      <span className="text-[18px] font-black text-[#F4A41C] leading-none tracking-tight">
        LIVE
      </span>
      <span className="text-[9px] font-bold text-[#0D4C92] tracking-widest leading-none mt-0.5">
        NAGPUR
      </span>
    </div>
  </div>
);

const AhmedabadMirrorLogo = () => (
  <div className="font-serif select-none leading-none text-xl font-bold tracking-tight text-on-surface dark:text-surface">
    <span className="text-on-surface dark:text-surface">Ahmedabad</span>
    <span className="text-[#D62027] font-extrabold">Mirror</span>
  </div>
);

const BlinkitLogo = () => (
  <div className="bg-[#FFE141] px-3.5 py-1.5 rounded-lg flex items-center justify-center font-sans select-none border border-[#FFE141]/10">
    <span className="font-black text-[15px] tracking-tight leading-none">
      <span className="text-black">blink</span>
      <span className="text-[#0C831F]">it</span>
    </span>
  </div>
);

// Types
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
}

export default function Home() {


  // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "snore-off-1",
      name: "Snore Off Nabhi Oil (1 Pack)",
      price: 549.0,
      quantity: 1,
      image: "/snore-off-nabhi-oil.png",
      size: "1 Bottle",
    },
  ]);

  // Wellness pack state
  const [wellnessPack, setWellnessPack] = useState<"buy1" | "buy2">("buy1");

  // Toast notifications state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Gallery active index state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Video modal state
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Search modal state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Accordion active index state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [ritualCarouselIndex, setRitualCarouselIndex] = useState(0);

  // Active hero information tab state
  const [activeHeroTab, setActiveHeroTab] = useState<
    "therapy" | "chakra" | "action"
  >("therapy");

  // Auto-changing hero information tabs (rotates every 4.5s; resets on manual click)
  useEffect(() => {
    const tabs: ("therapy" | "chakra" | "action")[] = [
      "therapy",
      "chakra",
      "action",
    ];
    const interval = setInterval(() => {
      setActiveHeroTab((current) => {
        const currentIndex = tabs.indexOf(current);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [activeHeroTab]);

  // Product images mapping
  const productImages = [snoreOffNabhiOil, ingredientsImg, howToUseDropperImg];



  // GSAP and Locomotive Scroll Animations
  useEffect(() => {
    let locomotiveScroll: { destroy: () => void } | null = null;

    // Initialize locomotive scroll (smooth scroll) dynamically for client side only
    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            wrapper: window,
            content: document.documentElement,
            lerp: 0.1,
            duration: 1.2,
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
          },
        }) as unknown as { destroy: () => void };
      } catch (e) {
        console.error("Locomotive Scroll initialization failed", e);
      }
    };
    initScroll();

    // Create GSAP Context to handle double-mount in React 19/strict mode
    const ctx = gsap.context(() => {
      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // --- ENTRANCE ANIMATIONS (Hero & Header) ---
      const headerTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      headerTl
        .fromTo(
          "header",
          { y: -80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
        )
        .fromTo(
          ".nav-link",
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.5 },
          "-=0.4",
        )
        .fromTo(
          ".header-logo",
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".header-icon",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.08, duration: 0.5 },
          "-=0.4",
        );

      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .fromTo(
          ".hero-main-image",
          { scale: 1.12, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.4, ease: "power4.out" },
        )
        .fromTo(
          ".hero-thumbnail",
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "back.out(1.5)",
          },
          "-=0.9",
        )
        .fromTo(
          ".hero-breadcrumbs",
          { x: -15, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          "-=0.7",
        )
        .fromTo(
          ".hero-title",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.6",
        )
        .fromTo(
          ".hero-rating",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.5",
        )
        .fromTo(
          ".hero-price",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.4",
        )
        .fromTo(
          ".hero-description",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          ".hero-cta",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          ".hero-val-prop",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4",
        );

      // --- SCROLLTRIGGER ANIMATIONS ---

      // Credibility section Title
      gsap.fromTo(
        ".credibility-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".credibility-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Credibility Cards
      gsap.fromTo(
        ".credibility-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          scrollTrigger: {
            trigger: ".credibility-card",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Science section Title
      gsap.fromTo(
        ".science-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".science-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Science Bento Cards
      const scienceTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".science-card-benefits",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      scienceTl
        .fromTo(
          ".science-card-benefits",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
        )
        .fromTo(
          ".science-benefit-item",
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.12, duration: 0.5 },
          "-=0.4",
        )
        .fromTo(
          ".science-card-ingredients",
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8 },
          "-=0.8",
        )
        .fromTo(
          ".science-card-usage",
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          "-=0.8",
        )
        .fromTo(
          ".science-usage-line",
          { scaleY: 0 },
          { scaleY: 1, transformOrigin: "top", duration: 0.5 },
          "-=0.4",
        )
        .fromTo(
          ".science-usage-step",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.12,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );

      // Formula Section Title
      gsap.fromTo(
        ".formula-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".formula-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Formula Cards
      gsap.fromTo(
        ".formula-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          scrollTrigger: {
            trigger: ".formula-card",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Benefits section Title
      gsap.fromTo(
        ".benefits-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".benefits-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Benefit Cards
      gsap.fromTo(
        ".benefit-card",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".benefit-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Ritual Section Title
      gsap.fromTo(
        ".ritual-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".ritual-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Ritual Steps
      const ritualTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ritual-step",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      ritualTl
        .fromTo(
          ".ritual-step",
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.15, duration: 0.7 },
        )
        .fromTo(
          ".ritual-video-container",
          { scale: 0.96, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7 },
          "-=0.6",
        );

      // Parallax on ritual video container background image
      gsap.fromTo(
        ".ritual-video-image",
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".ritual-video-container",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Reviews Section Trusted Title
      gsap.fromTo(
        ".reviews-trusted-title",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".reviews-trusted-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Reviews Logos
      gsap.fromTo(
        ".reviews-logo",
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".reviews-logo",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Review Cards
      const reviewsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".review-card",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      reviewsTl
        .fromTo(
          ".review-card-left",
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7 },
        )
        .fromTo(
          ".review-card-right",
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7 },
          "-=0.7",
        );

      // FAQ Section Title
      gsap.fromTo(
        ".faq-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".faq-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // FAQ Cards
      gsap.fromTo(
        ".faq-card",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".faq-card",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Recommendations Section Title
      gsap.fromTo(
        ".rec-title",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".rec-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Recommendations Cards
      gsap.fromTo(
        ".rec-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          scrollTrigger: {
            trigger: ".rec-card",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Footer section
      const footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: "footer",
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });

      footerTl
        .fromTo(
          ".footer-logo",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
        )
        .fromTo(
          ".footer-link",
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.5 },
          "-=0.3",
        )
        .fromTo(
          ".footer-copyright",
          { opacity: 0 },
          { opacity: 0.7, duration: 0.5 },
          "-=0.3",
        );
    });

    // Periodically refresh ScrollTrigger to handle slow-loading images and DOM rendering
    const timer1 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    const timer2 = setTimeout(() => {
      ScrollTrigger.refresh();
      window.dispatchEvent(new Event("resize"));
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (locomotiveScroll) {
        try {
          locomotiveScroll.destroy();
        } catch (e) {
          console.error("Locomotive Scroll destroy failed", e);
        }
      }
      ctx.revert();
    };
  }, []);



  // Toast helper
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Cart logic
  const handleAddToCart = (
    id: string,
    name: string,
    price: number,
    image: string,
    size = "30-DAY SUPPLY",
  ) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prevCart, { id, name, price, quantity: 1, image, size }];
    });
    showToast(`${name} added to your cart.`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Refresh ScrollTrigger when FAQ items open or close to recalculate heights
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [openFaqIndex]);

  // FAQ items list
  const faqItems = [
    {
      question: "When will I feel the effects?",
      answer:
        "Most users notice a reduction in snoring intensity and clearer airways within the first few nights of regular application. For optimal results, ensure daily bedtime use.",
    },
    {
      question: "Is it vegan and cruelty-free?",
      answer:
        "Yes. Ved Sanjeevani Snore Off Nabhi Oil is 100% natural, plant-based, vegan, and free from any chemicals or animal testing.",
    },
    {
      question: "What are the shipping times?",
      answer:
        "Domestic orders typically arrive within 2-4 business days. International shipping takes 7-14 business days depending on customs processing in your region.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md select-none overflow-x-hidden">
      {/* TopNavBar */}
      <header className="bg-surface/90 dark:bg-on-surface/90 backdrop-blur-md text-primary dark:text-primary-container fixed top-0 left-0 right-0 border-b border-secondary-container/10 z-40 transition-colors duration-300">
        <div className="flex justify-between items-center h-20 px-4 md:px-section-padding-h max-w-max-width mx-auto relative">
          {/* Navigation Links (Left) */}
          <nav className="hidden md:flex gap-gutter items-center">
            <a
              className="nav-link font-button text-button uppercase tracking-widest text-primary border-b-2 border-primary pb-1"
              href="#shop"
            >
              SHOP
            </a>
            <a
              className="nav-link font-button text-button uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="#science"
            >
              SCIENCE
            </a>
            <a
              className="nav-link font-button text-button uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="#ritual"
            >
              RITUAL
            </a>
            <a
              className="nav-link font-button text-button uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300"
              href="#reviews"
            >
              REVIEWS
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-on-surface dark:text-surface p-2 scale-95 active:opacity-80 transition-transform cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
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
                className="h-9 md:h-12 w-auto object-contain rounded-md"
              />
            </a>
          </div>

          {/* Trailing Icons (Right) */}
          <div className="flex gap-2 sm:gap-stack-md items-center">

            {/* Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="header-icon text-on-surface dark:text-surface hover:text-primary dark:hover:text-primary-container transition-all duration-300 scale-95 active:opacity-80 p-2 cursor-pointer"
              aria-label="Open search modal"
            >
              <span className="material-symbols-outlined text-xl">search</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="header-icon text-on-surface dark:text-surface hover:text-primary dark:hover:text-primary-container transition-all duration-300 scale-95 active:opacity-80 relative p-2 cursor-pointer"
              aria-label="Open shopping cart"
            >
              <span className="material-symbols-outlined text-xl">
                shopping_bag
              </span>
              {cartTotalItems > 0 && (
                <span className="absolute top-0 right-0 bg-primary-container text-on-primary-container text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartTotalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Overlay */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          ></div>

          {/* Content */}
          <div className="relative flex flex-col w-4/5 max-w-sm h-full bg-surface dark:bg-on-surface p-6 shadow-2xl z-10 transition-transform duration-300">
            <div className="flex justify-between items-center mb-10">
              <Image
                src={headerLogo}
                alt="Ved Sanjeevani Logo"
                className="h-10 w-auto object-contain rounded-md"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-on-surface dark:text-surface p-2"
                aria-label="Close mobile menu"
              >
                <span className="material-symbols-outlined text-2xl">
                  close
                </span>
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              <a
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-button text-lg uppercase tracking-wider text-on-surface dark:text-surface border-b border-secondary-container/10 pb-2"
                href="#shop"
              >
                SHOP
              </a>
              <a
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-button text-lg uppercase tracking-wider text-on-surface dark:text-surface border-b border-secondary-container/10 pb-2"
                href="#science"
              >
                SCIENCE
              </a>
              <a
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-button text-lg uppercase tracking-wider text-on-surface dark:text-surface border-b border-secondary-container/10 pb-2"
                href="#ritual"
              >
                RITUAL
              </a>
              <a
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-button text-lg uppercase tracking-wider text-on-surface dark:text-surface border-b border-secondary-container/10 pb-2"
                href="#reviews"
              >
                REVIEWS
              </a>
            </nav>


          </div>
        </div>
      )}

      {/* Main Container */}
      <main className="pt-20">
        {/* Product Hero Section */}
        <section
          id="shop"
          className="max-w-max-width mx-auto px-section-padding-h py-stack-lg md:py-section-padding-v grid grid-cols-1 md:grid-cols-12 gap-gutter md:gap-16"
        >
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 max-w-xl mx-auto w-full flex flex-col gap-stack-sm">
            {/* Main Hero Image */}
            <div className="w-full aspect-4/5 bg-surface-container-low dark:bg-zinc-800/40 relative overflow-hidden group border border-secondary-container/10">
              <Image
                className="hero-main-image w-full h-full object-cover object-center transition-all duration-75"
                alt="A premium photograph of the Ved Sanjeevani Snore Off Nabhi Oil bottle"
                src={productImages[activeImageIndex]}
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-stack-sm">
              {productImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`hero-thumbnail aspect-square bg-surface-container-low dark:bg-zinc-800/40 cursor-pointer overflow-hidden border transition-all duration-300 ${
                    activeImageIndex === idx
                      ? "border-primary-container scale-95 shadow-md"
                      : "border-secondary-container/10 hover:opacity-100 opacity-70"
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
                onClick={() => setIsVideoOpen(true)}
                className="hero-thumbnail aspect-square bg-surface-container-low dark:bg-zinc-800/40 flex flex-col items-center justify-center cursor-pointer border border-secondary-container/10 hover:bg-surface-container-high dark:hover:bg-zinc-700/40 hover:opacity-100 opacity-80 transition-all text-on-surface-variant dark:text-surface-variant gap-1"
                aria-label="Play product video"
              >
                <span className="material-symbols-outlined text-3xl text-primary-container animate-pulse">
                  play_circle
                </span>
                <span className="font-label-caps text-[9px] uppercase tracking-wider">
                  PLAY RITUAL
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Product Information */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <nav className="hero-breadcrumbs flex gap-2 text-on-surface-variant dark:text-secondary-container font-label-caps text-[10px] tracking-[0.2em] mb-stack-sm">
              <a
                className="hover:text-on-surface dark:hover:text-surface transition-colors"
                href="#"
              >
                HOME
              </a>
              <span>/</span>
              <a
                className="hover:text-on-surface dark:hover:text-surface transition-colors"
                href="#shop"
              >
                SHOP
              </a>
              <span>/</span>
              <span className="text-on-surface dark:text-surface">
                NABHI THERAPY
              </span>
            </nav>

            <h1 className="hero-title font-serif text-[42px] leading-tight text-on-surface dark:text-surface mb-2 tracking-tight">
              Snore Off Nabhi Oil
            </h1>
            <p className="hero-description font-sans text-xs uppercase tracking-[0.15em] text-primary-container mb-4 font-semibold">
              Sovereign Ayurvedic Sleep Elixir
            </p>

            <div className="hero-rating flex items-center gap-3 mb-6">
              <div className="flex text-primary-container">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined select-none text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <a
                className="font-button text-xs text-on-surface-variant dark:text-secondary-container hover:text-on-surface transition-colors tracking-wide underline underline-offset-4 decoration-primary-container/20"
                href="#reviews"
              >
                128 VERIFIED REVIEWS
              </a>
            </div>

            {/* Price Console */}
            <div className="hero-price mb-6 flex items-baseline gap-3">
              <span className="font-serif text-3xl font-semibold text-on-surface dark:text-surface">
                ₹{wellnessPack === "buy1" ? "549" : "998"}
              </span>
              {wellnessPack === "buy2" && (
                <span className="text-sm line-through text-on-surface-variant/70 dark:text-secondary-container/50">
                  ₹1,098
                </span>
              )}
              <span className="bg-primary-container/10 text-primary-container text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                {wellnessPack === "buy1"
                  ? "Single Pack"
                  : "Save ₹100 + Free Gift"}
              </span>
            </div>

            {/* Wellness Pack Selector */}
            <div className="mb-6">
              <h3 className="font-label-caps text-[10px] text-on-surface-variant dark:text-secondary-container mb-3 tracking-[0.15em] uppercase font-semibold">
                CHOOSE YOUR WELLNESS CYCLE :
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Option 1 */}
                <div
                  onClick={() => setWellnessPack("buy1")}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                    wellnessPack === "buy1"
                      ? "bg-surface-container-high dark:bg-zinc-800/40 border-primary-container shadow-md"
                      : "bg-transparent border-secondary-container/20 hover:border-secondary-container/50 opacity-80"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-button text-xs font-bold uppercase tracking-wider text-on-surface dark:text-surface">
                        1 Pack Care
                      </span>
                      <span className="text-[10px] text-on-surface-variant dark:text-secondary-container font-medium">
                        ₹549
                      </span>
                    </div>
                    <ul className="text-[11px] text-on-surface-variant dark:text-secondary-container space-y-1 mt-3">
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs text-primary-container">
                          done
                        </span>
                        30-Day Sleep Cycle
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs text-primary-container">
                          done
                        </span>
                        Standard Delivery
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Option 2 */}
                <div
                  onClick={() => setWellnessPack("buy2")}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                    wellnessPack === "buy2"
                      ? "bg-surface-container-high dark:bg-zinc-800/40 border-primary-container shadow-md"
                      : "bg-transparent border-secondary-container/20 hover:border-secondary-container/50 opacity-80"
                  }`}
                >
                  <span className="absolute -top-2.5 right-3 bg-primary-container text-black text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
                    BEST VALUE
                  </span>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-button text-xs font-bold uppercase tracking-wider text-on-surface dark:text-surface">
                        2 Pack Healing
                      </span>
                      <span className="text-[10px] text-on-surface-variant dark:text-secondary-container font-medium">
                        ₹499 / pack
                      </span>
                    </div>
                    <ul className="text-[11px] text-on-surface-variant dark:text-secondary-container space-y-1 mt-3">
                      <li className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs text-primary-container">
                          done
                        </span>
                        60-Day Deep Healing
                      </li>
                      <li className="flex items-center gap-1.5 text-green-500 font-semibold">
                        <span className="material-symbols-outlined text-xs">
                          done
                        </span>
                        Free Gift Included
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges / Stock Console */}
            <div className="hero-val-prop flex items-center gap-4 mb-6 bg-surface-container-low dark:bg-zinc-900/20 p-3 rounded-lg border border-secondary-container/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-red-500 text-xs font-semibold uppercase tracking-wider">
                  Selling out fast
                </span>
              </div>
              <div className="w-px h-4 bg-secondary-container/25"></div>
              <div className="flex items-center gap-1.5 text-xs text-on-surface-variant dark:text-secondary-container">
                <span className="material-symbols-outlined text-sm text-green-500">
                  local_shipping
                </span>
                <span>Ready to Dispatch</span>
              </div>
            </div>

            {/* Purchase Actions Console */}
            <div className="flex flex-col gap-4 mb-8 bg-surface-container-low dark:bg-zinc-800/10 p-5 rounded-xl border border-secondary-container/10">
              {/* Shiprocket BUY NOW Button */}
              <button
                onClick={() => {
                  handleAddToCart(
                    wellnessPack === "buy1" ? "snore-off-1" : "snore-off-2",
                    wellnessPack === "buy1"
                      ? "Snore Off Nabhi Oil (1 Pack)"
                      : "Snore Off Nabhi Oil (2 Pack - Save ₹100)",
                    wellnessPack === "buy1" ? 549 : 998,
                    "/snore-off-nabhi-oil.png",
                    wellnessPack === "buy1" ? "1 Bottle" : "2 Bottles",
                  );
                  showToast("Connecting to secure payment gateway...");
                }}
                className="hero-cta w-full bg-primary-container hover:bg-primary-container/90 text-black font-extrabold py-4 px-6 flex justify-between items-center cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300 relative rounded-lg border border-primary-container"
              >
                <div className="flex items-center gap-3">
                  <span className="font-button tracking-[0.15em] uppercase text-sm font-extrabold">
                    BUY NOW
                  </span>
                  <div className="bg-white/95 rounded-full px-3 py-1 flex items-center gap-2 shadow-inner border border-black/5">
                    <span className="text-[9px] font-extrabold text-blue-600 tracking-tighter">
                      GPay
                    </span>
                    <div className="w-px h-3 bg-black/10"></div>
                    <span className="text-[9px] font-extrabold text-purple-700 tracking-tighter">
                      PhonePe
                    </span>
                    <div className="w-px h-3 bg-black/10"></div>
                    <span className="text-[9px] font-extrabold text-[#00baf2] tracking-tighter">
                      Paytm
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 font-extrabold">
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                    arrow_forward_ios
                  </span>
                </div>

                <span className="absolute bottom-1 right-2 text-[7px] opacity-70 font-sans tracking-tight font-normal">
                  Powered By <span className="font-bold">Shiprocket</span>
                </span>
              </button>

              <div className="flex gap-4">
                {/* Prepaid Discount Badge */}
                <div className="flex-1 bg-green-500/10 dark:bg-green-500/5 text-green-600 dark:text-green-400 py-3 px-3 sm:px-4 border border-green-500/20 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs rounded-lg font-semibold gap-1 sm:gap-2 uppercase tracking-wider text-center sm:text-left">
                  <span>Prepaid</span>
                  <span className="font-extrabold">Get Free Gift</span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() =>
                    handleAddToCart(
                      wellnessPack === "buy1" ? "snore-off-1" : "snore-off-2",
                      wellnessPack === "buy1"
                        ? "Snore Off Nabhi Oil (1 Pack)"
                        : "Snore Off Nabhi Oil (2 Pack - Save ₹100)",
                      wellnessPack === "buy1" ? 549 : 998,
                      "/snore-off-nabhi-oil.png",
                      wellnessPack === "buy1" ? "1 Bottle" : "2 Bottles",
                    )
                  }
                  className="hero-cta flex-1 border border-on-surface dark:border-surface text-on-surface dark:text-surface hover:bg-on-surface hover:text-surface dark:hover:bg-surface dark:hover:text-on-surface py-3 px-6 font-button text-xs uppercase tracking-wider transition-all duration-300 flex justify-center items-center gap-2 cursor-pointer font-bold rounded-lg"
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Interactive Wisdom Tab Switcher */}
            <div className="mt-4 pt-6 border-t border-secondary-container/10">
              <div className="flex border-b border-secondary-container/10 mb-4 overflow-x-auto scrollbar-none">
                <button
                  onClick={() => setActiveHeroTab("therapy")}
                  className={`pb-3 pr-4 font-button text-[11px] uppercase tracking-wider font-bold transition-all whitespace-nowrap cursor-pointer relative ${
                    activeHeroTab === "therapy"
                      ? "text-primary-container"
                      : "text-on-surface-variant/60 dark:text-secondary-container/60"
                  }`}
                >
                  Nabhi Therapy
                  {activeHeroTab === "therapy" && (
                    <div className="absolute bottom-0 left-0 right-4 h-[2px] bg-primary-container"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveHeroTab("chakra")}
                  className={`pb-3 px-4 font-button text-[11px] uppercase tracking-wider font-bold transition-all whitespace-nowrap cursor-pointer relative ${
                    activeHeroTab === "chakra"
                      ? "text-primary-container"
                      : "text-on-surface-variant/60 dark:text-secondary-container/60"
                  }`}
                >
                  Manipura Chakra
                  {activeHeroTab === "chakra" && (
                    <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary-container"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveHeroTab("action")}
                  className={`pb-3 pl-4 font-button text-[11px] uppercase tracking-wider font-bold transition-all whitespace-nowrap cursor-pointer relative ${
                    activeHeroTab === "action"
                      ? "text-primary-container"
                      : "text-on-surface-variant/60 dark:text-secondary-container/60"
                  }`}
                >
                  Airway Action
                  {activeHeroTab === "action" && (
                    <div className="absolute bottom-0 left-4 right-0 h-[2px] bg-primary-container"></div>
                  )}
                </button>
              </div>

              <div className="min-h-section-padding-v transition-all duration-300">
                {activeHeroTab === "therapy" && (
                  <div className="animate-fadeIn">
                    <h4 className="font-serif text-sm font-semibold text-on-surface dark:text-surface mb-2">
                      The Pechoti Method
                    </h4>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container leading-relaxed text-xs">
                      In Ayurveda, the Nabhi (navel) connects to over 72,000
                      nadis (energy channels). Through the ancient Pechoti
                      method, our specially crafted oil is absorbed directly
                      through nerve endings, targeting your body&apos;s systems
                      from their energetic core.
                    </p>
                  </div>
                )}
                {activeHeroTab === "chakra" && (
                  <div className="animate-fadeIn">
                    <h4 className="font-serif text-sm font-semibold text-on-surface dark:text-surface mb-2">
                      Core Energy Powerhouse
                    </h4>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container leading-relaxed text-xs">
                      The Manipura Chakra is your body&apos;s energy powerhouse,
                      located at the navel center. In Ayurveda and yoga, this
                      sacred point controls digestion, metabolism, and inner
                      vitality. Unlike regular muscle massages, this delivers
                      nutrients straight to your energy command center.
                    </p>
                  </div>
                )}
                {activeHeroTab === "action" && (
                  <div className="animate-fadeIn">
                    <h4 className="font-serif text-sm font-semibold text-on-surface dark:text-surface mb-2">
                      Clear Respiration & Sleep
                    </h4>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container leading-relaxed text-xs">
                      Breathing Balance Nabhi Oil addresses breathing imbalance
                      and sleep breathing issues through targeted respiratory
                      support. This specialized blend helps clear airways and
                      promotes better breathing during sleep.
                    </p>
                    <p className="font-body-md text-on-surface dark:text-surface font-semibold mt-2 flex items-center gap-1.5 text-xs">
                      <span className="material-symbols-outlined text-sm text-primary-container">
                        check_circle
                      </span>
                      <span>
                        Reduced breathing imbalance, clearer breathing, and
                        silent sleep.
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Bento Grid */}
        <section
          id="science"
          className="dark:bg-zinc-900/20 border-y border-secondary-container/10 transition-colors duration-300"
        >
          <div className="max-w-max-width mx-auto px-section-padding-h py-20">
            <div className="science-title text-center mb-16">
              <p className="font-button text-[11px] tracking-[0.2em] text-primary-container mb-2 uppercase">
                Therapeutic Science
              </p>
              <h2 className="font-serif text-[36px] leading-tight text-on-surface dark:text-surface mb-4">
                Why Nabhi Oil Supports Snore Off
              </h2>
              <div className="w-12 h-px bg-primary-container mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Card: Core Issues Addressed */}
              <div className="science-card-benefits lg:col-span-4 bg-surface-container dark:bg-zinc-850/20 p-8 rounded-2xl border border-secondary-container/20 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-on-surface dark:text-surface mb-6 border-b border-secondary-container/10 pb-4 font-semibold">
                    THE DISRUPTION
                  </h3>
                  <ul className="space-y-6">
                    <li className="science-benefit-item flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary-container bg-primary-container/10 p-1.5 rounded-lg text-lg">
                        volume_off
                      </span>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1">
                          Noisy Nights
                        </h4>
                        <p className="font-body-md text-xs text-on-surface-variant dark:text-secondary-container leading-relaxed">
                          Relaxed throat tissues vibrate heavily, causing
                          sleep-disrupting snore sounds.
                        </p>
                      </div>
                    </li>
                    <li className="science-benefit-item flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary-container bg-primary-container/10 p-1.5 rounded-lg text-lg">
                        water_drop
                      </span>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1">
                          Throat Dryness & Vibrations
                        </h4>
                        <p className="font-body-md text-xs text-on-surface-variant dark:text-secondary-container leading-relaxed">
                          Dry airway passages worsen friction, leading to severe
                          morning soreness and throat irritation.
                        </p>
                      </div>
                    </li>
                    <li className="science-benefit-item flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary-container bg-primary-container/10 p-1.5 rounded-lg text-lg">
                        group
                      </span>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1">
                          Partner Discomfort
                        </h4>
                        <p className="font-body-md text-xs text-on-surface-variant dark:text-secondary-container leading-relaxed">
                          Snore volume disturbs the rest of loved ones, causing
                          mutual fatigue and relationship strain.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Middle Card: Rebranding Showcase */}
              <div className="science-card-ingredients lg:col-span-4 relative p-8 rounded-2xl flex flex-col justify-end min-h-[420px] border border-secondary-container/20 dark:border-zinc-800 overflow-hidden group">
                <Image
                  src={snoreOffNabhiOil}
                  alt="Snore Off Nabhi Oil bottle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                {/* Immersive overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-surface/95 via-surface/60 to-transparent dark:from-zinc-950 dark:via-zinc-950/70 dark:to-transparent"></div>

                <div className="relative z-10">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary-container block mb-2">
                    Central Rejuvenation
                  </span>
                  <h3 className="font-serif text-2xl text-on-surface dark:text-surface mb-3 leading-tight">
                    Restore Airway Balance
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant dark:text-secondary-container mb-6 leading-relaxed">
                    Our Ayurvedic formulation penetrates deep through the belly
                    button, nourishing vital channels that control respiratory
                    ease and throat relaxation.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 font-button text-[10px] tracking-widest uppercase text-on-surface dark:text-surface border-b border-on-surface dark:border-surface pb-1 hover:text-primary-container dark:hover:text-primary-container hover:border-primary-container transition-colors"
                    href="#shop"
                  >
                    ORDER NOW{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Card: Nightly Wellness Solutions */}
              <div className="science-card-usage lg:col-span-4 bg-surface-container dark:bg-zinc-850/20 p-8 rounded-2xl border border-secondary-container/20 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-on-surface dark:text-surface mb-6 border-b border-secondary-container/10 pb-4 font-semibold">
                    THE RESTORATION
                  </h3>
                  <div className="science-usage-line hidden"></div>
                  <ul className="space-y-6">
                    <li className="science-usage-step flex items-start gap-4">
                      <span className="material-symbols-outlined text-green-500 bg-green-500/10 p-1.5 rounded-lg text-lg">
                        air
                      </span>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1">
                          Clear Nasal Flow
                        </h4>
                        <p className="font-body-md text-xs text-on-surface-variant dark:text-secondary-container leading-relaxed">
                          Stimulates specific Ayurvedic points to ease airway
                          blockage and support healthy, silent breathing.
                        </p>
                      </div>
                    </li>
                    <li className="science-usage-step flex items-start gap-4">
                      <span className="material-symbols-outlined text-green-500 bg-green-500/10 p-1.5 rounded-lg text-lg">
                        hotel
                      </span>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1">
                          Deep Silent Sleep
                        </h4>
                        <p className="font-body-md text-xs text-on-surface-variant dark:text-secondary-container leading-relaxed">
                          Reduces snoring instances, letting you achieve deep
                          REM sleep cycles and wake up fully energized.
                        </p>
                      </div>
                    </li>
                    <li className="science-usage-step flex items-start gap-4">
                      <span className="material-symbols-outlined text-green-500 bg-green-500/10 p-1.5 rounded-lg text-lg">
                        bolt
                      </span>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1">
                          End Sleep Fatigue
                        </h4>
                        <p className="font-body-md text-xs text-on-surface-variant dark:text-secondary-container leading-relaxed">
                          Improved nighttime oxygenation removes morning brain
                          fog and chronic daytime sleepiness.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Ingredients Section */}
        <section
          id="formula"
          className="bg-white dark:bg-zinc-950 border-b border-secondary-container/10 transition-colors duration-300"
        >
          <div className="max-w-max-width mx-auto px-section-padding-h py-24">
            <div className="formula-title text-center mb-16">
              <p className="font-button text-[11px] tracking-[0.2em] text-primary-container mb-2 uppercase">
                Apothecary Profile
              </p>
              <h2 className="font-serif text-[36px] leading-tight text-on-surface dark:text-surface mb-4">
                The Active Botanicals
              </h2>
              <div className="w-12 h-px bg-primary-container mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left: Apothecary Showcase Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group max-w-sm w-full">
                  {/* Decorative gold background ring */}
                  <div className="absolute -inset-4 rounded-full border border-primary-container/30 animate-[spin_20s_linear_infinite] pointer-events-none"></div>
                  <div className="absolute -inset-2 rounded-full border border-secondary-container/10 pointer-events-none"></div>

                  <div className="relative rounded-full overflow-hidden aspect-square border border-secondary-container/20 shadow-2xl bg-surface-container-low dark:bg-zinc-800">
                    <Image
                      src={ingredientsImg}
                      alt="Natural ingredients: Black pepper, castor oil, tulsi, and cinnamon"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-on-surface dark:bg-surface text-surface dark:text-on-surface px-6 py-2 rounded-full shadow-lg border border-secondary-container/25 text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap">
                    100% Pure Extracts
                  </div>
                </div>
              </div>

              {/* Right: Botanical Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="formula-card group p-5 dark:hover:bg-zinc-800/10 rounded-2xl transition-all duration-300 border border-secondary-container/10 flex gap-4 items-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-secondary-container/15 bg-surface-container dark:bg-zinc-900">
                    <Image
                      src={blackPepperImg}
                      alt="Organic Black Pepper extract"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover scale-150 transition-transform duration-500 group-hover:scale-155"
                    />
                    <div className="absolute inset-0 bg-primary-container/5 mix-blend-color-burn"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-serif text-base text-on-surface dark:text-surface font-semibold">
                        Black Pepper
                      </h3>
                      <span className="font-button text-[8px] tracking-widest uppercase bg-primary-container/10 text-primary-container px-1.5 py-0.5 rounded font-extrabold">
                        Warming
                      </span>
                    </div>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-[11px] leading-relaxed">
                      Ayurvedic heating agent that stimulates respiratory
                      pathways and facilitates healthy, clear airflow.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="formula-card group p-5 dark:hover:bg-zinc-800/10 rounded-2xl transition-all duration-300 border border-secondary-container/10 flex gap-4 items-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-secondary-container/15 bg-surface-container dark:bg-zinc-900">
                    <Image
                      src={castorOilImg}
                      alt="Pure Castor Oil extract"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover scale-150 transition-transform duration-500 group-hover:scale-155"
                    />
                    <div className="absolute inset-0 bg-primary-container/5 mix-blend-color-burn"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-serif text-base text-on-surface dark:text-surface font-semibold">
                        Castor Oil
                      </h3>
                      <span className="font-button text-[8px] tracking-widest uppercase bg-primary-container/10 text-primary-container px-1.5 py-0.5 rounded font-extrabold">
                        Lubricant
                      </span>
                    </div>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-[11px] leading-relaxed">
                      Deeply penetrates tissue layers to lubricate dry membranes
                      and quiet localized muscle vibrations.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="formula-card group p-5 dark:hover:bg-zinc-800/10 rounded-2xl transition-all duration-300 border border-secondary-container/10 flex gap-4 items-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-secondary-container/15 bg-surface-container dark:bg-zinc-900">
                    <Image
                      src={tulsiImg}
                      alt="Holy Basil Tulsi extract"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover scale-150 transition-transform duration-500 group-hover:scale-155"
                    />
                    <div className="absolute inset-0 bg-primary-container/5 mix-blend-color-burn"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-serif text-base text-on-surface dark:text-surface font-semibold">
                        Tulsi
                      </h3>
                      <span className="font-button text-[8px] tracking-widest uppercase bg-primary-container/10 text-primary-container px-1.5 py-0.5 rounded font-extrabold">
                        Adaptogen
                      </span>
                    </div>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-[11px] leading-relaxed">
                      An anti-inflammatory adaptogen that purifies the throat
                      area and helps keep respiratory passages unblocked.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="formula-card group p-5 rounded-2xl transition-all duration-300 border border-secondary-container/10 flex gap-4 items-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-secondary-container/15 bg-surface-container dark:bg-zinc-900">
                    <Image
                      src={cinnamonImg}
                      alt="Pure Cinnamon extract"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover scale-150 transition-transform duration-500 group-hover:scale-155"
                    />
                    <div className="absolute inset-0 bg-primary-container/5 mix-blend-color-burn"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-serif text-base text-on-surface dark:text-surface font-semibold">
                        Cinnamon
                      </h3>
                      <span className="font-button text-[8px] tracking-widest uppercase bg-primary-container/10 text-primary-container px-1.5 py-0.5 rounded font-extrabold">
                        Soothing
                      </span>
                    </div>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-[11px] leading-relaxed">
                      Eases throat tension and has natural warming qualities to
                      maintain smooth and relaxed breathing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="bg-surface-container-low dark:bg-zinc-900/20 py-24 border-b border-secondary-container/10 transition-colors duration-300"
        >
          <div className="max-w-max-width mx-auto px-section-padding-h">
            <div className="benefits-title text-center mb-16">
              <p className="font-button text-[11px] tracking-[0.2em] text-primary-container mb-2 uppercase">
                Why It Works
              </p>
              <h2 className="font-serif text-[36px] leading-tight text-on-surface dark:text-surface mb-4">
                Powerful Health Benefits
              </h2>
              <div className="w-12 h-px bg-primary-container mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Visual Highlight Card */}
              <div className="lg:col-span-5">
                <div className="w-full h-full bg-linear-to-br from-primary-container/10 to-primary/10 dark:from-zinc-900/60 dark:to-zinc-800/40 p-8 rounded-3xl border border-primary-container/20 relative overflow-hidden group shadow-lg flex flex-col justify-between">
                  {/* Decorative glowing gradient orb in background */}
                  <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-primary-container/20 blur-3xl group-hover:bg-primary-container/30 transition-colors duration-500"></div>
                  <div className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors duration-500"></div>

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px]">
                    <div>
                      <span className="bg-primary-container/25 text-primary dark:text-primary-container text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                        Clinically Inspired
                      </span>
                      <h3 className="font-serif text-3xl text-on-surface dark:text-surface mt-6 mb-4 leading-tight">
                        Holistic Sleep Restoration
                      </h3>
                      <p className="font-body-md text-xs text-on-surface-variant dark:text-secondary-container leading-relaxed">
                        By targeting the body&apos;s central energy pathways
                        through the navel, Snore Off Nabhi Oil works overnight
                        to soothe throat passages, clear blockages, and promote
                        deeper, soundless sleep cycles for both you and your
                        partner.
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-secondary-container/15 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shadow-md">
                        <span className="material-symbols-outlined text-black text-2xl font-bold">
                          verified
                        </span>
                      </div>
                      <div>
                        <p className="font-button text-[11px] uppercase tracking-wider text-on-surface dark:text-surface font-extrabold">
                          100% Ayurvedic
                        </p>
                        <p className="font-body-md text-[10px] text-on-surface-variant dark:text-secondary-container mt-0.5">
                          Certified Safe & Pure
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Benefits grid */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-3 md:gap-5">
                {/* Benefit 1 */}
                <div className="benefit-card p-3.5 md:p-5 bg-surface-container-low dark:bg-zinc-900/10 rounded-2xl border border-secondary-container/10 flex gap-3 md:gap-5 items-start">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl md:text-2xl">
                      airwave
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xs md:text-base text-on-surface dark:text-surface font-semibold mb-1">
                      Clears Airways
                    </h4>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-[10px] md:text-xs leading-relaxed">
                      Natural decongestants help open breathing passages,
                      facilitating effortless oxygen flow.
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="benefit-card p-3.5 md:p-5 bg-surface-container-low dark:bg-zinc-900/10 rounded-2xl border border-secondary-container/10 flex gap-3 md:gap-5 items-start">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl md:text-2xl">
                      pulse_alert
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xs md:text-base text-on-surface dark:text-surface font-semibold mb-1">
                      Reduces Inflammation
                    </h4>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-[10px] md:text-xs leading-relaxed">
                      Anti-inflammatory herbs reduce airway swelling, soothing
                      throat tissues to calm vibrations.
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="benefit-card p-3.5 md:p-5 bg-surface-container-low dark:bg-zinc-900/10 rounded-2xl border border-secondary-container/10 flex gap-3 md:gap-5 items-start">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl md:text-2xl">
                      bedtime
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xs md:text-base text-on-surface dark:text-surface font-semibold mb-1">
                      Improves Sleep Quality
                    </h4>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-[10px] md:text-xs leading-relaxed">
                      Better breathing leads to more restful sleep, helping you
                      achieve deeper sleep cycles without disruptions.
                    </p>
                  </div>
                </div>

                {/* Benefit 4 */}
                <div className="benefit-card p-3.5 md:p-5 bg-surface-container-low dark:bg-zinc-900/10 rounded-2xl border border-secondary-container/10 flex gap-3 md:gap-5 items-start">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl md:text-2xl">
                      diversity_1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xs md:text-base text-on-surface dark:text-surface font-semibold mb-1">
                      Partner Relief
                    </h4>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-[10px] md:text-xs leading-relaxed">
                      Reduces snoring for peaceful sleep for both partners,
                      eliminating nightly fatigue and disturbance.
                    </p>
                  </div>
                </div>

                {/* Benefit 5 */}
                <div className="benefit-card col-span-2 p-3.5 md:p-5 bg-surface-container-low dark:bg-zinc-900/10 rounded-2xl border border-secondary-container/10 flex gap-3 md:gap-5 items-start">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl md:text-2xl">
                      health_and_safety
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xs md:text-base text-on-surface dark:text-surface font-semibold mb-1">
                      Respiratory Support
                    </h4>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-[10px] md:text-xs leading-relaxed">
                      Strengthens overall respiratory system function and
                      supports optimal nighttime oxygen levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guide & Video Section */}
        <section
          id="ritual"
          className="bg-white dark:bg-zinc-950 border-b border-secondary-container/10 transition-colors duration-300"
        >
          <div className="max-w-max-width mx-auto px-section-padding-h py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and Timeline Steps */}
            <div className="lg:col-span-7">
              <div className="ritual-title mb-10">
                <p className="font-button text-[11px] tracking-[0.2em] text-primary-container mb-2 uppercase">
                  Application Protocol
                </p>
                <h2 className="font-serif text-[36px] leading-tight text-on-surface dark:text-surface mb-4">
                  The Nightly Ritual
                </h2>
                <div className="w-12 h-px bg-primary-container"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Step 1 */}
                <div className="ritual-step relative pl-6 border-l border-primary-container/20 group">
                  <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-primary-container group-hover:scale-150 transition-transform"></div>
                  <span className="font-serif text-3xl font-bold text-primary-container/20 leading-none select-none block mb-2">
                    01
                  </span>
                  <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1">
                    CLEANSE NAVEL
                  </h4>
                  <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-xs leading-relaxed">
                    Gently wipe your navel with a clean cloth to prep the skin.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="ritual-step relative pl-6 border-l border-primary-container/20 group">
                  <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-primary-container group-hover:scale-150 transition-transform"></div>
                  <span className="font-serif text-3xl font-bold text-primary-container/20 leading-none select-none block mb-2">
                    02
                  </span>
                  <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1">
                    DISPENSE DROPS
                  </h4>
                  <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-xs leading-relaxed">
                    Put 4-5 drops of Nabhi Oil in your belly button daily before
                    bedtime.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="ritual-step relative pl-6 border-l border-primary-container/20 group">
                  <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-primary-container group-hover:scale-150 transition-transform"></div>
                  <span className="font-serif text-3xl font-bold text-primary-container/20 leading-none select-none block mb-2">
                    03
                  </span>
                  <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1">
                    CIRCULAR MASSAGE
                  </h4>
                  <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-xs leading-relaxed">
                    Massage the belly button area in a circular motion to
                    stimulate key nerve endings.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="ritual-step relative pl-6 border-l border-primary-container/20 group">
                  <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-primary-container group-hover:scale-150 transition-transform"></div>
                  <span className="font-serif text-3xl font-bold text-primary-container/20 leading-none select-none block mb-2">
                    04
                  </span>
                  <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1">
                    ALLOW ABSORPTION
                  </h4>
                  <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-xs leading-relaxed">
                    Wait for a few minutes for the oil to get absorbed entirely
                    before sleeping.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Video Frame */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setIsVideoOpen(true)}
                className="ritual-video-container aspect-4/5 bg-surface-container dark:bg-zinc-800/20 border border-secondary-container/10 relative group cursor-pointer overflow-hidden flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl"
              >
                <Image
                  alt="Ayurvedic Nabhi Therapy application illustration"
                  className="ritual-video-image absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-2000 group-hover:scale-105"
                  src={howToUseDropperImg}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500"></div>

                {/* Floating gold frame accent */}
                <div className="absolute inset-4 border border-primary-container/20 group-hover:border-primary-container/40 transition-colors duration-500 rounded-xl pointer-events-none z-10"></div>

                <div className="w-16 h-16 bg-surface/90 dark:bg-zinc-900/90 rounded-full flex items-center justify-center relative z-10 group-hover:bg-primary-container group-hover:text-black transition-all duration-300 shadow-md transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl ml-1 text-on-surface dark:text-surface group-hover:text-black">
                    play_arrow
                  </span>
                </div>

                <span className="absolute bottom-6 left-6 text-[10px] font-bold text-white bg-black/75 px-4 py-1.5 rounded-full z-10 backdrop-blur-sm flex items-center gap-2 border border-white/10 uppercase tracking-widest">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                  Play Guide Video
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Ayurvedic Credibility Section */}
        <section
          id="credibility"
          className="bg-surface-container-low dark:bg-zinc-900/20 border-b border-secondary-container/10 py-24 transition-colors duration-300"
        >
          <div className="max-w-max-width mx-auto px-section-padding-h">
            <div className="credibility-title text-center mb-16">
              <p className="font-button text-[11px] tracking-[0.2em] text-primary-container mb-2 uppercase">
                Trust & Heritage
              </p>
              <h2 className="font-serif text-[36px] leading-tight text-on-surface dark:text-surface mb-4">
                Ayurvedic Credibility
              </h2>
              <div className="w-12 h-px bg-primary-container mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {/* Card 1 */}
              <div className="credibility-card group bg-surface dark:bg-zinc-900/40 p-4 md:p-8 rounded-2xl border border-secondary-container/10 hover:border-primary-container/40 transition-all duration-300 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-primary-container/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary-container text-2xl md:text-3xl">
                    history_edu
                  </span>
                </div>
                <h3 className="font-serif text-xs md:text-base font-bold text-on-surface dark:text-surface mb-2 uppercase tracking-wide">
                  40+ Years Ayurvedic Legacy
                </h3>
                <p className="font-body-md text-[10px] md:text-[11px] text-on-surface-variant dark:text-secondary-container leading-relaxed">
                  Deeply rooted in decades of traditional wisdom, passing down
                  time-tested healing formulations.
                </p>
              </div>

              {/* Card 2 */}
              <div className="credibility-card group bg-surface dark:bg-zinc-900/40 p-4 md:p-8 rounded-2xl border border-secondary-container/10 hover:border-primary-container/40 transition-all duration-300 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-primary-container/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary-container text-2xl md:text-3xl">
                    biotech
                  </span>
                </div>
                <h3 className="font-serif text-xs md:text-base font-bold text-on-surface dark:text-surface mb-2 uppercase tracking-wide">
                  Expert Formulation
                </h3>
                <p className="font-body-md text-[10px] md:text-[11px] text-on-surface-variant dark:text-secondary-container leading-relaxed">
                  Scientifically balanced ratios of active botanicals designed
                  for optimal absorption and efficacy.
                </p>
              </div>

              {/* Card 3 */}
              <div className="credibility-card group bg-surface dark:bg-zinc-900/40 p-4 md:p-8 rounded-2xl border border-secondary-container/10 hover:border-primary-container/40 transition-all duration-300 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-primary-container/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary-container text-2xl md:text-3xl">
                    workspace_premium
                  </span>
                </div>
                <h3 className="font-serif text-xs md:text-base font-bold text-on-surface dark:text-surface mb-2 uppercase tracking-wide">
                  Made by Ayurveda Experts
                </h3>
                <p className="font-body-md text-[10px] md:text-[11px] text-on-surface-variant dark:text-secondary-container leading-relaxed">
                  Handcrafted and certified by experienced Vaidyas using
                  authentic Shastra methods.
                </p>
              </div>

              {/* Card 4 */}
              <div className="credibility-card group bg-surface dark:bg-zinc-900/40 p-4 md:p-8 rounded-2xl border border-secondary-container/10 hover:border-primary-container/40 transition-all duration-300 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-primary-container/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-primary-container text-2xl md:text-3xl">
                    spa
                  </span>
                </div>
                <h3 className="font-serif text-xs md:text-base font-bold text-on-surface dark:text-surface mb-2 uppercase tracking-wide">
                  Ingredient Purity
                </h3>
                <p className="font-body-md text-[10px] md:text-[11px] text-on-surface-variant dark:text-secondary-container leading-relaxed">
                  100% natural, wild-harvested ingredients free from synthetic
                  additives, heavy metals, or chemicals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section
          id="reviews"
          className="bg-white dark:bg-zinc-950 border-b border-secondary-container/10 transition-colors duration-300"
        >
          <div className="max-w-max-width mx-auto px-section-padding-h py-section-padding-v">
            {/* Reviews Title */}
            <div className="reviews-title text-center mb-stack-lg">
              <h2 className="reviews-trusted-title font-headline-sm text-headline-sm text-on-surface dark:text-surface mb-4 uppercase tracking-widest">
                WHAT OUR BUYERS SAY
              </h2>
              <div className="w-12 h-px bg-primary-container mx-auto"></div>
            </div>

            {/* Reviews List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="review-card review-card-left p-8 border border-secondary-container/20 dark:border-zinc-800 bg-surface-container-lowest dark:bg-zinc-900/20 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex text-primary-container mb-6">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-headline-sm text-[20px] leading-relaxed text-on-surface dark:text-surface mb-6 font-semibold italic">
                  &ldquo;My snoring was so loud it kept my wife awake every
                  night. Since using Snore Off Nabhi Oil, my breathing is
                  completely silent and we both sleep peacefully.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container dark:bg-zinc-800 border border-secondary-container/20 overflow-hidden flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed">
                      person
                    </span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface dark:text-surface">
                      MARCUS T.
                    </p>
                    <p className="font-body-md text-[12px] text-on-surface-variant dark:text-secondary-container">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </div>

              <div className="review-card review-card-right p-8 border border-secondary-container/20 dark:border-zinc-800 bg-surface-container-lowest dark:bg-zinc-900/20 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex text-primary-container mb-6">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-headline-sm text-[20px] leading-relaxed text-on-surface dark:text-surface mb-6 font-semibold italic">
                  &ldquo;I was skeptical about applying oil in my navel, but it
                  actually works! I wake up with clear airways and no throat
                  dryness. Essential part of my nightly routine.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container dark:bg-zinc-800 border border-secondary-container/20 overflow-hidden flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed">
                      person
                    </span>
                  </div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface dark:text-surface">
                      ELENA R.
                    </p>
                    <p className="font-body-md text-[12px] text-on-surface-variant dark:text-secondary-container">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="dark:bg-zinc-900/20 border-b border-secondary-container/10 transition-colors duration-300">
          <div className="max-w-[800px] mx-auto px-section-padding-h py-section-padding-v">
            <div className="faq-title text-center mb-stack-lg">
              <h2 className="font-headline-sm text-headline-sm text-on-surface dark:text-surface mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="w-12 h-px bg-primary-container mx-auto"></div>
            </div>

            <div className="flex flex-col gap-4">
              {faqItems.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="faq-card bg-surface dark:bg-zinc-900/20 border border-secondary-container/20 dark:border-zinc-800/80 p-6 rounded-lg transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex justify-between items-center w-full font-button text-button cursor-pointer text-on-surface dark:text-surface text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold uppercase tracking-wider">
                        {item.question}
                      </span>
                      <span
                        className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-container" : ""}`}
                      >
                        expand_more
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-secondary-container/10"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-on-surface-variant dark:text-secondary-container font-body-md leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Often Bought Together / Recommendations */}
        <section className="bg-white dark:bg-zinc-950 transition-colors duration-300">
          <div className="max-w-max-width mx-auto px-section-padding-h py-section-padding-v">
            <div className="rec-title text-center mb-stack-lg">
              <h2 className="font-headline-sm text-headline-sm text-on-surface dark:text-surface mb-4">
                COMPLETE YOUR RITUAL
              </h2>
              <div className="w-12 h-px bg-primary-container mx-auto"></div>
            </div>

            {/* Ritual Products Carousel */}
            {(() => {
              const ritualProducts = [
                {
                  id: "ved-sleep-tea",
                  name: "VED SANJEEVANI SLEEP TEA",
                  price: 349.0,
                  displayPrice: "₹349.00",
                  image: tulsiImg,
                  imageSrc: "/tulsi.png",
                  alt: "Ved Sanjeevani Ayurvedic Sleep Tea",
                  qty: "1 Pack",
                },
                {
                  id: "ved-anu-taila",
                  name: "ANU TAILA NASAL DROPS",
                  price: 299.0,
                  displayPrice: "₹299.00",
                  image: howToUseDropperImg,
                  imageSrc: "/how_to_use_dropper.png",
                  alt: "Anu Taila Nasal Drops",
                  qty: "15ml Bottle",
                },
                {
                  id: "ved-snore-balm",
                  name: "SNORE OFF HERBAL BALM",
                  price: 199.0,
                  displayPrice: "₹199.00",
                  image: cinnamonImg,
                  imageSrc: "/cinnamon.png",
                  alt: "Ved Sanjeevani Snore Off Balm",
                  qty: "25g Jar",
                },
              ];
              const total = ritualProducts.length;
              const prev = () =>
                setRitualCarouselIndex((i) => (i - 1 + total) % total);
              const next = () =>
                setRitualCarouselIndex((i) => (i + 1) % total);
              const product = ritualProducts[ritualCarouselIndex];
              return (
                <div className="flex flex-col items-center gap-6">
                  <div className="relative w-full max-w-sm mx-auto">
                    {/* Prev button */}
                    <button
                      onClick={prev}
                      aria-label="Previous product"
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-secondary-container/30 bg-surface dark:bg-zinc-900 hover:border-primary-container/60 hover:bg-surface-container-low dark:hover:bg-zinc-800 transition-all shadow-sm cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xl text-on-surface dark:text-surface">
                        chevron_left
                      </span>
                    </button>

                    {/* Card */}
                    <div
                      key={ritualCarouselIndex}
                      className="rec-card group border border-secondary-container/20 dark:border-zinc-800 p-8 flex flex-col items-center text-center hover:border-primary-container/50 transition-all bg-surface dark:bg-zinc-900/10 rounded-xl"
                    >
                      <div className="w-40 h-40 bg-surface-container-low dark:bg-zinc-800/30 mb-6 flex items-center justify-center p-4 rounded-lg overflow-hidden">
                        <Image
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          alt={product.alt}
                          src={product.image}
                          width={160}
                          height={160}
                        />
                      </div>
                      <h3 className="font-button text-button text-on-surface dark:text-surface mb-2 font-semibold">
                        {product.name}
                      </h3>
                      <p className="font-body-md text-[14px] text-on-surface-variant dark:text-secondary-container mb-6 font-semibold">
                        {product.displayPrice}
                      </p>
                      <button
                        onClick={() =>
                          handleAddToCart(
                            product.id,
                            product.name,
                            product.price,
                            product.imageSrc,
                            product.qty,
                          )
                        }
                        className="w-full border border-on-surface dark:border-surface text-on-surface dark:text-surface py-3 font-label-caps text-label-caps hover:bg-on-surface hover:text-surface dark:hover:bg-surface dark:hover:text-on-surface transition-colors mt-auto cursor-pointer rounded"
                      >
                        ADD TO CART
                      </button>
                    </div>

                    {/* Next button */}
                    <button
                      onClick={next}
                      aria-label="Next product"
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-secondary-container/30 bg-surface dark:bg-zinc-900 hover:border-primary-container/60 hover:bg-surface-container-low dark:hover:bg-zinc-800 transition-all shadow-sm cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xl text-on-surface dark:text-surface">
                        chevron_right
                      </span>
                    </button>
                  </div>

                  {/* Dot indicators */}
                  <div className="flex items-center gap-2">
                    {ritualProducts.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setRitualCarouselIndex(i)}
                        aria-label={`Go to product ${i + 1}`}
                        className={`rounded-full transition-all duration-300 cursor-pointer ${
                          i === ritualCarouselIndex
                            ? "w-6 h-2 bg-primary-container"
                            : "w-2 h-2 bg-secondary-container/40 hover:bg-secondary-container/70"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Counter */}
                  <p className="text-xs text-on-surface-variant dark:text-secondary-container font-semibold tracking-wider uppercase">
                    {ritualCarouselIndex + 1} / {total}
                  </p>
                </div>
              );
            })()}
          </div>
        </section>

        {/* Media & Available On Section */}
        <section className="dark:bg-zinc-900/10 border-t border-b border-secondary-container/10 py-16 transition-colors duration-300">
          <div className="max-w-max-width mx-auto px-section-padding-h flex flex-col gap-16">
            {/* In Media */}
            <div className="flex flex-col items-center">
              <h3 className="font-sans text-lg md:text-xl text-on-surface dark:text-surface font-semibold mb-8 text-center tracking-wider">
                In Media
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 w-full max-w-4xl px-4">
                {/* Forbes India */}
                <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 dark:brightness-0 dark:invert">
                  <Image
                    src={forbesLogo}
                    alt="Forbes India"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                {/* Business Connect */}
                <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <BusinessConnectLogo />
                </div>
                {/* The Live Nagpur */}
                <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <TheLiveNagpurLogo />
                </div>
                {/* Ahmedabad Mirror */}
                <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <AhmedabadMirrorLogo />
                </div>
              </div>
            </div>

            {/* Also available on */}
            <div className="flex flex-col items-center">
              <h3 className="font-sans text-lg md:text-xl text-on-surface dark:text-surface font-semibold mb-8 text-center tracking-wider">
                Also available on
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 w-full max-w-4xl px-4">
                {/* Blinkit */}
                <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <BlinkitLogo />
                </div>
                {/* Amazon */}
                <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 dark:brightness-0 dark:invert">
                  <Image
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-7 w-auto object-contain"
                  />
                </div>
                {/* Flipkart */}
                <div className="h-12 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <Image
                    src={flipkartLogo}
                    alt="Flipkart"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                {/* Myntra */}
                <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <Image
                    src={myntraLogo}
                    alt="Myntra"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                {/* Meesho */}
                <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300">
                  <Image
                    src={meeshoLogo}
                    alt="Meesho"
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-on-surface dark:bg-zinc-950 text-primary-container w-full transition-colors duration-300">
        <div className="flex flex-col items-center py-section-padding-v px-section-padding-h max-w-max-width mx-auto gap-stack-lg">
          <a
            className="footer-logo hover:opacity-100 transition-opacity"
            href="#"
          >
            <Image
              src={headerLogo}
              alt="Ved Sanjeevani Logo"
              className="h-12 w-auto object-contain rounded-md"
            />
          </a>
          <nav className="flex flex-wrap justify-center gap-gutter">
            <a
              className="footer-link font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              PRIVACY
            </a>
            <a
              className="footer-link font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              TERMS
            </a>
            <a
              className="footer-link font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              SHIPPING
            </a>
            <a
              className="footer-link font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              CONTACT
            </a>
          </nav>
          <div className="w-full h-px bg-secondary-fixed-dim/10 mt-stack-sm mb-stack-sm"></div>
          <p className="footer-copyright font-body-md text-body-md text-secondary-fixed-dim text-sm text-center opacity-70">
            © 2024 VED SANJEEVANI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* Slide-over Cart Drawer */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* Dark Backdrop */}
            <div
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out"
            ></div>

            {/* Panel */}
            <div className="absolute inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <div className="w-screen max-w-md pointer-events-auto">
                <div className="flex flex-col h-full bg-surface dark:bg-zinc-900 shadow-2xl border-l border-secondary-container/10">
                  {/* Header */}
                  <div className="px-6 py-6 border-b border-secondary-container/10 flex items-center justify-between">
                    <h2 className="font-button text-lg uppercase tracking-wider text-on-surface dark:text-surface flex items-center gap-2 font-bold">
                      <span className="material-symbols-outlined">
                        shopping_bag
                      </span>
                      SHOPPING BAG ({cartTotalItems})
                    </h2>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-on-surface dark:text-surface hover:text-primary p-2 cursor-pointer transition-colors"
                      aria-label="Close cart"
                    >
                      <span className="material-symbols-outlined text-2xl">
                        close
                      </span>
                    </button>
                  </div>

                  {/* Item List */}
                  <div className="flex-1 overflow-y-auto py-6 px-6 hide-scrollbar">
                    {cart.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                        <span className="material-symbols-outlined text-6xl text-secondary-container">
                          shopping_bag
                        </span>
                        <p className="font-button text-sm uppercase tracking-widest text-on-surface-variant dark:text-secondary-fixed-dim">
                          Your bag is empty
                        </p>
                        <button
                          onClick={() => setIsCartOpen(false)}
                          className="mt-2 border border-on-surface dark:border-surface text-on-surface dark:text-surface py-3 px-6 font-label-caps text-label-caps hover:bg-on-surface hover:text-surface dark:hover:bg-surface dark:hover:text-on-surface transition-colors cursor-pointer"
                        >
                          CONTINUE SHOPPING
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {cart.map((item) => (
                          <div
                            key={item.id}
                            className="flex gap-4 pb-6 border-b border-secondary-container/10"
                          >
                            <div className="w-20 h-24 bg-surface-container-low dark:bg-zinc-800 rounded-lg overflow-hidden shrink-0 border border-secondary-container/10">
                              <Image
                                className="w-full h-full object-cover"
                                alt={item.name}
                                src={item.image}
                                width={80}
                                height={96}
                              />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <div className="flex justify-between items-start">
                                  <h3 className="font-button text-xs uppercase tracking-wider text-on-surface dark:text-surface font-semibold max-w-[80%]">
                                    {item.name}
                                  </h3>
                                  <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    className="text-on-surface-variant dark:text-secondary-container hover:text-error p-1 cursor-pointer"
                                    aria-label="Remove item"
                                  >
                                    <span className="material-symbols-outlined text-sm">
                                      delete
                                    </span>
                                  </button>
                                </div>
                                <p className="text-[10px] text-on-surface-variant dark:text-secondary-container font-label-caps uppercase mt-1 tracking-wider">
                                  {item.size}
                                </p>
                              </div>

                              <div className="flex justify-between items-center mt-2">
                                {/* Quantity selector */}
                                <div className="flex items-center border border-secondary-container/40 dark:border-zinc-700 rounded-md overflow-hidden bg-background dark:bg-zinc-850">
                                  <button
                                    onClick={() =>
                                      handleUpdateQuantity(item.id, -1)
                                    }
                                    className="px-2 py-1 text-on-surface dark:text-surface hover:bg-secondary-container/20 cursor-pointer"
                                    aria-label="Decrease quantity"
                                  >
                                    <span className="material-symbols-outlined text-xs select-none">
                                      remove
                                    </span>
                                  </button>
                                  <span className="px-3 font-button text-xs text-on-surface dark:text-surface font-bold select-none">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleUpdateQuantity(item.id, 1)
                                    }
                                    className="px-2 py-1 text-on-surface dark:text-surface hover:bg-secondary-container/20 cursor-pointer"
                                    aria-label="Increase quantity"
                                  >
                                    <span className="material-symbols-outlined text-xs select-none">
                                      add
                                    </span>
                                  </button>
                                </div>

                                <span className="font-button text-sm font-semibold text-on-surface dark:text-surface">
                                  ₹{(item.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Summary & Checkout Footer */}
                  {cart.length > 0 && (
                    <div className="border-t border-secondary-container/10 px-6 py-6 bg-surface-container-low dark:bg-zinc-950/40">
                      <div className="flex justify-between text-base font-semibold text-on-surface dark:text-surface mb-2">
                        <span className="font-label-caps tracking-wider">
                          SUBTOTAL
                        </span>
                        <span className="font-button">
                          ₹{cartSubtotal.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant dark:text-secondary-container mb-6 leading-tight">
                        Shipping and taxes calculated at checkout. Complimentary
                        domestic shipping applied.
                      </p>
                      <button
                        onClick={() => {
                          showToast(
                            "Checkout simulation initiated. Connecting to secure gateway...",
                          );
                        }}
                        className="w-full bg-on-surface dark:bg-surface text-surface dark:text-on-surface py-4 font-button text-button uppercase tracking-[0.15em] hover:bg-primary-container hover:text-on-primary-container dark:hover:bg-primary-container dark:hover:text-on-primary-container transition-all duration-300 shadow cursor-pointer text-center font-bold"
                      >
                        PROCEED TO SECURE CHECKOUT
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl z-10 border border-zinc-800">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors z-20"
              aria-label="Close video player"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* HTML5 Video Player */}
            <div className="aspect-video w-full flex items-center justify-center">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                src="https://assets.mixkit.co/videos/preview/mixkit-coffee-pouring-into-a-cup-34394-large.mp4"
                poster="https://lh3.googleusercontent.com/aida-public/AB6AXuB0MMiTSDp0iTXhcDnxPJM8TpIP6xx8wavJ2Q_mB-ug6l6yd1n8gdV9RQEU8_hlvzISckzE_vo_hpWr5hPzmEj67kxEi2xubALRULXh5z9gSRLfne3DQgWjM8mEafhPPShBU_A115e84Zz69Xv3HQtlwgqFdY-zeEH6k6RwqJL1lYkyOzesQwIWfkecNYV3iQttp_pJ1UhRexPcNfw9NUjJB7QcCQQZGcmOPMmxkgvaevk9W3KwMCk6_1wkqf2cAlc9EOJJR98aoRk"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <div
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          ></div>

          {/* Input Box */}
          <div className="relative w-full max-w-2xl bg-surface dark:bg-zinc-900 rounded-xl shadow-2xl z-10 border border-secondary-container/20 dark:border-zinc-800 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-secondary-container/20 dark:border-zinc-850 pb-2">
              <span className="material-symbols-outlined text-secondary text-2xl">
                search
              </span>
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, science papers, or journal articles..."
                className="flex-1 bg-transparent border-none text-on-surface dark:text-surface focus:outline-none placeholder-on-surface-variant/50 text-base"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-on-surface-variant hover:text-on-surface p-1 cursor-pointer"
                aria-label="Close search"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Quick links / results */}
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-[10px] text-on-surface-variant dark:text-secondary-container uppercase tracking-wider">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {[
                  "Lion's Mane",
                  "Alpha-GPC",
                  "Clinical trials",
                  "Night Rest",
                  "Shipping policy",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-3 py-1 bg-surface-container-low dark:bg-zinc-800 hover:bg-primary-container hover:text-on-primary-container dark:hover:bg-primary-container dark:hover:text-on-primary-container text-xs rounded-full font-button text-on-surface-variant dark:text-surface-variant cursor-pointer transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-on-surface dark:bg-surface text-surface dark:text-on-surface px-6 py-4 shadow-xl flex items-center gap-4 rounded-lg border border-primary-container/20 max-w-sm animate-bounce">
          <span className="material-symbols-outlined text-primary-container">
            check_circle
          </span>
          <div className="flex-1">
            <p className="font-button text-xs uppercase tracking-wide font-bold">
              {toastMessage}
            </p>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="font-label-caps text-[10px] tracking-wider underline hover:text-primary-container cursor-pointer select-none"
          >
            VIEW BAG
          </button>
        </div>
      )}
    </div>
  );
}
