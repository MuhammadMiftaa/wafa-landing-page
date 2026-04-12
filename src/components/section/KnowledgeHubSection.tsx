import { Clock, ArrowRight, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "../ui/SectionHeading";
import { ARTICLES } from "../../data/content.ts";

const CATEGORY_COLORS: Record<string, { colorClass: string; bg: string }> = {
  "Risalah Dakwah": {
    colorClass: "text-magenta-bold",
    bg: "bg-[rgba(209,0,113,0.08)]",
  },
  "Ikhtisar Wafa": { colorClass: "text-emerald", bg: "bg-[rgba(31,129,36,0.08)]" },
  "Info Terkini": { colorClass: "text-golden", bg: "bg-[rgba(255,145,0,0.08)]" },
  "Parenting Qur'ani": { colorClass: "text-deep", bg: "bg-[rgba(75,42,103,0.08)]" },
};

const CATEGORY_EMOJI: Record<string, string> = {
  "Risalah Dakwah": "🕌",
  "Ikhtisar Wafa": "📖",
  "Info Terkini": "📰",
  "Parenting Qur'ani": "👨‍👩‍👧",
};

const YOUTUBE_VIDEOS = [
  {
    title: "Cara Mengajar Al-Qur'an dengan Metode Otak Kanan",
    duration: "12:34",
    emoji: "🎬",
  },
  {
    title: "Tips Hafalan Cepat untuk Anak dengan Irama Hijaz",
    duration: "8:52",
    emoji: "🎵",
  },
  {
    title: "Testimoni 10 Tahun NUFI Sidoarjo bersama Wafa",
    duration: "15:20",
    emoji: "🏫",
  },
];

export function KnowledgeHubSection() {
  const risalah = ARTICLES.filter((a) => a.category === "Risalah Dakwah").slice(
    0,
    3,
  );
  const infoTerkini = ARTICLES.filter(
    (a) => a.category === "Info Terkini",
  ).slice(0, 3);

  return (
    <section className="section-padding bg-section-deep-fade">
      <div className="page-wrap">
        <SectionHeading
          kicker="Risalah & Inspirasi"
          title="Belajar, Berbagi, Berkembang"
          subtitle="Artikel terbaru, berita kegiatan, dan video inspiratif dari perjalanan Wafa Indonesia dalam membumikan Al-Qur'an."
          className="mb-10"
        />

        {/* Risalah Dakwah */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-heading text-base font-bold text-text-primary">
              📖 Risalah Dakwah
            </h3>
            <Link
              to="/blog"
              className="flex items-center gap-1 font-heading text-xs font-semibold text-text-secondary no-underline hover:text-magenta-bold transition-colors"
            >
              Lihat Semua <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 scroll-x sm:overflow-visible flex-nowrap p-5">
            {risalah.map((article) => {
              const cat =
                CATEGORY_COLORS[article.category] ??
                CATEGORY_COLORS["Risalah Dakwah"];
              return (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}` as "/"}
                  className="block no-underline group flex-shrink-0 sm:flex-shrink min-w-[260px]"
                >
                  <div className="surface-card rounded-3xl overflow-hidden card-hover h-full">
                    <div
                      className={`flex h-[120px] items-center justify-center text-4xl ${cat.bg}`}
                    >
                      {CATEGORY_EMOJI[article.category] ?? "📄"}
                    </div>
                    <div className="p-5">
                      <span
                        className={`inline-block font-heading text-[10px] font-bold rounded-full px-2.5 py-0.5 mb-2 ${cat.bg} ${cat.colorClass}`}
                      >
                        {article.category}
                      </span>
                      <h4 className="font-heading text-sm font-bold leading-snug text-text-primary mb-2 group-hover:text-magenta-bold transition-colors">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-text-secondary">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime} mnt
                        </span>
                        <span>
                          {article.date.split(" ").slice(-2).join(" ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Info Terkini */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-heading text-base font-bold text-text-primary">
              📰 Info Terkini
            </h3>
            <Link
              to="/blog"
              className="flex items-center gap-1 font-heading text-xs font-semibold text-text-secondary no-underline transition-colors hover:text-magenta-bold"
            >
              Lihat Semua <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {infoTerkini.map((article) => {
              const cat =
                CATEGORY_COLORS[article.category] ??
                CATEGORY_COLORS["Info Terkini"];
              return (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}` as "/"}
                  className="flex items-start gap-4 surface-card rounded-2xl p-4 no-underline group card-hover"
                >
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl ${cat.bg}`}
                  >
                    {CATEGORY_EMOJI[article.category] ?? "📄"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-sm font-semibold leading-snug text-text-primary mb-1 group-hover:text-magenta-bold transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-xs text-text-secondary line-clamp-1 mb-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-text-secondary">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime} mnt
                      </span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-magenta-bold opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* YouTube Preview */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-heading text-base font-bold text-text-primary flex items-center gap-2">
              <Youtube className="h-5 w-5 text-[#FF0000]" />
              YouTube Wafa Indonesia
            </h3>
            <a
              href="https://youtube.com/wafaindonesia"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-heading text-xs font-semibold text-[#FF0000] no-underline"
            >
              Subscribe <ArrowRight className="h-3 w-3" />
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {YOUTUBE_VIDEOS.map((video) => (
              <div
                key={video.title}
                className="surface-card rounded-2xl overflow-hidden card-hover cursor-pointer"
              >
                <div className="relative flex h-[120px] items-center justify-center bg-gradient-to-br from-[rgba(255,0,0,0.08)] to-[rgba(255,0,0,0.04)]">
                  <div className="text-4xl">{video.emoji}</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000] text-white">
                      ▶
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 font-heading text-[10px] font-bold rounded px-1.5 py-0.5 text-white bg-black/70">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-heading text-xs font-semibold leading-snug text-text-primary">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <a
              href="https://youtube.com/wafaindonesia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full font-heading px-6 py-3 text-sm font-semibold text-white no-underline transition-all hover:scale-105 bg-[#FF0000] shadow-[0_4px_16px_rgba(255,0,0,0.3)]"
            >
              <Youtube className="h-4 w-4" />
              Subscribe YouTube Wafa Indonesia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
