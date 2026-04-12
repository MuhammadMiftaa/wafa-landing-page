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
} from "lucide-react";
import { SectionHeading, Badge, TabGroup } from "../components/ui/index.ts";

export const Route = createFileRoute("/layanan")({ component: LayananPage });

const JOURNEY_TABS = [
  { id: "pemula", label: "Saya Pemula", icon: "🌱" },
  { id: "bisa", label: "Saya Sudah Bisa", icon: "📖" },
  { id: "pengelola", label: "Saya Pengelola", icon: "🏫" },
];

const SERVICES_BY_JOURNEY: Record<
  string,
  Array<{
    icon: React.ReactNode;
    title: string;
    desc: string;
    features: string[];
    price: string;
    cta: string;
    ctaHref: string;
    highlight?: boolean;
  }>
> = {
  pemula: [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Aplikasi Wafa",
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
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Akademi Tahsin Online (ATO)",
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
    },
  ],
  bisa: [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Akademi Tahfidz (ATA)",
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
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "SAGAQU — Sekolah Guru Ahli Al-Qur'an",
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
    },
  ],
  pengelola: [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Paket Kemitraan Lembaga",
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
    },
    {
      icon: <CalendarDays className="h-6 w-6" />,
      title: "Program Khusus Mitra",
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
    },
  ],
};

const UPCOMING_EVENTS = [
  {
    date: "15 Apr 2026",
    nama: "PSGA Jakarta",
    lokasi: "Jakarta",
    type: "PSGA",
    color: "var(--magenta-bold)",
  },
  {
    date: "22 Apr 2026",
    nama: "SIMAAN Online",
    lokasi: "Zoom Meeting",
    type: "SIMAAN",
    color: "var(--emerald)",
  },
  {
    date: "29 Apr 2026",
    nama: "ODT Bandung",
    lokasi: "Bandung",
    type: "ODT",
    color: "var(--golden)",
  },
  {
    date: "5 Mei 2026",
    nama: "Upgrading Surabaya",
    lokasi: "Surabaya",
    type: "Upgrading",
    color: "var(--deep)",
  },
];

