import useLocalStorage from './useLocalStorage.js'
import { MOCK_ORDERS } from '../data/mockOrders.js'

/** Order CRUD bound to localStorage. */
export default function useOrders() {
  const [orders, setOrders] = useLocalStorage('dropmate.orders', MOCK_ORDERS)

  const add = (data) => {
    const id = `o_${Date.now()}`
    setOrders(list => [
      { id, createdAt: new Date().toISOString(), ...data },
      ...list
    ])
  }
  const update = (id, patch) => {
    setOrders(list => list.map(o => o.id === id ? { ...o, ...patch } : o))
  }
  const remove = (id) => {
    setOrders(list => list.filter(o => o.id !== id))
  }
  const reset = () => setOrders(MOCK_ORDERS)

  return { orders, add, update, remove, reset }
}
