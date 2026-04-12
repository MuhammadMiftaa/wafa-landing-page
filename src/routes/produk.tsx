import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Filter, Grid3x3, List, Tag, ShoppingCart } from "lucide-react";
import { SectionHeading, Badge, ProductCard } from "../components/ui/index.ts";
import { PRODUCTS } from "../data/content.ts";
import type { Product } from "../components/ui/index.ts";

export const Route = createFileRoute("/produk")({ component: ProdukPage });

const CATEGORIES = [
  "Semua",
  "Buku Tilawah",
  "Buku Menulis",
  "Kartu & Peraga",
  "Buku & Media",
  "Audio/Video",
];
const SORT_OPTIONS = [
  { value: "default", label: "Terbaru" },
  { value: "price-asc", label: "Harga: Rendah → Tinggi" },
  { value: "price-desc", label: "Harga: Tinggi → Rendah" },
  { value: "rating", label: "Rating Tertinggi" },
  { value: "popular", label: "Terlaris" },
];

const BUNDLES = [
  {
    id: "pemula",
    name: "Paket Pemula TK-SD",
    desc: "Buku Tilawah Jilid 1-2, Buku Menulis 1-2, Kartu Huruf Hijaiyah, Akses App 3 bulan, Panduan Ortu",
    price: 299000,
    originalPrice: 385000,
    icon: "🌱",
    color: "var(--color-emerald)",
    bg: "bg-[rgba(31,129,36,0.06)]",
    border: "border-[rgba(31,129,36,0.15)]",
    items: [
      "Buku Tilawah Jilid 1-2",
      "Buku Menulis Hijaiyah 1-2",
      "Kartu Peraga A7",
      "Akses App 3 bulan",
      "Panduan Orang Tua",
    ],
  },
  {
    id: "menengah",
    name: "Paket Menengah SD-SMP",
    desc: "Buku Tilawah Jilid 3-5, Buku Menulis 3-6, Buku Tajwid & Ghorib, Akses App 6 bulan",
    price: 459000,
    originalPrice: 595000,
    icon: "📚",
    color: "var(--color-magenta-bold)",
    bg: "bg-[rgba(209,0,113,0.06)]",
    border: "border-[rgba(209,0,113,0.15)]",
    items: [
      "Buku Tilawah Jilid 3-5",
      "Buku Menulis Hijaiyah 3-6",
      "Buku Tajwid & Ghorib",
      "Akses App 6 bulan",
    ],
  },
  {
    id: "lengkap",
    name: "Paket Lengkap",
    desc: "Seluruh seri buku Tilawah + Menulis, Kartu Peraga, Buku TTG, Al-Qur'an Hafalan 5 Juz, Akses App 1 tahun",
    price: 799000,
    originalPrice: 1100000,
    icon: "🌟",
    color: "var(--color-golden)",
    bg: "bg-[rgba(255,145,0,0.06)]",
    border: "border-[rgba(255,145,0,0.2)]",
    items: [
      "Semua seri Buku Tilawah",
      "Semua seri Buku Menulis",
      "Kartu Peraga A7 & A5",
      "Buku TTG",
      "Al-Qur'an Hafalan 5 Juz",
      "Akses App 1 tahun penuh",
    ],
    badge: "BEST VALUE",
  },
  {
    id: "lembaga",
    name: "Paket Lembaga",
    desc: "Khusus mitra: Peraga Besar A2 lengkap, Buku set siswa (20 eks), Flashdisk Wafa, Lisensi App kelas",
    price: 2500000,
    icon: "🏫",
    color: "var(--color-deep)",
    bg: "bg-[rgba(75,42,103,0.06)]",
    border: "border-[rgba(75,42,103,0.15)]",
    items: [
      "Peraga Besar A2 seri 1-5 + KB/TK",
      "Set Buku Siswa (20 eks)",
      "Flashdisk Wafa Audio",
      "Lisensi App Kelas",
    ],
  },
];

