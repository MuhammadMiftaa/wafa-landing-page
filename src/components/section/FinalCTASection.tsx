import { Smartphone, School, Download, MessageCircle } from "lucide-react";
import { Accordion } from "../ui/Accordion";
import { SectionHeading } from "../ui/SectionHeading";
import { FAQ_ITEMS } from "../../data/content.ts";

export function FinalCTASection() {
  return (
    <section className="section-padding bg-gradient-to-b from-[rgba(75,42,103,0.03)] to-[rgba(209,0,113,0.02)]">
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
          <div className="rounded-3xl border-[1.5px] border-[rgba(209,0,113,0.2)] bg-gradient-to-br from-[rgba(209,0,113,0.06)] to-[rgba(157,22,124,0.04)] p-8 flex flex-col card-hover shadow-[0_20px_60px_rgba(209,0,113,0.08)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white mb-5 bg-gradient-primary shadow-[0_8px_24px_rgba(209,0,113,0.35)]">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-text-primary mb-3">
              Download Aplikasi Wafa
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary mb-6 flex-1">
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
              <p className="text-xs text-center text-text-secondary">
                ★★★★★ 4.9 · 10.000+ ulasan · Gratis
              </p>
            </div>
          </div>

          {/* Jadi Mitra */}
          <div className="rounded-3xl border-[1.5px] border-[rgba(31,129,36,0.2)] bg-gradient-to-br from-[rgba(31,129,36,0.06)] to-[rgba(73,216,80,0.03)] p-8 flex flex-col card-hover shadow-[0_20px_60px_rgba(31,129,36,0.08)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white mb-5 bg-gradient-to-br from-emerald to-fresh shadow-[0_8px_24px_rgba(31,129,36,0.35)]">
              <School className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-text-primary mb-3">
              Jadikan Lembaga Anda Mitra Wafa
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary mb-6 flex-1">
              Dapatkan pendampingan implementasi 7M, standarisasi guru,
              supervisi berkala, dan program lengkap untuk meningkatkan mutu
              pembelajaran Al-Qur'an di lembaga Anda.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/6281130589310"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full font-heading py-3 text-sm font-semibold text-white no-underline transition-all hover:-translate-y-0.5 bg-gradient-to-br from-emerald to-fresh shadow-[0_4px_20px_rgba(31,129,36,0.3)]"
              >
                <MessageCircle className="h-4 w-4" />
                Konsultasi Gratis — 0811 3058 9310
              </a>
              <p className="text-xs text-center text-text-secondary">
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

          <p className="text-center text-sm mt-6 text-text-secondary">
            Masih ada pertanyaan?{" "}
            <a
              href="https://wa.me/6281130589310"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-magenta-bold"
            >
              Chat langsung dengan tim Wafa →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
