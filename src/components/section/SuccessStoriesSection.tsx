import { Play, TrendingUp, ArrowRight, Quote } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { useScrollReveal, revealProps } from "../ui/useScrollReveal.ts";

const STORIES = [
  {
    type: "video",
    title: "Prof. Dr. H. M. Roem Rowi, M.A.",
    subtitle: "Da'i & Ahli Tafsir Al-Qur'an",
    quote: 'Lembaga Wafa sesuai artinya "setia", setia dengan Al-Qur\'an.',
    emoji: "🎥",
    bg: "bg-gradient-to-br from-[rgba(75,42,103,0.08)] to-[rgba(209,0,113,0.05)]",
    border: "border-[rgba(75,42,103,0.2)]",
    colorClass: "text-deep",
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    type: "achievement",
    title: "Gibran Alfatih Panjaitan",
    subtitle: "Juara 1 Hafiz Indonesia 2024",
    quote:
      "Murid Al Amjad Medan — mitra Wafa sejak 2018 — memukau juri dengan irama Hijaz.",
    emoji: "🥇",
    bg: "bg-gradient-to-br from-[rgba(255,145,0,0.08)] to-[rgba(255,182,19,0.05)]",
    border: "border-[rgba(255,145,0,0.2)]",
    colorClass: "text-golden",
    span: "lg:col-span-1",
  },
  {
    type: "stat",
    title: "Kenaikan Minat Mengaji",
    subtitle: "Data internal mitra Wafa 2024",
    quote:
      "500% kenaikan minat mengaji di lembaga yang menerapkan metode Otak Kanan Wafa.",
    emoji: "📈",
    bg: "bg-gradient-to-br from-[rgba(31,129,36,0.08)] to-[rgba(73,216,80,0.05)]",
    border: "border-[rgba(31,129,36,0.2)]",
    colorClass: "text-emerald",
    span: "lg:col-span-1",
  },
  {
    type: "event",
    title: "10 Tahun NUFI Sidoarjo",
    subtitle: "Up-Grading Kompetensi 2025",
    quote:
      "500+ siswa tahfidz, guru mandiri menyelenggarakan upgrading kompetensi setelah 10 tahun bermitra.",
    emoji: "🏫",
    bg: "bg-gradient-to-br from-[rgba(209,0,113,0.06)] to-[rgba(157,22,124,0.03)]",
    border: "border-[rgba(209,0,113,0.15)]",
    colorClass: "text-magenta-bold",
    span: "lg:col-span-2",
  },
  {
    type: "quote",
    title: "Hj. Nurfitriana Busyro Karim",
    subtitle: "Ibu Bupati Sumenep",
    quote:
      "Kami sangat senang dengan Metode Wafa. Caranya sangat menyenangkan & sangat mudah dimengerti.",
    emoji: "💬",
    bg: "bg-gradient-to-br from-[rgba(255,123,0,0.07)] to-[rgba(255,145,0,0.04)]",
    border: "border-[rgba(255,123,0,0.15)]",
    colorClass: "text-tangerine",
    span: "lg:col-span-1",
  },
  {
    type: "event",
    title: "Supervisi Bojonegoro 2026",
    subtitle: "Menjaga Standar Keunggulan",
    quote:
      "Supervisi berkala memastikan mutu pembelajaran tetap konsisten — 12 guru, 1 sesi intensif.",
    emoji: "✅",
    bg: "bg-gradient-to-br from-[rgba(75,42,103,0.06)] to-[rgba(31,129,36,0.04)]",
    border: "border-[rgba(75,42,103,0.12)]",
    colorClass: "text-deep",
    span: "lg:col-span-1",
  },
];

function StoryCard({ story }: { story: (typeof STORIES)[0] }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.2 });
  const rp = revealProps(visible);

  return (
    <div
      ref={ref}
      className={`${story.span} rounded-3xl border-[1.5px] ${story.border} ${story.bg} p-7 card-hover relative overflow-hidden ${rp.className}`}
      style={rp.style}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{story.emoji}</div>
        {story.type === "video" && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-magenta-bold text-white cursor-pointer transition-all hover:scale-110 shadow-[0_4px_16px_rgba(209,0,113,0.35)]">
            <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
          </div>
        )}
        {story.type === "stat" && (
          <TrendingUp className={`h-5 w-5 ${story.colorClass}`} />
        )}
        {story.type === "quote" && (
          <Quote className={`h-5 w-5 ${story.colorClass}`} />
        )}
      </div>

      <h3 className="font-heading text-sm font-bold leading-snug text-text-primary mb-1">
        {story.title}
      </h3>
      <p className={`font-heading text-xs font-semibold mb-3 ${story.colorClass}`}>
        {story.subtitle}
      </p>
      <p className="text-sm leading-relaxed text-text-secondary">
        "{story.quote}"
      </p>
    </div>
  );
}

export function SuccessStoriesSection() {
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });
  const rp = revealProps(visible);

  return (
    <section className="section-padding">
      <div className="page-wrap">
        <div ref={ref} className={rp.className} style={rp.style}>
          <SectionHeading
            kicker="Bukti Nyata"
            title="Ribuan Kisah, Satu Tujuan"
            subtitle="Dari anak TK yang mulai mengeja huruf hijaiyah hingga hafidz juara nasional — setiap kisah adalah bukti nyata metode Wafa yang terbukti efektif."
            className="mb-10"
          />
        </div>

        {/* Masonry-style grid */}
        <div className="grid lg:grid-cols-3 gap-5 auto-rows-auto">
          {STORIES.map((story, i) => (
            <StoryCard key={i} story={story} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="/blog" className="btn-ghost no-underline">
            Lihat Semua Cerita di Blog
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
