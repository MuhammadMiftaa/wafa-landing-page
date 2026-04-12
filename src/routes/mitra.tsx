import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Building,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  Star,
} from "lucide-react";
import { SectionHeading, Badge } from "../components/ui/index.ts";

export const Route = createFileRoute("/mitra")({ component: MitraPage });

const ALUR = [
  {
    step: "01",
    label: "Pendaftaran",
    desc: "Hubungi tim Wafa via WhatsApp atau isi formulir. Konsultasi gratis & tanpa komitmen.",
    duration: "1 hari",
    icon: "📝",
    color: "var(--magenta-bold)",
  },
  {
    step: "02",
    label: "Standarisasi",
    desc: "Pelatihan Guru Al-Qur'an (PSGA) selama 3 hari. Pemetaan kemampuan, standarisasi irama & metodologi.",
    duration: "3 hari",
    icon: "🎓",
    color: "var(--emerald)",
  },
  {
    step: "03",
    label: "Pendampingan",
    desc: "Coaching kepala sekolah, koordinator, dan guru. Supervisi berkala untuk menjaga mutu.",
    duration: "6–12 bulan",
    icon: "🤝",
    color: "var(--golden)",
  },
  {
    step: "04",
    label: "Output",
    desc: "Siswa dan guru mendapatkan Syahadah (sertifikat). Lembaga siap menyelenggarakan pengukuhan publik.",
    duration: "Berkelanjutan",
    icon: "🏆",
    color: "var(--deep)",
  },
];

const CASE_STUDIES = [
  {
    lembaga: "NUFI Quranic School Sidoarjo",
    tahun: "10 Tahun Kemitraan",
    desc: "Program tahfidz intensif mengantarkan ratusan siswa hafiz. Up-Grading Kompetensi Guru diselenggarakan mandiri.",
    metric: "500+ Siswa Tahfidz",
    icon: "🏫",
  },
  {
    lembaga: "MAN 2 Lubuklinggau",
    tahun: "Sumatera Selatan",
    desc: "Program tahfidz mandatory bagi seluruh siswa. Alhamdulillah sudah ada yang hafal Juz 1–6 dengan bacaan standar.",
    metric: "80% Hafal 5+ Juz",
    icon: "📚",
  },
  {
    lembaga: "Perguruan Islam Al Amjad Medan",
    tahun: "Mitra Sejak 2018",
    desc: "Gibran Alfatih — murid Al Amjad meraih Juara 1 Hafiz Indonesia 2024 dengan lantunan irama Hijaz Wafa.",
    metric: "Juara Hafiz Indonesia 2024",
    icon: "🥇",
  },
];

const PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    price: 5_000_000,
    highlight: false,
    features: [
      "PSGA (Pelatihan Sertifikasi Guru Al-Qur'an)",
      "Starter Kit media pembelajaran",
      "Pendampingan 3 bulan",
      "Supervisi 1x",
      "Konsultasi via WhatsApp",
    ],
    notIncluded: ["Event khusus mitra", "Upgrading lanjutan"],
    cta: "Pilih Starter",
  },
  {
    id: "growth",
    name: "Growth",
    price: 12_000_000,
    highlight: true,
    badge: "Terpopuler",
    features: [
      "Semua yang ada di Starter",
      "Pendampingan 6 bulan",
      "Supervisi 3x",
      "Coaching Kepala Sekolah",
      "Akses MPQ (Majelis Pengajar Al-Qur'an)",
      "1 Event / Workshop",
    ],
    notIncluded: ["Event premium & wisuda"],
    cta: "Pilih Growth",
  },
  {
    id: "excellence",
    name: "Excellence",
    price: 25_000_000,
    highlight: false,
    features: [
      "Semua yang ada di Growth",
      "Pendampingan 12 bulan",
      "Supervisi 6x",
      "SAGAQU Metodologi & Kurikulum",
      "3 Event / Workshop",
      "ODT (One-Day Training) eksklusif",
      "Dukungan penyelenggaraan Wisuda",
    ],
    notIncluded: [],
    cta: "Pilih Excellence",
  },
];

const JENIS_LEMBAGA = [
  "TK / RA / PAUD",
  "SD / MI",
  "SMP / MTs",
  "SMA / MA / SMK",
  "Pesantren",
  "TPQ / Madrasah Diniyah",
  "Rumah Tahfidz",
  "Lainnya",
];

