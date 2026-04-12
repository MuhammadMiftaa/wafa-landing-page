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

const CATEGORY_COLORS: Record<string, { color: string; bg: string }> = {
  "Risalah Dakwah": {
    color: "var(--magenta-bold)",
    bg: "rgba(209,0,113,0.08)",
  },
  "Ikhtisar Wafa": { color: "var(--emerald)", bg: "rgba(31,129,36,0.08)" },
  "Info Terkini": { color: "var(--golden)", bg: "rgba(255,145,0,0.08)" },
  "Parenting Qur'ani": { color: "var(--deep)", bg: "rgba(75,42,103,0.08)" },
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
    color: "var(--magenta-bold)",
    bg: "rgba(209,0,113,0.08)",
  };
  const emoji = PLACEHOLDER_IMAGES[article.category] ?? "📄";

  if (featured) {
    return (
      <Link
        to={`/blog/${article.slug}` as "/"}
        className="block no-underline group"
      >
        <div
          className="grid lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden transition-all card-hover"
          style={{ background: "white", border: "1px solid var(--line)" }}
        >
          {/* Image */}
          <div
            className="flex items-center justify-center text-8xl"
            style={{
              height: "280px",
              background:
                "linear-gradient(135deg, rgba(209,0,113,0.06), rgba(75,42,103,0.04))",
            }}
          >
            {emoji}
          </div>
          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <span
              className="inline-flex items-center text-xs font-bold rounded-full px-3 py-1 mb-3 self-start"
              style={{
                background: catStyle.bg,
                color: catStyle.color,
                fontFamily: "var(--font-heading)",
              }}
            >
              {article.category}
            </span>
            <h2
              className="font-bold text-xl md:text-2xl leading-snug mb-3 group-hover:text-[var(--magenta-bold)] transition-colors"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              {article.title}
            </h2>
            <p
              className="text-sm leading-relaxed mb-4 line-clamp-3"
              style={{ color: "var(--text-secondary)" }}
            >
              {article.excerpt}
            </p>
            <div
              className="flex items-center gap-4 text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
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
            <div
              className="flex items-center gap-1 mt-4 text-sm font-semibold"
              style={{
                color: "var(--magenta-bold)",
                fontFamily: "var(--font-heading)",
              }}
            >
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
      <div
        className="rounded-3xl overflow-hidden transition-all card-hover h-full flex flex-col"
        style={{ background: "white", border: "1px solid var(--line)" }}
      >
        {/* Image */}
        <div
          className="flex items-center justify-center text-5xl"
          style={{
            height: "160px",
            background:
              "linear-gradient(135deg, rgba(209,0,113,0.05), rgba(75,42,103,0.03))",
          }}
        >
          {emoji}
        </div>
        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <span
            className="inline-flex items-center text-xs font-bold rounded-full px-2.5 py-0.5 mb-3 self-start"
            style={{
              background: catStyle.bg,
              color: catStyle.color,
              fontFamily: "var(--font-heading)",
            }}
          >
            {article.category}
          </span>
          <h3
            className="font-bold text-sm leading-snug mb-2 flex-1 group-hover:text-[var(--magenta-bold)] transition-colors"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            {article.title}
          </h3>
          <p
            className="text-xs leading-relaxed mb-3 line-clamp-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {article.excerpt}
          </p>
          <div
            className="flex items-center gap-3 text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
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
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(75,42,103,0.04) 0%, rgba(209,0,113,0.02) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(209,0,113,0.1), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="page-wrap relative z-10 text-center">
          <Badge color="magenta">Blog & Inspirasi</Badge>
          <h1
            className="mt-4 text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            Risalah &{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,var(--magenta-bold),var(--emerald))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Inspirasi
            </span>
          </h1>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Artikel, berita, dan cerita inspiratif dari perjalanan Wafa
            Indonesia dalam membumikan Al-Qur\'an.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4"
              style={{ color: "var(--text-secondary)" }}
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari artikel..."
              className="w-full rounded-full border pl-11 pr-5 py-3 text-sm outline-none transition-all"
              style={{
                borderColor: "var(--line)",
                background: "white",
                color: "var(--text-primary)",
                fontFamily: "var(--font-sans)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section
        className="py-5 sticky top-16 z-30"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="page-wrap">
          <div className="flex gap-2 scroll-x">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className="tab-pill whitespace-nowrap flex-shrink-0"
                style={
                  activeCategory === cat
                    ? {
                        background: "var(--magenta-bold)",
                        color: "white",
                        boxShadow: "0 4px 16px rgba(209,0,113,0.3)",
                      }
                    : {}
                }
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
              <Newspaper
                className="h-12 w-12 mx-auto mb-4"
                style={{ color: "var(--line)" }}
              />
              <p
                className="font-semibold"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-secondary)",
                }}
              >
                Tidak ada artikel ditemukan
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("Semua");
                }}
                className="mt-4 text-sm font-semibold"
                style={{
                  color: "var(--magenta-bold)",
                  fontFamily: "var(--font-heading)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
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
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(135deg, rgba(209,0,113,0.04), rgba(75,42,103,0.03))",
        }}
      >
        <div className="page-wrap max-w-2xl text-center mx-auto">
          <p className="section-kicker mb-3">Newsletter</p>
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            Dapatkan Artikel Terbaru
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Tips parenting Qur'ani, berita kegiatan Wafa, dan inspirasi
            pendidikan Al-Qur'an — langsung ke inbox Anda setiap minggu.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Email Anda..."
              className="flex-1 rounded-full border px-4 py-2.5 text-sm outline-none"
              style={{
                borderColor: "var(--line)",
                fontFamily: "var(--font-sans)",
              }}
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
