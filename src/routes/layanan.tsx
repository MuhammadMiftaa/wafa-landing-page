import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Smartphone,
  GraduationCap,
  BookOpen,
  Building,
  CalendarDays,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SectionHeading, Badge } from "../components/ui/index.ts";

export const Route = createFileRoute("/layanan")({ component: LayananPage });

const ALL_SERVICES = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Aplikasi Wafa",
    category: "Individu",
    desc: "Belajar mandiri di mana saja dengan audio makhraj interaktif, lagu Hijaz tanpa iklan, dan quiz-game seru.",
    features: [
      "Audio Makhraj Interaktif",
      "Irama Hijaz Wafa",
      "Quiz-Game Evaluasi",
      "Progress Tracking",
      "6 halaman gratis",
    ],
    price: "Gratis → Rp49.000/bln",
    cta: "Download Gratis",
    ctaHref:
      "https://play.google.com/store/apps/details?id=com.wafaindonesia",
    highlight: true,
    accentColor: "var(--color-magenta-bold)",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Akademi Tahsin Online (ATO)",
    category: "Individu",
    desc: "Kursus online terstruktur dari nol hingga lancar baca Al-Qur'an dengan jadwal fleksibel.",
    features: [
      "Belajar dari Nol",
      "Jadwal Fleksibel",
      "Bimbingan Ustadz",
      "Grup Diskusi",
      "Sertifikat Syahadah",
    ],
    price: "Rp299.000 – Rp599.000",
    cta: "Lihat Program",
    ctaHref: "/tentang-kami",
    accentColor: "var(--color-deep)",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Akademi Tahfidz (ATA)",
    category: "Tahfidz",
    desc: "Program hafalan terstruktur dengan target 5–30 juz, pendampingan personal, dan muroja'ah terjadwal.",
    features: [
      "Target 5-30 Juz",
      "Pendampingan Personal",
      "Muroja'ah Terjadwal",
      "Ujian Munaqosyah",
      "Syahadah Tahfidz",
    ],
    price: "Hubungi untuk harga",
    cta: "Konsultasi Target",
    ctaHref: "https://wa.me/6281130589310",
    highlight: true,
    accentColor: "var(--color-emerald)",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "SAGAQU — Sekolah Guru Ahli Al-Qur'an",
    category: "Guru",
    desc: "Tingkatkan kompetensi mengajar — tahsin, tahfidz, irama, metodologi, dan sertifikasi resmi.",
    features: [
      "Tahsin & Tahfidz",
      "Irama Hijaz Wafa",
      "Metodologi Pengajaran",
      "Online & Offline",
      "Sertifikasi Wafa",
    ],
    price: "Hubungi Admin",
    cta: "Info SAGAQU",
    ctaHref: "https://wa.me/6281130589304",
    accentColor: "var(--color-golden)",
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Paket Kemitraan Lembaga",
    category: "Lembaga",
    desc: "Sistem 7M lengkap: standarisasi guru, pendampingan koordinator, supervisi berkala, dan wisuda syahadah.",
    features: [
      "Pelatihan Guru (PSGA)",
      "Coaching Koordinator",
      "Supervisi Berkala",
      "Upgrading Kompetensi",
      "Event & Wisuda",
    ],
    price: "Rp5 jt – Rp25 jt",
    cta: "Konsultasi Gratis",
    ctaHref: "/mitra",
    highlight: true,
    accentColor: "var(--color-magenta-deep)",
  },
  {
    icon: <CalendarDays className="h-6 w-6" />,
    title: "Program Khusus Mitra",
    category: "Lembaga",
    desc: "PSGA, ODT (One-Day Training), Upgrading, SIMAAN — pilih sesuai kebutuhan lembaga.",
    features: [
      "PSGA 3 Hari",
      "ODT Mini Class",
      "Upgrading MPQ",
      "SIMAAN Online",
      "Majelis Pengajar",
    ],
    price: "Tergantung program",
    cta: "Lihat Jadwal",
    ctaHref: "https://wa.me/6281130589310",
    accentColor: "var(--color-tangerine)",
  },
];

