import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Wafa Indonesia — Belajar Al-Qur\'an Metode Otak Kanan',
      },
      {
        name: 'description',
        content:
          'Metode Wafa — Cara mudah, cepat, dan menyenangkan belajar Al-Qur\'an. 15.000+ guru tersertifikasi, 1200+ lembaga di 35 provinsi Indonesia.',
      },
      {
        property: 'og:title',
        content: 'Wafa Indonesia — Belajar Al-Qur\'an Metode Otak Kanan',
      },
      {
        property: 'og:description',
        content:
          'Metode Wafa — Cara mudah, cepat, dan menyenangkan belajar Al-Qur\'an. 15.000+ guru tersertifikasi, 1200+ lembaga di 35 provinsi Indonesia.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://wafaindonesia.or.id',
      },
      {
        name: 'theme-color',
        content: '#d10071',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Tajawal:wght@400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: appCss,
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
        {children}
        <Footer />
        {import.meta.env.DEV && <DevTools />}
        <Scripts />
      </body>
    </html>
  )
}

// Lazy-load devtools only in dev
function DevTools() {
  if (typeof window === 'undefined') return null
  // Devtools are loaded separately to avoid production bundle bloat
  return null
}