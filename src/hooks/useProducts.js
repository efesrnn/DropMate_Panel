import useLocalStorage from './useLocalStorage.js'
import { MOCK_PRODUCTS } from '../data/mockProducts.js'

/**
 * Product CRUD bound to localStorage under "dropmate.products".
 * Seeds with MOCK_PRODUCTS on first run.
 */
export default function useProducts() {
  const [products, setProducts] = useLocalStorage('dropmate.products', MOCK_PRODUCTS)

  const add = (data) => {
    const id = `p_${Date.now()}`
    setProducts(list => [
      { id, createdAt: new Date().toISOString(), ...data },
      ...list
    ])
  }

  const update = (id, patch) => {
    setProducts(list => list.map(p => p.id === id ? { ...p, ...patch } : p))
  }

  const remove = (id) => {
    setProducts(list => list.filter(p => p.id !== id))
  }

  const reset = () => setProducts(MOCK_PRODUCTS)

  return { products, add, update, remove, reset }
}
