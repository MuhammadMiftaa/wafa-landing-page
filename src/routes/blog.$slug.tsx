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

export const Route = createFileRoute("/blog/$slug")({
  component: BlogDetailPage,
});

const CATEGORY_COLORS: Record<string, { colorClass: string; bg: string }> = {
  "Risalah Dakwah": {
    colorClass: "text-magenta-bold",
    bg: "bg-[rgba(209,0,113,0.08)]",
  },
  "Ikhtisar Wafa": { colorClass: "text-emerald", bg: "bg-[rgba(31,129,36,0.08)]" },
  "Info Terkini": { colorClass: "text-golden", bg: "bg-[rgba(255,145,0,0.08)]" },
  "Parenting Qur'ani": { colorClass: "text-deep", bg: "bg-[rgba(75,42,103,0.08)]" },
};

function BlogDetailPage() {
  const { slug } = Route.useParams();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="section-padding">
        <div className="page-wrap text-center">
          <h1 className="font-heading text-3xl font-bold text-text-primary mb-4">
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
    colorClass: "text-magenta-bold",
    bg: "bg-[rgba(209,0,113,0.08)]",
  };
  const related = ARTICLES.filter(
    (a) => a.id !== article.id && a.category === article.category,
  ).slice(0, 3);

  function handleShare() {
    if (navigator.share) {
      navigator.share({ title: article?.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }

  return (
    <main>
      {/* Breadcrumb */}
      <nav className="py-4 border-b border-line">
        <div className="page-wrap">
          <ol className="flex items-center gap-2 text-xs text-text-secondary">
            <li>
              <Link
                to="/"
                className="text-text-secondary no-underline hover:text-magenta-bold"
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
                className="text-text-secondary no-underline hover:text-magenta-bold"
              >
                Blog
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3 w-3" />
            </li>
            <li className="font-medium truncate max-w-[200px] text-magenta-bold">
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
                className={`inline-flex items-center font-heading text-xs font-bold rounded-full px-3 py-1 mb-4 mr-3 ${catStyle.bg} ${catStyle.colorClass}`}
              >
                {article.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold leading-snug text-text-primary mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
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
                  className="flex items-center gap-1.5 font-heading text-sm font-semibold text-text-secondary bg-transparent border-none cursor-pointer p-0 hover:text-magenta-bold transition-colors"
                >
                  <Share2 className="h-4 w-4" /> Bagikan
                </button>
              </div>
            </div>

            {/* Hero image placeholder */}
            <div className="mb-8 h-[280px] rounded-3xl flex items-center justify-center text-7xl surface-visual">
              📖
            </div>

            {/* Article excerpt as intro */}
            <div className="prose max-w-none font-sans">
              <p className="text-base md:text-lg leading-relaxed font-medium text-text-primary mb-6">
                {article.excerpt}
              </p>
              <p className="text-base leading-relaxed text-text-secondary mb-6">
                Wafa Indonesia terus berkomitmen untuk menghadirkan konten yang
                bermakna bagi seluruh sahabat Al-Qur'an di Indonesia. Artikel
                ini merupakan bagian dari upaya kami dalam berbagi pengetahuan
                dan inspirasi seputar pembelajaran Al-Qur'an yang mudah,
                menyenangkan, dan terstandar.
              </p>

              {/* Quote block */}
              <blockquote className="rounded-2xl p-6 my-6 bg-[rgba(209,0,113,0.04)] border-l-4 border-magenta-bold">
                <p className="text-base italic font-medium text-text-primary m-0">
                  "Saya sangat bersyukur karena lembaga Wafa sesuai dengan
                  artinya 'setia', setia dengan Al-Qur'an."
                </p>
                <footer className="mt-3 font-heading text-sm font-semibold text-magenta-bold">
                  — Prof. Dr. H. M. Roem Rowi, M.A.
                </footer>
              </blockquote>

              <p className="text-base leading-relaxed text-text-secondary mb-6">
                Bersama Wafa, kita terus berikhtiar untuk melahirkan generasi
                Al-Qur'an yang tidak hanya pandai membaca, tetapi juga
                memahami, menghafal, dan mengamalkan nilai-nilai Al-Qur'an
                dalam kehidupan sehari-hari.
              </p>
            </div>

            {/* CTA Box */}
            <div className="rounded-3xl border-[1.5px] border-[rgba(209,0,113,0.15)] bg-gradient-to-br from-[rgba(209,0,113,0.05)] to-[rgba(31,129,36,0.04)] p-7 my-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white bg-magenta-bold">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-text-primary mb-1">
                    Ingin belajar Al-Qur'an dengan metode ini?
                  </p>
                  <p className="text-xs text-text-secondary mb-3">
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
                  className="font-heading text-xs font-semibold rounded-full px-3 py-1 bg-[rgba(209,0,113,0.06)] text-magenta-bold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author box */}
            <div className="mt-8 surface-card rounded-3xl p-6 flex items-start gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl font-heading text-white text-lg font-bold bg-gradient-to-br from-magenta-bold to-magenta-deep">
                WI
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-text-primary">
                  Wafa Indonesia
                </p>
                <p className="font-heading text-xs mt-0.5 mb-2 text-magenta-bold">
                  Tim Riset & Pengembangan
                </p>
                <p className="text-xs leading-relaxed text-text-secondary">
                  Tim redaksi Wafa Indonesia — menulis tentang metode
                  pembelajaran Al-Qur'an, parenting Islami, dan inspirasi
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
              <div className="surface-card rounded-3xl p-6">
                <p className="font-heading text-sm font-bold text-text-primary mb-5">
                  Baca Juga
                </p>
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/blog/${rel.slug}` as "/"}
                      className="block no-underline group"
                    >
                      <p className="font-heading text-xs font-semibold text-text-primary mb-1 group-hover:text-magenta-bold transition-colors">
                        {rel.title}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {rel.date} · {rel.readTime} mnt
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            <div className="surface-card rounded-3xl p-6">
              <p className="font-heading text-sm font-bold text-text-primary mb-4">
                Kategori
              </p>
              <div className="space-y-2">
                {Object.entries(CATEGORY_COLORS).map(([cat, style]) => (
                  <Link
                    key={cat}
                    to="/blog"
                    className="flex items-center justify-between py-1.5 no-underline group"
                  >
                    <span className="text-sm text-text-secondary group-hover:text-magenta-bold transition-colors">
                      {cat}
                    </span>
                    <span
                      className={`font-heading text-xs font-bold rounded-full px-2 py-0.5 ${style.bg} ${style.colorClass}`}
                    >
                      {ARTICLES.filter((a) => a.category === cat).length}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-3xl border-[1.5px] border-[rgba(209,0,113,0.15)] bg-gradient-to-br from-[rgba(209,0,113,0.05)] to-[rgba(75,42,103,0.03)] p-6">
              <p className="font-heading text-sm font-bold text-text-primary mb-2">
                Newsletter Mingguan
              </p>
              <p className="text-xs text-text-secondary mb-4">
                Dapatkan artikel terbaru dan tips parenting Qur'ani.
              </p>
              <input
                type="email"
                placeholder="Email Anda..."
                className="form-input mb-3"
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
