import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg text-secondary">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <Outlet />
      </main>
      <footer className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-caption text-ink-muted">
        DropMate Panel — Sipariş ver. Komşun getirsin. ·{' '}
        <span className="text-secondary">© {new Date().getFullYear()} Efe Serin</span>
      </footer>
    </div>
  )
}
