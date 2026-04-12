import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Clock, User, ArrowRight, Newspaper } from "lucide-react";
import { SectionHeading, Badge } from "../components/ui/index.ts";
import { ARTICLES } from "../data/content.ts";

export const Route = createFileRoute("/blog/")({ component: BlogPage });

const CATEGORIES = [
  "Semua",
  "Risalah Dakwah",
  "Ikhtisar Wafa",
  "Info Terkini",
  "Parenting Qur'ani",
];

const CATEGORY_COLORS: Record<string, { colorClass: string; bg: string }> = {
  "Risalah Dakwah": {
    colorClass: "text-magenta-bold",
    bg: "bg-[rgba(209,0,113,0.08)]",
  },
  "Ikhtisar Wafa": { colorClass: "text-emerald", bg: "bg-[rgba(31,129,36,0.08)]" },
  "Info Terkini": { colorClass: "text-golden", bg: "bg-[rgba(255,145,0,0.08)]" },
  "Parenting Qur'ani": { colorClass: "text-deep", bg: "bg-[rgba(75,42,103,0.08)]" },
};

const PLACEHOLDER_IMAGES: Record<string, string> = {
  "Risalah Dakwah": "🕌",
  "Ikhtisar Wafa": "📖",
  "Info Terkini": "📰",
  "Parenting Qur'ani": "👨‍👩‍👧",
};

function ArticleCard({
  article,
  featured = false,
}: {
  article: (typeof ARTICLES)[0];
  featured?: boolean;
}) {
  const catStyle = CATEGORY_COLORS[article.category] ?? {
    colorClass: "text-magenta-bold",
    bg: "bg-[rgba(209,0,113,0.08)]",
  };
  const emoji = PLACEHOLDER_IMAGES[article.category] ?? "📄";

  if (featured) {
    return (
      <Link
        to={`/blog/${article.slug}` as "/"}
        className="block no-underline group"
      >
        <div className="grid lg:grid-cols-2 gap-8 surface-card rounded-3xl overflow-hidden card-hover">
          {/* Image */}
          <div className="flex h-[280px] items-center justify-center text-8xl surface-visual">
            {emoji}
          </div>
          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <span
              className={`inline-flex items-center font-heading text-xs font-bold rounded-full px-3 py-1 mb-3 self-start ${catStyle.bg} ${catStyle.colorClass}`}
            >
              {article.category}
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-bold leading-snug text-text-primary mb-3 group-hover:text-magenta-bold transition-colors">
              {article.title}
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-text-secondary">
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readTime} menit baca
              </span>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1 mt-4 font-heading text-sm font-semibold text-magenta-bold">
              Baca Selengkapnya{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${article.slug}` as "/"}
      className="block no-underline group"
    >
      <div className="surface-card rounded-3xl overflow-hidden card-hover h-full flex flex-col">
        {/* Image */}
        <div className="flex h-40 items-center justify-center text-5xl surface-visual">
          {emoji}
        </div>
        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <span
            className={`inline-flex items-center font-heading text-xs font-bold rounded-full px-2.5 py-0.5 mb-3 self-start ${catStyle.bg} ${catStyle.colorClass}`}
          >
            {article.category}
          </span>
          <h3 className="font-heading text-sm font-bold leading-snug text-text-primary mb-2 flex-1 group-hover:text-magenta-bold transition-colors">
            {article.title}
          </h3>
          <p className="text-xs leading-relaxed text-text-secondary mb-3 line-clamp-2">
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
      </div>
    </Link>
  );
}

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchCat =
        activeCategory === "Semua" || a.category === activeCategory;
      const matchSearch =
        search === "" ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const [featured, ...rest] = filtered;

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[rgba(75,42,103,0.04)] to-[rgba(209,0,113,0.02)]">
        <div className="blob-magenta absolute right-0 top-0 h-80 w-80 opacity-30" />
        <div className="page-wrap relative z-10 text-center">
          <Badge color="magenta">Blog & Inspirasi</Badge>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Risalah &{" "}
            <span className="gradient-text">Inspirasi</span>
          </h1>
          <p className="max-w-xl mx-auto text-base leading-relaxed text-text-secondary mb-8">
            Artikel, berita, dan cerita inspiratif dari perjalanan Wafa
            Indonesia dalam membumikan Al-Qur'an.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari artikel..."
              className="form-input pl-11 !rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="py-5 sticky top-16 z-30 bg-surface-strong/95 backdrop-blur-md border-b border-line">
        <div className="page-wrap">
          <div className="flex gap-2 scroll-x py-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`tab-pill whitespace-nowrap flex-shrink-0 ${
                  activeCategory === cat
                    ? "bg-magenta-bold text-white shadow-[0_4px_16px_rgba(209,0,113,0.3)]"
                    : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding">
        <div className="page-wrap">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Newspaper className="h-12 w-12 mx-auto mb-4 text-line" />
              <p className="font-heading font-semibold text-text-secondary">
                Tidak ada artikel ditemukan
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("Semua");
                }}
                className="mt-4 font-heading text-sm font-semibold text-magenta-bold bg-transparent border-none cursor-pointer"
              >
                Reset filter →
              </button>
            </div>
          ) : (
            <>
              {/* Featured */}
              {featured && !search && activeCategory === "Semua" && (
                <div className="mb-10">
                  <p className="section-kicker mb-4">Artikel Pilihan</p>
                  <ArticleCard article={featured} featured />
                </div>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <>
                  <SectionHeading
                    kicker="Artikel Terbaru"
                    title="Lebih Banyak Bacaan"
                    className="mb-8"
                  />
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(search || activeCategory !== "Semua"
                      ? filtered
                      : rest
                    ).map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-section-magenta-emerald">
        <div className="page-wrap max-w-2xl text-center mx-auto">
          <p className="section-kicker mb-3">Newsletter</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-3">
            Dapatkan Artikel Terbaru
          </h2>
          <p className="text-sm text-text-secondary mb-6">
            Tips parenting Qur'ani, berita kegiatan Wafa, dan inspirasi
            pendidikan Al-Qur'an — langsung ke inbox Anda setiap minggu.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Email Anda..."
              className="form-input flex-1 !rounded-full"
            />
            <button
              type="button"
              className="btn-primary text-sm py-2.5 px-5 text-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
