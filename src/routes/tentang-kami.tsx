import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  Briefcase,
  Heart,
  ArrowRight,
} from "lucide-react";
import { SectionHeading, Badge } from "../components/ui/index.ts";
import { CommunityMapSection } from "../components/section/CommunityMapSection.tsx";

export const Route = createFileRoute("/tentang-kami")({
  component: TentangKamiPage,
});

const SEJARAH_TIMELINE = [
  {
    year: "2012",
    event:
      "Wafa lahir — 20 Desember, Yayasan Syafa'atul Qur'an Indonesia (YAQIN) resmi berdiri di Surabaya.",
  },
  {
    year: "2013",
    event:
      "Pengembangan media belajar perdana: Buku Tilawah Jilid 1–5 dan Buku Menulis Hijaiyah.",
  },
  {
    year: "2015",
    event:
      "Ekspansi ke 10+ provinsi. Wafa Daerah mulai terbentuk untuk menjangkau mitra lokal.",
  },
  {
    year: "2018",
    event:
      "Peluncuran Aplikasi Wafa Android. Mitra Al Amjad Medan mulai bersama Wafa.",
  },
  {
    year: "2020",
    event:
      "Pandemi — Wafa beradaptasi dengan Akademi Tahsin Online (ATO) dan pembelajaran daring.",
  },
  {
    year: "2022",
    event:
      "Pembaruan SK Kemenkumham AHU-0000170.AH.01.12. Izin operasional Kemenag via Majelis Ta'lim.",
  },
  {
    year: "2023",
    event:
      "Tanda Tashih LPMQ Kemenag RI diterima (28 Oktober 2023). 35 provinsi terjangkau.",
  },
  {
    year: "2024",
    event:
      "Gibran Alfatih — murid mitra Wafa Al Amjad Medan meraih juara Hafiz Indonesia 2024.",
  },
  {
    year: "2026",
    event:
      "Supervisi nasional intensif. 15.000+ guru tersertifikasi, 1200+ lembaga mitra aktif.",
  },
];

const DEWAN_PAKAR = [
  {
    nama: "Dr. K.H. Mudawi Ma'arif, LC., M.H.I.",
    peran: "Syaikhul Quro'",
    desc: "Pemegang sanad Qiro'ah 'Asyara bersambung hingga Rasulullah ﷺ. Ulama Qiro'ah Internasional.",
    initial: "MM",
    color: "var(--color-magenta-bold)",
  },
  {
    nama: "Dr. K.H. Muhammad Baihaqi, Lc., M.A.",
    peran: "Ketua Umum IKADI Jawa Timur",
    desc: "Pengajar Prodi Pendidikan Bahasa Arab dan Pascasarjana Fakultas Tarbiyah UINSA Surabaya.",
    initial: "MB",
    color: "var(--color-emerald)",
  },
  {
    nama: "K.H. Farid Dhofir, LC., M.Si.",
    peran: "Ulama & Pendakwah",
    desc: "Pemangku Pondok Pesantren Refah Islami Sidayu, Gresik. Ulama terkemuka di Jawa Timur.",
    initial: "FD",
    color: "var(--color-deep)",
  },
];

const TRAINER = [
  { nama: "H. Mohamad Yamin, M.Pd.", peran: "Direktur & Lead Trainer" },
  { nama: "Mashuda, S.Pd. Al Hafidz", peran: "Trainer Tahfidz" },
  {
    nama: "Dr. Doddy Tisna Amijaya, M.Pd.",
    peran: "Trainer Metode Otak Kanan",
  },
  { nama: "Wawan Fitriono, S.Pd.I.", peran: "Trainer Tilawah" },
  {
    nama: "M. Ali Kurniawan, S.H. Al Hafidz",
    peran: "Trainer Tahfidz & Irama",
  },
  { nama: "Adesan Putra, M.Pd.", peran: "Trainer Metodologi" },
  { nama: "A. Muiz Rudianto, S.Hum.", peran: "Trainer Kurikulum" },
];

const BUDAYA_KERJA = [
  {
    kode: "USRAH",
    title: "Usrah Mutahammisah",
    desc: "Keluarga yang Antusias. Kami adalah keluarga yang saling mendukung dengan semangat dan keceriaan.",
    icon: "🤝",
    color: "var(--color-magenta-bold)",
  },
  {
    kode: "NATIJAH",
    title: "Natijah Mumtazah",
    desc: "Kontribusi yang Terbaik. Setiap langkah kami diorientasikan untuk memberikan hasil terbaik bagi umat.",
    icon: "🌟",
    color: "var(--color-golden)",
  },
  {
    kode: "ILMIAH",
    title: "Ilmiah Mubtakiroh",
    desc: "Ilmiah dan Inovatif. Kami mengembangkan metode berbasis riset untuk menjawab tantangan zaman.",
    icon: "💡",
    color: "var(--color-emerald)",
  },
  {
    kode: "KAF A'AH",
    title: "Kafa'ah Mutazayyidah",
    desc: "Kompetensi yang Tumbuh & Berkembang. Kami berkomitmen untuk terus meningkatkan kemampuan tim.",
    icon: "📈",
    color: "var(--color-deep)",
  },
];

function TentangKamiPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="blob-magenta absolute -left-40 -top-20 h-96 w-96 opacity-40" />
        <div className="blob-emerald absolute right-0 top-20 h-72 w-72 opacity-30" />
        <div className="page-wrap relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge color="magenta">Tentang Kami</Badge>
              <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
                Bersama Melahirkan{" "}
                <span className="gradient-text">Ahli Al-Qur'an</span>{" "}
                Indonesia
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-text-secondary mb-8">
                Wafa hadir sejak 2012 dengan satu keyakinan: setiap anak
                Indonesia berhak mendapatkan pendidikan Al-Qur'an yang mudah,
                menyenangkan, dan terstandar — melalui metode yang telah
                terbukti di 35 provinsi.
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
            <div className="surface-card-elevated rounded-3xl p-8">
              <p className="m-0 font-heading text-xs font-semibold uppercase tracking-widest text-magenta-bold mb-4">
                Salam Direktur
              </p>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-white text-xl font-bold font-heading bg-gradient-to-br from-magenta-bold to-deep">
                MY
              </div>
              <blockquote className="m-0 text-sm leading-relaxed italic text-text-secondary">
                "Semoga setiap usaha dakwah Al-Qur'an ini menjadi amal yang
                diridloi-Nya dan memberikan manfaat bagi seluruh pembaca dan
                umat muslim Indonesia."
              </blockquote>
              <div className="mt-4 pt-4 border-t border-line">
                <p className="m-0 font-heading text-sm font-bold text-text-primary">
                  H. Mohamad Yamin, M.Pd.
                </p>
                <p className="m-0 text-xs mt-0.5 text-text-secondary">
                  Direktur Wafa Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selayang Pandang */}
      <section className="section-padding bg-section-magenta-fade">
        <div className="page-wrap">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <SectionHeading
              kicker="Selayang Pandang"
              title="Mengapa Wafa Hadir?"
              subtitle="Pendidikan Al-Qur'an di Indonesia belum mendapat perhatian yang serius — metode monoton dan output yang ala kadarnya. Wafa hadir untuk mengubah ini semua."
            />
            <div className="space-y-4">
              {[
                {
                  icon: "📖",
                  title: "Komprehensif",
                  desc: "5T Pendidikan memastikan peserta didik tidak hanya bisa membaca, tapi juga menghafal, memahami, dan menerapkan Al-Qur'an.",
                },
                {
                  icon: "🎯",
                  title: "Terstandar",
                  desc: "Sistem 7M menjamin mutu pembelajaran yang konsisten di setiap lembaga mitra, dari Sabang sampai Merauke.",
                },
                {
                  icon: "😊",
                  title: "Menyenangkan",
                  desc: "Metode Otak Kanan membuat belajar Al-Qur'an menjadi pengalaman yang ditunggu-tunggu, bukan beban.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="surface-card rounded-2xl p-5 flex items-start gap-4"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="m-0 font-heading text-sm font-bold text-text-primary">
                      {item.title}
                    </p>
                    <p className="m-0 text-sm mt-1 text-text-secondary">
                      {item.desc}
                    </p>
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
            <div className="rounded-3xl border-[1.5px] border-[rgba(209,0,113,0.15)] bg-gradient-to-br from-[rgba(209,0,113,0.04)] to-[rgba(157,22,124,0.02)] p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(209,0,113,0.1)]">
                  <Target className="h-5 w-5 text-magenta-bold" />
                </div>
                <p className="m-0 font-heading text-sm font-bold uppercase tracking-widest text-magenta-bold">
                  Visi
                </p>
              </div>
              <p className="font-heading text-lg font-bold leading-snug text-text-primary mb-4">
                Melahirkan Ahli Al-Qur'an Sebagai Pembangun Peradaban Masyarakat
                Qur'ani di Indonesia
              </p>
              <div className="space-y-2">
                {[
                  "Bagus bacaan Al-Qur'an-nya",
                  "Banyak hafalan Al-Qur'an-nya",
                  "Paham bacaan Al-Qur'an",
                  "Akhlaqnya mencerminkan Al-Qur'an",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <span className="font-heading text-xs font-bold text-magenta-bold min-w-4">
                      {i + 1}.
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Misi */}
            <div className="rounded-3xl border-[1.5px] border-[rgba(31,129,36,0.15)] bg-gradient-to-br from-[rgba(31,129,36,0.04)] to-[rgba(73,216,80,0.02)] p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(31,129,36,0.1)]">
                  <Heart className="h-5 w-5 text-emerald" />
                </div>
                <p className="m-0 font-heading text-sm font-bold uppercase tracking-widest text-emerald">
                  Misi
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Mengembangkan Model Pendidikan Al-Qur'an 5T dengan 7M",
                  "Melaksanakan Standardisasi Mutu Lembaga Pendidikan Al-Qur'an",
                  "Mendorong Lahirnya Komunitas Masyarakat Qurani yang Membumikan Al-Qur'an",
                  "Menjalin Kemitraan dengan Pemerintahan untuk Mewujudkan Bangsa Indonesia yang Qur'ani",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full font-heading text-xs font-bold text-white bg-emerald mt-0.5">
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
      <section className="section-padding bg-section-deep-fade">
        <div className="page-wrap">
          <SectionHeading
            kicker="Sejarah & Legalitas"
            title="Perjalanan Wafa Sejak 2012"
            subtitle="Dari satu keyakinan sederhana, Wafa tumbuh menjadi gerakan nasional pembelajaran Al-Qur'an yang menjangkau 35 provinsi."
            className="mb-12"
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block bg-gradient-to-b from-magenta-bold to-emerald" />

            <div className="space-y-6">
              {SEJARAH_TIMELINE.map((item, i) => (
                <div key={item.year} className="flex items-start gap-6">
                  {/* Dot */}
                  <div
                    className="hidden md:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-heading text-white text-xs font-bold relative z-10"
                    style={{
                      background: `hsl(${310 - i * 25}, 65%, ${40 + i * 2}%)`,
                      boxShadow: `0 4px 12px hsla(${310 - i * 25}, 65%, 40%, 0.3)`,
                    }}
                  >
                    {item.year.slice(2)}
                  </div>
                  <div className="flex-1 surface-card rounded-2xl p-5">
                    <span className="font-heading text-xs font-bold text-magenta-bold">
                      {item.year}
                    </span>
                    <p className="m-0 mt-1 text-sm text-text-primary">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legalitas badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "YAQIN",
                no: "AHU-0000170.AH.01.12.2022",
                icon: "🏛️",
                color: "var(--color-magenta-bold)",
              },
              {
                label: "Kemenkumham RI",
                no: "Badan Hukum Resmi 2022",
                icon: "⚖️",
                color: "var(--color-deep)",
              },
              {
                label: "Kemenag RI",
                no: "Majelis Ta'lim 2022",
                icon: "☪️",
                color: "var(--color-emerald)",
              },
              {
                label: "Tashih LPMQ",
                no: "28 Oktober 2023",
                icon: "✅",
                color: "var(--color-golden)",
              },
            ].map((l) => (
              <div
                key={l.label}
                className="surface-card rounded-2xl p-5 text-center card-hover"
              >
                <div className="text-3xl mb-3">{l.icon}</div>
                <p
                  className="m-0 font-heading text-sm font-bold"
                  style={{ color: l.color }}
                >
                  {l.label}
                </p>
                <p className="m-0 text-xs mt-1 leading-snug text-text-secondary">
                  {l.no}
                </p>
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
                className="surface-card rounded-3xl p-7 text-center card-hover"
              >
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl font-heading text-white text-xl font-bold"
                  style={{ background: d.color }}
                >
                  {d.initial}
                </div>
                <h3 className="font-heading text-sm font-bold leading-snug text-text-primary mb-1">
                  {d.nama}
                </h3>
                <p
                  className="font-heading text-xs font-medium mb-3"
                  style={{ color: d.color }}
                >
                  {d.peran}
                </p>
                <p className="text-xs leading-relaxed text-text-secondary">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer */}
      <section className="section-padding bg-section-magenta-fade">
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
                className="surface-card rounded-2xl p-5 flex items-center gap-3 card-hover"
              >
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl font-heading text-white text-sm font-bold"
                  style={{
                    background: `hsl(${310 - i * 30}, 60%, 40%)`,
                  }}
                >
                  {t.nama
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="m-0 font-heading text-xs font-semibold text-text-primary">
                    {t.nama}
                  </p>
                  <p className="m-0 text-xs mt-0.5 text-text-secondary">
                    {t.peran}
                  </p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl p-5 flex items-center justify-center text-center card-hover bg-[rgba(209,0,113,0.03)] border border-dashed border-[rgba(209,0,113,0.2)]">
              <div>
                <p className="m-0 font-heading text-sm font-bold text-magenta-bold">
                  +Ratusan
                </p>
                <p className="m-0 text-xs mt-0.5 text-text-secondary">
                  Trainer di seluruh Indonesia
                </p>
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
                className="rounded-3xl p-6 text-center card-hover"
                style={{
                  background: `${b.color}0d`,
                  border: `1.5px solid ${b.color}22`,
                }}
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <p
                  className="m-0 font-heading text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: b.color }}
                >
                  {b.kode}
                </p>
                <p className="m-0 font-heading text-sm font-bold text-text-primary mb-2">
                  {b.title}
                </p>
                <p className="m-0 text-xs leading-relaxed text-text-secondary">
                  {b.desc}
                </p>
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
          <div className="rounded-3xl border border-[rgba(75,42,103,0.15)] bg-gradient-to-br from-[rgba(75,42,103,0.06)] to-[rgba(157,22,124,0.04)] p-8 md:p-12 text-center">
            <p className="section-kicker mb-3">Bergabung bersama kami</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-3">
              Jadilah Bagian dari Gerakan Wafa
            </h2>
            <p className="text-sm text-text-secondary mb-8 max-w-lg mx-auto">
              Bersama-sama kita lahirkan ahli Al-Qur'an sebagai pembangun
              peradaban masyarakat Qur'ani di Indonesia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/mitra" className="btn-primary no-underline">
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
  );
}
