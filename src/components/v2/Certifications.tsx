"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Import certification logo assets
import gmpLogo from "../../../public/certifications/gmp.png";
import qmsLogo from "../../../public/certifications/qms.png";
import fdaLogo from "../../../public/certifications/fda.png";
import fsmsLogo from "../../../public/certifications/fsms.png";

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const targets = section.querySelectorAll(".cert-card");
    gsap.set(targets, { opacity: 0, y: 40 });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        gsap.to(targets, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white dark:bg-zinc-950 py-8 md:py-12 border-b border-secondary-container/10 transition-colors duration-300">
      <div className="max-w-max-width mx-auto px-2 sm:px-4 md:px-section-padding-h">
        <div className="grid grid-cols-4 gap-1.5 sm:gap-3 md:gap-4 lg:gap-6">
          {/* Certificate 1: GMP */}
          <div className="cert-card bg-[#faf6e9]/50 dark:bg-zinc-900/10 border border-secondary-container/25 rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col items-center text-center group hover:border-brand-button/50 hover:scale-[1.02] transition-all duration-300 hover:shadow-xs">
            <div className="mb-2 md:mb-4 select-none shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 relative flex items-center justify-center">
                <Image
                  src={gmpLogo}
                  alt="GMP Certified Logo"
                  className="max-w-full max-h-full object-contain"
                  placeholder="blur"
                />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-[10px] sm:text-xs md:text-sm font-bold text-on-surface dark:text-surface mb-0.5 md:mb-1">GMP</h4>
              <p className="font-sans text-[7.5px] sm:text-[9px] md:text-[11px] text-on-surface-variant dark:text-secondary-container leading-tight md:leading-relaxed">
                Good Manufacturing Practice certified, ensuring strict quality production control.
              </p>
            </div>
          </div>

          {/* Certificate 2: QMS */}
          <div className="cert-card bg-[#faf6e9]/50 dark:bg-zinc-900/10 border border-secondary-container/25 rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col items-center text-center group hover:border-brand-button/50 hover:scale-[1.02] transition-all duration-300 hover:shadow-xs">
            <div className="mb-2 md:mb-4 select-none shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 relative flex items-center justify-center">
                <Image
                  src={qmsLogo}
                  alt="QMS ISO 9001 Certified Logo"
                  className="max-w-full max-h-full object-contain"
                  placeholder="blur"
                />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-[10px] sm:text-xs md:text-sm font-bold text-on-surface dark:text-surface mb-0.5 md:mb-1">QMS</h4>
              <p className="font-sans text-[7.5px] sm:text-[9px] md:text-[11px] text-on-surface-variant dark:text-secondary-container leading-tight md:leading-relaxed">
                Quality Management System ISO 9001:2015 certified for business and process integrity.
              </p>
            </div>
          </div>

          {/* Certificate 3: FDA */}
          <div className="cert-card bg-[#faf6e9]/50 dark:bg-zinc-900/10 border border-secondary-container/25 rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col items-center text-center group hover:border-brand-button/50 hover:scale-[1.02] transition-all duration-300 hover:shadow-xs">
            <div className="mb-2 md:mb-4 select-none shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 relative flex items-center justify-center">
                <Image
                  src={fdaLogo}
                  alt="FDA (India) Approved Logo"
                  className="max-w-full max-h-full object-contain"
                  placeholder="blur"
                />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-[10px] sm:text-xs md:text-sm font-bold text-on-surface dark:text-surface mb-0.5 md:mb-1">FDA (India)</h4>
              <p className="font-sans text-[7.5px] sm:text-[9px] md:text-[11px] text-on-surface-variant dark:text-secondary-container leading-tight md:leading-relaxed">
                Manufactured in a facility registered under state licensing authority for Ayush.
              </p>
            </div>
          </div>

          {/* Certificate 4: FSMS */}
          <div className="cert-card bg-[#faf6e9]/50 dark:bg-zinc-900/10 border border-secondary-container/25 rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 flex flex-col items-center text-center group hover:border-brand-button/50 hover:scale-[1.02] transition-all duration-300 hover:shadow-xs">
            <div className="mb-2 md:mb-4 select-none shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 relative flex items-center justify-center">
                <Image
                  src={fsmsLogo}
                  alt="FSMS ISO 22000 Certified Logo"
                  className="max-w-full max-h-full object-contain"
                  placeholder="blur"
                />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-[10px] sm:text-xs md:text-sm font-bold text-on-surface dark:text-surface mb-0.5 md:mb-1">FSMS</h4>
              <p className="font-sans text-[7.5px] sm:text-[9px] md:text-[11px] text-on-surface-variant dark:text-secondary-container leading-tight md:leading-relaxed">
                Food Safety Management System ISO 22000:2018 certified for hygienic production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
