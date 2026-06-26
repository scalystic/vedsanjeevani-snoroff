"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function InfoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rows = section.querySelectorAll(".info-row");
    gsap.set(rows, { opacity: 0, y: 20 });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        gsap.to(rows, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" });
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
          gsap.to(el, { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" });
        } else {
          gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
        }
      }
    });
  }, [openIndex]);

  const accordionItems = [
    {
      title: "Benefits",
      content: (
        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-on-surface-variant dark:text-secondary-container leading-relaxed">
          <li><strong>Effortless Airflow:</strong> Helps clear obstructions in the nasal and throat passages for silent, steady breathing.</li>
          <li><strong>Soothing Passage:</strong> Lubricates dry, irritated throat membranes to reduce friction and snoring vibrations.</li>
          <li><strong>Deep Restful Sleep:</strong> Encourages long, uninterrupted REM cycles to ensure you wake up fully energized.</li>
          <li><strong>Partner Relief:</strong> Provides a silent sleep environment, helping eliminate partner fatigue and sleep disturbances.</li>
        </ul>
      ),
    },
    {
      title: "How does it work?",
      content: (
        <p className="text-xs md:text-sm text-on-surface-variant dark:text-secondary-container leading-relaxed">
          In Ayurveda, the navel (Nabhi) is the energetic hub connecting over 72,000 nerve channels. Using the ancient <strong>Pechoti Method</strong>, the specialized oil is absorbed transdermally through the navel. Rather than passing through the digestive tract where potency is lost, the active nutrients navigate direct pathways to soothe and strengthen respiratory tissues and throat muscles overnight.
        </p>
      ),
    },
    {
      title: "Key ingredients",
      content: (
        <div className="grid grid-cols-2 gap-4 text-xs md:text-sm text-on-surface-variant dark:text-secondary-container">
          <div>
            <strong>Castor Oil:</strong> A dense, lubricating base that deeply hydrates dry passages and calms localized muscle tremors.
          </div>
          <div>
            <strong>Black Pepper:</strong> A warming stimulant that boosts microcirculation and aids airway clearance.
          </div>
          <div>
            <strong>Tulsi (Holy Basil):</strong> A powerful adaptogen and anti-inflammatory that purifies the respiratory tract.
          </div>
          <div>
            <strong>Cinnamon:</strong> Relaxing botanical that releases throat tension and opens breathing channels.
          </div>
        </div>
      ),
    },
    {
      title: "Clinical evidence",
      content: (
        <p className="text-xs md:text-sm text-on-surface-variant dark:text-secondary-container leading-relaxed">
          Formulated by certified Ayurvedic Vaidyas (BAMS, MD), this specific blend underwent multiple trials to secure the ideal bio-availability ratio. The warming synergy of Black Pepper combined with the lubricating penetration of Castor Oil provides measurable relief in respiratory airway tension.
        </p>
      ),
    },
    {
      title: "When will I see results?",
      content: (
        <p className="text-xs md:text-sm text-on-surface-variant dark:text-secondary-container leading-relaxed">
          Most users (and their partners) report noticeable reductions in snoring intensity and throat dryness within <strong>7 to 10 nights</strong> of regular application. For chronic or heavy snoring, we recommend consistent nightly application for <strong>3 to 4 weeks</strong> to experience the full rehabilitative airway benefits.
        </p>
      ),
    },
    {
      title: "Delivery & returns",
      content: (
        <p className="text-xs md:text-sm text-on-surface-variant dark:text-secondary-container leading-relaxed">
          Orders are processed and dispatched within 24 hours. Delivery takes 3-5 business days across India. We offer <strong>Free Shipping</strong> on all prepaid orders. Backed by our <strong>30-Night Silent Sleep Guarantee</strong> — if you do not feel the difference, contact our support for a full, hassle-free refund.
        </p>
      ),
    },
  ];

  const highlights = [
    { stat: "7–10", label: "Nights to first results" },
    { stat: "72,000", label: "Nerve channels activated" },
    { stat: "100%", label: "Natural Ayurvedic formula" },
  ];

  return (
    <section ref={sectionRef} id="science" className="w-full max-w-max-width mx-auto px-4 md:px-section-padding-h pt-4 md:pt-6 pb-12 md:pb-16 transition-colors duration-300">
      <div className="lg:grid lg:grid-cols-[2fr_3fr] lg:gap-16 xl:gap-24">

        {/* Left sticky panel — lg+ only */}
        <div className="info-row hidden lg:block">
          <div className="sticky top-24 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-button font-semibold mb-3">Product Details</p>
              <h2 className="text-3xl xl:text-4xl font-extrabold text-on-surface dark:text-surface leading-tight">
                Everything you need to know
              </h2>
            </div>
            <div className="space-y-3">
              {highlights.map(({ stat, label }) => (
                <div key={stat} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary-container/10 border border-secondary-container/20">
                  <span className="text-2xl font-extrabold text-brand-button w-20 shrink-0 tabular-nums">{stat}</span>
                  <span className="text-sm text-on-surface-variant dark:text-secondary-container leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="flex flex-col border-t border-secondary-container/20">
          {accordionItems.map((item, idx) => (
            <div key={idx} className="info-row border-b border-secondary-container/20">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center py-5 text-left font-sans text-sm md:text-base font-extrabold uppercase text-on-surface dark:text-surface tracking-wider cursor-pointer hover:text-brand-button transition-colors"
              >
                <span>{item.title}</span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === idx ? "rotate-45 text-brand-button" : "rotate-0 text-on-surface-variant/40"}`}>
                  add
                </span>
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[idx] = el;
                }}
                className="overflow-hidden h-0 opacity-0"
              >
                <div className="pb-6 pr-4">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
