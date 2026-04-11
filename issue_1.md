# Issue #1 — Implementasi Landing Page Wafa Indonesia

## Ringkasan

Implementasi full landing page **wafaindonesia.or.id** berdasarkan brief di `planning.md` dan konten di `profile.md`. Project menggunakan **TanStack Start** (React 19 + Vite + SSR), **Tailwind CSS v4**, **TypeScript**, dan **lucide-react** sebagai icon library.

Saat ini project masih berupa boilerplate TanStack Start dengan 2 route (`/`, `/about`), 3 komponen dasar (`Header`, `Footer`, `ThemeToggle`), dan design system placeholder (lagoon/sea-ink theme). Seluruh konten dan styling perlu di-overhaul sesuai brand **"Wafa Glow"**.

---

## Tech Stack Existing

| Layer | Teknologi |
|-------|-----------|
| Framework | TanStack Start (React 19, SSR) |
| Routing | TanStack Router (file-based) |
| Styling | Tailwind CSS v4 + `@tailwindcss/vite` |
| Build | Vite 7.x |
| Language | TypeScript 5.7 |
| Icons | `lucide-react` ^0.545.0 ✅ sudah installed |
| Package Mgr | Bun |

---

## Fase 1: Foundation — Design System & Global Setup

### 1.1 Overhaul `src/styles.css` — Design Tokens "Wafa Glow"

Ganti seluruh CSS variable dari tema lagoon/sea-ink ke palette Wafa Glow.

**Tasks:**
- [ ] Ganti Google Fonts import ke `Poppins` (400, 500, 600, 700) + `Plus Jakarta Sans` (400, 500, 600, 700) + `Tajawal` (400, 700)
- [ ] Hapus import `Fraunces` & `Manrope`
- [ ] Update `@theme` block: set `--font-sans: 'Plus Jakarta Sans'` dan tambah `--font-heading: 'Poppins'` serta `--font-arabic: 'Tajawal'`
- [ ] Replace `:root` CSS variables dengan token Wafa Glow:

```css
:root {
  /* Primary Brand (Magenta Family) */
  --magenta-deep: #9d167c;
  --magenta-bold: #d10071;
  --magenta-bright: #dd0d89;
  --magenta-neon: #ff0092;

  /* Growth & Keberkahan (Green Family) */
  --emerald: #1f8124;
  --fresh: #38b33e;
  --mint: #49d850;

  /* Energy & Warmth (Orange-Yellow Family) */
  --tangerine: #ff7b00;
  --golden: #ff9100;
  --sun: #ffb613;
  --lemon: #ffd313;

  /* Neutral & Depth */
  --white: #FFFFFF;
  --deep: #4b2a67;
  --soft-lavender: #d099ff;

  /* Semantic tokens */
  --bg-base: #FFFFFF;
  --text-primary: #1a1a2e;
  --text-secondary: #555570;
  --surface: rgba(255, 255, 255, 0.9);
  --line: rgba(157, 22, 124, 0.12);
  --header-bg: rgba(255, 255, 255, 0.92);
}
```

- [ ] Update dark mode variables (opsional, low-priority, brief fokus ke light theme)
- [ ] Update `body` background — white bersih dengan subtle gradient Magenta-Emerald
- [ ] Update global `a` link color ke `--magenta-bold`
- [ ] Update `.island-shell`, `.feature-card` classes sesuai rounded corners besar (16-24px), subtle shadow, border Mint/Soft Lavender
- [ ] Tambah utility classes:
  - `.section-padding` — padding vertikal konsisten antar section
  - `.container` — max-width 1200px centered
  - `.gradient-text` — gradient teks Magenta → Emerald
  - `.card-hover` — micro-interaction (scale + shadow pada hover)

---

### 1.2 Update `src/routes/__root.tsx` — Meta & Global Head

**Tasks:**
- [ ] Ganti `<title>` dari "TanStack Start Starter" ke "Wafa Indonesia — Belajar Al-Qur'an Metode Otak Kanan"
- [ ] Tambah `<meta name="description">` dengan: "Metode Wafa — Cara mudah, cepat, dan menyenangkan belajar Al-Qur'an. 15.000+ guru tersertifikasi, 1200+ lembaga di 35 provinsi Indonesia."
- [ ] Tambah `<meta property="og:*">` tags (title, description, image, url)
- [ ] Tambah Google Fonts `<link>` untuk Poppins, Plus Jakarta Sans, Tajawal
- [ ] Ganti `lang="en"` ➜ `lang="id"`
- [ ] Hapus `TanStackDevtools` dan `TanStackRouterDevtoolsPanel` dari production build (pindahkan ke conditional render `import.meta.env.DEV`)