function LayananPage() {
  const [activeJourney, setActiveJourney] = useState("pemula");
  const [siswa, setSiswa] = useState(100);
  const services = SERVICES_BY_JOURNEY[activeJourney] ?? [];

  const investasi =
    siswa <= 50 ? 5_000_000 : siswa <= 200 ? 12_000_000 : 25_000_000;
  const perSiswa = Math.round(investasi / siswa / 12);

  return (
    <main>
      {/* Hero */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,rgba(209,0,113,0.04),rgba(31,129,36,0.03))",
        }}
      >
        <div
          className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle,rgba(31,129,36,0.14),transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="page-wrap relative z-10 text-center">
          <Badge color="emerald">Layanan Wafa</Badge>
          <h1
            className="mt-4 text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            Solusi Al-Qur'an untuk{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,var(--magenta-bold),var(--emerald))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Semua
            </span>
          </h1>
          <p
            className="max-w-xl mx-auto text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Individu, keluarga, guru, maupun lembaga pendidikan — Wafa punya
            solusi yang tepat untuk setiap tahap perjalanan Al-Qur\'an Anda.
          </p>
        </div>
      </section>

      {/* Journey Filter */}
      <section
        className="py-6 sticky top-16 z-30"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="page-wrap">
          <div className="flex gap-3 justify-center flex-wrap">
            {JOURNEY_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveJourney(tab.id)}
                className="tab-pill flex items-center gap-2"
                style={
                  activeJourney === tab.id
                    ? {
                        background: "var(--magenta-bold)",
                        color: "white",
                        boxShadow: "0 4px 16px rgba(209,0,113,0.3)",
                      }
                    : {}
                }
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="page-wrap">
          <div
            key={activeJourney}
            className="grid md:grid-cols-2 gap-6"
            style={{ animation: "fade-in 300ms ease both" }}
          >
            {services.map((svc) => (
              <div
                key={svc.title}
                className="rounded-3xl p-7 flex flex-col transition-all"
                style={{
                  background: svc.highlight
                    ? "linear-gradient(135deg,rgba(209,0,113,0.04),rgba(75,42,103,0.03))"
                    : "white",
                  border: `1.5px solid ${svc.highlight ? "rgba(209,0,113,0.2)" : "var(--line)"}`,
                  boxShadow: svc.highlight
                    ? "0 20px 60px rgba(209,0,113,0.08)"
                    : "0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                    style={{
                      background: svc.highlight
                        ? "var(--magenta-bold)"
                        : "var(--deep)",
                    }}
                  >
                    {svc.icon}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-base"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      className="text-xs font-semibold"
                      style={{
                        color: "var(--magenta-bold)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {svc.price}
                    </p>
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {svc.desc}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6 flex-1">
                  {svc.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <CheckCircle
                        className="h-3.5 w-3.5 flex-shrink-0"
                        style={{ color: "var(--emerald)" }}
                      />
                      {f}
                    </div>
                  ))}
                </div>
                <a
                  href={svc.ctaHref}
                  target={svc.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold no-underline transition-all hover:-translate-y-0.5"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: svc.highlight
                      ? "linear-gradient(135deg,var(--magenta-bold),var(--magenta-deep))"
                      : "transparent",
                    color: svc.highlight ? "white" : "var(--magenta-bold)",
                    border: svc.highlight
                      ? "none"
                      : "2px solid var(--magenta-bold)",
                    boxShadow: svc.highlight
                      ? "0 4px 20px rgba(209,0,113,0.3)"
                      : "none",
                  }}
                >
                  {svc.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kalkulator Investasi */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(180deg,rgba(31,129,36,0.03) 0%,transparent 100%)",
        }}
      >
        <div className="page-wrap max-w-2xl">
          <SectionHeading
            kicker="Kalkulator Investasi"
            title="Hitung Estimasi Investasi Lembaga"
            subtitle="Sesuaikan dengan jumlah siswa di lembaga Anda."
            align="center"
            className="mb-8"
          />
          <div
            className="rounded-3xl p-8"
            style={{
              background: "white",
              border: "1px solid var(--line)",
              boxShadow: "0 16px 48px rgba(157,22,124,0.06)",
            }}
          >
            <div className="mb-6">
              <label
                className="block text-sm font-semibold mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                }}
              >
                Jumlah Siswa:{" "}
                <span style={{ color: "var(--magenta-bold)" }}>
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
                className="w-full"
                style={{ accentColor: "var(--magenta-bold)" }}
              />
              <div
                className="flex justify-between text-xs mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                <span>20</span>
                <span>500+</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                {
                  label: "Estimasi Investasi",
                  value: `Rp${(investasi / 1_000_000).toFixed(0)} juta`,
                  color: "var(--magenta-bold)",
                },
                {
                  label: "Per Siswa/Bulan",
                  value: `Rp${perSiswa.toLocaleString("id-ID")}`,
                  color: "var(--emerald)",
                },
                {
                  label: "Paket Rekomendasi",
                  value:
                    siswa <= 50
                      ? "Starter"
                      : siswa <= 200
                        ? "Growth"
                        : "Excellence",
                  color: "var(--deep)",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-4 text-center"
                  style={{
                    background: "rgba(209,0,113,0.03)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <p
                    className="font-bold text-base"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: item.color,
                    }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="text-xs text-center mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
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
                className="rounded-3xl p-6 transition-all card-hover"
                style={{ background: "white", border: "1px solid var(--line)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-bold rounded-full px-2.5 py-1"
                    style={{
                      background: `${ev.color}12`,
                      color: ev.color,
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {ev.type}
                  </span>
                </div>
                <p
                  className="font-bold text-sm mb-1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                  }}
                >
                  {ev.nama}
                </p>
                <p
                  className="text-xs mb-0.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  📅 {ev.date}
                </p>
                <p
                  className="text-xs mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  📍 {ev.lokasi}
                </p>
                <a
                  href="https://wa.me/6281130589310"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1 text-xs font-semibold rounded-full py-2 no-underline"
                  style={{
                    background: `${ev.color}12`,
                    color: ev.color,
                    fontFamily: "var(--font-heading)",
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
