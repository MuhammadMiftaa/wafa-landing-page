import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Clock,
  User,
  Share2,
  ChevronRight,
  Smartphone,
} from "lucide-react";
import { ARTICLES } from "../data/content.ts";
import { Badge } from "../components/ui/index.ts";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogDetailPage,
});

const CATEGORY_COLORS: Record<string, { color: string; bg: string }> = {
  "Risalah Dakwah": {
    color: "var(--magenta-bold)",
    bg: "rgba(209,0,113,0.08)",
  },
  "Ikhtisar Wafa": { color: "var(--emerald)", bg: "rgba(31,129,36,0.08)" },
  "Info Terkini": { color: "var(--golden)", bg: "rgba(255,145,0,0.08)" },
  "Parenting Qur'ani": { color: "var(--deep)", bg: "rgba(75,42,103,0.08)" },
};

function BlogDetailPage() {
  const { slug } = Route.useParams();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="section-padding">
        <div className="page-wrap text-center">
          <h1
            className="text-3xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            Artikel Tidak Ditemukan
          </h1>
          <Link to="/blog" className="btn-primary no-underline inline-flex">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Blog
          </Link>
        </div>
      </main>
    );
  }

  const catStyle = CATEGORY_COLORS[article.category] ?? {
    color: "var(--magenta-bold)",
    bg: "rgba(209,0,113,0.08)",
  };
  const related = ARTICLES.filter(
    (a) => a.id !== article.id && a.category === article.category,
  ).slice(0, 3);

  function handleShare() {
    if (navigator.share) {
      navigator.share({ title: article.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }

  return (
    <main>
      {/* Breadcrumb */}
      <nav className="py-4" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="page-wrap">
          <ol
            className="flex items-center gap-2 text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            <li>
              <Link
                to="/"
                className="no-underline hover:text-[var(--magenta-bold)]"
                style={{ color: "var(--text-secondary)" }}
              >
                Beranda
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3 w-3" />
            </li>
            <li>
              <Link
                to="/blog"
                className="no-underline hover:text-[var(--magenta-bold)]"
                style={{ color: "var(--text-secondary)" }}
              >
                Blog
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3 w-3" />
            </li>
            <li
              style={{ color: "var(--magenta-bold)" }}
              className="font-medium truncate max-w-[200px]"
            >
              {article.title}
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-wrap py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <article className="lg:col-span-2">
            {/* Category & meta */}
            <div className="mb-6">
              <span
                className="inline-flex items-center text-xs font-bold rounded-full px-3 py-1 mb-4 mr-3"
                style={{
                  background: catStyle.bg,
                  color: catStyle.color,
                  fontFamily: "var(--font-heading)",
                }}
              >
                {article.category}
              </span>
              <h1
                className="text-3xl md:text-4xl font-bold leading-snug mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                }}
              >
                {article.title}
              </h1>
              <div
                className="flex flex-wrap items-center gap-4 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {article.readTime} menit baca
                </span>
                <span>{article.date}</span>
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[var(--magenta-bold)]"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-secondary)",
                    padding: 0,
                  }}
                >
                  <Share2 className="h-4 w-4" /> Bagikan
                </button>
              </div>
            </div>

            {/* Hero image placeholder */}
            <div
              className="mb-8 rounded-3xl flex items-center justify-center text-7xl"
              style={{
                height: "280px",
                background:
                  "linear-gradient(135deg, rgba(209,0,113,0.06), rgba(75,42,103,0.04))",
                border: "1px solid var(--line)",
              }}
            >
              📖
            </div>

            {/* Article excerpt as intro */}
            <div
              className="prose max-w-none"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <p
                className="text-base md:text-lg leading-relaxed font-medium mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                {article.excerpt}
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Wafa Indonesia terus berkomitmen untuk menghadirkan konten yang
                bermakna bagi seluruh sahabat Al-Qur\'an di Indonesia. Artikel
                ini merupakan bagian dari upaya kami dalam berbagi pengetahuan
                dan inspirasi seputar pembelajaran Al-Qur\'an yang mudah,
                menyenangkan, dan terstandar.
              </p>

              {/* Quote block */}
              <blockquote
                className="rounded-2xl p-6 my-6"
                style={{
                  background: "rgba(209,0,113,0.04)",
                  borderLeft: "4px solid var(--magenta-bold)",
                }}
              >
                <p
                  className="text-base italic font-medium m-0"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  "Saya sangat bersyukur karena lembaga Wafa sesuai dengan
                  artinya 'setia', setia dengan Al-Qur\'an."
                </p>
                <footer
                  className="mt-3 text-sm font-semibold"
                  style={{
                    color: "var(--magenta-bold)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  — Prof. Dr. H. M. Roem Rowi, M.A.
                </footer>
              </blockquote>

              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Bersama Wafa, kita terus berikhtiar untuk melahirkan generasi
                Al-Qur\'an yang tidak hanya pandai membaca, tetapi juga
                memahami, menghafal, dan mengamalkan nilai-nilai Al-Qur\'an
                dalam kehidupan sehari-hari.
              </p>
            </div>

            {/* CTA Box */}
            <div
              className="rounded-3xl p-7 my-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(209,0,113,0.05), rgba(31,129,36,0.04))",
                border: "1.5px solid rgba(209,0,113,0.15)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white"
                  style={{ background: "var(--magenta-bold)" }}
                >
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <p
                    className="font-bold text-sm mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Ingin belajar Al-Qur\'an dengan metode ini?
                  </p>
                  <p
                    className="text-xs mb-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Download Aplikasi Wafa gratis — 6 halaman pertama tanpa
                    biaya.
                  </p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.wafaindonesia"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm py-2 px-5 no-underline"
                  >
                    Download Gratis
                  </a>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "#alquran",
                "#metode-wafa",
                "#pendidikan-islam",
                `#${article.category.toLowerCase().replace(/\s+/g, "-")}`,
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold rounded-full px-3 py-1"
                  style={{
                    background: "rgba(209,0,113,0.06)",
                    color: "var(--magenta-bold)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author box */}
            <div
              className="mt-8 rounded-3xl p-6 flex items-start gap-4"
              style={{ background: "white", border: "1px solid var(--line)" }}
            >
              <div
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-white text-lg font-bold"
                style={{
                  background:
                    "linear-gradient(135deg,var(--magenta-bold),var(--magenta-deep))",
                  fontFamily: "var(--font-heading)",
                }}
              >
                WI
              </div>
              <div>
                <p
                  className="font-bold text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                  }}
                >
                  Wafa Indonesia
                </p>
                <p
                  className="text-xs mt-0.5 mb-2"
                  style={{
                    color: "var(--magenta-bold)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Tim Riset & Pengembangan
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Tim redaksi Wafa Indonesia — menulis tentang metode
                  pembelajaran Al-Qur\'an, parenting Islami, dan inspirasi
                  pendidikan.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Back button */}
            <Link
              to="/blog"
              className="btn-ghost no-underline inline-flex w-full justify-center"
            >
              <ArrowLeft className="h-4 w-4" /> Semua Artikel
            </Link>

            {/* Related */}
            {related.length > 0 && (
              <div
                className="rounded-3xl p-6"
                style={{ background: "white", border: "1px solid var(--line)" }}
              >
                <p
                  className="font-bold text-sm mb-5"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                  }}
                >
                  Baca Juga
                </p>
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/blog/${rel.slug}` as "/"}
                      className="block no-underline group"
                    >
                      <p
                        className="text-xs font-semibold mb-1 group-hover:text-[var(--magenta-bold)] transition-colors"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {rel.title}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {rel.date} · {rel.readTime} mnt
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            <div
              className="rounded-3xl p-6"
              style={{ background: "white", border: "1px solid var(--line)" }}
            >
              <p
                className="font-bold text-sm mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                }}
              >
                Kategori
              </p>
              <div className="space-y-2">
                {Object.entries(CATEGORY_COLORS).map(([cat, style]) => (
                  <Link
                    key={cat}
                    to="/blog"
                    className="flex items-center justify-between py-1.5 no-underline group"
                  >
                    <span
                      className="text-sm group-hover:text-[var(--magenta-bold)] transition-colors"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {cat}
                    </span>
                    <span
                      className="text-xs font-bold rounded-full px-2 py-0.5"
                      style={{
                        background: style.bg,
                        color: style.color,
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {ARTICLES.filter((a) => a.category === cat).length}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div
              className="rounded-3xl p-6"
              style={{
                background:
                  "linear-gradient(135deg,rgba(209,0,113,0.05),rgba(75,42,103,0.03))",
                border: "1.5px solid rgba(209,0,113,0.15)",
              }}
            >
              <p
                className="font-bold text-sm mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                }}
              >
                Newsletter Mingguan
              </p>
              <p
                className="text-xs mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Dapatkan artikel terbaru dan tips parenting Qur\'ani.
              </p>
              <input
                type="email"
                placeholder="Email Anda..."
                className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none mb-3"
                style={{
                  borderColor: "var(--line)",
                  fontFamily: "var(--font-sans)",
                }}
              />
              <button
                type="button"
                className="btn-primary w-full justify-center text-sm py-2.5"
              >
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
