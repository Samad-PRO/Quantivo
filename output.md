## Quantivo - Premium SaaS Finance Landing Page
`html
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Quantivo — Wealth Redefined</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        @keyframes subtle-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .float-animation { animation: subtle-float 6s ease-in-out infinite; }
        
        .glass-card {
            background: rgba(22, 34, 61, 0.1);
            backdrop-filter: blur(16px);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.2s ease-in-out;
        }
        .glass-card:hover {
            transform: translateY(-2px);
            backdrop-filter: blur(20px);
            box-shadow: 0 10px 30px -10px rgba(192, 193, 255, 0.15);
        }

        .glow-border {
            position: relative;
        }
        .glow-border::after {
            content: "";
            position: absolute;
            inset: -1px;
            background: linear-gradient(45deg, transparent, #c0c1ff, transparent);
            border-radius: inherit;
            z-index: -1;
            opacity: 0.5;
        }

        .gradient-text {
            background: linear-gradient(to right, #e1dfff, #c0c1ff, #bac6e9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% auto;
            animation: textShine 4s linear infinite;
        }

        @keyframes textShine {
            to { background-position: 200% center; }
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "background": "#051424",
                      "error": "#ffb4ab",
                      "surface-container-high": "#1c2b3c",
                      "tertiary-fixed-dim": "#bfc6e0",
                      "on-tertiary-container": "#4a5268",
                      "on-primary-container": "#4b4d83",
                      "inverse-on-surface": "#233143",
                      "primary": "#e1dfff",
                      "on-primary-fixed": "#131449",
                      "surface": "#051424",
                      "surface-dim": "#051424",
                      "on-error-container": "#ffdad6",
                      "secondary-container": "#3d4966",
                      "primary-fixed-dim": "#c0c1ff",
                      "on-surface-variant": "#c7c5d0",
                      "surface-tint": "#c0c1ff",
                      "surface-container-highest": "#273647",
                      "primary-container": "#c0c1ff",
                      "secondary": "#bac6e9",
                      "on-tertiary-fixed-variant": "#3f465c",
                      "on-error": "#690005",
                      "on-surface": "#d4e4fa",
                      "secondary-fixed": "#d9e2ff",
                      "on-primary": "#292b5e",
                      "inverse-primary": "#585990",
                      "primary-fixed": "#e1e0ff",
                      "on-secondary-container": "#acb8da",
                      "on-primary-fixed-variant": "#404176",
                      "outline": "#918f9a",
                      "on-secondary-fixed-variant": "#3b4663",
                      "tertiary-container": "#bfc6e0",
                      "on-secondary-fixed": "#0e1b35",
                      "surface-container-lowest": "#010f1f",
                      "on-tertiary": "#283044",
                      "error-container": "#93000a",
                      "surface-bright": "#2c3a4c",
                      "inverse-surface": "#d4e4fa",
                      "secondary-fixed-dim": "#bac6e9",
                      "surface-variant": "#273647",
                      "outline-variant": "#46464f",
                      "tertiary": "#dbe2fd",
                      "on-secondary": "#24304c",
                      "on-tertiary-fixed": "#131b2e",
                      "surface-container-low": "#0d1c2d",
                      "tertiary-fixed": "#dbe2fd",
                      "surface-container": "#122131",
                      "on-background": "#d4e4fa"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "md": "24px",
                      "margin-mobile": "16px",
                      "base": "4px",
                      "xl": "64px",
                      "margin-desktop": "48px",
                      "gutter": "24px",
                      "xs": "8px",
                      "sm": "16px",
                      "lg": "40px"
              },
              "fontFamily": {
                      "headline-lg-mobile": ["Inter"],
                      "data-lg": ["JetBrains Mono"],
                      "data-sm": ["JetBrains Mono"],
                      "headline-lg": ["Inter"],
                      "label-caps": ["Inter"],
                      "display-lg": ["Inter"],
                      "body-md": ["Inter"]
              },
              "fontSize": {
                      "headline-lg-mobile": ["24px", {"lineHeight": "1.2", "fontWeight": "600"}],
                      "data-lg": ["20px", {"lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "500"}],
                      "data-sm": ["13px", {"lineHeight": "1.2", "fontWeight": "400"}],
                      "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                      "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                      "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                      "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
              }
            },
          },
        }
      </script>
</head>
<body class="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container font-body-md overflow-x-hidden">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10 shadow-sm">
<div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-[1440px] mx-auto">
<div class="flex items-center gap-2">
<span class="text-headline-lg font-headline-lg text-primary tracking-tight">Quantivo</span>
</div>
<div class="hidden md:flex items-center gap-8">
<a class="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="#features">Features</a>
<a class="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="#pricing">Pricing</a>
<a class="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="#faq">FAQ</a>
</div>
<div class="flex items-center gap-4">
<button class="hidden sm:block text-primary font-body-md px-4 py-2 hover:bg-surface-container-highest rounded-full transition-all">Log In</button>
<button class="bg-primary text-on-primary font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(192,193,255,0.15)]">Get Started</button>
</div>
</div>
</nav>
<!-- Hero Section -->
<section class="relative pt-32 pb-20 md:pt-48 md:pb-32 px-margin-mobile overflow-hidden">
<div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none opacity-20">
<div class="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent blur-[120px]"></div>
</div>
<div class="max-w-[1440px] mx-auto text-center relative z-10">
<span class="inline-block font-label-caps text-label-caps text-primary border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">Intelligent Portfolio Management</span>
<h1 class="font-display-lg text-display-lg md:text-[80px] leading-[1] mb-8 max-w-4xl mx-auto gradient-text">Quantivo: Wealth Redefined</h1>
<p class="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body-md">
                Experience a premium command center for your net worth. Real-time analytics, institutional-grade insights, and automated wealth tracking in one glass-morphic interface.
            </p>
<div class="flex flex-col sm:flex-row gap-4 justify-center mb-20">
<button class="bg-primary text-on-primary font-bold px-8 py-4 rounded-full text-lg shadow-[0_0_30px_rgba(192,193,255,0.25)] hover:scale-105 transition-all">Start Free Trial</button>
<button class="border border-outline-variant text-on-surface font-bold px-8 py-4 rounded-full text-lg hover:bg-white/5 backdrop-blur-md transition-all">Watch Demo</button>
</div>
<!-- Mock Dashboard Screenshot -->
<div class="relative max-w-5xl mx-auto float-animation">
<div class="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-xl blur opacity-30"></div>
<div class="relative glass-card rounded-xl overflow-hidden shadow-2xl border border-white/10">
<img class="w-full h-auto opacity-90" data-alt="A professional SaaS financial dashboard screenshot featuring sleek dark mode glassmorphism aesthetics. The interface displays complex data visualizations, including a deep violet and electric blue line chart showing net worth growth, a bento-grid style layout with circular asset allocation widgets, and recent transaction lists with high-contrast text. The lighting is soft and atmospheric with a futuristic, high-end feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLP6QEVBYdp2vHiC_A5xtQhcefGP0E1pWcNdr754lUY2ZKOgFiggeG4vlB0ZfOHJaukI16KZqMeDh_3_tGu_X-4UIVAsbpxNJVucxrBSCJ-hO3uwd37ZzjtklbGh3Xnij-ynVCUVv3ZTsy3xOEUIa7kWfS9Yw8xDxMT5xtUsU4E2uNj8XYLVsbZtPPOafus_i8IOtlVKcuZ5CUijHDVPrvHzE_Xatz_zv4sRaEHHpp8fgV2BSs1hOpmjsh9aO0D15vPNze9opi3sY"/>
</div>
</div>
</div>
</section>
<!-- Stats Bar -->
<section class="py-12 bg-surface-container-low/50 backdrop-blur-md border-y border-white/5">
<div class="max-w-[1440px] mx-auto px-margin-mobile grid grid-cols-2 md:grid-cols-4 gap-8">
<div class="text-center">
<div class="font-data-lg text-display-lg text-primary mb-1">120k+</div>
<div class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Active Users</div>
</div>
<div class="text-center">
<div class="font-data-lg text-display-lg text-primary mb-1">$48M</div>
<div class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Assets Tracked</div>
</div>
<div class="text-center">
<div class="font-data-lg text-display-lg text-primary mb-1">4.9/5</div>
<div class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">App Rating</div>
</div>
<div class="text-center">
<div class="font-data-lg text-display-lg text-primary mb-1">99.9%</div>
<div class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Global Uptime</div>
</div>
</div>
</section>
<!-- Features Grid -->
<section class="py-24 px-margin-mobile bg-background relative overflow-hidden" id="features">
<div class="max-w-[1440px] mx-auto relative z-10">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg md:text-[48px] text-primary mb-4">Institutional Tools for Everyone</h2>
<p class="text-on-surface-variant max-w-2xl mx-auto">Precision engineering meets aesthetic excellence. Manage your wealth with tools previously reserved for the ultra-high net worth.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Feature 1 -->
<div class="glass-card p-8 rounded-xl flex flex-col gap-4">
<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">insights</span>
</div>
<h3 class="font-headline-lg text-2xl text-on-surface">Predictive Analytics</h3>
<p class="text-on-surface-variant">AI-driven forecasts based on historical market data and your unique spending patterns.</p>
</div>
<!-- Feature 2 -->
<div class="glass-card p-8 rounded-xl flex flex-col gap-4">
<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">account_balance_wallet</span>
</div>
<h3 class="font-headline-lg text-2xl text-on-surface">Universal Sync</h3>
<p class="text-on-surface-variant">Connect over 15,000+ financial institutions globally with military-grade encryption.</p>
</div>
<!-- Feature 3 -->
<div class="glass-card p-8 rounded-xl flex flex-col gap-4">
<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">security</span>
</div>
<h3 class="font-headline-lg text-2xl text-on-surface">Private Vault</h3>
<p class="text-on-surface-variant">Zero-knowledge encryption for your most sensitive financial documents and notes.</p>
</div>
<!-- Feature 4 -->
<div class="glass-card p-8 rounded-xl flex flex-col gap-4">
<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">monitoring</span>
</div>
<h3 class="font-headline-lg text-2xl text-on-surface">Tax Optimization</h3>
<p class="text-on-surface-variant">Automatic tax-loss harvesting suggestions to maximize your long-term returns.</p>
</div>
<!-- Feature 5 -->
<div class="glass-card p-8 rounded-xl flex flex-col gap-4">
<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">hub</span>
</div>
<h3 class="font-headline-lg text-2xl text-on-surface">Asset Allocation</h3>
<p class="text-on-surface-variant">Real-time rebalancing alerts to keep your portfolio aligned with your risk profile.</p>
</div>
<!-- Feature 6 -->
<div class="glass-card p-8 rounded-xl flex flex-col gap-4">
<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">notifications_active</span>
</div>
<h3 class="font-headline-lg text-2xl text-on-surface">Smart Alerts</h3>
<p class="text-on-surface-variant">Customizable notifications for market moves, large transactions, and goal milestones.</p>
</div>
</div>
</div>
</section>
<!-- Pricing Section -->
<section class="py-24 px-margin-mobile bg-surface-container-lowest relative" id="pricing">
<div class="max-w-[1440px] mx-auto text-center">
<h2 class="font-headline-lg text-headline-lg md:text-[48px] text-primary mb-12">Simple, Transparent Pricing</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<!-- Free Card -->
<div class="glass-card p-10 rounded-2xl border border-white/5 flex flex-col text-left">
<div class="mb-8">
<h3 class="text-2xl font-headline-lg text-on-surface mb-2">Free</h3>
<p class="text-on-surface-variant mb-6">Essential tracking for beginners</p>
<div class="flex items-baseline gap-1">
<span class="text-4xl font-data-lg text-primary">$0</span>
<span class="text-on-surface-variant">/month</span>
</div>
</div>
<ul class="space-y-4 mb-10 flex-grow">
<li class="flex items-center gap-3 text-on-surface-variant">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Up to 3 bank accounts
                        </li>
<li class="flex items-center gap-3 text-on-surface-variant">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Standard market data
                        </li>
<li class="flex items-center gap-3 text-on-surface-variant">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Basic wealth tracking
                        </li>
</ul>
<button class="w-full py-4 rounded-xl border border-outline-variant font-bold hover:bg-white/5 transition-all">Get Started</button>
</div>
<!-- Pro Card -->
<div class="glass-card p-10 rounded-2xl glow-border border border-primary/30 flex flex-col text-left relative overflow-hidden bg-primary/5">
<div class="absolute top-4 right-4 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Popular</div>
<div class="mb-8">
<h3 class="text-2xl font-headline-lg text-primary mb-2">Professional</h3>
<p class="text-on-surface-variant mb-6">Complete wealth command center</p>
<div class="flex items-baseline gap-1">
<span class="text-4xl font-data-lg text-primary">$29</span>
<span class="text-on-surface-variant">/month</span>
</div>
</div>
<ul class="space-y-4 mb-10 flex-grow">
<li class="flex items-center gap-3 text-on-surface">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Unlimited bank &amp; crypto sync
                        </li>
<li class="flex items-center gap-3 text-on-surface">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Advanced AI predictive insights
                        </li>
<li class="flex items-center gap-3 text-on-surface">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Tax-loss harvesting automation
                        </li>
<li class="flex items-center gap-3 text-on-surface">
<span class="material-symbols-outlined text-primary text-xl">check_circle</span>
                            24/7 Priority support
                        </li>
</ul>
<button class="w-full py-4 rounded-xl bg-primary text-on-primary font-bold shadow-[0_0_20px_rgba(192,193,255,0.3)] hover:scale-[1.02] transition-all">Choose Pro</button>
</div>
</div>
</div>
</section>
<!-- Testimonials -->
<section class="py-24 px-margin-mobile max-w-[1440px] mx-auto">
<h2 class="font-headline-lg text-headline-lg text-center text-primary mb-16">Trusted by the Modern Investor</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="glass-card p-8 rounded-xl">
<div class="flex gap-1 text-primary mb-4">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="italic text-on-surface mb-6">"The best wealth tracking app I've ever used. The visual clarity and AI insights actually saved me thousands in tax planning."</p>
<div class="flex items-center gap-4">
<img class="w-12 h-12 rounded-full object-cover" data-alt="A portrait of a sophisticated young professional male with short dark hair and a professional blazer. He has a warm, confident smile and is set against a blurred high-end office background with modern architecture and soft blue accent lighting. The photography style is sharp, clean, and corporate." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQtkucrUp9q3TDXPfd-Cdox6zFK65Td34xVhmPHlieZckOk8n3MWhPKCBOfruf7r-Q3gV2UDuQdBxSpn7QRR-os48ZuiAl5xS9_nvLbCXLN0jGGwm83HcBJapkyIq0VHsAwcmBpGMTrGF5hTH6VyWpf1n31imGfmN8j9KodwCcaWUPvbVLLL4cAyC2IzNQBQU4AiM3Og6epCtauPt9sVBxq8iiLYtcX7HRuDtZ_VKLXs1IRbN3_FEOPdT3Qpgt4MY9Hic9ccvbX1I"/>
<div>
<div class="font-bold text-on-surface">Jameson Vance</div>
<div class="text-xs text-on-surface-variant uppercase">Venture Partner</div>
</div>
</div>
</div>
<div class="glass-card p-8 rounded-xl">
<div class="flex gap-1 text-primary mb-4">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="italic text-on-surface mb-6">"Clean, fast, and secure. Finally a financial dashboard that looks as good as it performs. I've consolidated everything here."</p>
<div class="flex items-center gap-4">
<img class="w-12 h-12 rounded-full object-cover" data-alt="A portrait of a confident female executive with elegant business attire. She has a friendly expression, soft lighting, and the photo is taken in a minimalist, luxury living room setting with expansive windows and cool-toned morning light. The aesthetic is premium and minimalist." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrMoTOfNDR_GHQWmVmPsg82UcdWNkadYo38ZhUC6lBosnptnprx95erQVgCPHlGIgvsbfOTnpbWz6LZYkWmkUZdQnSzir6DVdqVSz379Eh4iG5tznqjAQG6vR3HHWpnX-iiZwkMeowR0VJohY1aXuERtzGlyHSBB8CHsV1w3O06DLgBb4WDdmNWwR6ZYXa_Qh1rJUQlz5bntoOOkWFiH6lP4brUrQwY_gnKSw9VGfVzJg0yLqTbPYgvalNUXT2udAqMoBQJjGMBY4"/>
<div>
<div class="font-bold text-on-surface">Sarah Sterling</div>
<div class="text-xs text-on-surface-variant uppercase">Portfolio Manager</div>
</div>
</div>
</div>
<div class="glass-card p-8 rounded-xl">
<div class="flex gap-1 text-primary mb-4">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="italic text-on-surface mb-6">"The real-time rebalancing alerts changed my investment strategy. It’s like having a quant analyst in your pocket."</p>
<div class="flex items-center gap-4">
<img class="w-12 h-12 rounded-full object-cover" data-alt="A close-up portrait of a tech-savvy investor in a modern workspace. He wears stylish glasses and a neutral-toned sweater. In the background, multiple computer monitors with glowing financial charts are visible but blurred. The lighting is dominated by a soft indigo and violet glow from the screens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDacGU8fHDVnsiCRTJlbgFC8BPekFip1elwp3hWMUoFVEua7OZSex6PiWBNUwoB8MuI2QsEQvv8ulw_QQlz-z_vbGy9WFt_KJlo4KaCgGvylEeTHtcBpFxiBOSgyvu0XbeNLIlHU9STGvbVnV_pAolZdBI04x1rm2wBDxvjwB_8h_qTYNT5z8w-qyAOFeJYG47LLWk54gPt7ZwHoBKKs0WaBNbMT6nL48jxePYaVG2j7w_wKNIo-Y9dGiI8n5DMpKkSaP5wIrgCTo4"/>
<div>
<div class="font-bold text-on-surface">Leo Chen</div>
<div class="text-xs text-on-surface-variant uppercase">Tech Entrepreneur</div>
</div>
</div>
</div>
</div>
</section>
<!-- FAQ Accordion -->
<section class="py-24 px-margin-mobile bg-surface-container-low/30" id="faq">
<div class="max-w-3xl mx-auto">
<h2 class="font-headline-lg text-headline-lg text-center text-primary mb-12">Frequently Asked Questions</h2>
<div class="space-y-4">
<div class="glass-card rounded-xl overflow-hidden border border-white/5">
<button class="w-full p-6 text-left flex justify-between items-center group transition-colors hover:bg-white/5" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.arrow').classList.toggle('rotate-180')">
<span class="font-bold text-on-surface">How secure is my financial data?</span>
<span class="material-symbols-outlined arrow transition-transform duration-300">expand_more</span>
</button>
<div class="p-6 pt-0 text-on-surface-variant border-t border-white/5 hidden">
                        We use AES-256 military-grade encryption and OIDC/OAuth2 protocols for all banking connections. We never store your passwords and have read-only access to your financial data.
                    </div>
</div>
<div class="glass-card rounded-xl overflow-hidden border border-white/5">
<button class="w-full p-6 text-left flex justify-between items-center group transition-colors hover:bg-white/5" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.arrow').classList.toggle('rotate-180')">
<span class="font-bold text-on-surface">Can I export my data for tax filing?</span>
<span class="material-symbols-outlined arrow transition-transform duration-300">expand_more</span>
</button>
<div class="p-6 pt-0 text-on-surface-variant border-t border-white/5 hidden">
                        Yes, Quantivo supports CSV, PDF, and direct XML exports compatible with TurboTax, H&amp;R Block, and most major tax software platforms.
                    </div>
</div>
<div class="glass-card rounded-xl overflow-hidden border border-white/5">
<button class="w-full p-6 text-left flex justify-between items-center group transition-colors hover:bg-white/5" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.arrow').classList.toggle('rotate-180')">
<span class="font-bold text-on-surface">Do you support international bank accounts?</span>
<span class="material-symbols-outlined arrow transition-transform duration-300">expand_more</span>
</button>
<div class="p-6 pt-0 text-on-surface-variant border-t border-white/5 hidden">
                        Absolutely. We support over 15,000 institutions across North America, Europe, Asia, and Oceania, with real-time currency conversion for 160+ fiat currencies.
                    </div>
</div>
</div>
</div>
</section>
<!-- Footer CTA -->
<footer class="py-24 px-margin-mobile border-t border-white/5 relative overflow-hidden">
<div class="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full h-64 bg-primary/20 blur-[100px] pointer-events-none"></div>
<div class="max-w-[1440px] mx-auto text-center relative z-10">
<h2 class="font-display-lg text-display-lg text-primary mb-6">Ready to redefine your wealth?</h2>
<p class="text-on-surface-variant max-w-xl mx-auto mb-10 text-lg">Join 120,000+ investors who have upgraded their financial command center. Start your 14-day free Pro trial today.</p>
<div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
<button class="bg-primary text-on-primary font-bold px-10 py-4 rounded-full text-lg shadow-[0_0_40px_rgba(192,193,255,0.3)] hover:scale-105 transition-all">Start Free Trial</button>
<button class="text-on-surface font-bold px-10 py-4 rounded-full text-lg hover:bg-white/5 transition-all">Contact Sales</button>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-white/5 pt-16">
<div>
<div class="text-primary font-headline-lg text-2xl mb-6">Quantivo</div>
<p class="text-on-surface-variant text-sm leading-relaxed">The premier wealth command center for the modern investor. Precision, security, and elegance in one platform.</p>
</div>
<div>
<div class="text-on-surface font-bold mb-4">Product</div>
<ul class="space-y-2 text-on-surface-variant text-sm">
<li><a class="hover:text-primary transition-colors" href="#">Features</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Security</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Integrations</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<div class="text-on-surface font-bold mb-4">Company</div>
<ul class="space-y-2 text-on-surface-variant text-sm">
<li><a class="hover:text-primary transition-colors" href="#">About Us</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Careers</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Blog</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<div class="text-on-surface font-bold mb-4">Support</div>
<ul class="space-y-2 text-on-surface-variant text-sm">
<li><a class="hover:text-primary transition-colors" href="#">Help Center</a></li>
<li><a class="hover:text-primary transition-colors" href="#">API Docs</a></li>
<li><a class="hover:text-primary transition-colors" href="#">System Status</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div class="mt-16 pt-8 border-t border-white/5 text-xs text-on-surface-variant flex flex-col md:flex-row justify-between gap-4">
<p>© 2024 Quantivo Finance Inc. All rights reserved.</p>
<div class="flex gap-6">
<a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="hover:text-primary transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>
<script>
        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Simple visibility observer for scroll animations
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.glass-card').forEach(card => {
            card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(card);
        });
    </script>
</body></html>
`

