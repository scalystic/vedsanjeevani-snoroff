"use client";

import React from "react";
import Image from "next/image";

import forbesLogo from "../../../public/logos/forbes_india.svg";
import amazonLogo from "../../../public/logos/amazon.svg";
import flipkartLogo from "../../../public/logos/flipkart.svg";
import myntraLogo from "../../../public/logos/myntra.svg";
import meeshoLogo from "../../../public/logos/meesho.png";

const BusinessConnectLogo = () => (
  <div className="flex items-center gap-2 select-none">
    <div className="flex flex-col items-center justify-center bg-[#D62027] text-white px-2 py-1 rounded-sm font-sans font-black text-[12px] leading-none">
      <span>B</span>
      <span>C</span>
    </div>
    <div className="flex flex-col items-start leading-none">
      <div className="font-sans font-bold text-[15px] tracking-tight text-zinc-800 dark:text-zinc-100">
        <span className="text-[#D62027]">Business</span>{" "}
        <span>Connect</span>
      </div>
      <span className="text-[6px] tracking-widest text-[#D62027] uppercase mt-0.5 font-bold">
        Inspiring Business Community
      </span>
    </div>
  </div>
);

const TheLiveNagpurLogo = () => (
  <div className="flex items-center select-none font-sans">
    <div className="flex flex-col text-[8px] font-bold text-[#0D4C92] leading-none pr-1 border-r border-[#0D4C92]/20">
      <span>T</span>
      <span>H</span>
      <span>E</span>
    </div>
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
  <div className="font-serif select-none leading-none text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
    <span>Ahmedabad</span>
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

const mediaLogos = [
  {
    id: "forbes",
    element: (
      <div className="h-10 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 dark:brightness-0 dark:invert shrink-0">
        <Image src={forbesLogo} alt="Forbes India" className="h-8 w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "bc",
    element: (
      <div className="h-10 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <BusinessConnectLogo />
      </div>
    ),
  },
  {
    id: "livenagpur",
    element: (
      <div className="h-10 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <TheLiveNagpurLogo />
      </div>
    ),
  },
  {
    id: "mirror",
    element: (
      <div className="h-10 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <AhmedabadMirrorLogo />
      </div>
    ),
  },
];

const retailLogos = [
  {
    id: "blinkit",
    element: (
      <div className="h-10 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <BlinkitLogo />
      </div>
    ),
  },
  {
    id: "amazon",
    element: (
      <div className="h-10 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 dark:brightness-0 dark:invert shrink-0">
        <Image src={amazonLogo} alt="Amazon" className="h-7 w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "flipkart",
    element: (
      <div className="h-12 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <Image src={flipkartLogo} alt="Flipkart" className="h-10 w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "myntra",
    element: (
      <div className="h-10 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <Image src={myntraLogo} alt="Myntra" className="h-8 w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "meesho",
    element: (
      <div className="h-10 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 shrink-0">
        <Image src={meeshoLogo} alt="Meesho" className="h-8 w-auto object-contain" />
      </div>
    ),
  },
];

const LogoRow = ({ logos }: { logos: typeof mediaLogos }) => (
  <>
    {/* Desktop: static centered row */}
    <div className="hidden md:flex flex-wrap justify-center items-center gap-10 md:gap-16 w-full max-w-4xl px-4">
      {logos.map((logo) => (
        <React.Fragment key={logo.id}>{logo.element}</React.Fragment>
      ))}
    </div>

    {/* Mobile: auto-scrolling marquee */}
    <div className="w-full md:hidden overflow-hidden relative mask-marquee py-2">
      <div className="flex w-max animate-marquee">
        {[1, 2].map((copy) => (
          <div key={copy} className="flex items-center shrink-0">
            {logos.map((logo) => (
              <div key={`${logo.id}-${copy}`} className="px-6">
                {logo.element}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </>
);

export default function MediaAndRetail() {
  return (
    <section className="border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-16 transition-colors duration-300">
      <div className="max-w-max-width mx-auto px-6 flex flex-col gap-14">
        {/* In Media */}
        <div className="flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-bold mb-3">
            AS SEEN IN
          </p>
          <h2 className="font-headline-sm text-sm tracking-widest text-brand-heading mb-8">
            IN MEDIA
          </h2>
          <LogoRow logos={mediaLogos} />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800" />

        {/* Also Available On */}
        <div className="flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-bold mb-3">
            SHOP EVERYWHERE
          </p>
          <h2 className="font-headline-sm text-sm tracking-widest text-brand-heading mb-8">
            ALSO AVAILABLE ON
          </h2>
          <LogoRow logos={retailLogos} />
        </div>
      </div>
    </section>
  );
}
