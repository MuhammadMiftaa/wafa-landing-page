import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Music,
  Award,
  BookOpen,
  Shield,
  ArrowRight,
} from "lucide-react";
import { SectionHeading, Badge, TabGroup } from "../components/ui/index.ts";
import { FIVE_T, SEVEN_M } from "../data/content.ts";

export const Route = createFileRoute("/metode")({ component: MetodePage });

function MetodePage() {
  const [activeT, setActiveT] = useState(0);

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
          className="pointer-events-none absolute -left-40 -top-20 h-96 w-96 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle,rgba(209,0,113,0.14),transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle,rgba(31,129,36,0.12),transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div className="page-wrap relative z-10 text-center">
          <Badge color="magenta">Metode Pembelajaran</Badge>
          <h1
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            Sistem Pembelajaran{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,var(--magenta-bold),var(--emerald))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Al-Qur'an Terintegrasi
            </span>
          </h1>
          <p
            className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Dari membaca pertama hingga menjadi ahli Qur'ani — sistem 5T dan 7M
            Wafa dirancang untuk memastikan setiap peserta didik mencapai
            potensi terbaiknya.
          </p>
          {/* Anchor nav */}
          <nav className="flex flex-wrap justify-center gap-3">
            {[
              {
                href: "#5t",
                label: "5T Pendidikan",
                icon: <BookOpen className="h-4 w-4" />,
              },
              {
                href: "#7m",
                label: "7M Sistem Mutu",
                icon: <Shield className="h-4 w-4" />,
              },
              {
                href: "#otak-kanan",
                label: "Otak Kanan",
                icon: <Brain className="h-4 w-4" />,
              },
              {
                href: "#hijaz",
                label: "Irama Hijaz",
                icon: <Music className="h-4 w-4" />,
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold no-underline transition-all hover:border-[rgba(209,0,113,0.3)] hover:text-[var(--magenta-bold)]"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* 5T Section */}
      <section id="5t" className="section-padding">
        <div className="page-wrap">
          <SectionHeading
            kicker="5T Pendidikan Al-Qur'an"
            title="5 Dimensi Interaksi dengan Al-Qur'an"
            subtitle="Wafa memastikan peserta didik tidak hanya sekedar bisa mengaji, melainkan mampu membumikan Al-Qur'an dalam seluruh aspek kehidupan."
            className="mb-12"
          />

          {/* Interactive 5T tabs */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Tab pills */}
            <div className="space-y-3">
              {FIVE_T.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveT(i)}
                  className="w-full flex items-center gap-4 rounded-2xl p-5 text-left transition-all"
                  style={{
                    background: activeT === i ? t.bg : "white",
                    border: `1.5px solid ${activeT === i ? t.color + "40" : "var(--line)"}`,
                    boxShadow:
                      activeT === i ? `0 8px 24px ${t.color}15` : "none",
                  }}
                >
                  <span
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-2xl"
                    style={{ background: t.bg }}
                  >
                    {t.icon}
                  </span>
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: activeT === i ? t.color : "var(--text-primary)",
                      }}
                    >
                      {t.key}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {t.title}
                    </p>
                  </div>
                  <div
                    className="ml-auto"
                    style={{
                      color: t.color,
                      opacity: activeT === i ? 1 : 0,
                      transition: "opacity 200ms",
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Detail */}
            <div className="lg:sticky lg:top-28">
              {FIVE_T[activeT] && (
                <div
                  key={activeT}
                  className="rounded-3xl p-8"
                  style={{
                    background: FIVE_T[activeT].bg,
                    border: `1.5px solid ${FIVE_T[activeT].color}30`,
                    animation: "fade-in 300ms ease both",
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="flex h-16 w-16 items-center justify-center rounded-2xl text-4xl"
                      style={{ background: "white" }}
                    >
                      {FIVE_T[activeT].icon}
                    </span>
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{
                          color: FIVE_T[activeT].color,
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {FIVE_T[activeT].key}
                      </p>
                      <h3
                        className="text-xl font-bold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {FIVE_T[activeT].title}
                      </h3>
                    </div>
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {FIVE_T[activeT].desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/mitra"
                      className="btn-primary no-underline text-sm py-2.5 px-5"
                    >
                      Terapkan di Lembaga Anda
                    </a>
                    <a
                      href="/layanan"
                      className="btn-ghost no-underline text-sm py-2.5 px-5"
                    >
                      Lihat Program
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7M Section */}
      <section
        id="7m"
        className="section-padding"
        style={{
          background:
            "linear-gradient(180deg,rgba(31,129,36,0.03) 0%,transparent 100%)",
        }}
      >
        <div className="page-wrap">
          <SectionHeading
            kicker="7M Sistem Manajemen Mutu"
            title="Standar Mutu dari Guru hingga Siswa"
            subtitle="7 tahapan terstruktur yang memastikan kualitas pembelajaran Al-Qur'an konsisten dan terukur di setiap lembaga mitra."
            align="center"
            className="mb-12"
          />

          <div className="relative">
            <div
              className="hidden lg:block absolute left-[calc(50%-1px)] top-8 bottom-8 w-0.5"
              style={{
                background:
                  "linear-gradient(to bottom, var(--magenta-bold), var(--emerald))",
              }}
            />
            <div className="space-y-6">
              {SEVEN_M.map((m, i) => (
                <div
                  key={m.step}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 w-full">
                    <div
                      className="rounded-3xl p-7 transition-all card-hover"
                      style={{
                        background: "white",
                        border: "1px solid var(--line)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{m.icon}</span>
                        <span
                          className="text-xs font-bold uppercase tracking-widest"
                          style={{
                            color: m.color,
                            fontFamily: "var(--font-heading)",
                          }}
                        >
                          {m.step}
                        </span>
                      </div>
                      <h3
                        className="font-bold text-lg mb-2"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {m.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div
                    className="hidden lg:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-white text-sm font-bold z-10"
                    style={{
                      background: m.color,
                      fontFamily: "var(--font-heading)",
                      boxShadow: `0 4px 16px ${m.color}40`,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 w-full hidden lg:block" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/mitra" className="btn-primary no-underline">
              Ingin Terapkan 7M di Lembaga Anda?{" "}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Otak Kanan */}
      <section id="otak-kanan" className="section-padding">
        <div className="page-wrap">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                kicker="Metode Otak Kanan"
                title="Belajar dengan Cara yang Otak Sukai"
                subtitle="Salah satu penyebab utama siswa malas belajar Al-Qur'an adalah materi yang sulit dan cara mengajar yang membosankan. Wafa mengubah itu semua."
              />
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: "🎨",
                    title: "Visual & Warna",
                    desc: "Materi disajikan dengan gambar menarik dan warna cerah yang mudah diingat otak kanan.",
                  },
                  {
                    icon: "🎵",
                    title: "Melodi & Irama",
                    desc: "Irama Hijaz 3 nada membuat hafalan lebih mudah dan menyenangkan.",
                  },
                  {
                    icon: "📖",
                    title: "Cerita & Emosi",
                    desc: "Konten dikaitkan dengan cerita yang membangkitkan emosi positif dan rasa ingin tahu.",
                  },
                  {
                    icon: "🎮",
                    title: "Gamifikasi",
                    desc: "Evaluasi mandiri melalui quiz-game yang seru sehingga belajar terasa seperti bermain.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl p-4"
                    style={{
                      background: "white",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p
                        className="font-bold text-sm"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "85%",
                  label: "Retensi Materi",
                  desc: "vs metode konvensional",
                  color: "var(--magenta-bold)",
                },
                {
                  value: "3x",
                  label: "Lebih Cepat",
                  desc: "dalam menguasai tilawah",
                  color: "var(--emerald)",
                },
                {
                  value: "40%",
                  label: "Lebih Sedikit",
                  desc: "tingkat stres belajar",
                  color: "var(--golden)",
                },
                {
                  value: "90%",
                  label: "Tingkat Kepuasan",
                  desc: "guru dan orang tua",
                  color: "var(--deep)",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl p-7 text-center transition-all card-hover"
                  style={{
                    background: "white",
                    border: "1px solid var(--line)",
                  }}
                >
                  <p
                    className="text-4xl font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: stat.color,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-bold text-sm"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {stat.desc}
                  </p>
                  <p
                    className="text-[10px] mt-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    *Riset internal Wafa 2012–2026
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Irama Hijaz */}
      <section
        id="hijaz"
        className="section-padding"
        style={{
          background:
            "linear-gradient(180deg,rgba(75,42,103,0.03) 0%,transparent 100%)",
        }}
      >
        <div className="page-wrap">
          <SectionHeading
            kicker="Irama Hijaz Wafa"
            title="Tilawah yang Syahdu & Mudah Ditiru"
            subtitle="Wafa memiliki ciri khas lagu Hijaz 3 nada yang mudah ditirukan oleh guru dan siswa serta syahdu didengar — menjadikan setiap sesi mengaji pengalaman yang dinantikan."
            align="center"
            className="mb-12"
          />

          {/* Audio placeholder */}
          <div
            className="max-w-2xl mx-auto rounded-3xl p-8 mb-10"
            style={{
              background: "white",
              border: "1.5px solid rgba(75,42,103,0.2)",
              boxShadow: "0 20px 60px rgba(75,42,103,0.08)",
            }}
          >
            <p
              className="font-bold text-sm mb-6 text-center"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              🎵 Preview Irama Hijaz Wafa
            </p>
            <div
              className="rounded-2xl p-6 text-center"
              style={{
                background:
                  "linear-gradient(135deg,rgba(75,42,103,0.06),rgba(209,0,113,0.04))",
              }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  type="button"
                  className="flex h-14 w-14 items-center justify-center rounded-full text-white transition-all hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg,var(--magenta-bold),var(--deep))",
                    boxShadow: "0 8px 24px rgba(209,0,113,0.35)",
                  }}
                >
                  <Music className="h-6 w-6" />
                </button>
                <div className="flex-1">
                  <p
                    className="font-semibold text-sm"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Lagu Pengantar Iqro
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Nada Hijaz 3 Nada · Wafa Indonesia
                  </p>
                </div>
              </div>
              {/* Waveform placeholder */}
              <div className="flex items-end justify-center gap-1 h-12">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full transition-all"
                    style={{
                      width: "4px",
                      height: `${20 + Math.sin(i * 0.8) * 16 + Math.random() * 8}px`,
                      background: `rgba(209,0,113,${0.3 + (i % 4) * 0.15})`,
                    }}
                  />
                ))}
              </div>
              <p
                className="text-xs mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Audio preview tersedia di Aplikasi Wafa
              </p>
            </div>
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                nama: "Bayati",
                desc: "Umum digunakan, namun kurang konsisten sehingga susah distandarisasi",
                suitable: false,
              },
              {
                nama: "Hijaz Wafa",
                desc: "Syahdu, mudah ditirukan, dan bisa distandarisasi untuk semua jenjang usia",
                suitable: true,
              },
              {
                nama: "Nahawand",
                desc: "Indah namun lebih kompleks, membutuhkan teknik vokal yang lebih tinggi",
                suitable: false,
              },
            ].map((item) => (
              <div
                key={item.nama}
                className="rounded-3xl p-6 text-center transition-all card-hover"
                style={{
                  background: item.suitable
                    ? "linear-gradient(135deg,rgba(209,0,113,0.06),rgba(75,42,103,0.04))"
                    : "white",
                  border: `1.5px solid ${item.suitable ? "rgba(209,0,113,0.2)" : "var(--line)"}`,
                  boxShadow: item.suitable
                    ? "0 12px 40px rgba(209,0,113,0.1)"
                    : "none",
                }}
              >
                <p
                  className="font-bold text-base mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: item.suitable
                      ? "var(--magenta-bold)"
                      : "var(--text-primary)",
                  }}
                >
                  {item.suitable && "⭐ "}
                  {item.nama}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.desc}
                </p>
                {item.suitable && (
                  <span
                    className="mt-3 inline-block text-xs font-bold rounded-full px-3 py-1"
                    style={{
                      background: "rgba(209,0,113,0.1)",
                      color: "var(--magenta-bold)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Digunakan Wafa
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legalitas */}
      <section className="section-padding">
        <div className="page-wrap">
          <SectionHeading
            kicker="Legalitas & Sertifikasi"
            title="Diakui Resmi oleh Pemerintah"
            subtitle="Wafa Indonesia memiliki legalitas lengkap dan telah mendapatkan tanda tashih dari Kementerian Agama RI."
            align="center"
            className="mb-10"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {[
              {
                icon: "🏛️",
                label: "YAQIN",
                no: "AHU-0000170.AH.01.12.2022",
                color: "var(--magenta-bold)",
              },
              {
                icon: "⚖️",
                label: "Kemenkumham RI",
                no: "Badan Hukum 2022",
                color: "var(--deep)",
              },
              {
                icon: "☪️",
                label: "Kemenag RI",
                no: "Majelis Ta'lim 2022",
                color: "var(--emerald)",
              },
              {
                icon: "✅",
                label: "Tashih LPMQ",
                no: "28 Oktober 2023",
                color: "var(--golden)",
              },
            ].map((l) => (
              <div
                key={l.label}
                className="rounded-3xl p-5 text-center transition-all card-hover"
                style={{ background: "white", border: "1px solid var(--line)" }}
              >
                <div className="text-3xl mb-3">{l.icon}</div>
                <p
                  className="m-0 font-bold text-xs"
                  style={{ fontFamily: "var(--font-heading)", color: l.color }}
                >
                  {l.label}
                </p>
                <p
                  className="m-0 text-[10px] mt-1 leading-snug"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {l.no}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
