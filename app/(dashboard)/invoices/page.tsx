'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Link from 'next/link'

export default function InvoicesPage() {
  const [companyName, setCompanyName] = useState('')
  const [companyAddress, setCompanyAddress] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [issueDate, setIssueDate] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [currency, setCurrency] = useState('USD ($)')
  const [lineItems, setLineItems] = useState([
    { id: '1', description: 'Consulting Services', qty: 10, rate: 150 }
  ])
  const [taxRate, setTaxRate] = useState(10)
  const [notes, setNotes] = useState('Thank you for your business.')

  const getSymbol = (c: string) => {
    if (c.includes('EUR')) return '€'
    if (c.includes('GBP')) return '£'
    return '$'
  }
  const symbol = getSymbol(currency)

  const subtotal = lineItems.reduce((acc, item) => acc + (item.qty * item.rate), 0)
  const taxAmount = subtotal * (taxRate / 100)
  const total = subtotal + taxAmount

  const handleAddItem = () => {
    setLineItems([...lineItems, { id: Math.random().toString(), description: '', qty: 1, rate: 0 }])
  }

  const handleUpdateItem = (id: string, field: 'description' | 'qty' | 'rate', value: any) => {
    setLineItems(lineItems.map(item => {
      if (item.id === id) {
        if (field === 'qty') return { ...item, qty: Math.max(1, parseInt(value) || 0) }
        if (field === 'rate') return { ...item, rate: Math.max(0, parseFloat(value) || 0) }
        return { ...item, [field]: value }
      }
      return item
    }))
  }

  const handleRemoveItem = (id: string) => {
    if (lineItems.length === 1) return
    setLineItems(lineItems.filter(item => item.id !== id))
  }

  const handleDownloadPDF = () => {
    alert('Generating PDF invoice... Your file is preparing for download.')
  }

  const handleDownloadCSV = () => {
    alert('Exporting invoice metadata as CSV...')
  }

  return (
    <>
      <style>{`
        .glass-panel {
          background: rgba(18, 33, 49, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
        }
        .input-glass {
          background: rgba(1, 15, 31, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #d5e4fa;
          transition: border-color 200ms ease-out, box-shadow 200ms ease-out;
        }
        .input-glass:focus {
          outline: none;
          border-color: #c0c1ff;
          box-shadow: 0 0 0 3px rgba(192, 193, 255, 0.15);
        }
        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-30deg);
          opacity: 0.02;
          font-size: 8rem;
          font-weight: 900;
          pointer-events: none;
          white-space: nowrap;
          z-index: 0;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto pb-12 flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT PANEL: Editor */}
          <div className="glass-panel p-6 flex flex-col gap-6">
            <div className="flex justify-between items-end border-b border-white/10 pb-4">
              <h1 className="font-headline-lg text-2xl font-bold text-white">New Invoice</h1>
              <span className="font-mono text-xs text-[#c7c5d0]">INV-001</span>
            </div>

            {/* Company Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <label className="font-mono text-xs text-[#c7c5d0] uppercase tracking-wider">From (Your Company)</label>
                <input
                  className="input-glass rounded-lg px-4 py-2 text-sm"
                  placeholder="Your Company Name"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <textarea
                  className="input-glass rounded-lg px-4 py-2 text-xs resize-none"
                  placeholder="Your Address / Details"
                  rows={2}
                  value={companyAddress}
                  onChange={(e) => setCompanyAddress(e.target.value)}
                />
              </div>

              {/* Client Info */}
              <div className="flex flex-col gap-4">
                <label className="font-mono text-xs text-[#c7c5d0] uppercase tracking-wider">Billed To (Client)</label>
                <input
                  className="input-glass rounded-lg px-4 py-2 text-sm"
                  placeholder="Client Name"
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
                <input
                  className="input-glass rounded-lg px-4 py-2 text-xs"
                  placeholder="Client Email"
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                />
                <textarea
                  className="input-glass rounded-lg px-4 py-2 text-xs resize-none"
                  placeholder="Client Address"
                  rows={2}
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                />
              </div>
            </div>

            {/* Dates & Currency */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-y border-white/10 py-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-[#c7c5d0]">Issue Date</label>
                <input
                  className="input-glass rounded-lg px-4 py-2 text-xs font-mono"
                  type="date"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-[#c7c5d0]">Due Date</label>
                <input
                  className="input-glass rounded-lg px-4 py-2 text-xs font-mono"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-[#c7c5d0]">Currency</label>
                <select
                  className="input-glass rounded-lg px-4 py-2 text-xs font-mono"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                </select>
              </div>
            </div>

            {/* Line Items */}
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs text-[#c7c5d0] uppercase tracking-wider">Line Items</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 font-mono text-xs text-[#c7c5d0]">
                      <th className="pb-2 pl-2 w-1/2">Description</th>
                      <th className="pb-2 px-2 text-right w-1/6">Qty</th>
                      <th className="pb-2 px-2 text-right w-1/6">Rate</th>
                      <th className="pb-2 pr-2 text-right w-1/6">Amount</th>
                      <th className="pb-2 w-10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {lineItems.map((item) => (
                      <tr key={item.id} className="border-b border-white/5">
                        <td className="py-2 pr-2">
                          <input
                            className="input-glass rounded-lg px-3 py-1 w-full text-xs"
                            placeholder="Item description"
                            type="text"
                            value={item.description}
                            onChange={(e) => handleUpdateItem(item.id, 'description', e.target.value)}
                          />
                        </td>
                        <td className="py-2 px-2">
                          <input
                            className="input-glass rounded-lg px-3 py-1 w-full text-right font-mono text-xs"
                            min="1"
                            type="number"
                            value={item.qty}
                            onChange={(e) => handleUpdateItem(item.id, 'qty', e.target.value)}
                          />
                        </td>
                        <td className="py-2 px-2">
                          <input
                            className="input-glass rounded-lg px-3 py-1 w-full text-right font-mono text-xs"
                            placeholder="0.00"
                            type="number"
                            value={item.rate}
                            onChange={(e) => handleUpdateItem(item.id, 'rate', e.target.value)}
                          />
                        </td>
                        <td className="py-2 pl-2 text-right font-mono text-xs text-[#dae2fd]">
                          {symbol}{(item.qty * item.rate).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-2 text-center">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-[#c7c5d0] hover:text-[#ff4433] transition-colors"
                            disabled={lineItems.length === 1}
                          >
                            <span className="material-symbols-outlined text-[16px]">close</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={handleAddItem}
                className="self-start flex items-center gap-2 text-[#c0c1ff] hover:text-white transition-colors font-mono text-xs py-2"
              >
                <span className="material-symbols-outlined text-sm">add</span> Add Row
              </button>
            </div>

            {/* Totals & Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto pt-4">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-[#c7c5d0]">Notes / Terms</label>
                <textarea
                  className="input-glass rounded-lg px-4 py-2 text-xs resize-none"
                  placeholder="Thank you for your business."
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 bg-black/20 rounded-lg p-4">
                <div className="flex justify-between items-center text-xs text-[#c7c5d0]">
                  <span>Subtotal</span>
                  <span className="font-mono">{symbol}{subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-[#c7c5d0] border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span>Tax Rate</span>
                    <input
                      className="input-glass rounded px-2 py-0.5 w-12 text-right font-mono text-xs"
                      placeholder="0"
                      type="number"
                      value={taxRate}
                      onChange={(e) => setTaxRate(Math.max(0, parseFloat(e.target.value) || 0))}
                    />
                    <span>%</span>
                  </div>
                  <span className="font-mono">{symbol}{taxAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-white">Total</span>
                  <span className="font-mono font-bold text-[#c0c1ff]">{symbol}{total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Live Preview */}
          <div className="glass-panel p-6 flex flex-col relative overflow-hidden h-full min-h-[600px]">
            <div className="watermark text-white">QUANTIVO PRO</div>
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c7c5d0] text-sm">visibility</span>
                <h2 className="font-mono text-xs text-[#c7c5d0] uppercase tracking-wider">Live Preview</h2>
              </div>
              <span className="bg-white/5 px-3 py-1 rounded-full font-mono text-xs text-[#c0c1ff] border border-white/10">DRAFT</span>
            </div>

            {/* Invoice Preview Canvas */}
            <div className="flex-1 bg-white/5 rounded-lg border border-white/10 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white/50 text-[20px]">image</span>
                </div>
                <div className="text-right">
                  <div className="font-headline text-lg font-bold text-white">INVOICE</div>
                  <div className="font-mono text-xs text-[#c7c5d0]">INV-001</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-xs">
                <div>
                  <div className="font-mono text-[#c7c5d0] mb-2 uppercase tracking-wider">FROM</div>
                  <div className="font-bold text-white mb-1">{companyName || '[Your Company]'}</div>
                  <div className="text-[#c7c5d0] whitespace-pre-wrap">{companyAddress || '[Your Details]'}</div>
                </div>
                <div>
                  <div className="font-mono text-[#c7c5d0] mb-2 uppercase tracking-wider">TO</div>
                  <div className="font-bold text-white mb-1">{clientName || '[Client Name]'}</div>
                  {clientEmail && <div className="text-[#c7c5d0] mb-1">{clientEmail}</div>}
                  <div className="text-[#c7c5d0] whitespace-pre-wrap">{clientAddress || '[Client Details]'}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-xs border-y border-white/5 py-4">
                <div>
                  <div className="text-[#c7c5d0] mb-1">Issue Date</div>
                  <div className="font-mono text-white">{issueDate || '—'}</div>
                </div>
                <div>
                  <div className="text-[#c7c5d0] mb-1">Due Date</div>
                  <div className="font-mono text-white">{dueDate || '—'}</div>
                </div>
                <div>
                  <div className="text-[#c7c5d0] mb-1">Currency</div>
                  <div className="font-mono text-[#c0c1ff]">{currency}</div>
                </div>
              </div>

              <div className="w-full text-xs">
                <div className="grid grid-cols-12 gap-2 border-b border-white/10 pb-2 mb-2 font-mono text-[#c7c5d0] uppercase tracking-wider">
                  <div className="col-span-6">Description</div>
                  <div className="col-span-2 text-right">Qty</div>
                  <div className="col-span-2 text-right">Rate</div>
                  <div className="col-span-2 text-right">Amount</div>
                </div>
                {lineItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 gap-2 pb-2 border-b border-white/5 text-[#dae2fd]">
                    <div className="col-span-6 truncate">{item.description || '[Item Description]'}</div>
                    <div className="col-span-2 text-right font-mono">{item.qty}</div>
                    <div className="col-span-2 text-right font-mono">{symbol}{item.rate.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                    <div className="col-span-2 text-right font-mono">{symbol}{(item.qty * item.rate).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex justify-between items-end pt-6 border-t border-white/10 text-xs">
                <div className="w-1/2">
                  <div className="font-mono text-[#c7c5d0] mb-1 uppercase tracking-wider">NOTES</div>
                  <div className="text-[#c7c5d0] whitespace-pre-wrap">{notes || '—'}</div>
                </div>
                <div className="w-1/3 space-y-2">
                  <div className="flex justify-between text-[#c7c5d0]">
                    <span>Subtotal</span>
                    <span className="font-mono">{symbol}{subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-[#c7c5d0]">
                    <span>Tax ({taxRate}%)</span>
                    <span className="font-mono">{symbol}{taxAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm text-white pt-2 border-t border-white/10">
                    <span>Total</span>
                    <span className="font-mono text-[#c0c1ff]">{symbol}{total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mt-2">
          <button
            onClick={handleDownloadCSV}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/10 text-white font-body-md text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">csv</span>
            Download CSV
          </button>
          <button
            onClick={handleDownloadPDF}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#fa8c00] text-black font-bold font-body-md text-sm hover:brightness-110 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(250,140,0,0.3)]"
          >
            <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
            Download PDF
          </button>
        </div>
      </div>
    </>
  )
}
