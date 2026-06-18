"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

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
  // Theme state
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Cart state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "aura-elixir",
      name: "AURA PERFORMANCE ELIXIR",
      price: 129.0,
      quantity: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs4xrIPXY6f4gDTl6uPHulepjCYJFpq8eaUZAqc1sSAxYappBNyv5btTy9ObTCtMjr2XKOUtcUtMXhTW1N2q-i6hTqaXLqXBddtDEAomVkAkeSTX41HwfaUSo8EJ0gjYp4ioAQoO8xhxcJgbClgZbOaW5QP9MHMKeNVc3QdAe6aKZCDB_M6O2xCm9NmQXVkWjUmQotaryANPZVkpDj4vT-2jalhVRUsHpVZcWBb-860RviIVRd3LqL3A94uqPpZ-__ttVfHBzFJhE",
      size: "30-DAY SUPPLY",
    },
    {
      id: "aura-night",
      name: "AURA NIGHT REST",
      price: 89.0,
      quantity: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjuhvqe-MCuxoeEs8HH-d-v5w92vuw0Un6-WMDRxYpi9HEPd6ivTAhJSrMmPqKimE095sATDGDeVTrP0J3hGgpCxK2eDNUTBh4bzkON-9EPISjLAzz7ULhYgm-JLqTq_PKohww9CCIpHX95jSYDPvaHRBmBJkn46QoGKtLtOtfkZDFJeoCAEbjLUo9EsioeRZEUj4bclxsUDUsNuJWaweB7mTO0mfKg0opKWsRdZeYLLIGX2-vzj45vsUtzGNjhmZSrFK0UGfKSU8",
      size: "30-DAY SUPPLY",
    },
  ]);

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

  // Product images mapping
  const productImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCs4xrIPXY6f4gDTl6uPHulepjCYJFpq8eaUZAqc1sSAxYappBNyv5btTy9ObTCtMjr2XKOUtcUtMXhTW1N2q-i6hTqaXLqXBddtDEAomVkAkeSTX41HwfaUSo8EJ0gjYp4ioAQoO8xhxcJgbClgZbOaW5QP9MHMKeNVc3QdAe6aKZCDB_M6O2xCm9NmQXVkWjUmQotaryANPZVkpDj4vT-2jalhVRUsHpVZcWBb-860RviIVRd3LqL3A94uqPpZ-__ttVfHBzFJhE", // Main Bottle
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA-uTc37LRm96UPArpWKD79LAfG7K58N71rfZGy2EFMYhIdu6-drJNl62YGF7eiBTv1fAC3gcqD26yegF7btyA9vDj0_PNbXgELwXauvuZYRroF7_dgyMpjHnmClNXNCLTj0N5nQn7ojmiaYS_rFxG8pP_YVrDiHDusRR817H3OEEUdGxRfofqee_TfI0gYvGp8PBMHYIOo_urUl-AVPIkhCzu2kNwsuuPYcKOSFmaSpFnwVfruyWoeDvfblupKlL5n5GHJvfq3MQU", // Close Up Text
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB0MMiTSDp0iTXhcDnxPJM8TpIP6xx8wavJ2Q_mB-ug6l6yd1n8gdV9RQEU8_hlvzISckzE_vo_hpWr5hPzmEj67kxEi2xubALRULXh5z9gSRLfne3DQgWjM8mEafhPPShBU_A115e84Zz69Xv3HQtlwgqFdY-zeEH6k6RwqJL1lYkyOzesQwIWfkecNYV3iQttp_pJ1UhRexPcNfw9NUjJB7QcCQQZGcmOPMmxkgvaevk9W3KwMCk6_1wkqf2cAlc9EOJJR98aoRk", // Dropper Drop
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCjuhvqe-MCuxoeEs8HH-d-v5w92vuw0Un6-WMDRxYpi9HEPd6ivTAhJSrMmPqKimE095sATDGDeVTrP0J3hGgpCxK2eDNUTBh4bzkON-9EPISjLAzz7ULhYgm-JLqTq_PKohww9CCIpHX95jSYDPvaHRBmBJkn46QoGKtLtOtfkZDFJeoCAEbjLUo9EsioeRZEUj4bclxsUDUsNuJWaweB7mTO0mfKg0opKWsRdZeYLLIGX2-vzj45vsUtzGNjhmZSrFK0UGfKSU8", // Lifestyle tray
  ];

  // Initialize theme from document class
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  // Sync theme to DOM
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  // Toast helper
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Cart logic
  const handleAddToCart = (id: string, name: string, price: number, image: string, size = "30-DAY SUPPLY") => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
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
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // FAQ items list
  const faqItems = [
    {
      question: "When will I feel the effects?",
      answer: "Most users report feeling heightened cognitive clarity and sustained energy within 15-30 minutes of sublingual administration. Peak effects are typically reached at the 45-minute mark.",
    },
    {
      question: "Is it vegan and cruelty-free?",
      answer: "Yes. The Aura Performance Elixir is 100% plant-based, vegan, and rigorously tested without the use of animal models.",
    },
    {
      question: "What are the shipping times?",
      answer: "Domestic orders typically arrive within 2-4 business days. International shipping takes 7-14 business days depending on customs processing in your region.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md select-none">
      {/* TopNavBar */}
      <header className="bg-surface/90 dark:bg-on-surface/90 backdrop-blur-md text-primary dark:text-primary-container fixed top-0 w-full border-b border-secondary-container/10 z-40 transition-colors duration-300">
        <div className="flex justify-between items-center h-20 px-section-padding-h max-w-max-width mx-auto relative">
          
          {/* Navigation Links (Left) */}
          <nav className="hidden md:flex gap-gutter items-center">
            <a className="font-button text-button uppercase tracking-[0.1em] text-primary border-b-2 border-primary pb-1" href="#shop">
              SHOP
            </a>
            <a className="font-button text-button uppercase tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors duration-300" href="#science">
              SCIENCE
            </a>
            <a className="font-button text-button uppercase tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors duration-300" href="#ritual">
              RITUAL
            </a>
            <a className="font-button text-button uppercase tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors duration-300" href="#reviews">
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
            <a className="font-display-lg text-headline-sm tracking-tighter text-on-surface dark:text-surface hover:opacity-80 transition-opacity" href="#">
              AURA
            </a>
          </div>

          {/* Trailing Icons (Right) */}
          <div className="flex gap-stack-md items-center">
            {/* Dark Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="text-on-surface dark:text-surface hover:text-primary dark:hover:text-primary-container transition-colors p-2 rounded-full cursor-pointer"
              title="Toggle color theme"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined text-xl">
                {theme === "light" ? "dark_mode" : "light_mode"}
              </span>
            </button>

            {/* Search Toggle */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-on-surface dark:text-surface hover:text-primary dark:hover:text-primary-container transition-all duration-300 scale-95 active:opacity-80 p-2 cursor-pointer"
              aria-label="Open search modal"
            >
              <span className="material-symbols-outlined text-xl">search</span>
            </button>

            {/* Shopping Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-on-surface dark:text-surface hover:text-primary dark:hover:text-primary-container transition-all duration-300 scale-95 active:opacity-80 relative p-2 cursor-pointer"
              aria-label="Open shopping cart"
            >
              <span className="material-symbols-outlined text-xl">shopping_bag</span>
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
              <span className="font-display-lg text-headline-sm tracking-tighter text-on-surface dark:text-surface">AURA</span>
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
            
            <div className="mt-auto pt-6 border-t border-secondary-container/10">
              <button 
                onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                className="flex items-center gap-3 text-on-surface dark:text-surface font-button text-sm uppercase tracking-wider w-full py-3"
              >
                <span className="material-symbols-outlined">
                  {theme === "light" ? "dark_mode" : "light_mode"}
                </span>
                {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main className="pt-20">
        
        {/* Product Hero Section */}
        <section id="shop" className="max-w-max-width mx-auto px-section-padding-h py-stack-lg md:py-section-padding-v grid grid-cols-1 md:grid-cols-12 gap-gutter md:gap-16">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-7 flex flex-col gap-stack-sm">
            {/* Main Hero Image */}
            <div className="w-full aspect-[4/5] bg-surface-container-low dark:bg-zinc-800/40 relative overflow-hidden group border border-secondary-container/10">
              <img 
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                alt="A hyper-realistic premium photograph of the sleek charcoal black glass bottle of Aura Performance Elixir"
                src={productImages[activeImageIndex]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-stack-sm">
              {productImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-square bg-surface-container-low dark:bg-zinc-800/40 cursor-pointer overflow-hidden border transition-all duration-300 ${
                    activeImageIndex === idx 
                      ? "border-primary-container scale-95 shadow-md" 
                      : "border-secondary-container/10 hover:opacity-100 opacity-70"
                  }`}
                  aria-label={`View product image ${idx + 1}`}
                >
                  <img className="w-full h-full object-cover" alt={`Thumbnail ${idx + 1}`} src={imgUrl} />
                </button>
              ))}
              
              {/* Thumbnail 4: Video trigger */}
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="aspect-square bg-surface-container-low dark:bg-zinc-800/40 flex flex-col items-center justify-center cursor-pointer border border-secondary-container/10 hover:bg-surface-container-high dark:hover:bg-zinc-700/40 hover:opacity-100 opacity-80 transition-all text-on-surface-variant dark:text-surface-variant gap-1"
                aria-label="Play product video"
              >
                <span className="material-symbols-outlined text-3xl text-primary-container animate-pulse">play_circle</span>
                <span className="font-label-caps text-[9px] uppercase tracking-wider">PLAY RITUAL</span>
              </button>
            </div>
          </div>

          {/* Right Column: Product Information */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <nav className="flex gap-2 text-on-surface-variant dark:text-secondary-container font-label-caps text-label-caps mb-stack-md">
              <a className="hover:text-on-surface dark:hover:text-surface transition-colors" href="#">HOME</a>
              <span>/</span>
              <a className="hover:text-on-surface dark:hover:text-surface transition-colors" href="#shop">SHOP</a>
              <span>/</span>
              <span className="text-on-surface dark:text-surface">ELIXIR</span>
            </nav>
            
            <h1 className="font-headline-md text-headline-md text-on-surface dark:text-surface mb-4 tracking-tight leading-tight">
              AURA PERFORMANCE ELIXIR
            </h1>
            
            <div className="flex items-center gap-4 mb-stack-md">
              <div className="flex text-primary-container">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <a className="font-button text-button text-on-surface dark:text-surface underline underline-offset-4 decoration-primary-container/30 hover:decoration-primary-container transition-colors" href="#reviews">
                128 REVIEWS
              </a>
            </div>
            
            <p className="font-body-lg text-body-lg text-on-surface dark:text-surface mb-stack-md font-semibold">
              $129.00 <span className="text-on-surface-variant dark:text-secondary-fixed-dim text-sm ml-2 font-normal">/ 30-DAY SUPPLY</span>
            </p>
            
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-container mb-stack-lg leading-relaxed">
              A meticulous blend engineered for absolute cognitive clarity and sustained physical optimization. Crafted with clinically proven adaptogens and neural-enhancing peptides, the Elixir is designed for those who demand peak performance without compromise. Experience sustained energy, laser focus, and accelerated recovery.
            </p>

            {/* Purchase Actions */}
            <div className="flex flex-col gap-4 mb-stack-lg">
              <button 
                onClick={() => handleAddToCart(
                  "aura-elixir",
                  "AURA PERFORMANCE ELIXIR",
                  129.00,
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCs4xrIPXY6f4gDTl6uPHulepjCYJFpq8eaUZAqc1sSAxYappBNyv5btTy9ObTCtMjr2XKOUtcUtMXhTW1N2q-i6hTqaXLqXBddtDEAomVkAkeSTX41HwfaUSo8EJ0gjYp4ioAQoO8xhxcJgbClgZbOaW5QP9MHMKeNVc3QdAe6aKZCDB_M6O2xCm9NmQXVkWjUmQotaryANPZVkpDj4vT-2jalhVRUsHpVZcWBb-860RviIVRd3LqL3A94uqPpZ-__ttVfHBzFJhE"
                )}
                className="w-full bg-on-surface dark:bg-surface text-surface dark:text-on-surface py-4 px-8 font-button text-button uppercase tracking-[0.1em] hover:bg-primary-container hover:text-on-primary-container dark:hover:bg-primary-container dark:hover:text-on-primary-container transition-all duration-300 flex justify-center items-center gap-2 cursor-pointer shadow-sm hover:shadow"
              >
                ADD TO CART
              </button>
              <button 
                onClick={() => {
                  handleAddToCart(
                    "aura-elixir",
                    "AURA PERFORMANCE ELIXIR",
                    129.00,
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCs4xrIPXY6f4gDTl6uPHulepjCYJFpq8eaUZAqc1sSAxYappBNyv5btTy9ObTCtMjr2XKOUtcUtMXhTW1N2q-i6hTqaXLqXBddtDEAomVkAkeSTX41HwfaUSo8EJ0gjYp4ioAQoO8xhxcJgbClgZbOaW5QP9MHMKeNVc3QdAe6aKZCDB_M6O2xCm9NmQXVkWjUmQotaryANPZVkpDj4vT-2jalhVRUsHpVZcWBb-860RviIVRd3LqL3A94uqPpZ-__ttVfHBzFJhE"
                  );
                  setIsCartOpen(true);
                }}
                className="w-full border border-on-surface dark:border-surface text-on-surface dark:text-surface py-4 px-8 font-button text-button uppercase tracking-[0.1em] hover:bg-on-surface hover:text-surface dark:hover:bg-surface dark:hover:text-on-surface transition-all duration-300 flex justify-center items-center gap-2 cursor-pointer"
              >
                BUY NOW
              </button>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4 border-t border-secondary-container/30 pt-stack-md">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container text-2xl">local_shipping</span>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface dark:text-surface mb-1">COMPLIMENTARY SHIPPING</h4>
                  <p className="font-body-md text-[13px] leading-tight text-on-surface-variant dark:text-secondary-container">On all domestic orders over $100.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-container text-2xl">verified</span>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface dark:text-surface mb-1">30-DAY GUARANTEE</h4>
                  <p className="font-body-md text-[13px] leading-tight text-on-surface-variant dark:text-secondary-container">Risk-free trial for a full cycle.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Bento Grid */}
        <section id="science" className="bg-surface dark:bg-on-surface/50 border-y border-secondary-container/10 transition-colors duration-300">
          <div className="max-w-max-width mx-auto px-section-padding-h py-section-padding-v">
            
            <div className="text-center mb-stack-lg">
              <h2 className="font-headline-sm text-headline-sm text-on-surface dark:text-surface mb-4">THE SCIENCE OF ELITE PERFORMANCE</h2>
              <div className="w-12 h-[1px] bg-primary-container mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
              
              {/* Benefits Card */}
              <div className="bg-surface-container dark:bg-zinc-800/20 p-10 border border-secondary-container/20 dark:border-zinc-850 flex flex-col justify-center h-full">
                <h3 className="font-button text-button text-on-surface dark:text-surface mb-6 border-b border-secondary-container/10 pb-4">CORE BENEFITS</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container mt-1">bolt</span>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-on-surface dark:text-surface mb-1">SUSTAINED NEURAL DRIVE</h4>
                      <p className="font-body-md text-[14px] text-on-surface-variant dark:text-secondary-container">Eliminates brain fog and provides clean, jitter-free focus for up to 8 hours.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container mt-1">vital_signs</span>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-on-surface dark:text-surface mb-1">ADAPTOGENIC STRESS RESPONSE</h4>
                      <p className="font-body-md text-[14px] text-on-surface-variant dark:text-secondary-container">Lowers cortisol levels and helps the body maintain homeostasis under extreme pressure.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container mt-1">autorenew</span>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-on-surface dark:text-surface mb-1">ACCELERATED RECOVERY</h4>
                      <p className="font-body-md text-[14px] text-on-surface-variant dark:text-secondary-container">Promotes cellular repair and reduces inflammation post-exertion.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Ingredients Card (Image Background) */}
              <div className="relative p-10 flex flex-col justify-end h-full min-h-[400px] border border-secondary-container/20 dark:border-zinc-850 overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCg0Olo7IqRn0iCTttfK3fJ7xwnGJYAaSlzq-3ebtCBvC3Wr_rQMPMloqOk6uFLPLIQ1Z2uUZlNpT0zvNpEE5ObE42n856EKs8snZq81tqxnLUhdlScubJ_RJ2AWOZNhhQdqhmasxqJxa2FiLjINKrHE0nIEGH5AwKi5sB8WbLh0VEYGE6R5NSWKCcLH-Vc_chSU6ULvYm32uKOLUS780McRQ4alT6SUZijcAnTl1c1mdhRNpKkZrgFpIawSmakt7e9FESbX9-zEiE')" }}
                ></div>
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/90 to-transparent dark:from-on-surface dark:via-on-surface/90"></div>
                
                <div className="relative z-10">
                  <h3 className="font-button text-button text-on-surface dark:text-surface mb-4">KEY INGREDIENTS</h3>
                  <p className="font-body-md text-[15px] text-on-surface-variant dark:text-secondary-container mb-6">A proprietary matrix of high-yield extracts, including dual-extracted Lion's Mane, Rhodiola Rosea, and bio-available Shilajit resin.</p>
                  <a className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface dark:text-surface border-b border-on-surface dark:border-surface pb-1 hover:text-primary-container dark:hover:text-primary-container hover:border-primary-container transition-colors" href="#formula">
                    VIEW FULL PROFILE <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Usage Card */}
              <div className="bg-surface-container dark:bg-zinc-800/20 p-10 border border-secondary-container/20 dark:border-zinc-850 flex flex-col justify-center h-full">
                <h3 className="font-button text-button text-on-surface dark:text-surface mb-6 border-b border-secondary-container/10 pb-4">OPTIMAL PROTOCOL</h3>
                <div className="flex flex-col gap-8 relative">
                  {/* Connecting line */}
                  <div className="absolute left-[11px] top-8 bottom-8 w-[1px] bg-secondary-container/50"></div>
                  
                  <div className="flex gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-surface dark:bg-zinc-900 border border-primary-container flex items-center justify-center font-label-caps text-[10px] text-primary-container flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-on-surface dark:text-surface mb-1">DOSAGE</h4>
                      <p className="font-body-md text-[14px] text-on-surface-variant dark:text-secondary-container">Take one full dropper (1ml) sublingually.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-surface dark:bg-zinc-900 border border-primary-container flex items-center justify-center font-label-caps text-[10px] text-primary-container flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-on-surface dark:text-surface mb-1">TIMING</h4>
                      <p className="font-body-md text-[14px] text-on-surface-variant dark:text-secondary-container">Consume first thing in the morning on an empty stomach for maximum absorption.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-surface dark:bg-zinc-900 border border-primary-container flex items-center justify-center font-label-caps text-[10px] text-primary-container flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-on-surface dark:text-surface mb-1">ACTIVATION</h4>
                      <p className="font-body-md text-[14px] text-on-surface-variant dark:text-secondary-container">Hold under tongue for 60 seconds before swallowing.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Ingredients Section */}
        <section id="formula" className="max-w-max-width mx-auto px-section-padding-h py-section-padding-v border-b border-secondary-container/10">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-sm text-headline-sm text-on-surface dark:text-surface mb-4">THE FORMULA</h2>
            <div className="w-12 h-[1px] bg-primary-container mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
            <div className="text-center group p-6 hover:bg-surface-container-low dark:hover:bg-zinc-800/10 rounded-xl transition-all duration-300">
              <h3 className="font-headline-sm text-[24px] text-primary-container mb-3 transition-transform group-hover:scale-105 duration-300">Alpha-GPC</h3>
              <p className="font-body-md text-on-surface-variant dark:text-secondary-container leading-relaxed">Highly bioavailable choline compound that crosses the blood-brain barrier to rapidly enhance focus and cognitive energy.</p>
            </div>
            <div className="text-center group p-6 hover:bg-surface-container-low dark:hover:bg-zinc-800/10 rounded-xl transition-all duration-300">
              <h3 className="font-headline-sm text-[24px] text-primary-container mb-3 transition-transform group-hover:scale-105 duration-300">Lion's Mane</h3>
              <p className="font-body-md text-on-surface-variant dark:text-secondary-container leading-relaxed">Dual-extracted mushroom rich in hericenones and erinacines to stimulate Nerve Growth Factor (NGF) production.</p>
            </div>
            <div className="text-center group p-6 hover:bg-surface-container-low dark:hover:bg-zinc-800/10 rounded-xl transition-all duration-300">
              <h3 className="font-headline-sm text-[24px] text-primary-container mb-3 transition-transform group-hover:scale-105 duration-300">L-Theanine</h3>
              <p className="font-body-md text-on-surface-variant dark:text-secondary-container leading-relaxed">An amino acid that promotes an alpha brainwave state, smoothing out stimulant effects for clean, relaxed alertness.</p>
            </div>
          </div>
        </section>

        {/* Usage Guide & Video Section */}
        <section id="ritual" className="bg-surface-container-low dark:bg-zinc-900/40 border-b border-secondary-container/10 transition-colors duration-300">
          <div className="max-w-max-width mx-auto px-section-padding-h py-section-padding-v grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
            
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface dark:text-surface mb-4">THE RITUAL</h2>
              <div className="w-12 h-[1px] bg-primary-container mb-8"></div>
              
              <div className="flex flex-col gap-8">
                <div className="flex gap-6">
                  <span className="font-display-lg text-[40px] text-primary-container/30 font-bold leading-none select-none">01</span>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-on-surface dark:text-surface mb-2">DOSAGE</h4>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container">Draw exactly 1ml (one full dropper) of the elixir.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <span className="font-display-lg text-[40px] text-primary-container/30 font-bold leading-none select-none">02</span>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-on-surface dark:text-surface mb-2">TIMING</h4>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container">Take first thing in the morning on an empty stomach.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <span className="font-display-lg text-[40px] text-primary-container/30 font-bold leading-none select-none">03</span>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-on-surface dark:text-surface mb-2">ACTIVATION</h4>
                    <p className="font-body-md text-on-surface-variant dark:text-secondary-container">Hold sublingually for 60-90 seconds before swallowing for maximum bioavailability.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Interactive Video Block */}
            <div 
              onClick={() => setIsVideoOpen(true)}
              className="aspect-[16/9] bg-surface-container dark:bg-zinc-800 border border-secondary-container/20 dark:border-zinc-700 relative group cursor-pointer overflow-hidden flex items-center justify-center shadow-lg hover:shadow-xl transition-all rounded-xl"
            >
              <img 
                alt="Video placeholder representing the dropper droplet shot" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0MMiTSDp0iTXhcDnxPJM8TpIP6xx8wavJ2Q_mB-ug6l6yd1n8gdV9RQEU8_hlvzISckzE_vo_hpWr5hPzmEj67kxEi2xubALRULXh5z9gSRLfne3DQgWjM8mEafhPPShBU_A115e84Zz69Xv3HQtlwgqFdY-zeEH6k6RwqJL1lYkyOzesQwIWfkecNYV3iQttp_pJ1UhRexPcNfw9NUjJB7QcCQQZGcmOPMmxkgvaevk9W3KwMCk6_1wkqf2cAlc9EOJJR98aoRk"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <div className="w-20 h-20 bg-surface/90 dark:bg-zinc-900/90 rounded-full flex items-center justify-center relative z-10 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all shadow-md transform group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl ml-2 text-on-surface dark:text-surface group-hover:text-on-primary-container">play_arrow</span>
              </div>
            </div>

          </div>
        </section>

        {/* Social Proof Section */}
        <section id="reviews" className="max-w-max-width mx-auto px-section-padding-h py-section-padding-v border-b border-secondary-container/10">
          
          {/* Trusted By Logos */}
          <div className="mb-section-padding-v">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant dark:text-secondary-container text-center tracking-widest mb-10">TRUSTED BY HIGH PERFORMERS AT</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-45 dark:opacity-75 grayscale contrast-125 dark:invert">
              <span className="font-display-lg text-[24px] font-bold tracking-tighter text-on-surface">EQUINOX</span>
              <span className="font-body-lg text-[20px] font-bold tracking-widest uppercase text-on-surface">Forbes</span>
              <span className="font-headline-sm text-[22px] italic text-on-surface">Wired</span>
              <span className="font-body-lg text-[20px] font-bold tracking-widest uppercase text-on-surface">FastCompany</span>
            </div>
          </div>
          
          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            
            <div className="p-8 border border-secondary-container/20 dark:border-zinc-800 bg-surface-container-lowest dark:bg-zinc-900/20 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex text-primary-container mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-headline-sm text-[20px] leading-relaxed text-on-surface dark:text-surface mb-6 font-semibold italic">
                "An absolute game-changer for my focus blocks. The clarity is immediate and there is zero crash. It has replaced my morning espresso entirely."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container dark:bg-zinc-800 border border-secondary-container/20 overflow-hidden flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed">person</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface dark:text-surface">MARCUS T.</p>
                  <p className="font-body-md text-[12px] text-on-surface-variant dark:text-secondary-container">Verified Buyer</p>
                </div>
              </div>
            </div>

            <div className="p-8 border border-secondary-container/20 dark:border-zinc-800 bg-surface-container-lowest dark:bg-zinc-900/20 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex text-primary-container mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-headline-sm text-[20px] leading-relaxed text-on-surface dark:text-surface mb-6 font-semibold italic">
                "As an endurance athlete, I'm highly skeptical of supplements. The Elixir delivers on its promises. Noticeable reduction in inflammation and faster recovery times between heavy sessions."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container dark:bg-zinc-800 border border-secondary-container/20 overflow-hidden flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed">person</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface dark:text-surface">ELENA R.</p>
                  <p className="font-body-md text-[12px] text-on-surface-variant dark:text-secondary-container">Verified Buyer</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-[800px] mx-auto px-section-padding-h py-section-padding-v border-b border-secondary-container/10">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-sm text-headline-sm text-on-surface dark:text-surface mb-4">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="w-12 h-[1px] bg-primary-container mx-auto"></div>
          </div>
          
          <div className="flex flex-col gap-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-surface dark:bg-zinc-900/20 border border-secondary-container/20 dark:border-zinc-800/80 p-6 rounded-lg transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="flex justify-between items-center w-full font-button text-button cursor-pointer text-on-surface dark:text-surface text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold uppercase tracking-wider">{item.question}</span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-container" : ""}`}>
                      expand_more
                    </span>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-secondary-container/10" : "grid-rows-[0fr] opacity-0"
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
        </section>

        {/* Often Bought Together / Recommendations */}
        <section className="max-w-max-width mx-auto px-section-padding-h py-section-padding-v">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-sm text-headline-sm text-on-surface dark:text-surface mb-4">COMPLETE YOUR RITUAL</h2>
            <div className="w-12 h-[1px] bg-primary-container mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
            
            {/* Product 1 */}
            <div className="group border border-secondary-container/20 dark:border-zinc-800 p-6 flex flex-col items-center text-center hover:border-primary-container/50 transition-all bg-surface dark:bg-zinc-900/10 rounded-xl">
              <div className="w-32 h-32 bg-surface-container-low dark:bg-zinc-800/30 mb-6 flex items-center justify-center p-4 rounded-lg overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                  alt="Aura Night Rest bottle product mockup"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjuhvqe-MCuxoeEs8HH-d-v5w92vuw0Un6-WMDRxYpi9HEPd6ivTAhJSrMmPqKimE095sATDGDeVTrP0J3hGgpCxK2eDNUTBh4bzkON-9EPISjLAzz7ULhYgm-JLqTq_PKohww9CCIpHX95jSYDPvaHRBmBJkn46QoGKtLtOtfkZDFJeoCAEbjLUo9EsioeRZEUj4bclxsUDUsNuJWaweB7mTO0mfKg0opKWsRdZeYLLIGX2-vzj45vsUtzGNjhmZSrFK0UGfKSU8"
                />
              </div>
              <h3 className="font-button text-button text-on-surface dark:text-surface mb-2 font-semibold">AURA NIGHT REST</h3>
              <p className="font-body-md text-[14px] text-on-surface-variant dark:text-secondary-container mb-4 font-semibold">$89.00</p>
              <button 
                onClick={() => handleAddToCart(
                  "aura-night",
                  "AURA NIGHT REST",
                  89.00,
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCjuhvqe-MCuxoeEs8HH-d-v5w92vuw0Un6-WMDRxYpi9HEPd6ivTAhJSrMmPqKimE095sATDGDeVTrP0J3hGgpCxK2eDNUTBh4bzkON-9EPISjLAzz7ULhYgm-JLqTq_PKohww9CCIpHX95jSYDPvaHRBmBJkn46QoGKtLtOtfkZDFJeoCAEbjLUo9EsioeRZEUj4bclxsUDUsNuJWaweB7mTO0mfKg0opKWsRdZeYLLIGX2-vzj45vsUtzGNjhmZSrFK0UGfKSU8"
                )}
                className="w-full border border-on-surface dark:border-surface text-on-surface dark:text-surface py-3 font-label-caps text-label-caps hover:bg-on-surface hover:text-surface dark:hover:bg-surface dark:hover:text-on-surface transition-colors mt-auto cursor-pointer"
              >
                ADD TO CART
              </button>
            </div>

            {/* Product 2 */}
            <div className="group border border-secondary-container/20 dark:border-zinc-800 p-6 flex flex-col items-center text-center hover:border-primary-container/50 transition-all bg-surface dark:bg-zinc-900/10 rounded-xl">
              <div className="w-32 h-32 bg-surface-container-low dark:bg-zinc-800/30 mb-6 flex items-center justify-center p-4 rounded-lg overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                  alt="Aura Daily Greens bottle product mockup"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs4xrIPXY6f4gDTl6uPHulepjCYJFpq8eaUZAqc1sSAxYappBNyv5btTy9ObTCtMjr2XKOUtcUtMXhTW1N2q-i6hTqaXLqXBddtDEAomVkAkeSTX41HwfaUSo8EJ0gjYp4ioAQoO8xhxcJgbClgZbOaW5QP9MHMKeNVc3QdAe6aKZCDB_M6O2xCm9NmQXVkWjUmQotaryANPZVkpDj4vT-2jalhVRUsHpVZcWBb-860RviIVRd3LqL3A94uqPpZ-__ttVfHBzFJhE"
                />
              </div>
              <h3 className="font-button text-button text-on-surface dark:text-surface mb-2 font-semibold">AURA DAILY GREENS</h3>
              <p className="font-body-md text-[14px] text-on-surface-variant dark:text-secondary-container mb-4 font-semibold">$75.00</p>
              <button 
                onClick={() => handleAddToCart(
                  "aura-greens",
                  "AURA DAILY GREENS",
                  75.00,
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCs4xrIPXY6f4gDTl6uPHulepjCYJFpq8eaUZAqc1sSAxYappBNyv5btTy9ObTCtMjr2XKOUtcUtMXhTW1N2q-i6hTqaXLqXBddtDEAomVkAkeSTX41HwfaUSo8EJ0gjYp4ioAQoO8xhxcJgbClgZbOaW5QP9MHMKeNVc3QdAe6aKZCDB_M6O2xCm9NmQXVkWjUmQotaryANPZVkpDj4vT-2jalhVRUsHpVZcWBb-860RviIVRd3LqL3A94uqPpZ-__ttVfHBzFJhE"
                )}
                className="w-full border border-on-surface dark:border-surface text-on-surface dark:text-surface py-3 font-label-caps text-label-caps hover:bg-on-surface hover:text-surface dark:hover:bg-surface dark:hover:text-on-surface transition-colors mt-auto cursor-pointer"
              >
                ADD TO CART
              </button>
            </div>

            {/* Product 3 */}
            <div className="group border border-secondary-container/20 dark:border-zinc-800 p-6 flex flex-col items-center text-center hover:border-primary-container/50 transition-all bg-surface dark:bg-zinc-900/10 rounded-xl">
              <div className="w-32 h-32 bg-surface-container-low dark:bg-zinc-800/30 mb-6 flex items-center justify-center p-4 rounded-lg overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                  alt="Aura travel flask mockup"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-uTc37LRm96UPArpWKD79LAfG7K58N71rfZGy2EFMYhIdu6-drJNl62YGF7eiBTv1fAC3gcqD26yegF7btyA9vDj0_PNbXgELwXauvuZYRroF7_dgyMpjHnmClNXNCLTj0N5nQn7ojmiaYS_rFxG8pP_YVrDiHDusRR817H3OEEUdGxRfofqee_TfI0gYvGp8PBMHYIOo_urUl-AVPIkhCzu2kNwsuuPYcKOSFmaSpFnwVfruyWoeDvfblupKlL5n5GHJvfq3MQU"
                />
              </div>
              <h3 className="font-button text-button text-on-surface dark:text-surface mb-2 font-semibold">TRAVEL FLASK</h3>
              <p className="font-body-md text-[14px] text-on-surface-variant dark:text-secondary-container mb-4 font-semibold">$45.00</p>
              <button 
                onClick={() => handleAddToCart(
                  "travel-flask",
                  "TRAVEL FLASK",
                  45.00,
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuA-uTc37LRm96UPArpWKD79LAfG7K58N71rfZGy2EFMYhIdu6-drJNl62YGF7eiBTv1fAC3gcqD26yegF7btyA9vDj0_PNbXgELwXauvuZYRroF7_dgyMpjHnmClNXNCLTj0N5nQn7ojmiaYS_rFxG8pP_YVrDiHDusRR817H3OEEUdGxRfofqee_TfI0gYvGp8PBMHYIOo_urUl-AVPIkhCzu2kNwsuuPYcKOSFmaSpFnwVfruyWoeDvfblupKlL5n5GHJvfq3MQU"
                )}
                className="w-full border border-on-surface dark:border-surface text-on-surface dark:text-surface py-3 font-label-caps text-label-caps hover:bg-on-surface hover:text-surface dark:hover:bg-surface dark:hover:text-on-surface transition-colors mt-auto cursor-pointer"
              >
                ADD TO CART
              </button>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-on-surface dark:bg-zinc-950 text-primary-container w-full transition-colors duration-300">
        <div className="flex flex-col items-center py-section-padding-v px-section-padding-h max-w-max-width mx-auto gap-stack-lg">
          <a className="font-display-lg text-headline-md text-surface dark:text-surface tracking-tighter opacity-90 hover:opacity-100 transition-opacity" href="#">
            AURA
          </a>
          <nav className="flex flex-wrap justify-center gap-gutter">
            <a className="font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors opacity-80 hover:opacity-100" href="#">PRIVACY</a>
            <a className="font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors opacity-80 hover:opacity-100" href="#">TERMS</a>
            <a className="font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors opacity-80 hover:opacity-100" href="#">SHIPPING</a>
            <a className="font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors opacity-80 hover:opacity-100" href="#">CONTACT</a>
          </nav>
          <div className="w-full h-[1px] bg-secondary-fixed-dim/10 mt-stack-sm mb-stack-sm"></div>
          <p className="font-body-md text-body-md text-secondary-fixed-dim text-sm text-center opacity-70">
            © 2024 AURA PERFORMANCE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* Slide-over Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
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
                      <span className="material-symbols-outlined">shopping_bag</span>
                      SHOPPING BAG ({cartTotalItems})
                    </h2>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="text-on-surface dark:text-surface hover:text-primary p-2 cursor-pointer transition-colors"
                      aria-label="Close cart"
                    >
                      <span className="material-symbols-outlined text-2xl">close</span>
                    </button>
                  </div>

                  {/* Item List */}
                  <div className="flex-1 overflow-y-auto py-6 px-6 hide-scrollbar">
                    {cart.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                        <span className="material-symbols-outlined text-6xl text-secondary-container">shopping_bag</span>
                        <p className="font-button text-sm uppercase tracking-widest text-on-surface-variant dark:text-secondary-fixed-dim">Your bag is empty</p>
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
                          <div key={item.id} className="flex gap-4 pb-6 border-b border-secondary-container/10">
                            <div className="w-20 h-24 bg-surface-container-low dark:bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0 border border-secondary-container/10">
                              <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
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
                                    <span className="material-symbols-outlined text-sm">delete</span>
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
                                    onClick={() => handleUpdateQuantity(item.id, -1)}
                                    className="px-2 py-1 text-on-surface dark:text-surface hover:bg-secondary-container/20 cursor-pointer"
                                    aria-label="Decrease quantity"
                                  >
                                    <span className="material-symbols-outlined text-xs select-none">remove</span>
                                  </button>
                                  <span className="px-3 font-button text-xs text-on-surface dark:text-surface font-bold select-none">{item.quantity}</span>
                                  <button 
                                    onClick={() => handleUpdateQuantity(item.id, 1)}
                                    className="px-2 py-1 text-on-surface dark:text-surface hover:bg-secondary-container/20 cursor-pointer"
                                    aria-label="Increase quantity"
                                  >
                                    <span className="material-symbols-outlined text-xs select-none">add</span>
                                  </button>
                                </div>
                                
                                <span className="font-button text-sm font-semibold text-on-surface dark:text-surface">
                                  ${(item.price * item.quantity).toFixed(2)}
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
                        <span className="font-label-caps tracking-wider">SUBTOTAL</span>
                        <span className="font-button">${cartSubtotal.toFixed(2)}</span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant dark:text-secondary-container mb-6 leading-tight">
                        Shipping and taxes calculated at checkout. Complimentary domestic shipping applied.
                      </p>
                      <button 
                        onClick={() => {
                          showToast("Checkout simulation initiated. Connecting to secure gateway...");
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
              <span className="material-symbols-outlined text-secondary text-2xl">search</span>
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
                {["Lion's Mane", "Alpha-GPC", "Clinical trials", "Night Rest", "Shipping policy"].map((term) => (
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
          <span className="material-symbols-outlined text-primary-container">check_circle</span>
          <div className="flex-1">
            <p className="font-button text-xs uppercase tracking-wide font-bold">{toastMessage}</p>
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