---

## Fase 2: Layout Components

### 2.1 Redesign `src/components/Header.tsx` — Navbar Wafa

Ganti navbar boilerplate berupa sticky header dengan logo Wafa, mega-menu navigasi, dan CTA button.

**Tasks:**
- [ ] Ganti logo/brand dari "TanStack Start" ke logo Wafa (teks "WAFA" dengan dot magenta, atau image logo)
- [ ] Implementasi navigation links sesuai brief:
  - `Metode` (dropdown: 5T Pendidikan, 7M Sistem Mutu, Otak Kanan, Irama Hijaz)
  - `Layanan` (dropdown: Untuk Individu, Untuk Lembaga, Event & Workshop, Sertifikasi)
  - `Produk` (dropdown: Buku Tilawah, Buku Menulis, Aplikasi Wafa, Media Pembelajaran)
  - `Blog` (dropdown: Risalah Dakwah, Ikhtisar Wafa, Info Terkini, Parenting Qur'ani)
  - `Kontak`
- [ ] Implementasi dropdown/mega-menu component (hover-activated desktop, click-activated mobile)
- [ ] Tambah CTA button "Download App" di kanan navbar — style `--magenta-bold` rounded-full
- [ ] Implementasi mobile hamburger menu menggunakan icon `Menu` dan `X` dari lucide-react
- [ ] Tambah mobile drawer/overlay navigasi
- [ ] Gunakan lucide-react icons: `ChevronDown` (dropdown indicator), `Menu`, `X`, `Download`
- [ ] Pastikan header sticky, backdrop-blur, dan border-bottom subtle

---

### 2.2 Redesign `src/components/Footer.tsx` — Footer Wafa

**Tasks:**
- [ ] Ganti background ke `--deep` (#4b2a67) dengan teks putih
- [ ] Implementasi layout 4 kolom:
  - **Tentang Wafa**: Sejarah, Visi, Dewan Pakar
  - **Layanan**: 7M, SAGAQU, PSGA
  - **Produk**: Buku, Aplikasi
  - **Kontak**: Pusat, Daerah
- [ ] Tambah row newsletter: input email + button "Subscribe" untuk "Tips Parenting Qur'ani Mingguan"
- [ ] Tambah social media icons menggunakan lucide-react: `Instagram`, `Facebook`, `Youtube`
  - TikTok dan WhatsApp custom SVG (tidak ada di lucide)
- [ ] Tambah copyright: "© 2026 Yayasan Syafa'atul Qur'an Indonesia (YAQIN)"
- [ ] Tambah legalitas: "SK Kemenkumham | Tashih LPMQ Kemenag"
- [ ] Responsif: 4 kolom desktop → 2 kolom tablet → 1 kolom mobile (stack)

---

### 2.3 Hapus `src/components/ThemeToggle.tsx`

**Tasks:**
- [ ] Hapus file `ThemeToggle.tsx` (brief Wafa hanya Light theme, dark mode opsional nanti)
- [ ] Hapus referensi ThemeToggle dari `Header.tsx`
- [ ] Hapus `THEME_INIT_SCRIPT` dari `__root.tsx` (atau simplify untuk light-only)

---

## Fase 3: Landing Page — `src/routes/index.tsx`

Implementasi seluruh 10 section landing page. Setiap section dibuat sebagai komponen terpisah di `src/components/landing/`.

### 3.1 Buat folder `src/components/landing/`

Buat komponen landing page per-section:

---

### 3.2 `HeroSection.tsx` — Section 1: "Gerbang Wafa"

**Layout:** Full viewport height, background putih + ilustrasi

**Tasks:**
- [ ] Buat komponen `HeroSection`
- [ ] Headline: "Belajar Al-Qur'an Jadi Mudah, Cepat, & Menyenangkan" — font Poppins Bold, warna `--magenta-deep`
- [ ] Implementasi typing animation pada kata "Menyenangkan" (highlight magenta-neon)
- [ ] Subheadline: "Metode Otak Kanan + Irama Hijaz + Sistem 7M Terbukti Melahirkan 15.000+ Guru & 1200+ Lembaga di 35 Provinsi"
- [ ] CTA Primary: "Mulai Perjalanan" — button `--magenta-bold`, rounded-full, hover → `--magenta-neon`
- [ ] CTA Secondary: "Lihat Demo Aplikasi" — button outline `--emerald`
- [ ] Visual area: placeholder untuk composite image (anak mengaji + ortu + guru)
- [ ] Decorative gradient blobs (Magenta + Emerald) sebagai background accent
- [ ] H1 untuk SEO: "Belajar Al-Qur'an Metode Otak Kanan Terbaik di Indonesia"
- [ ] Gunakan lucide-react: `Play` (icon di CTA secondary), `ArrowRight` (icon di CTA primary)

---

### 3.3 `ProofStrip.tsx` — Section 2: "Trust at First Scroll"

**Tasks:**
- [ ] Buat komponen `ProofStrip`
- [ ] Baris 1: Infinite horizontal scroll (marquee) logo mitra — Muhammadiyah, NU, Al Azhar, dll (placeholder images)
- [ ] Baris 2: Stats counter animasi (scroll-triggered):
  - `35 Provinsi` — icon `MapPin` dari lucide-react
  - `15.000+ Guru Tersertifikasi` — icon `GraduationCap`
  - `500.000+ Siswa` — icon `Users`
  - `Sejak 2012` — icon `Calendar`
- [ ] Implementasi count-up animation saat element masuk viewport (IntersectionObserver)
- [ ] Testimonial card rotating/carousel — quote Prof. Roem Rowi
- [ ] Styling: background subtle `--sand` atau gradient lembut

---

### 3.4 `MethodSection.tsx` — Section 3: "Kenapa Wafa Berbeda?" (5T)

**Layout:** Sticky scroll — visual interaktif di kiri, cards scroll di kanan

**Tasks:**
- [ ] Buat komponen `MethodSection`
- [ ] Left sticky: Visual pentagon 5T (bisa SVG interaktif atau ilustrasi) — berubah sesuai scroll
- [ ] Right scrolling: 5 cards untuk masing-masing T:
  1. **Tilawah** — Membaca & Menulis dengan Makhraj yang Benar
  2. **Tahfidz** — Menghafal 5-30 Juz dengan Teknik Otak Kanan
  3. **Tarjamah** — Memahami Bahasa Arab Al-Qur'an
  4. **Tafhim** — Memahami Makna Ayat-ayat Pilihan
  5. **Tafsir** — Menafsirkan dengan Pendekatan Kontekstual
- [ ] Implementasi scroll-trigger sync antara cards dan visual pentagon
- [ ] Card styling: rounded-2xl, border Mint, shadow subtle
- [ ] Lucide icons per card: `BookOpen` (Tilawah), `Brain` (Tahfidz), `Languages` (Tarjamah), `Lightbulb` (Tafhim), `ScrollText` (Tafsir)
- [ ] Responsive fallback: pada mobile, stack vertikal tanpa sticky

---

### 3.5 `EcosystemSection.tsx` — Section 4: "Seluruh Perjalanan dalam Satu Genggaman"

**Layout:** Tabbed interface dengan konten dinamis per tab

**Tasks:**
- [ ] Buat komponen `EcosystemSection`
- [ ] Implementasi 4 tabs:
  1. **Aplikasi Wafa** — Phone mockup + features checklist + download buttons
  2. **Buku & Media** — 3D book carousel / grid produk
  3. **Program Guru** — SAGAQU & PSGA timeline visual
  4. **Komunitas** — Peta 35 provinsi preview + event calendar mini
- [ ] Tab "Aplikasi Wafa" (default aktif):
  - Phone mockup di kiri (gambar/placeholder)
  - Headline: "Belajar Kapan Saja, Di Mana Saja"
  - Features checklist dengan icon `Check` dari lucide-react:
    - ✓ Audio Makhraj Interaktif
    - ✓ Lagu Hijaz Tanpa Iklan
    - ✓ Quiz-Game Seru
    - ✓ Progress Tracking
  - Button: "Download Gratis — Google Play" + "Berlangganan Full"
  - Testimonial app users carousel (5 review bintang 5)
- [ ] Tab styling: pill-shaped, active tab magenta-bold
- [ ] Lucide icons: `Smartphone` (Aplikasi), `Book` (Buku), `Award` (Program), `Globe` (Komunitas), `Check`
- [ ] Animasi tab transition (fade in/out atau slide)

---

### 3.6 `QualitySystemSection.tsx` — Section 5: "Jaminan Mutu Pembelajaran" (7M)

**Layout:** Vertical timeline dengan scroll trigger

**Tasks:**
- [ ] Buat komponen `QualitySystemSection`
- [ ] Implementasi vertical timeline 7 steps:
  1. **M1 Memetakan** — Tashnif: Mengukur kemampuan awal guru & siswa
  2. **M2 Memperbaiki** — Tahsin: Perbaikan bertahap berdasarkan hasil
  3. **M3 Menstandarisasi** — Standards proses pembelajaran & kualifikasi guru
  4. **M4 Mendampingi** — Coaching kepala sekolah, koordinator, guru
  5. **M5 Mensupervisi** — Monitoring & evaluasi kompetensi guru
  6. **M6 Munaqosyah** — Ujian akhir tilawah-tahfidz
  7. **M7 Mengukuhkan** — Apresiasi capaian & syahadah
- [ ] Setiap step: icon, judul, deskripsi, dan visual/mockup placeholder
- [ ] Scroll-triggered reveal: setiap step muncul saat di-scroll
- [ ] Timeline line: warna `--emerald` dengan progress fill (animated)
- [ ] CTA di akhir: "Ingin Terapkan 7M di Lembaga Anda?" + WhatsApp link
- [ ] Lucide icons per step: `Map` (M1), `Wrench` (M2), `Shield` (M3), `HandHeart` (M4), `ClipboardCheck` (M5), `FileCheck` (M6), `Trophy` (M7)
- [ ] Lucide icon CTA: `MessageCircle` (WhatsApp)

---

### 3.7 `SuccessStoriesSection.tsx` — Section 6: "Bukti Nyata"

**Layout:** Masonry grid layout

**Tasks:**
- [ ] Buat komponen `SuccessStoriesSection`
- [ ] Masonry grid (3 kolom desktop, 2 tablet, 1 mobile) dengan card beragam ukuran:
  - Video testimonial Prof. Roem Rowi (placeholder thumbnail + play icon)
  - Card Gibran Alfatih — Juara Hafiz Indonesia 2024
  - Infografis "500% Kenaikan Minat Mengaji"
  - Foto 10 Tahun NUFI Sidoarjo
  - Quote Ibu Bupati Sumenep
  - Supervisi Bojonegoro 2026
- [ ] Card styling: rounded-2xl, shadow, accent Golden/Emerald border
- [ ] Hover effect: scale + shadow increased
- [ ] Button: "Load More Stories" atau "Lihat Semua di Blog"
- [ ] Lucide icons: `Play` (video play), `Quote` (quote card), `TrendingUp` (infografis), `ArrowRight` (load more)

---

### 3.8 `KnowledgeHubSection.tsx` — Section 7: "Risalah & Inspirasi"

**Layout:** Content preview grid

**Tasks:**
- [ ] Buat komponen `KnowledgeHubSection`
- [ ] Section "Latest from Risalah Dakwah": 3 article cards horizontal
- [ ] Section "Latest from Info Terkini": 3 article cards horizontal
- [ ] Section "YouTube Channel Preview": 3 video thumbnails dengan play icon overlay
- [ ] Article card: image, category badge, title, excerpt, date + read time
- [ ] CTA: "Subscribe YouTube Wafa Indonesia"
- [ ] Image placeholders untuk thumbnail artikel & video
- [ ] Lucide icons: `Newspaper` (section header), `Clock` (read time), `Youtube` (YouTube section), `ArrowRight` (Baca →)
- [ ] Responsive: 3 kolom desktop → scroll horizontal mobile

---

### 3.9 `CommunityMapSection.tsx` — Section 8: "Wafa di Dekat Anda"

**Layout:** Interactive map section

**Tasks:**
- [ ] Buat komponen `CommunityMapSection`
- [ ] Headline: "Temukan Wafa di 35 Provinsi Indonesia"
- [ ] SVG peta Indonesia — clickable per provinsi (simplified)
  - Hover provinsi ➜ show tooltip jumlah mitra
  - Click provinsi ➜ expand detail kontak
- [ ] Search box: "Cari kota Anda..." — icon `Search` dari lucide-react
- [ ] Data statik Wafa daerah dari `profile.md` (Bengkulu, Jabar, Jateng, Jatim, Kaltim, dll.)
- [ ] Fallback mobile: list searchable instead of map
- [ ] Lucide icons: `Search`, `MapPin`

---

### 3.10 `FinalCTASection.tsx` — Section 9: "Mulai Hari Ini"

**Layout:** Two-column CTA cards + FAQ accordion

**Tasks:**
- [ ] Buat komponen `FinalCTASection`
- [ ] Headline: "Siap Memulai Perjalanan Al-Qur'an?"
- [ ] Card kiri — Download Aplikasi Wafa:
  - Icon `Smartphone` dari lucide-react
  - "Download Aplikasi Wafa — Gratis untuk 6 halaman pertama"
  - Button Google Play
- [ ] Card kanan — Jadikan Mitra:
  - Icon `School` dari lucide-react
  - "Jadikan Lembaga Anda Mitra Wafa — Dapatkan pendampingan implementasi 7M"
  - Button "Konsultasi Gratis" → WhatsApp 0811 3058 9310
- [ ] FAQ Accordion (5 pertanyaan umum):
  - Gunakan lucide-react: `ChevronDown` / `ChevronUp` toggle
  - Contoh FAQ:
    1. Apa itu Metode Wafa?
    2. Berapa biaya bermitra dengan Wafa?
    3. Bagaimana cara download Aplikasi Wafa?
    4. Apakah Wafa tersedia di kota saya?
    5. Bagaimana proses sertifikasi guru?
- [ ] Smooth collapse/expand animation pada accordion

---

## Fase 4: Sub-Pages (Routes)

### 4.1 Buat `src/routes/metode.tsx` — Halaman Metode

**Tasks:**
- [ ] Buat route `/metode`
- [ ] Hero: "Sistem Pembelajaran Al-Qur'an Terintegrasi"
- [ ] Sticky anchor navigation: [5T Pendidikan] [7M Sistem Mutu] [Otak Kanan] [Irama Hijaz]
- [ ] Section 5T: Interactive pentagon visualization + expandable detail cards per T
- [ ] Section 7M: Horizontal timeline (scroll-triggered)
- [ ] Section Otak Kanan: Split layout brain visualization + penjelasan
- [ ] Section Irama Hijaz: Audio waveform player placeholder + comparison cards (Bayati vs Hijaz vs Nahawand)
- [ ] Section Sertifikasi & Legalitas: badges YAQIN, Kemenkumham, Kemenag, LPMQ
- [ ] Lucide icons: `Brain`, `Music`, `Award`, `BookOpen`, `Shield`

---

### 4.2 Buat `src/routes/layanan.tsx` — Halaman Layanan

**Tasks:**
- [ ] Buat route `/layanan`
- [ ] Hero: "Solusi Pembelajaran Al-Qur'an untuk Semua"
- [ ] Filter tabs: [Saya Pemula] [Saya Sudah Bisa] [Saya Pengelola]
- [ ] Service cards grid (responsive 1-3 kolom):
  - Aplikasi Wafa (freemium Rp49.000/bln)
  - Akademi Tahsin Online (ATO) — Rp299.000-599.000
  - Akademi Tahfidz (ATA)
  - SAGAQU — Sertifikasi guru
  - Paket Kemitraan Sekolah (Starter/Growth/Excellence)
  - Program Khusus Mitra (PSGA, ODT, Upgrading, SIMAAN)
- [ ] Kalkulator Investasi Lembaga (interactive embedded tool)
- [ ] Event Calendar preview (upcoming 4 events)
- [ ] Lucide icons: `Smartphone`, `GraduationCap`, `BookOpen`, `Building`, `Calculator`, `CalendarDays`

---

### 4.3 Buat `src/routes/produk.tsx` — Halaman Produk

**Tasks:**
- [ ] Buat route `/produk`
- [ ] Hero: "Media Pembelajaran Berkualitas"
- [ ] Category filter horizontal: Semua, Buku Tilawah, Buku Menulis, Kartu & Peraga, Aplikasi, Audio/Video, Paket Lengkap
- [ ] Sort: Terbaru, Terlaris, Harga
- [ ] Product grid (4 kolom desktop, 2 tablet, 1 mobile):
  - Card: cover image, badge (Bestseller/New), nama, rating, harga, button Detail + Keranjang
  - Data produk dari `profile.md` (30+ produk)
- [ ] Featured: Paket Bundel (Pemula TK-SD, Menengah, Lengkap, Lembaga)
- [ ] Lucide icons: `Star` (rating), `ShoppingCart` (keranjang), `Filter`, `Grid3x3`, `List`, `Tag` (badge)

---

### 4.4 Buat `src/routes/blog/index.tsx` & `src/routes/blog/$slug.tsx` — Halaman Blog

**Tasks:**
- [ ] Buat route `/blog` (index)
- [ ] Buat route `/blog/$slug` (article detail) — dynamic route
- [ ] Index: Featured article hero + article grid (3 kolom)
- [ ] Category pills: Semua, Risalah Dakwah, Ikhtisar Wafa, Info Terkini, Parenting Qur'ani, Metode & Tips, Kisah Mitra
- [ ] Search bar: icon `Search` dari lucide-react
- [ ] Article card: image, category badge, title, excerpt, date + read time + author
- [ ] Pagination atau "Load More"
- [ ] Detail page (`/$slug`):
  - Breadcrumbs: Beranda > Blog > Kategori > Judul
  - Category badge, title, meta (author, date, read time)
  - Share buttons: icon `Share2`, custom FB/WA/X icons
  - Content area (rich text, images, video embeds, quote blocks)
  - Author box
  - Related articles (3 cards)
- [ ] Sidebar (desktop): Popular posts, Newsletter widget, Categories, Social media
- [ ] Data: statik/mock dari konten `profile.md`
- [ ] Lucide icons: `Search`, `Clock`, `User`, `Share2`, `ArrowLeft` (back), `ChevronRight` (breadcrumb)

---

### 4.5 Buat `src/routes/kontak.tsx` — Halaman Kontak

**Tasks:**
- [ ] Buat route `/kontak`
- [ ] Two-column layout:
  - Kiri: Form kontak (Nama, Email, Telepon, Kategori dropdown, Pesan, Button Kirim)
  - Kanan: Info kontak (alamat, telepon, WA, email, jam operasional) + Google Maps embed placeholder
- [ ] Wafa Daerah: Accordion/tabbed per region
  - Data dari `profile.md`: Bengkulu, Jabar, Jateng, Jatim, Kaltim, Lampung, NTB, NTT, Papua, Sulsel
  - Per daerah: Nama koordinator + WhatsApp click-to-chat
- [ ] Lucide icons: `Send` (kirim), `MapPin`, `Phone`, `Mail`, `Clock`, `ChevronDown` (accordion)

---

### 4.6 Buat `src/routes/tentang-kami.tsx` — Halaman Tentang Kami

**Tasks:**
- [ ] Buat route `/tentang-kami`
- [ ] Hero: Video message placeholder Direktur H. Mohamad Yamin, M.Pd.
- [ ] Sections:
  1. Selayang Pandang — visi besar Wafa
  2. Sejarah & Legalitas — timeline 2012-2026
  3. Dewan Pakar — profile cards (Dr. K.H. Mudawi, Dr. K.H. Baihaqi, K.H. Farid Dhofir)
  4. Tim Trainer — grid cards dengan spesialisasi
  5. Sebaran Wafa — interactive map mini (reuse `CommunityMapSection`)
  6. Budaya Kerja — USRAH, NATIJAH, ILMIAH, KAFA'AH
- [ ] Button: Download Company Profile PDF, Lihat Annual Report
- [ ] Lucide icons: `Target` (visi), `History` (sejarah), `Users` (dewan), `Briefcase` (trainer), `MapPin` (sebaran), `Heart` (budaya)

---

### 4.7 Buat `src/routes/mitra.tsx` — Halaman Kemitraan

**Tasks:**
- [ ] Buat route `/mitra`
- [ ] Hero: "Jadikan Lembaga Anda Pilihan Utama"
- [ ] PAS Framework section (Problem → Agitation → Solution)
- [ ] Alur Bermitra (visual step-by-step): START → PENDAFTARAN → STANDARISASI → PENDAMPINGAN → OUTPUT
- [ ] Case Studies carousel: NUFI Sidoarjo, MAN 2 Lubuklinggau, TK Islam Al-Azhar
- [ ] Investment Table (3 paket: Starter Rp5jt, Growth Rp12jt, Excellence Rp25jt)
- [ ] Lead Capture Form (high-commitment): Nama Lembaga, Jenis, Alamat, Jumlah Siswa, dll.
- [ ] CTA WhatsApp: 0811 3058 9310
- [ ] Lucide icons: `Building`, `TrendingUp`, `CheckCircle`, `MessageCircle` (WA), `FileText` (case study)

---

### 4.8 Buat `src/routes/404.tsx` atau Not Found Component

**Tasks:**
- [ ] Buat 404 error page
- [ ] Ilustrasi placeholder karakter Wafa bingung
- [ ] Teks: "Halaman yang Anda cari tidak ditemukan"
- [ ] Quick links: Metode Wafa, Aplikasi, Kemitraan, Blog Terbaru, Kontak
- [ ] Button: "Kembali ke Beranda"
- [ ] Lucide icons: `Home` (beranda), `ArrowLeft` (kembali)

---

## Fase 5: Shared/Reusable Components

Buat komponen reusable di `src/components/ui/`:

### 5.1 UI Components

**Tasks:**
- [ ] `Button.tsx` — Primary (magenta-bold), Secondary (emerald), Outline, Ghost variants + size props
- [ ] `Card.tsx` — Glassmorphism card dengan border, shadow, rounded, hover-effect
- [ ] `Badge.tsx` — Untuk category labels, "New", "Bestseller" tags
- [ ] `SectionHeading.tsx` — Kicker (uppercase small) + Heading (Poppins Bold) + Subheading (Plus Jakarta Sans)
- [ ] `Accordion.tsx` — Expand/collapse dengan animasi smooth + `ChevronDown` icon
- [ ] `TabGroup.tsx` — Pill-shaped tab switcher dengan konten dinamis
- [ ] `Marquee.tsx` — Infinite horizontal scroll untuk logo mitra
- [ ] `CountUp.tsx` — Animated number counter (IntersectionObserver triggered)
- [ ] `TestimonialCarousel.tsx` — Auto-rotating testimonial cards
- [ ] `ProductCard.tsx` — Product grid item (image, name, rating stars, price, CTA)

---

## Fase 6: Polish & SEO

### 6.1 Micro-Animations

**Tasks:**
- [ ] Scale pada hover untuk semua cards & buttons
- [ ] Gentle bounce pada CTA buttons
- [ ] Fade-in / rise-in pada scroll (IntersectionObserver)
- [ ] Progress fill animation pada 7M timeline
- [ ] Typing animation pada Hero headline
- [ ] Tab content transition (fade/slide)

### 6.2 Responsivitas

**Tasks:**
- [ ] Mobile-first approach: semua elemen dioptimalkan layar kecil terlebih dahulu
- [ ] Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- [ ] Test di viewport 320px, 375px, 768px, 1024px, 1440px
- [ ] Hamburger menu untuk navigasi mobile
- [ ] Horizontal scroll untuk kategori filters di mobile
- [ ] Stack vertikal untuk grid sections di mobile

### 6.3 SEO & Performance

**Tasks:**
- [ ] H1 unik per halaman
- [ ] Schema markup: `EducationalOrganization`, `Course` (JSON-LD)
- [ ] Sitemap generation (TanStack Start SSR built-in)
- [ ] Proper `<meta>` per halaman (title, description, OG tags)
- [ ] Image lazy loading (`loading="lazy"`)
- [ ] Font display swap untuk Google Fonts
- [ ] Semantic HTML: `<section>`, `<article>`, `<nav>`, `<aside>`, `<main>`

---

## Catatan Teknis

### Lucide React Usage Pattern

Seluruh kebutuhan icon menggunakan `lucide-react` yang sudah ter-install:

```tsx
import { Menu, X, ChevronDown, ArrowRight, Play } from 'lucide-react'

// Contoh penggunaan
<Menu className="h-6 w-6" />
<ArrowRight className="h-4 w-4" />
```

**Icon mapping ringkas:**

| Komponen | Icons yang digunakan |
|----------|---------------------|
| Header | `Menu`, `X`, `ChevronDown`, `Download` |
| Footer | `Instagram`, `Facebook`, `Youtube`, `Mail`, `Phone` |
| Hero | `ArrowRight`, `Play` |
| Proof Strip | `MapPin`, `GraduationCap`, `Users`, `Calendar` |
| 5T Method | `BookOpen`, `Brain`, `Languages`, `Lightbulb`, `ScrollText` |
| Ecosystem | `Smartphone`, `Book`, `Award`, `Globe`, `Check` |
| 7M System | `Map`, `Wrench`, `Shield`, `HandHeart`, `ClipboardCheck`, `FileCheck`, `Trophy` |
| Success Stories | `Play`, `Quote`, `TrendingUp`, `ArrowRight` |
| Knowledge Hub | `Newspaper`, `Clock`, `Youtube`, `ArrowRight` |
| Community Map | `Search`, `MapPin` |
| Final CTA | `Smartphone`, `School`, `ChevronDown`, `ChevronUp` |
| Blog | `Search`, `Clock`, `User`, `Share2`, `ArrowLeft`, `ChevronRight` |
| Kontak | `Send`, `MapPin`, `Phone`, `Mail`, `Clock`, `ChevronDown` |
| Produk | `Star`, `ShoppingCart`, `Filter`, `Grid3x3`, `List`, `Tag` |

### File Structure Target

```
src/
├── components/
│   ├── Header.tsx              ← redesign
│   ├── Footer.tsx              ← redesign
│   ├── landing/
│   │   ├── HeroSection.tsx
│   │   ├── ProofStrip.tsx
│   │   ├── MethodSection.tsx
│   │   ├── EcosystemSection.tsx
│   │   ├── QualitySystemSection.tsx
│   │   ├── SuccessStoriesSection.tsx
│   │   ├── KnowledgeHubSection.tsx
│   │   ├── CommunityMapSection.tsx
│   │   └── FinalCTASection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── SectionHeading.tsx
│       ├── Accordion.tsx
│       ├── TabGroup.tsx
│       ├── Marquee.tsx
│       ├── CountUp.tsx
│       ├── TestimonialCarousel.tsx
│       └── ProductCard.tsx
├── routes/
│   ├── __root.tsx              ← update meta & fonts
│   ├── index.tsx               ← landing page (compose sections)
│   ├── metode.tsx
│   ├── layanan.tsx
│   ├── produk.tsx
│   ├── blog/
│   │   ├── index.tsx
│   │   └── $slug.tsx
│   ├── kontak.tsx
│   ├── tentang-kami.tsx
│   ├── mitra.tsx
│   └── 404.tsx
├── data/                       ← static data & mock content
│   ├── products.ts
│   ├── articles.ts
│   ├── testimonials.ts
│   ├── wafa-daerah.ts
│   └── faq.ts
├── styles.css                  ← overhaul design tokens
├── routeTree.gen.ts
└── router.tsx
```

---

## Prioritas Implementasi

| Prioritas | Fase | Scope |
|-----------|------|-------|
| 🔴 P0 | Fase 1 | Design System (tokens, fonts, global styles) |
| 🔴 P0 | Fase 2 | Header + Footer (navigasi utama) |
| 🔴 P0 | Fase 3.2–3.3 | Hero Section + Proof Strip |
| 🟠 P1 | Fase 3.4–3.6 | 5T Method + Ecosystem + 7M System |
| 🟠 P1 | Fase 5 | Shared UI Components |
| 🟡 P2 | Fase 3.7–3.10 | Success Stories + Knowledge Hub + Map + CTA |
| 🟡 P2 | Fase 4.7 | Halaman Kemitraan (conversion page) |
| 🟢 P3 | Fase 4.1–4.6 | Sub-pages (Metode, Layanan, Produk, Blog, Kontak, Tentang) |
| 🟢 P3 | Fase 6 | Polish, animations, SEO, performance |
| ⚪ P4 | Fase 4.8 | 404 page |
