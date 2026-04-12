/**
 * SEO utilities: per-page meta generators and JSON-LD schemas
 * Usage: in each route's `head()` function, spread the output of these helpers.
 */

// ─── Base meta ───────────────────────────────────────────────────────────────

const SITE_URL = 'https://wafaindonesia.or.id'
const SITE_NAME = 'Wafa Indonesia'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

export interface PageMeta {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  article?: {
    publishedTime: string
    modifiedTime?: string
    author: string
    section: string
  }
}

export function buildMeta(page: PageMeta) {
  const url = `${SITE_URL}${page.path ?? '/'}`
  const image = page.image ?? DEFAULT_IMAGE

  return [
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { title: `${page.title} — ${SITE_NAME}` },
    { name: 'description', content: page.description },
    // OG
    { property: 'og:type', content: page.type ?? 'website' },
    { property: 'og:url', content: url },
    { property: 'og:title', content: `${page.title} — ${SITE_NAME}` },
    { property: 'og:description', content: page.description },
    { property: 'og:image', content: image },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: 'id_ID' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${page.title} — ${SITE_NAME}` },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: image },
    // Canonical
    { name: 'robots', content: 'index, follow' },
    // Theme color
    { name: 'theme-color', content: '#d10071' },
    // Article-specific
    ...(page.article
      ? [
          { property: 'article:published_time', content: page.article.publishedTime },
          ...(page.article.modifiedTime ? [{ property: 'article:modified_time', content: page.article.modifiedTime }] : []),
          { property: 'article:author', content: page.article.author },
          { property: 'article:section', content: page.article.section },
        ]
      : []),
  ]
}

export function buildLinks(path?: string) {
  const url = `${SITE_URL}${path ?? '/'}`
  return [
    { rel: 'canonical', href: url },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Tajawal:wght@400;700&display=swap',
    },
  ]
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

/** Organization / EducationalOrganization schema for the root layout */
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Wafa Indonesia',
  alternateName: 'YAQIN — Yayasan Syafa\'atul Qur\'an Indonesia',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Sistem pembelajaran Al-Qur\'an komprehensif dengan metode Otak Kanan dan Irama Hijaz. Sejak 2012, telah melahirkan 15.000+ guru tersertifikasi di 35 provinsi Indonesia.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Raya Wisma Pagesangan No.9',
    addressLocality: 'Surabaya',
    addressRegion: 'Jawa Timur',
    postalCode: '60234',
    addressCountry: 'ID',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+62-31-9904-3404',
      contactType: 'customer service',
      availableLanguage: 'Indonesian',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+62-811-3058-9310',
      contactType: 'sales',
      availableLanguage: 'Indonesian',
    },
  ],
  sameAs: [
    'https://instagram.com/wafaindonesia',
    'https://facebook.com/wafaindonesia',
    'https://youtube.com/wafaindonesia',
    'https://tiktok.com/@wafaindonesia',
  ],
  foundingDate: '2012-12-20',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 },
}

/** Course schema for the 5T method */
export const METHOD_COURSE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Pendidikan Al-Qur\'an Metode Wafa (5T)',
  description:
    'Kurikulum komprehensif 5T: Tilawah, Tahfidz, Tarjamah, Tafhim, dan Tafsir dengan sistem manajemen mutu 7M.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Wafa Indonesia',
    url: SITE_URL,
  },
  educationalLevel: 'Semua usia (TK hingga dewasa)',
  inLanguage: 'id',
  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H/week',
      name: 'Akademi Tahsin Online (ATO)',
    },
    {
      '@type': 'CourseInstance',
      courseMode: 'blended',
      name: 'SAGAQU — Sekolah Guru Ahli Al-Qur\'an',
    },
  ],
}

/** FAQPage schema */
export function buildFaqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/** BreadcrumbList schema */
export function buildBreadcrumbSchema(
  crumbs: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

/** Article schema for blog posts */
export function buildArticleSchema(article: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
  authorName: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.authorName,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Wafa Indonesia',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  }
}

/** Product schema */
export function buildProductSchema(product: {
  name: string
  description: string
  price: number
  sku: string
  url: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    sku: product.sku,
    url: `${SITE_URL}${product.url}`,
    image: product.image ?? DEFAULT_IMAGE,
    brand: {
      '@type': 'Brand',
      name: 'Wafa Indonesia',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Wafa Indonesia',
      },
    },
  }
}

/** Helper to inject JSON-LD into the page head */
export function jsonLdScript(schema: object): string {
  return JSON.stringify(schema)
}
