"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const heading = section.querySelector(".faq-heading");
    const items = section.querySelectorAll(".faq-item");
    gsap.set(heading, { opacity: 0, y: 35 });
    gsap.set(items, { opacity: 0, y: 30 });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        gsap.to(heading, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
        gsap.to(items, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.15 });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    contentRefs.current.forEach((el, idx) => {
      if (el) {
        if (openIndex === idx) {
          gsap.to(el, {
            height: "auto",
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          });
        } else {
          gsap.to(el, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          });
        }
      }
    });
  }, [openIndex]);

  return (
    <section ref={sectionRef} id="faq" className="w-full bg-[#faf6e9]/20 dark:bg-zinc-950/20 border-b border-secondary-container/10 transition-colors duration-300 py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="faq-heading text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-heading font-bold tracking-tight mb-4 uppercase">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[2px] bg-brand-button mx-auto"></div>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-item bg-white dark:bg-zinc-900/40 border border-secondary-container/20 dark:border-zinc-800/80 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-button/50 hover:shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-xs md:text-sm font-extrabold uppercase tracking-wider text-on-surface dark:text-surface group-hover:text-brand-heading transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`material-symbols-outlined shrink-0 ml-4 transition-transform duration-300 text-lg ${
                      isOpen ? "rotate-45 text-brand-button" : "text-on-surface-variant/40"
                    }`}
                  >
                    add
                  </span>
                </button>

                <div
                  ref={(el) => {
                    contentRefs.current[idx] = el;
                  }}
                  className="overflow-hidden h-0 opacity-0"
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-on-surface-variant dark:text-secondary-container leading-relaxed border-t border-secondary-container/10 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
