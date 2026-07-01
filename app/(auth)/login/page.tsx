'use client'
export const dynamic = 'force-dynamic'

import { useState, useRef, KeyboardEvent } from 'react'
import Link from 'next/link'
import { createClient } from '@/supabase/client'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const supabase = createClient()
  const [step, setStep] = useState<'login' | 'forgot' | 'forgot_otp'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const otpRefs = useRef<(HTMLInputElement | null)[]>([])

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'var(--bg-canvas)', border: '1px solid var(--border-color)',
    borderRadius: '8px', padding: '10px 12px', color: 'var(--text-primary)',
    fontSize: '14px', outline: 'none', boxSizing: 'border-box'
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    
    if (error) { setError(error.message); setLoading(false); return }
    
    window.location.href = '/dashboard'
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    // We send recovery email which should contain the OTP token. (Requires Supabase Email Template to be set for Recovery)
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    
    if (error) { setError(error.message); setLoading(false); return }
    
    setStep('forgot_otp')
    setLoading(false)
  }

  const handleVerifyForgotOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = otp.join('')
    if (token.length !== 6) return
    
    setLoading(true)
    setError(null)
    
    const { error } = await supabase.auth.verifyOtp({ email, token, type: 'recovery' })
    if (error) { setError(error.message); setLoading(false); return }
    
    window.location.href = '/reset-password'
  }

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value !== '' && index < 5) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasteData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (pasteData) {
      const newOtp = [...otp]
      for (let i = 0; i < pasteData.length; i++) {
        newOtp[i] = pasteData[i]
      }
      setOtp(newOtp)
      const nextFocus = Math.min(pasteData.length, 5)
      otpRefs.current[nextFocus]?.focus()
    }
  }

  const cardStyle: React.CSSProperties = {
    background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '16px',
    padding: '32px', boxShadow: '0 24px 48px rgba(0,0,0,0.1)'
  }

  if (step === 'forgot_otp') {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg-canvas)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ width: '48px', height: '48px', background: '#c0c1ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <span style={{ color: '#1000a9', fontWeight: 800, fontSize: '20px' }}>Q</span>
            </div>
            <h1 style={{ color: 'var(--text-primary)', fontSize: '24px', fontWeight: 700, margin: '0 0 8px' }}>Check your email</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>
              We sent a 6-digit recovery code to{' '}
              <strong style={{ color: '#c0c1ff' }}>{email}</strong>
            </p>
          </div>
          <div style={cardStyle}>
            <form onSubmit={handleVerifyForgotOtp} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {error && (
                <div style={{ background: '#ffb4ab18', border: '1px solid #ffb4ab44', borderRadius: '8px', padding: '10px 14px', color: '#ffb4ab', fontSize: '13px' }}>
                  {error}
                </div>
              )}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '16px', textAlign: 'center' }}>
                  Enter your 6-digit verification code
                </label>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={el => { otpRefs.current[index] = el }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={e => handleOtpChange(index, e.target.value)}
                      onKeyDown={e => handleOtpKeyDown(index, e)}
                      onPaste={handleOtpPaste}
                      autoFocus={index === 0}
                      style={{ 
                        width: '45px', height: '56px', background: 'var(--bg-canvas)', border: '2px solid var(--border-color)', 
                        borderRadius: '10px', color: 'var(--text-primary)', fontSize: '24px', fontWeight: 700, 
                        textAlign: 'center', outline: 'none' 
                      }}
                      onFocus={(e) => { e.target.style.borderColor = '#c0c1ff' }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)' }}
                    />
                  ))}
                </div>
              </div>
              <button
                type="submit"
                disabled={loading || otp.join('').length !== 6}
                style={{ width: '100%', background: '#c0c1ff', color: '#1000a9', border: 'none', borderRadius: '10px', padding: '12px', fontSize: '14px', fontWeight: 700, cursor: otp.join('').length !== 6 ? 'not-allowed' : 'pointer', opacity: (loading || otp.join('').length !== 6) ? 0.6 : 1 }}
              >
                {loading ? 'Verifying...' : 'Verify Code'}
              </button>
              
              <button
                type="button"
                onClick={() => { setStep('login'); setOtp(['','','','','','']); setError(null) }}
                style={{ background: 'none', border: 'none', color: '#c0c1ff', fontSize: '13px', cursor: 'pointer', textDecoration: 'underline', padding: 0, marginTop: '-8px' }}
              >
                Back to login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  if (step === 'forgot') {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg-canvas)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div style={{ width: '48px', height: '48px', background: '#c0c1ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', cursor: 'pointer' }}>
                <span style={{ color: '#1000a9', fontWeight: 800, fontSize: '20px' }}>Q</span>
              </div>
            </Link>
            <h1 style={{ color: 'var(--text-primary)', fontSize: '24px', fontWeight: 700, margin: '0 0 8px' }}>Reset your password</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>Enter your email to receive a recovery code</p>
          </div>
          <div style={cardStyle}>
            <form onSubmit={handleForgotPassword} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {error && (
                <div style={{ background: '#ffb4ab18', border: '1px solid #ffb4ab44', borderRadius: '8px', padding: '10px 14px', color: '#ffb4ab', fontSize: '13px' }}>
                  {error}
                </div>
              )}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '6px' }}>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" style={inputStyle} />
              </div>
              <button type="submit" disabled={loading} style={{ width: '100%', background: '#c0c1ff', color: '#1000a9', border: 'none', borderRadius: '10px', padding: '12px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', opacity: loading ? 0.6 : 1, marginTop: '8px' }}>
                {loading ? 'Sending...' : 'Send Recovery Code'}
              </button>
            </form>
            <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '20px', marginBottom: 0 }}>
              <button type="button" onClick={() => { setStep('login'); setError(null) }} style={{ background: 'none', border: 'none', color: '#c0c1ff', padding: 0, fontWeight: 500, cursor: 'pointer' }}>Back to login</button>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-canvas)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '420px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ width: '48px', height: '48px', background: '#c0c1ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', cursor: 'pointer' }}>
              <span style={{ color: '#1000a9', fontWeight: 800, fontSize: '20px' }}>Q</span>
            </div>
          </Link>
          <h1 style={{ color: 'var(--text-primary)', fontSize: '24px', fontWeight: 700, margin: '0 0 8px' }}>Welcome back</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>Sign in to your account</p>
        </div>
        <div style={cardStyle}>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {error && (
              <div style={{ background: '#ffb4ab18', border: '1px solid #ffb4ab44', borderRadius: '8px', padding: '10px 14px', color: '#ffb4ab', fontSize: '13px' }}>
                {error}
              </div>
            )}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '6px' }}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" style={inputStyle} />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)' }}>Password</label>
                <button type="button" onClick={() => { setStep('forgot'); setError(null) }} style={{ fontSize: '13px', fontWeight: 500, color: '#c0c1ff', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                  Forgot?
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password} onChange={e => setPassword(e.target.value)} required 
                  placeholder="Your password" 
                  style={{ ...inputStyle, paddingRight: '40px' }} 
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 0, display: 'flex' }}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} style={{ width: '100%', background: '#c0c1ff', color: '#1000a9', border: 'none', borderRadius: '10px', padding: '12px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', opacity: loading ? 0.6 : 1, marginTop: '8px' }}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '20px', marginBottom: 0 }}>
            Don't have an account?{' '}
            <Link href="/signup" style={{ color: '#c0c1ff', textDecoration: 'none', fontWeight: 500 }}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
