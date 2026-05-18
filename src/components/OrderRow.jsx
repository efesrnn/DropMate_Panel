import React from 'react'
import { Trash2, MapPin } from 'lucide-react'
import StatusBadge from './StatusBadge.jsx'
import ModeBadge from './ModeBadge.jsx'
import { ORDER_STATUSES, STATUS_LABEL } from '../interfaces/Order.js'

const COURIERS = ['Mert K.', 'Selin A.', 'Berk T.', 'Onur P.', 'Deniz Y.', 'Cem B.']

/**
 * @param {{ order: import('../interfaces/Order.js').Order,
 *           onUpdate: (id:string, patch:any)=>void,
 *           onDelete: (id:string)=>void }} props
 */
export default function OrderRow({ order, onUpdate, onDelete }) {
  return (
    <div className="card flex flex-col gap-3 md:gap-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-caption text-ink-muted font-mono">#{order.id}</span>
            <StatusBadge status={order.status} />
          </div>
          <h3 className="text-h3 font-semibold truncate">{order.customer}</h3>
          <div className="flex items-center gap-1.5 text-body-sm text-ink-muted mt-0.5">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate">{order.address}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-caption text-ink-muted">Tutar</div>
          <div className="text-h2 font-display">₺{order.total}</div>
          <div className="text-caption text-accent font-semibold mt-0.5">
            Komisyon ₺{order.commission}
          </div>
        </div>
      </div>

      <ul className="text-body-sm text-ink-muted bg-bg rounded-btn px-3 py-2 space-y-0.5">
        {order.items.map((it, idx) => (
          <li key={idx} className="flex justify-between">
            <span className="truncate">{it.qty}× {it.name}</span>
            <span className="text-secondary tabular-nums">₺{it.qty * it.unitPrice}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-line">
        <ModeBadge mode={order.mode} />

        <select
          value={order.courier ?? ''}
          onChange={(e) => {
            const courier = e.target.value || null
            const patch = { courier }
            // pending -> assigned when a courier is set
            if (courier && order.status === 'pending') patch.status = 'assigned'
            // unassign -> back to pending if currently assigned
            if (!courier && order.status === 'assigned') patch.status = 'pending'
            onUpdate(order.id, patch)
          }}
          className="input py-1.5 text-body-sm flex-1 min-w-[140px]"
          disabled={order.status === 'delivered' || order.status === 'cancelled'}
        >
          <option value="">Kurye ata…</option>
          {COURIERS.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <select
          value={order.status}
          onChange={(e) => onUpdate(order.id, { status: e.target.value })}
          className="input py-1.5 text-body-sm w-40"
        >
          {ORDER_STATUSES.map(s => (
            <option key={s} value={s}>{STATUS_LABEL[s]}</option>
          ))}
        </select>

        <button
          onClick={() => onDelete(order.id)}
          className="btn-danger py-2"
          aria-label="Sil"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
