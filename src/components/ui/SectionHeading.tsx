import type { ReactNode } from 'react'
import { Badge } from './Badge'

interface SectionHeadingProps {
  kicker?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  kickerColor?: 'magenta' | 'emerald' | 'golden' | 'deep' | 'lavender'
  /** Additional class on the wrapper */
  className?: string
  /** Max-width for subtitle (tailwind class e.g. "max-w-xl") */
  subtitleWidth?: string
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'left',
  kickerColor = 'magenta',
  className,
  subtitleWidth = 'max-w-2xl',
}: SectionHeadingProps) {
  const centerClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={['', centerClass, className].filter(Boolean).join(' ')}>
      {kicker && (
        <div className={align === 'center' ? 'flex justify-center mb-3' : 'mb-3'}>
          <Badge color={kickerColor}>{kicker}</Badge>
        </div>
      )}
      <h2
        className={`section-title text-3xl md:text-4xl font-bold mb-4 ${centerClass}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-subtitle text-base md:text-lg leading-relaxed ${subtitleWidth} ${centerClass}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
