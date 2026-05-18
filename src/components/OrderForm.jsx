import React, { useState } from 'react'
import { MODE_LABEL } from '../interfaces/Order.js'

const MODES = ['walk', 'bike', 'car']

export default function OrderForm({ onSubmit, onCancel }) {
  const [form, setForm] = useState({
    customer: '',
    address: '',
    itemName: '',
    qty: 1,
    unitPrice: '',
    mode: 'bike'
  })
  const [err, setErr] = useState({})
  const set = (k, v) => setForm(s => ({ ...s, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.customer.trim())  errs.customer = 'Gerekli'
    if (!form.address.trim())   errs.address  = 'Gerekli'
    if (!form.itemName.trim())  errs.itemName = 'Gerekli'
    if (form.unitPrice === '' || Number(form.unitPrice) <= 0) errs.unitPrice = 'Geçerli fiyat gir'
    setErr(errs)
    if (Object.keys(errs).length) return

    const qty   = Number(form.qty)
    const price = Number(form.unitPrice)
    const total = qty * price
    // Simple commission heuristic per mode
    const base  = { walk: 18, bike: 35, car: 55 }[form.mode]
    const commission = Math.max(15, Math.min(120, Math.round(base + total * 0.05)))

    onSubmit({
      customer: form.customer.trim(),
      address:  form.address.trim(),
      items: [{ productId: `manual_${Date.now()}`, name: form.itemName.trim(), qty, unitPrice: price }],
      total,
      commission,
      mode: form.mode,
      status: 'pending',
      courier: null
    })
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="label">Müşteri</label>
          <input className="input" value={form.customer} onChange={e => set('customer', e.target.value)} placeholder="Ad Soyad" />
          {err.customer && <p className="text-caption text-state-error mt-1">{err.customer}</p>}
        </div>
        <div>
          <label className="label">Adres</label>
          <input className="input" value={form.address} onChange={e => set('address', e.target.value)} placeholder="Mahalle, Sokak No" />
          {err.address && <p className="text-caption text-state-error mt-1">{err.address}</p>}
        </div>
      </div>

      <div>
        <label className="label">Ürün</label>
        <input className="input" value={form.itemName} onChange={e => set('itemName', e.target.value)} placeholder="Örn. Tam Yağlı Süt 1L" />
        {err.itemName && <p className="text-caption text-state-error mt-1">{err.itemName}</p>}
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="label">Adet</label>
          <input type="number" min="1" className="input" value={form.qty} onChange={e => set('qty', e.target.value)} />
        </div>
        <div>
          <label className="label">Birim ₺</label>
          <input type="number" min="0" className="input" value={form.unitPrice} onChange={e => set('unitPrice', e.target.value)} placeholder="0" />
          {err.unitPrice && <p className="text-caption text-state-error mt-1">{err.unitPrice}</p>}
        </div>
        <div>
          <label className="label">Mod</label>
          <select className="input" value={form.mode} onChange={e => set('mode', e.target.value)}>
            {MODES.map(m => <option key={m} value={m}>{MODE_LABEL[m]}</option>)}
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button type="button" onClick={onCancel} className="btn-ghost">Vazgeç</button>
        <button type="submit" className="btn-primary">Siparişi oluştur</button>
      </div>
    </form>
  )
}
