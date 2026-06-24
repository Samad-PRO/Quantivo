'use client'

export const dynamic = 'force-dynamic'

import { useEffect, useState } from 'react'
import { createClient } from '@/supabase/client'
import { formatCurrency } from '@/lib/currency'
import { format } from 'date-fns'

interface Transaction {
  id: string
  date: string
  description: string
  amount: number
  type: 'income' | 'expense'
  categories?: {
    name: string
    color: string
  } | null
}

export default function FinancesPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortField, setSortField] = useState<'date' | 'amount'>('date')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  const fetchTransactions = async () => {
    setLoading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data, error } = await supabase
      .from('transactions')
      .select('id, date, description, amount, type, categories(name,color)')
      .eq('user_id', user.id)
      .order('date', { ascending: false })

    if (!error && data) {
      // Map schema relations to standard structures
      const formatted = (data as any[]).map(tx => ({
        id: tx.id,
        date: tx.date,
        description: tx.description,
        amount: Number(tx.amount),
        type: tx.type,
        categories: Array.isArray(tx.categories) ? tx.categories[0] : tx.categories
      }))
      setTransactions(formatted)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  const handleAddTransaction = async (type: 'income' | 'expense') => {
    const desc = prompt(`Enter ${type} description:`)
    if (!desc) return
    const amtStr = prompt('Enter amount:')
    if (!amtStr) return
    const amt = parseFloat(amtStr)
    if (isNaN(amt)) return

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // Get default category if possible
    const { data: catData } = await supabase.from('categories').select('id').limit(1).single()
    const category_id = catData?.id || null

    const { error } = await supabase.from('transactions').insert({
      user_id: user.id,
      description: desc,
      amount: amt,
      type,
      date: format(new Date(), 'yyyy-MM-dd'),
      category_id
    })

    if (error) {
      alert(`Error creating transaction: ${error.message}`)
    } else {
      fetchTransactions()
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this transaction?')) return
    const supabase = createClient()
    const { error } = await supabase.from('transactions').delete().eq('id', id)
    if (error) {
      alert(`Error deleting transaction: ${error.message}`)
    } else {
      fetchTransactions()
    }
  }

  // Filter & Search Logic
  const filteredTransactions = transactions
    .filter(tx => {
      if (filter === 'income' && tx.type !== 'income') return false
      if (filter === 'expense' && tx.type !== 'expense') return false
      if (searchTerm && !tx.description.toLowerCase().includes(searchTerm.toLowerCase())) return false
      return true
    })
    .sort((a, b) => {
      let comparison = 0
      if (sortField === 'date') {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
      } else if (sortField === 'amount') {
        comparison = a.amount - b.amount
      }
      return sortOrder === 'desc' ? -comparison : comparison
    })

  // Pagination
  const pageCount = Math.ceil(filteredTransactions.length / itemsPerPage)
  const paginatedTransactions = filteredTransactions.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  const toggleSort = (field: 'date' | 'amount') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    } else {
      setSortField(field)
      setSortOrder('desc')
    }
    setPage(1)
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
        .glass-input {
          background: rgba(10, 20, 30, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-input:focus {
          outline: none;
          border-color: rgba(225, 223, 255, 0.5);
          box-shadow: 0 0 0 2px rgba(225, 223, 255, 0.2);
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto pb-12 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display-lg text-[40px] font-bold text-white mb-2 tracking-tight">Finances</h2>
            <p className="text-[#c7c5d0]">Manage and track your operational cash flow.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleAddTransaction('income')}
              className="bg-[#c0c1ff] text-[#051424] px-6 py-2.5 rounded-full font-medium flex items-center gap-2 hover:brightness-110 hover:shadow-[0_0_20px_rgba(192,193,255,0.3)] transition-all"
            >
              <span className="material-symbols-outlined text-sm">add</span>
              Add Income
            </button>
            <button
              onClick={() => handleAddTransaction('expense')}
              className="bg-[#fa8c00] text-[#051424] px-6 py-2.5 rounded-full font-medium flex items-center gap-2 hover:brightness-110 hover:shadow-[0_0_20px_rgba(250,140,0,0.3)] transition-all"
            >
              <span className="material-symbols-outlined text-sm">remove</span>
              Add Expense
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="glass-card p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-center bg-[#010f1f]/50 rounded-lg p-1 border border-white/5 self-start">
            {(['all', 'income', 'expense'] as const).map(type => (
              <button
                key={type}
                onClick={() => { setFilter(type); setPage(1) }}
                className={`px-4 py-1.5 rounded-md font-medium text-sm transition-colors ${filter === type ? 'bg-white/10 text-white' : 'text-[#c7c5d0] hover:text-white'}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c7c5d0] text-sm">search</span>
              <input
                type="text"
                placeholder="Search description..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setPage(1) }}
                className="glass-input text-white rounded-lg pl-9 pr-4 py-2 text-sm w-64"
              />
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-[#c7c5d0] font-mono text-xs uppercase tracking-wider">
                  <th
                    onClick={() => toggleSort('date')}
                    className="py-4 px-6 font-medium cursor-pointer hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      Date
                      <span className={`material-symbols-outlined text-[16px] transition-transform ${sortField === 'date' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} ${sortOrder === 'asc' && sortField === 'date' ? 'rotate-180' : ''}`}>
                        arrow_downward
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-6 font-medium">Description</th>
                  <th className="py-4 px-6 font-medium">Category</th>
                  <th
                    onClick={() => toggleSort('amount')}
                    className="py-4 px-6 font-medium text-right cursor-pointer hover:text-white transition-colors group"
                  >
                    <div className="flex items-center justify-end gap-2">
                      Amount
                      <span className={`material-symbols-outlined text-[16px] transition-transform ${sortField === 'amount' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} ${sortOrder === 'asc' && sortField === 'amount' ? 'rotate-180' : ''}`}>
                        arrow_downward
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-6 font-medium text-center">Type</th>
                  <th className="py-4 px-6 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-sm text-[#c7c5d0]">Loading transactions...</td>
                  </tr>
                ) : paginatedTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-sm text-[#c7c5d0]">No transactions found</td>
                  </tr>
                ) : (
                  paginatedTransactions.map((tx) => {
                    const isIncome = tx.type === 'income'
                    const catColor = tx.categories?.color || '#918f9a'
                    const catName = tx.categories?.name || 'Other'
                    return (
                      <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="py-4 px-6 font-mono text-sm text-[#c7c5d0]">{tx.date}</td>
                        <td className="py-4 px-6 font-body-md text-white font-medium">{tx.description}</td>
                        <td className="py-4 px-6">
                          <span
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
                            style={{
                              backgroundColor: `${catColor}15`,
                              borderColor: `${catColor}30`,
                              color: catColor
                            }}
                          >
                            {catName}
                          </span>
                        </td>
                        <td className={`py-4 px-6 font-mono text-right font-medium ${isIncome ? 'text-emerald-400' : 'text-[#ff4433]'}`}>
                          {isIncome ? '+' : '-'}{formatCurrency(tx.amount)}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className={`material-symbols-outlined text-[20px] ${isIncome ? 'text-emerald-400' : 'text-[#ff4433]'}`}>
                            {isIncome ? 'arrow_circle_up' : 'arrow_circle_down'}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => handleDelete(tx.id)}
                            className="text-[#c7c5d0] hover:text-[#ff4433] p-1 transition-colors"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pageCount > 1 && (
            <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-sm text-[#c7c5d0]">
                Showing {(page - 1) * itemsPerPage + 1}-{Math.min(page * itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-[#c7c5d0] hover:bg-white/5 hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-8 h-8 rounded font-mono text-sm border flex items-center justify-center transition-colors ${page === i + 1 ? 'bg-[#c0c1ff]/20 text-[#c0c1ff] border-[#c0c1ff]/30' : 'border-white/10 text-[#c7c5d0] hover:bg-white/5 hover:text-white'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  disabled={page === pageCount}
                  onClick={() => setPage(p => Math.min(pageCount, p + 1))}
                  className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-[#c7c5d0] hover:bg-white/5 hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
