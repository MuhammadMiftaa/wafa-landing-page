import { useState, useEffect, useRef } from 'react'

interface CountUpProps {
  /** Target number to count up to */
  end: number
  /** Duration of the animation in ms */
  duration?: number
  /** Prefix (e.g. "+") */
  prefix?: string
  /** Suffix (e.g. "+", "K", " Provinsi") */
  suffix?: string
  /** Decimal places */
  decimals?: number
  /** Whether to start counting immediately or wait for intersection */
  immediate?: boolean
  className?: string
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function CountUp({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  immediate = false,
  className,
}: CountUpProps) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(immediate)
  const ref = useRef<HTMLSpanElement>(null)
  const rafRef = useRef<number>(0)

  // IntersectionObserver to trigger when element enters viewport
  useEffect(() => {
    if (immediate) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate])

  useEffect(() => {
    if (!started) return
    const start = performance.now()
    function frame(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      setValue(parseFloat((eased * end).toFixed(decimals)))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(frame)
      } else {
        setValue(end)
      }
    }
    rafRef.current = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafRef.current)
  }, [started, end, duration, decimals])

  const display = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString('id-ID')

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  )
}
