import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-bg text-secondary">
      <header className="bg-surface border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold">D</div>
          <span className="font-display text-h2">DropMate Panel</span>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-display font-display mb-2">Hoş geldin, komşu.</h1>
        <p className="text-ink-muted">Sipariş ver. Komşun getirsin.</p>
        <div className="mt-8 flex gap-3">
          <button className="btn-primary">Yeni sipariş</button>
          <button className="btn-ghost">Ürünleri gör</button>
        </div>
      </main>
    </div>
  )
}

export default App
