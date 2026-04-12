import { ShoppingCart, Star, Eye } from 'lucide-react'

export interface Product {
  id: string
  name: string
  slug: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  badge?: 'Bestseller' | 'New' | 'Sale'
  image?: string
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
  onViewDetail?: (product: Product) => void
}

const BADGE_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  Bestseller: { bg: 'rgba(255,145,0,0.12)', text: 'var(--tangerine)', label: '🔥 Bestseller' },
  New: { bg: 'rgba(31,129,36,0.12)', text: 'var(--emerald)', label: '✨ Baru' },
  Sale: { bg: 'rgba(209,0,113,0.12)', text: 'var(--magenta-bold)', label: '💸 Diskon' },
}

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount)
}

export function ProductCard({ product, onAddToCart, onViewDetail }: ProductCardProps) {
  const badge = product.badge ? BADGE_STYLES[product.badge] : null
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  return (
    <div
      className="group rounded-3xl overflow-hidden transition-all card-hover flex flex-col"
      style={{ background: 'white', border: '1px solid var(--line)' }}
    >
      {/* Image area */}
      <div
        className="relative flex items-center justify-center"
        style={{ height: '200px', background: 'linear-gradient(135deg, rgba(209,0,113,0.04), rgba(31,129,36,0.03))' }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain p-4"
          />
        ) : (
          <div className="text-6xl opacity-30">📖</div>
        )}

        {/* Badge */}
        {badge && (
          <div
            className="absolute top-3 left-3 text-xs font-bold rounded-full px-3 py-1"
            style={{ background: badge.bg, color: badge.text, fontFamily: 'var(--font-heading)' }}
          >
            {badge.label}
          </div>
        )}

        {/* Discount */}
        {discount > 0 && (
          <div
            className="absolute top-3 right-3 text-xs font-bold rounded-full px-2 py-1 text-white"
            style={{ background: 'var(--magenta-bold)', fontFamily: 'var(--font-heading)' }}
          >
            -{discount}%
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/70 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => onViewDetail?.(product)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-transform hover:scale-105"
            style={{ background: 'var(--deep)' }}
            aria-label="Lihat detail"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-transform hover:scale-105"
            style={{ background: 'var(--magenta-bold)' }}
            aria-label="Tambah ke keranjang"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <span
          className="text-xs font-semibold mb-1"
          style={{ color: 'var(--magenta-bold)', fontFamily: 'var(--font-heading)' }}
        >
          {product.category}
        </span>
        <p
          className="font-semibold text-sm leading-snug mb-2 flex-1"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
        >
          {product.name}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-3 w-3"
                fill={i < Math.round(product.rating) ? 'var(--sun)' : 'transparent'}
                style={{ color: i < Math.round(product.rating) ? 'var(--sun)' : 'var(--line)' }}
              />
            ))}
          </div>
          <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            {product.rating.toFixed(1)} ({product.reviewCount.toLocaleString('id-ID')})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-bold text-base" style={{ fontFamily: 'var(--font-heading)', color: 'var(--magenta-bold)' }}>
            {formatRupiah(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs line-through" style={{ color: 'var(--text-secondary)' }}>
              {formatRupiah(product.originalPrice)}
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(209,0,113,0.3)]"
          style={{ background: 'linear-gradient(135deg,var(--magenta-bold),var(--magenta-deep))', fontFamily: 'var(--font-heading)' }}
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  )
}
