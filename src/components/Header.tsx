import { Link, useMatchRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Download,
  BookOpen,
  Users,
  Calendar,
  Layers,
  GraduationCap,
  Smartphone,
  Book,
  Newspaper,
  Globe,
  Handshake,
  Info,
  Phone,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  desc?: string;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

type NavTopLevel = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Metode",
    items: [
      {
        label: "5T Pendidikan",
        href: "/metode#5t",
        icon: <BookOpen className="h-4 w-4" />,
        desc: "Tilawah, Tahfidz, Tarjamah, Tafhim, Tafsir",
      },
      {
        label: "7M Sistem Mutu",
        href: "/metode#7m",
        icon: <Layers className="h-4 w-4" />,
        desc: "Standar manajemen mutu pembelajaran",
      },
      {
        label: "Otak Kanan",
        href: "/metode#otak-kanan",
        icon: <Users className="h-4 w-4" />,
        desc: "Metode pembelajaran menyenangkan",
      },
      {
        label: "Irama Hijaz",
        href: "/metode#hijaz",
        icon: <Newspaper className="h-4 w-4" />,
        desc: "Lagu khas Wafa yang syahdu",
      },
    ],
  },
  {
    label: "Layanan",
    items: [
      {
        label: "Untuk Individu",
        href: "/layanan#individu",
        icon: <Users className="h-4 w-4" />,
        desc: "Aplikasi & kursus online",
      },
      {
        label: "Untuk Lembaga",
        href: "/layanan#lembaga",
        icon: <GraduationCap className="h-4 w-4" />,
        desc: "Kemitraan & pendampingan 7M",
      },
      {
        label: "Event & Workshop",
        href: "/layanan#event",
        icon: <Calendar className="h-4 w-4" />,
        desc: "PSGA, ODT, SIMAAN, Upgrading",
      },
      {
        label: "Sertifikasi",
        href: "/layanan#sertifikasi",
        icon: <Layers className="h-4 w-4" />,
        desc: "SAGAQU & syahadah resmi",
      },
    ],
  },
  {
    label: "Produk",
    items: [
      {
        label: "Buku Tilawah",
        href: "/produk#tilawah",
        icon: <Book className="h-4 w-4" />,
        desc: "Seri Jilid 1–5 & KB/TK",
      },
      {
        label: "Buku Menulis",
        href: "/produk#menulis",
        icon: <BookOpen className="h-4 w-4" />,
        desc: "Hijaiyah seri 1–6",
      },
      {
        label: "Aplikasi Wafa",
        href: "/produk#aplikasi",
        icon: <Smartphone className="h-4 w-4" />,
        desc: "Gratis di Google Play",
      },
      {
        label: "Media Pembelajaran",
        href: "/produk#media",
        icon: <Layers className="h-4 w-4" />,
        desc: "Kartu peraga, flashdisk, audio",
      },
    ],
  },
  {
    label: "Blog",
    items: [
      {
        label: "Risalah Dakwah",
        href: "/blog?cat=risalah",
        icon: <BookOpen className="h-4 w-4" />,
        desc: "Parenting Qur'ani & edukasi",
      },
      {
        label: "Ikhtisar Wafa",
        href: "/blog?cat=ikhtisar",
        icon: <Newspaper className="h-4 w-4" />,
        desc: "SAGAQU, ATO & cerita sukses",
      },
      {
        label: "Info Terkini",
        href: "/blog?cat=info",
        icon: <Globe className="h-4 w-4" />,
        desc: "Berita & kegiatan terbaru",
      },
    ],
  },
];

const NAV_TOP_LINKS: NavTopLevel[] = [
  {
    label: "Tentang Kami",
    href: "/tentang-kami",
    icon: <Info className="h-4 w-4" />,
  },
  {
    label: "Mitra",
    href: "/mitra",
    icon: <Handshake className="h-4 w-4" />,
  },
  {
    label: "Kontak",
    href: "/kontak",
    icon: <Phone className="h-4 w-4" />,
  },
];

