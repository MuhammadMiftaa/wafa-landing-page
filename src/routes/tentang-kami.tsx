import { createFileRoute } from '@tanstack/react-router'
import { Target, History, Users, Briefcase, MapPin, Heart, ArrowRight, ChevronRight } from 'lucide-react'
import { SectionHeading, Badge } from '../components/ui/index'
import { CommunityMapSection } from '../components/landing/sections'

export const Route = createFileRoute('/tentang-kami')({ component: TentangKamiPage })

const SEJARAH_TIMELINE = [
  { year: '2012', event: 'Wafa lahir — 20 Desember, Yayasan Syafa\'atul Qur\'an Indonesia (YAQIN) resmi berdiri di Surabaya.' },
  { year: '2013', event: 'Pengembangan media belajar perdana: Buku Tilawah Jilid 1–5 dan Buku Menulis Hijaiyah.' },
  { year: '2015', event: 'Ekspansi ke 10+ provinsi. Wafa Daerah mulai terbentuk untuk menjangkau mitra lokal.' },
  { year: '2018', event: 'Peluncuran Aplikasi Wafa Android. Mitra Al Amjad Medan mulai bersama Wafa.' },
  { year: '2020', event: 'Pandemi — Wafa beradaptasi dengan Akademi Tahsin Online (ATO) dan pembelajaran daring.' },
  { year: '2022', event: 'Pembaruan SK Kemenkumham AHU-0000170.AH.01.12. Izin operasional Kemenag via Majelis Ta\'lim.' },
  { year: '2023', event: 'Tanda Tashih LPMQ Kemenag RI diterima (28 Oktober 2023). 35 provinsi terjangkau.' },
  { year: '2024', event: 'Gibran Alfatih — murid mitra Wafa Al Amjad Medan meraih juara Hafiz Indonesia 2024.' },
  { year: '2026', event: 'Supervisi nasional intensif. 15.000+ guru tersertifikasi, 1200+ lembaga mitra aktif.' },
]

const DEWAN_PAKAR = [
  {
    nama: 'Dr. K.H. Mudawi Ma\'arif, LC., M.H.I.',
    peran: 'Syaikhul Quro\'',
    desc: 'Pemegang sanad Qiro\'ah \'Asyara bersambung hingga Rasulullah ﷺ. Ulama Qiro\'ah Internasional.',
    initial: 'MM',
    color: 'var(--magenta-bold)',
    bg: 'rgba(209,0,113,0.08)',
  },
  {
    nama: 'Dr. K.H. Muhammad Baihaqi, Lc., M.A.',
    peran: 'Ketua Umum IKADI Jawa Timur',
    desc: 'Pengajar Prodi Pendidikan Bahasa Arab dan Pascasarjana Fakultas Tarbiyah UINSA Surabaya.',
    initial: 'MB',
    color: 'var(--emerald)',
    bg: 'rgba(31,129,36,0.08)',
  },
  {
    nama: 'K.H. Farid Dhofir, LC., M.Si.',
    peran: 'Ulama & Pendakwah',
    desc: 'Pemangku Pondok Pesantren Refah Islami Sidayu, Gresik. Ulama terkemuka di Jawa Timur.',
    initial: 'FD',
    color: 'var(--deep)',
    bg: 'rgba(75,42,103,0.08)',
  },
]

const TRAINER = [
  { nama: 'H. Mohamad Yamin, M.Pd.', peran: 'Direktur & Lead Trainer' },
  { nama: 'Mashuda, S.Pd. Al Hafidz', peran: 'Trainer Tahfidz' },
  { nama: 'Dr. Doddy Tisna Amijaya, M.Pd.', peran: 'Trainer Metode Otak Kanan' },
  { nama: 'Wawan Fitriono, S.Pd.I.', peran: 'Trainer Tilawah' },
  { nama: 'M. Ali Kurniawan, S.H. Al Hafidz', peran: 'Trainer Tahfidz & Irama' },
  { nama: 'Adesan Putra, M.Pd.', peran: 'Trainer Metodologi' },
  { nama: 'A. Muiz Rudianto, S.Hum.', peran: 'Trainer Kurikulum' },
]

