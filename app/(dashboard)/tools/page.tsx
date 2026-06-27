'use client'
export const dynamic = 'force-dynamic'

import { useState, useRef } from 'react'
import { createClient } from '@/supabase/client'

/* ── helpers ── */
const fmt = (n: number, cur = 'USD') =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: cur, maximumFractionDigits: 2 }).format(n)

/* ── Statement Generator types ── */
interface StatementTx {
  date: string
  description: string
  credit: number
  debit: number
}

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<'pdf' | 'statement'>('pdf')
  const [toast, setToast] = useState<string | null>(null)

  // ── PDF Converter state ──
  const [htmlInput, setHtmlInput] = useState(`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 40px; color: #333; }
    h1 { color: #4f46e5; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th { background: #f3f4f6; padding: 10px; text-align: left; }
    td { padding: 10px; border-bottom: 1px solid #e5e7eb; }
  </style>
</head>
<body>
  <h1>Sample Report</h1>
  <p>This is a preview of your HTML-to-PDF conversion.</p>
  <table>
    <tr><th>Item</th><th>Amount</th></tr>
    <tr><td>Revenue Q1</td><td>$12,400</td></tr>
    <tr><td>Expenses Q1</td><td>$8,200</td></tr>
    <tr><td><strong>Net</strong></td><td><strong>$4,200</strong></td></tr>
  </table>
</body>
</html>`)
  const [pdfConverting, setPdfConverting] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // ── Statement Generator state ──
  const [stmtName, setStmtName] = useState('')
  const [stmtPeriod, setStmtPeriod] = useState('')
  const [stmtTxs, setStmtTxs] = useState<StatementTx[]>([
    { date: '', description: '', credit: 0, debit: 0 }
  ])
  const [stmtLoading, setStmtLoading] = useState(false)
  const [stmtFromDB, setStmtFromDB] = useState(false)
  const [dbLoading, setDbLoading] = useState(false)

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(null), 3200)
  }

  /* ── PDF Converter ── */
  const handleConvertPDF = async () => {
    setPdfConverting(true)
    try {
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF({ unit: 'pt', format: 'a4' })

      // Use iframe srcdoc to get rendered content, then use html2canvas approach via jsPDF html()
      const iframe = iframeRef.current
      if (!iframe || !iframe.contentDocument) {
        showToast('Preview not ready — try again in a moment.')
        setPdfConverting(false)
        return
      }

      const element = iframe.contentDocument.body
      await (doc as any).html(element, {
        callback: (doc: any) => {
          doc.save('converted-document.pdf')
          showToast('PDF downloaded successfully!')
          setPdfConverting(false)
        },
        x: 40,
        y: 40,
        width: 515,
        windowWidth: 794,
        autoPaging: 'text'
      })
    } catch (e) {
      console.error(e)
      showToast('PDF conversion failed. Try simplifying the HTML.')
      setPdfConverting(false)
    }
  }

  /* ── Statement Generator ── */
  const loadFromDatabase = async () => {
    setDbLoading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setDbLoading(false); return }

    const { data, error } = await supabase
      .from('transactions')
      .select('date, title, amount, type')
      .eq('user_id', user.id)
      .order('date', { ascending: true })
      .limit(50)

    if (!error && data && data.length > 0) {
      setStmtTxs(data.map(tx => ({
        date: tx.date,
        description: tx.title || '',
        credit: tx.type === 'income' ? Number(tx.amount) : 0,
        debit: tx.type === 'expense' ? Number(tx.amount) : 0
      })))
      setStmtFromDB(true)
      showToast(`Loaded ${data.length} transactions from database.`)
    } else {
      showToast('No transactions found in database.')
    }
    setDbLoading(false)
  }

  const addStmtRow = () => setStmtTxs(prev => [...prev, { date: '', description: '', credit: 0, debit: 0 }])

  const updateStmtRow = (i: number, field: keyof StatementTx, value: string | number) => {
    setStmtTxs(prev => prev.map((tx, idx) => idx === i ? { ...tx, [field]: value } : tx))
  }

  const removeStmtRow = (i: number) => {
    if (stmtTxs.length === 1) return
    setStmtTxs(prev => prev.filter((_, idx) => idx !== i))
  }

  const totalCredits = stmtTxs.reduce((s, tx) => s + Number(tx.credit || 0), 0)
  const totalDebits = stmtTxs.reduce((s, tx) => s + Number(tx.debit || 0), 0)
  const netBalance = totalCredits - totalDebits

  const generateStatement = async () => {
    setStmtLoading(true)
    try {
      const { jsPDF } = await import('jspdf')
      const autoTable = (await import('jspdf-autotable')).default
      const doc = new jsPDF()

      // Watermark
      doc.setTextColor(230, 230, 230)
      doc.setFontSize(55)
      doc.text('QUANTIVO', 20, 170, { angle: -30, renderingMode: 'fillThenStroke' })

      // Header
      doc.setTextColor(30, 30, 30)
      doc.setFontSize(22)
      doc.text('BANK STATEMENT', 14, 22)

      doc.setFontSize(10)
      doc.setTextColor(100, 100, 100)
      doc.text(`Account Holder: ${stmtName || 'Account Holder'}`, 14, 35)
      doc.text(`Period: ${stmtPeriod || 'N/A'}`, 14, 42)
      doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 49)

      // Summary box
      doc.setFillColor(245, 245, 255)
      doc.roundedRect(14, 56, 182, 22, 3, 3, 'F')
      doc.setFontSize(9)
      doc.setTextColor(60, 60, 60)
      doc.text(`Total Credits: $${totalCredits.toFixed(2)}`, 18, 64)
      doc.text(`Total Debits: $${totalDebits.toFixed(2)}`, 18, 71)
      doc.setTextColor(netBalance >= 0 ? 20 : 200, netBalance >= 0 ? 150 : 30, 20)
      doc.text(`Net Balance: $${netBalance.toFixed(2)}`, 120, 67)

      // Transactions table
      autoTable(doc, {
        startY: 85,
        head: [['Date', 'Description', 'Credit ($)', 'Debit ($)', 'Balance ($)']],
        body: (() => {
          let running = 0
          return stmtTxs.map(tx => {
            running += Number(tx.credit || 0) - Number(tx.debit || 0)
            return [
              tx.date || '-',
              tx.description || '-',
              tx.credit ? Number(tx.credit).toFixed(2) : '-',
              tx.debit ? Number(tx.debit).toFixed(2) : '-',
              running.toFixed(2)
            ]
          })
        })(),
        headStyles: { fillColor: [192, 193, 255], textColor: [5, 20, 36], fontStyle: 'bold' },
        alternateRowStyles: { fillColor: [248, 248, 255] },
        columnStyles: {
          2: { halign: 'right', textColor: [20, 150, 20] },
          3: { halign: 'right', textColor: [200, 30, 30] },
          4: { halign: 'right' }
        }
      })

      // Footer
      const finalY = (doc as any).lastAutoTable.finalY + 10
      doc.setFontSize(8)
      doc.setTextColor(150, 150, 150)
      doc.text('This statement was generated by Quantivo. For official use, please verify with your financial institution.', 14, finalY)

      doc.save(`Statement-${stmtName || 'Account'}.pdf`)
      showToast('Statement PDF downloaded!')
    } catch (e) {
      console.error(e)
      showToast('Error generating statement. Please try again.')
    }
    setStmtLoading(false)
  }

  const glassPanel = {
    background: 'rgba(18,33,49,0.6)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px'
  } as const

  const inputStyle = {
    background: 'rgba(1,15,31,0.7)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#d5e4fa',
    borderRadius: '8px',
    padding: '8px 12px',
    fontSize: '13px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', maxWidth: '1440px', margin: '0 auto', paddingBottom: '48px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#e1dfff', margin: 0 }}>Tools</h1>
        <p style={{ fontSize: '14px', color: '#918f9a', marginTop: '6px' }}>Productivity tools for financial documents.</p>
      </div>

      {/* Tab Bar */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', background: 'rgba(1,15,31,0.5)', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', width: 'fit-content' }}>
        {[
          { key: 'pdf', label: '📄 PDF Converter', icon: 'html' },
          { key: 'statement', label: '🧾 Statement Generator', icon: 'receipt_long' }
        ].map(tab => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key as 'pdf' | 'statement')}
            style={{
              padding: '8px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer',
              fontSize: '14px', fontWeight: 500, transition: 'all 0.2s',
              background: activeTab === tab.key ? 'rgba(192,193,255,0.15)' : 'transparent',
              color: activeTab === tab.key ? '#c0c1ff' : '#918f9a'
            }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* PDF Converter */}
      {activeTab === 'pdf' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Editor */}
          <div style={{ ...glassPanel, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#e1dfff', margin: 0 }}>HTML Editor</h2>
              <span style={{ fontSize: '11px', color: '#918f9a', fontFamily: 'monospace' }}>paste any HTML</span>
            </div>
            <textarea
              value={htmlInput}
              onChange={e => setHtmlInput(e.target.value)}
              style={{ ...inputStyle, height: '420px', resize: 'vertical', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', lineHeight: 1.6 }}
              spellCheck={false}
            />
            <button onClick={handleConvertPDF} disabled={pdfConverting || !htmlInput.trim()}
              style={{ padding: '12px', borderRadius: '10px', background: '#c0c1ff', color: '#051424', border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer', opacity: pdfConverting ? 0.6 : 1 }}>
              {pdfConverting ? 'Converting…' : '⬇ Download as PDF'}
            </button>
          </div>

          {/* Preview */}
          <div style={{ ...glassPanel, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#e1dfff', margin: 0 }}>Live Preview</h2>
              <span style={{ fontSize: '11px', padding: '3px 10px', background: 'rgba(192,193,255,0.1)', color: '#c0c1ff', borderRadius: '999px', border: '1px solid rgba(192,193,255,0.2)' }}>RENDERED</span>
            </div>
            <iframe
              ref={iframeRef}
              srcDoc={htmlInput}
              style={{ flex: 1, minHeight: '420px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', background: 'white' }}
              sandbox="allow-same-origin"
              title="HTML Preview"
            />
          </div>
        </div>
      )}

      {/* Statement Generator */}
      {activeTab === 'statement' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Header fields */}
          <div style={{ ...glassPanel, padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#e1dfff', margin: 0 }}>Statement Details</h2>
              <button onClick={loadFromDatabase} disabled={dbLoading}
                style={{ padding: '8px 16px', borderRadius: '8px', background: 'rgba(192,193,255,0.1)', color: '#c0c1ff', border: '1px solid rgba(192,193,255,0.2)', fontSize: '13px', cursor: 'pointer', fontWeight: 500 }}>
                {dbLoading ? 'Loading…' : '↓ Load from Database'}
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#918f9a', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Account Holder Name</label>
                <input style={inputStyle} placeholder="e.g. John Smith" value={stmtName} onChange={e => setStmtName(e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: '11px', color: '#918f9a', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Statement Period</label>
                <input style={inputStyle} placeholder="e.g. Jan 2024 – Jun 2024" value={stmtPeriod} onChange={e => setStmtPeriod(e.target.value)} />
              </div>
            </div>
          </div>

          {/* Summary KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            {[
              { label: 'Total Credits', value: fmt(totalCredits), color: '#4ade80' },
              { label: 'Total Debits', value: fmt(totalDebits), color: '#f87171' },
              { label: 'Net Balance', value: fmt(netBalance), color: netBalance >= 0 ? '#4ade80' : '#f87171' }
            ].map(kpi => (
              <div key={kpi.label} style={{ ...glassPanel, padding: '20px' }}>
                <p style={{ fontSize: '11px', color: '#918f9a', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{kpi.label}</p>
                <p style={{ fontSize: '24px', fontWeight: 700, color: kpi.color, margin: 0, fontFamily: 'JetBrains Mono, monospace' }}>{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* Transactions Table */}
          <div style={{ ...glassPanel, overflow: 'hidden' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#e1dfff', margin: 0 }}>Transactions {stmtFromDB && <span style={{ fontSize: '11px', color: '#c0c1ff', marginLeft: '8px' }}>• from database</span>}</h3>
              <button onClick={addStmtRow} style={{ padding: '6px 14px', borderRadius: '8px', background: 'rgba(192,193,255,0.1)', color: '#c0c1ff', border: '1px solid rgba(192,193,255,0.2)', fontSize: '13px', cursor: 'pointer' }}>+ Add Row</button>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    {['Date', 'Description', 'Credit ($)', 'Debit ($)', ''].map(h => (
                      <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', color: '#918f9a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stmtTxs.map((tx, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '8px 16px' }}><input type="date" style={{ ...inputStyle, width: '140px' }} value={tx.date} onChange={e => updateStmtRow(i, 'date', e.target.value)} /></td>
                      <td style={{ padding: '8px 16px' }}><input style={inputStyle} placeholder="Description" value={tx.description} onChange={e => updateStmtRow(i, 'description', e.target.value)} /></td>
                      <td style={{ padding: '8px 16px' }}><input type="number" step="0.01" style={{ ...inputStyle, width: '120px', color: '#4ade80' }} placeholder="0.00" value={tx.credit || ''} onChange={e => updateStmtRow(i, 'credit', parseFloat(e.target.value) || 0)} /></td>
                      <td style={{ padding: '8px 16px' }}><input type="number" step="0.01" style={{ ...inputStyle, width: '120px', color: '#f87171' }} placeholder="0.00" value={tx.debit || ''} onChange={e => updateStmtRow(i, 'debit', parseFloat(e.target.value) || 0)} /></td>
                      <td style={{ padding: '8px 16px' }}>
                        <button onClick={() => removeStmtRow(i)} disabled={stmtTxs.length === 1} style={{ background: 'none', border: 'none', color: '#918f9a', cursor: 'pointer', fontSize: '16px', padding: '4px' }}>×</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Generate Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={generateStatement} disabled={stmtLoading}
              style={{ padding: '14px 32px', borderRadius: '999px', background: '#c0c1ff', color: '#051424', border: 'none', fontWeight: 700, fontSize: '15px', cursor: 'pointer', opacity: stmtLoading ? 0.6 : 1 }}>
              {stmtLoading ? 'Generating…' : '⬇ Download Statement PDF'}
            </button>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 200, background: 'rgba(13,28,45,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 20px', color: '#e1dfff', fontSize: '14px', backdropFilter: 'blur(12px)' }}>
          {toast}
        </div>
      )}
    </div>
  )
}
