import React from "react";

export default function ReviewsSection() {
  const ratingStats = [
    { stars: 5, count: 90, percentage: 90 },
    { stars: 4, count: 6, percentage: 6 },
    { stars: 3, count: 4, percentage: 4 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  const reviewList = [
    {
      name: "Amit T.",
      rating: 5,
      date: "2 days ago",
      verified: true,
      title: "Excellent results, sleep is silent now",
      comment:
        "I used to snore very loudly. My wife recorded it many times. After 11 nights of putting this oil in my navel, my sleep is completely quiet. I wake up feeling very fresh. Highly recommend it!",
    },
    {
      name: "Kavitha N.",
      rating: 5,
      date: "1 week ago",
      verified: true,
      title: "Skeptical but it works!",
      comment:
        "I was skeptical that belly button oil could help with snoring, but I decided to try it. My fitness tracker shows much deeper sleep cycles and fewer awakenings. My partner is very happy!",
    },
    {
      name: "Deepak S.",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      title: "Good product, takes a week",
      comment:
        "Works well but you have to be consistent. It took about 8 nights for the snoring to decrease. Definitely opens up the airway. Will continue using it.",
    },
  ];

  return (
    <section
      id="reviews"
      className="bg-[#faf6e9]/20 dark:bg-zinc-900/10 border-t border-secondary-container/10 py-16 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-xl mx-auto px-4 md:px-0">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-1 text-brand-button mb-2">
            <span className="material-symbols-outlined text-lg">
              rate_review
            </span>
            <span className="font-sans text-[11px] uppercase tracking-widest font-extrabold">
              what they say
            </span>
          </div>
          <h2 className="font-serif text-3xl text-brand-heading font-bold tracking-tight">
            CUSTOMER REVIEW
          </h2>
        </div>

        {/* Rating Chart & Overview */}
        <div className="bg-white dark:bg-zinc-950 border border-secondary-container/15 rounded-3xl p-6 mb-8 shadow-xs flex flex-col items-center">
          {/* Star Breakdown Bars */}
          <div className="w-full flex flex-col gap-2 mb-6">
            {ratingStats.map((stat) => (
              <div key={stat.stars} className="flex items-center gap-3">
                {/* Stars Indicator */}
                <div className="flex gap-0.5 text-brand-button w-[72px] shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined !text-xs"
                      style={{
                        fontVariationSettings: `'FILL' ${i < stat.stars ? 1 : 0}`,
                      }}
                    >
                      star
                    </span>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="flex-1 h-3 bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-button rounded-full"
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>

                {/* Count */}
                <span className="font-sans text-xs text-on-surface-variant dark:text-secondary-container font-semibold w-6 text-right">
                  {stat.count}%
                </span>
              </div>
            ))}
          </div>

          <hr className="w-full border-secondary-container/10 mb-6" />

          {/* Average Rating Summary */}
          <div className="text-center mb-6">
            <div className="flex justify-center text-brand-button mb-1.5">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined !text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <div className="font-sans text-lg font-black text-on-surface dark:text-surface">
              4.76 out of 5
            </div>
            <div className="font-sans text-xs text-on-surface-variant dark:text-secondary-container mt-0.5">
              Based on 1280+ reviews
            </div>
          </div>

          {/* CTAs */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <button className="bg-brand-button hover:bg-brand-button/90 text-white font-extrabold py-3 px-4 rounded-full text-center font-button tracking-wider text-xs cursor-pointer transition-all duration-300">
              Write A Review
            </button>
            <button className="border-2 border-brand-button text-brand-button hover:bg-brand-button/5 font-extrabold py-3 px-4 rounded-full text-center font-button tracking-wider text-xs cursor-pointer transition-all duration-300">
              Ask a question
            </button>
          </div>
        </div>

        {/* Section Header for Reviews */}
        <div className="border-b border-secondary-container/20 pb-3 mb-6 select-none text-center">
          <h3 className="font-sans text-xs font-extrabold uppercase tracking-wider text-brand-button pb-1 relative inline-block">
            Reviews
            <div className="absolute bottom-[-13px] left-0 right-0 h-0.5 bg-brand-button"></div>
          </h3>
        </div>

        {/* Reviews List */}
        <div className="flex flex-col gap-6">
          {reviewList.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-950 border border-secondary-container/10 p-5 rounded-2xl shadow-xs"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {/* Stars */}
                  <div className="flex text-brand-button">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined !text-xs"
                        style={{
                          fontVariationSettings: `'FILL' ${i < rev.rating ? 1 : 0}`,
                        }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  {/* Verified badge */}
                  {rev.verified && (
                    <span className="bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 border border-emerald-500/20 select-none">
                      <span
                        className="material-symbols-outlined !text-[11px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        verified
                      </span>
                      Verified Buyer
                    </span>
                  )}
                </div>
                <span className="font-sans text-[10px] text-on-surface-variant/40 font-semibold">
                  {rev.date}
                </span>
              </div>

              <h4 className="font-serif text-sm font-bold text-on-surface dark:text-surface mb-1 uppercase tracking-wide">
                {rev.title}
              </h4>
              <p className="font-sans text-xs text-on-surface-variant dark:text-secondary-container leading-relaxed mb-3">
                {rev.comment}
              </p>

              <span className="font-serif text-xs font-bold text-on-surface/80 dark:text-surface/85">
                — {rev.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
