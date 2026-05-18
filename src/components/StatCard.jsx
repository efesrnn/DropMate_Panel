import React from 'react'

/**
 * @param {{ icon: React.ReactNode, label: string, value: React.ReactNode,
 *           hint?: string, tone?: 'primary'|'accent'|'secondary'|'success' }} props
 */
export default function StatCard({ icon, label, value, hint, tone = 'primary' }) {
  const TONE = {
    primary:   'bg-primary/10 text-primary',
    accent:    'bg-accent/10 text-accent',
    secondary: 'bg-secondary/10 text-secondary',
    success:   'bg-state-success/10 text-state-success'
  }
  return (
    <div className="card flex items-center gap-3 md:gap-4">
      <div className={`w-11 h-11 md:w-12 md:h-12 rounded-2xl flex items-center justify-center shrink-0 ${TONE[tone]}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-caption text-ink-muted uppercase tracking-wide">{label}</div>
        <div className="text-h2 md:text-h1 font-display text-secondary leading-none mt-1">{value}</div>
        {hint && <div className="text-caption text-ink-muted mt-1 truncate">{hint}</div>}
      </div>
    </div>
  )
}
