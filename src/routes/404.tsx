import { createFileRoute, Link } from '@tanstack/react-router'
import { Home, ArrowLeft, Smartphone, BookOpen, MessageCircle, FileText } from 'lucide-react'

export const Route = createFileRoute('/404')({ component: NotFoundPage })

const QUICK_LINKS = [
  { label: 'Metode Wafa', href: '/metode', icon: <BookOpen className="h-4 w-4" />, desc: '5T & 7M Sistem Mutu' },
  { label: 'Aplikasi Wafa', href: '/produk#aplikasi', icon: <Smartphone className="h-4 w-4" />, desc: 'Download gratis di Play Store' },
  { label: 'Program Kemitraan', href: '/mitra', icon: <FileText className="h-4 w-4" />, desc: 'Jadikan lembaga Anda mitra' },
  { label: 'Kontak Kami', href: '/kontak', icon: <MessageCircle className="h-4 w-4" />, desc: 'Respon dalam 24 jam' },
]

export function NotFoundPage() {
  return (
    <main className="section-padding">
      <div className="page-wrap">
        <div className="max-w-2xl mx-auto text-center">
          {/* Illustration */}
          <div
            className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full"
            style={{ background: 'linear-gradient(135deg, rgba(209,0,113,0.08), rgba(31,129,36,0.06))' }}
          >
            <div className="text-7xl">🤔</div>
          </div>

          {/* 404 */}
          <p
            className="text-8xl font-bold mb-2"
            style={{
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, var(--magenta-bold), var(--magenta-deep))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </p>

          <h1 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
            Halaman yang Anda cari tidak ada atau telah dipindahkan. Jangan khawatir — kami siap membantu
            Anda menemukan apa yang Anda butuhkan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link to="/" className="btn-primary no-underline">
              <Home className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="btn-ghost"
            >
              <ArrowLeft className="h-4 w-4" />
              Halaman Sebelumnya
            </button>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
              Mungkin Anda mencari
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href as '/'}
                  className="flex items-center gap-3 rounded-2xl p-4 no-underline transition-all card-hover text-left"
                  style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: 'rgba(209,0,113,0.08)', color: 'var(--magenta-bold)' }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p className="m-0 font-semibold text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                      {link.label}
                    </p>
                    <p className="m-0 text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
