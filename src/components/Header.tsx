import { Link } from '@tanstack/react-router'
import { useState, useRef, useEffect } from 'react'
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
  MessageCircle,
  Globe,
} from 'lucide-react'

type NavItem = {
  label: string
  href: string
  icon?: React.ReactNode
  desc?: string
}

type NavGroup = {
  label: string
  items: NavItem[]
}

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Metode',
    items: [
      { label: '5T Pendidikan', href: '/metode#5t', icon: <BookOpen className="h-4 w-4" />, desc: 'Tilawah, Tahfidz, Tarjamah, Tafhim, Tafsir' },
      { label: '7M Sistem Mutu', href: '/metode#7m', icon: <Layers className="h-4 w-4" />, desc: 'Standar manajemen mutu pembelajaran' },
      { label: 'Otak Kanan', href: '/metode#otak-kanan', icon: <Users className="h-4 w-4" />, desc: 'Metode pembelajaran menyenangkan' },
      { label: 'Irama Hijaz', href: '/metode#hijaz', icon: <Newspaper className="h-4 w-4" />, desc: 'Lagu khas Wafa yang syahdu' },
    ],
  },
  {
    label: 'Layanan',
    items: [
      { label: 'Untuk Individu', href: '/layanan#individu', icon: <Users className="h-4 w-4" />, desc: 'Aplikasi & kursus online' },
      { label: 'Untuk Lembaga', href: '/layanan#lembaga', icon: <GraduationCap className="h-4 w-4" />, desc: 'Kemitraan & pendampingan 7M' },
      { label: 'Event & Workshop', href: '/layanan#event', icon: <Calendar className="h-4 w-4" />, desc: 'PSGA, ODT, SIMAAN, Upgrading' },
      { label: 'Sertifikasi', href: '/layanan#sertifikasi', icon: <Layers className="h-4 w-4" />, desc: 'SAGAQU & syahadah resmi' },
    ],
  },
  {
    label: 'Produk',
    items: [
      { label: 'Buku Tilawah', href: '/produk#tilawah', icon: <Book className="h-4 w-4" />, desc: 'Seri Jilid 1–5 & KB/TK' },
      { label: 'Buku Menulis', href: '/produk#menulis', icon: <BookOpen className="h-4 w-4" />, desc: 'Hijaiyah seri 1–6' },
      { label: 'Aplikasi Wafa', href: '/produk#aplikasi', icon: <Smartphone className="h-4 w-4" />, desc: 'Gratis di Google Play' },
      { label: 'Media Pembelajaran', href: '/produk#media', icon: <Layers className="h-4 w-4" />, desc: 'Kartu peraga, flashdisk, audio' },
    ],
  },
  {
    label: 'Blog',
    items: [
      { label: 'Risalah Dakwah', href: '/blog?cat=risalah', icon: <BookOpen className="h-4 w-4" />, desc: 'Parenting Qur\'ani & edukas' },
      { label: 'Ikhtisar Wafa', href: '/blog?cat=ikhtisar', icon: <Newspaper className="h-4 w-4" />, desc: 'SAGAQU, ATO & cerita sukses' },
      { label: 'Info Terkini', href: '/blog?cat=info', icon: <Globe className="h-4 w-4" />, desc: 'Berita & kegiatan terbaru' },
    ],
  },
]

