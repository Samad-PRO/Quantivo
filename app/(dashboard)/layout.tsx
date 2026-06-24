'use client'

export default function DashboardLayout() {
  return (
    <>

{/*  Sidebar Navigation  */}
<aside className="fixed left-0 top-0 h-screen w-64 glass-sidebar z-50 flex flex-col py-md transition-all duration-300" id="side-nav">
{/*  Logo Section  */}
<div className="px-md mb-lg flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-container to-primary flex items-center justify-center shadow-[0_0_20px_rgba(192,193,255,0.15)]">
<span className="material-symbols-outlined text-on-primary-fixed font-bold">query_stats</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Quantivo</h1>
</div>
{/*  Main Navigation Links  */}
<nav className="flex-1 px-sm space-y-1">
{/*  Active: Dashboard  */}
<a className="bg-primary/10 text-primary border-l-4 border-primary px-4 py-3 flex items-center gap-3 font-body-md text-body-md hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
<span>Dashboard</span>
</a>
<a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 font-body-md text-body-md hover:bg-white/5 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Finances</span>
</a>
<a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 font-body-md text-body-md hover:bg-white/5 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined">track_changes</span>
<span>Goals</span>
</a>
<a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 font-body-md text-body-md hover:bg-white/5 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined">bolt</span>
<span>Habits</span>
</a>
<a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 font-body-md text-body-md hover:bg-white/5 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined">description</span>
<span>Invoices</span>
</a>
<a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 font-body-md text-body-md hover:bg-white/5 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span>Subscriptions</span>
</a>
<a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 font-body-md text-body-md hover:bg-white/5 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined">analytics</span>
<span>Reports</span>
</a>
<a className="text-on-surface-variant px-4 py-3 flex items-center gap-3 font-body-md text-body-md hover:bg-white/5 hover:translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</nav>
{/*  CTA Action  */}
<div className="px-md mb-sm">
<button className="w-full bg-gradient-to-r from-primary-fixed-dim to-primary-container text-on-primary-fixed font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(192,193,255,0.1)] hover:scale-[1.02] transition-transform active:scale-95">
<span className="material-symbols-outlined text-[20px]">add</span>
<span className="text-body-md font-body-md">New Transaction</span>
</button>
</div>
{/*  Bottom Actions & Profile  */}
<div className="mt-auto px-sm border-t border-white/5 pt-sm">
<a className="text-on-surface-variant px-4 py-2 flex items-center gap-3 font-body-md text-body-md hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">help</span>
<span>Help Center</span>
</a>
<a className="text-on-surface-variant px-4 py-2 flex items-center gap-3 font-body-md text-body-md hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">logout</span>
<span>Logout</span>
</a>
<div className="mt-sm p-4 bg-surface-container-high/40 rounded-2xl flex items-center gap-3 border border-white/5">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover border border-primary/20" data-alt="A professional business portrait of a financial executive with sophisticated lighting, high-end studio aesthetic, dark minimalist background, and sharp focus on detailed features to match a premium SaaS brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYvs61EHhd_821zsh275eXoeJSHoShWCMC2-mf9ugYDrk-gUGd12Lo_KIdnWiXEFSz9FvuluxSZC1V3ddRFe7k4juX_8Kn65SQ3hbMTpteM6q61f-KW2xvwESAWYYN6xr1_0V7sIcuWX7QozG3vN6VjQVNTOnmEQ6Jb-sxMDwDf3S_CQ60B5IY64AM-cRxhbMdx6WdWleN8XS1cOMH0RcD-Pu8QH6uVY1oI21e1mw42dmcs24oUg0qtOxZyh1hZL1P6ghSSnC-kL4"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-background rounded-full"></div>
</div>
<div className="overflow-hidden">
<p className="text-on-surface font-semibold text-body-md truncate">Marcus Sterling</p>
<p className="text-on-surface-variant text-xs truncate">Premium Tier</p>
</div>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 ml-64 flex flex-col min-h-screen">
{/*  Top App Bar  */}
<header className="sticky top-0 z-40 w-full glass-header flex justify-between items-center px-md py-sm border-b border-white/5">
<div className="flex items-center gap-md flex-1">
<button className="md:hidden text-primary">
<span className="material-symbols-outlined">menu</span>
</button>
<h2 className="font-headline-lg text-headline-lg text-primary hidden lg:block">Command Center</h2>
{/*  Search Bar  */}
<div className="relative flex-1 max-w-xl group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 bg-surface-container-low border border-white/5 rounded-xl leading-5 text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-body-md" placeholder="Search assets, invoices, or goals..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 border border-white/10 rounded font-sans text-xs text-on-surface-variant">⌘K</kbd>
</div>
</div>
</div>
{/*  Trailing Actions  */}
<div className="flex items-center gap-sm ml-md">
<button className="relative hover:bg-surface-container-highest rounded-full p-2.5 text-on-surface-variant hover:text-primary transition-all active:scale-95">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-error rounded-full border border-background"></span>
</button>
<button className="hover:bg-surface-container-highest rounded-full p-2.5 text-on-surface-variant hover:text-primary transition-all active:scale-95">
<span className="material-symbols-outlined">account_balance_wallet</span>
</button>
<div className="h-8 w-[1px] bg-white/10 mx-2"></div>
<div className="flex items-center gap-3 pl-2">
<div className="text-right hidden sm:block">
<p className="text-on-surface text-xs font-bold font-label-caps uppercase tracking-wider">Balance</p>
<p className="text-primary font-data-lg text-data-sm">$1,248,392.00</p>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-white/5 cursor-pointer hover:border-primary/50 transition-colors">
<span className="material-symbols-outlined text-primary">person</span>
</div>
</div>
</div>
</header>
{/*  Canvas Area (Placeholder for other screens)  */}
<section className="flex-1 p-md relative overflow-hidden" id="canvas">
{/*  Atmospheric Background Glow  */}
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>
{/*  Page Content Placeholder  */}
<div className="w-full h-full border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-xl">
<div className="w-24 h-24 mb-md opacity-20">
<span className="material-symbols-outlined !text-6xl text-primary">space_dashboard</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-surface-variant mb-xs">Canvas Container</h3>
<p className="font-body-md text-body-md text-on-surface-variant/60 max-w-md">
                    This is the main application area where dynamic financial modules, bento grids, and data visualizations will be injected.
                </p>
<div className="mt-lg flex gap-md">
<div className="h-32 w-64 bg-surface-container/20 backdrop-blur-md rounded-2xl border border-white/5"></div>
<div className="h-32 w-64 bg-surface-container/20 backdrop-blur-md rounded-2xl border border-white/5"></div>
<div className="h-32 w-64 bg-surface-container/20 backdrop-blur-md rounded-2xl border border-white/5"></div>
</div>
</div>
</section>
</main>
{/*  Micro-interaction Script  */}


    </>
  )
}
