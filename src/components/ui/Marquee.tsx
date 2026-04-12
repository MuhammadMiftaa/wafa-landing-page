import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  /** Duration in seconds */
  speed?: number
  reverse?: boolean
  pauseOnHover?: boolean
  className?: string
}

/**
 * Infinite horizontal marquee.
 * Duplicates children to create a seamless loop.
 * CSS animation is defined in styles.css (`@keyframes marquee`).
 */
export function Marquee({
  children,
  speed = 30,
  reverse = false,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden w-full ${className ?? ''}`}
      style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <div
        className={`flex w-max items-center ${pauseOnHover ? 'group' : ''}`}
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : ''}`,
          animationPlayState: 'running',
        }}
        // Pause on hover via inline style trick doesn't work well in CSS;
        // use the class-based approach from styles.css if pauseOnHover
      >
        {/* Original */}
        <div className="flex items-center">{children}</div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  )
}