function MitraPage() {
  const [formData, setFormData] = useState({
    namaLembaga: "",
    jenis: "",
    alamat: "",
    kota: "",
    jumlahSiswa: "",
    namaKontak: "",
    telpon: "",
    email: "",
    kendala: "",
    jadwal: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(209,0,113,0.04) 0%, rgba(31,129,36,0.03) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute -left-40 -top-32 h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(209,0,113,0.15), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(31,129,36,0.12), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="page-wrap relative z-10 text-center">
          <Badge color="magenta">Program Kemitraan</Badge>
          <h1
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            Jadikan Lembaga Anda{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--magenta-bold), var(--emerald))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pilihan Utama
            </span>
          </h1>
          <p
            className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Sistem 7M Wafa telah terbukti meningkatkan daya tarik dan kualitas
            lulusan Al-Qur'an di 1200+ lembaga di 35 provinsi Indonesia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#konsultasi" className="btn-primary no-underline">
              <MessageCircle className="h-4 w-4" />
              Konsultasi Gratis
            </a>
            <a href="#paket" className="btn-secondary no-underline">
              Lihat Paket <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { label: "1200+", sub: "Lembaga Mitra" },
              { label: "15.000+", sub: "Guru Tersertifikasi" },
              { label: "35", sub: "Provinsi" },
              { label: "14 Tahun", sub: "Pengalaman" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="m-0 text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--magenta-bold)",
                  }}
                >
                  {s.label}
                </p>
                <p
                  className="m-0 text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAS Framework */}
      <section className="section-padding">
        <div className="page-wrap">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                type: "PROBLEM",
                color: "var(--magenta-bold)",
                bg: "rgba(209,0,113,0.04)",
                border: "rgba(209,0,113,0.15)",
                icon: "😟",
                title: "Tantangan Lembaga",
                desc: "Mengantarkan lulusan dengan bacaan & hafalan Al-Qur'an yang bagus dan merata tidak mudah. Banyak lembaga bingung bagaimana membangun standar mutu dan sistem manajemennya.",
              },
              {
                type: "AGITATION",
                color: "var(--tangerine)",
                bg: "rgba(255,123,0,0.04)",
                border: "rgba(255,123,0,0.15)",
                icon: "⚠️",
                title: "Akibatnya...",
                desc: "Orang tua semakin selektif. Tanpa bukti nyata kualitas lulusan, mereka beralih ke lembaga lain. Persaingan semakin ketat, sementara ekspektasi terus meningkat.",
              },
              {
                type: "SOLUTION",
                color: "var(--emerald)",
                bg: "rgba(31,129,36,0.04)",
                border: "rgba(31,129,36,0.15)",
                icon: "✅",
                title: "Solusi Wafa",
                desc: "Sistem 7M Wafa hadir sebagai solusi lengkap: standarisasi guru, pemetaan siswa, coaching koordinator, supervisi berkala — semua terukur dan berdampak nyata.",
              },
            ].map((item) => (
              <div
                key={item.type}
                className="rounded-3xl p-7"
                style={{
                  background: item.bg,
                  border: `1.5px solid ${item.border}`,
                }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <p
                  className="m-0 text-xs font-bold uppercase tracking-widest mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: item.color,
                  }}
                >
                  {item.type}
                </p>
                <h3
                  className="font-bold text-base mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="m-0 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alur Bermitra */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(180deg, rgba(31,129,36,0.02) 0%, transparent 100%)",
        }}
      >
        <div className="page-wrap">
          <SectionHeading
            kicker="Alur Bermitra"
            title="Dari Pendaftaran ke Prestasi"
            subtitle="Proses kemitraan yang terstruktur, terbimbing, dan berorientasi hasil. Wafa hadir di setiap langkah perjalanan lembaga Anda."
            align="center"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALUR.map((a, i) => (
              <div key={a.step} className="relative">
                <div
                  className="rounded-3xl p-7 h-full transition-all card-hover"
                  style={{
                    background: "white",
                    border: "1px solid var(--line)",
                    boxShadow: "0 8px 24px rgba(157,22,124,0.05)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{a.icon}</span>
                    <span
                      className="text-xs font-bold"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: a.color,
                      }}
                    >
                      {a.step}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {a.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {a.desc}
                  </p>
                  <span
                    className="inline-flex items-center text-xs font-semibold rounded-full px-3 py-1"
                    style={{
                      background: `${a.color}12`,
                      color: a.color,
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    ⏱ {a.duration}
                  </span>
                </div>
                {i < ALUR.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-6 w-6 items-center justify-center rounded-full bg-white border"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <ChevronRight
                      className="h-3 w-3"
                      style={{ color: "var(--text-secondary)" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="page-wrap">
          <SectionHeading
            kicker="Cerita Sukses"
            title="Lembaga yang Sudah Merasakan Manfaatnya"
            subtitle="Kisah nyata dari mitra Wafa yang telah mengalami transformasi kualitas pembelajaran Al-Qur'an."
            className="mb-10"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c) => (
              <div
                key={c.lembaga}
                className="rounded-3xl p-7 transition-all card-hover"
                style={{
                  background: "white",
                  border: "1px solid var(--line)",
                  boxShadow: "0 8px 32px rgba(157,22,124,0.05)",
                }}
              >
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3
                  className="font-bold text-base mb-1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                  }}
                >
                  {c.lembaga}
                </h3>
                <p
                  className="text-xs font-semibold mb-3"
                  style={{
                    color: "var(--magenta-bold)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {c.tahun}
                </p>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {c.desc}
                </p>
                <div
                  className="flex items-center gap-2 rounded-2xl p-3"
                  style={{
                    background: "rgba(31,129,36,0.06)",
                    border: "1px solid rgba(31,129,36,0.15)",
                  }}
                >
                  <TrendingUp
                    className="h-4 w-4 flex-shrink-0"
                    style={{ color: "var(--emerald)" }}
                  />
                  <p
                    className="m-0 text-xs font-bold"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--emerald)",
                    }}
                  >
                    {c.metric}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section
        id="paket"
        className="section-padding"
        style={{
          background:
            "linear-gradient(180deg, rgba(75,42,103,0.03) 0%, transparent 100%)",
        }}
      >
        <div className="page-wrap">
          <SectionHeading
            kicker="Paket Investasi"
            title="Transparan & Terjangkau"
            subtitle="Pilih paket yang sesuai kebutuhan dan anggaran lembaga Anda. Semua paket dapat dicicil 3–6 kali."
            align="center"
            className="mb-10"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-7 flex flex-col transition-all ${pkg.highlight ? "" : "card-hover"}`}
                style={{
                  background: pkg.highlight
                    ? "linear-gradient(135deg, var(--magenta-bold), var(--magenta-deep))"
                    : "white",
                  border: pkg.highlight ? "none" : "1px solid var(--line)",
                  boxShadow: pkg.highlight
                    ? "0 20px 60px rgba(209,0,113,0.3)"
                    : "0 8px 24px rgba(157,22,124,0.05)",
                  transform: pkg.highlight ? "scale(1.03)" : undefined,
                }}
              >
                {pkg.badge && (
                  <div className="mb-3">
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bold rounded-full px-3 py-1"
                      style={{
                        background: "rgba(255,255,255,0.2)",
                        color: "white",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      <Star className="h-3 w-3" fill="currentColor" />
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <h3
                  className="font-bold text-xl mb-1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: pkg.highlight ? "white" : "var(--text-primary)",
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-3xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: pkg.highlight ? "white" : "var(--magenta-bold)",
                  }}
                >
                  Rp{(pkg.price / 1_000_000).toFixed(0)} jt
                </p>
                <p
                  className="text-xs mb-6"
                  style={{
                    color: pkg.highlight
                      ? "rgba(255,255,255,0.7)"
                      : "var(--text-secondary)",
                  }}
                >
                  Bisa dicicil 3–6 kali
                </p>
                <div className="flex-1 space-y-2.5 mb-6">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckCircle
                        className="h-4 w-4 flex-shrink-0 mt-0.5"
                        style={{
                          color: pkg.highlight
                            ? "rgba(255,255,255,0.9)"
                            : "var(--emerald)",
                        }}
                      />
                      <span
                        className="text-sm"
                        style={{
                          color: pkg.highlight
                            ? "rgba(255,255,255,0.9)"
                            : "var(--text-secondary)",
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#konsultasi"
                  className="w-full flex items-center justify-center gap-2 text-sm font-semibold rounded-full py-3 no-underline transition-all"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: pkg.highlight
                      ? "white"
                      : "linear-gradient(135deg, var(--magenta-bold), var(--magenta-deep))",
                    color: pkg.highlight ? "var(--magenta-bold)" : "white",
                    boxShadow: pkg.highlight
                      ? "0 4px 16px rgba(255,255,255,0.3)"
                      : "0 4px 16px rgba(209,0,113,0.3)",
                  }}
                >
                  {pkg.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
          <p
            className="mt-6 text-center text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Semua paket sudah termasuk PPn. Harga dapat berbeda berdasarkan
            lokasi dan kebutuhan khusus.{" "}
            <a
              href="https://wa.me/6281130589310"
              target="_blank"
              rel="noreferrer"
              className="font-semibold"
              style={{ color: "var(--magenta-bold)" }}
            >
              Hubungi kami untuk penawaran custom.
            </a>
          </p>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="konsultasi" className="section-padding">
        <div className="page-wrap max-w-3xl">
          <SectionHeading
            kicker="Konsultasi Gratis"
            title="Ceritakan Kebutuhan Lembaga Anda"
            subtitle="Isi formulir berikut dan tim Wafa akan menghubungi Anda dalam 1×24 jam. Tidak ada komitmen, tidak ada tekanan."
            align="center"
            className="mb-10"
          />

          {sent ? (
            <div
              className="rounded-3xl p-12 text-center"
              style={{
                background: "white",
                border: "1px solid var(--line)",
                boxShadow: "0 16px 48px rgba(157,22,124,0.06)",
              }}
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                }}
              >
                Jazakallah Khair!
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Formulir konsultasi Anda berhasil dikirim. Tim Wafa akan
                menghubungi Anda dalam 1×24 jam kerja.
              </p>
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--text-secondary)" }}
              >
                Atau hubungi langsung:{" "}
                <a
                  href="https://wa.me/6281130589310"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline"
                  style={{ color: "var(--magenta-bold)" }}
                >
                  0811 3058 9310
                </a>
              </p>
            </div>
          ) : (
            <div
              className="rounded-3xl p-8"
              style={{
                background: "white",
                border: "1px solid var(--line)",
                boxShadow: "0 16px 48px rgba(157,22,124,0.06)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Nama Lembaga *
                    </label>
                    <input
                      type="text"
                      name="namaLembaga"
                      value={formData.namaLembaga}
                      onChange={handleChange}
                      required
                      placeholder="SDI / MI / SMP / Pesantren..."
                      className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                      style={{
                        borderColor: "var(--line)",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-sans)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Jenis Lembaga *
                    </label>
                    <select
                      name="jenis"
                      value={formData.jenis}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border px-4 py-3 text-sm outline-none appearance-none"
                      style={{
                        borderColor: "var(--line)",
                        color: formData.jenis
                          ? "var(--text-primary)"
                          : "var(--text-secondary)",
                        fontFamily: "var(--font-sans)",
                        background: "white",
                      }}
                    >
                      <option value="">Pilih jenis...</option>
                      {JENIS_LEMBAGA.map((j) => (
                        <option key={j} value={j}>
                          {j}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Kota / Kabupaten *
                    </label>
                    <input
                      type="text"
                      name="kota"
                      value={formData.kota}
                      onChange={handleChange}
                      required
                      placeholder="Surabaya, Bandung, ..."
                      className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                      style={{
                        borderColor: "var(--line)",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-sans)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Jumlah Siswa
                    </label>
                    <input
                      type="number"
                      name="jumlahSiswa"
                      value={formData.jumlahSiswa}
                      onChange={handleChange}
                      placeholder="Perkiraan jumlah siswa"
                      className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                      style={{
                        borderColor: "var(--line)",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-sans)",
                      }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Nama PIC / Kontak *
                    </label>
                    <input
                      type="text"
                      name="namaKontak"
                      value={formData.namaKontak}
                      onChange={handleChange}
                      required
                      placeholder="Nama Anda"
                      className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                      style={{
                        borderColor: "var(--line)",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-sans)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      No. WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telpon"
                      value={formData.telpon}
                      onChange={handleChange}
                      required
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
                      style={{
                        borderColor: "var(--line)",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-sans)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Kendala yang Dihadapi Saat Ini
                  </label>
                  <textarea
                    name="kendala"
                    value={formData.kendala}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Ceritakan tantangan atau kebutuhan lembaga Anda terkait pembelajaran Al-Qur'an..."
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      borderColor: "var(--line)",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-sans)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 text-white text-sm font-semibold rounded-full py-4 transition-all"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background:
                      "linear-gradient(135deg, var(--magenta-bold), var(--magenta-deep))",
                    boxShadow: "0 6px 24px rgba(209,0,113,0.35)",
                  }}
                >
                  <Building className="h-4 w-4" />
                  Kirim Formulir Konsultasi
                </button>

                <div className="text-center">
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Atau langsung hubungi via WhatsApp:{" "}
                    <a
                      href="https://wa.me/6281130589310"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold no-underline"
                      style={{ color: "var(--magenta-bold)" }}
                    >
                      0811 3058 9310
                    </a>{" "}
                    (Respon tercepat)
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
