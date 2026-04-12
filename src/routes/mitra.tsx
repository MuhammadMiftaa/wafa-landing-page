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
    color: "var(--color-magenta-bold)",
  },
  {
    step: "02",
    label: "Standarisasi",
    desc: "Pelatihan Guru Al-Qur'an (PSGA) selama 3 hari. Pemetaan kemampuan, standarisasi irama & metodologi.",
    duration: "3 hari",
    icon: "🎓",
    color: "var(--color-emerald)",
  },
  {
    step: "03",
    label: "Pendampingan",
    desc: "Coaching kepala sekolah, koordinator, dan guru. Supervisi berkala untuk menjaga mutu.",
    duration: "6–12 bulan",
    icon: "🤝",
    color: "var(--color-golden)",
  },
  {
    step: "04",
    label: "Output",
    desc: "Siswa dan guru mendapatkan Syahadah (sertifikat). Lembaga siap menyelenggarakan pengukuhan publik.",
    duration: "Berkelanjutan",
    icon: "🏆",
    color: "var(--color-deep)",
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

const PAS = [
  {
    type: "PROBLEM",
    colorClass: "text-magenta-bold",
    bg: "bg-[rgba(209,0,113,0.04)]",
    border: "border-[rgba(209,0,113,0.15)]",
    icon: "😟",
    title: "Tantangan Lembaga",
    desc: "Mengantarkan lulusan dengan bacaan & hafalan Al-Qur'an yang bagus dan merata tidak mudah. Banyak lembaga bingung bagaimana membangun standar mutu dan sistem manajemennya.",
  },
  {
    type: "AGITATION",
    colorClass: "text-tangerine",
    bg: "bg-[rgba(255,123,0,0.04)]",
    border: "border-[rgba(255,123,0,0.15)]",
    icon: "⚠️",
    title: "Akibatnya...",
    desc: "Orang tua semakin selektif. Tanpa bukti nyata kualitas lulusan, mereka beralih ke lembaga lain. Persaingan semakin ketat, sementara ekspektasi terus meningkat.",
  },
  {
    type: "SOLUTION",
    colorClass: "text-emerald",
    bg: "bg-[rgba(31,129,36,0.04)]",
    border: "border-[rgba(31,129,36,0.15)]",
    icon: "✅",
    title: "Solusi Wafa",
    desc: "Sistem 7M Wafa hadir sebagai solusi lengkap: standarisasi guru, pemetaan siswa, coaching koordinator, supervisi berkala — semua terukur dan berdampak nyata.",
  },
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
      <section className="section-padding relative overflow-hidden bg-section-magenta-emerald">
        <div className="blob-magenta absolute -left-40 -top-32 h-[500px] w-[500px] opacity-30" />
        <div className="blob-emerald absolute right-0 bottom-0 h-96 w-96 opacity-20" />
        <div className="page-wrap relative z-10 text-center">
          <Badge color="magenta">Program Kemitraan</Badge>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-5 leading-tight">
            Jadikan Lembaga Anda{" "}
            <span className="gradient-text">Pilihan Utama</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-text-secondary mb-8">
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
                <p className="m-0 font-heading text-2xl font-bold text-magenta-bold">
                  {s.label}
                </p>
                <p className="m-0 text-xs text-text-secondary">
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
            {PAS.map((item) => (
              <div
                key={item.type}
                className={`rounded-3xl border-[1.5px] ${item.border} ${item.bg} p-7`}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className={`m-0 font-heading text-xs font-bold uppercase tracking-widest mb-2 ${item.colorClass}`}>
                  {item.type}
                </p>
                <h3 className="font-heading text-base font-bold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alur Bermitra */}
      <section className="section-padding bg-section-emerald-fade">
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
                <div className="surface-card rounded-3xl p-7 h-full card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{a.icon}</span>
                    <span
                      className="font-heading text-xs font-bold"
                      style={{ color: a.color }}
                    >
                      {a.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-text-primary mb-2">
                    {a.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary mb-4">
                    {a.desc}
                  </p>
                  <span
                    className="inline-flex items-center font-heading text-xs font-semibold rounded-full px-3 py-1"
                    style={{
                      background: `${a.color}12`,
                      color: a.color,
                    }}
                  >
                    ⏱ {a.duration}
                  </span>
                </div>
                {i < ALUR.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-6 w-6 items-center justify-center rounded-full bg-white border border-line">
                    <ChevronRight className="h-3 w-3 text-text-secondary" />
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
                className="surface-card rounded-3xl p-7 card-hover"
              >
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-heading text-base font-bold text-text-primary mb-1">
                  {c.lembaga}
                </h3>
                <p className="font-heading text-xs font-semibold text-magenta-bold mb-3">
                  {c.tahun}
                </p>
                <p className="text-sm leading-relaxed text-text-secondary mb-5">
                  {c.desc}
                </p>
                <div className="flex items-center gap-2 rounded-2xl p-3 bg-[rgba(31,129,36,0.06)] border border-[rgba(31,129,36,0.15)]">
                  <TrendingUp className="h-4 w-4 flex-shrink-0 text-emerald" />
                  <p className="m-0 font-heading text-xs font-bold text-emerald">
                    {c.metric}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section id="paket" className="section-padding bg-section-deep-fade">
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
                className={`rounded-3xl p-7 flex flex-col transition-all ${
                  pkg.highlight
                    ? "surface-pricing-highlight scale-[1.03] text-white"
                    : "surface-card card-hover"
                }`}
              >
                {pkg.badge && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1 font-heading text-xs font-bold rounded-full px-3 py-1 bg-white/20 text-white">
                      <Star className="h-3 w-3" fill="currentColor" />
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <h3 className={`font-heading text-xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-text-primary"}`}>
                  {pkg.name}
                </h3>
                <p className={`font-heading text-3xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-magenta-bold"}`}>
                  Rp{(pkg.price / 1_000_000).toFixed(0)} jt
                </p>
                <p className={`text-xs mb-6 ${pkg.highlight ? "text-white/70" : "text-text-secondary"}`}>
                  Bisa dicicil 3–6 kali
                </p>
                <div className="flex-1 space-y-2.5 mb-6">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckCircle
                        className={`h-4 w-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white/90" : "text-emerald"}`}
                      />
                      <span className={`text-sm ${pkg.highlight ? "text-white/90" : "text-text-secondary"}`}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#konsultasi"
                  className={`w-full flex items-center justify-center gap-2 font-heading text-sm font-semibold rounded-full py-3 no-underline transition-all ${
                    pkg.highlight
                      ? "bg-white text-magenta-bold shadow-[0_4px_16px_rgba(255,255,255,0.3)]"
                      : "bg-gradient-primary text-white shadow-[0_4px_16px_rgba(209,0,113,0.3)]"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-text-secondary">
            Semua paket sudah termasuk PPn. Harga dapat berbeda berdasarkan
            lokasi dan kebutuhan khusus.{" "}
            <a
              href="https://wa.me/6281130589310"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-magenta-bold"
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
            <div className="surface-card-elevated rounded-3xl p-12 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
                Jazakallah Khair!
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                Formulir konsultasi Anda berhasil dikirim. Tim Wafa akan
                menghubungi Anda dalam 1×24 jam kerja.
              </p>
              <p className="text-sm font-semibold text-text-secondary">
                Atau hubungi langsung:{" "}
                <a
                  href="https://wa.me/6281130589310"
                  target="_blank"
                  rel="noreferrer"
                  className="text-magenta-bold no-underline"
                >
                  0811 3058 9310
                </a>
              </p>
            </div>
          ) : (
            <div className="surface-card-elevated rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Nama Lembaga *</label>
                    <input
                      type="text"
                      name="namaLembaga"
                      value={formData.namaLembaga}
                      onChange={handleChange}
                      required
                      placeholder="SDI / MI / SMP / Pesantren..."
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Jenis Lembaga *</label>
                    <select
                      name="jenis"
                      value={formData.jenis}
                      onChange={handleChange}
                      required
                      className={`form-select ${formData.jenis ? "text-text-primary" : "text-text-secondary"}`}
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
                    <label className="form-label">Kota / Kabupaten *</label>
                    <input
                      type="text"
                      name="kota"
                      value={formData.kota}
                      onChange={handleChange}
                      required
                      placeholder="Surabaya, Bandung, ..."
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Jumlah Siswa</label>
                    <input
                      type="number"
                      name="jumlahSiswa"
                      value={formData.jumlahSiswa}
                      onChange={handleChange}
                      placeholder="Perkiraan jumlah siswa"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Nama PIC / Kontak *</label>
                    <input
                      type="text"
                      name="namaKontak"
                      value={formData.namaKontak}
                      onChange={handleChange}
                      required
                      placeholder="Nama Anda"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">No. WhatsApp *</label>
                    <input
                      type="tel"
                      name="telpon"
                      value={formData.telpon}
                      onChange={handleChange}
                      required
                      placeholder="08xx-xxxx-xxxx"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">
                    Kendala yang Dihadapi Saat Ini
                  </label>
                  <textarea
                    name="kendala"
                    value={formData.kendala}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Ceritakan tantangan atau kebutuhan lembaga Anda terkait pembelajaran Al-Qur'an..."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-4"
                >
                  <Building className="h-4 w-4" />
                  Kirim Formulir Konsultasi
                </button>

                <div className="text-center">
                  <p className="text-xs text-text-secondary">
                    Atau langsung hubungi via WhatsApp:{" "}
                    <a
                      href="https://wa.me/6281130589310"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-magenta-bold no-underline"
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
