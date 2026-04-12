import type { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Subtle border accent color key */
  accent?: 'magenta' | 'emerald' | 'golden' | 'lavender' | 'none'
  hoverable?: boolean
  glass?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const ACCENT_BORDER: Record<string, string> = {
  magenta: 'rgba(209,0,113,0.18)',
  emerald: 'rgba(31,129,36,0.18)',
  golden: 'rgba(255,145,0,0.22)',
  lavender: 'rgba(208,153,255,0.22)',
  none: 'var(--line)',
}

const ACCENT_SHADOW: Record<string, string> = {
  magenta: '0 20px 48px rgba(209,0,113,0.08)',
  emerald: '0 20px 48px rgba(31,129,36,0.07)',
  golden: '0 20px 48px rgba(255,145,0,0.07)',
  lavender: '0 20px 48px rgba(208,153,255,0.07)',
  none: '0 8px 24px rgba(0,0,0,0.04)',
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
  style,
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        'rounded-3xl',
        PADDING[padding],
        hoverable ? 'card-hover' : '',
        glass ? 'backdrop-blur-sm' : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        background: glass
          ? 'rgba(255,255,255,0.85)'
          : 'white',
        border: `1.5px solid ${ACCENT_BORDER[accent]}`,
        boxShadow: ACCENT_SHADOW[accent],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