const BUDAYA_KERJA = [
  {
    kode: 'USRAH',
    title: 'Usrah Mutahammisah',
    desc: 'Keluarga yang Antusias. Kami adalah keluarga yang saling mendukung dengan semangat dan keceriaan.',
    icon: '🤝',
    color: 'var(--magenta-bold)',
    bg: 'rgba(209,0,113,0.05)',
  },
  {
    kode: 'NATIJAH',
    title: 'Natijah Mumtazah',
    desc: 'Kontribusi yang Terbaik. Setiap langkah kami diorientasikan untuk memberikan hasil terbaik bagi umat.',
    icon: '🌟',
    color: 'var(--golden)',
    bg: 'rgba(255,182,19,0.05)',
  },
  {
    kode: 'ILMIAH',
    title: 'Ilmiah Mubtakiroh',
    desc: 'Ilmiah dan Inovatif. Kami mengembangkan metode berbasis riset untuk menjawab tantangan zaman.',
    icon: '💡',
    color: 'var(--emerald)',
    bg: 'rgba(31,129,36,0.05)',
  },
  {
    kode: "KAF A'AH",
    title: "Kafa'ah Mutazayyidah",
    desc: 'Kompetensi yang Tumbuh & Berkembang. Kami berkomitmen untuk terus meningkatkan kemampuan tim.',
    icon: '📈',
    color: 'var(--deep)',
    bg: 'rgba(75,42,103,0.05)',
  },
]

function TentangKamiPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-40 -top-20 h-96 w-96 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(209,0,113,0.1), transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(31,129,36,0.1), transparent 70%)', filter: 'blur(50px)' }}
        />
        <div className="page-wrap relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge color="magenta">Tentang Kami</Badge>
              <h1
                className="mt-4 text-4xl md:text-5xl font-bold mb-5 leading-tight"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
              >
                Bersama Melahirkan{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, var(--magenta-bold), var(--emerald))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Ahli Al-Qur'an
                </span>{' '}
                Indonesia
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                Wafa hadir sejak 2012 dengan satu keyakinan: setiap anak Indonesia berhak mendapatkan pendidikan
                Al-Qur'an yang mudah, menyenangkan, dan terstandar — melalui metode yang telah terbukti di
                35 provinsi.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/6281130589310"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary no-underline"
                >
                  <ArrowRight className="h-4 w-4" />
                  Hubungi Kami
                </a>
                <a href="/mitra" className="btn-secondary no-underline">
                  Jadi Mitra Wafa
                </a>
              </div>
            </div>

            {/* Director message card */}
            <div
              className="rounded-3xl p-8"
              style={{ background: 'white', border: '1px solid var(--line)', boxShadow: '0 20px 60px rgba(157,22,124,0.08)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--magenta-bold)', fontFamily: 'var(--font-heading)' }}>
                Salam Direktur
              </p>
              <div
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-white text-xl font-bold"
                style={{ background: 'linear-gradient(135deg, var(--magenta-bold), var(--deep))', fontFamily: 'var(--font-heading)' }}
              >
                MY
              </div>
              <blockquote className="m-0 text-sm leading-relaxed italic" style={{ color: 'var(--text-secondary)' }}>
                "Semoga setiap usaha dakwah Al-Qur'an ini menjadi amal yang diridloi-Nya dan memberikan manfaat bagi seluruh
                pembaca dan umat muslim Indonesia."
              </blockquote>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--line)' }}>
                <p className="m-0 font-bold text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                  H. Mohamad Yamin, M.Pd.
                </p>
                <p className="m-0 text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>Direktur Wafa Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selayang Pandang */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, rgba(209,0,113,0.02) 0%, transparent 100%)' }}>
        <div className="page-wrap">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <SectionHeading
              kicker="Selayang Pandang"
              title="Mengapa Wafa Hadir?"
              subtitle="Pendidikan Al-Qur'an di Indonesia belum mendapat perhatian yang serius — metode monoton dan output yang ala kadarnya. Wafa hadir untuk mengubah ini semua."
            />
            <div className="space-y-4">
              {[
                { icon: '📖', title: 'Komprehensif', desc: '5T Pendidikan memastikan peserta didik tidak hanya bisa membaca, tapi juga menghafal, memahami, dan menerapkan Al-Qur\'an.' },
                { icon: '🎯', title: 'Terstandar', desc: 'Sistem 7M menjamin mutu pembelajaran yang konsisten di setiap lembaga mitra, dari Sabang sampai Merauke.' },
                { icon: '😊', title: 'Menyenangkan', desc: 'Metode Otak Kanan membuat belajar Al-Qur\'an menjadi pengalaman yang ditunggu-tunggu, bukan beban.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-5 flex items-start gap-4"
                  style={{ background: 'white', border: '1px solid var(--line)' }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="m-0 font-bold text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>{item.title}</p>
                    <p className="m-0 text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="section-padding">
        <div className="page-wrap">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div
              className="rounded-3xl p-8"
              style={{ background: 'linear-gradient(135deg, rgba(209,0,113,0.04), rgba(157,22,124,0.02))', border: '1.5px solid rgba(209,0,113,0.15)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(209,0,113,0.1)' }}
                >
                  <Target className="h-5 w-5" style={{ color: 'var(--magenta-bold)' }} />
                </div>
                <p className="m-0 font-bold text-sm uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)', color: 'var(--magenta-bold)' }}>
                  Visi
                </p>
              </div>
              <p className="text-lg font-bold leading-snug mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                Melahirkan Ahli Al-Qur'an Sebagai Pembangun Peradaban Masyarakat Qur'ani di Indonesia
              </p>
              <div className="space-y-2">
                {[
                  'Bagus bacaan Al-Qur\'an-nya',
                  'Banyak hafalan Al-Qur\'an-nya',
                  'Paham bacaan Al-Qur\'an',
                  'Akhlaqnya mencerminkan Al-Qur\'an',
                ].map((item, i) => (
                  <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="font-bold text-xs" style={{ color: 'var(--magenta-bold)', fontFamily: 'var(--font-heading)', minWidth: '16px' }}>
                      {i + 1}.
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Misi */}
            <div
              className="rounded-3xl p-8"
              style={{ background: 'linear-gradient(135deg, rgba(31,129,36,0.04), rgba(73,216,80,0.02))', border: '1.5px solid rgba(31,129,36,0.15)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(31,129,36,0.1)' }}
                >
                  <Heart className="h-5 w-5" style={{ color: 'var(--emerald)' }} />
                </div>
                <p className="m-0 font-bold text-sm uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)', color: 'var(--emerald)' }}>
                  Misi
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'Mengembangkan Model Pendidikan Al-Qur\'an 5T dengan 7M',
                  'Melaksanakan Standardisasi Mutu Lembaga Pendidikan Al-Qur\'an',
                  'Mendorong Lahirnya Komunitas Masyarakat Qurani yang Membumikan Al-Qur\'an',
                  'Menjalin Kemitraan dengan Pemerintahan untuk Mewujudkan Bangsa Indonesia yang Qur\'ani',
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span
                      className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white text-xs font-bold mt-0.5"
                      style={{ background: 'var(--emerald)', fontFamily: 'var(--font-heading)' }}
                    >
                      {i + 1}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah Timeline */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, rgba(75,42,103,0.02) 0%, transparent 100%)' }}>
        <div className="page-wrap">
          <SectionHeading
            kicker="Sejarah & Legalitas"
            title="Perjalanan Wafa Sejak 2012"
            subtitle="Dari satu keyakinan sederhana, Wafa tumbuh menjadi gerakan nasional pembelajaran Al-Qur'an yang menjangkau 35 provinsi."
            className="mb-12"
          />

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block"
              style={{ background: 'linear-gradient(to bottom, var(--magenta-bold), var(--emerald))' }}
            />

            <div className="space-y-6">
              {SEJARAH_TIMELINE.map((item, i) => (
                <div key={item.year} className="flex items-start gap-6">
                  {/* Dot */}
                  <div
                    className="hidden md:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-white text-xs font-bold relative z-10"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      background: `hsl(${310 - i * 25}, 65%, ${40 + i * 2}%)`,
                      boxShadow: `0 4px 12px hsla(${310 - i * 25}, 65%, 40%, 0.3)`,
                    }}
                  >
                    {item.year.slice(2)}
                  </div>
                  <div
                    className="flex-1 rounded-2xl p-5"
                    style={{ background: 'white', border: '1px solid var(--line)' }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--magenta-bold)' }}
                    >
                      {item.year}
                    </span>
                    <p className="m-0 mt-1 text-sm" style={{ color: 'var(--text-primary)' }}>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legalitas badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'YAQIN', no: 'AHU-0000170.AH.01.12.2022', icon: '🏛️', color: 'var(--magenta-bold)' },
              { label: 'Kemenkumham RI', no: 'Badan Hukum Resmi 2022', icon: '⚖️', color: 'var(--deep)' },
              { label: 'Kemenag RI', no: 'Majelis Ta\'lim 2022', icon: '☪️', color: 'var(--emerald)' },
              { label: 'Tashih LPMQ', no: '28 Oktober 2023', icon: '✅', color: 'var(--golden)' },
            ].map((l) => (
              <div
                key={l.label}
                className="rounded-2xl p-5 text-center transition-all card-hover"
                style={{ background: 'white', border: '1px solid var(--line)' }}
              >
                <div className="text-3xl mb-3">{l.icon}</div>
                <p className="m-0 font-bold text-sm" style={{ fontFamily: 'var(--font-heading)', color: l.color }}>{l.label}</p>
                <p className="m-0 text-xs mt-1 leading-snug" style={{ color: 'var(--text-secondary)' }}>{l.no}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dewan Pakar */}
      <section className="section-padding">
        <div className="page-wrap">
          <SectionHeading
            kicker="Dewan Pakar"
            title="Dipandu Ulama Terpercaya"
            subtitle="Wafa dibimbing oleh para ulama dan akademisi Al-Qur'an terkemuka yang memastikan seluruh materi dan metode sesuai kaidah syar'i."
            align="center"
            className="mb-10"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {DEWAN_PAKAR.map((d) => (
              <div
                key={d.nama}
                className="rounded-3xl p-7 text-center transition-all card-hover"
                style={{ background: 'white', border: '1px solid var(--line)', boxShadow: '0 8px 32px rgba(157,22,124,0.05)' }}
              >
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-white text-xl font-bold"
                  style={{ background: d.color, fontFamily: 'var(--font-heading)' }}
                >
                  {d.initial}
                </div>
                <h3 className="font-bold text-sm leading-snug mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                  {d.nama}
                </h3>
                <p className="text-xs font-medium mb-3" style={{ color: d.color, fontFamily: 'var(--font-heading)' }}>{d.peran}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, rgba(209,0,113,0.02) 0%, transparent 100%)' }}>
        <div className="page-wrap">
          <SectionHeading
            kicker="Tim Trainer"
            title="Wajah di Balik Wafa"
            subtitle="Para trainer Wafa adalah ahli Al-Qur'an berpengalaman yang mendedikasikan diri untuk menyebarkan pendidikan Qur'ani berkualitas."
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRAINER.map((t, i) => (
              <div
                key={t.nama}
                className="rounded-2xl p-5 flex items-center gap-3 transition-all card-hover"
                style={{ background: 'white', border: '1px solid var(--line)' }}
              >
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white text-sm font-bold"
                  style={{
                    background: `hsl(${310 - i * 30}, 60%, 40%)`,
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {t.nama.split(' ').slice(0, 2).map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="m-0 font-semibold text-xs" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                    {t.nama}
                  </p>
                  <p className="m-0 text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{t.peran}</p>
                </div>
              </div>
            ))}
            <div
              className="rounded-2xl p-5 flex items-center justify-center text-center transition-all card-hover"
              style={{ background: 'rgba(209,0,113,0.03)', border: '1px dashed rgba(209,0,113,0.2)' }}
            >
              <div>
                <p className="m-0 font-bold text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'var(--magenta-bold)' }}>+Ratusan</p>
                <p className="m-0 text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>Trainer di seluruh Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budaya Kerja */}
      <section className="section-padding">
        <div className="page-wrap">
          <SectionHeading
            kicker="Budaya Kerja"
            title="Nilai yang Menggerakkan Kami"
            subtitle="Empat pilar budaya kerja yang menjadi DNA setiap insan Wafa dalam melayani mitra dan mendidik generasi Qur'ani."
            align="center"
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUDAYA_KERJA.map((b) => (
              <div
                key={b.kode}
                className="rounded-3xl p-6 text-center transition-all card-hover"
                style={{ background: b.bg, border: `1.5px solid ${b.color}22` }}
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <p
                  className="m-0 text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ fontFamily: 'var(--font-heading)', color: b.color }}
                >
                  {b.kode}
                </p>
                <p className="m-0 font-bold text-sm mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                  {b.title}
                </p>
                <p className="m-0 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sebaran Map */}
      <CommunityMapSection />

      {/* Download CTA */}
      <section className="section-padding">
        <div className="page-wrap">
          <div
            className="rounded-3xl p-8 md:p-12 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(75,42,103,0.06), rgba(157,22,124,0.04))', border: '1px solid rgba(75,42,103,0.15)' }}
          >
            <p className="section-kicker mb-3">Bergabung bersama kami</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
              Jadilah Bagian dari Gerakan Wafa
            </h2>
            <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Bersama-sama kita lahirkan ahli Al-Qur'an sebagai pembangun peradaban masyarakat Qur'ani di Indonesia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/mitra"
                className="btn-primary no-underline"
              >
                <Briefcase className="h-4 w-4" />
                Daftar Mitra Wafa
              </a>
              <a
                href="https://wa.me/6281130589310"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary no-underline"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
