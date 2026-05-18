/**
 * @file Product type definition (JSDoc).
 * The web admin uses JS — these typedefs document the shape of objects
 * stored in localStorage and rendered across pages.
 */

/**
 * @typedef {('Market'|'Yemek'|'İlaç'|'Çiçek & Hediye'|'Kırtasiye'|'Teknoloji'|'Su & İçecek')} ProductCategory
 */

/**
 * @typedef {Object} Product
 * @property {string} id              Stable unique id (e.g. "p_1717003221").
 * @property {string} name            Display name in Turkish.
 * @property {ProductCategory} category  One of the 7 brand categories.
 * @property {number} price           Unit price in TRY.
 * @property {number} stock           Current stock count.
 * @property {string} [vendor]        Selling store / vendor.
 * @property {string} [image]         Optional emoji or icon id.
 * @property {string} createdAt       ISO timestamp.
 */

export const PRODUCT_CATEGORIES = [
  'Market',
  'Yemek',
  'İlaç',
  'Çiçek & Hediye',
  'Kırtasiye',
  'Teknoloji',
  'Su & İçecek'
]
