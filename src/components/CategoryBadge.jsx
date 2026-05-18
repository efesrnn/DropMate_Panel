import React from 'react'

/** Color tokens per brand category. */
const PALETTE = {
  'Market':          { bg: 'bg-primary/10',  text: 'text-primary' },
  'Yemek':           { bg: 'bg-accent/10',   text: 'text-accent' },
  'İlaç':            { bg: 'bg-state-error/10', text: 'text-state-error' },
  'Çiçek & Hediye':  { bg: 'bg-pink-100',    text: 'text-pink-600' },
  'Kırtasiye':       { bg: 'bg-blue-100',    text: 'text-blue-600' },
  'Teknoloji':       { bg: 'bg-secondary/10', text: 'text-secondary' },
  'Su & İçecek':     { bg: 'bg-sky-100',     text: 'text-sky-600' }
}

export default function CategoryBadge({ category }) {
  const s = PALETTE[category] || { bg: 'bg-bg', text: 'text-ink-muted' }
  return (
    <span className={`pill ${s.bg} ${s.text}`}>{category}</span>
  )
}
