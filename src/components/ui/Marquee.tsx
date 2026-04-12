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
      className={`overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className ?? ''}`}
    >
      <div
        className={`flex w-max items-center animate-marquee ${reverse ? '[animation-direction:reverse]' : ''} ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Original */}
        <div className="flex items-center">{children}</div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  )
}
