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
          <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-section-magenta-emerald">
            <div className="text-7xl">🤔</div>
          </div>

          {/* 404 */}
          <p className="font-heading text-8xl font-bold mb-2 gradient-text-magenta">
            404
          </p>

          <h1 className="font-heading text-2xl font-bold text-text-primary mb-3">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-base leading-relaxed text-text-secondary mb-10">
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
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-text-secondary mb-5">
              Mungkin Anda mencari
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href as '/'}
                  className="flex items-center gap-3 surface-card rounded-2xl p-4 no-underline card-hover text-left"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl icon-badge-magenta">
                    {link.icon}
                  </div>
                  <div>
                    <p className="m-0 font-heading text-sm font-semibold text-text-primary">
                      {link.label}
                    </p>
                    <p className="m-0 text-xs mt-0.5 text-text-secondary">{link.desc}</p>
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
