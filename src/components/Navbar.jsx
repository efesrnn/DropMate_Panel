import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Package, LayoutDashboard, ShoppingBag, Truck, Info } from 'lucide-react'

const links = [
  { to: '/',         label: 'Panel',   icon: LayoutDashboard, end: true },
  { to: '/products', label: 'Ürünler', icon: ShoppingBag },
  { to: '/orders',   label: 'Siparişler', icon: Truck },
  { to: '/about',    label: 'Hakkında', icon: Info }
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-surface/90 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2.5 mr-4 shrink-0">
          <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
            <Package className="w-5 h-5 text-primary" strokeWidth={2.5} />
          </span>
          <span className="font-display text-h2 text-secondary tracking-tight">
            DropMate <span className="text-primary">Panel</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 ml-auto">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  'flex items-center gap-1.5 px-3 py-2 rounded-btn text-body-sm font-semibold transition',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-ink-muted hover:text-secondary hover:bg-bg'
                ].join(' ')
              }
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
