<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AURA PERFORMANCE ELIXIR - High-End E-Commerce</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&amp;family=Playfair+Display:wght@600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-surface": "#1a1c1c",
                        "on-secondary-container": "#636262",
                        "on-background": "#1a1c1c",
                        "on-primary": "#ffffff",
                        "secondary-fixed": "#e5e2e1",
                        "on-tertiary-fixed-variant": "#454747",
                        "on-primary-container": "#554300",
                        "inverse-on-surface": "#f0f1f1",
                        "on-surface-variant": "#4d4635",
                        "secondary": "#5f5e5e",
                        "on-secondary-fixed-variant": "#474746",
                        "secondary-container": "#e2dfde",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#e9c349",
                        "on-primary-fixed-variant": "#574500",
                        "surface-container-lowest": "#ffffff",
                        "tertiary-container": "#b2b3b3",
                        "on-secondary": "#ffffff",
                        "surface-container-highest": "#e2e2e2",
                        "surface-container": "#eeeeee",
                        "primary": "#735c00",
                        "surface-dim": "#dadada",
                        "surface-container-high": "#e8e8e8",
                        "primary-container": "#d4af37",
                        "outline-variant": "#d0c5af",
                        "outline": "#7f7663",
                        "secondary-fixed-dim": "#c8c6c5",
                        "on-error": "#ffffff",
                        "background": "#f9f9f9",
                        "tertiary-fixed": "#e2e2e2",
                        "tertiary-fixed-dim": "#c6c6c7",
                        "error-container": "#ffdad6",
                        "surface-tint": "#735c00",
                        "surface-variant": "#e2e2e2",
                        "inverse-surface": "#2f3131",
                        "error": "#ba1a1a",
                        "tertiary": "#5d5f5f",
                        "surface": "#f9f9f9",
                        "on-primary-fixed": "#241a00",
                        "on-tertiary-fixed": "#1a1c1c",
                        "on-secondary-fixed": "#1c1b1b",
                        "surface-bright": "#f9f9f9",
                        "surface-container-low": "#f3f3f4",
                        "primary-fixed-dim": "#e9c349",
                        "primary-fixed": "#ffe088",
                        "on-tertiary-container": "#434546",
                        "on-error-container": "#93000a"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "stack-sm": "8px",
                        "stack-lg": "48px",
                        "section-padding-h": "24px",
                        "gutter": "32px",
                        "section-padding-v": "120px",
                        "max-width": "1280px",
                        "stack-md": "24px"
                    },
                    "fontFamily": {
                        "display-lg-mobile": ["Playfair Display"],
                        "headline-sm": ["Playfair Display"],
                        "button": ["Montserrat"],
                        "body-lg": ["Montserrat"],
                        "label-caps": ["Montserrat"],
                        "display-lg": ["Playfair Display"],
                        "body-md": ["Montserrat"],
                        "headline-md": ["Playfair Display"]
                    },
                    "fontSize": {
                        "display-lg-mobile": ["44px", { "lineHeight": "52px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-sm": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
                        "button": ["14px", { "lineHeight": "20px", "letterSpacing": "0.1em", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "30px", "letterSpacing": "0.01em", "fontWeight": "400" }],
                        "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.15em", "fontWeight": "700" }],
                        "display-lg": ["72px", { "lineHeight": "84px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "body-md": ["16px", { "lineHeight": "26px", "fontWeight": "400" }],
                        "headline-md": ["40px", { "lineHeight": "48px", "fontWeight": "600" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom hide scrollbar for horizontal scrolling containers */
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
</head>
<body class="bg-background text-on-surface antialiased pt-20">
<!-- TopNavBar -->
<header class="bg-surface dark:bg-on-surface text-primary dark:text-primary-container fixed top-0 w-full border-b border-secondary-container/10 z-50">
<div class="flex justify-between items-center h-20 px-section-padding-h max-w-max-width mx-auto">
<!-- Navigation Links (Left) -->
<nav class="hidden md:flex gap-gutter items-center">
<a class="font-button text-button uppercase tracking-[0.1em] text-primary border-b-2 border-primary pb-1" href="#">SHOP</a>
<a class="font-button text-button uppercase tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors hover:text-primary transition-all duration-300" href="#">SCIENCE</a>
<a class="font-button text-button uppercase tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors hover:text-primary transition-all duration-300" href="#">ABOUT</a>
<a class="font-button text-button uppercase tracking-[0.1em] text-on-surface-variant hover:text-primary transition-colors hover:text-primary transition-all duration-300" href="#">JOURNAL</a>
</nav>
<!-- Mobile Menu Toggle -->
<button class="md:hidden text-on-surface p-2 scale-95 active:opacity-80 transition-transform">
<span class="material-symbols-outlined">menu</span>
</button>
<!-- Brand Logo (Center) -->
<div class="absolute left-1/2 -translate-x-1/2">
<a class="font-display-lg text-headline-sm tracking-tighter text-on-surface dark:text-surface" href="#">AURA</a>
</div>
<!-- Trailing Icons (Right) -->
<div class="flex gap-stack-md items-center">
<button class="text-on-surface hover:text-primary transition-all duration-300 scale-95 active:opacity-80 transition-transform">
<span class="material-symbols-outlined">search</span>
</button>
<button class="text-on-surface hover:text-primary transition-all duration-300 scale-95 active:opacity-80 transition-transform relative">
<span class="material-symbols-outlined">shopping_bag</span>
<span class="absolute -top-1 -right-1 bg-primary-container text-on-primary-container text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</header>
<!-- Product Hero Section -->
<section class="max-w-max-width mx-auto px-section-padding-h py-stack-lg md:py-section-padding-v grid grid-cols-1 md:grid-cols-12 gap-gutter md:gap-16">
<!-- Left Column: Image Gallery -->
<div class="md:col-span-7 flex flex-col gap-stack-sm">
<!-- Main Hero Image -->
<div class="w-full aspect-[4/5] bg-surface-container-low relative overflow-hidden group">
<img class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" data-alt="A hyper-realistic, premium studio photograph of a sleek, dark charcoal glass bottle of Aura Performance Elixir. The bottle features elegant, minimalist gold foil typography and a soft matte finish. It is heroically lit from the side on a pristine white marble block against a pure, bright white background. The lighting is high-key, creating soft, luxurious reflections on the glass, emphasizing an aesthetic of scientific precision and high-end exclusivity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs4xrIPXY6f4gDTl6uPHulepjCYJFpq8eaUZAqc1sSAxYappBNyv5btTy9ObTCtMjr2XKOUtcUtMXhTW1N2q-i6hTqaXLqXBddtDEAomVkAkeSTX41HwfaUSo8EJ0gjYp4ioAQoO8xhxcJgbClgZbOaW5QP9MHMKeNVc3QdAe6aKZCDB_M6O2xCm9NmQXVkWjUmQotaryANPZVkpDj4vT-2jalhVRUsHpVZcWBb-860RviIVRd3LqL3A94uqPpZ-__ttVfHBzFJhE"/>
</div>
<!-- Thumbnails -->
<div class="grid grid-cols-4 gap-stack-sm">
<div class="aspect-square bg-surface-container-low cursor-pointer border border-primary-container">
<img class="w-full h-full object-cover" data-alt="A close-up macro shot focusing purely on the elegant gold foil typography 'AURA' applied to the dark, textured matte glass surface of the premium elixir bottle. High contrast lighting highlighting the luxurious material finish against a stark white backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-uTc37LRm96UPArpWKD79LAfG7K58N71rfZGy2EFMYhIdu6-drJNl62YGF7eiBTv1fAC3gcqD26yegF7btyA9vDj0_PNbXgELwXauvuZYRroF7_dgyMpjHnmClNXNCLTj0N5nQn7ojmiaYS_rFxG8pP_YVrDiHDusRR817H3OEEUdGxRfofqee_TfI0gYvGp8PBMHYIOo_urUl-AVPIkhCzu2kNwsuuPYcKOSFmaSpFnwVfruyWoeDvfblupKlL5n5GHJvfq3MQU"/>
</div>
<div class="aspect-square bg-surface-container-low cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img class="w-full h-full object-cover" data-alt="An artistic, minimalist composition showing a single golden drop falling from the precise glass dropper of the Aura Performance Elixir bottle. The background is a clean, bright white space. The focus is incredibly sharp on the perfect spherical drop reflecting a studio light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0MMiTSDp0iTXhcDnxPJM8TpIP6xx8wavJ2Q_mB-ug6l6yd1n8gdV9RQEU8_hlvzISckzE_vo_hpWr5hPzmEj67kxEi2xubALRULXh5z9gSRLfne3DQgWjM8mEafhPPShBU_A115e84Zz69Xv3HQtlwgqFdY-zeEH6k6RwqJL1lYkyOzesQwIWfkecNYV3iQttp_pJ1UhRexPcNfw9NUjJB7QcCQQZGcmOPMmxkgvaevk9W3KwMCk6_1wkqf2cAlc9EOJJR98aoRk"/>
</div>
<div class="aspect-square bg-surface-container-low cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img class="w-full h-full object-cover" data-alt="An overhead lifestyle shot showing the Aura Performance Elixir bottle resting on a pristine white ceramic tray alongside a subtle, minimalist notepad and a gold pen. The lighting is bright and airy, suggesting a highly organized, elite morning routine." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjuhvqe-MCuxoeEs8HH-d-v5w92vuw0Un6-WMDRxYpi9HEPd6ivTAhJSrMmPqKimE095sATDGDeVTrP0J3hGgpCxK2eDNUTBh4bzkON-9EPISjLAzz7ULhYgm-JLqTq_PKohww9CCIpHX95jSYDPvaHRBmBJkn46QoGKtLtOtfkZDFJeoCAEbjLUo9EsioeRZEUj4bclxsUDUsNuJWaweB7mTO0mfKg0opKWsRdZeYLLIGX2-vzj45vsUtzGNjhmZSrFK0UGfKSU8"/>
</div>
<div class="aspect-square bg-surface-container-low flex items-center justify-center cursor-pointer bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant">
<span class="material-symbols-outlined text-3xl">play_circle</span>
</div>
</div>
</div>
<!-- Right Column: Product Information -->
<div class="md:col-span-5 flex flex-col justify-center">
<nav class="flex gap-2 text-on-surface-variant font-label-caps text-label-caps mb-stack-md">
<a class="hover:text-on-surface transition-colors" href="#">HOME</a>
<span>/</span>
<a class="hover:text-on-surface transition-colors" href="#">SHOP</a>
<span>/</span>
<span class="text-on-surface">ELIXIR</span>
</nav>
<h1 class="font-headline-md text-headline-md text-on-surface mb-4">AURA PERFORMANCE ELIXIR</h1>
<div class="flex items-center gap-4 mb-stack-md">
<div class="flex text-primary-container">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<a class="font-button text-button text-on-surface underline underline-offset-4 decoration-primary-container/30 hover:decoration-primary-container transition-colors" href="#reviews">128 REVIEWS</a>
</div>
<p class="font-body-lg text-body-lg text-on-surface mb-stack-md">$129.00 <span class="text-on-surface-variant text-sm ml-2">/ 30-DAY SUPPLY</span></p>
<p class="font-body-md text-body-md text-on-surface-variant mb-stack-lg leading-relaxed">
                A meticulous blend engineered for absolute cognitive clarity and sustained physical optimization. Crafted with clinically proven adaptogens and neural-enhancing peptides, the Elixir is designed for those who demand peak performance without compromise. Experience sustained energy, laser focus, and accelerated recovery.
            </p>
<!-- Purchase Actions -->
<div class="flex flex-col gap-4 mb-stack-lg">
<button class="w-full bg-on-surface text-surface py-4 px-8 font-button text-button uppercase tracking-[0.1em] hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 flex justify-center items-center gap-2">
                    ADD TO CART
                </button>
<button class="w-full border border-on-surface text-on-surface py-4 px-8 font-button text-button uppercase tracking-[0.1em] hover:bg-on-surface hover:text-surface transition-colors duration-300 flex justify-center items-center gap-2">
                    BUY NOW
                </button>
</div>
<!-- Value Props -->
<div class="grid grid-cols-2 gap-4 border-t border-secondary-container/30 pt-stack-md">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary-container">local_shipping</span>
<div>
<h4 class="font-label-caps text-label-caps text-on-surface mb-1">COMPLIMENTARY SHIPPING</h4>
<p class="font-body-md text-[13px] leading-tight text-on-surface-variant">On all domestic orders over $100.</p>
</div>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary-container">verified</span>
<div>
<h4 class="font-label-caps text-label-caps text-on-surface mb-1">30-DAY GUARANTEE</h4>
<p class="font-body-md text-[13px] leading-tight text-on-surface-variant">Risk-free trial for a full cycle.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Product Details Bento Grid -->
<section class="bg-surface border-y border-secondary-container/10">
<div class="max-w-max-width mx-auto px-section-padding-h py-section-padding-v">
<div class="text-center mb-stack-lg">
<h2 class="font-headline-sm text-headline-sm text-on-surface mb-4">THE SCIENCE OF ELITE PERFORMANCE</h2>
<div class="w-12 h-[1px] bg-primary-container mx-auto"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
<!-- Benefits Card -->
<div class="bg-surface p-10 border border-secondary-container/20 flex flex-col justify-center h-full">
<h3 class="font-button text-button text-on-surface mb-6 border-b border-secondary-container/10 pb-4">CORE BENEFITS</h3>
<ul class="space-y-6">
<li class="flex items-start gap-4">
<span class="material-symbols-outlined text-primary-container mt-1">bolt</span>
<div>
<h4 class="font-label-caps text-label-caps text-on-surface mb-1">SUSTAINED NEURAL DRIVE</h4>
<p class="font-body-md text-[14px] text-on-surface-variant">Eliminates brain fog and provides clean, jitter-free focus for up to 8 hours.</p>
</div>
</li>
<li class="flex items-start gap-4">
<span class="material-symbols-outlined text-primary-container mt-1">vital_signs</span>
<div>
<h4 class="font-label-caps text-label-caps text-on-surface mb-1">ADAPTOGENIC STRESS RESPONSE</h4>
<p class="font-body-md text-[14px] text-on-surface-variant">Lowers cortisol levels and helps the body maintain homeostasis under extreme pressure.</p>
</div>
</li>
<li class="flex items-start gap-4">
<span class="material-symbols-outlined text-primary-container mt-1">autorenew</span>
<div>
<h4 class="font-label-caps text-label-caps text-on-surface mb-1">ACCELERATED RECOVERY</h4>
<p class="font-body-md text-[14px] text-on-surface-variant">Promotes cellular repair and reduces inflammation post-exertion.</p>
</div>
</li>
</ul>
</div>
<!-- Ingredients Card (Image Background) -->
<div class="relative p-10 flex flex-col justify-end h-full min-h-[400px] border border-secondary-container/20 overflow-hidden group">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" data-alt="A macro, extremely detailed photograph of raw, organic Lion's Mane mushroom and golden Cordyceps elegantly arranged on a pristine white surface. The lighting is dramatic and clinical, highlighting the intricate textures of the natural ingredients against a minimalist, high-key white background, embodying purity and scientific extraction." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCg0Olo7IqRn0iCTttfK3fJ7xwnGJYAaSlzq-3ebtCBvC3Wr_rQMPMloqOk6uFLPLIQ1Z2uUZlNpT0zvNpEE5ObE42n856EKs8snZq81tqxnLUhdlScubJ_RJ2AWOZNhhQdqhmasxqJxa2FiLjINKrHE0nIEGH5AwKi5sB8WbLh0VEYGE6R5NSWKCcLH-Vc_chSU6ULvYm32uKOLUS780McRQ4alT6SUZijcAnTl1c1mdhRNpKkZrgFpIawSmakt7e9FESbX9-zEiE')"></div>
<!-- Gradient overlay for text legibility -->
<div class="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
<div class="relative z-10">
<h3 class="font-button text-button text-on-surface mb-4">KEY INGREDIENTS</h3>
<p class="font-body-md text-[15px] text-on-surface-variant mb-6">A proprietary matrix of high-yield extracts, including dual-extracted Lion's Mane, Rhodiola Rosea, and bio-available Shilajit resin.</p>
<a class="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface border-b border-on-surface pb-1 hover:text-primary-container hover:border-primary-container transition-colors" href="#">
                            VIEW FULL PROFILE <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
<!-- Usage Card -->
<div class="bg-surface p-10 border border-secondary-container/20 flex flex-col justify-center h-full">
<h3 class="font-button text-button text-on-surface mb-6 border-b border-secondary-container/10 pb-4">OPTIMAL PROTOCOL</h3>
<div class="flex flex-col gap-8 relative">
<!-- Connecting line -->
<div class="absolute left-[11px] top-8 bottom-8 w-[1px] bg-secondary-container/50"></div>
<div class="flex gap-4 relative z-10">
<div class="w-6 h-6 rounded-full bg-surface border border-primary-container flex items-center justify-center font-label-caps text-[10px] text-primary-container flex-shrink-0 mt-1">1</div>
<div>
<h4 class="font-label-caps text-label-caps text-on-surface mb-1">DOSAGE</h4>
<p class="font-body-md text-[14px] text-on-surface-variant">Take one full dropper (1ml) sublingually.</p>
</div>
</div>
<div class="flex gap-4 relative z-10">
<div class="w-6 h-6 rounded-full bg-surface border border-primary-container flex items-center justify-center font-label-caps text-[10px] text-primary-container flex-shrink-0 mt-1">2</div>
<div>
<h4 class="font-label-caps text-label-caps text-on-surface mb-1">TIMING</h4>
<p class="font-body-md text-[14px] text-on-surface-variant">Consume first thing in the morning on an empty stomach for maximum absorption.</p>
</div>
</div>
<div class="flex gap-4 relative z-10">
<div class="w-6 h-6 rounded-full bg-surface border border-primary-container flex items-center justify-center font-label-caps text-[10px] text-primary-container flex-shrink-0 mt-1">3</div>
<div>
<h4 class="font-label-caps text-label-caps text-on-surface mb-1">ACTIVATION</h4>
<p class="font-body-md text-[14px] text-on-surface-variant">Hold under tongue for 60 seconds before swallowing.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Detailed Ingredients Section -->
<section class="max-w-max-width mx-auto px-section-padding-h py-section-padding-v border-b border-secondary-container/10">
<div class="text-center mb-stack-lg">
<h2 class="font-headline-sm text-headline-sm text-on-surface mb-4">THE FORMULA</h2>
<div class="w-12 h-[1px] bg-primary-container mx-auto"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
<div class="text-center">
<h3 class="font-headline-sm text-[24px] text-primary-container mb-2">Alpha-GPC</h3>
<p class="font-body-md text-on-surface-variant">Highly bioavailable choline compound that crosses the blood-brain barrier to rapidly enhance focus and cognitive energy.</p>
</div>
<div class="text-center">
<h3 class="font-headline-sm text-[24px] text-primary-container mb-2">Lion's Mane</h3>
<p class="font-body-md text-on-surface-variant">Dual-extracted mushroom rich in hericenones and erinacines to stimulate Nerve Growth Factor (NGF) production.</p>
</div>
<div class="text-center">
<h3 class="font-headline-sm text-[24px] text-primary-container mb-2">L-Theanine</h3>
<p class="font-body-md text-on-surface-variant">An amino acid that promotes an alpha brainwave state, smoothing out stimulant effects for clean, relaxed alertness.</p>
</div>
</div>
</section>
<!-- Usage Guide & Video Section -->
<section class="bg-surface-container-low border-b border-secondary-container/10">
<div class="max-w-max-width mx-auto px-section-padding-h py-section-padding-v grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
<div>
<h2 class="font-headline-sm text-headline-sm text-on-surface mb-4">THE RITUAL</h2>
<div class="w-12 h-[1px] bg-primary-container mb-8"></div>
<div class="flex flex-col gap-8">
<div class="flex gap-6">
<span class="font-display-lg text-[40px] text-primary-container/30 font-bold leading-none">01</span>
<div>
<h4 class="font-label-caps text-label-caps text-on-surface mb-2">DOSAGE</h4>
<p class="font-body-md text-on-surface-variant">Draw exactly 1ml (one full dropper) of the elixir.</p>
</div>
</div>
<div class="flex gap-6">
<span class="font-display-lg text-[40px] text-primary-container/30 font-bold leading-none">02</span>
<div>
<h4 class="font-label-caps text-label-caps text-on-surface mb-2">TIMING</h4>
<p class="font-body-md text-on-surface-variant">Take first thing in the morning on an empty stomach.</p>
</div>
</div>
<div class="flex gap-6">
<span class="font-display-lg text-[40px] text-primary-container/30 font-bold leading-none">03</span>
<div>
<h4 class="font-label-caps text-label-caps text-on-surface mb-2">ACTIVATION</h4>
<p class="font-body-md text-on-surface-variant">Hold sublingually for 60-90 seconds before swallowing for maximum bioavailability.</p>
</div>
</div>
</div>
</div>
<div class="aspect-[16/9] bg-surface-container border border-secondary-container/20 relative group cursor-pointer overflow-hidden flex items-center justify-center">
<img alt="Video placeholder" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0MMiTSDp0iTXhcDnxPJM8TpIP6xx8wavJ2Q_mB-ug6l6yd1n8gdV9RQEU8_hlvzISckzE_vo_hpWr5hPzmEj67kxEi2xubALRULXh5z9gSRLfne3DQgWjM8mEafhPPShBU_A115e84Zz69Xv3HQtlwgqFdY-zeEH6k6RwqJL1lYkyOzesQwIWfkecNYV3iQttp_pJ1UhRexPcNfw9NUjJB7QcCQQZGcmOPMmxkgvaevk9W3KwMCk6_1wkqf2cAlc9EOJJR98aoRk"/>
<div class="w-20 h-20 bg-surface/90 rounded-full flex items-center justify-center relative z-10 group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
<span class="material-symbols-outlined text-4xl ml-2">play_arrow</span>
</div>
</div>
</div>
</section>
<!-- Social Proof Section -->
<section class="max-w-max-width mx-auto px-section-padding-h py-section-padding-v border-b border-secondary-container/10" id="reviews">
<!-- Trusted By Logos -->
<div class="mb-section-padding-v">
<h3 class="font-label-caps text-label-caps text-on-surface-variant text-center tracking-widest mb-10">TRUSTED BY HIGH PERFORMERS AT</h3>
<div class="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">
<!-- Abstract logo shapes to represent premium brands -->
<span class="font-display-lg text-[24px] font-bold tracking-tighter">EQUINOX</span>
<span class="font-body-lg text-[20px] font-bold tracking-widest uppercase">Forbes</span>
<span class="font-headline-sm text-[22px] italic">Wired</span>
<span class="font-body-lg text-[20px] font-bold tracking-widest uppercase">FastCompany</span>
</div>
</div>
<!-- Reviews -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div class="p-8 border border-secondary-container/20">
<div class="flex text-primary-container mb-6">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="font-headline-sm text-[20px] leading-relaxed text-on-surface mb-6">"An absolute game-changer for my focus blocks. The clarity is immediate and there is zero crash. It has replaced my morning espresso entirely."</p>
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-surface-container border border-secondary-container/20 overflow-hidden">
<span class="material-symbols-outlined text-secondary w-full h-full flex items-center justify-center">person</span>
</div>
<div>
<p class="font-label-caps text-label-caps text-on-surface">MARCUS T.</p>
<p class="font-body-md text-[12px] text-on-surface-variant">Verified Buyer</p>
</div>
</div>
</div>
<div class="p-8 border border-secondary-container/20">
<div class="flex text-primary-container mb-6">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="font-headline-sm text-[20px] leading-relaxed text-on-surface mb-6">"As an endurance athlete, I'm highly skeptical of supplements. The Elixir delivers on its promises. Noticeable reduction in inflammation and faster recovery times between heavy sessions."</p>
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-surface-container border border-secondary-container/20 overflow-hidden">
<span class="material-symbols-outlined text-secondary w-full h-full flex items-center justify-center">person</span>
</div>
<div>
<p class="font-label-caps text-label-caps text-on-surface">ELENA R.</p>
<p class="font-body-md text-[12px] text-on-surface-variant">Verified Buyer</p>
</div>
</div>
</div>
</div>
</section>
<!-- FAQ Section -->
<section class="max-w-[800px] mx-auto px-section-padding-h py-section-padding-v border-b border-secondary-container/10">
<div class="text-center mb-stack-lg">
<h2 class="font-headline-sm text-headline-sm text-on-surface mb-4">FREQUENTLY ASKED QUESTIONS</h2>
<div class="w-12 h-[1px] bg-primary-container mx-auto"></div>
</div>
<div class="flex flex-col gap-4">
<!-- FAQ Item -->
<details class="group bg-surface border border-secondary-container/20 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary class="flex justify-between items-center font-button text-button cursor-pointer text-on-surface">
                When will I feel the effects?
                <span class="material-symbols-outlined transition duration-300 group-open:-rotate-180">expand_more</span>
</summary>
<div class="text-on-surface-variant font-body-md mt-4 pt-4 border-t border-secondary-container/10 leading-relaxed">
                Most users report feeling heightened cognitive clarity and sustained energy within 15-30 minutes of sublingual administration. Peak effects are typically reached at the 45-minute mark.
            </div>
</details>
<!-- FAQ Item -->
<details class="group bg-surface border border-secondary-container/20 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary class="flex justify-between items-center font-button text-button cursor-pointer text-on-surface">
                Is it vegan and cruelty-free?
                <span class="material-symbols-outlined transition duration-300 group-open:-rotate-180">expand_more</span>
</summary>
<div class="text-on-surface-variant font-body-md mt-4 pt-4 border-t border-secondary-container/10 leading-relaxed">
                Yes. The Aura Performance Elixir is 100% plant-based, vegan, and rigorously tested without the use of animal models.
            </div>
</details>
<!-- FAQ Item -->
<details class="group bg-surface border border-secondary-container/20 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary class="flex justify-between items-center font-button text-button cursor-pointer text-on-surface">
                What are the shipping times?
                <span class="material-symbols-outlined transition duration-300 group-open:-rotate-180">expand_more</span>
</summary>
<div class="text-on-surface-variant font-body-md mt-4 pt-4 border-t border-secondary-container/10 leading-relaxed">
                Domestic orders typically arrive within 2-4 business days. International shipping takes 7-14 business days depending on customs processing in your region.
            </div>
</details>
</div>
</section>
<!-- Often Bought Together / Recommendations -->
<section class="max-w-max-width mx-auto px-section-padding-h py-section-padding-v">
<div class="text-center mb-stack-lg">
<h2 class="font-headline-sm text-headline-sm text-on-surface mb-4">COMPLETE YOUR RITUAL</h2>
<div class="w-12 h-[1px] bg-primary-container mx-auto"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
<!-- Product 1 -->
<div class="group border border-secondary-container/20 p-6 flex flex-col items-center text-center hover:border-primary-container/50 transition-colors bg-surface">
<div class="w-32 h-32 bg-surface-container-low mb-6 flex items-center justify-center p-4">
<img class="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjuhvqe-MCuxoeEs8HH-d-v5w92vuw0Un6-WMDRxYpi9HEPd6ivTAhJSrMmPqKimE095sATDGDeVTrP0J3hGgpCxK2eDNUTBh4bzkON-9EPISjLAzz7ULhYgm-JLqTq_PKohww9CCIpHX95jSYDPvaHRBmBJkn46QoGKtLtOtfkZDFJeoCAEbjLUo9EsioeRZEUj4bclxsUDUsNuJWaweB7mTO0mfKg0opKWsRdZeYLLIGX2-vzj45vsUtzGNjhmZSrFK0UGfKSU8"/>
</div>
<h3 class="font-button text-button text-on-surface mb-2">AURA NIGHT REST</h3>
<p class="font-body-md text-[14px] text-on-surface-variant mb-4">$89.00</p>
<button class="w-full border border-on-surface text-on-surface py-3 font-label-caps text-label-caps hover:bg-on-surface hover:text-surface transition-colors mt-auto">ADD TO CART</button>
</div>
<!-- Product 2 -->
<div class="group border border-secondary-container/20 p-6 flex flex-col items-center text-center hover:border-primary-container/50 transition-colors bg-surface">
<div class="w-32 h-32 bg-surface-container-low mb-6 flex items-center justify-center p-4">
<img class="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs4xrIPXY6f4gDTl6uPHulepjCYJFpq8eaUZAqc1sSAxYappBNyv5btTy9ObTCtMjr2XKOUtcUtMXhTW1N2q-i6hTqaXLqXBddtDEAomVkAkeSTX41HwfaUSo8EJ0gjYp4ioAQoO8xhxcJgbClgZbOaW5QP9MHMKeNVc3QdAe6aKZCDB_M6O2xCm9NmQXVkWjUmQotaryANPZVkpDj4vT-2jalhVRUsHpVZcWBb-860RviIVRd3LqL3A94uqPpZ-__ttVfHBzFJhE"/>
</div>
<h3 class="font-button text-button text-on-surface mb-2">AURA DAILY GREENS</h3>
<p class="font-body-md text-[14px] text-on-surface-variant mb-4">$75.00</p>
<button class="w-full border border-on-surface text-on-surface py-3 font-label-caps text-label-caps hover:bg-on-surface hover:text-surface transition-colors mt-auto">ADD TO CART</button>
</div>
<!-- Product 3 -->
<div class="group border border-secondary-container/20 p-6 flex flex-col items-center text-center hover:border-primary-container/50 transition-colors bg-surface">
<div class="w-32 h-32 bg-surface-container-low mb-6 flex items-center justify-center p-4">
<img class="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-uTc37LRm96UPArpWKD79LAfG7K58N71rfZGy2EFMYhIdu6-drJNl62YGF7eiBTv1fAC3gcqD26yegF7btyA9vDj0_PNbXgELwXauvuZYRroF7_dgyMpjHnmClNXNCLTj0N5nQn7ojmiaYS_rFxG8pP_YVrDiHDusRR817H3OEEUdGxRfofqee_TfI0gYvGp8PBMHYIOo_urUl-AVPIkhCzu2kNwsuuPYcKOSFmaSpFnwVfruyWoeDvfblupKlL5n5GHJvfq3MQU"/>
</div>
<h3 class="font-button text-button text-on-surface mb-2">TRAVEL FLASK</h3>
<p class="font-body-md text-[14px] text-on-surface-variant mb-4">$45.00</p>
<button class="w-full border border-on-surface text-on-surface py-3 font-label-caps text-label-caps hover:bg-on-surface hover:text-surface transition-colors mt-auto">ADD TO CART</button>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-on-surface dark:bg-surface-container-lowest text-primary-container w-full bg-on-surface">
<div class="flex flex-col items-center py-section-padding-v px-section-padding-h max-w-max-width mx-auto gap-stack-lg">
<a class="font-display-lg text-headline-md text-surface dark:text-on-surface tracking-tighter opacity-90 hover:opacity-100 transition-opacity" href="#">AURA</a>
<nav class="flex flex-wrap justify-center gap-gutter">
<a class="font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors hover:text-primary-container transition-colors opacity-90 hover:opacity-100 transition-opacity" href="#">PRIVACY</a>
<a class="font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors hover:text-primary-container transition-colors opacity-90 hover:opacity-100 transition-opacity" href="#">TERMS</a>
<a class="font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors hover:text-primary-container transition-colors opacity-90 hover:opacity-100 transition-opacity" href="#">SHIPPING</a>
<a class="font-body-md text-body-md text-secondary-fixed-dim hover:text-surface transition-colors hover:text-primary-container transition-colors opacity-90 hover:opacity-100 transition-opacity" href="#">CONTACT</a>
</nav>
<div class="w-full h-[1px] bg-secondary-fixed-dim/20 mt-stack-sm mb-stack-sm"></div>
<p class="font-body-md text-body-md text-secondary-fixed-dim text-sm text-center">© 2024 AURA PERFORMANCE. ALL RIGHTS RESERVED.</p>
</div>
</footer>
</body></html>
