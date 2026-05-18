import React from 'react'

/**
 * Tiny horizontal bar chart — pure SVG, no chart library.
 * @param {{ data: { label: string, value: number, color?: string }[] }} props
 */
export default function CategoryBar({ data }) {
  const max = Math.max(1, ...data.map(d => d.value))
  return (
    <ul className="space-y-2.5">
      {data.map(d => {
        const pct = Math.round((d.value / max) * 100)
        return (
          <li key={d.label}>
            <div className="flex items-center justify-between text-body-sm mb-1">
              <span className="text-secondary truncate">{d.label}</span>
              <span className="text-ink-muted tabular-nums">{d.value}</span>
            </div>
            <div className="h-2 bg-bg rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, background: d.color || '#00C896' }}
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
