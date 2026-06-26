"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image, { StaticImageData } from "next/image";

// Local image imports for optimal sizing and placeholder generation
import headerLogo from "../../public/header-llogo.avif";
import snoreOffNabhiOil from "../../public/snore-off-nabhi-oil.png";
import ingredientsImg from "../../public/ingredients.png";
import blackPepperImg from "../../public/black_pepper.png";
import castorOilImg from "../../public/castor_oil.png";
import tulsiImg from "../../public/tulsi.png";
import cinnamonImg from "../../public/cinnamon.png";
import howToUseDropperImg from "../../public/how_to_use_dropper.png";
import productImage1 from "../../public/images/product_image_1.jpg";
import productImage2 from "../../public/images/product_image_2.jpg";
import productImage3 from "../../public/images/product_image_3.jpg";

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

const mediaLogosList = [
  {
    id: "forbes",
    element: (
      <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 dark:brightness-0 dark:invert shrink-0">
        <Image
          src={forbesLogo}
          alt="Forbes India"
          className="h-8 w-auto object-contain"
        />
      </div>
    ),
  },
  {
    id: "bc",
    element: (
      <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <BusinessConnectLogo />
      </div>
    ),
  },
  {
    id: "livenagpur",
    element: (
      <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <TheLiveNagpurLogo />
      </div>
    ),
  },
  {
    id: "mirror",
    element: (
      <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <AhmedabadMirrorLogo />
      </div>
    ),
  },
];

const retailLogosList = [
  {
    id: "blinkit",
    element: (
      <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <BlinkitLogo />
      </div>
    ),
  },
  {
    id: "amazon",
    element: (
      <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 dark:brightness-0 dark:invert shrink-0">
        <Image
          src={amazonLogo}
          alt="Amazon"
          className="h-7 w-auto object-contain"
        />
      </div>
    ),
  },
  {
    id: "flipkart",
    element: (
      <div className="h-12 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <Image
          src={flipkartLogo}
          alt="Flipkart"
          className="h-10 w-auto object-contain"
        />
      </div>
    ),
  },
  {
    id: "myntra",
    element: (
      <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <Image
          src={myntraLogo}
          alt="Myntra"
          className="h-8 w-auto object-contain"
        />
      </div>
    ),
  },
  {
    id: "meesho",
    element: (
      <div className="h-10 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <Image
          src={meeshoLogo}
          alt="Meesho"
          className="h-8 w-auto object-contain"
        />
      </div>
    ),
  },
];

// Types
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
}

interface ProductCardProps {
  p: {
    id: string;
    name: string;
    price: number;
    displayPrice: string;
    image: StaticImageData;
    imageSrc: string;
    alt: string;
    qty: string;
  };
  onAddToCart: (
    id: string,
    name: string,
    price: number,
    image: string,
    size: string,
  ) => void;
}

const ProductCard = ({ p, onAddToCart }: ProductCardProps) => (
  <div className="rec-card group border border-secondary-container/20 dark:border-zinc-800 p-6 flex flex-col items-center text-center hover:border-primary-container/50 transition-all bg-surface dark:bg-zinc-900/10 rounded-xl">
    <div className="w-48 aspect-3/4 bg-surface-container-low dark:bg-zinc-800/30 mb-6 flex items-center justify-center p-4 rounded-lg overflow-hidden">
      <Image
        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        alt={p.alt}
        src={p.image}
        width={300}
        height={400}
      />
    </div>
    <h3 className="font-button text-button text-on-surface dark:text-surface mb-2 font-semibold">
      {p.name}
    </h3>
    <p className="font-body-md text-[14px] text-on-surface-variant dark:text-secondary-container mb-4 font-semibold">
      {p.displayPrice}
    </p>
    <button
      onClick={() => onAddToCart(p.id, p.name, p.price, p.imageSrc, p.qty)}
      className="w-full border border-on-surface dark:border-surface text-on-surface dark:text-surface py-3 font-label-caps text-label-caps hover:bg-on-surface hover:text-surface dark:hover:bg-surface dark:hover:text-on-surface transition-colors mt-auto cursor-pointer"
    >
      ADD TO CART
    </button>
  </div>
);

