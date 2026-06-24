'use client'
export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { createClient } from '@/supabase/client'

interface Habit {
  id: string
  title: string
  description: string | null
  icon: string
  color: string
  frequency: 'daily' | 'weekly'
  current_streak: number
  longest_streak: number
  is_active: boolean
  created_at: string
}

const COLORS = ['#c0c1ff', '#4edea3', '#fa8c00', '#ffb4ab', '#ff33aa', '#ffcc02', '#00acfe']
const ICONS = ['🔥', '💪', '📚', '🧘', '🏃', '💧', '🎯', '✍️', '🌱', '😴']

export default function HabitsPage() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [loading, setLoading] = useState(true)
  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState({ title: '', description: '', icon: '🔥', color: '#c0c1ff', frequency: 'daily' as 'daily' | 'weekly' })
  const [saving, setSaving] = useState(false)
  const [completedToday, setCompletedToday] = useState<Set<string>>(new Set())

  useEffect(() => {
    loadHabits()
  }, [])

  const loadHabits = async () => {
    const supabase = createClient()
    const { data } = await supabase.from('habits').select('*').eq('is_active', true).order('created_at', { ascending: false })
    setHabits(data ?? [])

    const today = new Date().toISOString().split('T')[0]
    const { data: completions } = await supabase.from('habit_completions').select('habit_id').eq('completed_at', today)
    setCompletedToday(new Set(completions?.map(c => c.habit_id) ?? []))
    setLoading(false)
  }

  const addHabit = async () => {
    setSaving(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase.from('habits').insert({ ...form, user_id: user.id })
    setShowAdd(false)
    setForm({ title: '', description: '', icon: '🔥', color: '#c0c1ff', frequency: 'daily' })
    setSaving(false)
    loadHabits()
  }

  const completeHabit = async (habitId: string) => {
    const supabase = createClient()
    const today = new Date().toISOString().split('T')[0]
    if (completedToday.has(habitId)) {
      await supabase.from('habit_completions').delete().eq('habit_id', habitId).eq('completed_at', today)
      setCompletedToday(prev => { const next = new Set(prev); next.delete(habitId); return next })
    } else {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      await supabase.from('habit_completions').insert({ habit_id: habitId, user_id: user.id, completed_at: today })
      setCompletedToday(prev => new Set([...prev, habitId]))
      await supabase.from('habits').update({ current_streak: habits.find(h => h.id === habitId)!.current_streak + 1 }).eq('id', habitId)
      loadHabits()
    }
  }

  const deleteHabit = async (id: string) => {
    const supabase = createClient()
    await supabase.from('habits').update({ is_active: false }).eq('id', id)
    loadHabits()
  }

  const inp: React.CSSProperties = { width: '100%', background: '#0d1c2d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '10px 12px', color: '#d4e4fa', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#e1dfff', margin: 0 }}>Habits & Tasks</h1>
          <p style={{ fontSize: '14px', color: '#918f9a', margin: '4px 0 0' }}>Build streaks. Stay consistent.</p>
        </div>
        <button onClick={() => setShowAdd(true)} style={{ background: '#c0c1ff', color: '#1000a9', border: 'none', borderRadius: '999px', padding: '10px 20px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
          + Add Habit
        </button>
      </div>

      {/* Add Modal */}
      {showAdd && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '16px' }}>
          <div style={{ background: '#0d1c2d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '32px', width: '100%', maxWidth: '440px' }}>
            <h2 style={{ color: '#e1dfff', fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>New Habit</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', color: '#918f9a', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Title</label>
                <input style={inp} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. Morning workout" />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#918f9a', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Frequency</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {(['daily', 'weekly'] as const).map(f => (
                    <button key={f} onClick={() => setForm(prev => ({ ...prev, frequency: f }))}
                      style={{ flex: 1, padding: '8px', borderRadius: '8px', border: '1px solid', borderColor: form.frequency === f ? '#c0c1ff' : 'rgba(255,255,255,0.1)', background: form.frequency === f ? 'rgba(192,193,255,0.1)' : 'transparent', color: form.frequency === f ? '#c0c1ff' : '#918f9a', cursor: 'pointer', fontSize: '13px', fontWeight: 500, textTransform: 'capitalize' }}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#918f9a', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Icon</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {ICONS.map(icon => (
                    <button key={icon} onClick={() => setForm(f => ({ ...f, icon }))}
                      style={{ width: '40px', height: '40px', borderRadius: '8px', border: '1px solid', borderColor: form.icon === icon ? '#c0c1ff' : 'rgba(255,255,255,0.1)', background: form.icon === icon ? 'rgba(192,193,255,0.1)' : 'transparent', fontSize: '20px', cursor: 'pointer' }}>
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#918f9a', display: 'block', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Color</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {COLORS.map(color => (
                    <button key={color} onClick={() => setForm(f => ({ ...f, color }))}
                      style={{ width: '28px', height: '28px', borderRadius: '50%', background: color, border: form.color === color ? '3px solid white' : '3px solid transparent', cursor: 'pointer', transition: 'border 0.15s' }} />
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button onClick={() => setShowAdd(false)} style={{ flex: 1, padding: '11px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#c7c5d0', cursor: 'pointer', fontSize: '14px' }}>Cancel</button>
              <button onClick={addHabit} disabled={!form.title || saving}
                style={{ flex: 2, padding: '11px', borderRadius: '8px', background: '#c0c1ff', color: '#1000a9', border: 'none', fontWeight: 700, cursor: 'pointer', fontSize: '14px', opacity: !form.title ? 0.5 : 1 }}>
                {saving ? 'Saving...' : 'Create Habit'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Habits Grid */}
      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {[1,2,3].map(i => <div key={i} style={{ height: '180px', background: 'rgba(18,33,49,0.6)', borderRadius: '16px', animation: 'pulse 2s infinite' }} />)}
        </div>
      ) : habits.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 24px', background: 'rgba(18,33,49,0.4)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔥</div>
          <h3 style={{ color: '#e1dfff', fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>No habits yet</h3>
          <p style={{ color: '#918f9a', fontSize: '14px', marginBottom: '24px' }}>Start building your first streak today</p>
          <button onClick={() => setShowAdd(true)} style={{ background: '#c0c1ff', color: '#1000a9', border: 'none', borderRadius: '999px', padding: '10px 24px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>Add your first habit</button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {habits.map(habit => {
            const done = completedToday.has(habit.id)
            return (
              <div key={habit.id} style={{ background: 'rgba(18,33,49,0.6)', border: `1px solid ${done ? habit.color + '60' : 'rgba(255,255,255,0.08)'}`, borderRadius: '16px', padding: '24px', transition: 'all 0.2s', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: habit.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>{habit.icon}</div>
                    <div>
                      <p style={{ fontSize: '15px', fontWeight: 600, color: '#e1dfff', margin: 0 }}>{habit.title}</p>
                      <p style={{ fontSize: '12px', color: '#918f9a', margin: '2px 0 0', textTransform: 'capitalize' }}>{habit.frequency}</p>
                    </div>
                  </div>
                  <button onClick={() => deleteHabit(habit.id)} style={{ background: 'none', border: 'none', color: '#464654', cursor: 'pointer', fontSize: '16px', padding: '4px' }}>✕</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '24px', fontWeight: 700, color: habit.color, fontFamily: 'JetBrains Mono, monospace', margin: 0 }}>{habit.current_streak}</p>
                    <p style={{ fontSize: '11px', color: '#918f9a', margin: '2px 0 0' }}>Current streak</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '24px', fontWeight: 700, color: '#c7c5d0', fontFamily: 'JetBrains Mono, monospace', margin: 0 }}>{habit.longest_streak}</p>
                    <p style={{ fontSize: '11px', color: '#918f9a', margin: '2px 0 0' }}>Best streak</p>
                  </div>
                  <button onClick={() => completeHabit(habit.id)}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', background: done ? habit.color : 'transparent', border: `2px solid ${habit.color}`, color: done ? '#fff' : habit.color, fontSize: '20px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {done ? '✓' : '○'}
                  </button>
                </div>
                {done && (
                  <div style={{ background: habit.color + '18', borderRadius: '8px', padding: '6px 12px', textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', color: habit.color, fontWeight: 600 }}>✓ Completed today!</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
