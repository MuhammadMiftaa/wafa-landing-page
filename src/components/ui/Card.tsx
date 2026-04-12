import type { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Subtle border accent color key */
  accent?: 'magenta' | 'emerald' | 'golden' | 'lavender' | 'none'
  hoverable?: boolean
  glass?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const ACCENT_CLASSES: Record<string, string> = {
  magenta: 'border-[rgba(209,0,113,0.18)] shadow-[0_20px_48px_rgba(209,0,113,0.08)]',
  emerald: 'border-[rgba(31,129,36,0.18)] shadow-[0_20px_48px_rgba(31,129,36,0.07)]',
  golden: 'border-[rgba(255,145,0,0.22)] shadow-[0_20px_48px_rgba(255,145,0,0.07)]',
  lavender: 'border-[rgba(208,153,255,0.22)] shadow-[0_20px_48px_rgba(208,153,255,0.07)]',
  none: 'border-line shadow-[0_8px_24px_rgba(0,0,0,0.04)]',
}

const PADDING: Record<string, string> = {
  sm: 'p-5',
  md: 'p-7',
  lg: 'p-8 md:p-10',
}

export function Card({
  children,
  accent = 'none',
  hoverable = false,
  glass = false,
  padding = 'md',
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        'rounded-3xl border-[1.5px]',
        glass ? 'bg-white/85 backdrop-blur-sm' : 'bg-white',
        PADDING[padding],
        ACCENT_CLASSES[accent],
        hoverable ? 'card-hover' : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </div>
  )
}
