'use client'

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

  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: '#0b1326' }}>
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: '#c0c1ff' }}>
            <span className="text-lg font-bold" style={{ color: '#1000a9' }}>Q</span>
          </div>
          <h1 className="text-2xl font-semibold" style={{ color: '#dae2fd' }}>Welcome back</h1>
          <p className="mt-1 text-sm" style={{ color: '#c7c4d7' }}>Sign in to your Quantivo account</p>
        </div>
        <div className="rounded-xl p-8" style={{ background: '#131b2e', border: '1px solid #464554' }}>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="rounded-lg px-4 py-3 text-sm" style={{ background: '#ffb4ab22', color: '#ffb4ab' }}>
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#dae2fd' }}>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full rounded-lg px-3 py-2 text-sm outline-none"
                style={{ background: '#0b1326', border: '1px solid #464554', color: '#dae2fd' }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#dae2fd' }}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full rounded-lg px-3 py-2 text-sm outline-none"
                style={{ background: '#0b1326', border: '1px solid #464554', color: '#dae2fd' }}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition"
              style={{ background: '#c0c1ff', color: '#1000a9', opacity: loading ? 0.6 : 1 }}
            >
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
