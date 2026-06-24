'use client'

export const dynamic = 'force-dynamic'

import { useEffect, useState } from 'react'
import { createClient } from '@/supabase/client'
import { formatCurrency } from '@/lib/currency'
import { format } from 'date-fns'

interface Goal {
  id: string
  name: string
  current_amount: number
  target_amount: number
  status: 'active' | 'completed' | 'paused'
  deadline?: string | null
}

const getGoalEmoji = (name: string) => {
  const n = name.toLowerCase()
  if (n.includes('house') || n.includes('home') || n.includes('real estate')) return '🏠'
  if (n.includes('car') || n.includes('tesla') || n.includes('vehicle')) return '🚗'
  if (n.includes('trip') || n.includes('japan') || n.includes('travel') || n.includes('vacation')) return '✈️'
  if (n.includes('ring') || n.includes('wedding') || n.includes('engagement')) return '💍'
  if (n.includes('retire') || n.includes('portfolio') || n.includes('invest') || n.includes('savings')) return '📈'
  return '🎯'
}

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [loading, setLoading] = useState(true)

  const fetchGoals = async () => {
    setLoading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data, error } = await supabase
      .from('goals')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (!error && data) {
      setGoals(data.map(g => ({
        id: g.id,
        name: g.name,
        current_amount: Number(g.current_amount || 0),
        target_amount: Number(g.target_amount || 0),
        status: g.status as Goal['status'],
        deadline: g.deadline
      })))
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchGoals()
  }, [])

  const handleAddGoal = async () => {
    const name = prompt('Enter goal name:')
    if (!name) return
    const targetStr = prompt('Enter target amount ($):')
    if (!targetStr) return
    const target = parseFloat(targetStr)
    if (isNaN(target) || target <= 0) return

    const deadline = prompt('Enter deadline (e.g. YYYY-MM-DD or Dec 2025):') || null

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { error } = await supabase.from('goals').insert({
      user_id: user.id,
      name,
      target_amount: target,
      current_amount: 0,
      status: 'active',
      deadline
    })

    if (error) {
      alert(`Error creating goal: ${error.message}`)
    } else {
      fetchGoals()
    }
  }

  const handleAddMoney = async (goal: Goal) => {
    const amtStr = prompt(`How much money would you like to allocate to ${goal.name}?`)
    if (!amtStr) return
    const amt = parseFloat(amtStr)
    if (isNaN(amt) || amt <= 0) return

    const newCurrent = goal.current_amount + amt
    const newStatus = newCurrent >= goal.target_amount ? 'completed' : goal.status

    const supabase = createClient()
    const { error } = await supabase
      .from('goals')
      .update({ current_amount: newCurrent, status: newStatus })
      .eq('id', goal.id)

    if (error) {
      alert(`Error updating goal: ${error.message}`)
    } else {
      fetchGoals()
    }
  }

  const handleToggleStatus = async (goal: Goal) => {
    const newStatus = goal.status === 'paused' ? 'active' : 'paused'
    const supabase = createClient()
    const { error } = await supabase
      .from('goals')
      .update({ status: newStatus })
      .eq('id', goal.id)

    if (error) {
      alert(`Error toggling goal status: ${error.message}`)
    } else {
      fetchGoals()
    }
  }

  return (
    <>
      <style>{`
        .glass-card {
          background: rgba(18, 33, 49, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
        }
        .progress-ring__circle {
          transition: stroke-dashoffset 0.35s;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto pb-12 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="font-headline-xl text-3xl font-bold text-[#c0c1ff] mb-2">Financial Goals</h1>
            <p className="font-body-md text-sm text-[#c7c5d0]">Track your savings milestones and strategic objectives.</p>
          </div>
          <button
            onClick={handleAddGoal}
            className="flex items-center justify-center gap-2 bg-[#c0c1ff] text-[#051424] px-6 py-3 rounded-full font-body-md text-sm font-semibold hover:opacity-90 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Add New Goal
          </button>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full py-12 text-center text-sm text-[#c7c5d0]">Loading goals...</div>
          ) : (
            <>
              {goals.map((goal) => {
                const pct = goal.target_amount > 0 ? Math.min(100, Math.round((goal.current_amount / goal.target_amount) * 100)) : 0
                const strokeOffset = 251.2 - (251.2 * pct) / 100
                const emoji = getGoalEmoji(goal.name)
                const isCompleted = goal.status === 'completed'
                const isPaused = goal.status === 'paused'

                return (
                  <div key={goal.id} className={`glass-card rounded-2xl p-6 flex flex-col relative overflow-hidden group ${isCompleted ? 'border-[#fee089]/20' : ''}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#c0c1ff]/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                    <div className="flex justify-between items-start mb-6 z-10">
                      <div className="w-12 h-12 rounded-xl bg-black/30 border border-white/5 flex items-center justify-center text-2xl shadow-inner">
                        {emoji}
                      </div>
                      <div className="flex gap-2">
                        {goal.deadline && (
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#c7c5d0] font-mono text-[10px]">
                            Due: {goal.deadline}
                          </span>
                        )}
                        <span className={`px-3 py-1 rounded-full font-mono text-[10px] uppercase ${isCompleted ? 'bg-[#fee089]/10 border border-[#fee089]/20 text-[#fee089]' : isPaused ? 'bg-white/5 border border-white/10 text-[#c7c5d0]' : 'bg-[#c0c1ff]/10 border border-[#c0c1ff]/20 text-[#c0c1ff]'}`}>
                          {goal.status}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-headline-lg text-xl font-bold text-white mb-1 z-10">{goal.name}</h3>
                    <p className="font-body-sm text-xs text-[#c7c5d0] mb-6 z-10">
                      {isCompleted ? 'Goal fully completed!' : isPaused ? 'Goal currently paused' : 'Accumulating savings'}
                    </p>

                    <div className="flex items-center gap-6 mb-8 z-10">
                      {/* Circular Progress */}
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle className="text-white/10 stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
                          <circle
                            className={`${isCompleted ? 'text-[#fee089]' : 'text-[#c0c1ff]'} stroke-current progress-ring__circle`}
                            cx="50"
                            cy="50"
                            fill="transparent"
                            r="40"
                            strokeDasharray="251.2"
                            strokeDashoffset={strokeOffset}
                            strokeLinecap="round"
                            strokeWidth="8"
                          ></circle>
                        </svg>
                        <div className={`absolute inset-0 flex items-center justify-center font-mono text-sm text-white ${isCompleted ? 'text-[#fee089]' : ''}`}>{pct}%</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="font-mono text-2xl font-bold text-white">{formatCurrency(goal.current_amount)}</span>
                        </div>
                        <div className="font-mono text-xs text-[#c7c5d0]">
                          of {formatCurrency(goal.target_amount)} target
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto z-10 flex gap-2">
                      {!isCompleted ? (
                        <>
                          <button
                            onClick={() => handleAddMoney(goal)}
                            className="flex-1 py-2.5 rounded-full bg-transparent border border-white/20 text-white hover:bg-white/5 transition-all font-body-sm text-sm flex items-center justify-center gap-2 group-hover:border-[#c0c1ff]/50"
                          >
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            Add Money
                          </button>
                          <button
                            onClick={() => handleToggleStatus(goal)}
                            className="px-3 py-2.5 rounded-full bg-transparent border border-white/10 text-[#c7c5d0] hover:bg-white/5 transition-all font-body-sm text-sm"
                            title={isPaused ? 'Resume Goal' : 'Pause Goal'}
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              {isPaused ? 'play_arrow' : 'pause'}
                            </span>
                          </button>
                        </>
                      ) : (
                        <div className="w-full py-2.5 rounded-full bg-transparent border border-[#fee089]/20 text-[#fee089] font-body-sm text-sm flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-[18px]">check_circle</span>
                          Goal Reached
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* Track New Goal Placeholder Card */}
              <div
                onClick={handleAddGoal}
                className="rounded-2xl p-6 flex flex-col items-center justify-center border-2 border-dashed border-white/10 hover:border-[#c0c1ff]/30 bg-black/10 hover:bg-[#c0c1ff]/5 transition-all cursor-pointer min-h-[280px] group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-[#c7c5d0] group-hover:text-[#c0c1ff] transition-colors">add</span>
                </div>
                <h3 className="font-headline-lg text-lg font-bold text-white mb-2">Track New Goal</h3>
                <p className="font-body-sm text-xs text-[#c7c5d0] text-center max-w-[200px]">Define a new financial objective and start allocating funds.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
