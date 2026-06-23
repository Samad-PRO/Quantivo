export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {['Total Balance','Income','Expenses','Savings'].map(label => (
          <div key={label} className="rounded-xl border bg-card p-5 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
            <p className="mt-3 text-2xl font-semibold">PKR 0</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border bg-card p-8 text-center text-muted-foreground">
        Charts and full analytics coming in Phase 2
      </div>
    </div>
  )
}
