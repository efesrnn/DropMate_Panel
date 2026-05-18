/**
 * Seed product list — used on first load if localStorage is empty.
 * Covers all 7 brand categories from BRAND_IDENTITY.md.
 */

/** @type {import('../interfaces/Product.js').Product[]} */
export const MOCK_PRODUCTS = [
  { id: 'p_001', name: 'Tam Yağlı Süt 1L',         category: 'Market',         price: 38,  stock: 42, vendor: 'Komşu Market',  image: 'milk',    createdAt: '2026-05-01T08:10:00Z' },
  { id: 'p_002', name: 'Taze Ekmek',                category: 'Market',         price: 12,  stock: 88, vendor: 'Köşe Fırını',   image: 'bread',   createdAt: '2026-05-01T08:11:00Z' },
  { id: 'p_003', name: 'Yumurta 15li',              category: 'Market',         price: 95,  stock: 30, vendor: 'Komşu Market',  image: 'egg',     createdAt: '2026-05-01T08:12:00Z' },
  { id: 'p_004', name: 'Cheeseburger Menü',         category: 'Yemek',          price: 220, stock: 99, vendor: 'Burger Köşesi', image: 'burger',  createdAt: '2026-05-02T12:01:00Z' },
  { id: 'p_005', name: 'Margherita Pizza',          category: 'Yemek',          price: 285, stock: 99, vendor: 'Pizza Pi',      image: 'pizza',   createdAt: '2026-05-02T12:02:00Z' },
  { id: 'p_006', name: 'Mercimek Çorbası',          category: 'Yemek',          price: 75,  stock: 99, vendor: 'Esnaf Lokanta', image: 'soup',    createdAt: '2026-05-02T12:03:00Z' },
  { id: 'p_007', name: 'Parol 500mg 20 Tablet',     category: 'İlaç',           price: 64,  stock: 24, vendor: 'Sağlık Eczanesi', image: 'pill', createdAt: '2026-05-03T09:30:00Z' },
  { id: 'p_008', name: 'C Vitamini 1000mg',         category: 'İlaç',           price: 189, stock: 15, vendor: 'Sağlık Eczanesi', image: 'pill', createdAt: '2026-05-03T09:31:00Z' },
  { id: 'p_009', name: '7li Kırmızı Gül Buketi',    category: 'Çiçek & Hediye', price: 350, stock: 7,  vendor: 'Çiçekçi Aylin', image: 'rose',    createdAt: '2026-05-04T11:20:00Z' },
  { id: 'p_010', name: 'Doğum Günü Balon Seti',     category: 'Çiçek & Hediye', price: 120, stock: 18, vendor: 'Parti Dükkanı', image: 'balloon', createdAt: '2026-05-04T11:22:00Z' },
  { id: 'p_011', name: 'A4 Kağıt 500 Sayfa',        category: 'Kırtasiye',      price: 165, stock: 35, vendor: 'Ofis Plus',     image: 'paper',   createdAt: '2026-05-05T10:00:00Z' },
  { id: 'p_012', name: 'Tükenmez Kalem 10lu',       category: 'Kırtasiye',      price: 45,  stock: 60, vendor: 'Ofis Plus',     image: 'pen',     createdAt: '2026-05-05T10:02:00Z' },
  { id: 'p_013', name: 'USB-C Şarj Kablosu',        category: 'Teknoloji',      price: 130, stock: 22, vendor: 'TeknoNoktası',  image: 'cable',   createdAt: '2026-05-06T14:15:00Z' },
  { id: 'p_014', name: '20W Hızlı Şarj Adaptörü',   category: 'Teknoloji',      price: 290, stock: 14, vendor: 'TeknoNoktası',  image: 'plug',    createdAt: '2026-05-06T14:18:00Z' },
  { id: 'p_015', name: 'Doğal Kaynak Suyu 5L',      category: 'Su & İçecek',    price: 25,  stock: 120, vendor: 'Komşu Market', image: 'water',   createdAt: '2026-05-07T07:45:00Z' },
  { id: 'p_016', name: 'Cola 1L',                   category: 'Su & İçecek',    price: 32,  stock: 95, vendor: 'Komşu Market',  image: 'cola',    createdAt: '2026-05-07T07:46:00Z' },
  { id: 'p_017', name: 'Taze Sıkılmış Portakal',    category: 'Su & İçecek',    price: 55,  stock: 28, vendor: 'Manav Hasan',   image: 'orange',  createdAt: '2026-05-07T07:48:00Z' }
]
