import { Smartphone, Book, Award, Globe, Check, Download } from "lucide-react";
import { TabGroup } from "../ui/TabGroup";
import { SectionHeading } from "../ui/SectionHeading";
import { TestimonialCarousel } from "../ui/TestimonialCarousel";
import { TESTIMONIALS } from "../../data/content.ts";

const APP_FEATURES = [
  "Audio Makhraj Interaktif",
  "Lagu Hijaz Tanpa Iklan",
  "Quiz-Game Seru",
  "Progress Tracking",
  "Gratis 6 Halaman Pertama",
  "Tersedia di Google Play",
];

const SAGAQU_PROGRAMS = [
  {
    name: "Akademi Tahsin Online (ATO)",
    icon: "📖",
    desc: "Kursus online dari nol hingga mahir membaca Al-Qur'an",
  },
  {
    name: "Akademi Tahfidz (ATA)",
    icon: "🧠",
    desc: "Program hafalan terstruktur 5-30 Juz",
  },
  {
    name: "Akademi Irama Wafa (AIWA)",
    icon: "🎵",
    desc: "Pelajari irama Hijaz 3 nada secara mendalam",
  },
  {
    name: "SAGAQU Metodologi",
    icon: "🎓",
    desc: "Sertifikasi guru Al-Qur'an profesional",
  },
];

