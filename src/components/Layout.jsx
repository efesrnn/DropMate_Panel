import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen bg-bg text-secondary flex flex-col">
      <Navbar />
      <main
        key={pathname}
        className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-6 py-6 md:py-10 animate-fade-in"
      >
        <Outlet />
      </main>
      <footer className="max-w-6xl w-full mx-auto px-4 md:px-6 py-8 text-caption text-ink-muted flex flex-wrap items-center justify-between gap-2">
        <span>DropMate Panel · Sipariş ver. Komşun getirsin.</span>
        <span className="text-secondary">© {new Date().getFullYear()} Efe Serin</span>
      </footer>
    </div>
  )
}
