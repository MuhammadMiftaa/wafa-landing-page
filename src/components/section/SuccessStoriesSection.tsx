import { Play, TrendingUp, ArrowRight, Quote } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { useScrollReveal, revealStyle } from '../ui/useScrollReveal'

const STORIES = [
  {
    type: 'video',
    title: 'Prof. Dr. H. M. Roem Rowi, M.A.',
    subtitle: 'Da\'i & Ahli Tafsir Al-Qur\'an',
    quote: 'Lembaga Wafa sesuai artinya "setia", setia dengan Al-Qur\'an.',
    emoji: '🎥',
    bg: 'linear-gradient(135deg, rgba(75,42,103,0.08), rgba(209,0,113,0.05))',
    border: 'rgba(75,42,103,0.2)',
    color: 'var(--deep)',
    span: 'lg:col-span-1 lg:row-span-2',
  },
  {
    type: 'achievement',
    title: 'Gibran Alfatih Panjaitan',
    subtitle: 'Juara 1 Hafiz Indonesia 2024',
    quote: 'Murid Al Amjad Medan — mitra Wafa sejak 2018 — memukau juri dengan irama Hijaz.',
    emoji: '🥇',
    bg: 'linear-gradient(135deg, rgba(255,145,0,0.08), rgba(255,182,19,0.05))',
    border: 'rgba(255,145,0,0.2)',
    color: 'var(--golden)',
    span: 'lg:col-span-1',
  },
  {
    type: 'stat',
    title: 'Kenaikan Minat Mengaji',
    subtitle: 'Data internal mitra Wafa 2024',
    quote: '500% kenaikan minat mengaji di lembaga yang menerapkan metode Otak Kanan Wafa.',
    emoji: '📈',
    bg: 'linear-gradient(135deg, rgba(31,129,36,0.08), rgba(73,216,80,0.05))',
    border: 'rgba(31,129,36,0.2)',
    color: 'var(--emerald)',
    span: 'lg:col-span-1',
  },
  {
    type: 'event',
    title: '10 Tahun NUFI Sidoarjo',
    subtitle: 'Up-Grading Kompetensi 2025',
    quote: '500+ siswa tahfidz, guru mandiri menyelenggarakan upgrading kompetensi setelah 10 tahun bermitra.',
    emoji: '🏫',
    bg: 'linear-gradient(135deg, rgba(209,0,113,0.06), rgba(157,22,124,0.03))',
    border: 'rgba(209,0,113,0.15)',
    color: 'var(--magenta-bold)',
    span: 'lg:col-span-2',
  },
  {
    type: 'quote',
    title: 'Hj. Nurfitriana Busyro Karim',
    subtitle: 'Ibu Bupati Sumenep',
    quote: 'Kami sangat senang dengan Metode Wafa. Caranya sangat menyenangkan & sangat mudah dimengerti.',
    emoji: '💬',
    bg: 'linear-gradient(135deg, rgba(255,123,0,0.07), rgba(255,145,0,0.04))',
    border: 'rgba(255,123,0,0.15)',
    color: 'var(--tangerine)',
    span: 'lg:col-span-1',
  },
  {
    type: 'event',
    title: 'Supervisi Bojonegoro 2026',
    subtitle: 'Menjaga Standar Keunggulan',
    quote: 'Supervisi berkala memastikan mutu pembelajaran tetap konsisten — 12 guru, 1 sesi intensif.',
    emoji: '✅',
    bg: 'linear-gradient(135deg, rgba(75,42,103,0.06), rgba(31,129,36,0.04))',
    border: 'rgba(75,42,103,0.12)',
    color: 'var(--deep)',
    span: 'lg:col-span-1',
  },
]

function StoryCard({ story }: { story: typeof STORIES[0] }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`${story.span} rounded-3xl p-7 transition-all card-hover relative overflow-hidden`}
      style={{
        background: story.bg,
        border: `1.5px solid ${story.border}`,
        ...revealStyle(visible),
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{story.emoji}</div>
        {story.type === 'video' && (
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-white cursor-pointer transition-all hover:scale-110"
            style={{ background: 'var(--magenta-bold)', boxShadow: '0 4px 16px rgba(209,0,113,0.35)' }}
          >
            <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
          </div>
        )}
        {story.type === 'stat' && (
          <TrendingUp className="h-5 w-5" style={{ color: story.color }} />
        )}
        {story.type === 'quote' && (
          <Quote className="h-5 w-5" style={{ color: story.color }} />
        )}
      </div>

      <h3
        className="font-bold text-sm leading-snug mb-1"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
      >
        {story.title}
      </h3>
      <p
        className="text-xs font-semibold mb-3"
        style={{ color: story.color, fontFamily: 'var(--font-heading)' }}
      >
        {story.subtitle}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        "{story.quote}"
      </p>
    </div>
  )
}

export function SuccessStoriesSection() {
  const { ref, visible } = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="section-padding">
      <div className="page-wrap">
        <div ref={ref} style={revealStyle(visible)}>
          <SectionHeading
            kicker="Bukti Nyata"
            title="Ribuan Kisah, Satu Tujuan"
            subtitle="Dari anak TK yang mulai mengeja huruf hijaiyah hingga hafidz juara nasional — setiap kisah adalah bukti nyata metode Wafa yang terbukti efektif."
            className="mb-10"
          />
        </div>

        {/* Masonry-style grid */}
        <div className="grid lg:grid-cols-3 gap-5 auto-rows-auto">
          {STORIES.map((story, i) => (
            <StoryCard key={i} story={story} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="/blog" className="btn-ghost no-underline">
            Lihat Semua Cerita di Blog
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
