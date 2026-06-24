'use client'
export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); setLoading(false); return }
    router.push('/dashboard')
    router.refresh()
  }

  const handleGoogle = async () => {
    setGoogleLoading(true)
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` }
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: '#0b1326' }}>
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl cursor-pointer" style={{ background: '#c0c1ff' }}>
              <span className="text-lg font-bold" style={{ color: '#1000a9' }}>Q</span>
            </div>
          </Link>
          <h1 className="text-2xl font-semibold" style={{ color: '#dae2fd' }}>Welcome back</h1>
          <p className="mt-1 text-sm" style={{ color: '#c7c4d7' }}>Sign in to your Quantivo account</p>
        </div>
        <div className="rounded-xl p-8" style={{ background: '#131b2e', border: '1px solid #464554' }}>

          {/* Google Button */}
          <button
            onClick={handleGoogle}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition mb-4"
            style={{ background: '#1e293b', border: '1px solid #464554', color: '#dae2fd', opacity: googleLoading ? 0.6 : 1 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {googleLoading ? 'Redirecting...' : 'Continue with Google'}
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px" style={{ background: '#464554' }}></div>
            <span className="text-xs" style={{ color: '#908fa0' }}>or</span>
            <div className="flex-1 h-px" style={{ background: '#464554' }}></div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="rounded-lg px-4 py-3 text-sm" style={{ background: '#ffb4ab22', color: '#ffb4ab' }}>{error}</div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#dae2fd' }}>Email</label>
              <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required
                className="w-full rounded-lg px-3 py-2 text-sm outline-none"
                style={{ background: '#0b1326', border: '1px solid #464554', color: '#dae2fd' }} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#dae2fd' }}>Password</label>
              <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required
                className="w-full rounded-lg px-3 py-2 text-sm outline-none"
                style={{ background: '#0b1326', border: '1px solid #464554', color: '#dae2fd' }} />
            </div>
            <button type="submit" disabled={loading} className="w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition"
              style={{ background: '#c0c1ff', color: '#1000a9', opacity: loading ? 0.6 : 1 }}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
          <p className="mt-6 text-center text-sm" style={{ color: '#c7c4d7' }}>
            Don&apos;t have an account?{' '}
            <Link href="/signup" style={{ color: '#c0c1ff' }}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
