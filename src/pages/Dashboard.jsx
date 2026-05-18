import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Package, Truck, Users, Coins, ArrowRight } from 'lucide-react'
import StatCard from '../components/StatCard.jsx'
import CategoryBar from '../components/CategoryBar.jsx'
import StatusDonut from '../components/StatusDonut.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import useProducts from '../hooks/useProducts.js'
import useOrders from '../hooks/useOrders.js'
import { PRODUCT_CATEGORIES } from '../interfaces/Product.js'
import { ORDER_STATUSES } from '../interfaces/Order.js'

const CAT_COLOR = {
  'Market':         '#00C896',
  'Yemek':          '#FFB400',
  'İlaç':           '#EF4444',
  'Çiçek & Hediye': '#EC4899',
  'Kırtasiye':      '#3B82F6',
  'Teknoloji':      '#1A1A2E',
  'Su & İçecek':    '#0EA5E9'
}

export default function Dashboard() {
  const { products } = useProducts()
  const { orders }   = useOrders()

  const stats = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10)
    const todays = orders.filter(o => o.createdAt.slice(0, 10) === today)
    const revenue = todays
      .filter(o => o.status !== 'cancelled')
      .reduce((s, o) => s + o.total, 0)
    const activeCouriers = new Set(
      orders
        .filter(o => o.courier && (o.status === 'assigned' || o.status === 'on_the_way'))
        .map(o => o.courier)
    ).size
    return {
      productCount: products.length,
      orderCount:   orders.length,
      activeCouriers,
      revenue
    }
  }, [products, orders])

  const categoryData = useMemo(() => (
    PRODUCT_CATEGORIES.map(c => ({
      label: c,
      value: products.filter(p => p.category === c).length,
      color: CAT_COLOR[c]
    }))
  ), [products])

  const statusCounts = useMemo(() => (
    ORDER_STATUSES.reduce((acc, s) => {
      acc[s] = orders.filter(o => o.status === s).length
      return acc
    }, {})
  ), [orders])

  const recent = useMemo(
    () => [...orders].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 5),
    [orders]
  )

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-display font-display">Panel</h1>
        <p className="text-ink-muted">Bugünkü teslimatlar ve katalog özeti.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Package className="w-5 h-5" />}
          label="Toplam ürün"
          value={stats.productCount}
          hint="Katalogdaki ürün sayısı"
          tone="primary"
        />
        <StatCard
          icon={<Truck className="w-5 h-5" />}
          label="Toplam sipariş"
          value={stats.orderCount}
          hint="Tüm zamanlar"
          tone="secondary"
        />
        <StatCard
          icon={<Users className="w-5 h-5" />}
          label="Aktif kurye"
          value={stats.activeCouriers}
          hint="Şu an yolda / atanmış"
          tone="success"
        />
        <StatCard
          icon={<Coins className="w-5 h-5" />}
          label="Bugünkü ciro"
          value={`₺${stats.revenue.toLocaleString('tr-TR')}`}
          hint="İptaller hariç"
          tone="accent"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-h2 font-semibold">Kategoriye göre ürünler</h2>
            <Link to="/products" className="text-body-sm text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              Tümünü gör <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <CategoryBar data={categoryData} />
        </div>

        <div className="card">
          <h2 className="text-h2 font-semibold mb-4">Sipariş durumu</h2>
          <StatusDonut counts={statusCounts} />
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h2 font-semibold">Son siparişler</h2>
          <Link to="/orders" className="text-body-sm text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
            Tümünü gör <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="divide-y divide-line">
          {recent.length === 0 && (
            <div className="text-ink-muted text-body-sm py-3">Henüz sipariş yok.</div>
          )}
          {recent.map(o => (
            <div key={o.id} className="flex items-center justify-between py-3 gap-4">
              <div className="min-w-0">
                <div className="font-semibold truncate">{o.customer}</div>
                <div className="text-caption text-ink-muted truncate">
                  #{o.id} · {o.items.length} ürün · {o.courier || 'Kurye atanmadı'}
                </div>
              </div>
              <div className="text-right shrink-0">
                <StatusBadge status={o.status} />
                <div className="text-body-sm font-semibold mt-1">₺{o.total}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
