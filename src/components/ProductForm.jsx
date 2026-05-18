import React, { useState } from 'react'
import { PRODUCT_CATEGORIES } from '../interfaces/Product.js'

/**
 * @param {{ initial?: import('../interfaces/Product.js').Product,
 *           onSubmit: (p:any)=>void,
 *           onCancel: ()=>void }} props
 */
export default function ProductForm({ initial, onSubmit, onCancel }) {
  const [form, setForm] = useState(() => ({
    name:     initial?.name     ?? '',
    category: initial?.category ?? PRODUCT_CATEGORIES[0],
    price:    initial?.price    ?? '',
    stock:    initial?.stock    ?? '',
    vendor:   initial?.vendor   ?? ''
  }))
  const [errors, setErrors] = useState({})

  const set = (k, v) => setForm(s => ({ ...s, [k]: v }))

  const handle = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.name.trim())                         err.name = 'Gerekli'
    if (form.price === '' || Number(form.price) < 0)  err.price = 'Geçerli fiyat gir'
    if (form.stock === '' || Number(form.stock) < 0)  err.stock = 'Geçerli stok gir'
    setErrors(err)
    if (Object.keys(err).length) return

    onSubmit({
      ...(initial || {}),
      name: form.name.trim(),
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock),
      vendor: form.vendor.trim()
    })
  }

  return (
    <form onSubmit={handle} className="space-y-4">
      <div>
        <label className="label">Ürün adı</label>
        <input
          autoFocus
          className="input"
          value={form.name}
          onChange={e => set('name', e.target.value)}
          placeholder="Örn. Tam Yağlı Süt 1L"
        />
        {errors.name && <p className="text-caption text-state-error mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label">Kategori</label>
          <select
            className="input"
            value={form.category}
            onChange={e => set('category', e.target.value)}
          >
            {PRODUCT_CATEGORIES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Satıcı</label>
          <input
            className="input"
            value={form.vendor}
            onChange={e => set('vendor', e.target.value)}
            placeholder="Mağaza adı (opsiyonel)"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="label">Fiyat (₺)</label>
          <input
            type="number"
            min="0"
            className="input"
            value={form.price}
            onChange={e => set('price', e.target.value)}
            placeholder="0"
          />
          {errors.price && <p className="text-caption text-state-error mt-1">{errors.price}</p>}
        </div>
        <div>
          <label className="label">Stok</label>
          <input
            type="number"
            min="0"
            className="input"
            value={form.stock}
            onChange={e => set('stock', e.target.value)}
            placeholder="0"
          />
          {errors.stock && <p className="text-caption text-state-error mt-1">{errors.stock}</p>}
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button type="button" onClick={onCancel} className="btn-ghost">
          Vazgeç
        </button>
        <button type="submit" className="btn-primary">
          {initial ? 'Güncelle' : 'Ürünü ekle'}
        </button>
      </div>
    </form>
  )
}
