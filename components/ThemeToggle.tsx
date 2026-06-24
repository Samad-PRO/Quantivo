'use client'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('quantivo-theme')
    const isDark = saved ? saved === 'dark' : true
    setDark(isDark)
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    document.documentElement.style.setProperty('--bg-canvas', isDark ? '#051424' : '#f8f9fc')
    document.documentElement.style.setProperty('--text-primary', isDark ? '#d4e4fa' : '#1a1a2e')
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    localStorage.setItem('quantivo-theme', next ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
    document.documentElement.style.setProperty('--bg-canvas', next ? '#051424' : '#f8f9fc')
    document.documentElement.style.setProperty('--text-primary', next ? '#d4e4fa' : '#1a1a2e')
    document.documentElement.style.background = next ? '#051424' : '#f8f9fc'
    document.body.style.background = next ? '#051424' : '#f8f9fc'
    document.body.style.color = next ? '#d4e4fa' : '#1a1a2e'
  }

  return (
    <button
      onClick={toggle}
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '999px',
        padding: '6px 14px',
        color: '#c7c5d0',
        fontSize: '13px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'all 0.2s'
      }}
      title="Toggle theme"
    >
      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
        {dark ? 'light_mode' : 'dark_mode'}
      </span>
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}
