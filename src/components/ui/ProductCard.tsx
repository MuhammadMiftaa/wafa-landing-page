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

const BADGE_CLASSES: Record<string, { bg: string; text: string; label: string }> = {
  Bestseller: { bg: 'bg-[rgba(255,145,0,0.12)]', text: 'text-tangerine', label: '🔥 Bestseller' },
  New: { bg: 'bg-[rgba(31,129,36,0.12)]', text: 'text-emerald', label: '✨ Baru' },
  Sale: { bg: 'bg-[rgba(209,0,113,0.12)]', text: 'text-magenta-bold', label: '💸 Diskon' },
}

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount)
}

export function ProductCard({ product, onAddToCart, onViewDetail }: ProductCardProps) {
  const badge = product.badge ? BADGE_CLASSES[product.badge] : null
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  return (
    <div className="group surface-card overflow-hidden rounded-3xl card-hover flex flex-col">
      {/* Image area */}
      <div className="relative flex h-[200px] items-center justify-center bg-product-area">
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
            className={`absolute top-3 left-3 font-heading text-xs font-bold rounded-full px-3 py-1 ${badge.bg} ${badge.text}`}
          >
            {badge.label}
          </div>
        )}

        {/* Discount */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 font-heading text-xs font-bold rounded-full px-2 py-1 text-white bg-magenta-bold">
            -{discount}%
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/70 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => onViewDetail?.(product)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-deep text-white transition-transform hover:scale-105"
            aria-label="Lihat detail"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-magenta-bold text-white transition-transform hover:scale-105"
            aria-label="Tambah ke keranjang"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <span className="font-heading text-xs font-semibold text-magenta-bold mb-1">
          {product.category}
        </span>
        <p className="font-heading text-sm font-semibold leading-snug text-text-primary mb-2 flex-1">
          {product.name}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.round(product.rating) ? 'text-sun' : 'text-line'
                }`}
                fill={i < Math.round(product.rating) ? 'var(--color-sun)' : 'transparent'}
              />
            ))}
          </div>
          <span className="text-xs text-text-secondary">
            {product.rating.toFixed(1)} ({product.reviewCount.toLocaleString('id-ID')})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-heading text-base font-bold text-magenta-bold">
            {formatRupiah(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-text-secondary line-through">
              {formatRupiah(product.originalPrice)}
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="btn-primary w-full justify-center text-sm py-2.5"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  )
}