type DropdownProps = {
  group: NavGroup;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

function DropdownMenu({ group, isOpen, onToggle, onClose }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className={`nav-link-enhanced flex items-center gap-1.5 rounded-xl px-3 py-2 transition-all duration-200 ${
          isOpen
            ? "bg-[rgba(209,0,113,0.08)] text-[var(--color-magenta-bold)]"
            : "hover:bg-[rgba(209,0,113,0.04)]"
        }`}
        aria-expanded={isOpen}
      >
        {group.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-3 w-80 overflow-hidden rounded-2xl border border-[rgba(209,0,113,0.1)] bg-white/98 backdrop-blur-xl shadow-[0_25px_60px_rgba(157,22,124,0.14),0_8px_24px_rgba(0,0,0,0.06)] rise-in">
          {/* Dropdown header accent */}
          <div className="h-[3px] bg-gradient-to-r from-[var(--color-magenta-bold)] via-[var(--color-magenta-bright)] to-[var(--color-sun)]" />

          <div className="p-2">
            {group.items.map((item) => (
              <Link
                key={item.href}
                to={item.href as "/"}
                onClick={onClose}
                className="flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-[rgba(209,0,113,0.05)] no-underline group"
              >
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[rgba(209,0,113,0.08)] to-[rgba(75,42,103,0.06)] text-[var(--color-magenta-bold)] transition-all duration-200 group-hover:from-[rgba(209,0,113,0.15)] group-hover:to-[rgba(75,42,103,0.1)] group-hover:scale-110">
                  {item.icon}
                </span>
                <div>
                  <p className="m-0 text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-heading)] group-hover:text-[var(--color-magenta-bold)] transition-colors duration-200">
                    {item.label}
                  </p>
                  {item.desc && (
                    <p className="m-0 text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NavTopLink({
  item,
  onClick,
}: {
  item: NavTopLevel;
  onClick?: () => void;
}) {
  const matchRoute = useMatchRoute();
  const isActive = matchRoute({ to: item.href as "/" });

  return (
    <Link
      to={item.href as "/"}
      className={`nav-link-enhanced rounded-xl px-3 py-2 no-underline transition-all duration-200 ${
        isActive
          ? "text-[var(--color-magenta-bold)] bg-[rgba(209,0,113,0.06)]"
          : "hover:bg-[rgba(209,0,113,0.04)]"
      }`}
      onClick={onClick}
    >
      {item.label}
    </Link>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback((label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  }, []);

  const closeAll = useCallback(() => {
    setOpenMenu(null);
  }, []);

  // Detect scroll for shadow effect
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on resize
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-header-bg backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-[rgba(209,0,113,0.08)] shadow-[0_4px_24px_rgba(157,22,124,0.06)]"
            : "border-transparent"
        }`}
      >
        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-[var(--color-magenta-bold)] via-[var(--color-sun)] to-[var(--color-emerald)]" />

        <nav className="page-wrap flex items-center gap-2 py-3 lg:py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-2.5 no-underline group"
            onClick={closeAll}
          >
            <img
              src="/logo.png"
              alt="Logo Wafa Indonesia"
              className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5 ml-6">
            {NAV_GROUPS.map((group) => (
              <DropdownMenu
                key={group.label}
                group={group}
                isOpen={openMenu === group.label}
                onToggle={() => toggleMenu(group.label)}
                onClose={closeAll}
              />
            ))}

            {/* Divider */}
            <div className="w-px h-5 bg-[var(--color-line)] mx-2" />

            {NAV_TOP_LINKS.map((link) => (
              <NavTopLink key={link.href} item={link} onClick={closeAll} />
            ))}
          </div>

          {/* CTA & Hamburger */}
          <div className="ml-auto flex items-center gap-2.5">
            <a
              href="https://play.google.com/store/apps/details?id=com.wafaindonesia"
              target="_blank"
              rel="noreferrer"
              className="btn-primary hidden sm:inline-flex text-xs py-1 px-3 no-underline"
            >
              <Handshake className="h-3.5 w-3.5" />
              Gabung Mitra
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-line)] bg-white text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[rgba(209,0,113,0.3)] hover:text-[var(--color-magenta-bold)] hover:bg-[rgba(209,0,113,0.04)] active:scale-95"
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[90vw] bg-white shadow-[−20px_0_60px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out lg:hidden flex flex-col`}
        style={{ transform: mobileOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 no-underline"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-magenta-bold)] to-[var(--color-magenta-deep)] shadow-[0_4px_12px_rgba(209,0,113,0.3)]">
              <span className="font-[var(--font-heading)] text-sm font-bold text-white">
                W
              </span>
            </div>
            <div>
              <span className="font-[var(--font-heading)] font-bold text-[var(--color-text-primary)] text-sm">
                WAFA
              </span>
              <span className="block text-[10px] font-medium text-[var(--color-text-secondary)]">
                Indonesia
              </span>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-[var(--color-text-secondary)] hover:bg-[rgba(209,0,113,0.06)] hover:text-[var(--color-magenta-bold)] transition-all"
            aria-label="Tutup menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer content */}
        <div className="flex-1 overflow-y-auto py-3">
          {/* Top-level links first */}
          <div className="px-4 mb-2">
            <p className="px-1 mb-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)]/60">
              Menu Utama
            </p>
            {NAV_TOP_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href as "/"}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 no-underline hover:bg-[rgba(209,0,113,0.04)] transition-colors"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[rgba(209,0,113,0.08)] to-[rgba(75,42,103,0.05)] text-[var(--color-magenta-bold)]">
                  {link.icon}
                </span>
                <span className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-heading)]">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="h-px bg-[var(--color-line)] mx-5 my-2" />

          {/* Dropdown groups */}
          <div className="px-4">
            <p className="px-1 mb-2 mt-3 text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)]/60">
              Eksplorasi
            </p>
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="mb-1">
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded((v) =>
                      v === group.label ? null : group.label,
                    )
                  }
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left font-[var(--font-heading)] font-semibold text-sm transition-all ${
                    mobileExpanded === group.label
                      ? "bg-[rgba(209,0,113,0.06)] text-[var(--color-magenta-bold)]"
                      : "text-[var(--color-text-primary)] hover:bg-[rgba(209,0,113,0.03)]"
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    className={`h-4 w-4 text-[var(--color-text-secondary)] transition-transform duration-200 ${mobileExpanded === group.label ? "rotate-180 text-[var(--color-magenta-bold)]" : ""}`}
                  />
                </button>
                {mobileExpanded === group.label && (
                  <div className="ml-2 pl-3 border-l-2 border-[rgba(209,0,113,0.12)] mb-2 mt-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href as "/"}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2 no-underline hover:bg-[rgba(209,0,113,0.04)] transition-colors"
                      >
                        <span className="text-[var(--color-magenta-bold)]">
                          {item.icon}
                        </span>
                        <div>
                          <span className="text-sm font-medium text-[var(--color-text-primary)]">
                            {item.label}
                          </span>
                          {item.desc && (
                            <span className="block text-[11px] text-[var(--color-text-secondary)] leading-tight">
                              {item.desc}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Drawer footer CTA */}
        <div className="border-t border-[var(--color-line)] p-5 space-y-2.5 bg-[rgba(209,0,113,0.02)]">
          <a
            href="https://play.google.com/store/apps/details?id=com.wafaindonesia"
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full justify-center no-underline text-sm"
            onClick={() => setMobileOpen(false)}
          >
            <Download className="h-4 w-4" />
            Download Aplikasi Gratis
          </a>
          <a
            href="https://wa.me/6281130589310"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary w-full justify-center no-underline text-sm"
            onClick={() => setMobileOpen(false)}
          >
            <Handshake className="h-4 w-4" />
            Gabung Mitra
          </a>
        </div>
      </div>
    </>
  );
}
