import { useState, useEffect } from 'react'
import { ArrowRight, Play, Download } from 'lucide-react'
import { CountUp } from '../ui/CountUp'
import { useScrollReveal, revealStyle } from '../ui/useScrollReveal'

const TYPING_WORDS = ['Mudah', 'Cepat', 'Menyenangkan', 'Berkah']

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const { ref, visible } = useScrollReveal({ threshold: 0.1 })

  // Typing animation
  useEffect(() => {
    const current = TYPING_WORDS[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex])

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: '5rem', paddingBottom: '5rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full opacity-40 animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(209,0,113,0.14), transparent 70%)', filter: 'blur(70px)' }}
      />
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full opacity-30 animate-float"
        style={{ background: 'radial-gradient(circle, rgba(31,129,36,0.12), transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[800px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(ellipse, rgba(75,42,103,0.1), transparent 70%)', filter: 'blur(50px)' }}
      />

      <div className="page-wrap relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Content */}
          <div ref={ref}>
            {/* Trust badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-xs font-semibold"
              style={{
                background: 'rgba(31,129,36,0.08)',
                border: '1px solid rgba(31,129,36,0.2)',
                color: 'var(--emerald)',
                fontFamily: 'var(--font-heading)',
                ...revealStyle(visible, 0),
              }}
            >
              <span className="flex h-2 w-2 rounded-full" style={{ background: 'var(--emerald)' }} />
              15.000+ Guru Tersertifikasi · 35 Provinsi
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)',
                ...revealStyle(visible, 100),
              }}
            >
              Belajar Al-Qur'an Jadi{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--magenta-bold), var(--magenta-neon))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  minWidth: '200px',
                }}
              >
                {displayed}
                <span
                  className="cursor-blink"
                  style={{ WebkitTextFillColor: 'var(--magenta-bold)', marginLeft: '2px' }}
                >
                  |
                </span>
              </span>
            </h1>

            {/* Hidden H1 for SEO */}
            <h1 className="sr-only">Belajar Al-Qur'an Metode Otak Kanan Terbaik di Indonesia</h1>

            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              style={{
                color: 'var(--text-secondary)',
                ...revealStyle(visible, 200),
              }}
            >
              Metode Otak Kanan + Irama Hijaz + Sistem 7M — terbukti melahirkan
              <strong style={{ color: 'var(--text-primary)' }}> 15.000+ guru</strong> &
              <strong style={{ color: 'var(--text-primary)' }}> 1200+ lembaga</strong> di 35 provinsi Indonesia.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 mb-10"
              style={revealStyle(visible, 300)}
            >
              <a
                href="/layanan"
                className="btn-primary btn-pulse no-underline"
              >
                Mulai Perjalanan
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wafaindonesia"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold no-underline transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: 'var(--emerald)',
                  color: 'var(--emerald)',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                <Play className="h-4 w-4" fill="currentColor" />
                Lihat Demo Aplikasi
              </a>
            </div>

            {/* Social proof row */}
            <div
              className="flex flex-wrap gap-6"
              style={revealStyle(visible, 400)}
            >
              {[
                { end: 35, suffix: ' Prov', label: 'Provinsi', icon: '🗺️' },
                { end: 15000, suffix: '+', label: 'Guru Tersertifikasi', icon: '👨‍🏫' },
                { end: 500000, suffix: '+', label: 'Siswa', icon: '👧' },
                { end: 14, suffix: ' Thn', label: 'Pengalaman', icon: '🕌' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center gap-1">
                    <span className="text-sm">{stat.icon}</span>
                    <span
                      className="text-xl font-bold"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--magenta-bold)' }}
                    >
                      <CountUp
                        end={stat.end}
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    </span>
                  </div>
                  <p className="m-0 text-xs" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div
            className="relative flex items-center justify-center"
            style={{ ...revealStyle(visible, 200) }}
          >
            {/* Main visual card */}
            <div
              className="relative rounded-3xl p-8 w-full max-w-md mx-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(209,0,113,0.06), rgba(75,42,103,0.04))',
                border: '1.5px solid rgba(209,0,113,0.15)',
                boxShadow: '0 32px 80px rgba(157,22,124,0.12)',
              }}
            >
              {/* App mockup */}
              <div className="text-center mb-6">
                <div
                  className="inline-flex items-center justify-center h-24 w-24 rounded-3xl text-5xl mb-4"
                  style={{ background: 'linear-gradient(135deg, var(--magenta-bold), var(--magenta-deep))', boxShadow: '0 12px 32px rgba(209,0,113,0.4)' }}
                >
                  📱
                </div>
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                  Aplikasi Wafa
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Gratis 6 halaman pertama</p>
              </div>

              {/* Feature chips */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: '🎵', label: 'Irama Hijaz Wafa' },
                  { icon: '🔊', label: 'Audio Makhraj' },
                  { icon: '🎮', label: 'Quiz-Game Seru' },
                  { icon: '📊', label: 'Progress Tracking' },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 rounded-xl p-2.5"
                    style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <span className="text-base flex-shrink-0">{f.icon}</span>
                    <span className="text-xs font-medium" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.wafaindonesia"
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full justify-center no-underline"
              >
                <Download className="h-4 w-4" />
                Download Gratis
              </a>
            </div>

            {/* Floating testimonial card */}
            <div
              className="absolute -bottom-6 -left-4 rounded-2xl p-4 max-w-[200px] animate-float"
              style={{
                background: 'white',
                border: '1px solid var(--line)',
                boxShadow: '0 12px 32px rgba(157,22,124,0.1)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <span key={i} style={{ color: 'var(--sun)', fontSize: '10px' }}>★</span>)}
                </div>
                <span className="text-xs font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--sun)' }}>5.0</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                "Ananda jadi lebih mudah mengaji, alhamdulillah!"
              </p>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 rounded-2xl px-4 py-2 animate-float-slow"
              style={{
                background: 'var(--emerald)',
                boxShadow: '0 8px 24px rgba(31,129,36,0.35)',
              }}
            >
              <p className="m-0 text-xs font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Tashih LPMQ ✓
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