function formatRupiah(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

function ProdukPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [sort, setSort] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [cart, setCart] = useState<Product[]>([]);
  const [cartNotif, setCartNotif] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let items =
      activeCategory === "Semua"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory);
    switch (sort) {
      case "price-asc":
        items = [...items].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        items = [...items].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        items = [...items].sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        items = [...items].sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }
    return items;
  }, [activeCategory, sort]);

  function handleAddToCart(product: Product) {
    setCart((prev) => [...prev, product]);
    setCartNotif(product.name);
    setTimeout(() => setCartNotif(null), 3000);
  }

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-section-magenta-emerald">
        <div className="blob-magenta absolute -left-40 top-0 h-96 w-96 opacity-30" />
        <div className="page-wrap relative z-10 text-center">
          <Badge color="magenta">Media Pembelajaran</Badge>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Produk Belajar{" "}
            <span className="gradient-text">Wafa</span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg leading-relaxed text-text-secondary">
            Media belajar dikembangkan sejak 2013. Lebih dari 30 produk tersedia
            — buku, kartu peraga, aplikasi, dan paket lengkap.
          </p>
          {cart.length > 0 && (
            <div className="mt-6 inline-flex items-center gap-2 font-heading rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-magenta-bold">
              <ShoppingCart className="h-4 w-4" />
              {cart.length} produk di keranjang
            </div>
          )}
        </div>
      </section>

      {/* Cart notif toast */}
      {cartNotif && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 font-heading rounded-2xl px-5 py-3.5 text-sm font-semibold text-white bg-emerald shadow-xl rise-in">
          <ShoppingCart className="h-4 w-4" />
          Ditambahkan:{" "}
          {cartNotif.length > 30 ? cartNotif.slice(0, 30) + "..." : cartNotif}
        </div>
      )}

      {/* Filters */}
      <section className="py-6 sticky top-16 z-30 bg-surface-strong/95 backdrop-blur-md border-b border-line">
        <div className="page-wrap">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Category pills */}
            <div className="flex gap-2 flex-wrap scroll-x py-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`tab-pill whitespace-nowrap flex-shrink-0 ${
                    activeCategory === cat
                      ? "bg-magenta-bold text-white shadow-[0_4px_16px_rgba(209,0,113,0.3)]"
                      : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort + View */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex items-center gap-1">
                <Filter className="h-4 w-4 text-text-secondary" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="form-select text-sm !rounded-xl !px-3 !py-2"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-1 rounded-xl border border-line p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-magenta-bold text-white"
                      : "bg-transparent text-text-secondary"
                  }`}
                >
                  <Grid3x3 className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-magenta-bold text-white"
                      : "bg-transparent text-text-secondary"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-text-secondary">
            {filtered.length} produk ditemukan
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding">
        <div className="page-wrap">
          {viewMode === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="surface-card flex items-center gap-5 rounded-2xl p-5 card-hover"
                >
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl text-4xl bg-product-area">
                    📖
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading text-xs font-semibold text-magenta-bold mb-0.5">
                      {product.category}
                    </p>
                    <p className="font-heading text-sm font-semibold text-text-primary">
                      {product.name}
                    </p>
                    <p className="text-xs mt-0.5 text-text-secondary">
                      ⭐ {product.rating} (
                      {product.reviewCount.toLocaleString("id-ID")} ulasan)
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="font-heading text-base font-bold text-magenta-bold">
                      {formatRupiah(product.price)}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="mt-2 btn-primary text-xs py-2 px-4"
                    >
                      <ShoppingCart className="h-3 w-3" /> Keranjang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Paket Bundel */}
      <section className="section-padding bg-section-deep-fade">
        <div className="page-wrap">
          <SectionHeading
            kicker="Paket Hemat"
            title="Bundel Lengkap, Harga Lebih Terjangkau"
            subtitle="Pilih paket yang sesuai tingkat pembelajaran. Semua paket dirancang untuk memaksimalkan pengalaman belajar Al-Qur'an."
            align="center"
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUNDLES.map((bundle) => (
              <div
                key={bundle.id}
                className={`rounded-3xl border-[1.5px] ${bundle.border} ${bundle.bg} p-7 flex flex-col card-hover relative`}
              >
                {bundle.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 font-heading text-[0.65rem] font-bold rounded-full px-3 py-1 text-white bg-golden">
                      <Tag className="h-3 w-3" />
                      {bundle.badge}
                    </span>
                  </div>
                )}
                <div className="text-3xl mb-4">{bundle.icon}</div>
                <h3 className="font-heading text-sm font-bold text-text-primary mb-1">
                  {bundle.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className="font-heading text-lg font-bold"
                    style={{ color: bundle.color }}
                  >
                    {formatRupiah(bundle.price)}
                  </span>
                  {bundle.originalPrice && (
                    <span className="text-xs line-through text-text-secondary">
                      {formatRupiah(bundle.originalPrice)}
                    </span>
                  )}
                </div>
                <ul className="flex-1 space-y-1.5 mb-5">
                  {bundle.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-text-secondary"
                    >
                      <span style={{ color: bundle.color }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/6281130589310"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full py-2.5 font-heading text-sm font-semibold text-white no-underline transition-all hover:-translate-y-0.5"
                  style={{ background: bundle.color }}
                >
                  Pesan Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="page-wrap">
          <div className="rounded-3xl border border-[rgba(209,0,113,0.12)] bg-section-magenta-emerald p-8 md:p-12 text-center">
            <p className="section-kicker mb-3">
              Butuh pembelian dalam jumlah besar?
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-3">
              Harga Spesial untuk Lembaga & Reseller
            </h2>
            <p className="text-sm text-text-secondary mb-6 max-w-lg mx-auto">
              Lembaga mitra Wafa mendapatkan harga khusus, prioritas stok, dan
              dukungan teknis langsung dari tim pusat.
            </p>
            <a
              href="https://wa.me/6281130589310"
              target="_blank"
              rel="noreferrer"
              className="btn-primary no-underline"
            >
              Hubungi Tim Wafa
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
