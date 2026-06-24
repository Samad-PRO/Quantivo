'use client'

export default function LandingPage() {
  return (
    <>

{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10 shadow-sm">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-[1440px] mx-auto">
<div className="flex items-center gap-2">
<span className="text-headline-lg font-headline-lg text-primary tracking-tight">Quantivo</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="#features">Features</a>
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="#pricing">Pricing</a>
<a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-200" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:block text-primary font-body-md px-4 py-2 hover:bg-surface-container-highest rounded-full transition-all">Log In</button>
<button className="bg-primary text-on-primary font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(192,193,255,0.15)]">Get Started</button>
</div>
</div>
</nav>
{/*  Hero Section  */}
<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-margin-mobile overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none opacity-20">
<div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent blur-[120px]"></div>
</div>
<div className="max-w-[1440px] mx-auto text-center relative z-10">
<span className="inline-block font-label-caps text-label-caps text-primary border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">Intelligent Portfolio Management</span>
<h1 className="font-display-lg text-display-lg md:text-[80px] leading-[1] mb-8 max-w-4xl mx-auto gradient-text">Quantivo: Wealth Redefined</h1>
<p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body-md">
                Experience a premium command center for your net worth. Real-time analytics, institutional-grade insights, and automated wealth tracking in one glass-morphic interface.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
<button className="bg-primary text-on-primary font-bold px-8 py-4 rounded-full text-lg shadow-[0_0_30px_rgba(192,193,255,0.25)] hover:scale-105 transition-all">Start Free Trial</button>
<button className="border border-outline-variant text-on-surface font-bold px-8 py-4 rounded-full text-lg hover:bg-white/5 backdrop-blur-md transition-all">Watch Demo</button>
</div>
{/*  Mock Dashboard Screenshot  */}
<div className="relative max-w-5xl mx-auto float-animation">
<div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-xl blur opacity-30"></div>
<div className="relative glass-card rounded-xl overflow-hidden shadow-2xl border border-white/10">
<img className="w-full h-auto opacity-90" data-alt="A professional SaaS financial dashboard screenshot featuring sleek dark mode glassmorphism aesthetics. The interface displays complex data visualizations, including a deep violet and electric blue line chart showing net worth growth, a bento-grid style layout with circular asset allocation widgets, and recent transaction lists with high-contrast text. The lighting is soft and atmospheric with a futuristic, high-end feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLP6QEVBYdp2vHiC_A5xtQhcefGP0E1pWcNdr754lUY2ZKOgFiggeG4vlB0ZfOHJaukI16KZqMeDh_3_tGu_X-4UIVAsbpxNJVucxrBSCJ-hO3uwd37ZzjtklbGh3Xnij-ynVCUVv3ZTsy3xOEUIa7kWfS9Yw8xDxMT5xtUsU4E2uNj8XYLVsbZtPPOafus_i8IOtlVKcuZ5CUijHDVPrvHzE_Xatz_zv4sRaEHHpp8fgV2BSs1hOpmjsh9aO0D15vPNze9opi3sY"/>
</div>
</div>
</div>
</section>
{/*  Stats Bar  */}
<section className="py-12 bg-surface-container-low/50 backdrop-blur-md border-y border-white/5">
<div className="max-w-[1440px] mx-auto px-margin-mobile grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="font-data-lg text-display-lg text-primary mb-1">120k+</div>
<div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Active Users</div>
</div>
<div className="text-center">
<div className="font-data-lg text-display-lg text-primary mb-1">$48M</div>
<div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Assets Tracked</div>
</div>
<div className="text-center">
<div className="font-data-lg text-display-lg text-primary mb-1">4.9/5</div>
<div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">App Rating</div>
</div>
<div className="text-center">
<div className="font-data-lg text-display-lg text-primary mb-1">99.9%</div>
<div className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Global Uptime</div>
</div>
</div>
</section>
{/*  Features Grid  */}
<section className="py-24 px-margin-mobile bg-background relative overflow-hidden" id="features">
<div className="max-w-[1440px] mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg md:text-[48px] text-primary mb-4">Institutional Tools for Everyone</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">Precision engineering meets aesthetic excellence. Manage your wealth with tools previously reserved for the ultra-high net worth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/*  Feature 1  */}
<div className="glass-card p-8 rounded-xl flex flex-col gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">insights</span>
</div>
<h3 className="font-headline-lg text-2xl text-on-surface">Predictive Analytics</h3>
<p className="text-on-surface-variant">AI-driven forecasts based on historical market data and your unique spending patterns.</p>
</div>
{/*  Feature 2  */}
<div className="glass-card p-8 rounded-xl flex flex-col gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
</div>
<h3 className="font-headline-lg text-2xl text-on-surface">Universal Sync</h3>
<p className="text-on-surface-variant">Connect over 15,000+ financial institutions globally with military-grade encryption.</p>
</div>
{/*  Feature 3  */}
<div className="glass-card p-8 rounded-xl flex flex-col gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">security</span>
</div>
<h3 className="font-headline-lg text-2xl text-on-surface">Private Vault</h3>
<p className="text-on-surface-variant">Zero-knowledge encryption for your most sensitive financial documents and notes.</p>
</div>
{/*  Feature 4  */}
<div className="glass-card p-8 rounded-xl flex flex-col gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">monitoring</span>
</div>
<h3 className="font-headline-lg text-2xl text-on-surface">Tax Optimization</h3>
<p className="text-on-surface-variant">Automatic tax-loss harvesting suggestions to maximize your long-term returns.</p>
</div>
{/*  Feature 5  */}
<div className="glass-card p-8 rounded-xl flex flex-col gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">hub</span>
</div>
<h3 className="font-headline-lg text-2xl text-on-surface">Asset Allocation</h3>
<p className="text-on-surface-variant">Real-time rebalancing alerts to keep your portfolio aligned with your risk profile.</p>
</div>
{/*  Feature 6  */}
<div className="glass-card p-8 rounded-xl flex flex-col gap-4">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-3xl">notifications_active</span>
</div>
<h3 className="font-headline-lg text-2xl text-on-surface">Smart Alerts</h3>
<p className="text-on-surface-variant">Customizable notifications for market moves, large transactions, and goal milestones.</p>
</div>
</div>
</div>
</section>
{/*  Pricing Section  */}
<section className="py-24 px-margin-mobile bg-surface-container-lowest relative" id="pricing">
<div className="max-w-[1440px] mx-auto text-center">
<h2 className="font-headline-lg text-headline-lg md:text-[48px] text-primary mb-12">Simple, Transparent Pricing</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
{/*  Free Card  */}
<div className="glass-card p-10 rounded-2xl border border-white/5 flex flex-col text-left">
<div className="mb-8">
<h3 className="text-2xl font-headline-lg text-on-surface mb-2">Free</h3>
<p className="text-on-surface-variant mb-6">Essential tracking for beginners</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-data-lg text-primary">$0</span>
<span className="text-on-surface-variant">/month</span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Up to 3 bank accounts
                        </li>
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Standard market data
                        </li>
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Basic wealth tracking
                        </li>
</ul>
<button className="w-full py-4 rounded-xl border border-outline-variant font-bold hover:bg-white/5 transition-all">Get Started</button>
</div>
{/*  Pro Card  */}
<div className="glass-card p-10 rounded-2xl glow-border border border-primary/30 flex flex-col text-left relative overflow-hidden bg-primary/5">
<div className="absolute top-4 right-4 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Popular</div>
<div className="mb-8">
<h3 className="text-2xl font-headline-lg text-primary mb-2">Professional</h3>
<p className="text-on-surface-variant mb-6">Complete wealth command center</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-data-lg text-primary">$29</span>
<span className="text-on-surface-variant">/month</span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-on-surface">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Unlimited bank &amp; crypto sync
                        </li>
<li className="flex items-center gap-3 text-on-surface">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Advanced AI predictive insights
                        </li>
<li className="flex items-center gap-3 text-on-surface">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                            Tax-loss harvesting automation
                        </li>
<li className="flex items-center gap-3 text-on-surface">
<span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                            24/7 Priority support
                        </li>
</ul>
<button className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold shadow-[0_0_20px_rgba(192,193,255,0.3)] hover:scale-[1.02] transition-all">Choose Pro</button>
</div>
</div>
</div>
</section>
{/*  Testimonials  */}
<section className="py-24 px-margin-mobile max-w-[1440px] mx-auto">
<h2 className="font-headline-lg text-headline-lg text-center text-primary mb-16">Trusted by the Modern Investor</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="glass-card p-8 rounded-xl">
<div className="flex gap-1 text-primary mb-4">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="italic text-on-surface mb-6">"The best wealth tracking app I've ever used. The visual clarity and AI insights actually saved me thousands in tax planning."</p>
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" data-alt="A portrait of a sophisticated young professional male with short dark hair and a professional blazer. He has a warm, confident smile and is set against a blurred high-end office background with modern architecture and soft blue accent lighting. The photography style is sharp, clean, and corporate." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQtkucrUp9q3TDXPfd-Cdox6zFK65Td34xVhmPHlieZckOk8n3MWhPKCBOfruf7r-Q3gV2UDuQdBxSpn7QRR-os48ZuiAl5xS9_nvLbCXLN0jGGwm83HcBJapkyIq0VHsAwcmBpGMTrGF5hTH6VyWpf1n31imGfmN8j9KodwCcaWUPvbVLLL4cAyC2IzNQBQU4AiM3Og6epCtauPt9sVBxq8iiLYtcX7HRuDtZ_VKLXs1IRbN3_FEOPdT3Qpgt4MY9Hic9ccvbX1I"/>
<div>
<div className="font-bold text-on-surface">Jameson Vance</div>
<div className="text-xs text-on-surface-variant uppercase">Venture Partner</div>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-xl">
<div className="flex gap-1 text-primary mb-4">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="italic text-on-surface mb-6">"Clean, fast, and secure. Finally a financial dashboard that looks as good as it performs. I've consolidated everything here."</p>
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" data-alt="A portrait of a confident female executive with elegant business attire. She has a friendly expression, soft lighting, and the photo is taken in a minimalist, luxury living room setting with expansive windows and cool-toned morning light. The aesthetic is premium and minimalist." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrMoTOfNDR_GHQWmVmPsg82UcdWNkadYo38ZhUC6lBosnptnprx95erQVgCPHlGIgvsbfOTnpbWz6LZYkWmkUZdQnSzir6DVdqVSz379Eh4iG5tznqjAQG6vR3HHWpnX-iiZwkMeowR0VJohY1aXuERtzGlyHSBB8CHsV1w3O06DLgBb4WDdmNWwR6ZYXa_Qh1rJUQlz5bntoOOkWFiH6lP4brUrQwY_gnKSw9VGfVzJg0yLqTbPYgvalNUXT2udAqMoBQJjGMBY4"/>
<div>
<div className="font-bold text-on-surface">Sarah Sterling</div>
<div className="text-xs text-on-surface-variant uppercase">Portfolio Manager</div>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-xl">
<div className="flex gap-1 text-primary mb-4">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="italic text-on-surface mb-6">"The real-time rebalancing alerts changed my investment strategy. It’s like having a quant analyst in your pocket."</p>
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" data-alt="A close-up portrait of a tech-savvy investor in a modern workspace. He wears stylish glasses and a neutral-toned sweater. In the background, multiple computer monitors with glowing financial charts are visible but blurred. The lighting is dominated by a soft indigo and violet glow from the screens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDacGU8fHDVnsiCRTJlbgFC8BPekFip1elwp3hWMUoFVEua7OZSex6PiWBNUwoB8MuI2QsEQvv8ulw_QQlz-z_vbGy9WFt_KJlo4KaCgGvylEeTHtcBpFxiBOSgyvu0XbeNLIlHU9STGvbVnV_pAolZdBI04x1rm2wBDxvjwB_8h_qTYNT5z8w-qyAOFeJYG47LLWk54gPt7ZwHoBKKs0WaBNbMT6nL48jxePYaVG2j7w_wKNIo-Y9dGiI8n5DMpKkSaP5wIrgCTo4"/>
<div>
<div className="font-bold text-on-surface">Leo Chen</div>
<div className="text-xs text-on-surface-variant uppercase">Tech Entrepreneur</div>
</div>
</div>
</div>
</div>
</section>
{/*  FAQ Accordion  */}
<section className="py-24 px-margin-mobile bg-surface-container-low/30" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="font-headline-lg text-headline-lg text-center text-primary mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="glass-card rounded-xl overflow-hidden border border-white/5">
<button className="w-full p-6 text-left flex justify-between items-center group transition-colors hover:bg-white/5">
<span className="font-bold text-on-surface">How secure is my financial data?</span>
<span className="material-symbols-outlined arrow transition-transform duration-300">expand_more</span>
</button>
<div className="p-6 pt-0 text-on-surface-variant border-t border-white/5 hidden">
                        We use AES-256 military-grade encryption and OIDC/OAuth2 protocols for all banking connections. We never store your passwords and have read-only access to your financial data.
                    </div>
</div>
<div className="glass-card rounded-xl overflow-hidden border border-white/5">
<button className="w-full p-6 text-left flex justify-between items-center group transition-colors hover:bg-white/5">
<span className="font-bold text-on-surface">Can I export my data for tax filing?</span>
<span className="material-symbols-outlined arrow transition-transform duration-300">expand_more</span>
</button>
<div className="p-6 pt-0 text-on-surface-variant border-t border-white/5 hidden">
                        Yes, Quantivo supports CSV, PDF, and direct XML exports compatible with TurboTax, H&amp;R Block, and most major tax software platforms.
                    </div>
</div>
<div className="glass-card rounded-xl overflow-hidden border border-white/5">
<button className="w-full p-6 text-left flex justify-between items-center group transition-colors hover:bg-white/5">
<span className="font-bold text-on-surface">Do you support international bank accounts?</span>
<span className="material-symbols-outlined arrow transition-transform duration-300">expand_more</span>
</button>
<div className="p-6 pt-0 text-on-surface-variant border-t border-white/5 hidden">
                        Absolutely. We support over 15,000 institutions across North America, Europe, Asia, and Oceania, with real-time currency conversion for 160+ fiat currencies.
                    </div>
</div>
</div>
</div>
</section>
{/*  Footer CTA  */}
<footer className="py-24 px-margin-mobile border-t border-white/5 relative overflow-hidden">
<div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full h-64 bg-primary/20 blur-[100px] pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto text-center relative z-10">
<h2 className="font-display-lg text-display-lg text-primary mb-6">Ready to redefine your wealth?</h2>
<p className="text-on-surface-variant max-w-xl mx-auto mb-10 text-lg">Join 120,000+ investors who have upgraded their financial command center. Start your 14-day free Pro trial today.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
<button className="bg-primary text-on-primary font-bold px-10 py-4 rounded-full text-lg shadow-[0_0_40px_rgba(192,193,255,0.3)] hover:scale-105 transition-all">Start Free Trial</button>
<button className="text-on-surface font-bold px-10 py-4 rounded-full text-lg hover:bg-white/5 transition-all">Contact Sales</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-white/5 pt-16">
<div>
<div className="text-primary font-headline-lg text-2xl mb-6">Quantivo</div>
<p className="text-on-surface-variant text-sm leading-relaxed">The premier wealth command center for the modern investor. Precision, security, and elegance in one platform.</p>
</div>
<div>
<div className="text-on-surface font-bold mb-4">Product</div>
<ul className="space-y-2 text-on-surface-variant text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Features</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-on-surface font-bold mb-4">Company</div>
<ul className="space-y-2 text-on-surface-variant text-sm">
<li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<div className="text-on-surface font-bold mb-4">Support</div>
<ul className="space-y-2 text-on-surface-variant text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-primary transition-colors" href="#">API Docs</a></li>
<li><a className="hover:text-primary transition-colors" href="#">System Status</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 text-xs text-on-surface-variant flex flex-col md:flex-row justify-between gap-4">
<p>© 2024 Quantivo Finance Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
<a className="hover:text-primary transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>


    </>
  )
}
