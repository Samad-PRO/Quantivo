import { redirect } from 'next/navigation'
import { createClient } from '@/supabase/server'
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <aside className="flex w-60 flex-col border-r bg-card">
        <div className="flex h-16 items-center gap-2 border-b px-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-xs font-bold text-primary-foreground">Q</span>
          </div>
          <span className="text-lg font-semibold">Quantivo</span>
        </div>
        <nav className="flex-1 space-y-1 p-2 pt-4">
          {[['Dashboard','/dashboard'],['Finances','/finances'],['Goals','/goals'],['Habits & Tasks','/habits'],['Invoices','/invoices'],['Subscriptions','/subscriptions'],['Reports','/reports'],['Settings','/settings']].map(([label, href]) => (
            <a key={href} href={href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  )
}
