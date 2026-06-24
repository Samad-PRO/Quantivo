'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        body { background-color: #051424; color: #d5e4fa; overflow-x: hidden; }
        .glass-card {
          background: rgba(18, 33, 49, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
        }
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .stagger-1 { transition-delay: 50ms; }
        .stagger-2 { transition-delay: 100ms; }
        .stagger-3 { transition-delay: 150ms; }
        .hover-lift { transition: transform 200ms ease-out; }
        .hover-lift:hover { transform: translateY(-3px); }
        .animated-gradient-text {
          background: linear-gradient(to right, #e1dfff, #cbe6ff, #ffb77a);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: textGradient 5s linear infinite;
        }
        @keyframes textGradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--rotation, 0deg)); }
        }
        .floating-tag { animation: float 6s ease-in-out infinite; }
        .nav-link {
          color: #c7c5d0;
          font-family: Inter, sans-serif;
          font-size: 15px;
          font-weight: 300;
          text-decoration: none;
          transition: color 200ms ease-out, transform 200ms ease-out;
        }
        .nav-link:hover { color: #e1dfff; transform: translateY(-2px); }
        .btn-violet {
          background: #c0c1ff;
          color: #292b5e;
          padding: 10px 28px;
          border-radius: 9999px;
          font-family: Inter, sans-serif;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          display: inline-block;
          transition: transform 200ms ease-out;
        }
        .btn-violet:hover { transform: translateY(-3px); }
        .btn-violet:active { transform: scale(0.97); }
        .btn-amber {
          background: #fa8c00;
          color: #1a0f00;
          padding: 10px 28px;
          border-radius: 9999px;
          font-family: Inter, sans-serif;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          display: inline-block;
          transition: transform 200ms ease-out;
        }
        .btn-amber:hover { transform: translateY(-3px); }
        .btn-ghost {
          background: transparent;
          color: #c0c1ff;
          padding: 10px 28px;
          border-radius: 9999px;
          border: 1px solid #c0c1ff;
          font-family: Inter, sans-serif;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          display: inline-block;
          transition: transform 200ms ease-out, background 200ms ease-out;
        }
        .btn-ghost:hover { transform: translateY(-3px); background: rgba(192,193,255,0.08); }
        .tool-card {
          background: rgba(18, 33, 49, 0.6);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(250, 140, 0, 0.25);
          border-radius: 16px;
          padding: 28px;
          transition: transform 200ms ease-out, border-color 200ms ease-out;
        }
        .tool-card:hover { transform: translateY(-3px); border-color: rgba(250,140,0,0.5); }
        .faq-content { max-height: 0; overflow: hidden; transition: max-height 400ms ease-out; }
        .faq-content.open { max-height: 200px; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; }
      `}</style>

      {/* TopNavBar */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, background: 'rgba(5,20,36,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 48px', maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: 700, color: '#e1dfff', letterSpacing: '-0.02em' }}>
            Quantivo
          </div>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a className="nav-link" href="#features">Features</a>
            <a className="nav-link" href="#tools">Tools</a>
            <a className="nav-link" href="#pricing">Pricing</a>
            <a className="nav-link" href="#faq">FAQ</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="/login" className="nav-link">Log In</Link>
            <Link href="/signup" className="btn-violet">Get Started</Link>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '96px', paddingBottom: '80px', background: '#051424' }}>
        {/* Hero Section */}
        <section style={{ padding: '80px 48px', maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          {/* Ambient glow */}
          <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '600px', background: 'radial-gradient(circle, rgba(192,193,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          {/* Floating Candy Tags */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <div className="floating-tag" style={{ position: 'absolute', top: '10%', left: '8%', padding: '6px 14px', borderRadius: '9999px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', background: 'rgba(255,68,51,0.15)', color: '#ff4433', border: '1px solid #ff4433', '--rotation': '-8deg' } as React.CSSProperties}>Groceries</div>
            <div className="floating-tag" style={{ position: 'absolute', top: '20%', right: '12%', padding: '6px 14px', borderRadius: '9999px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', background: 'rgba(255,204,2,0.15)', color: '#ffcc02', border: '1px solid #ffcc02', animationDelay: '1s', '--rotation': '12deg' } as React.CSSProperties}>Savings</div>
            <div className="floating-tag" style={{ position: 'absolute', bottom: '15%', left: '18%', padding: '6px 14px', borderRadius: '9999px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', background: 'rgba(0,172,254,0.15)', color: '#00acfe', border: '1px solid #00acfe', animationDelay: '2s', '--rotation': '5deg' } as React.CSSProperties}>Travel</div>
            <div className="floating-tag" style={{ position: 'absolute', bottom: '25%', right: '8%', padding: '6px 14px', borderRadius: '9999px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', background: 'rgba(0,204,75,0.15)', color: '#00cc4b', border: '1px solid #00cc4b', animationDelay: '0.5s', '--rotation': '-12deg' } as React.CSSProperties}>Income</div>
          </div>

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
              <span className="animated-gradient-text">Your Money. Your Goals. One Command Center.</span>
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 300, color: '#c7c5d0', lineHeight: 1.6, marginBottom: '40px', maxWidth: '640px', margin: '0 auto 40px' }}>
              Engineered for precision. High-performance financial tracking blending technical clarity with automated insights.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '64px' }}>
              <Link href="/signup" className="btn-violet" style={{ fontSize: '17px', padding: '12px 36px' }}>Get Started Free</Link>
              <Link href="/login" className="btn-ghost" style={{ fontSize: '17px', padding: '12px 36px' }}>View Demo</Link>
            </div>
          </div>

          {/* Hero Preview Dashboard */}
          <div className="glass-card fade-up" style={{ maxWidth: '960px', margin: '0 auto', height: '420px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)' }} />
            <div style={{ padding: '28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 600, color: '#d5e4fa' }}>Overview</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', color: '#c0c1ff' }}>Q3 2024</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', flex: 1 }}>
                <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 500, letterSpacing: '0.06em', color: '#918f9a', textTransform: 'uppercase' }}>Total Balance</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '28px', fontWeight: 400, color: '#d5e4fa', marginTop: '8px' }}>$124,500</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#00cc4b', marginTop: '4px' }}>↑ +12.4%</span>
                </div>
                <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(192,193,255,0.03)' }}>
                  <svg width="100%" height="120" viewBox="0 0 400 120">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#c0c1ff" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#c0c1ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,90 L60,75 L120,60 L180,45 L240,30 L300,20 L360,10 L400,5 L400,120 L0,120 Z" fill="url(#chartGrad)" />
                    <path d="M0,90 L60,75 L120,60 L180,45 L240,30 L300,20 L360,10 L400,5" fill="none" stroke="#c0c1ff" strokeWidth="2" />
                    <path d="M0,100 L60,95 L120,85 L180,80 L240,72 L300,65 L360,55 L400,50 L400,120 L0,120 Z" fill="rgba(250,140,0,0.1)" />
                    <path d="M0,100 L60,95 L120,85 L180,80 L240,72 L300,65 L360,55 L400,50" fill="none" stroke="#fa8c00" strokeWidth="1.5" strokeDasharray="4,3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="fade-up stagger-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '40px' }}>
            {[
              { val: '120k', label: 'Active Users' },
              { val: '$48M', label: 'Tracked Monthly' },
              { val: '4.9★', label: 'App Rating' },
              { val: '99.9%', label: 'Uptime SLA' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '28px', fontWeight: 500, color: '#c0c1ff' }}>{stat.val}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', fontWeight: 500, letterSpacing: '0.05em', color: '#918f9a', textTransform: 'uppercase', marginTop: '6px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" style={{ padding: '80px 48px', maxWidth: '1280px', margin: '0 auto' }}>
          <div className="fade-up" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-block', padding: '4px 16px', borderRadius: '9999px', background: 'rgba(250,140,0,0.12)', border: '1px solid rgba(250,140,0,0.3)', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em', color: '#fa8c00', textTransform: 'uppercase', marginBottom: '16px' }}>
              Free Tools
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: 700, color: '#fa8c00', marginBottom: '12px' }}>Professional Tools</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, color: '#c7c5d0' }}>Accelerate your workflow with precision utilities. Free to try, unlimited with Pro.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: 'receipt_long', name: 'Invoice Generator', desc: 'Create professional, compliant invoices in seconds. Export directly to PDF.', href: '/tools/invoice' },
              { icon: 'account_balance', name: 'Statement Generator', desc: 'Generate normalized bank statements for testing and reconciliation.', href: '/tools/statement' },
              { icon: 'picture_as_pdf', name: 'PDF Converter', desc: 'Convert financial CSVs and raw data into formatted, presentation-ready PDFs.', href: '/tools/pdf' },
            ].map((tool, i) => (
              <div key={tool.name} className={`tool-card fade-up${i > 0 ? ` stagger-${i}` : ''}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '32px', color: '#fa8c00', fontVariationSettings: "'FILL' 0" }}>{tool.icon}</span>
                  <span style={{ background: 'rgba(250,140,0,0.12)', color: '#fa8c00', border: '1px solid rgba(250,140,0,0.4)', padding: '4px 12px', borderRadius: '9999px', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}>2/3 free uses</span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 600, color: '#d5e4fa', marginBottom: '8px' }}>{tool.name}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: '#c7c5d0', lineHeight: 1.6, marginBottom: '20px' }}>{tool.desc}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link href={tool.href} className="btn-amber" style={{ flex: 1, textAlign: 'center', padding: '9px 16px', fontSize: '14px' }}>Try Free</Link>
                  <Link href="/signup" style={{ flex: 1, textAlign: 'center', padding: '9px 16px', fontSize: '14px', background: 'transparent', color: '#c0c1ff', border: '1px solid rgba(192,193,255,0.4)', borderRadius: '9999px', fontFamily: 'Inter, sans-serif', textDecoration: 'none', transition: 'all 200ms ease-out', display: 'block' }}>Unlock All</Link>
                </div>
              </div>
            ))}
          </div>

          {/* AdSense Banner Placeholder */}
          <div style={{ width: '100%', minHeight: '90px', background: 'rgba(1,15,31,0.4)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '32px 0' }}>
            <span style={{ fontSize: '11px', color: '#464654', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Advertisement</span>
          </div>

          <div className="fade-up stagger-3" style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
            <Link href="/signup" className="btn-violet" style={{ fontSize: '17px', padding: '12px 40px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>lock_open</span>
              Unlock All Tools
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{ padding: '80px 48px', maxWidth: '1280px', margin: '0 auto', background: 'rgba(18,33,49,0.2)' }}>
          <div className="fade-up" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: 700, color: '#e1dfff', marginBottom: '12px' }}>Everything You Need</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, color: '#c7c5d0' }}>A complete command center for your financial life.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: 'insights', title: 'Predictive Analytics', desc: 'AI-powered forecasts based on your spending patterns and market data.' },
              { icon: 'account_balance_wallet', title: 'Universal Sync', desc: 'Connect all your accounts, investments, and crypto in one place.' },
              { icon: 'security', title: 'Bank-Grade Security', desc: 'AES-256 encryption and zero-knowledge architecture protect your data.' },
              { icon: 'trending_up', title: 'Goal Tracking', desc: 'Set, visualize, and automatically fund your financial milestones.' },
              { icon: 'receipt_long', title: 'Invoice & Billing', desc: 'Create, send, and track professional invoices with one click.' },
              { icon: 'bar_chart', title: 'Advanced Reports', desc: 'Export detailed reports and tax-ready summaries in seconds.' },
            ].map((feature, i) => (
              <div key={feature.title} className={`glass-card hover-lift fade-up${i > 0 ? ` stagger-${Math.min(i, 3)}` : ''}`} style={{ padding: '28px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '36px', color: '#c0c1ff', marginBottom: '16px', display: 'block' }}>{feature.icon}</span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 600, color: '#d5e4fa', marginBottom: '10px' }}>{feature.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: '#c7c5d0', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ padding: '80px 48px', maxWidth: '1280px', margin: '0 auto' }}>
          <div className="fade-up" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: 700, color: '#e1dfff', marginBottom: '12px' }}>Simple Pricing</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 300, color: '#c7c5d0' }}>Start free. Scale when you need to.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '720px', margin: '0 auto' }}>
            {/* Free */}
            <div className="glass-card fade-up" style={{ padding: '36px' }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, color: '#d5e4fa', marginBottom: '8px' }}>Free</h3>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '40px', fontWeight: 400, color: '#c0c1ff', marginBottom: '24px' }}>$0<span style={{ fontSize: '16px', color: '#918f9a' }}>/mo</span></div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Up to 50 transactions/mo', '3 tool uses/day', 'Basic dashboard', '1 goal'].map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: '#c7c5d0' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#00cc4b' }}>check_circle</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="btn-ghost" style={{ width: '100%', textAlign: 'center', display: 'block', boxSizing: 'border-box' }}>Get Started</Link>
            </div>
            {/* Pro */}
            <div className="glass-card fade-up stagger-1" style={{ padding: '36px', border: '1px solid rgba(192,193,255,0.4)', boxShadow: '0 0 40px rgba(192,193,255,0.08)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#c0c1ff', color: '#292b5e', padding: '4px 16px', borderRadius: '9999px', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em' }}>MOST POPULAR</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, color: '#c0c1ff', marginBottom: '8px' }}>Pro</h3>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '40px', fontWeight: 400, color: '#c0c1ff', marginBottom: '24px' }}>$12<span style={{ fontSize: '16px', color: '#918f9a' }}>/mo</span></div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Unlimited transactions', 'Unlimited tool uses', 'Advanced analytics', 'Unlimited goals', 'AI insights', 'Priority support'].map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: '#d5e4fa' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#c0c1ff' }}>check_circle</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="btn-violet" style={{ width: '100%', textAlign: 'center', display: 'block', boxSizing: 'border-box' }}>Start Free Trial</Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" style={{ padding: '80px 48px', maxWidth: '800px', margin: '0 auto' }}>
          <div className="fade-up" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: 700, color: '#e1dfff', marginBottom: '12px' }}>FAQs</h2>
          </div>
          {[
            { q: 'Is my financial data secure?', a: 'Yes. We use AES-256 encryption and never sell your data. All connections use read-only bank-level OAuth.' },
            { q: 'Can I use the tools without signing up?', a: 'Yes! You get 3 free uses per day per tool with no account required. Sign up to unlock unlimited access.' },
            { q: 'What payment methods do you accept?', a: 'We accept all major credit cards and PayPal. All billing is handled securely through Stripe.' },
            { q: 'Can I cancel anytime?', a: 'Absolutely. Cancel from Settings at any time with no cancellation fees and no questions asked.' },
          ].map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 48px 40px', background: 'rgba(1,15,31,0.6)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: 700, color: '#e1dfff', marginBottom: '12px' }}>Quantivo</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: '#918f9a', lineHeight: 1.7 }}>The precision financial command center for modern professionals.</p>
          </div>
          {[
            { heading: 'Product', links: ['Features', 'Tools', 'Pricing', 'Changelog'] },
            { heading: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
            { heading: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Status'] },
          ].map((col) => (
            <div key={col.heading}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 600, color: '#d5e4fa', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>{col.heading}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((link) => (
                  <a key={link} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: '#918f9a', textDecoration: 'none', transition: 'color 200ms ease-out' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#c0c1ff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#918f9a')}
                  >{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 300, color: '#918f9a' }}>© 2024 Quantivo Analytics. All rights reserved.</span>
          <Link href="/signup" className="btn-violet" style={{ fontSize: '14px', padding: '9px 24px' }}>Start Free →</Link>
        </div>
      </footer>
    </>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass-card" style={{ marginBottom: '12px', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 600, color: '#d5e4fa' }}>{question}</span>
        <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#c0c1ff', transition: 'transform 200ms ease-out', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
      </button>
      <div style={{ maxHeight: open ? '200px' : '0', overflow: 'hidden', transition: 'max-height 300ms ease-out' }}>
        <div style={{ padding: '0 24px 20px', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 300, color: '#c7c5d0', lineHeight: 1.7 }}>{answer}</div>
      </div>
    </div>
  )
}
