import { useEffect, useRef, useState } from 'react'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  /** Only trigger once (default: true) */
  once?: boolean
}

/**
 * Returns a ref to attach to a DOM element, and a boolean `visible`
 * that becomes true when the element enters the viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  once = true,
}: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, visible }
}

/**
 * Returns a className string and minimal inline style for reveal animation.
 * Uses the CSS `.reveal` / `.reveal.is-visible` classes from styles.css.
 *
 * Usage:
 *   const { className, style } = revealProps(visible, 200)
 *   <div className={className} style={style}>
 */
export function revealProps(
  visible: boolean,
  delay: number = 0
): { className: string; style?: React.CSSProperties } {
  const className = visible ? 'reveal is-visible' : 'reveal'
  return delay > 0
    ? { className, style: { '--reveal-delay': `${delay}ms` } as React.CSSProperties }
    : { className }
}

/**
 * @deprecated Use revealProps() instead for class-based reveal
 * Returns inline styles for a fade+rise animation based on visibility.
 */
export function revealStyle(
  visible: boolean,
  delay: number = 0
): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  }
}
