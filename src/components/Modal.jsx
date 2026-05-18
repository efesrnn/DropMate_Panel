import React, { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Modal({ open, title, onClose, children, size = 'md' }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  const widths = { sm: 'max-w-sm', md: 'max-w-lg', lg: 'max-w-2xl' }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-secondary/40 backdrop-blur-sm p-0 sm:p-4 animate-[fadeIn_.15s_ease]">
      <div className={`bg-surface rounded-modal shadow-lg w-full ${widths[size]} max-h-[90vh] overflow-y-auto`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <h2 className="text-h2 font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-bg text-ink-muted"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}
