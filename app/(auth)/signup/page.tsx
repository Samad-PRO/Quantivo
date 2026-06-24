'use client'

export default function SignupPage() {
  return (
    <>

{/*  Atmospheric Background Animation  */}

{/*  Header / Branding (TopNavBar Reference)  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop h-20 max-w-[1440px] mx-auto">
<div className="font-headline-lg text-headline-lg text-primary tracking-tight">Quantivo</div>
<div className="font-body-md text-body-md text-on-surface-variant">
            Already have an account? <a className="text-primary font-bold hover:underline" href="#">Log In</a>
</div>
</header>
<main className="relative z-10 w-full max-w-md px-margin-mobile">
{/*  Registration Card  */}
<div className="glass-card rounded-xl p-lg md:p-xl w-full">
{/*  Step 1: Account Creation  */}
<div className="step-transition active-step" id="step1">
<div className="mb-lg">
<h1 className="font-headline-lg text-headline-lg text-primary mb-xs">Create Account</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Join the premium financial command center.</p>
</div>
<form className="space-y-md" id="form-step1">
<div className="space-y-base">
<label className="font-label-caps text-on-surface-variant block">FULL NAME</label>
<input className="w-full bg-[#0b1326] border border-white/10 rounded-lg px-md py-sm text-on-surface transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-base">
<label className="font-label-caps text-on-surface-variant block">EMAIL ADDRESS</label>
<input className="w-full bg-[#0b1326] border border-white/10 rounded-lg px-md py-sm text-on-surface transition-all" placeholder="john@company.com" required="" type="email"/>
</div>
<div className="space-y-base">
<label className="font-label-caps text-on-surface-variant block">PASSWORD</label>
<input className="w-full bg-[#0b1326] border border-white/10 rounded-lg px-md py-sm text-on-surface transition-all" placeholder="••••••••" required="" type="password"/>
</div>
<button className="glow-button w-full bg-gradient-to-r from-[#c0c1ff] to-[#e1dfff] text-on-primary font-bold py-md rounded-lg mt-md" type="submit">
                        Get Started
                    </button>
</form>
<div className="mt-md flex items-center gap-xs">
<div className="h-[1px] flex-1 bg-white/10"></div>
<span className="text-xs text-on-surface-variant uppercase tracking-widest">or register with</span>
<div className="h-[1px] flex-1 bg-white/10"></div>
</div>
<div className="grid grid-cols-2 gap-md mt-md">
<button className="flex items-center justify-center gap-xs bg-white/5 border border-white/10 py-sm rounded-lg hover:bg-white/10 transition-colors">
<div className="w-5 h-5" data-alt="A clean vector icon of a Google logo, rendered in high-definition minimalist style suitable for a premium dark-themed finance application dashboard. The logo maintains its original brand colors but is framed within a subtle translucent glass circular container. It signifies a secure and modern single sign-on option." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQN3Tthr1VAyODf-63QMigw8x5FWIRCDUv9bCbxXEfgP0pK3LYfq9Sn8PvHJLaI4Xtyj4C09t33cmlytaIZJPdsinp595VRMqAV_sAgUF6FG0iI4n4GGA1rgWp_IH58v0T-zkRmgkG-7l0iKLLruZsNWKb9gMMXpiLpOqzyyB3ZfHBxDR3ZktRpjd89HrckrvwxRxfTmpTTxYRRwt2pCNV4EdqciMUr2cnQtRzLic82SKcubYJ1ioMDxaMMcf-Dfy6IVPNPX6Hzg4')" }}></div>
<span className="text-sm font-medium">Google</span>
</button>
<button className="flex items-center justify-center gap-xs bg-white/5 border border-white/10 py-sm rounded-lg hover:bg-white/10 transition-colors">
<span className="material-symbols-outlined text-xl">terminal</span>
<span className="text-sm font-medium">SSO</span>
</button>
</div>
</div>
{/*  Step 2: OTP Verification  */}
<div className="step-transition hidden-step" id="step2">
<div className="mb-lg text-center">
<div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-md">
<span className="material-symbols-outlined text-primary text-3xl">mark_email_read</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary mb-xs">Verify Email</h1>
<p className="font-body-md text-body-md text-on-surface-variant">We've sent a 6-digit code to your inbox.</p>
</div>
<form className="space-y-lg" id="form-step2">
<div className="flex justify-between gap-xs">
<input autofocus="" className="otp-input w-12 h-16 text-center font-data-lg text-data-lg bg-[#0b1326] border border-white/10 rounded-lg text-primary transition-all" maxlength="1" type="text"/>
<input className="otp-input w-12 h-16 text-center font-data-lg text-data-lg bg-[#0b1326] border border-white/10 rounded-lg text-primary transition-all" maxlength="1" type="text"/>
<input className="otp-input w-12 h-16 text-center font-data-lg text-data-lg bg-[#0b1326] border border-white/10 rounded-lg text-primary transition-all" maxlength="1" type="text"/>
<input className="otp-input w-12 h-16 text-center font-data-lg text-data-lg bg-[#0b1326] border border-white/10 rounded-lg text-primary transition-all" maxlength="1" type="text"/>
<input className="otp-input w-12 h-16 text-center font-data-lg text-data-lg bg-[#0b1326] border border-white/10 rounded-lg text-primary transition-all" maxlength="1" type="text"/>
<input className="otp-input w-12 h-16 text-center font-data-lg text-data-lg bg-[#0b1326] border border-white/10 rounded-lg text-primary transition-all" maxlength="1" type="text"/>
</div>
<div className="text-center">
<p className="font-body-md text-body-md text-on-surface-variant">
                            Didn't receive the code? <button className="text-primary font-bold hover:underline" type="button">Resend</button>
</p>
</div>
<button className="glow-button w-full bg-gradient-to-r from-[#c0c1ff] to-[#e1dfff] text-on-primary font-bold py-md rounded-lg" type="submit">
                        Verify &amp; Complete
                    </button>
<button className="w-full text-on-surface-variant hover:text-primary text-sm flex items-center justify-center gap-xs transition-colors" id="back-to-step1" type="button">
<span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to email entry
                    </button>
</form>
</div>
{/*  Success State (Optional Splash)  */}
<div className="step-transition hidden-step text-center" id="step3">
<div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-lg">
<span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary mb-xs">Welcome to Quantivo</h1>
<p className="font-body-md text-body-md text-on-surface-variant mb-lg">Your workspace is being prepared for prime financial analysis.</p>
<div className="w-full bg-[#0b1326] h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-primary w-0 animate-progress"></div>
</div>
<p className="text-xs text-on-surface-variant mt-sm">Redirecting to command center...</p>
</div>
</div>
{/*  Security Badge  */}
<div className="mt-lg flex items-center justify-center gap-md text-on-surface-variant/40">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-sm">lock</span>
<span className="text-[10px] tracking-widest uppercase font-bold">256-bit encryption</span>
</div>
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-sm">verified_user</span>
<span className="text-[10px] tracking-widest uppercase font-bold">SOC2 Compliant</span>
</div>
</div>
</main>
<style>
        @keyframes progress {
            to { width: 100%; }
        }
        .animate-progress {
            animation: progress 2s ease-out forwards;
        }
    </style>


    </>
  )
}
