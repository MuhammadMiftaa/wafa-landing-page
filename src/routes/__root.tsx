import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import { Home, ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ORGANIZATION_SCHEMA, jsonLdScript } from '../data/seo'

import appCss from '../styles.css?url'

function NotFound() {
  return (
    <main style={{ paddingBlock: '5rem' }}>
      <div className="page-wrap">
        <div className="max-w-lg mx-auto text-center">
          <div
            className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full"
            style={{ background: 'linear-gradient(135deg, rgba(209,0,113,0.08), rgba(31,129,36,0.06))' }}
          >
            <span style={{ fontSize: '4rem' }}>🤔</span>
          </div>
          <p
            className="text-7xl font-bold mb-2"
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
          <p className="mb-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
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
              Kembali
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Wafa Indonesia — Belajar Al-Qur\'an Metode Otak Kanan',
      },
      {
        name: 'description',
        content:
          'Metode Wafa — Cara mudah, cepat, dan menyenangkan belajar Al-Qur\'an. 15.000+ guru tersertifikasi, 1200+ lembaga di 35 provinsi Indonesia.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://wafaindonesia.or.id' },
      { property: 'og:title', content: 'Wafa Indonesia — Belajar Al-Qur\'an Metode Otak Kanan' },
      {
        property: 'og:description',
        content: 'Metode Wafa — Cara mudah, cepat, dan menyenangkan belajar Al-Qur\'an. 15.000+ guru tersertifikasi, 1200+ lembaga di 35 provinsi Indonesia.',
      },
      { property: 'og:image', content: 'https://wafaindonesia.or.id/og-image.jpg' },
      { property: 'og:site_name', content: 'Wafa Indonesia' },
      { property: 'og:locale', content: 'id_ID' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#d10071' },
    ],
    links: [
      { rel: 'canonical', href: 'https://wafaindonesia.or.id' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Tajawal:wght@400;700&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
    ],
    scripts: [
      // Organization JSON-LD
      {
        type: 'application/ld+json',
        children: jsonLdScript(ORGANIZATION_SCHEMA),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere]">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        {import.meta.env.DEV && <DevTools />}
        <Scripts />
      </body>
    </html>
  )
}

// Skip link for a11y
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white no-underline"
      style={{ background: 'var(--magenta-bold)' }}
    >
      Lewati ke konten utama
    </a>
  )
}

function DevTools() {
  if (typeof window === 'undefined') return null
  return null
}