export default function Home() {
  // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Wellness pack state
  const [wellnessPack, setWellnessPack] = useState<"buy1" | "buy2">("buy1");

  // Toast notifications state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Gallery active index state
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Video modal state
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  // Reviews carousel active index state
  const [reviewCarouselIndex, setReviewCarouselIndex] = useState(0);

  // Swipe detection states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Video review refs for autoplay management
  const reviewVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Sticky Buy now button states and refs
  const purchaseConsoleRef = useRef<HTMLDivElement>(null);
  const [showStickyBuy, setShowStickyBuy] = useState(false);

  // Search modal state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Accordion active index state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);


  // Active hero information tab state
  const [activeHeroTab, setActiveHeroTab] = useState<
    "therapy" | "chakra" | "action"
  >("therapy");

  // Autoplay active video review card and pause inactive ones
  useEffect(() => {
    reviewVideoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === reviewCarouselIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [reviewCarouselIndex]);

  // Show sticky buy button when purchase actions console is scrolled past
  useEffect(() => {
    const handleScroll = () => {
      if (!purchaseConsoleRef.current) return;
      const rect = purchaseConsoleRef.current.getBoundingClientRect();
      setShowStickyBuy(rect.bottom < 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Touch Swipe handlers for reviews carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      setReviewCarouselIndex((i) => (i + 1) % 3);
    } else if (distance < -minSwipeDistance) {
      setReviewCarouselIndex((i) => (i - 1 + 3) % 3);
    }
  };

  // Auto-changing hero information tabs (rotates every 4.5s)
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
  }, []);

  // Product images mapping
  const productImages = [productImage3, productImage1, productImage2];

  // GSAP Animations
  useEffect(() => {
    // Create GSAP Context to handle double-mount in React 19/strict mode
    const ctx = gsap.context(() => {
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
          ".hero-wellness-pack",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          "-=0.45",
        )
        .fromTo(
          ".hero-val-prop",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.45",
        )
        .fromTo(
          ".hero-purchase-console",
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          ".hero-tab-switcher",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.35",
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

      // Review Carousel Wrapper
      gsap.fromTo(
        ".reviews-carousel-wrapper",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".reviews-carousel-wrapper",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Detailed Ratings Title
      gsap.fromTo(
        ".ratings-overview-title",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".ratings-overview-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Detailed Ratings Card
      gsap.fromTo(
        ".ratings-overview-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".ratings-overview-card",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
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
      question: "Why would putting oil in my belly button affect snoring?",
      answer:
        "The navel connects to over 72,000 nerve channels in Ayurvedic physiology. Through the Pechoti method, oil applied here is absorbed directly through these nerve endings into the respiratory and throat pathways — without passing through the digestive system. This is why application is topical, not oral. Modern research on transdermal absorption supports this ancient understanding.",
    },
    {
      question: "How long does it take to see improvement?",
      answer:
        "Most users notice a difference within 7–10 nights of regular nightly application. Partners typically notice before the user does. For deep-set chronic snoring, allow 3–4 weeks for full effect.",
    },
    {
      question: "Can I use this with other snoring devices or remedies?",
      answer:
        "Yes. Snore Off can be used alongside CPAP, nasal strips, or other natural therapies to enhance their effectiveness. Many users find they reduce CPAP dependence after 30 days.",
    },
    {
      question: "Is this safe for senior citizens?",
      answer:
        "Absolutely. It is non-invasive, has no known drug interactions, and is free of synthetic compounds — making it ideal for elderly individuals or anyone who cannot tolerate oral medications.",
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
      <div
        className={`fixed inset-0 z-50 flex md:hidden ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
        ></div>

        {/* Content */}
        <div
          className={`relative flex flex-col w-4/5 max-w-sm h-full bg-surface dark:bg-on-surface p-6 shadow-2xl z-10 will-change-transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
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
              <span className="material-symbols-outlined text-2xl">close</span>
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
                onClick={() =>
                  setActiveVideoUrl(
                    "https://assets.mixkit.co/videos/preview/mixkit-coffee-pouring-into-a-cup-34394-large.mp4",
                  )
                }
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

            <p className="hero-description font-sans text-sm text-on-surface-variant dark:text-secondary-container mb-3 leading-relaxed">
              Your partner hears it every night. You don&apos;t. That&apos;s exactly the problem Snore Off solves.
            </p>
            <h1 className="hero-title font-serif text-[42px] leading-tight text-on-surface dark:text-surface mb-2 tracking-tight">
              Snore Off Nabhi Oil
            </h1>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-primary-container mb-4 font-semibold">
              Sovereign Ayurvedic Sleep Elixir
            </p>

            <div className="hero-rating flex items-center gap-3 mb-6">
              <div className="flex text-primary-container">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined select-none !text-lg"
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
                1,280+ VERIFIED REVIEWS
              </a>
            </div>

            {/* Price Console */}
            <div className="hero-price mb-6 flex items-baseline gap-3 flex-wrap">
              <span className="font-serif text-3xl font-semibold text-on-surface dark:text-surface">
                ₹{wellnessPack === "buy1" ? "549" : "998"}
              </span>
              <span className="text-sm line-through text-on-surface-variant/70 dark:text-secondary-container/50">
                {wellnessPack === "buy1" ? "₹699" : "₹1,098"}
              </span>
              <span className="bg-primary-container/10 text-primary-container text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                {wellnessPack === "buy1" ? "just ₹18 / night" : "Save ₹100 + Free Gift"}
              </span>
            </div>

            {/* Wellness Pack Selector */}
            <div className="hero-wellness-pack mb-6">
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
                <span className="material-symbols-outlined text-sm text-primary-container">trending_up</span>
                <span className="text-on-surface dark:text-surface text-xs font-semibold">
                  2,400+ orders this month
                </span>
              </div>
              <div className="w-px h-4 bg-secondary-container/25"></div>
              <div className="flex items-center gap-1.5 text-xs text-on-surface-variant dark:text-secondary-container">
                <span className="material-symbols-outlined text-sm text-green-500">
                  local_shipping
                </span>
                <span>Dispatch today before 4 PM</span>
              </div>
            </div>

            {/* Purchase Actions Console */}
            <div ref={purchaseConsoleRef} className="hero-purchase-console flex flex-col gap-4 mb-8 bg-surface-container-low dark:bg-zinc-800/10 p-5 rounded-xl border border-secondary-container/10">
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
                className="w-full bg-primary-container hover:bg-primary-container/90 text-black font-extrabold py-4 px-6 flex justify-between items-center cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300 relative rounded-lg border border-primary-container"
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

              <div className="grid grid-cols-2 gap-3">
                {/* Prepaid Discount Badge */}
                <div className="bg-green-500/10 dark:bg-green-500/5 text-green-600 dark:text-green-400 py-3 px-2 border border-green-500/20 rounded-lg flex flex-col items-center justify-center gap-0.5 text-center">
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-60">Prepaid</span>
                  <span className="text-[9px] font-extrabold uppercase tracking-wide leading-tight">Free Dropper Kit (₹199)</span>
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
                  className="border border-on-surface dark:border-surface text-on-surface dark:text-surface hover:bg-on-surface hover:text-surface dark:hover:bg-surface dark:hover:text-on-surface py-3 px-4 font-button text-xs uppercase tracking-wider transition-all duration-300 flex justify-center items-center gap-2 cursor-pointer font-bold rounded-lg"
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* 30-Day Guarantee Badge */}
            <div className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-primary-container/30 bg-primary-container/5 mb-6">
              <span className="material-symbols-outlined text-primary-container text-xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <p className="text-xs text-on-surface dark:text-surface leading-snug">
                <span className="font-bold text-primary-container">30-Night Silent Sleep Guarantee</span>
                <span className="text-on-surface-variant dark:text-secondary-container"> — If you or your partner don&apos;t notice a difference, we return every rupee.</span>
              </p>
            </div>

            {/* Interactive Wisdom Tab Switcher */}
            <div className="hero-tab-switcher mt-4 pt-6 border-t border-secondary-container/10">
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

              <div className="min-h-[80px] transition-all duration-300">
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

                {/* Formulator Card — spans full width */}
                <div className="formula-card col-span-1 sm:col-span-2 p-5 rounded-2xl border border-primary-container/20 bg-primary-container/5 dark:bg-zinc-900/40 flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-primary-container/20 border-2 border-primary-container/30 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-base text-on-surface dark:text-surface font-semibold mb-0.5">
                      Dr. Sudhir Vaidya
                    </h3>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-primary-container font-bold mb-2">
                      BAMS · MD Ayurveda · 22 Years Practice
                    </p>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container text-[11px] leading-relaxed italic">
                      &ldquo;The Black Pepper-to-Castor ratio in this formula took three iterations to perfect. Too much pepper and the warming becomes irritating. Too little and you lose the bioavailability boost. This ratio is why it works.&rdquo;
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
                    Put 6 drops of Nabhi Oil in your belly button daily before
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
                onClick={() =>
                  setActiveVideoUrl(
                    "https://assets.mixkit.co/videos/preview/mixkit-coffee-pouring-into-a-cup-34394-large.mp4",
                  )
                }
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
          <div className="max-w-max-width mx-auto px-section-padding-h py-16 md:py-section-padding-v">
            {/* Reviews Title */}
            <div className="reviews-title text-center mb-stack-lg">
              <h2 className="reviews-trusted-title font-headline-sm text-headline-sm text-on-surface dark:text-surface mb-4 uppercase tracking-widest">
                WHAT OUR BUYERS SAY
              </h2>
              <div className="w-12 h-px bg-primary-container mx-auto"></div>
            </div>

            {/* Reviews Carousel Wrapper */}
            <div className="relative max-w-xl mx-auto px-12">
              {/* Previous Arrow Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setReviewCarouselIndex((i) => (i - 1 + 3) % 3);
                }}
                aria-label="Previous review"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-secondary-container/30 bg-surface dark:bg-zinc-900 hover:border-primary-container/60 hover:bg-surface-container-low dark:hover:bg-zinc-800 text-on-surface dark:text-surface shadow-xs cursor-pointer hover:scale-105 transition-all"
              >
                <span className="material-symbols-outlined text-xl">
                  chevron_left
                </span>
              </button>

              {/* Next Arrow Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setReviewCarouselIndex((i) => (i + 1) % 3);
                }}
                aria-label="Next review"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-secondary-container/30 bg-surface dark:bg-zinc-900 hover:border-primary-container/60 hover:bg-surface-container-low dark:hover:bg-zinc-800 text-on-surface dark:text-surface shadow-xs cursor-pointer hover:scale-105 transition-all"
              >
                <span className="material-symbols-outlined text-xl">
                  chevron_right
                </span>
              </button>

              {/* Sliding Area */}
              <div
                className="reviews-carousel-wrapper overflow-hidden rounded-3xl"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${reviewCarouselIndex * 100}%)`,
                  }}
                >
                  {[
                    {
                      name: "SURESH P.",
                      location: "Mumbai",
                      quote: "My wife used to record my snoring and show me in the morning. After 11 nights of this, she stopped bothering — because there was nothing to record.",
                      videoUrl:
                        "https://assets.mixkit.co/videos/preview/mixkit-man-sleeping-soundly-in-bed-41583-large.mp4",
                      posterUrl:
                        "https://images.unsplash.com/photo-1541781719201-981069c187a6?w=600&auto=format&fit=crop&q=80",
                    },
                    {
                      name: "PRIYA M.",
                      location: "Pune",
                      quote: "I was sceptical about navel oil for snoring. Tried it for two weeks and my sleep tracker showed 40% fewer disruptions. My husband noticed before I did.",
                      videoUrl:
                        "https://assets.mixkit.co/videos/preview/mixkit-woman-sleeping-peacefully-in-bed-41582-large.mp4",
                      posterUrl:
                        "https://images.unsplash.com/photo-1520206183501-b80ad6103b79?w=600&auto=format&fit=crop&q=80",
                    },
                    {
                      name: "RAJESH K.",
                      location: "Ahmedabad",
                      quote: "I've tried nasal strips and sprays for years. This is the first thing that actually worked past the first night. On day 8 I woke up genuinely rested for the first time in months.",
                      videoUrl:
                        "https://assets.mixkit.co/videos/preview/mixkit-young-woman-waking-up-and-stretching-in-bed-41584-large.mp4",
                      posterUrl:
                        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=80",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="w-full shrink-0 px-2">
                      <div
                        onClick={() => setActiveVideoUrl(item.videoUrl)}
                        className="review-card group max-w-sm mx-auto flex flex-col items-center bg-surface-container-lowest dark:bg-zinc-900/20 border border-secondary-container/20 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
                      >
                        {/* Video Thumbnail (Portrait 3:4 aspect ratio) */}
                        <div className="relative aspect-3/4 w-full overflow-hidden bg-black/5 dark:bg-black/40">
                          <video
                            ref={(el) => {
                              reviewVideoRefs.current[idx] = el;
                            }}
                            src={item.videoUrl}
                            poster={item.posterUrl}
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Video Badge */}
                          <span className="absolute top-4 left-4 text-[9px] font-bold text-white bg-black/75 px-3 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 border border-white/10 uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                            Video Review
                          </span>
                        </div>

                        {/* Rating stars & Name details below the video */}
                        <div className="w-full flex flex-col items-center mt-4 text-center px-5 pb-5">
                          {/* Stars */}
                          <div className="flex text-primary-container mb-3.5">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                              <span
                                key={i}
                                className="material-symbols-outlined !text-base"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                            ))}
                          </div>

                          {/* Quote */}
                          <p className="font-body-md text-xs text-on-surface-variant dark:text-secondary-container leading-relaxed italic mb-4 text-left">
                            &ldquo;{item.quote}&rdquo;
                          </p>

                          {/* Buyer Info */}
                          <div className="flex items-center gap-3 border-t border-secondary-container/10 pt-4 w-full justify-center">
                            <div className="w-8 h-8 rounded-full bg-surface-container dark:bg-zinc-800 border border-secondary-container/20 overflow-hidden flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-xs text-secondary dark:text-secondary-fixed">
                                person
                              </span>
                            </div>
                            <div className="text-left">
                              <p className="font-label-caps text-[11px] text-on-surface dark:text-surface font-bold tracking-wider flex items-center gap-1.5">
                                {item.name}
                                <span
                                  className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-xs font-bold"
                                  style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                  verified
                                </span>
                              </p>
                              <p className="font-body-md text-[9px] text-on-surface-variant dark:text-secondary-container">
                                Verified Buyer · {item.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center mt-6">
                {/* Dots indicators */}
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setReviewCarouselIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className="w-11 h-11 flex items-center justify-center cursor-pointer"
                    >
                      <span className={`rounded-full transition-all duration-300 block ${
                        i === reviewCarouselIndex
                          ? "w-6 h-2 bg-primary-container"
                          : "w-2 h-2 bg-secondary-container/40 hover:bg-secondary-container/70"
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Ratings Section */}
        <section
          id="detailed-ratings"
          className="bg-surface-container-low/40 dark:bg-zinc-900/10 border-b border-secondary-container/10 transition-colors duration-300"
        >
          <div className="max-w-max-width mx-auto px-section-padding-h py-16 md:py-24">
            {/* Title */}
            <div className="ratings-overview-title text-center mb-12 md:mb-16">
              <p className="font-button text-[11px] tracking-[0.2em] text-primary-container mb-2 uppercase">
                Detailed Feedback
              </p>
              <h2 className="font-serif text-2xl md:text-[36px] leading-tight text-on-surface dark:text-surface mb-4">
                Customer Satisfaction Breakdown
              </h2>
              <div className="w-12 h-px bg-primary-container mx-auto"></div>
            </div>

            {/* Overview Card */}
            <div className="ratings-overview-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white dark:bg-zinc-900/40 p-6 md:p-12 rounded-3xl border border-secondary-container/20 dark:border-zinc-800/80 shadow-xs">
              
              {/* Column 1: Overall Summary */}
              <div className="lg:col-span-4 flex flex-col items-center text-center lg:border-r lg:border-secondary-container/10 lg:pr-12">
                <div className="text-6xl md:text-7xl font-serif font-bold text-on-surface dark:text-surface leading-none mb-3">
                  4.8
                </div>
                
                {/* 5 Stars */}
                <div className="flex text-primary-container mb-3">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined !text-2xl md:!text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                
                <p className="font-body-md text-sm text-on-surface-variant dark:text-secondary-container mb-6">
                  Based on <span className="font-bold text-on-surface dark:text-surface">1,280+ verified reviews</span>
                </p>

                {/* Recommendation Pill */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full border border-emerald-500/20 text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="material-symbols-outlined text-sm font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  98% Recommendation Rate
                </div>

                {/* Trust Seal */}
                <div className="flex items-center gap-2 text-[10px] text-on-surface-variant/75 dark:text-secondary-container/70 uppercase tracking-widest font-semibold">
                  <span className="material-symbols-outlined text-sm text-primary-container">
                    verified_user
                  </span>
                  100% Verified Buyer Responses
                </div>
              </div>

              {/* Column 2: Star Distribution Progress Bars */}
              <div className="lg:col-span-4 flex flex-col justify-center gap-3.5 py-6 lg:py-0 lg:px-4 border-y border-secondary-container/10 lg:border-y-0">
                {[
                  { stars: 5, percentage: 89, count: 1139 },
                  { stars: 4, percentage: 8, count: 102 },
                  { stars: 3, percentage: 2, count: 26 },
                  { stars: 2, percentage: 1, count: 13 },
                  { stars: 1, percentage: 0, count: 0 },
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 w-full">
                    {/* Stars Label */}
                    <div className="flex items-center gap-1 w-14 justify-end shrink-0">
                      <span className="font-body-md text-xs font-bold text-on-surface dark:text-surface">
                        {row.stars}
                      </span>
                      <span
                        className="material-symbols-outlined !text-sm text-primary-container"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="flex-1 h-2.5 bg-secondary-container/20 dark:bg-zinc-800/80 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-primary-container rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${row.percentage}%` }}
                      ></div>
                    </div>

                    {/* Percentage */}
                    <div className="w-10 text-left shrink-0">
                      <span className="font-body-md text-xs text-on-surface-variant dark:text-secondary-container">
                        {row.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 3: Feature Breakdown */}
              <div className="lg:col-span-4 flex flex-col gap-5 lg:pl-12">
                <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface uppercase tracking-wider mb-2 text-center lg:text-left">
                  Key Benefit Ratings
                </h4>

                {[
                  {
                    name: "Snoring Reduction",
                    rating: "4.9",
                    desc: "Silences heavy snoring & throat vibrations",
                    icon: "nights_stay",
                  },
                  {
                    name: "Sleep Quality",
                    rating: "4.8",
                    desc: "Deeper, uninterrupted sleep cycles",
                    icon: "bedtime",
                  },
                  {
                    name: "Morning Energy",
                    rating: "4.8",
                    desc: "Wake up fully rested and oxygenated",
                    icon: "wb_sunny",
                  },
                  {
                    name: "Ease of Use",
                    rating: "4.9",
                    desc: "6 drops in the navel before bed",
                    icon: "spa",
                  },
                ].map((metric, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-primary-container/10 dark:bg-primary-container/5 text-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-lg">
                        {metric.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-0.5">
                        <h5 className="font-serif text-xs font-bold text-on-surface dark:text-surface truncate pr-2">
                          {metric.name}
                        </h5>
                        <span className="font-body-md text-xs font-bold text-primary-container shrink-0">
                          {metric.rating} / 5
                        </span>
                      </div>
                      <p className="font-body-md text-[10px] text-on-surface-variant dark:text-secondary-container leading-normal">
                        {metric.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="dark:bg-zinc-900/20 border-b border-secondary-container/10 transition-colors duration-300">
          <div className="max-w-[800px] mx-auto px-section-padding-h py-16 md:py-section-padding-v">
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
          <div className="max-w-max-width mx-auto px-4 md:px-section-padding-h py-10 md:py-section-padding-v">
            <div className="rec-title text-center mb-6 md:mb-stack-lg">
              <h2 className="font-headline-sm text-xl md:text-headline-sm text-on-surface dark:text-surface mb-3">
                COMPLETE YOUR RITUAL
              </h2>
              <div className="w-12 h-px bg-primary-container mx-auto"></div>
            </div>

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

              return (
                <>
                  {/* Desktop: 3-column grid (hidden on mobile) */}
                  <div className="hidden md:grid md:grid-cols-3 gap-stack-md">
                    {ritualProducts.map((p) => (
                      <ProductCard key={p.id} p={p} onAddToCart={handleAddToCart} />
                    ))}
                  </div>

                  {/* Mobile: 2-column grid (first 2 products only, hidden on md+) */}
                  <div className="block md:hidden w-full">
                    <div
                      className="gap-3 mb-4"
                      style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                    >
                      {ritualProducts.slice(0, 2).map((p) => (
                        <div
                          key={p.id}
                          className="bg-surface dark:bg-zinc-900/30 border border-secondary-container/20 dark:border-zinc-800 rounded-2xl p-3 flex flex-col items-center text-center hover:border-primary-container/40 transition-all"
                        >
                          {/* Product image */}
                          <div className="w-full aspect-[3/4] bg-surface-container-low dark:bg-zinc-800/30 mb-3 flex items-center justify-center p-2 rounded-xl overflow-hidden">
                            <Image
                              className="max-w-full max-h-full object-contain"
                              alt={p.alt}
                              src={p.image}
                              width={120}
                              height={160}
                            />
                          </div>
                          {/* Name */}
                          <p className="font-button text-[10px] uppercase tracking-wider text-on-surface dark:text-surface font-bold leading-tight mb-1 line-clamp-2">
                            {p.name}
                          </p>
                          {/* Price */}
                          <p className="font-sans text-xs font-black text-brand-button mb-3">
                            {p.displayPrice}
                          </p>
                          {/* ADD button */}
                          <button
                            onClick={() => handleAddToCart(p.id, p.name, p.price, p.imageSrc, p.qty)}
                            className="w-full border border-on-surface dark:border-surface text-on-surface dark:text-surface py-1.5 text-[9px] font-black tracking-wider uppercase rounded-md hover:bg-on-surface hover:text-surface dark:hover:bg-surface dark:hover:text-on-surface transition-colors cursor-pointer mt-auto"
                          >
                            ADD
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Explore All Products CTA */}
                    <button className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full border border-primary-container/60 text-primary-container font-button text-xs uppercase tracking-widest font-extrabold hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 cursor-pointer group">
                      <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-0.5">
                        grid_view
                      </span>
                      Explore All Products
                      <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </section>

        {/* Media & Available On Section */}
        <section className="dark:bg-zinc-900/10 border-t border-b border-secondary-container/10 py-16 transition-colors duration-300">
          <div className="max-w-max-width mx-auto px-section-padding-h flex flex-col gap-16">
            {/* In Media */}
            <div className="flex flex-col items-center">
              <h2 className="font-headline-sm text-sm md:text-headline-sm text-on-surface dark:text-surface font-semibold mb-8 text-center uppercase tracking-widest">
                IN MEDIA
              </h2>
              
              {/* Desktop layout: static flex-wrap */}
              <div className="hidden md:flex flex-wrap justify-center items-center gap-10 md:gap-16 w-full max-w-4xl px-4">
                {mediaLogosList.map((logo) => (
                  <React.Fragment key={logo.id}>{logo.element}</React.Fragment>
                ))}
              </div>

              {/* Mobile layout: constantly moving horizontal scrolling marquee */}
              <div className="w-full md:hidden overflow-hidden relative mask-marquee py-2">
                <div className="flex w-max animate-marquee">
                  <div className="flex items-center shrink-0">
                    {mediaLogosList.map((logo) => (
                      <div key={`${logo.id}-m1`} className="px-6">
                        {logo.element}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center shrink-0">
                    {mediaLogosList.map((logo) => (
                      <div key={`${logo.id}-m2`} className="px-6">
                        {logo.element}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Also available on */}
            <div className="flex flex-col items-center">
              <h2 className="font-headline-sm text-sm md:text-headline-sm text-on-surface dark:text-surface font-semibold mb-8 text-center uppercase tracking-widest">
                ALSO AVAILABLE ON
              </h2>

              {/* Desktop layout: static flex-wrap */}
              <div className="hidden md:flex flex-wrap justify-center items-center gap-10 md:gap-16 w-full max-w-4xl px-4">
                {retailLogosList.map((logo) => (
                  <React.Fragment key={logo.id}>{logo.element}</React.Fragment>
                ))}
              </div>

              {/* Mobile layout: constantly moving horizontal scrolling marquee */}
              <div className="w-full md:hidden overflow-hidden relative mask-marquee py-2">
                <div className="flex w-max animate-marquee">
                  <div className="flex items-center shrink-0">
                    {retailLogosList.map((logo) => (
                      <div key={`${logo.id}-m1`} className="px-6">
                        {logo.element}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center shrink-0">
                    {retailLogosList.map((logo) => (
                      <div key={`${logo.id}-m2`} className="px-6">
                        {logo.element}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-on-surface dark:bg-zinc-950 text-primary-container w-full transition-colors duration-300">
        <div className="flex flex-col items-center py-12 md:py-section-padding-v px-section-padding-h max-w-max-width mx-auto gap-stack-lg">
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
            © 2026 VED SANJEEVANI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* Slide-over Cart Drawer */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${isCartOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isCartOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Dark Backdrop */}
          <div
            onClick={() => setIsCartOpen(false)}
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${isCartOpen ? "opacity-100" : "opacity-0"}`}
          ></div>

          {/* Panel */}
          <div className="absolute inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
            <div
              className={`w-screen max-w-md pointer-events-auto will-change-transform transition-transform duration-500 ease-out ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
            >
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
                    <div className="flex flex-col gap-1.5 mb-4">
                      <div className="flex items-center gap-2 text-[11px] text-on-surface-variant dark:text-secondary-container">
                        <span className="material-symbols-outlined text-sm text-green-500">check_circle</span>
                        <span>Free shipping included</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-on-surface-variant dark:text-secondary-container">
                        <span className="material-symbols-outlined text-sm text-primary-container">verified_user</span>
                        <span>30-night money-back guarantee</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-on-surface-variant dark:text-secondary-container">
                        <span className="material-symbols-outlined text-sm text-blue-500">local_shipping</span>
                        <span>Estimated delivery: 3–5 business days</span>
                      </div>
                    </div>
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

      {/* Video Modal Overlay */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setActiveVideoUrl(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl z-10 border border-zinc-800">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoUrl(null)}
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
                className="w-full h-full object-contain"
                src={activeVideoUrl}
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

      {/* Sticky Bottom Buy Bar */}
      <div
        style={{
          paddingTop: "12px",
          paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
        }}
        className={`fixed bottom-0 left-0 right-0 z-40 bg-surface/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-secondary-container/30 dark:border-zinc-800/50 px-4 shadow-[0_-8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_-8px_30px_rgb(0,0,0,0.35)] transition-all duration-500 ease-in-out transform ${
          showStickyBuy
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Left Side: Product Thumbnail, Title, and Choice (Shown on desktop) */}
          <div className="flex items-center gap-3 shrink-0 hidden md:flex">
            <div className="w-10 h-10 rounded-md bg-surface-container-low dark:bg-zinc-800 border border-secondary-container/20 overflow-hidden shrink-0 relative">
              <Image
                src={snoreOffNabhiOil}
                alt="Snore Off Nabhi Oil thumbnail"
                fill
                sizes="40px"
                className="object-cover scale-150"
              />
            </div>
            <div>
              <p className="font-serif text-sm font-semibold text-on-surface dark:text-surface leading-tight">
                Snore Off Nabhi Oil
                <span className="ml-2 font-sans text-sm text-primary-container">₹{wellnessPack === "buy1" ? "549" : "998"}</span>
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-sans text-[10px] text-green-500 font-bold">
                  {wellnessPack === "buy2" ? "Save ₹100 + Free Dropper Kit" : "Free Shipping"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Button Group (Half width on mobile, w-96 on desktop) */}
          <div className="flex-1 md:flex-none flex items-center gap-3 w-full md:w-96">
            {/* Add to Cart button (on the left) */}
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
              }}
              className="bg-surface-container-high hover:bg-surface-container-highest dark:bg-zinc-800 dark:hover:bg-zinc-700 text-on-surface dark:text-surface font-button font-bold px-4 h-11 flex-1 flex items-center justify-center gap-1.5 cursor-pointer transition-colors duration-300 text-xs uppercase tracking-wider rounded-md border border-secondary-container/30 dark:border-zinc-700/50"
            >
              <span className="material-symbols-outlined text-sm sm:text-base">
                shopping_bag
              </span>
              <span>ADD TO CART</span>
            </button>

            {/* Buy Now button (on the right) */}
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
              className="bg-primary-container hover:bg-primary-container/90 text-black font-button font-extrabold px-4 h-11 flex-1 flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:shadow-lg transition-colors duration-300 text-xs uppercase tracking-wider border border-primary-container/20 rounded-md"
            >
              <span>BUY NOW</span>
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999?text=Hi%2C%20I%20have%20a%20question%20about%20Snore%20Off%20Nabhi%20Oil"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed left-4 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20b958] text-white shadow-lg transition-all duration-500 ease-in-out cursor-pointer rounded-full px-4 py-2.5 ${showStickyBuy ? "bottom-20 sm:bottom-16 opacity-100 pointer-events-auto" : "bottom-6 opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto"}`}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-[11px] font-bold tracking-wide">Chat with us</span>
      </a>

      {/* Custom Toast Notification */}
      {toastMessage && (
        <div className={`fixed ${showStickyBuy ? "bottom-24 sm:bottom-20" : "bottom-6"} right-6 z-50 bg-on-surface dark:bg-surface text-surface dark:text-on-surface px-6 py-4 shadow-xl flex items-center gap-4 rounded-lg border border-primary-container/20 max-w-sm animate-slideInUp`}>
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