const UPCOMING_EVENTS = [
  {
    date: "15 Apr 2026",
    nama: "PSGA Jakarta",
    lokasi: "Jakarta",
    type: "PSGA",
    color: "var(--color-magenta-bold)",
  },
  {
    date: "22 Apr 2026",
    nama: "SIMAAN Online",
    lokasi: "Zoom Meeting",
    type: "SIMAAN",
    color: "var(--color-emerald)",
  },
  {
    date: "29 Apr 2026",
    nama: "ODT Bandung",
    lokasi: "Bandung",
    type: "ODT",
    color: "var(--color-golden)",
  },
  {
    date: "5 Mei 2026",
    nama: "Upgrading Surabaya",
    lokasi: "Surabaya",
    type: "Upgrading",
    color: "var(--color-deep)",
  },
];

function LayananPage() {
  const [siswa, setSiswa] = useState(100);

  const investasi =
    siswa <= 50 ? 5_000_000 : siswa <= 200 ? 12_000_000 : 25_000_000;
  const perSiswa = Math.round(investasi / siswa / 12);

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-section-magenta-emerald">
        <div className="blob-emerald absolute -right-40 -top-20 h-96 w-96 opacity-25" />
        <div className="blob-magenta absolute -left-20 bottom-0 h-64 w-64 opacity-15" />
        <div className="page-wrap relative z-10 text-center">
          <Badge color="emerald">Layanan Wafa</Badge>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
            Solusi Al-Qur'an untuk{" "}
            <span className="gradient-text">Semua</span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg leading-relaxed text-text-secondary">
            Individu, keluarga, guru, maupun lembaga pendidikan — Wafa punya
            solusi yang tepat untuk setiap tahap perjalanan Al-Qur'an Anda.
          </p>
        </div>
      </section>

      {/* All Services — No Tabs */}
      <section className="section-padding">
        <div className="page-wrap">
          <SectionHeading
            kicker="Semua Layanan"
            title="Pilih Program yang Tepat untuk Anda"
            subtitle="Dari belajar mandiri hingga kemitraan lembaga, temukan layanan yang sesuai kebutuhan Anda."
            align="center"
            className="mb-10"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICES.map((svc) => (
              <div
                key={svc.title}
                className={`group rounded-3xl border-[1.5px] p-7 flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                  svc.highlight
                    ? "border-[rgba(209,0,113,0.2)] bg-gradient-to-br from-[rgba(209,0,113,0.04)] to-[rgba(75,42,103,0.03)] shadow-[0_20px_60px_rgba(209,0,113,0.08)] hover:shadow-[0_24px_64px_rgba(209,0,113,0.14)]"
                    : "border-line bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(157,22,124,0.1)] hover:border-[rgba(209,0,113,0.15)]"
                }`}
              >
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold font-heading uppercase tracking-wide"
                    style={{
                      background: `color-mix(in srgb, ${svc.accentColor} 10%, transparent)`,
                      color: svc.accentColor,
                    }}
                  >
                    {svc.category}
                  </span>
                  {svc.highlight && (
                    <span className="flex items-center gap-1 rounded-full bg-[rgba(209,0,113,0.08)] px-2 py-0.5 text-[10px] font-bold text-magenta-bold">
                      <Sparkles className="h-3 w-3" /> Populer
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${svc.accentColor}, color-mix(in srgb, ${svc.accentColor} 70%, #4b2a67))`,
                    }}
                  >
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-text-primary leading-snug">
                      {svc.title}
                    </h3>
                    <p className="font-heading text-xs font-semibold text-magenta-bold">
                      {svc.price}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-text-secondary mb-5">
                  {svc.desc}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6 flex-1">
                  {svc.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-xs text-text-secondary"
                    >
                      <CheckCircle className="h-3.5 w-3.5 flex-shrink-0 text-emerald" />
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href={svc.ctaHref}
                  target={svc.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-2 rounded-full py-3 font-heading text-sm font-semibold no-underline transition-all hover:-translate-y-0.5 ${
                    svc.highlight
                      ? "bg-gradient-primary text-white shadow-[0_4px_20px_rgba(209,0,113,0.3)] hover:shadow-[0_8px_28px_rgba(209,0,113,0.4)]"
                      : "bg-transparent text-magenta-bold border-2 border-magenta-bold hover:bg-[rgba(209,0,113,0.06)]"
                  }`}
                >
                  {svc.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kalkulator Investasi */}
      <section className="section-padding bg-section-emerald-fade">
        <div className="page-wrap max-w-2xl">
          <SectionHeading
            kicker="Kalkulator Investasi"
            title="Hitung Estimasi Investasi Lembaga"
            subtitle="Sesuaikan dengan jumlah siswa di lembaga Anda."
            align="center"
            className="mb-8"
          />
          <div className="surface-card-elevated rounded-3xl p-8">
            <div className="mb-6">
              <label className="block font-heading text-sm font-semibold text-text-primary mb-3">
                Jumlah Siswa:{" "}
                <span className="text-magenta-bold">
                  {siswa} siswa
                </span>
              </label>
              <input
                type="range"
                min={20}
                max={500}
                step={10}
                value={siswa}
                onChange={(e) => setSiswa(Number(e.target.value))}
                className="w-full accent-magenta-bold"
              />
              <div className="flex justify-between text-xs mt-1 text-text-secondary">
                <span>20</span>
                <span>500+</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                {
                  label: "Estimasi Investasi",
                  value: `Rp${(investasi / 1_000_000).toFixed(0)} juta`,
                  color: "var(--color-magenta-bold)",
                },
                {
                  label: "Per Siswa/Bulan",
                  value: `Rp${perSiswa.toLocaleString("id-ID")}`,
                  color: "var(--color-emerald)",
                },
                {
                  label: "Paket Rekomendasi",
                  value:
                    siswa <= 50
                      ? "Starter"
                      : siswa <= 200
                        ? "Growth"
                        : "Excellence",
                  color: "var(--color-deep)",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-4 text-center bg-[rgba(209,0,113,0.03)] border border-line"
                >
                  <p
                    className="font-heading text-base font-bold"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </p>
                  <p className="text-xs mt-1 text-text-secondary">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-text-secondary mb-5">
              *Estimasi bisa cicil 3-6x. Harga final tergantung lokasi & paket.
            </p>
            <a
              href="/mitra"
              className="btn-primary w-full justify-center no-underline"
            >
              <Building className="h-4 w-4" /> Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="section-padding">
        <div className="page-wrap">
          <SectionHeading
            kicker="Jadwal Event"
            title="Event & Program Terdekat"
            subtitle="Daftar sekarang — tempat terbatas untuk setiap sesi."
            className="mb-8"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {UPCOMING_EVENTS.map((ev) => (
              <div
                key={ev.nama}
                className="surface-card rounded-3xl p-6 card-hover"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="font-heading text-xs font-bold rounded-full px-2.5 py-1"
                    style={{
                      background: `${ev.color}12`,
                      color: ev.color,
                    }}
                  >
                    {ev.type}
                  </span>
                </div>
                <p className="font-heading text-sm font-bold text-text-primary mb-1">
                  {ev.nama}
                </p>
                <p className="text-xs text-text-secondary mb-0.5">
                  📅 {ev.date}
                </p>
                <p className="text-xs text-text-secondary mb-4">
                  📍 {ev.lokasi}
                </p>
                <a
                  href="https://wa.me/6281130589310"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1 font-heading text-xs font-semibold rounded-full py-2 no-underline"
                  style={{
                    background: `${ev.color}12`,
                    color: ev.color,
                    border: `1px solid ${ev.color}30`,
                  }}
                >
                  <MessageCircle className="h-3 w-3" /> Daftar
                </a>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://wa.me/6281130589310"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost no-underline"
            >
              Lihat Kalender Lengkap <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
