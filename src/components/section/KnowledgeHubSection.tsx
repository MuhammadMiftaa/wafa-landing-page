import { Clock, ArrowRight, Youtube } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { SectionHeading } from '../ui/SectionHeading'
import { ARTICLES } from '../../data/content'

const CATEGORY_COLORS: Record<string, { color: string; bg: string }> = {
  'Risalah Dakwah': { color: 'var(--magenta-bold)', bg: 'rgba(209,0,113,0.08)' },
  'Ikhtisar Wafa': { color: 'var(--emerald)', bg: 'rgba(31,129,36,0.08)' },
  'Info Terkini': { color: 'var(--golden)', bg: 'rgba(255,145,0,0.08)' },
  "Parenting Qur'ani": { color: 'var(--deep)', bg: 'rgba(75,42,103,0.08)' },
}

const CATEGORY_EMOJI: Record<string, string> = {
  'Risalah Dakwah': '🕌',
  'Ikhtisar Wafa': '📖',
  'Info Terkini': '📰',
  "Parenting Qur'ani": '👨‍👩‍👧',
}

const YOUTUBE_VIDEOS = [
  { title: 'Cara Mengajar Al-Qur\'an dengan Metode Otak Kanan', duration: '12:34', emoji: '🎬' },
  { title: 'Tips Hafalan Cepat untuk Anak dengan Irama Hijaz', duration: '8:52', emoji: '🎵' },
  { title: 'Testimoni 10 Tahun NUFI Sidoarjo bersama Wafa', duration: '15:20', emoji: '🏫' },
]

export function KnowledgeHubSection() {
  const risalah = ARTICLES.filter(a => a.category === 'Risalah Dakwah').slice(0, 3)
  const infoTerkini = ARTICLES.filter(a => a.category === 'Info Terkini').slice(0, 3)

  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, rgba(75,42,103,0.03) 0%, transparent 100%)' }}
    >
      <div className="page-wrap">
        <SectionHeading
          kicker="Risalah & Inspirasi"
          title="Belajar, Berbagi, Berkembang"
          subtitle="Artikel terbaru, berita kegiatan, dan video inspiratif dari perjalanan Wafa Indonesia dalam membumikan Al-Qur'an."
          className="mb-10"
        />

        {/* Risalah Dakwah */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-base" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
              📖 Risalah Dakwah
            </h3>
            <Link to="/blog" className="flex items-center gap-1 text-xs font-semibold no-underline hover:text-[var(--magenta-bold)] transition-colors" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
              Lihat Semua <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 scroll-x sm:overflow-visible flex-nowrap">
            {risalah.map(article => {
              const cat = CATEGORY_COLORS[article.category] ?? CATEGORY_COLORS['Risalah Dakwah']
              return (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}` as '/'}
                  className="block no-underline group flex-shrink-0 sm:flex-shrink"
                  style={{ minWidth: '260px' }}
                >
                  <div className="rounded-3xl overflow-hidden transition-all card-hover h-full" style={{ background: 'white', border: '1px solid var(--line)' }}>
                    <div
                      className="flex items-center justify-center text-4xl"
                      style={{ height: '120px', background: cat.bg }}
                    >
                      {CATEGORY_EMOJI[article.category] ?? '📄'}
                    </div>
                    <div className="p-5">
                      <span className="inline-block text-[10px] font-bold rounded-full px-2.5 py-0.5 mb-2" style={{ background: cat.bg, color: cat.color, fontFamily: 'var(--font-heading)' }}>
                        {article.category}
                      </span>
                      <h4 className="font-bold text-sm leading-snug mb-2 group-hover:text-[var(--magenta-bold)] transition-colors" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime} mnt</span>
                        <span>{article.date.split(' ').slice(-2).join(' ')}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Info Terkini */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-base" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
              📰 Info Terkini
            </h3>
            <Link to="/blog" className="flex items-center gap-1 text-xs font-semibold no-underline transition-colors hover:text-[var(--magenta-bold)]" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
              Lihat Semua <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {infoTerkini.map(article => {
              const cat = CATEGORY_COLORS[article.category] ?? CATEGORY_COLORS['Info Terkini']
              return (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}` as '/'}
                  className="flex items-start gap-4 rounded-2xl p-4 no-underline group transition-all card-hover"
                  style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl"
                    style={{ background: cat.bg }}
                  >
                    {CATEGORY_EMOJI[article.category] ?? '📄'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm leading-snug mb-1 group-hover:text-[var(--magenta-bold)] transition-colors" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                      {article.title}
                    </h4>
                    <p className="text-xs line-clamp-1 mb-1" style={{ color: 'var(--text-secondary)' }}>{article.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime} mnt</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--magenta-bold)' }} />
                </Link>
              )
            })}
          </div>
        </div>

        {/* YouTube Preview */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-base flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
              <Youtube className="h-5 w-5" style={{ color: '#FF0000' }} />
              YouTube Wafa Indonesia
            </h3>
            <a
              href="https://youtube.com/wafaindonesia"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs font-semibold no-underline"
              style={{ color: '#FF0000', fontFamily: 'var(--font-heading)' }}
            >
              Subscribe <ArrowRight className="h-3 w-3" />
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {YOUTUBE_VIDEOS.map(video => (
              <div
                key={video.title}
                className="rounded-2xl overflow-hidden transition-all card-hover cursor-pointer"
                style={{ background: 'white', border: '1px solid var(--line)' }}
              >
                <div
                  className="relative flex items-center justify-center"
                  style={{ height: '120px', background: 'linear-gradient(135deg, rgba(255,0,0,0.08), rgba(255,0,0,0.04))' }}
                >
                  <div className="text-4xl">{video.emoji}</div>
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                    style={{ background: 'rgba(0,0,0,0.4)' }}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                      style={{ background: '#FF0000' }}
                    >
                      ▶
                    </div>
                  </div>
                  <span
                    className="absolute bottom-2 right-2 text-[10px] font-bold rounded px-1.5 py-0.5 text-white"
                    style={{ background: 'rgba(0,0,0,0.7)', fontFamily: 'var(--font-heading)' }}
                  >
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-xs leading-snug" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <a
              href="https://youtube.com/wafaindonesia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white no-underline transition-all hover:scale-105"
              style={{ background: '#FF0000', fontFamily: 'var(--font-heading)', boxShadow: '0 4px 16px rgba(255,0,0,0.3)' }}
            >
              <Youtube className="h-4 w-4" />
              Subscribe YouTube Wafa Indonesia
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