const TABS = [
  {
    id: "aplikasi",
    label: "Aplikasi Wafa",
    icon: <Smartphone className="h-4 w-4" />,
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: mockup */}
        <div className="relative flex items-center justify-center">
          {/* Main visual card */}
          <div className="relative surface-visual rounded-3xl p-8 w-full max-w-md mx-auto">
            {/* App mockup */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-3xl text-5xl mb-4 bg-gradient-primary shadow-[0_12px_32px_rgba(209,0,113,0.4)]">
                📱
              </div>
              <h3 className="font-heading text-lg font-bold text-text-primary mb-1">
                Aplikasi Wafa
              </h3>
              <p className="text-sm text-text-secondary">
                Gratis 6 halaman pertama
              </p>
            </div>

            {/* Feature chips */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: "🎵", label: "Irama Hijaz Wafa" },
                { icon: "🔊", label: "Audio Makhraj" },
                { icon: "🎮", label: "Quiz-Game Seru" },
                { icon: "📊", label: "Progress Tracking" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 rounded-xl p-2.5 bg-white border border-line"
                >
                  <span className="text-base flex-shrink-0">{f.icon}</span>
                  <span className="font-heading text-xs font-medium text-text-primary">
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
          <div className="absolute -bottom-6 -left-4 surface-floating rounded-2xl p-4 max-w-[200px] animate-float">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-sun text-[10px]">
                    ★
                  </span>
                ))}
              </div>
              <span className="font-heading text-xs font-bold text-sun">
                5.0
              </span>
            </div>
            <p className="text-xs leading-relaxed text-text-secondary">
              "Ananda jadi lebih mudah mengaji, alhamdulillah!"
            </p>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 rounded-2xl px-4 py-2 animate-float-slow bg-emerald shadow-[0_8px_24px_rgba(31,129,36,0.35)]">
            <p className="m-0 font-heading text-xs font-bold text-white">
              Tashih LPMQ ✓
            </p>
          </div>
        </div>

        {/* Right: info */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">
            Belajar Kapan Saja, Di Mana Saja
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary mb-5">
            Aplikasi Wafa menghadirkan pengalaman belajar Al-Qur'an yang
            interaktif dan menyenangkan langsung di genggaman tangan Anda.
          </p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {APP_FEATURES.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 text-xs text-text-secondary"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full flex-shrink-0 bg-[rgba(31,129,36,0.1)]">
                  <Check className="h-3 w-3 text-emerald" />
                </div>
                {f}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.wafaindonesia"
              target="_blank"
              rel="noreferrer"
              className="btn-primary no-underline text-sm py-2.5 px-5"
            >
              <Download className="h-4 w-4" />
              Download Gratis
            </a>
            <a
              href="/layanan"
              className="btn-ghost no-underline text-sm py-2.5 px-5"
            >
              Berlangganan Full
            </a>
          </div>
          {/* App reviews */}
          <div className="mt-6">
            <TestimonialCarousel
              testimonials={TESTIMONIALS.filter(
                (t) =>
                  t.role.includes("Aplikasi") || t.role.includes("Pengguna"),
              )}
              autoPlayMs={5000}
              showDots
              showArrows={false}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "buku",
    label: "Buku & Media",
    icon: <Book className="h-4 w-4" />,
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">
            Media Pembelajaran Berkualitas
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary mb-6">
            30+ produk media pembelajaran — buku tilawah, buku menulis, kartu
            peraga, flashdisk audio, dan peraga kelas — dirancang dengan
            pendekatan otak kanan yang menyenangkan.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { emoji: "📗", label: "Tilawah", count: "6 Jilid" },
              { emoji: "✏️", label: "Menulis", count: "6 Jilid" },
              { emoji: "🃏", label: "Kartu Peraga", count: "4 Item" },
              { emoji: "💾", label: "Audio/Video", count: "Flashdisk" },
              { emoji: "📋", label: "Peraga Besar", count: "A2 Size" },
              { emoji: "📦", label: "Paket Bundel", count: "4 Paket" },
            ].map((p) => (
              <div
                key={p.label}
                className="surface-card rounded-2xl p-3 text-center card-hover"
              >
                <div className="text-2xl mb-1">{p.emoji}</div>
                <p className="m-0 font-heading text-xs font-semibold text-text-primary">
                  {p.label}
                </p>
                <p className="m-0 text-[10px] text-text-secondary">
                  {p.count}
                </p>
              </div>
            ))}
          </div>
          <a
            href="/produk"
            className="btn-primary no-underline text-sm py-2.5 px-5"
          >
            Lihat Semua Produk
          </a>
        </div>
        <div className="rounded-3xl border-[1.5px] border-[rgba(31,129,36,0.15)] bg-gradient-to-br from-[rgba(31,129,36,0.06)] to-[rgba(73,216,80,0.04)] p-8 text-center">
          <div className="text-8xl mb-4">📚</div>
          <p className="font-heading text-2xl font-bold text-emerald">
            30+
          </p>
          <p className="text-sm text-text-secondary">
            Produk Media Pembelajaran
          </p>
          <p className="text-xs mt-3 leading-relaxed text-text-secondary">
            Dikembangkan sejak 2013, terus berinovasi untuk menghadirkan media
            belajar yang menyenangkan dan kekinian.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "guru",
    label: "Program Guru",
    icon: <Award className="h-4 w-4" />,
    content: (
      <div>
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">
            SAGAQU — Sekolah Guru Ahli Al-Qur'an
          </h3>
          <p className="text-sm text-text-secondary max-w-lg mx-auto">
            Tingkatkan kompetensi dan dapatkan sertifikasi resmi Wafa. Program
            tersedia online & offline.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {SAGAQU_PROGRAMS.map((p) => (
            <div
              key={p.name}
              className="flex items-start gap-4 surface-card rounded-2xl p-5 card-hover"
            >
              <span className="text-3xl flex-shrink-0">{p.icon}</span>
              <div>
                <p className="font-heading text-sm font-bold text-text-primary">
                  {p.name}
                </p>
                <p className="text-xs mt-0.5 text-text-secondary">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://wa.me/6281130589304"
            target="_blank"
            rel="noreferrer"
            className="btn-primary no-underline"
          >
            Info SAGAQU (Ustadzah Nadia)
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "komunitas",
    label: "Komunitas",
    icon: <Globe className="h-4 w-4" />,
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">
            Bergabung dengan 15.000+ Guru Wafa
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary mb-6">
            Komunitas guru Wafa yang aktif saling berbagi dan mendukung dalam
            perjalanan mendidik generasi Qur'ani Indonesia.
          </p>
          {[
            {
              icon: "🌍",
              label: "35 Provinsi",
              desc: "Jaringan nasional terluas",
            },
            {
              icon: "👥",
              label: "15.000+ Guru",
              desc: "Komunitas yang terus berkembang",
            },
            {
              icon: "📅",
              label: "MPQ Rutin",
              desc: "Majelis Pengajar Al-Qur'an bulanan",
            },
            {
              icon: "🤝",
              label: "SIMAAN",
              desc: "Silaturahim Muallim Al-Qur'an",
            },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 mb-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <span className="font-heading text-sm font-bold text-text-primary">
                  {item.label}
                </span>
                <span className="text-xs ml-2 text-text-secondary">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
          <a
            href="/kontak"
            className="btn-primary no-underline mt-4 text-sm py-2.5 px-5"
          >
            Temukan Wafa di Daerah Anda
          </a>
        </div>
        <div className="rounded-3xl border-[1.5px] border-[rgba(75,42,103,0.15)] bg-gradient-to-br from-[rgba(75,42,103,0.06)] to-[rgba(157,22,124,0.04)] p-8 text-center">
          <div className="text-7xl mb-4">🕌</div>
          <p className="font-heading text-lg font-bold text-deep">
            Bersama Melahirkan Ahli Al-Qur'an
          </p>
          <p className="text-sm mt-2 text-text-secondary">
            Pembangun Peradaban Masyarakat Qur'ani di Indonesia
          </p>
        </div>
      </div>
    ),
  },
];

export function EcosystemSection() {
  return (
    <section className="section-padding bg-section-deep-fade">
      <div className="page-wrap">
        <SectionHeading
          kicker="Ekosistem Wafa"
          title="Seluruh Perjalanan dalam Satu Genggaman"
          subtitle="Dari belajar mandiri hingga sertifikasi guru dan kemitraan lembaga — Wafa hadir di setiap tahap perjalanan Al-Qur'an Anda."
          align="center"
          className="mb-10"
        />
        <TabGroup tabs={TABS} variant="pill" tabAlign="center" />
      </div>
    </section>
  );
}