type DropdownProps = {
  group: NavGroup
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

function DropdownMenu({ group, isOpen, onToggle, onClose }: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="nav-link flex items-center gap-1 rounded-lg px-2 py-1.5 hover:bg-[rgba(209,0,113,0.05)]"
        aria-expanded={isOpen}
      >
        {group.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_20px_60px_rgba(157,22,124,0.12),0_8px_24px_rgba(0,0,0,0.08)]"
          style={{ animation: 'rise-in 200ms cubic-bezier(0.16,1,0.3,1) both' }}
        >
          <div className="p-2">
            {group.items.map((item) => (
              <Link
                key={item.href}
                to={item.href as '/'}
                onClick={onClose}
                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[rgba(209,0,113,0.05)] no-underline group"
              >
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[rgba(209,0,113,0.08)] text-[var(--magenta-bold)] transition-colors group-hover:bg-[rgba(209,0,113,0.14)]">
                  {item.icon}
                </span>
                <div>
                  <p className="m-0 text-sm font-semibold text-[var(--text-primary)] font-[var(--font-heading)]">
                    {item.label}
                  </p>
                  {item.desc && (
                    <p className="m-0 text-xs text-[var(--text-secondary)] mt-0.5">
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
  )
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  function toggleMenu(label: string) {
    setOpenMenu((prev) => (prev === label ? null : label))
  }

  function closeAll() {
    setOpenMenu(null)
  }

  // Close mobile drawer on resize
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-[var(--line)]"
        style={{ background: 'var(--header-bg)', backdropFilter: 'blur(16px)' }}
      >
        <nav className="page-wrap flex items-center gap-4 py-3 lg:py-3.5">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-2 no-underline"
            onClick={closeAll}
          >
            <img src="/logo.png" alt="Logo Wafa Indonesia" className='h-12 w-12 object-contain' />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 ml-6">
            {NAV_GROUPS.map((group) => (
              <DropdownMenu
                key={group.label}
                group={group}
                isOpen={openMenu === group.label}
                onToggle={() => toggleMenu(group.label)}
                onClose={closeAll}
              />
            ))}
            <Link
              to="/kontak"
              className="nav-link rounded-lg px-2 py-1.5 hover:bg-[rgba(209,0,113,0.05)] no-underline"
              onClick={closeAll}
            >
              Kontak
            </Link>
          </div>

          {/* CTA & Hamburger */}
          <div className="ml-auto flex items-center gap-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.wafaindonesia"
              target="_blank"
              rel="noreferrer"
              className="btn-primary hidden sm:inline-flex text-sm py-2 px-4 no-underline"
            >
              <Download className="h-4 w-4" />
              Download App
            </a>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--line)] bg-white text-[var(--text-secondary)] transition hover:border-[rgba(209,0,113,0.3)] hover:text-[var(--magenta-bold)]"
              aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
        style={{ transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 no-underline"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--magenta-bold)] to-[var(--magenta-deep)]">
              <span className="font-[var(--font-heading)] text-sm font-bold text-white">W</span>
            </div>
            <span className="font-[var(--font-heading)] font-bold text-[var(--text-primary)]">WAFA</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[rgba(209,0,113,0.06)] hover:text-[var(--magenta-bold)]"
            aria-label="Tutup menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer content */}
        <div className="flex-1 overflow-y-auto py-4">
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="mb-1">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded((v) => (v === group.label ? null : group.label))
                }
                className="flex w-full items-center justify-between px-5 py-3 text-left font-[var(--font-heading)] font-semibold text-sm text-[var(--text-primary)] hover:bg-[rgba(209,0,113,0.04)]"
              >
                {group.label}
                <ChevronDown
                  className={`h-4 w-4 text-[var(--text-secondary)] transition-transform duration-200 ${mobileExpanded === group.label ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileExpanded === group.label && (
                <div className="bg-[rgba(209,0,113,0.02)] pb-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href as '/'}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-8 py-2.5 no-underline hover:bg-[rgba(209,0,113,0.06)]"
                    >
                      <span className="text-[var(--magenta-bold)]">{item.icon}</span>
                      <span className="text-sm font-medium text-[var(--text-primary)]">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/kontak"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 px-5 py-3 font-[var(--font-heading)] font-semibold text-sm text-[var(--text-primary)] hover:bg-[rgba(209,0,113,0.04)] no-underline"
          >
            <MessageCircle className="h-4 w-4 text-[var(--magenta-bold)]" />
            Kontak
          </Link>
        </div>

        {/* Drawer footer CTA */}
        <div className="border-t border-[var(--line)] p-5 space-y-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.wafaindonesia"
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full justify-center no-underline"
            onClick={() => setMobileOpen(false)}
          >
            <Download className="h-4 w-4" />
            Download Aplikasi Gratis
          </a>
          <a
            href="https://wa.me/6281130589310"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary w-full justify-center no-underline"
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </>
  )
}