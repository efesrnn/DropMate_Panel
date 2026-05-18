import React, { useMemo, useState } from 'react'
import { Plus, RotateCcw, Filter } from 'lucide-react'
import Modal from '../components/Modal.jsx'
import OrderForm from '../components/OrderForm.jsx'
import OrderRow from '../components/OrderRow.jsx'
import { ORDER_STATUSES, STATUS_LABEL } from '../interfaces/Order.js'
import useOrders from '../hooks/useOrders.js'

export default function Orders() {
  const { orders, add, update, remove, reset } = useOrders()
  const [statusFilter, setStatusFilter] = useState('Hepsi')
  const [creating, setCreating] = useState(false)

  const filtered = useMemo(
    () => statusFilter === 'Hepsi'
      ? orders
      : orders.filter(o => o.status === statusFilter),
    [orders, statusFilter]
  )

  const handleDelete = (id) => {
    if (confirm(`Sipariş #${id} silinsin mi?`)) remove(id)
  }

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-h1 font-display">Siparişler</h1>
          <p className="text-ink-muted text-body-sm">
            {filtered.length} sipariş gösteriliyor · toplam {orders.length} kayıt
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => { if (confirm('Tüm değişiklikler sıfırlansın mı?')) reset() }}
            className="btn-ghost"
          >
            <RotateCcw className="w-4 h-4" /> Sıfırla
          </button>
          <button onClick={() => setCreating(true)} className="btn-primary">
            <Plus className="w-4 h-4" /> Yeni sipariş
          </button>
        </div>
      </div>

      <div className="card mb-6 flex items-center gap-3">
        <Filter className="w-4 h-4 text-ink-muted" />
        <div className="flex flex-wrap gap-2">
          {['Hepsi', ...ORDER_STATUSES].map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`pill border ${
                statusFilter === s
                  ? 'bg-primary text-white border-primary'
                  : 'bg-surface text-ink-muted border-line hover:text-secondary'
              }`}
            >
              {s === 'Hepsi' ? 'Hepsi' : STATUS_LABEL[s]}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="card text-center text-ink-muted py-10">
          Bu filtre için sipariş yok.
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-4">
          {filtered.map(o => (
            <OrderRow
              key={o.id}
              order={o}
              onUpdate={update}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <Modal open={creating} onClose={() => setCreating(false)} title="Yeni sipariş oluştur" size="lg">
        <OrderForm
          onSubmit={(d) => { add(d); setCreating(false) }}
          onCancel={() => setCreating(false)}
        />
      </Modal>
    </section>
  )
}
