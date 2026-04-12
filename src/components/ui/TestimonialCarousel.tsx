import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  /** Optional star rating 1–5 */
  stars?: number
  /** Optional emoji/avatar initials */
  avatar?: string
  avatarColor?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlayMs?: number
  showDots?: boolean
  showArrows?: boolean
  className?: string
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? 'var(--sun)' : 'var(--line)' }}>
          ★
        </span>
      ))}
    </div>
  )
}

export function TestimonialCarousel({
  testimonials,
  autoPlayMs = 5000,
  showDots = true,
  showArrows = true,
  className,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const prev = useCallback(() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length), [testimonials.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [testimonials.length])

  useEffect(() => {
    if (paused || testimonials.length <= 1) return
    const t = setInterval(next, autoPlayMs)
    return () => clearInterval(t)
  }, [paused, next, autoPlayMs, testimonials.length])

  const t = testimonials[index]
  if (!t) return null

  return (
    <div
      className={`relative ${className ?? ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        key={index}
        className="rounded-3xl p-8 md:p-10"
        style={{
          background: 'white',
          border: '1.5px solid var(--line)',
          boxShadow: '0 20px 60px rgba(157,22,124,0.08)',
          animation: 'fade-in 400ms ease both',
        }}
      >
        {/* Quote icon */}
        <div
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: 'rgba(209,0,113,0.08)' }}
        >
          <Quote className="h-5 w-5" style={{ color: 'var(--magenta-bold)' }} />
        </div>

        {t.stars && <Stars count={t.stars} />}

        <blockquote
          className="text-base md:text-lg leading-relaxed italic mb-6"
          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}
        >
          "{t.quote}"
        </blockquote>

        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white text-sm font-bold"
            style={{
              background: t.avatarColor ?? 'linear-gradient(135deg, var(--magenta-bold), var(--magenta-deep))',
              fontFamily: 'var(--font-heading)',
            }}
          >
            {t.avatar ?? t.author.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="m-0 font-bold text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
              {t.author}
            </p>
            <p className="m-0 text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{t.role}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      {(showArrows || showDots) && (
        <div className="mt-5 flex items-center justify-between">
          {showDots && (
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Testimoni ${i + 1}`}
                  className="transition-all duration-200 rounded-full"
                  style={{
                    width: i === index ? '24px' : '8px',
                    height: '8px',
                    background: i === index ? 'var(--magenta-bold)' : 'rgba(209,0,113,0.2)',
                  }}
                />
              ))}
            </div>
          )}
          {showArrows && (
            <div className="flex items-center gap-2 ml-auto">
              <button
                type="button"
                onClick={prev}
                aria-label="Sebelumnya"
                className="flex h-9 w-9 items-center justify-center rounded-xl border transition-all hover:border-[rgba(209,0,113,0.3)] hover:bg-[rgba(209,0,113,0.06)]"
                style={{ borderColor: 'var(--line)', color: 'var(--text-secondary)' }}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Berikutnya"
                className="flex h-9 w-9 items-center justify-center rounded-xl border transition-all hover:border-[rgba(209,0,113,0.3)] hover:bg-[rgba(209,0,113,0.06)]"
                style={{ borderColor: 'var(--line)', color: 'var(--text-secondary)' }}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
