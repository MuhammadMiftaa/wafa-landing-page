import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { useScrollReveal, revealStyle } from '../ui/useScrollReveal'
import { FIVE_T } from '../../data/content'

export function MethodSection() {
  const [activeT, setActiveT] = useState(0)
  const { ref, visible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="section-padding">
      <div className="page-wrap">
        <div ref={ref} style={revealStyle(visible)}>
          <SectionHeading
            kicker="Kenapa Wafa Berbeda?"
            title="5 Dimensi Interaksi dengan Al-Qur'an"
            subtitle="Peserta didik tidak hanya sekedar bisa mengaji — mereka mampu membumikan Al-Qur'an dalam seluruh aspek kehidupan melalui kurikulum 5T yang komprehensif."
            align="center"
            className="mb-12"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: cards list */}
          <div className="space-y-3">
            {FIVE_T.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveT(i)}
                className="w-full flex items-center gap-4 rounded-2xl p-5 text-left transition-all"
                style={{
                  background: activeT === i ? t.bg : 'white',
                  border: `1.5px solid ${activeT === i ? t.color + '40' : 'var(--line)'}`,
                  boxShadow: activeT === i ? `0 8px 24px ${t.color}15` : 'none',
                  cursor: 'pointer',
                }}
              >
                <span
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-2xl"
                  style={{ background: t.bg }}
                >
                  {t.icon}
                </span>
                <div className="flex-1 text-left">
                  <p
                    className="font-bold text-sm"
                    style={{ fontFamily: 'var(--font-heading)', color: activeT === i ? t.color : 'var(--text-primary)' }}
                  >
                    {t.key}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{t.title}</p>
                </div>
                <div style={{ color: t.color, opacity: activeT === i ? 1 : 0.2, transition: 'opacity 200ms' }}>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            ))}
          </div>

          {/* Right: sticky detail */}
          <div className="lg:sticky lg:top-28">
            {FIVE_T[activeT] && (
              <div
                key={activeT}
                className="rounded-3xl p-8"
                style={{
                  background: FIVE_T[activeT].bg,
                  border: `1.5px solid ${FIVE_T[activeT].color}30`,
                  animation: 'fade-in 300ms ease both',
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="flex h-16 w-16 items-center justify-center rounded-2xl text-4xl"
                    style={{ background: 'white', boxShadow: `0 8px 20px ${FIVE_T[activeT].color}20` }}
                  >
                    {FIVE_T[activeT].icon}
                  </span>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: FIVE_T[activeT].color, fontFamily: 'var(--font-heading)' }}
                    >
                      {FIVE_T[activeT].key}
                    </p>
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                    >
                      {FIVE_T[activeT].title}
                    </h3>
                  </div>
                </div>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {FIVE_T[activeT].desc}
                </p>

                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-6">
                  {FIVE_T.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveT(i)}
                      className="rounded-full transition-all"
                      style={{
                        width: i === activeT ? '28px' : '8px',
                        height: '8px',
                        background: i === activeT ? FIVE_T[activeT].color : `${FIVE_T[activeT].color}30`,
                      }}
                    />
                  ))}
                  <span className="ml-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {activeT + 1} / {FIVE_T.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="/metode" className="btn-primary no-underline text-sm py-2.5 px-5">
                    Pelajari Lebih Lanjut
                  </a>
                  <a href="/mitra" className="btn-ghost no-underline text-sm py-2.5 px-5">
                    Terapkan di Lembaga
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
