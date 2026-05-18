import React from 'react'
import { Pencil, Trash2, Store } from 'lucide-react'
import CategoryBadge from './CategoryBadge.jsx'

/**
 * @param {{ product: import('../interfaces/Product.js').Product,
 *           onEdit?: (p:any)=>void,
 *           onDelete?: (id:string)=>void }} props
 */
export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-h3 font-semibold truncate">{product.name}</h3>
          <div className="flex items-center gap-1.5 text-caption text-ink-muted mt-1">
            <Store className="w-3.5 h-3.5" />
            <span className="truncate">{product.vendor || '—'}</span>
          </div>
        </div>
        <CategoryBadge category={product.category} />
      </div>

      <div className="flex items-end justify-between mt-1">
        <div>
          <div className="text-caption text-ink-muted">Fiyat</div>
          <div className="text-h2 font-display text-secondary">
            ₺{product.price}
          </div>
        </div>
        <div className="text-right">
          <div className="text-caption text-ink-muted">Stok</div>
          <div className={`text-h3 font-semibold ${
            product.stock <= 10 ? 'text-state-warning' :
            product.stock === 0  ? 'text-state-error' : 'text-secondary'
          }`}>
            {product.stock}
          </div>
        </div>
      </div>

      {(onEdit || onDelete) && (
        <div className="flex gap-2 pt-2 border-t border-line">
          {onEdit && (
            <button
              onClick={() => onEdit(product)}
              className="btn-ghost flex-1 py-2 text-body-sm"
            >
              <Pencil className="w-4 h-4" /> Düzenle
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(product.id)}
              className="btn-danger py-2 text-body-sm"
              aria-label="Sil"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
