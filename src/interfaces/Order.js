/**
 * @file Order type definition (JSDoc).
 */

/**
 * @typedef {('pending'|'assigned'|'on_the_way'|'delivered'|'cancelled')} OrderStatus
 */

/**
 * @typedef {('walk'|'bike'|'car')} DeliveryMode
 */

/**
 * @typedef {Object} OrderItem
 * @property {string} productId
 * @property {string} name
 * @property {number} qty
 * @property {number} unitPrice
 */

/**
 * @typedef {Object} Order
 * @property {string} id
 * @property {string} customer        Customer display name.
 * @property {string} address         Short address string.
 * @property {OrderItem[]} items
 * @property {number} total           TRY total of items.
 * @property {number} commission      Courier commission in TRY.
 * @property {DeliveryMode} mode      walk/bike/car.
 * @property {OrderStatus} status
 * @property {string|null} courier    Courier display name or null.
 * @property {string} createdAt       ISO timestamp.
 */

export const ORDER_STATUSES = [
  'pending',
  'assigned',
  'on_the_way',
  'delivered',
  'cancelled'
]

/** Human-friendly TR labels for status pills. */
export const STATUS_LABEL = {
  pending: 'Bekliyor',
  assigned: 'Atandı',
  on_the_way: 'Yolda',
  delivered: 'Teslim Edildi',
  cancelled: 'İptal'
}

/** Human-friendly TR labels for delivery mode. */
export const MODE_LABEL = {
  walk: 'Yürüyerek',
  bike: 'Bisiklet',
  car: 'Araba'
}
