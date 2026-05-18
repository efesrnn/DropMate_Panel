/**
 * Seed orders — written on first run if localStorage is empty.
 * Designed to demonstrate all 5 status states + all 3 delivery modes.
 */

/** @type {import('../interfaces/Order.js').Order[]} */
export const MOCK_ORDERS = [
  {
    id: 'o_2001',
    customer: 'Ayşe Yılmaz',
    address: 'Kadıköy, Moda Cad. 14/3',
    items: [
      { productId: 'p_004', name: 'Cheeseburger Menü', qty: 2, unitPrice: 220 },
      { productId: 'p_016', name: 'Cola 1L', qty: 1, unitPrice: 32 }
    ],
    total: 472,
    commission: 65,
    mode: 'bike',
    status: 'on_the_way',
    courier: 'Mert K.',
    createdAt: '2026-05-18T11:42:00Z'
  },
  {
    id: 'o_2002',
    customer: 'Hakan Demir',
    address: 'Beşiktaş, Barbaros Bul. 7',
    items: [
      { productId: 'p_002', name: 'Taze Ekmek',  qty: 2, unitPrice: 12 },
      { productId: 'p_001', name: 'Tam Yağlı Süt 1L', qty: 1, unitPrice: 38 },
      { productId: 'p_003', name: 'Yumurta 15li', qty: 1, unitPrice: 95 }
    ],
    total: 157,
    commission: 22,
    mode: 'walk',
    status: 'delivered',
    courier: 'Selin A.',
    createdAt: '2026-05-18T09:15:00Z'
  },
  {
    id: 'o_2003',
    customer: 'Zeynep Kaya',
    address: 'Şişli, Halaskargazi Cad. 88',
    items: [
      { productId: 'p_007', name: 'Parol 500mg 20 Tablet', qty: 1, unitPrice: 64 },
      { productId: 'p_008', name: 'C Vitamini 1000mg', qty: 1, unitPrice: 189 }
    ],
    total: 253,
    commission: 35,
    mode: 'bike',
    status: 'assigned',
    courier: 'Berk T.',
    createdAt: '2026-05-18T13:02:00Z'
  },
  {
    id: 'o_2004',
    customer: 'Mehmet Öztürk',
    address: 'Üsküdar, Çiçekçi Mah. 22/5',
    items: [
      { productId: 'p_009', name: '7li Kırmızı Gül Buketi', qty: 1, unitPrice: 350 }
    ],
    total: 350,
    commission: 50,
    mode: 'car',
    status: 'pending',
    courier: null,
    createdAt: '2026-05-18T14:30:00Z'
  },
  {
    id: 'o_2005',
    customer: 'Elif Aksoy',
    address: 'Bakırköy, İncirli Cad. 4',
    items: [
      { productId: 'p_013', name: 'USB-C Şarj Kablosu', qty: 1, unitPrice: 130 },
      { productId: 'p_014', name: '20W Hızlı Şarj Adaptörü', qty: 1, unitPrice: 290 }
    ],
    total: 420,
    commission: 58,
    mode: 'car',
    status: 'on_the_way',
    courier: 'Onur P.',
    createdAt: '2026-05-18T12:11:00Z'
  },
  {
    id: 'o_2006',
    customer: 'Burak Şahin',
    address: 'Maltepe, Bağlarbaşı Mah. 12',
    items: [
      { productId: 'p_015', name: 'Doğal Kaynak Suyu 5L', qty: 4, unitPrice: 25 }
    ],
    total: 100,
    commission: 18,
    mode: 'walk',
    status: 'pending',
    courier: null,
    createdAt: '2026-05-18T14:55:00Z'
  },
  {
    id: 'o_2007',
    customer: 'Deniz Arslan',
    address: 'Ataşehir, Barbaros Mah. 9',
    items: [
      { productId: 'p_005', name: 'Margherita Pizza', qty: 1, unitPrice: 285 },
      { productId: 'p_017', name: 'Taze Sıkılmış Portakal', qty: 2, unitPrice: 55 }
    ],
    total: 395,
    commission: 55,
    mode: 'bike',
    status: 'delivered',
    courier: 'Mert K.',
    createdAt: '2026-05-18T10:05:00Z'
  },
  {
    id: 'o_2008',
    customer: 'Selin Yıldız',
    address: 'Beyoğlu, Tünel Mah. 3',
    items: [
      { productId: 'p_011', name: 'A4 Kağıt 500 Sayfa', qty: 1, unitPrice: 165 },
      { productId: 'p_012', name: 'Tükenmez Kalem 10lu', qty: 1, unitPrice: 45 }
    ],
    total: 210,
    commission: 30,
    mode: 'car',
    status: 'cancelled',
    courier: null,
    createdAt: '2026-05-17T17:40:00Z'
  }
]
