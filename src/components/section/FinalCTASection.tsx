import { Smartphone, School, Download, MessageCircle } from "lucide-react";
import { Accordion } from "../ui/Accordion";
import { SectionHeading } from "../ui/SectionHeading";
import { FAQ_ITEMS } from "../../data/content.ts";

export function FinalCTASection() {
  return (
    <section
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, rgba(75,42,103,0.03) 0%, rgba(209,0,113,0.02) 100%)",
      }}
    >
      <div className="page-wrap">
        <SectionHeading
          kicker="Mulai Hari Ini"
          title="Siap Memulai Perjalanan Al-Qur'an?"
          subtitle="Bergabunglah bersama 500.000+ siswa dan 15.000+ guru yang sudah merasakan manfaat Metode Wafa."
          align="center"
          className="mb-10"
        />

        {/* CTA cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Download App */}
          <div
            className="rounded-3xl p-8 flex flex-col transition-all card-hover"
            style={{
              background:
                "linear-gradient(135deg, rgba(209,0,113,0.06), rgba(157,22,124,0.04))",
              border: "1.5px solid rgba(209,0,113,0.2)",
              boxShadow: "0 20px 60px rgba(209,0,113,0.08)",
            }}
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-white mb-5"
              style={{
                background:
                  "linear-gradient(135deg, var(--magenta-bold), var(--magenta-deep))",
                boxShadow: "0 8px 24px rgba(209,0,113,0.35)",
              }}
            >
              <Smartphone className="h-6 w-6" />
            </div>
            <h3
              className="text-xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              Download Aplikasi Wafa
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{ color: "var(--text-secondary)" }}
            >
              Mulai belajar Al-Qur'an hari ini — gratis untuk 6 halaman pertama.
              Audio makhraj interaktif, irama Hijaz, dan quiz-game seru dalam
              satu aplikasi.
            </p>
            <div className="space-y-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.wafaindonesia"
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full justify-center no-underline"
              >
                <Download className="h-4 w-4" />
                Download di Google Play
              </a>
              <p
                className="text-xs text-center"
                style={{ color: "var(--text-secondary)" }}
              >
                ★★★★★ 4.9 · 10.000+ ulasan · Gratis
              </p>
            </div>
          </div>

          {/* Jadi Mitra */}
          <div
            className="rounded-3xl p-8 flex flex-col transition-all card-hover"
            style={{
              background:
                "linear-gradient(135deg, rgba(31,129,36,0.06), rgba(73,216,80,0.03))",
              border: "1.5px solid rgba(31,129,36,0.2)",
              boxShadow: "0 20px 60px rgba(31,129,36,0.08)",
            }}
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-white mb-5"
              style={{
                background:
                  "linear-gradient(135deg, var(--emerald), var(--fresh))",
                boxShadow: "0 8px 24px rgba(31,129,36,0.35)",
              }}
            >
              <School className="h-6 w-6" />
            </div>
            <h3
              className="text-xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              Jadikan Lembaga Anda Mitra Wafa
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{ color: "var(--text-secondary)" }}
            >
              Dapatkan pendampingan implementasi 7M, standarisasi guru,
              supervisi berkala, dan program lengkap untuk meningkatkan mutu
              pembelajaran Al-Qur'an di lembaga Anda.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/6281130589310"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white no-underline transition-all hover:-translate-y-0.5"
                style={{
                  fontFamily: "var(--font-heading)",
                  background:
                    "linear-gradient(135deg, var(--emerald), var(--fresh))",
                  boxShadow: "0 4px 20px rgba(31,129,36,0.3)",
                }}
              >
                <MessageCircle className="h-4 w-4" />
                Konsultasi Gratis — 0811 3058 9310
              </a>
              <p
                className="text-xs text-center"
                style={{ color: "var(--text-secondary)" }}
              >
                Respon dalam 1×24 jam · Tidak ada komitmen
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            kicker="Pertanyaan Umum"
            title="Pertanyaan yang Sering Ditanyakan"
            align="center"
            className="mb-8"
          />
          <Accordion items={FAQ_ITEMS} multi={false} />

          <p
            className="text-center text-sm mt-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Masih ada pertanyaan?{" "}
            <a
              href="https://wa.me/6281130589310"
              target="_blank"
              rel="noreferrer"
              className="font-semibold"
              style={{ color: "var(--magenta-bold)" }}
            >
              Chat langsung dengan tim Wafa →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
