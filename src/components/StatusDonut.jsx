import React from 'react'
import { STATUS_LABEL } from '../interfaces/Order.js'

const COLORS = {
  pending:    '#6B7280',
  assigned:   '#00C896',
  on_the_way: '#F59E0B',
  delivered:  '#10B981',
  cancelled:  '#EF4444'
}

/**
 * @param {{ counts: Record<string, number> }} props
 */
export default function StatusDonut({ counts }) {
  const entries = Object.entries(counts).filter(([, v]) => v > 0)
  const total   = entries.reduce((s, [, v]) => s + v, 0) || 1

  const R = 56, C = 2 * Math.PI * R
  let acc = 0
  const arcs = entries.map(([status, value]) => {
    const len    = (value / total) * C
    const offset = acc
    acc += len
    return { status, value, len, offset, color: COLORS[status] || '#9CA3AF' }
  })

  return (
    <div className="flex items-center gap-5">
      <svg width="140" height="140" viewBox="0 0 140 140" className="shrink-0">
        <circle cx="70" cy="70" r={R} fill="none" stroke="#F3F4F6" strokeWidth="16" />
        {arcs.map(a => (
          <circle
            key={a.status}
            cx="70" cy="70" r={R}
            fill="none"
            stroke={a.color}
            strokeWidth="16"
            strokeDasharray={`${a.len} ${C - a.len}`}
            strokeDashoffset={-a.offset}
            transform="rotate(-90 70 70)"
            strokeLinecap="butt"
          />
        ))}
        <text x="70" y="66" textAnchor="middle" fill="#1A1A2E"
              style={{ font: '700 24px Poppins, Inter, sans-serif' }}>
          {total}
        </text>
        <text x="70" y="86" textAnchor="middle" fill="#6B7280"
              style={{ font: '500 11px Inter, sans-serif' }}>
          SİPARİŞ
        </text>
      </svg>

      <ul className="flex-1 space-y-1.5 text-body-sm">
        {arcs.map(a => (
          <li key={a.status} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: a.color }} />
            <span className="text-secondary">{STATUS_LABEL[a.status]}</span>
            <span className="ml-auto text-ink-muted tabular-nums">{a.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
