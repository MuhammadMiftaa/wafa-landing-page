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
        <span key={i} className={i < count ? 'text-sun' : 'text-line'}>
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
        className="rounded-3xl border-[1.5px] border-line bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(157,22,124,0.08)] fade-in"
      >
        {/* Quote icon */}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(209,0,113,0.08)]">
          <Quote className="h-5 w-5 text-magenta-bold" />
        </div>

        {t.stars && <Stars count={t.stars} />}

        <blockquote className="text-base md:text-lg leading-relaxed italic text-text-primary mb-6">
          "{t.quote}"
        </blockquote>

        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl font-heading text-sm font-bold text-white bg-gradient-primary"
            style={t.avatarColor ? { background: t.avatarColor } : undefined}
          >
            {t.avatar ?? t.author.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="m-0 font-heading text-sm font-bold text-text-primary">
              {t.author}
            </p>
            <p className="m-0 mt-0.5 text-xs text-text-secondary">{t.role}</p>
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
                  className={`h-2 rounded-full transition-all duration-200 ${
                    i === index
                      ? 'w-6 bg-magenta-bold'
                      : 'w-2 bg-[rgba(209,0,113,0.2)]'
                  }`}
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
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-line text-text-secondary transition-all hover:border-[rgba(209,0,113,0.3)] hover:bg-[rgba(209,0,113,0.06)]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Berikutnya"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-line text-text-secondary transition-all hover:border-[rgba(209,0,113,0.3)] hover:bg-[rgba(209,0,113,0.06)]"
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
