import Link from 'next/link'

export default function LandingPage() {
  return (
    <div style={{ background: '#0b1326', color: '#dae2fd', fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>

      {/* Navbar */}
      <nav style={{ borderBottom: '1px solid #464554', background: '#060e20' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', background: '#c0c1ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#1000a9', fontWeight: 700, fontSize: '14px' }}>Q</span>
            </div>
            <span style={{ fontSize: '18px', fontWeight: 700 }}>Quantivo</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Link href="/login" style={{ padding: '8px 16px', borderRadius: '8px', color: '#c7c4d7', fontSize: '14px', textDecoration: 'none' }}>Sign in</Link>
            <Link href="/signup" style={{ padding: '8px 16px', borderRadius: '8px', background: '#c0c1ff', color: '#1000a9', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>Start Free Trial</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 24px 64px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', padding: '4px 16px', borderRadius: '999px', background: '#c0c1ff22', border: '1px solid #c0c1ff44', fontSize: '12px', color: '#c0c1ff', marginBottom: '24px' }}>
          ✦ Now in public beta — free to try
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
          Your Life, Money & Goals —<br />
          <span style={{ color: '#c0c1ff' }}>Organized.</span>
        </h1>
        <p style={{ fontSize: '18px', color: '#c7c4d7', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          Track expenses, savings, invoices, subscriptions, habits, and productivity in one beautifully simple dashboard.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup" style={{ padding: '14px 28px', borderRadius: '10px', background: '#c0c1ff', color: '#1000a9', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
            Start Free Trial
          </Link>
          <Link href="/login" style={{ padding: '14px 28px', borderRadius: '10px', border: '1px solid #464554', color: '#dae2fd', fontSize: '15px', textDecoration: 'none' }}>
            Sign in
          </Link>
        </div>
        <p style={{ marginTop: '16px', fontSize: '13px', color: '#908fa0' }}>No credit card required · 14-day Pro trial</p>

        {/* Mock Dashboard Preview */}
        <div style={{ marginTop: '64px', background: '#131b2e', border: '1px solid #464554', borderRadius: '16px', padding: '24px', maxWidth: '800px', margin: '64px auto 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}>
            {[['Total Balance', 'PKR 124,580', '#c0c1ff'], ['Monthly Income', 'PKR 18,450', '#4edea3'], ['Expenses', 'PKR 6,230', '#ffb4ab'], ['Savings Rate', '66.2%', '#4edea3']].map(([label, value, color]) => (
              <div key={label} style={{ background: '#0b1326', border: '1px solid #464554', borderRadius: '10px', padding: '16px' }}>
                <p style={{ fontSize: '11px', color: '#c7c4d7', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
                <p style={{ fontSize: '18px', fontWeight: 700, color }}>{value}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#0b1326', border: '1px solid #464554', borderRadius: '10px', padding: '20px' }}>
            <p style={{ fontSize: '13px', color: '#c7c4d7', marginBottom: '16px' }}>Active Goals</p>
            {[['Emergency Fund', 75, '#c0c1ff'], ['New Car', 40, '#4edea3'], ['Europe Trip', 20, '#908fa0']].map(([name, pct, color]) => (
              <div key={name as string} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', color: '#dae2fd' }}>{name}</span>
                  <span style={{ fontSize: '12px', color: color as string }}>{pct}%</span>
                </div>
                <div style={{ height: '6px', background: '#31394d', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: color as string, borderRadius: '999px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>Everything you need</h2>
        <p style={{ textAlign: 'center', color: '#c7c4d7', marginBottom: '48px' }}>One app. Your whole life.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {[
            ['💰', 'Smart Finances', 'Track every rupee with categories, recurring rules, and beautiful charts.'],
            ['🎯', 'Goals That Stick', 'Set targets with deadlines and watch progress bars push you forward.'],
            ['🔥', 'Habit Streaks', 'Build daily and weekly routines. Streaks keep you accountable.'],
            ['🧾', 'Pro Invoices', 'Send, track, and export invoices as PDF in seconds.'],
            ['📡', 'Subscription Radar', 'Never get surprised by a renewal. See everything in one place.'],
            ['📊', 'Beautiful Reports', 'Monthly PDF & CSV exports with insight-rich analytics.'],
          ].map(([icon, title, desc]) => (
            <div key={title as string} style={{ background: '#131b2e', border: '1px solid #464554', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{title}</h3>
              <p style={{ fontSize: '14px', color: '#c7c4d7', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#131b2e', borderTop: '1px solid #464554', borderBottom: '1px solid #464554' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
          {[['120k+', 'Active users'], ['PKR 48M+', 'Tracked monthly'], ['4.9 ★', 'User rating'], ['99.9%', 'Uptime']].map(([num, label]) => (
            <div key={label as string}>
              <p style={{ fontSize: '28px', fontWeight: 700, color: '#c0c1ff' }}>{num}</p>
              <p style={{ fontSize: '14px', color: '#c7c4d7', marginTop: '4px' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>Simple, honest pricing</h2>
        <p style={{ textAlign: 'center', color: '#c7c4d7', marginBottom: '48px' }}>Start free. Upgrade when you outgrow it.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
          {/* Free */}
          <div style={{ background: '#131b2e', border: '1px solid #464554', borderRadius: '16px', padding: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>Free</h3>
            <p style={{ fontSize: '36px', fontWeight: 700, color: '#c0c1ff', margin: '16px 0' }}>PKR 0<span style={{ fontSize: '16px', color: '#c7c4d7' }}>/mo</span></p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['100 transactions/month', '3 active goals', '3 invoices', 'Basic dashboard'].map(f => (
                <li key={f} style={{ fontSize: '14px', color: '#c7c4d7', display: 'flex', gap: '8px' }}>
                  <span style={{ color: '#4edea3' }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/signup" style={{ display: 'block', textAlign: 'center', padding: '12px', borderRadius: '8px', border: '1px solid #464554', color: '#dae2fd', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>Get started</Link>
          </div>
          {/* Pro */}
          <div style={{ background: '#1a1a3e', border: '2px solid #c0c1ff', borderRadius: '16px', padding: '32px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#c0c1ff', color: '#1000a9', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px' }}>MOST POPULAR</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>Pro</h3>
            <p style={{ fontSize: '36px', fontWeight: 700, color: '#c0c1ff', margin: '16px 0' }}>PKR 999<span style={{ fontSize: '16px', color: '#c7c4d7' }}>/mo</span></p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Unlimited transactions', 'Unlimited goals & invoices', 'PDF reports & CSV export', 'Advanced analytics', 'Premium insights'].map(f => (
                <li key={f} style={{ fontSize: '14px', color: '#c7c4d7', display: 'flex', gap: '8px' }}>
                  <span style={{ color: '#4edea3' }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/signup" style={{ display: 'block', textAlign: 'center', padding: '12px', borderRadius: '8px', background: '#c0c1ff', color: '#1000a9', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Start 14-day trial</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#131b2e', borderTop: '1px solid #464554' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 700, marginBottom: '48px' }}>Loved by users</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              ['"Quantivo replaced four apps for me. My finances finally feel calm."', 'Maya R.', 'Freelance Designer'],
              ['"I track tuition, books, and habits in one place. The streaks are addictive."', 'Daniel K.', 'CS Student'],
              ['"Invoices and subscriptions in one dashboard saved me hours each week."', 'Priya S.', 'Indie Hacker'],
            ].map(([quote, name, role]) => (
              <div key={name as string} style={{ background: '#0b1326', border: '1px solid #464554', borderRadius: '12px', padding: '24px' }}>
                <p style={{ fontSize: '14px', color: '#c7c4d7', lineHeight: 1.7, marginBottom: '16px' }}>{quote}</p>
                <p style={{ fontSize: '14px', fontWeight: 600 }}>{name}</p>
                <p style={{ fontSize: '12px', color: '#908fa0' }}>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 700, marginBottom: '48px' }}>Questions, answered</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            ['Is there a free plan?', 'Yes! The free plan includes 100 transactions/month, 3 goals, and 3 invoices — no credit card required.'],
            ['Can I export my data?', 'Pro users can export full PDF reports and CSV files at any time.'],
            ['Does Quantivo support multiple currencies?', 'Yes — PKR, USD, EUR, GBP and more are supported in settings.'],
            ['Is my financial data secure?', 'All data is encrypted at rest and in transit. We use Supabase with Row Level Security — your data is only accessible to you.'],
            ['Can I cancel anytime?', 'Absolutely. Cancel from your settings in one click. No questions asked.'],
          ].map(([q, a]) => (
            <div key={q as string} style={{ background: '#131b2e', border: '1px solid #464554', borderRadius: '10px', padding: '20px' }}>
              <p style={{ fontWeight: 600, marginBottom: '8px' }}>{q}</p>
              <p style={{ fontSize: '14px', color: '#c7c4d7' }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{ background: '#131b2e', borderTop: '1px solid #464554', textAlign: 'center', padding: '64px 24px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px' }}>Ready to get organized?</h2>
        <p style={{ color: '#c7c4d7', marginBottom: '32px' }}>Join thousands of people building better habits with money, time, and goals.</p>
        <Link href="/signup" style={{ padding: '14px 32px', borderRadius: '10px', background: '#c0c1ff', color: '#1000a9', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>Start Free — No Card Needed</Link>
        <p style={{ marginTop: '48px', fontSize: '13px', color: '#464554' }}>© 2026 Quantivo. All rights reserved.</p>
      </section>

    </div>
  )
}
