import React, { useMemo, useState } from 'react'
import { Search, Filter, Plus } from 'lucide-react'
import ProductCard from '../components/ProductCard.jsx'
import ProductForm from '../components/ProductForm.jsx'
import Modal from '../components/Modal.jsx'
import { PRODUCT_CATEGORIES } from '../interfaces/Product.js'
import { MOCK_PRODUCTS } from '../data/mockProducts.js'

export default function Products() {
  const [products, setProducts] = useState(MOCK_PRODUCTS)
  const [query, setQuery] = useState('')
  const [cat, setCat]     = useState('Hepsi')
  const [adding, setAdding] = useState(false)

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchesCat = cat === 'Hepsi' || p.category === cat
      const matchesQ   = !query.trim() ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        (p.vendor || '').toLowerCase().includes(query.toLowerCase())
      return matchesCat && matchesQ
    })
  }, [products, query, cat])

  const addProduct = (data) => {
    const id = `p_${Date.now()}`
    setProducts(list => [
      { id, createdAt: new Date().toISOString(), ...data },
      ...list
    ])
    setAdding(false)
  }

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-h1 font-display">Ürünler</h1>
          <p className="text-ink-muted text-body-sm">
            {filtered.length} ürün gösteriliyor · toplam {products.length} kayıt
          </p>
        </div>
        <button onClick={() => setAdding(true)} className="btn-primary">
          <Plus className="w-4 h-4" /> Yeni ürün
        </button>
      </div>

      <div className="card mb-6 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Ürün veya satıcı ara…"
            className="input pl-9"
          />
        </div>
        <div className="relative md:w-64">
          <Filter className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <select
            value={cat}
            onChange={e => setCat(e.target.value)}
            className="input pl-9 appearance-none"
          >
            <option value="Hepsi">Tüm kategoriler</option>
            {PRODUCT_CATEGORIES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="card text-center text-ink-muted py-10">
          Arama kriterlerine uyan ürün yok.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      <Modal open={adding} onClose={() => setAdding(false)} title="Yeni ürün ekle">
        <ProductForm onSubmit={addProduct} onCancel={() => setAdding(false)} />
      </Modal>
    </section>
  )
}
