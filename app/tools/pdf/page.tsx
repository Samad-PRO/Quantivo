'use client'
export const dynamic = 'force-dynamic'
import { useState } from 'react'
import Link from 'next/link'

export default function PDFConverterPage() {
  const [file, setFile] = useState<File | null>(null)
  const [converting, setConverting] = useState(false)

  const handleConvert = async () => {
    if (!file) return
    setConverting(true)
    // For HTML files: read content and use jsPDF
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result as string
      const lines = doc.splitTextToSize(text, 170)
      doc.setFontSize(11)
      doc.text(lines, 20, 20)
      doc.save(file.name.replace(/\.[^/.]+$/, '') + '.pdf')
      setConverting(false)
    }
    reader.readAsText(file)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-canvas)', color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif', padding: '24px' }}>
      <div style={{ maxWidth: '640px', margin: '80px auto' }}>
        <div style={{ marginBottom: '8px' }}>
          <Link href="/" style={{ color: '#918f9a', textDecoration: 'none', fontSize: '13px' }}>← Back to Quantivo</Link>
        </div>
        <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '999px', background: 'rgba(250,140,0,0.1)', border: '1px solid rgba(250,140,0,0.3)', fontSize: '11px', color: '#fa8c00', marginBottom: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Free Tool</div>
        <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.02em' }}>PDF Converter</h1>
        <p style={{ color: '#918f9a', fontSize: '15px', marginBottom: '40px', lineHeight: 1.6 }}>Convert text files and documents to PDF instantly. No login required.</p>

        {/* AdSense placeholder */}
        <div style={{ background: 'rgba(1,15,31,0.4)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', padding: '8px', minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '10px', color: '#464654', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Advertisement</span>
        </div>

        <div style={{ background: 'rgba(18,33,49,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
          <div
            onDragOver={e => e.preventDefault()}
            onDrop={e => { e.preventDefault(); setFile(e.dataTransfer.files[0]) }}
            onClick={() => document.getElementById('file-upload')?.click()}
            style={{ border: '2px dashed rgba(192,193,255,0.2)', borderRadius: '12px', padding: '48px 24px', textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.2s', marginBottom: '24px' }}
          >
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>📄</div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>{file ? file.name : 'Drop your file here'}</p>
            <p style={{ color: '#918f9a', fontSize: '13px' }}>or click to browse · TXT, HTML supported</p>
            <input id="file-upload" type="file" accept=".txt,.html" style={{ display: 'none' }} onChange={e => setFile(e.target.files?.[0] ?? null)} />
          </div>
          <button onClick={handleConvert} disabled={!file || converting}
            style={{ width: '100%', background: '#fa8c00', color: '#fff', border: 'none', borderRadius: '999px', padding: '14px', fontWeight: 700, fontSize: '15px', cursor: file ? 'pointer' : 'not-allowed', opacity: file ? 1 : 0.5 }}>
            {converting ? 'Converting...' : '⬇ Convert & Download PDF'}
          </button>
        </div>
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '13px', color: '#918f9a' }}>
          Want unlimited conversions?{' '}
          <Link href="/signup" style={{ color: '#c0c1ff' }}>Create free account →</Link>
        </p>
      </div>
    </div>
  )
}
