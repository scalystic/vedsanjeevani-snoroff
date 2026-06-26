"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Import modular components
import Header from "@/components/v2/Header";
import Hero from "@/components/v2/Hero";
import SymptomGrid from "@/components/v2/SymptomGrid";
import Certifications from "@/components/v2/Certifications";
import InfoSection from "@/components/v2/InfoSection";
import RitualStepper from "@/components/v2/RitualStepper";
import VideoShowcase from "@/components/v2/VideoShowcase";
import FormulaCarousel from "@/components/v2/FormulaCarousel";
import ProductSlider from "@/components/v2/ProductSlider";
import ReviewsSection from "@/components/v2/ReviewsSection";
import VideoReviews from "@/components/v2/VideoReviews";
import FaqSection from "@/components/v2/FaqSection";
import MediaAndRetail from "@/components/v2/MediaAndRetail";

// Import assets
import headerLogo from "../../public/header-llogo.avif";
import snoreOffNabhiOil from "../../public/snore-off-nabhi-oil.png";

// Interface definitions
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
}

export default function RedesignedProductPage() {
  // Option state synchronized between Hero and Sticky Buy Bar
  const [selectedFormat, setSelectedFormat] = useState<"starter" | "monthly">("starter");

  // Global UI states
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyBuy, setShowStickyBuy] = useState(false);

  // Monitor scroll height to trigger sticky bottom console
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("shop");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // Show sticky bar once user scrolls past the top section
        setShowStickyBuy(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in sections dynamically as the user scrolls
      const sections = [
        "#shop",
        "#science",
        "#ritual",
        "#reviews",
        "#faq",
      ];

      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: sec,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  // Cart operations
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleAddToCart = (
    id: string,
    name: string,
    price: number,
    image: string,
    size: string
  ) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id, name, price, quantity: 1, image, size }];
    });
    showToast(`${name} added to your cart.`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Constants for current active selection in sticky bottom console
  const currentPrice = selectedFormat === "starter" ? 549 : 998;
  const productId = selectedFormat === "starter" ? "snore-off-30ml" : "snore-off-60ml";
  const productName = selectedFormat === "starter" ? "Snore Off Nabhi Oil (30ml Starter)" : "Snore Off Nabhi Oil (60ml Monthly Pack)";
  const productSize = selectedFormat === "starter" ? "30ml Starter Kit" : "60ml Monthly Bottle";

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md select-none overflow-x-hidden">
      {/* Navigation Header */}
      <Header
        cartTotalItems={cartTotalItems}
        onCartToggle={() => setIsCartOpen(true)}
        onSearchToggle={() => setIsSearchOpen(true)}
        onMobileMenuToggle={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 flex md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`relative flex flex-col w-4/5 max-w-sm h-full bg-white dark:bg-zinc-950 p-6 shadow-2xl z-10 transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <Image src={headerLogo} alt="Logo" className="h-10 w-auto object-contain rounded-md" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface dark:text-surface p-2">
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-base uppercase tracking-wider text-on-surface dark:text-surface border-b border-secondary-container/10 pb-2 font-bold"
              href="#shop"
            >
              SHOP
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-base uppercase tracking-wider text-on-surface dark:text-surface border-b border-secondary-container/10 pb-2 font-bold"
              href="#science"
            >
              SCIENCE
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-base uppercase tracking-wider text-on-surface dark:text-surface border-b border-secondary-container/10 pb-2 font-bold"
              href="#ritual"
            >
              RITUAL
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-base uppercase tracking-wider text-on-surface dark:text-surface border-b border-secondary-container/10 pb-2 font-bold"
              href="#reviews"
            >
              REVIEWS
            </a>
          </nav>
        </div>
      </div>

      {/* Main page content wrapper */}
      <main className="pt-20">
        <Hero
          selectedFormat={selectedFormat}
          setSelectedFormat={setSelectedFormat}
          onAddToCart={handleAddToCart}
          onOpenVideoModal={setActiveVideoUrl}
        />

        <InfoSection />

        <Certifications />

        <SymptomGrid />

        <RitualStepper />

        <VideoShowcase onOpenVideoModal={setActiveVideoUrl} />

        <FormulaCarousel />

        <VideoReviews onOpenVideoModal={setActiveVideoUrl} onAddToCart={handleAddToCart} />

        <ProductSlider onAddToCart={handleAddToCart} />

        <ReviewsSection />

        <FaqSection />

        <MediaAndRetail />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white w-full transition-colors duration-300 border-t border-zinc-800">
        <div className="flex flex-col items-center py-16 px-6 max-w-max-width mx-auto gap-8">
          <a className="hover:opacity-80 transition-opacity" href="#">
            <Image src={headerLogo} alt="Logo" className="h-12 w-auto object-contain rounded-md" />
          </a>
          <nav className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <a className="hover:text-white transition-colors" href="#">PRIVACY</a>
            <a className="hover:text-white transition-colors" href="#">TERMS</a>
            <a className="hover:text-white transition-colors" href="#">SHIPPING</a>
            <a className="hover:text-white transition-colors" href="#">CONTACT</a>
          </nav>
          <div className="w-full h-px bg-zinc-800/40"></div>
          <p className="text-zinc-500 text-xs text-center">
            © 2026 VED SANJEEVANI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* Slide-over Cart Drawer */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${
          isCartOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isCartOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            onClick={() => setIsCartOpen(false)}
            className={`absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-500 ease-in-out ${
              isCartOpen ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <div className="absolute inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
            <div
              className={`w-full max-w-md pointer-events-auto transition-transform duration-500 ease-out ${
                isCartOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full bg-white dark:bg-zinc-900 shadow-2xl border-l border-secondary-container/10">
                {/* Header */}
                <div className="px-6 py-6 border-b border-secondary-container/10 flex items-center justify-between">
                  <h2 className="font-sans text-sm uppercase tracking-wider text-on-surface dark:text-surface flex items-center gap-2 font-black">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    SHOPPING BAG ({cartTotalItems})
                  </h2>
                  <button onClick={() => setIsCartOpen(false)} className="text-on-surface dark:text-surface p-2">
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>
                </div>

                {/* Item List */}
                <div className="flex-1 overflow-y-auto py-6 px-6 hide-scrollbar">
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                      <span className="material-symbols-outlined text-6xl text-secondary-container">shopping_bag</span>
                      <p className="font-sans text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold">
                        Your bag is empty
                      </p>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="mt-2 border border-on-surface dark:border-surface text-on-surface dark:text-surface py-3 px-6 text-xs uppercase font-bold tracking-wider hover:bg-on-surface hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        CONTINUE SHOPPING
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 pb-6 border-b border-secondary-container/10 min-w-0">
                          <div className="w-16 h-20 bg-zinc-50 dark:bg-zinc-800 rounded-xl overflow-hidden shrink-0 border border-secondary-container/10 flex items-center justify-center p-1.5">
                            <Image
                              className="max-w-full max-h-full object-contain"
                              alt={item.name}
                              src={snoreOffNabhiOil}
                              width={80}
                              height={96}
                            />
                          </div>
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start gap-2">
                                <h3 className="font-sans text-xs uppercase font-extrabold text-on-surface dark:text-surface break-words min-w-0">
                                  {item.name}
                                </h3>
                                <button onClick={() => handleRemoveItem(item.id)} className="text-on-surface-variant/60 hover:text-red-500">
                                  <span className="material-symbols-outlined text-lg">delete</span>
                                </button>
                              </div>
                              <p className="text-[9px] text-brand-button font-sans uppercase font-bold tracking-wider mt-0.5">
                                {item.size}
                              </p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <div className="flex items-center border border-secondary-container/40 dark:border-zinc-700 rounded-lg overflow-hidden bg-white dark:bg-zinc-950">
                                <button
                                  onClick={() => handleUpdateQuantity(item.id, -1)}
                                  className="px-2 py-0.5 text-on-surface dark:text-surface hover:bg-zinc-50 cursor-pointer"
                                >
                                  <span className="material-symbols-outlined text-xs select-none">remove</span>
                                </button>
                                <span className="px-2 font-sans text-xs font-bold">{item.quantity}</span>
                                <button
                                  onClick={() => handleUpdateQuantity(item.id, 1)}
                                  className="px-2 py-0.5 text-on-surface dark:text-surface hover:bg-zinc-50 cursor-pointer"
                                >
                                  <span className="material-symbols-outlined text-xs select-none">add</span>
                                </button>
                              </div>
                              <span className="font-sans text-xs font-bold text-on-surface dark:text-surface">
                                ₹{(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Subtotal & Checkout */}
                {cart.length > 0 && (
                  <div className="border-t border-secondary-container/10 px-6 py-6 bg-zinc-50 dark:bg-zinc-950/20">
                    <div className="flex justify-between text-xs font-bold text-on-surface dark:text-surface mb-4 uppercase tracking-wider">
                      <span>SUBTOTAL</span>
                      <span className="text-brand-button font-extrabold text-sm">₹{cartSubtotal.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => showToast("Checkout simulation initiated. Connecting to secure gateway...")}
                      className="w-full bg-brand-button hover:bg-brand-button/90 text-white py-4 rounded-full font-button text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer text-center font-bold"
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
          <div onClick={() => setActiveVideoUrl(null)} className="fixed inset-0 bg-black/80 backdrop-blur-md"></div>
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl z-10 border border-zinc-800">
            <button
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors z-20"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <div className="aspect-video w-full flex items-center justify-center">
              <video controls autoPlay className="w-full h-full object-contain" src={activeVideoUrl}>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
          <div onClick={() => setIsSearchOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-xs"></div>
          <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl z-10 border border-secondary-container/10 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-secondary-container/20 pb-2">
              <span className="material-symbols-outlined text-on-surface-variant/40 text-2xl">search</span>
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, ingredients, or science..."
                className="flex-1 bg-transparent border-none text-on-surface dark:text-surface focus:outline-none placeholder-on-surface-variant/30 text-sm"
              />
              <button onClick={() => setIsSearchOpen(false)} className="text-on-surface-variant/40 hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] text-on-surface-variant/50 uppercase tracking-widest font-bold">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {["Nabhi Oil", "Castor Oil", "Sleep Wellness", "Snoring Relief"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-3.5 py-1 bg-zinc-50 dark:bg-zinc-800 hover:bg-brand-button hover:text-white text-[11px] rounded-full font-bold text-on-surface-variant cursor-pointer transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999?text=Hi%2C%20I%20have%2520a%2520question%2520about%2520Snore%2520Off%2520Nabhi%2520Oil"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed right-4 z-40 flex items-center justify-center bg-[#25D366] hover:bg-[#20b958] text-white shadow-lg transition-all duration-500 ease-in-out cursor-pointer rounded-full w-12 h-12 ${
          showStickyBuy ? "bottom-24" : "bottom-6"
        }`}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Sticky Bottom Checkout Bar (Conversion Engine) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-secondary-container/20 px-4 py-3 shadow-[0_-8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 ease-in-out transform ${
          showStickyBuy ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Left Side: Info */}
          <div className="items-center gap-3 shrink-0 hidden md:flex">
            <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-secondary-container/15 overflow-hidden shrink-0 relative flex items-center justify-center p-1.5">
              <Image src={snoreOffNabhiOil} alt="product" className="max-w-full max-h-full object-contain" />
            </div>
            <div>
              <p className="font-serif text-sm font-bold text-on-surface dark:text-surface leading-tight">
                Snore Off Nabhi Oil
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-sans text-[10px] text-brand-button font-black">₹{currentPrice}</span>
                <span className="font-sans text-[9px] text-green-500 font-bold uppercase tracking-wider">Free Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Side: CTAs */}
          <div className="flex-1 md:flex-none flex items-center gap-3 w-full md:w-96">
            <button
              onClick={() => handleAddToCart(productId, productName, currentPrice, "/snore-off-nabhi-oil.png", productSize)}
              className="border border-secondary-container/40 text-on-surface dark:text-surface font-sans font-bold px-4 h-11 flex-1 flex items-center justify-center gap-1.5 transition-all text-xs uppercase tracking-wider rounded-full hover:bg-zinc-50"
            >
              <span className="material-symbols-outlined text-sm">shopping_bag</span>
              <span>ADD TO CART</span>
            </button>
            <button
              onClick={() => {
                handleAddToCart(productId, productName, currentPrice, "/snore-off-nabhi-oil.png", productSize);
                showToast("Connecting to secure payment gateway...");
              }}
              className="bg-brand-button hover:bg-brand-button/90 text-white font-sans font-black px-4 h-11 flex-1 flex items-center justify-center gap-1.5 transition-all text-xs uppercase tracking-wider rounded-full shadow-md"
            >
              <span>BUY NOW</span>
            </button>
          </div>
        </div>
      </div>

      {/* Success Alert Notification (Toast) */}
      {toastMessage && (
        <div
          className={`fixed ${
            showStickyBuy ? "bottom-24" : "bottom-6"
          } right-6 z-50 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 px-6 py-4 shadow-xl flex items-center gap-4 rounded-xl border border-white/10 max-w-sm animate-slideInUp`}
        >
          <span className="material-symbols-outlined text-emerald-400">check_circle</span>
          <div className="flex-1">
            <p className="font-sans text-xs uppercase tracking-wide font-extrabold">{toastMessage}</p>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="font-sans text-[10px] tracking-wider font-black uppercase underline hover:text-brand-button"
          >
            VIEW BAG
          </button>
        </div>
      )}
    </div>
  );
}
