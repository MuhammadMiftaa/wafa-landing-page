import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";

const FOOTER_LINKS = {
  tentang: {
    label: "Tentang Wafa",
    items: [
      { label: "Selayang Pandang", href: "/tentang-kami#selayang" },
      { label: "Sejarah & Legalitas", href: "/tentang-kami#sejarah" },
      { label: "Visi & Misi", href: "/tentang-kami#visi" },
      { label: "Dewan Pakar", href: "/tentang-kami#dewan" },
      { label: "Tim Trainer", href: "/tentang-kami#trainer" },
      { label: "Budaya Kerja", href: "/tentang-kami#budaya" },
    ],
  },
  layanan: {
    label: "Layanan",
    items: [
      { label: "Metode 7M", href: "/metode#7m" },
      { label: "SAGAQU", href: "/layanan#sagaqu" },
      { label: "PSGA", href: "/layanan#psga" },
      { label: "Akademi Tahsin Online", href: "/layanan#ato" },
      { label: "Akademi Tahfidz", href: "/layanan#tahfidz" },
      { label: "Kemitraan Lembaga", href: "/mitra" },
    ],
  },
  produk: {
    label: "Produk",
    items: [
      { label: "Buku Tilawah", href: "/produk#tilawah" },
      { label: "Buku Menulis", href: "/produk#menulis" },
      { label: "Aplikasi Wafa", href: "/produk#aplikasi" },
      { label: "Kartu Peraga", href: "/produk#peraga" },
      { label: "Paket Lengkap", href: "/produk#paket" },
    ],
  },
  kontak: {
    label: "Kontak",
    items: [
      { label: "Wafa Pusat", href: "/kontak#pusat" },
      { label: "Wafa Daerah", href: "/kontak#daerah" },
      { label: "Kemitraan", href: "/mitra" },
      { label: "Blog", href: "/blog" },
    ],
  },
};

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/wafaindonesia",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/wafaindonesia",
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/wafaindonesia",
    icon: <Youtube className="h-5 w-5" />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281130589310",
    icon: (
      // Custom WhatsApp SVG
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@wafaindonesia",
    icon: (
      // Custom TikTok SVG
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer className="bg-deep text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="page-wrap py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="m-0 font-[var(--font-heading)] text-lg font-bold text-white">
                Tips Parenting Qur'ani Mingguan
              </p>
              <p className="m-0 mt-1 text-sm text-white/60">
                Inspirasi mendidik anak dengan Al-Qur'an, langsung ke inbox
                Anda.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-full bg-[rgba(73,216,80,0.15)] px-5 py-3 text-[var(--color-mint)] border border-[rgba(73,216,80,0.25)]">
                <Send className="h-4 w-4" />
                <span className="text-sm font-semibold font-[var(--font-heading)]">
                  Jazakallah! Anda sudah terdaftar.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex gap-2 flex-shrink-0"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda..."
                  required
                  className="w-56 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-[rgba(209,0,113,0.6)] focus:bg-white/15 transition"
                />
                <button
                  type="submit"
                  className="flex items-center gap-1.5 rounded-full bg-[var(--color-magenta-bold)] px-5 py-2.5 text-sm font-semibold font-[var(--font-heading)] text-white transition hover:bg-[var(--color-magenta-neon)] hover:shadow-[0_4px_16px_rgba(209,0,113,0.4)]"
                >
                  <Send className="h-3.5 w-3.5" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="page-wrap py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="no-underline"
            >
              <img
                src="/logo-white.png"
                alt="Logo Wafa Indonesia"
                className="h-24 w-24 object-contain mx-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Belajar Al-Qur'an Metode Otak Kanan. Mudah, menyenangkan, dan
              terstandar.
            </p>

            {/* Contact info */}
            <div className="mt-5 space-y-2">
              <a
                href="tel:+62319904 3404"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white no-underline transition"
              >
                <Phone className="h-3.5 w-3.5 text-[var(--color-soft-lavender)]" />
                (031) 9904 3404
              </a>
              <a
                href="https://wa.me/6281130589310"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white no-underline transition"
              >
                <Phone className="h-3.5 w-3.5 text-[var(--color-soft-lavender)]" />
                0811 3058 9310 (WA)
              </a>
              <a
                href="mailto:sahabat@wafaindonesia.or.id"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white no-underline transition"
              >
                <Mail className="h-3.5 w-3.5 text-[var(--color-soft-lavender)]" />
                sahabat@wafaindonesia.or.id
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-[var(--color-soft-lavender)]" />
                <span>Jl. Raya Wisma Pagesangan No.9, Surabaya 60234</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/8 text-white/60 transition hover:border-[rgba(209,0,113,0.4)] hover:bg-[rgba(209,0,113,0.12)] hover:text-white no-underline"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(FOOTER_LINKS).map((col) => (
            <div key={col.label}>
              <p className="m-0 mb-4 font-[var(--font-heading)] text-sm font-bold text-white uppercase tracking-widest text-[0.7rem]">
                {col.label}
              </p>
              <ul className="m-0 list-none p-0 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href as "/"}
                      className="flex items-center gap-1.5 text-sm text-white/55 no-underline transition hover:text-white group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[var(--color-magenta-bright)]" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="page-wrap flex flex-col gap-3 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="m-0 text-xs text-white/40">
            © {new Date().getFullYear()} Yayasan Syafa'atul Qur'an Indonesia
            (YAQIN). Seluruh hak cipta dilindungi.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-end">
            {[
              "SK Kemenkumham AHU-0000170.AH.01.12.2022",
              "Tashih LPMQ Kemenag 2023",
            ].map((text) => (
              <span
                key={text}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/40"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
