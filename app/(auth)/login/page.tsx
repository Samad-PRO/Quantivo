'use client'

export default function LoginPage() {
  return (
    <>

{/*  Ambient background effects  */}
<div className="ambient-glow top-[-200px] left-[-200px] pulse-primary"></div>
<div className="ambient-glow bottom-[-200px] right-[-200px] pulse-primary"></div>
<main className="relative z-10 w-full max-w-[440px] px-margin-mobile">
{/*  Logo Area  */}
<div className="flex flex-col items-center mb-lg">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-xs">Quantivo</h1>
<p className="text-on-surface-variant text-body-md text-center opacity-80">Premium Financial Command Center</p>
</div>
{/*  Login Card  */}
<div className="glass-card rounded-xl p-md border border-white/5 transition-all duration-300">
<div className="space-y-sm">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Welcome back</h2>
{/*  Google OAuth  */}
<button className="google-btn-hover w-full flex items-center justify-center gap-sm bg-surface-container-high/50 border border-white/10 rounded-lg py-sm px-md transition-all duration-200 group">
<svg className="w-5 h-5" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" /></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" /></path>
</svg>
<span className="text-on-surface font-medium text-body-md">Sign in with Google</span>
</button>
<div className="relative py-md">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-white/5"></div>
</div>
<div className="relative flex justify-center text-label-caps uppercase">
<span className="bg-surface-container/10 backdrop-blur-xl px-sm text-outline-variant font-label-caps">Or with email</span>
</div>
</div>
{/*  Email/Password Form  */}
<form className="space-y-md">
<div className="space-y-base">
<label className="font-label-caps text-label-caps text-on-surface-variant px-1" htmlFor="email">Email Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">mail</span>
<input className="w-full bg-surface-container-lowest border border-white/10 rounded-lg py-3 pl-10 pr-md text-on-surface focus:border-primary focus:ring-0 input-glow transition-all duration-200 placeholder:text-outline-variant/50" id="email" placeholder="name@company.com" type="email"/>
</div>
</div>
<div className="space-y-base">
<div className="flex justify-between items-center px-1">
<label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="password">Password</label>
<a className="text-primary/70 text-label-caps hover:text-primary transition-colors duration-200" href="#">Forgot Password?</a>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">lock</span>
<input className="w-full bg-surface-container-lowest border border-white/10 rounded-lg py-3 pl-10 pr-md text-on-surface focus:border-primary focus:ring-0 input-glow transition-all duration-200 placeholder:text-outline-variant/50" id="password" placeholder="••••••••" type="password"/>
</div>
</div>
<div className="flex items-center gap-sm px-1">
<input className="w-4 h-4 rounded border-white/10 bg-surface-container-lowest text-primary focus:ring-primary focus:ring-offset-0" id="remember" type="checkbox"/>
<label className="text-body-md text-on-surface-variant text-sm" htmlFor="remember">Keep me logged in for 30 days</label>
</div>
<button className="w-full bg-primary text-on-primary font-bold py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(192,193,255,0.1)]">
                        Sign In
                    </button>
</form>
</div>
{/*  Sign Up Footer  */}
<div className="mt-lg pt-md border-t border-white/5 text-center">
<p className="text-on-surface-variant text-body-md">
                    Don't have an account? 
                    <a className="text-primary font-semibold hover:underline decoration-primary/30 underline-offset-4 transition-all" href="#">Sign up</a>
</p>
</div>
</div>
{/*  Secondary Links  */}
<div className="mt-md flex justify-center gap-md text-label-caps text-outline-variant opacity-60">
<a className="hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-on-surface transition-colors" href="#">Terms of Service</a>
<a className="hover:text-on-surface transition-colors" href="#">Security</a>
</div>
</main>
{/*  Background Decoration Image  */}
<div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none grayscale">
<div className="w-full h-full bg-cover bg-center" data-alt="A highly detailed and abstract architectural shot of a modern financial district at night with glowing blue and violet lights reflecting off sharp glass facades and steel structures. The scene is shot from a low angle looking up, creating a sense of scale and authority. Dark navy shadows contrast with luminous primary violet accents, maintaining a premium SaaS brand aesthetic." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCprQC9PKecPmYsKxTuDcbL_VfE6zbmuhq1tzAfATamHzt3cHasMXH5P2ZEI8V-RMBTqNsxl4DPv0tmyblag9B49kXbUDfK9hrkRGJYVDKp7fhFja9OsFpyARO3olMQQfJEgUfRa6RNe-HBjFeYDIbL-l1r3XhJOLDEmdd5drRfJFGJ7JDTQL-Vih_S-Fq4aNMWaYj9aJuqz_sPy1k2GaGXBQTHSc3epsAqJPL2w3aSipEnTUTtxxUbrRJBDFtbT5LaU6T7lrA1NeI')" }}></div>
</div>


    </>
  )
}
