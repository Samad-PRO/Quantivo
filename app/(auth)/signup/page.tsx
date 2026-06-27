'use client'
export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/supabase/client'

export default function SignupPage() {
  const supabase = createClient()
  const [step, setStep] = useState<'signup' | 'otp'>('signup')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const inputStyle: React.CSSProperties = {
    width: '100%', background: '#0b1326', border: '1px solid #464554',
    borderRadius: '8px', padding: '10px 12px', color: '#dae2fd',
    fontSize: '14px', outline: 'none', boxSizing: 'border-box'
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Use signInWithOtp for passwordless signup
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { data: { full_name: fullName } }
    })
    if (error) { setError(error.message); setLoading(false); return }
    setStep('otp')
    setLoading(false)
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.verifyOtp({ email, token: otp, type: 'email' })
    if (error) { setError(error.message); setLoading(false); return }
    window.location.href = '/dashboard'
  }

  const cardStyle: React.CSSProperties = {
    background: '#131b2e', border: '1px solid #464554', borderRadius: '16px',
    padding: '32px', boxShadow: '0 24px 48px rgba(0,0,0,0.4)'
  }

  if (step === 'otp') {
    return (
      <div style={{ minHeight: '100vh', background: '#0b1326', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ width: '48px', height: '48px', background: '#c0c1ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <span style={{ color: '#1000a9', fontWeight: 800, fontSize: '20px' }}>Q</span>
            </div>
            <h1 style={{ color: '#dae2fd', fontSize: '24px', fontWeight: 700, margin: '0 0 8px' }}>Check your email</h1>
            <p style={{ color: '#c7c4d7', fontSize: '14px', margin: 0 }}>
              We sent a 6-digit code to{' '}
              <strong style={{ color: '#c0c1ff' }}>{email}</strong>
            </p>
          </div>
          <div style={cardStyle}>
            <form onSubmit={handleVerifyOtp} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {error && (
                <div style={{ background: '#ffb4ab18', border: '1px solid #ffb4ab44', borderRadius: '8px', padding: '10px 14px', color: '#ffb4ab', fontSize: '13px' }}>
                  {error}
                </div>
              )}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#dae2fd', marginBottom: '10px', textAlign: 'center' }}>
                  Enter your 6-digit verification code
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="000000"
                  value={otp}
                  onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
                  autoFocus
                  style={{ width: '100%', background: '#0b1326', border: '2px solid #c0c1ff', borderRadius: '10px', padding: '16px 12px', color: '#dae2fd', fontSize: '28px', fontWeight: 700, textAlign: 'center', letterSpacing: '12px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                style={{ width: '100%', background: '#c0c1ff', color: '#1000a9', border: 'none', borderRadius: '10px', padding: '12px', fontSize: '14px', fontWeight: 700, cursor: otp.length !== 6 ? 'not-allowed' : 'pointer', opacity: (loading || otp.length !== 6) ? 0.6 : 1 }}
              >
                {loading ? 'Verifying...' : 'Verify & Enter Dashboard'}
              </button>
              <button
                type="button"
                onClick={() => { setStep('signup'); setOtp(''); setError(null) }}
                style={{ background: 'none', border: 'none', color: '#c0c1ff', fontSize: '13px', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}
              >
                Back to signup
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0b1326', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ width: '48px', height: '48px', background: '#c0c1ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', cursor: 'pointer' }}>
              <span style={{ color: '#1000a9', fontWeight: 800, fontSize: '20px' }}>Q</span>
            </div>
          </Link>
          <h1 style={{ color: '#dae2fd', fontSize: '24px', fontWeight: 700, margin: '0 0 8px' }}>Create your account</h1>
          <p style={{ color: '#c7c4d7', fontSize: '14px', margin: 0 }}>Start tracking your finances today</p>
        </div>
        <div style={cardStyle}>
          {/* Passwordless info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#c0c1ff10', border: '1px solid #c0c1ff22', borderRadius: '8px', padding: '10px 14px', marginBottom: '20px' }}>
            <span style={{ fontSize: '16px' }}>🔐</span>
            <span style={{ color: '#c7c4d7', fontSize: '12px' }}>No password needed — we'll verify you via email code.</span>
          </div>

          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {error && (
              <div style={{ background: '#ffb4ab18', border: '1px solid #ffb4ab44', borderRadius: '8px', padding: '10px 14px', color: '#ffb4ab', fontSize: '13px' }}>
                {error}
              </div>
            )}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#dae2fd', marginBottom: '6px' }}>Full Name</label>
              <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} required placeholder="Your name" style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#dae2fd', marginBottom: '6px' }}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" style={inputStyle} />
            </div>
            <button type="submit" disabled={loading} style={{ width: '100%', background: '#c0c1ff', color: '#1000a9', border: 'none', borderRadius: '10px', padding: '12px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', opacity: loading ? 0.6 : 1 }}>
              {loading ? 'Sending code...' : 'Create account'}
            </button>
          </form>
          <p style={{ textAlign: 'center', fontSize: '13px', color: '#c7c4d7', marginTop: '20px', marginBottom: 0 }}>
            Already have an account?{' '}
            <Link href="/login" style={{ color: '#c0c1ff', textDecoration: 'none', fontWeight: 500 }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
