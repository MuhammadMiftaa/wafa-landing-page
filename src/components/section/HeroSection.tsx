import { useState, useEffect } from "react";
import { ArrowRight, Play, Download } from "lucide-react";
import { CountUp } from "../ui/CountUp";
import { useScrollReveal, revealProps } from "../ui/useScrollReveal.ts";

const TYPING_WORDS = ["Mudah", "Cepat", "Menyenangkan", "Berkah"];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });

  // Typing animation
  useEffect(() => {
    const current = TYPING_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <section className="relative overflow-hidden py-20 min-h-[90vh] flex items-center">
      {/* Decorative blobs */}
      <div className="hero-blob-magenta absolute -left-40 -top-40 h-[600px] w-[600px] opacity-40 animate-float-slow" />
      <div className="hero-blob-emerald absolute -right-40 top-20 h-[500px] w-[500px] opacity-30 animate-float" />
      <div className="blob-deep absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[800px] opacity-20" />

      <div className="page-wrap relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div ref={ref}>
            {/* Trust badge */}
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 font-heading text-xs font-semibold bg-[rgba(31,129,36,0.08)] border border-[rgba(31,129,36,0.2)] text-emerald ${revealProps(visible, 0).className}`}
              style={revealProps(visible, 0).style}
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald" />
              15.000+ Guru Tersertifikasi · 35 Provinsi
            </div>

            <h1
              className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary mb-6 ${revealProps(visible, 100).className}`}
              style={revealProps(visible, 100).style}
            >
              Belajar Al-Qur'an Jadi{" "}
              <span className="gradient-text-magenta inline-block min-w-[200px]">
                {displayed}
                <span className="cursor-blink ml-0.5 [-webkit-text-fill-color:var(--color-magenta-bold)]">
                  |
                </span>
              </span>
            </h1>

            {/* Hidden H1 for SEO */}
            <h1 className="sr-only">
              Belajar Al-Qur'an Metode Otak Kanan Terbaik di Indonesia
            </h1>

            <p
              className={`text-base md:text-lg leading-relaxed text-text-secondary mb-8 max-w-lg ${revealProps(visible, 200).className}`}
              style={revealProps(visible, 200).style}
            >
              Metode Otak Kanan + Irama Hijaz + Sistem 7M — terbukti melahirkan
              <strong className="text-text-primary">
                {" "}
                15.000+ guru
              </strong>{" "}
              &
              <strong className="text-text-primary">
                {" "}
                1200+ lembaga
              </strong>{" "}
              di 35 provinsi Indonesia.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 mb-10 ${revealProps(visible, 300).className}`}
              style={revealProps(visible, 300).style}
            >
              <a href="/layanan" className="btn-primary btn-pulse no-underline">
                Mulai Perjalanan
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wafaindonesia"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary no-underline"
              >
                <Play className="h-4 w-4" fill="currentColor" />
                Lihat Demo Aplikasi
              </a>
            </div>

            {/* Social proof row */}
            <div
              className={`flex flex-wrap gap-6 ${revealProps(visible, 400).className}`}
              style={revealProps(visible, 400).style}
            >
              {[
                { end: 35, suffix: " Prov", label: "Provinsi", icon: "🗺️" },
                {
                  end: 15000,
                  suffix: "+",
                  label: "Guru Tersertifikasi",
                  icon: "👨‍🏫",
                },
                { end: 500000, suffix: "+", label: "Siswa", icon: "👧" },
                { end: 14, suffix: " Thn", label: "Pengalaman", icon: "🕌" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center gap-1">
                    <span className="text-sm">{stat.icon}</span>
                    <span className="font-heading text-xl font-bold text-magenta-bold">
                      <CountUp
                        end={stat.end}
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    </span>
                  </div>
                  <p className="m-0 text-xs text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div
            className={`relative flex items-center justify-center ${revealProps(visible, 200).className}`}
            style={revealProps(visible, 200).style}
          >
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
        </div>
      </div>
    </section>
  );
}
