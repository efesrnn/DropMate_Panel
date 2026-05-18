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
    <div className="card flex items-center gap-4">
      <div className={`w-12 h-12 rounded-card flex items-center justify-center ${TONE[tone]}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-caption text-ink-muted uppercase tracking-wide">{label}</div>
        <div className="text-h1 font-display text-secondary leading-none mt-1">{value}</div>
        {hint && <div className="text-caption text-ink-muted mt-1">{hint}</div>}
      </div>
    </div>
  )
}