## Quantivo - Secure Login
`html
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Quantivo | Secure Login</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind Config Verbatim -->
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "background": "#051424",
                    "error": "#ffb4ab",
                    "surface-container-high": "#1c2b3c",
                    "tertiary-fixed-dim": "#bfc6e0",
                    "on-tertiary-container": "#4a5268",
                    "on-primary-container": "#4b4d83",
                    "inverse-on-surface": "#233143",
                    "primary": "#e1dfff",
                    "on-primary-fixed": "#131449",
                    "surface": "#051424",
                    "surface-dim": "#051424",
                    "on-error-container": "#ffdad6",
                    "secondary-container": "#3d4966",
                    "primary-fixed-dim": "#c0c1ff",
                    "on-surface-variant": "#c7c5d0",
                    "surface-tint": "#c0c1ff",
                    "surface-container-highest": "#273647",
                    "primary-container": "#c0c1ff",
                    "secondary": "#bac6e9",
                    "on-tertiary-fixed-variant": "#3f465c",
                    "on-error": "#690005",
                    "on-surface": "#d4e4fa",
                    "secondary-fixed": "#d9e2ff",
                    "on-primary": "#292b5e",
                    "inverse-primary": "#585990",
                    "primary-fixed": "#e1e0ff",
                    "on-secondary-container": "#acb8da",
                    "on-primary-fixed-variant": "#404176",
                    "outline": "#918f9a",
                    "on-secondary-fixed-variant": "#3b4663",
                    "tertiary-container": "#bfc6e0",
                    "on-secondary-fixed": "#0e1b35",
                    "surface-container-lowest": "#010f1f",
                    "on-tertiary": "#283044",
                    "error-container": "#93000a",
                    "surface-bright": "#2c3a4c",
                    "inverse-surface": "#d4e4fa",
                    "secondary-fixed-dim": "#bac6e9",
                    "surface-variant": "#273647",
                    "outline-variant": "#46464f",
                    "tertiary": "#dbe2fd",
                    "on-secondary": "#24304c",
                    "on-tertiary-fixed": "#131b2e",
                    "surface-container-low": "#0d1c2d",
                    "tertiary-fixed": "#dbe2fd",
                    "surface-container": "#122131",
                    "on-background": "#d4e4fa"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "md": "24px",
                    "margin-mobile": "16px",
                    "base": "4px",
                    "xl": "64px",
                    "margin-desktop": "48px",
                    "gutter": "24px",
                    "xs": "8px",
                    "sm": "16px",
                    "lg": "40px"
            },
            "fontFamily": {
                    "headline-lg-mobile": ["Inter"],
                    "data-lg": ["JetBrains Mono"],
                    "data-sm": ["JetBrains Mono"],
                    "headline-lg": ["Inter"],
                    "label-caps": ["Inter"],
                    "display-lg": ["Inter"],
                    "body-md": ["Inter"]
            },
            "fontSize": {
                    "headline-lg-mobile": ["24px", {"lineHeight": "1.2", "fontWeight": "600"}],
                    "data-lg": ["20px", {"lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "500"}],
                    "data-sm": ["13px", {"lineHeight": "1.2", "fontWeight": "400"}],
                    "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }

        .glass-card {
            background-color: rgba(22, 34, 61, 0.1);
            backdrop-filter: blur(16px);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(1, 15, 31, 0.4);
        }

        .input-glow:focus {
            box-shadow: 0 0 15px rgba(192, 193, 255, 0.15);
        }

        .google-btn-hover:hover {
            box-shadow: 0 0 20px rgba(192, 193, 255, 0.2);
            transform: translateY(-1px);
        }

        .ambient-glow {
            position: fixed;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(192, 193, 255, 0.05) 0%, rgba(5, 20, 36, 0) 70%);
            pointer-events: none;
            z-index: 0;
        }
        
        .pulse-primary {
            animation: pulse-glow 4s ease-in-out infinite;
        }

        @keyframes pulse-glow {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(1.1); }
        }
    </style>
</head>
<body class="bg-background text-on-background min-h-screen flex items-center justify-center font-body-md relative overflow-hidden">
<!-- Ambient background effects -->
<div class="ambient-glow top-[-200px] left-[-200px] pulse-primary"></div>
<div class="ambient-glow bottom-[-200px] right-[-200px] pulse-primary" style="animation-delay: 2s;"></div>
<main class="relative z-10 w-full max-w-[440px] px-margin-mobile">
<!-- Logo Area -->
<div class="flex flex-col items-center mb-lg">
<h1 class="font-headline-lg text-headline-lg text-primary tracking-tight mb-xs">Quantivo</h1>
<p class="text-on-surface-variant text-body-md text-center opacity-80">Premium Financial Command Center</p>
</div>
<!-- Login Card -->
<div class="glass-card rounded-xl p-md border border-white/5 transition-all duration-300">
<div class="space-y-sm">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-md">Welcome back</h2>
<!-- Google OAuth -->
<button class="google-btn-hover w-full flex items-center justify-center gap-sm bg-surface-container-high/50 border border-white/10 rounded-lg py-sm px-md transition-all duration-200 group">
<svg class="w-5 h-5" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
</svg>
<span class="text-on-surface font-medium text-body-md">Sign in with Google</span>
</button>
<div class="relative py-md">
<div class="absolute inset-0 flex items-center">
<div class="w-full border-t border-white/5"></div>
</div>
<div class="relative flex justify-center text-label-caps uppercase">
<span class="bg-surface-container/10 backdrop-blur-xl px-sm text-outline-variant font-label-caps">Or with email</span>
</div>
</div>
<!-- Email/Password Form -->
<form class="space-y-md" onsubmit="return false">
<div class="space-y-base">
<label class="font-label-caps text-label-caps text-on-surface-variant px-1" for="email">Email Address</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">mail</span>
<input class="w-full bg-surface-container-lowest border border-white/10 rounded-lg py-3 pl-10 pr-md text-on-surface focus:border-primary focus:ring-0 input-glow transition-all duration-200 placeholder:text-outline-variant/50" id="email" placeholder="name@company.com" type="email"/>
</div>
</div>
<div class="space-y-base">
<div class="flex justify-between items-center px-1">
<label class="font-label-caps text-label-caps text-on-surface-variant" for="password">Password</label>
<a class="text-primary/70 text-label-caps hover:text-primary transition-colors duration-200" href="#">Forgot Password?</a>
</div>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">lock</span>
<input class="w-full bg-surface-container-lowest border border-white/10 rounded-lg py-3 pl-10 pr-md text-on-surface focus:border-primary focus:ring-0 input-glow transition-all duration-200 placeholder:text-outline-variant/50" id="password" placeholder="••••••••" type="password"/>
</div>
</div>
<div class="flex items-center gap-sm px-1">
<input class="w-4 h-4 rounded border-white/10 bg-surface-container-lowest text-primary focus:ring-primary focus:ring-offset-0" id="remember" type="checkbox"/>
<label class="text-body-md text-on-surface-variant text-sm" for="remember">Keep me logged in for 30 days</label>
</div>
<button class="w-full bg-primary text-on-primary font-bold py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(192,193,255,0.1)]">
                        Sign In
                    </button>
</form>
</div>
<!-- Sign Up Footer -->
<div class="mt-lg pt-md border-t border-white/5 text-center">
<p class="text-on-surface-variant text-body-md">
                    Don't have an account? 
                    <a class="text-primary font-semibold hover:underline decoration-primary/30 underline-offset-4 transition-all" href="#">Sign up</a>
</p>
</div>
</div>
<!-- Secondary Links -->
<div class="mt-md flex justify-center gap-md text-label-caps text-outline-variant opacity-60">
<a class="hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-on-surface transition-colors" href="#">Terms of Service</a>
<a class="hover:text-on-surface transition-colors" href="#">Security</a>
</div>
</main>
<!-- Background Decoration Image -->
<div class="fixed inset-0 z-[-1] opacity-20 pointer-events-none grayscale">
<div class="w-full h-full bg-cover bg-center" data-alt="A highly detailed and abstract architectural shot of a modern financial district at night with glowing blue and violet lights reflecting off sharp glass facades and steel structures. The scene is shot from a low angle looking up, creating a sense of scale and authority. Dark navy shadows contrast with luminous primary violet accents, maintaining a premium SaaS brand aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCprQC9PKecPmYsKxTuDcbL_VfE6zbmuhq1tzAfATamHzt3cHasMXH5P2ZEI8V-RMBTqNsxl4DPv0tmyblag9B49kXbUDfK9hrkRGJYVDKp7fhFja9OsFpyARO3olMQQfJEgUfRa6RNe-HBjFeYDIbL-l1r3XhJOLDEmdd5drRfJFGJ7JDTQL-Vih_S-Fq4aNMWaYj9aJuqz_sPy1k2GaGXBQTHSc3epsAqJPL2w3aSipEnTUTtxxUbrRJBDFtbT5LaU6T7lrA1NeI')"></div>
</div>
<script>
        // Simple micro-interaction for input states
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.parentElement.classList.add('scale-[1.01]');
            });
            input.addEventListener('blur', () => {
                input.parentElement.parentElement.classList.remove('scale-[1.01]');
            });
        });

        // Mouse follower atmospheric effect
        const glow = document.querySelector('.ambient-glow');
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            // Move the first glow subtly with the mouse
            const moveX = (x - window.innerWidth / 2) / 25;
            const moveY = (y - window.innerHeight / 2) / 25;
            
            glow.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    </script>
</body></html>
`

