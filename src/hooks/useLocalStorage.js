import { useEffect, useRef, useState } from 'react'

/**
 * Lazy, type-stable localStorage-backed state.
 * Seeds with `initial` value the very first time the key is written.
 *
 * @template T
 * @param {string} key  Storage key (namespaced, e.g. "dropmate.products").
 * @param {T} initial   Default value when storage is empty / corrupt.
 * @returns {[T, (v:T|((prev:T)=>T))=>void]}
 */
export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initial
    try {
      const raw = window.localStorage.getItem(key)
      if (raw === null) return initial
      return JSON.parse(raw)
    } catch (e) {
      console.warn(`useLocalStorage: failed to parse "${key}"`, e)
      return initial
    }
  })

  const first = useRef(true)
  useEffect(() => {
    if (first.current) {
      first.current = false
      try {
        if (window.localStorage.getItem(key) === null) {
          window.localStorage.setItem(key, JSON.stringify(value))
        }
      } catch {}
      return
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.warn(`useLocalStorage: failed to write "${key}"`, e)
    }
  }, [key, value])

  return [value, setValue]
}
