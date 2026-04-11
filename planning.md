**Deskripsi Design System Lengkap untuk wafaindonesia.or.id**

### **Design Direction**
**"Wafa Glow"** — Cheerful Islamic Education Experience

Desain baru menghadirkan perpaduan **energi penuh harapan**, **kehangatan spiritual**, dan **kesenangan belajar** yang modern. Menggunakan latar belakang putih bersih sebagai kanvas utama, desain ini menciptakan suasana **cerah, energik, playful**, namun tetap **elegan dan trustworthy** untuk orang tua serta **menyenangkan** untuk anak TK hingga SMA.

Tone keseluruhan: **Cheerful + Trendy + Modern** dengan sentuhan Islami yang lembut.

### **Color Palette Utama yang Digunakan**

Kombinasi warna yang dipilih mengambil yang paling sesuai dengan brief cheerful & modern:

#### **Primary Brand Colors (Magenta Family)**
- **Magenta Deep** `#9d167c` → Warna utama brand, digunakan untuk logo, heading utama, dan elemen penting dakwah.
- **Magenta Bold** `#d10071` → Warna tombol utama (CTA), hover state, dan accent yang energik.
- **Magenta Bright** `#dd0d89` → Untuk icon, badge, dan elemen playful (sangat cocok untuk anak).
- **Magenta Neon** `#ff0092` → Digunakan secara terbatas untuk elemen gamification, promo spesial, atau highlight “Seru untuk Anak”.

#### **Growth & Keberkahan (Green Family)**
- **Emerald** `#1f8124` → Warna utama untuk elemen sukses, progress 7M, icon metode, dan elemen keberkahan (mewakili pertumbuhan iman & ilmu).
- **Fresh** `#38b33e` → Hover state, tombol sekunder, dan elemen interaktif.
- **Mint** `#49d850` → Background subtle pada card, highlight section, dan elemen positif.

#### **Energy & Warmth (Orange-Yellow Family)**
- **Tangerine** `#ff7b00` → Badge “New”, event, dan warning lembut.
- **Golden** `#ff9100` → Testimonial cards dan social proof.
- **Sun** `#ffb613` → Rating bintang, favorite icon, dan elemen kebahagiaan.
- **Lemon** `#ffd313` → Background pattern subtle dan elemen dekoratif ringan.

#### **Neutral & Depth**
- **White** `#FFFFFF` → Background utama seluruh website (memberi kesan bersih, cerah, dan luas).
- **Deep** `#4b2a67` → Footer, teks legal, dan konten serius.
- **Soft Lavender** `#d099ff` → Divider halus dan background section sekunder (memberi nuansa lembut).

### **Typography System**

- **Heading / Judul Besar**: **Poppins Bold / SemiBold**  
  (Geometric, modern, sedikit rounded → memberikan kesan cheerful, trendy, dan energik. Sangat cocok untuk headline hero dan judul section.)

- **Body Text / Paragraf**: **Plus Jakarta Sans**  
  (Sangat readable, friendly, dengan sedikit warmth. Nyaman dibaca oleh orang tua dan anak-anak. Desain Indonesia asli yang mendukung bahasa Indonesia dengan baik.)

- **Accent / Fun Element** (tombol anak, quote, subheading playful): **Poppins Medium** dengan letter-spacing agak longgar, atau **Quicksand**.  
  Memberikan kesan ringan, energik, dan menyenangkan tanpa mengganggu keseriusan dakwah.

- **Arabic / Ayat Qur’an**: **Tajawal**  
  (Klasik tapi modern, humanist, dan sangat jelas. Memberikan kesan hangat dan mudah dibaca.)

**Font Stack Fallback**:  
`font-family: 'Poppins', 'Plus Jakarta Sans', system-ui, sans-serif;`

### **Penerapan Warna & Gaya Visual**

- **Background**: Putih bersih (`#FFFFFF`) sebagai dasar utama. Gunakan **Mint** `#49d850` dan **Soft Lavender** `#d099ff` secara subtle untuk membedakan section tanpa membuat tampilan ramai.
- **Primary Action**: Tombol utama menggunakan **Magenta Bold** `#d10071` dengan hover ke **Magenta Neon** `#ff0092` — menciptakan efek energik dan cheerful.
- **Secondary Action**: Tombol menggunakan **Emerald** `#1f8124` atau **Fresh** `#38b33e`.
- **Accent Playful**: Gunakan **Magenta Bright** `#dd0d89` dan **Sun** `#ffb613` untuk elemen yang ditujukan kepada anak (badge “Seru!”, icon game, animasi hafalan).
- **Growth & Trust**: **Emerald** `#1f8124` mendominasi di section 7M, progress tracking, dan testimoni — memberikan rasa aman dan keberkahan.
- **Warmth**: **Golden** `#ff9100` dan **Lemon** `#ffd313` digunakan untuk testimonial dan elemen kebahagiaan.

### **Visual Style Keseluruhan**
- **Ilustrasi**: Vector style anak-anak beragam usia (TK–SMA) dengan ekspresi bahagia, warna cerah, dan pose dinamis. Kombinasi soft gradient dari Magenta ke Emerald.
- **Cards**: Rounded corners besar (16–24px), subtle shadow, dan border tipis Mint atau Soft Lavender.
- **Animation**: Micro-interaction halus (scale pada hover, gentle bounce pada CTA, progress fill pada 7M, waveform animasi untuk irama Hijaz).
- **Mobile-first**: Semua elemen dioptimalkan untuk layar kecil dengan whitespace generous agar terasa ringan dan cheerful.
- **Whitespace**: Banyak ruang putih untuk memberikan kesan bersih, modern, dan mudah dinavigasi.

### **Contoh Penerapan per Section**
- **Hero**: Background putih + ilustrasi besar anak & orang tua. Heading dengan **Poppins Bold** warna **Magenta Deep**. CTA utama **Magenta Bold**.
- **Section Metode 7M**: Icon menggunakan **Emerald**, timeline dengan garis **Fresh**, card background subtle **Mint**.
- **Untuk Anak**: Banyak **Magenta Bright** + **Sun** + **Lemon**, ilustrasi playful, font **Poppins Medium** dengan letter-spacing.
- **Testimoni**: Card dengan accent **Golden** dan border **Emerald**.
- **Footer**: Background **Deep** `#4b2a67` dengan teks putih.

Desain ini berhasil menciptakan keseimbangan sempurna antara **kegembiraan belajar** (untuk anak), **kepercayaan & harapan** (untuk orang tua), serta **kesan profesional Islami** yang modern dan trendy.

Apakah Anda ingin saya buatkan **moodboard verbal** yang lebih detail per halaman (Hero, Metode, Untuk Anak, Kemitraan, dll.) atau contoh **component library** (button, card, badge) dengan warna dan font ini?
---

## Struktur Halaman Root Landing Page Wafa Indonesia

### Design Approach: "One Journey, Multiple Doors"

Alih-alih memisahkan segmentasi di UI, kita menggunakan **contextual cues** dan **progressive profiling** untuk menyesuaikan experience berdasarkan behavior user.

---

## Section-by-Section Breakdown

### 1. HERO SECTION: "Gerbang Wafa"

**Layout:** Full viewport height, immersive video background atau Lottie animation

**Komponen:**
```
┌─────────────────────────────────────────────────────────┐
│  [Navbar: Logo | Metode | Layanan | Produk | Blog |    │
│          Kontak | Download App (Button Primary)]        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   HEADLINE:                                             │
│   "Belajar Al-Qur'an Jadi Mudah, Cepat, & Menyenangkan"│
│   (Animasi ketik per kata, dengan highlight "Menyenangkan")│
│                                                         │
│   SUBHEADLINE:                                          │
│   "Metode Otak Kanan + Irama Hijaz + Sistem 7M Terbukti │
│    Melahirkan 15.000+ Guru & 1200+ Lembaga di 35 Provinsi"│
│                                                         │
│   [CTA PRIMARY: Mulai Perjalanan]  [CTA SECONDARY:     │
│   Lihat Demo Aplikasi]                                  │
│                                                         │
│   (Ini hanya quick-jump, bukan segmentasi halaman)      │
│                                                         │
│   [Visual: Composite image anak mengaji + ortu         │
│    mendampingi + guru di kelas - menyatu harmonis]      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**SEO Elements:**
- H1: "Belajar Al-Qur'an Metode Otak Kanan Terbaik di Indonesia"
- Schema: `EducationalOrganization` + `Course` (untuk Metode Wafa)

---

### 2. PROOF STRIP: "Trust at First Scroll"

**Infinite horizontal scroll (marquee) tidak mengganggu:**

| Baris 1: Logo Mitra (Infinite Scroll) | Muhammadiyah | NU | Al Azhar | 1200+ Lembaga Lainnya... |
| Baris 2: Stats Counter | 35 Provinsi | 15.000+ Guru Tersertifikasi | 500.000+ Siswa | Sejak 2012 |

**Testimonial Card (Rotating):**
> *"Saya sangat bersyukur karena lembaga Wafa sesuai dengan artinya 'setia', setia dengan Al-Qur'an."* — **Prof. Dr. H. M. Roem Rowi, M.A.**

---

### 3. THE WAFA METHOD: "Kenapa Wafa Berbeda?"

**Layout:** Sticky scroll dengan visualisasi interaktif

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   LEFT SIDE (Sticky):           RIGHT SIDE (Scrolling): │
│   ┌─────────────────┐         ┌─────────────────────┐   │
│   │                 │         │ [Card 1]            │   │
│   │   VISUAL        │         │ TILAWAH             │   │
│   │   INTERAKTIF    │  ◄────  │ Membaca & Menulis   │   │
│   │   (5T Pentagon  │  sync   │ dengan Makhraj      │   │
│   │    atau Brain   │         │ yang Benar          │   │
│   │    Animation)   │         │                     │   │
│   │                 │         │ [Card 2]            │   │
│   │   Berubah       │  ◄────  │ TAHFIDZ             │   │
│   │   sesuai        │  scroll │ Menghafal 5-30 Juz  │   │
│   │   section       │         │ dengan Teknik       │   │
│   │   aktif         │         │ Otak Kanan          │   │
│   │                 │         │                     │   │
│   │                 │  ◄────  │ [Card 3]            │   │
│   │                 │         │ TARJAMAH            │   │
│   │                 │         │ Memahami Bahasa     │   │
│   │                 │         │ Arab Al-Qur'an      │   │
│   │                 │         │                     │   │
│   │                 │  ◄────  │ [Card 4]            │   │
│   │                 │         │ TAFHIM              │   │
│   │                 │         │ Memahami Makna      │   │
│   │                 │         │ Ayat-ayat Pilihan   │   │
│   │                 │         │                     │   │
│   │                 │  ◄────  │ [Card 5]            │   │
│   │                 │         │ TAFSIR              │   │
│   │                 │         │ Menafsirkan dengan  │   │
│   │                 │         │ Pendekatan Kontekstual  │
│   └─────────────────┘         └─────────────────────┘   │
│                                                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Note:** Tidak ada pilihan "Mode Anak/Orang Tua/Sekolah" — semua informasi relevan ditampilkan secara alami. Orang tua akan tertarik pada "Makhraj yang Benar", anak pada visual interaktif, sekolah pada sistematisnya 5T.

---

### 4. ECOSYSTEM SHOWCASE: "Seluruh Perjalanan dalam Satu Genggaman"

**Tabbed Interface (bukan segmentasi user, tapi segmentasi kebutuhan):**

```
┌─────────────────────────────────────────────────────────┐
│  [Aplikasi Wafa] [Buku & Media] [Program Guru] [Komunitas] │
│                                                         │
│  CONTENT AREA (Dynamic based on tab):                   │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────────────────┐   │
│  │                 │  │                             │   │
│  │  PHONE MOCKUP   │  │  HEADLINE: Belajar Kapan    │   │
│  │  (Animated      │  │  Saja, Di Mana Saja         │   │
│  │   Screenshot    │  │                             │   │
│  │   Carousel)     │  │  Features Checklist:        │   │
│  │                 │  │  ✓ Audio Makhraj Interaktif │   │
│  │                 │  │  ✓ Lagu Hijaz Tanpa Iklan   │   │
│  │                 │  │  ✓ Quiz-Game Seru           │   │
│  │                 │  │  ✓ Progress Tracking        │   │
│  │                 │  │                             │   │
│  │                 │  │  [Download Gratis - Google  │   │
│  │                 │  │   Play] [Berlangganan Full] │   │
│  │                 │  │                             │   │
│  └─────────────────┘  └─────────────────────────────┘   │
│                                                         │
│  [Testimonial App Users: Carousel 5 review bintang 5]   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Untuk tab lainnya:**
- **Buku & Media:** 3D book carousel dengan preview inside pages
- **Program Guru:** SAGAQU & PSGA timeline visual
- **Komunitas:** Peta interaktif 35 provinsi + event calendar

---

### 5. THE 7M SYSTEM: "Jaminan Mutu Pembelajaran"

**Vertical Timeline dengan Scroll Trigger:**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   M1 ──► MEMETAKAN                                      │
│   ┌─────────────────────────────────────────────────┐   │
│   │ Tashnif: Mengukur kemampuan awal guru & siswa   │   │
│   │ [Visual: Assessment Interface Mockup]           │   │
│   │ [CTA: Lihat Contoh Laporan Tashnif - PDF]       │   │
│   └─────────────────────────────────────────────────┘   │
│        ↓                                                │
│   M2 ──► MEMPERBAIKI                                    │
│   ┌─────────────────────────────────────────────────┐   │
│   │ Tahsin: Perbaikan bertahap berdasarkan hasil    │   │
│   │ [Before/After Audio Comparison Player]          │   │
│   └─────────────────────────────────────────────────┘   │
│        ↓                                                │
│   ... (M3-M7 dengan format serupa)                      │
│                                                         │
│   M7 ──► MENGUKUHKAN                                    │
│   ┌─────────────────────────────────────────────────┐   │
│   │ Syahadah & Apresiasi: Penghargaan resmi untuk   │   │
│   │ setiap pencapaian                               │   │
│   │ [Gallery: Foto-foto pengukuhan di berbagai daerah]│ │
│   └─────────────────────────────────────────────────┘   │
│                                                         │
│   [CTA: Ingin Terapkan 7M di Lembaga Anda?]             │
│   [WhatsApp: 0811 3058 9310]                            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 6. SUCCESS STORIES: "Bukti Nyata"

**Masonry Grid Layout (tidak terlalu corporate):**

```
┌─────────────────────────────────────────────────────────┐
│  ┌─────────────┐  ┌─────────────────┐  ┌─────────────┐  │
│  │             │  │                 │  │             │  │
│  │  VIDEO      │  │   GIBRAN        │  │  INFOGRAFIS │  │
│  │  TESTI-     │  │   ALFATIH       │  │  "500%      │  │
│  │  MONIAL     │  │   Juara Hafiz   │  │  Kenaikan   │  │
│  │  (Prof.     │  │   Indonesia     │  │  Minat      │  │
│  │  Roem Rowi) │  │   2024"         │  │  Mengaji"   │  │
│  │             │  │                 │  │             │  │
│  └─────────────┘  └─────────────────┘  └─────────────┘  │
│  ┌─────────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │                 │  │             │  │  MITRA      │  │
│  │  FOTO: 10 Tahun │  │  QUOTE      │  │  BOJONEGORO │  │
│  │  NUFI Sidoarjo  │  │  Ibu Bupati │  │  Supervisi  │  │
│  │                 │  │  Sumenep    │  │  2026       │  │
│  └─────────────────┘  └─────────────┘  └─────────────┘  │
│                                                         │
│  [Load More Stories] atau [Lihat Semua di Blog]         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 7. KNOWLEDGE HUB: "Risalah & Inspirasi"

**Content Preview (mengambil dari WP Headless):**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   [Latest from Risalah Dakwah]                          │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐                   │
│   │ Artikel │ │ Artikel │ │ Artikel │                   │
│   │ Parenting│ │ Isra   │ │ Edukasi │                   │
│   │ Qur'ani │ │ Miraj   │ │ Anak    │                   │
│   │ [Image] │ │ [Image] │ │ [Image] │                   │
│   │         │ │         │ │         │                   │
│   │ Baca →  │ │ Baca →  │ │ Baca →  │                   │
│   └─────────┘ └─────────┘ └─────────┘                   │
│                                                         │
│   [Latest from Info Terkini]                            │
│   │ Supervisi│ │ 10 Tahun│ │ SIMAAN  │                  │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐                   │
│   │ 2026    │ │ NUFI    │ │ Blitar  │                   │
│   │ [Image] │ │ [Image] │ │ [Image] │                   │
│   └─────────┘ └─────────┘ └─────────┘                   │
│                                                         │
│   [YouTube Channel Preview: Latest 3 Videos]            │
│   │ Thumbnail│ │ Thumbnail│ │ Thumbnail│                │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐                   │
│   │ ▶       │ │ ▶       │ │ ▶       │                   │
│   │ Title   │ │ Title   │ │ Title   │                   │
│   └─────────┘ └─────────┘ └─────────┘                   │
│                                                         │
│   [CTA: Subscribe YouTube Wafa Indonesia]               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 8. COMMUNITY & LOCATION: "Wafa di Dekat Anda"

**Interactive Map Section:**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   HEADLINE: Temukan Wafa di 35 Provinsi Indonesia       │
│                                                         │
│   ┌─────────────────────────────────────────────────┐   │
│   │                                                 │   │
│   │      [INTERACTIVE MAP OF INDONESIA]             │   │
│   │                                                 │   │
│   │   • Hover provinsi → Show jumlah mitra          │   │
│   │   • Click provinsi → Expand detail kontak       │   │
│   │   • Search box: "Cari kota Anda..."             │   │
│   │                                                 │   │
│   └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

### 9. FINAL CTA: "Mulai Hari Ini"

**Non-intrusive but prominent:**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   HEADLINE: Siap Memulai Perjalanan Al-Qur'an?          │
│                                                         │
│   ┌─────────────────┐    ┌───────────────────────────┐  │
│   │                 │    │                           │  │
│   │  [Icon Phone]   │    │  [Icon School]            │  │
│   │                 │    │                           │  │
│   │  Download       │    │  Jadikan Lembaga Anda     │  │
│   │  Aplikasi Wafa  │    │  Mitra Wafa               │  │
│   │                 │    │                           │  │
│   │  Gratis untuk   │    │  Dapatkan pendampingan    │  │
│   │  6 halaman      │    │  implementasi 7M          │  │
│   │  pertama        │    │                           │  │
│   │                 │    │                           │  │
│   │  [Google Play]  │    │  [Konsultasi Gratis]      │  │
│   │                 │    │  WhatsApp: 0811 3058 9310 │  │
│   └─────────────────┘    └───────────────────────────┘  │
│                                                         │
│   [FAQ Accordion: 5 pertanyaan umum]                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 10. FOOTER

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   [Newsletter: Tips Parenting Qur'ani Mingguan]         │
│   [Email Input] [Subscribe]                             │
│                                                         │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│   │ TENTANG │ │ LAYANAN │ │ PRODUK  │ │ KONTAK  │       │
│   │ WAFA    │ │ 7M      │ │ Buku    │ │ Pusat   │       │
│   │ Sejarah │ │ SAGAQU  │ │ Aplikasi│ │ Daerah  │       │
│   │ Visi    │ │ PSGA    │ │         │ │         │       │
│   │ Dewan   │ │         │ │         │ │         │       │
│   │ Pakar   │ │         │ │         │ │         │       │
│   └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
│                                                         │
│   [Social Icons: IG, FB, TikTok, YouTube, WA]           │
│                                                         │
│   © 2026 Yayasan Syafa'atul Qur'an Indonesia (YAQIN)    │
│   [Legalitas: SK Kemenkumham | Tashih LPMQ Kemenag]     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## ARSITEKTUR HALAMAN LENGKAP WAFA INDONESIA

```
┌─────────────────────────────────────────────────────────┐
│                    NAVIGATION STRUCTURE                  │
├─────────────────────────────────────────────────────────┤
│  [LOGO]  Metode  Layanan  Produk  Blog  Kontak  [CTA]  │
│           │        │        │      │      │    Download   │
│           ▼        ▼        ▼      ▼      ▼    App / Mitra │
├─────────────────────────────────────────────────────────┤
│  DROPDOWN MENUS (Hover-activated, not overwhelming):    │
│                                                         │
│  METODE:                LAYANAN:                        │
│  • 5T Pendidikan        • Untuk Individu                │
│  • 7M Sistem Mutu       • Untuk Lembaga                 │
│  • Otak Kanan           • Event & Workshop              │
│  • Irama Hijaz          • Sertifikasi                    │
│                                                         │
│  PRODUK:                BLOG:                           │
│  • Buku Tilawah         • Risalah Dakwah               │
│  • Buku Menulis         • Ikhtisar Wafa                │
│  • Aplikasi Wafa        • Info Terkini                 │
│  • Media Pembelajaran   • Parenting Qur'ani            │
└─────────────────────────────────────────────────────────┘
```

---

## 1. HALAMAN METODE (/metode/)

### Purpose: Edukasi mendalam tentang sistem Wafa (Top of Funnel)

```
┌─────────────────────────────────────────────────────────┐
│  HERO SECTION                                           │
│  Headline: "Sistem Pembelajaran Al-Qur'an Terintegrasi" │
│  Sub: "Dari membaca pertama hingga menjadi ahli Qur'ani"  │
│  [Visual: Animated 5T-7M interconnected diagram]        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  NAVIGATION ANCHOR (Sticky)                             │
│  [5T Pendidikan] [7M Sistem Mutu] [Otak Kanan] [Irama] │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION: 5T PENDIDIKAN AL-QUR'AN                       │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  INTERACTIVE PENTAGON VISUALIZATION             │   │
│  │                                                  │   │
│  │         TILAWAH (Baca & Tulis)                   │   │
│  │              ▲                                   │   │
│  │             /  \                                  │   │
│  │    TAFSIR  /    \  TAHFIDZ (Hafalan)             │   │
│  │   (Tafsir)\    /                                  │   │
│  │             \  /                                   │   │
│  │              ▼                                    │   │
│  │      TARJAMAH ←→ TAFHIM (Pahami Makna)           │   │
│  │     (Terjemah)                                    │   │
│  │                                                  │   │
│  │  [Click each point → Expand detail + video]       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Detail Cards (Expandable):                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │
│  │ TILAWAH     │ │ TAHFIDZ     │ │ TARJAMAH    │        │
│  │ • Makhraj   │ │ • Teknik    │ │ • Bahasa    │        │
│  │ • Tajwid    │ │   otak      │ │   Arab      │        │
│  │ • Ghorib    │ │   kanan     │ │ • Kosakata  │        │
│  │ • 6 Jilid   │ │ • 5-30 Juz  │ │ • Grammar   │        │
│  │   bertahap  │ │             │ │   Qur'ani   │        │
│  └─────────────┘ └─────────────┘ └─────────────┘        │
│  ┌─────────────┐ ┌─────────────┐                        │
│  │ TAFHIM      │ │ TAFSIR      │                        │
│  │ • Makna     │ │ • Konteks   │                        │
│  │   ayat      │ │   turun     │                        │
│  │ • Aplikasi  │ │ • Tafsir    │                        │
│  │   kontekstual│ │   tematik   │                        │
│  └─────────────┘ └─────────────┘                        │
│                                                         │
│  [CTA: Lihat Kurikulum Lengkap → PDF Download]          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION: 7M SISTEM MANAJEMEN MUTU                      │
│                                                         │
│  Horizontal Timeline (Scroll-triggered animation):      │
│                                                         │
│  M1 ──► M2 ──► M3 ──► M4 ──► M5 ──► M6 ──► M7          │
│  Tashnif  Tahsin  Standar Coach  Super  Muna  Ukuh      │
│  │        │       │       │       │       │       │      │
│  ▼        ▼       ▼       ▼       ▼       ▼       ▼      │
│  [Map]   [Fix]   [Set]   [Guide]  [Check] [Exam] [Grad] │
│                                                         │
│  Active Card (M4 example):                              │
│  ┌─────────────────────────────────────────────────┐   │
│  │  M4: MENDAMPINGI (Coaching)                     │   │
│  │                                                  │   │
│  │  "Pendampingan intensif untuk memastikan        │   │
│  │   implementasi sempurna di kelas Anda"          │   │
│  │                                                  │   │
│  │  • Coaching Kepala Sekolah                      │   │
│  │  • Coaching Koordinator Qur'an                  │   │
│  │  • Coaching Guru Al-Qur'an                      │   │
│  │  • Troubleshooting session                      │   │
│  │                                                  │   │
│  │  [Jadwal Coaching Tersedia] [Daftar Sekarang]   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [Download: Panduan Implementasi 7M (e-book)]            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION: METODE OTAK KANAN                             │
│                                                         │
│  Split Layout:                                          │
│  ┌─────────────────┐  ┌─────────────────────────────┐  │
│  │                 │  │                             │  │
│  │  BRAIN          │  │  "Mengapa Anak Cepat      │  │
│  │  VISUALIZATION  │  │   Bosan dengan Metode     │  │
│  │                 │  │   Konvensional?"            │  │
│  │  [Left/Right    │  │                             │  │
│  │   Brain with    │  │  • Otak kiri: Hafalan       │  │
│  │   activation    │  │    paksa, repetitive       │  │
│  │   zones]        │  │  • Otak kanan: Visual,     │  │
│  │                 │  │    emosi, melodi, cerita   │  │
│  │                 │  │                             │  │
│  │                 │  │  [Video: Penjelasan       │  │
│  │                 │  │   Dr. Doddy Tisna Amijaya]  │  │
│  │                 │  │                             │  │
│  └─────────────────┘  └─────────────────────────────┘  │
│                                                         │
│  Research Evidence:                                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐        │
│  │ 85%     │ │ 3x      │ │ 40%     │ │ 90%     │        │
│  │ retention│ │ faster  │ │ less    │ │ enjoyment│        │
│  │ vs rote │ │ learning│ │ stress  │ │ rate    │        │
│  │ learning│ │         │ │         │ │         │        │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘        │
│  *Data internal riset Wafa 2012-2026                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SECTION: IRAMA HIJAZ WAFA                              │
│                                                         │
│  Audio-First Experience:                                │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [WAVEFORM VISUALIZATION - Interactive]         │   │
│  │                                                 │   │
│  │  ◄◄  ▶  ►►    [Progress Bar]    [Volume]       │   │
│  │                                                 │   │
│  │  "Lagu Pengantar Iqro" - Nada Hijaz 3 Nada     │   │
│  │                                                 │   │
│  │  [Play Sample] [Download MP3] [Lihat Notasi]   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Comparison (Subtle, not disparaging):                  │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐ │
│  │ Bayati      │ vs │ Hijaz       │ vs │ Nahawand    │ │
│  │ (Common)    │    │ (Wafa)      │    │ (Other)     │ │
│  │             │    │ • Syahdu    │    │             │ │
│  │             │    │ • Mudah     │    │             │ │
│  │             │    │ • Menenangkan│   │             │ │
│  └─────────────┘    └─────────────┘    └─────────────┘ │
│                                                         │
│  [CTA: Pelajari Irama di AIWA (Akademi Irama Wafa)]     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  RELATED: Sertifikasi & Legalitas                       │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐        │
│  │ YAQIN   │ │Kemenkum-│ │Kemenag  │ │ LPMQ    │        │
│  │ AHU-    │ │ham       │ │Majelis  │ │ Tashih  │        │
│  │ 0000170 │ │          │ │Ta'lim   │ │ 2023    │        │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘        │
└─────────────────────────────────────────────────────────┘
```

---

## 2. HALAMAN LAYANAN (/layanan/)

### Purpose: Konversi — matching kebutuhan dengan solusi

```
┌─────────────────────────────────────────────────────────┐
│  HERO SECTION                                           │
│  Headline: "Solusi Pembelajaran Al-Qur'an untuk Semua"  │
│  Sub: "Individu, keluarga, maupun lembaga pendidikan"   │
│  [Visual: Three overlapping circles — Individual, Family, │
│   Institution — with Wafa logo at intersection]           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  FILTER TABS (Not segmentation, but journey stage):       │
│                                                         │
│  [Saya Pemula] [Saya Sudah Bisa] [Saya Pengelola]      │
│                                                         │
│  *Default: Show all, highlighted based on referral source│
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SERVICE CARDS GRID (Responsive: 1 col mobile, 3 desktop)│
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🔵 UNTUK INDIVIDU                               │   │
│  ├─────────────────────────────────────────────────┤   │
│  │  APLIKASI WAFA                                  │   │
│  │  • 6 halaman gratis                             │   │
│  │  • Berlangganan untuk full access               │   │
│  │  • Audio makhraj interaktif                     │   │
│  │  • Quiz-game tanpa iklan                        │   │
│  │  [Download Play Store] [Lihat Fitur Lengkap]    │   │
│  │  💰 Rp0 (freemium) → Rp49.000/bulan             │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  AKADEMI TAHSIN ONLINE (ATO)                    │   │
│  │  • Belajar dari nol hingga mahir               │   │
│  │  • Jadwal fleksibel                            │   │
│  │  • Sertifikat syahadah                         │   │
│  │  • Grup diskusi dengan ustadz                  │   │
│  │  [Lihat Jadwal] [Daftar Sekarang]              │   │
│  │  💰 Rp299.000 - Rp599.000/program               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  AKADEMI TAHFIDZ (ATA)                          │   │
│  │  • Target 5-30 Juz dengan metode                 │   │
│  │  • Pendampingan hafalan personal               │   │
│  │  • Muroja'ah terjadwal                         │   │
│  │  • Ujian munaqosyah berkala                  │   │
│  │  [Konsultasi Target] [Daftar]                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🟢 UNTUK CALON GURU                            │   │
│  ├─────────────────────────────────────────────────┤   │
│  │  SAGAQU (Sekolah Guru Ahli Al-Qur'an)          │   │
│  │  • Tahsin, Tahfidz, Menulis, Irama, Metodologi │   │
│  │  • Online & Offline                            │   │
│  │  • Sertifikasi resmi Wafa                      │   │
│  │  • Jaringan alumni 15.000+                     │   │
│  │  [Lihat Kurikulum] [Hubungi Admin]              │   │
│  │  📞 0811 3058 9304 (Ustadzah Nadia)            │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  🟠 UNTUK LEMBAGA PENDIDIKAN                    │   │
│  ├─────────────────────────────────────────────────┤   │
│  │  PAKET KEMITRAAN SEKOLAH                        │   │
│  │                                                 │   │
│  │  Starter: Pelatihan Guru + Starter Kit          │   │
│  │  Growth: + Pendampingan 6 bulan                 │   │
│  │  Excellence: + Supervisi berkala + Event        │   │
│  │                                                 │   │
│  │  [Kalkulator Investasi] [Jadikan Sekolah Saya    │   │
│  │   Mitra]                                        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  PROGRAM KHUSUS MITRA                           │   │
│  │  • PSGA (Pelatihan Sertifikasi Guru)            │   │
│  │  • ODT (One-Day Training)                      │   │
│  │  • Upgrading Kompetensi Berkala                │   │
│  │  • SIMAAN (Silaturahim Muallim)               │   │
│  │  [Lihat Jadwal Event]                          │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  INTERACTIVE: KALKULATOR INVESTASI LEMBAGA               │
│  (Embedded tool, not separate page — reduce friction)     │
│                                                         │
│  Input:                                                 │
│  • Jumlah siswa: [____]                                │
│  • Target: [Tahsin dasar] [Tahfidz 5 Juz] [Tahfidz 30 Juz]│
│  • Durasi program: [____] semester                      │
│                                                         │
│  Output:                                                │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Estimasi Investasi: Rp[_______]               │   │
│  │  Biaya per siswa/bulan: Rp[____]               │   │
│  │  ROI: Lulusan bersertifikat, daya tarik lembaga │   │
│  │                                                 │   │
│  │  [Simpan Perhitungan] [Konsultasi Gratis]        │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  EVENT CALENDAR (Integrated with service offerings)       │
│                                                         │
│  [April 2026]                                           │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐        │
│  │ 15 Apr  │ │ 22 Apr  │ │ 29 Apr  │ │ 5 Mei   │        │
│  │ PSGA    │ │ SIMAAN  │ │ ODT     │ │ Upgrading│       │
│  │ Jakarta │ │ Online  │ │ Bandung │ │ Surabaya │       │
│  │ [Daftar]│ │ [Daftar]│ │ [Daftar]│ │ [Daftar] │       │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘        │
│                                                         │
│  [Lihat Kalender Lengkap → /event]                      │
└─────────────────────────────────────────────────────────┘
```

---

## 3. HALAMAN PRODUK (/produk/)

### Purpose: E-commerce + product education (hybrid)

```
┌─────────────────────────────────────────────────────────┐
│  HERO SECTION                                           │
│  Headline: "Media Pembelajaran Berkualitas"             │
│  Sub: "Dirancang oleh ahli, terbukti efektif"           │
│  [Visual: 3D mockup — buku, kartu, aplikasi, flashdisk] │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  CATEGORY FILTER (Horizontal scroll on mobile):          │
│                                                         │
│  [Semua] [Buku Tilawah] [Buku Menulis] [Kartu & Peraga] │
│  [Aplikasi] [Audio/Video] [Paket Lengkap]              │
│                                                         │
│  Sort: [Terbaru] [Terlaris] [Harga: Rendah-Tinggi]     │
│  View: [Grid] [List]                                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PRODUCT GRID (4 columns desktop, 2 tablet, 1 mobile)   │
│                                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌────────┐│
│  │ [BESTSELLER]│ │ [NEW]       │ │             │ │        ││
│  │             │ │             │ │             │ │        ││
│  │  [Cover     │ │  [Cover     │ │  [Cover     │ │ [...]  ││
│  │   Buku      │ │   Buku      │ │   Kartu     │ │        ││
│  │   Jilid 1]  │ │   Menulis 1]│ │   Huruf]    │ │        ││
│  │             │ │             │ │             │ │        ││
│  │ Buku        │ │ Buku        │ │ Kartu Peraga│ │        ││
│  │ Tilawah     │ │ Menulis     │ │ Huruf       │ │        ││
│  │ Jilid 1     │ │ Hijaiyah 1  │ │ Hijaiyah A7 │ │        ││
│  │             │ │             │ │             │ │        ││
│  │ ⭐ 4.9 (2.3k)│ │ ⭐ 4.8 (890) │ │ ⭐ 4.9 (1.1k)│ │        ││
│  │             │ │             │ │             │ │        ││
│  │ Rp45.000    │ │ Rp42.000    │ │ Rp35.000    │ │        ││
│  │             │ │             │ │             │ │        ││
│  │ [Detail]    │ │ [Detail]    │ │ [Detail]    │ │        ││
│  │ [+ Keranjang]│ │ [+ Keranjang]│ │ [+ Keranjang]│ │        ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └────────┘│
│                                                         │
│  [Load More] atau [Pagination]                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  FEATURED: PAKET LENGKAP (Bundle offerings)               │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  PAKET PEMULA (TK-SD Kelas 1)                   │   │
│  │  ┌─────────┐                                     │   │
│  │  │ [Foto   │  Isi Paket:                        │   │
│  │  │  Paket] │  • Buku Tilawah Jilid 1-2          │   │
│  │  │         │  • Buku Menulis 1-2                │   │
│  │  │         │  • Kartu Huruf Hijaiyah            │   │
│  │  │         │  • Akses App 3 bulan             │   │
│  │  │         │  • Panduan Ortu                  │   │
│  │  │         │                                     │   │
│  │  │         │  💰 Rp299.000 (Harga normal:       │   │
│  │  │         │     Rp385.000)                     │   │
│  │  │         │                                     │   │
│  │  │         │  [Beli Paket] [Lihat Detail]     │   │
│  │  └─────────┘                                     │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [Paket Menengah] [Paket Lengkap] [Paket Lembaga]      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PRODUCT DETAIL PAGE (Template untuk setiap produk)     │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────────────────┐  │
│  │                 │  │ BUKU TILAWAH JILID 1        │  │
│  │  IMAGE GALLERY  │  │                             │  │
│  │  • Main cover   │  │ SKU: BT-WAFA-001            │  │
│  │  • Inside pages │  │ ⭐ 4.9 (2,345 ulasan)       │  │
│  │  • Video flip   │  │                             │  │
│  │    through      │  │ Rp45.000                    │  │
│  │                 │  │                             │  │
│  │ [Zoom on hover] │  │ Spesifikasi:                │  │
│  │                 │  │ • 48 halaman full color     │  │
│  │                 │  │ • Ukuran: 21 x 29.7 cm (A4) │  │
│  │                 │  │ • Kertas: Art paper 150gsm  │  │
│  │                 │  │ • Laminasi: Glossy          │  │
│  │                 │  │                             │  │
│  │                 │  │ [−] 1 [+]  [+ Keranjang]    │  │
│  │                 │  │ [Beli Sekarang]             │  │
│  │                 │  │                             │  │
│  │                 │  │ 🚚 Gratis Ongkir >Rp200.000 │  │
│  │                 │  │ 📦 Stok: Tersedia           │  │
│  └─────────────────┘  └─────────────────────────────┘  │
│                                                         │
│  TABS:                                                  │
│  [Deskripsi] [Spesifikasi] [Ulasan] [Cara Penggunaan]  │
│                                                         │
│  Deskripsi Content:                                     │
│  "Jilid 1 memperkenalkan huruf hijaiyah dengan         │
│   metode otak kanan: warna-warni, gambar menarik,      │
│   dan lagu pengantar. Anak belajar tanpa merasa         │
│   dipaksa..."                                           │
│                                                         │
│  [Video: Demo penggunaan di kelas]                      │
│                                                         │
│  RELATED PRODUCTS:                                      │
│  "Lengkapi dengan:" [Buku Menulis 1] [Kartu Huruf]      │
│  [Aplikasi Wafa]                                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  CHECKOUT FLOW (Simplified)                              │
│                                                         │
│  Cart → Shipping → Payment → Confirmation               │
│                                                         │
│  Payment Options:                                       │
│  • Transfer Bank (BRI, BCA, Mandiri, BNI)               │
│  • E-wallet (GoPay, OVO, DANA, LinkAja)                │
│  • QRIS                                                 │
│  • Credit Card (Midtrans)                               │
│  • COD (select areas)                                   │
│                                                         │
│  Shipping: JNE, J&T, SiCepat (integrasi API)            │
└─────────────────────────────────────────────────────────┘
```

---

## 4. HALAMAN BLOG (/blog/)

### Purpose: Content marketing + SEO + community building

```
┌─────────────────────────────────────────────────────────┐
│  HERO SECTION                                           │
│  Headline: "Risalah & Inspirasi Qur'ani"                │
│  Sub: "Artikel, berita, dan cerita dari perjalanan Wafa" │
│  [Featured Image: Grid collage artikel populer]           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  CATEGORY NAVIGATION (Not dropdown, visible pills):       │
│                                                         │
│  [Semua] [Risalah Dakwah] [Ikhtisar Wafa] [Info Terkini]│
│  [Parenting Qur'ani] [Metode & Tips] [Kisah Mitra]     │
│                                                         │
│  Search: [____________________] 🔍                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  FEATURED ARTICLE (Hero post — largest real estate)       │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [Image: Full width, 16:9 ratio]                │   │
│  │                                                 │   │
│  │  Category: INFO TERKINI                        │   │
│  │  Title: Menjaga Standar Keunggulan: Supervisi   │   │
│  │         Pembelajaran Metode Wafa 2026           │   │
│  │  Excerpt: Alhamdulillah, supervisi berkala...   │   │
│  │  Author: Wafa Indonesia • 14 Jan 2026 • 5 min   │   │
│  │  [Baca Selengkapnya →]                          │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  ARTICLE GRID (3 columns desktop, masonry layout option)  │
│                                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │
│  │ [Image]     │ │ [Image]     │ │ [Image]     │        │
│  │             │ │             │ │             │        │
│  │ Category    │ │ Category    │ │ Category    │        │
│  │ Title...    │ │ Title...    │ │ Title...    │        │
│  │ Excerpt...  │ │ Excerpt...  │ │ Excerpt...  │        │
│  │ Date • Read │ │ Date • Read │ │ Date • Read │        │
│  │ time        │ │ time        │ │ time        │        │
│  └─────────────┘ └─────────────┘ └─────────────┘        │
│                                                         │
│  [Load More] atau [Pagination]                            │
│  [Subscribe: Dapatkan artikel terbaru via email]          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SINGLE ARTICLE PAGE (/blog/[slug])                     │
│                                                         │
│  Breadcrumbs: Beranda > Blog > [Category] > [Title]       │
│                                                         │
│  Category Badge: [RISALAH DAKWAH]                       │
│  Title: Edukasi Anak, Menjadikan Ananda sebagai          │
│         "Manusia Surga"                                   │
│  Meta: Wafa Indonesia • 31 Januari 2025 • 8 menit baca    │
│  [Share: FB, TW, WA, Link]                              │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                 │   │
│  │  CONTENT AREA                                   │   │
│  │                                                 │   │
│  │  [Featured Image]                               │   │
│  │                                                 │   │
│  │  Opening paragraph...                           │   │
│  │                                                 │   │
│  │  [Inline Image: Left aligned, text wrap]        │   │
│  │                                                 │   │
│  │  Body content with H2, H3, bullet points...    │   │
│  │                                                 │   │
│  │  [Quote Block: Ayat Qur'an atau Hadits]         │   │
│  │                                                 │   │
│  │  [Video Embed: YouTube Wafa]                    │   │
│  │                                                 │   │
│  │  [Related Product Card: Buku Kisah Islami]      │   │
│  │                                                 │   │
│  │  [CTA Box: "Ingin anak Anda belajar dengan       │   │
│  │   metode ini? Download aplikasi Wafa"]          │   │
│  │                                                 │   │
│  │  Tags: #parenting #edukasianak #alquran         │   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  AUTHOR BOX:                                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [Foto]  Wafa Indonesia                        │   │
│  │          Tim riset dan pengembangan metode      │   │
│  │          pembelajaran Al-Qur'an.               │   │
│  │          [Lihat semua artikel →]               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  RELATED ARTICLES:                                      │
│  "Baca juga:" [3 cards horizontal scroll]               │
│                                                         │
│  COMMENTS (Optional, or link to social discussion):       │
│  [Komentar via Facebook Comments] atau [Disqus]           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  SIDEBAR WIDGETS (Desktop only, sticky):                │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │ POPULAR POSTS   │  │ NEWSLETTER      │              │
│  │ 1. Title...     │  │                 │              │
│  │ 2. Title...     │  │ Dapatkan tips   │              │
│  │ 3. Title...     │  │ parenting       │              │
│  │ 4. Title...     │  │ mingguan:       │              │
│  │ 5. Title...     │  │ [Email________] │              │
│  │                 │  │ [Subscribe]     │              │
│  └─────────────────┘  └─────────────────┘              │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │ CATEGORIES      │  │ SOCIAL MEDIA    │              │
│  │ • Risalah (45)  │  │ [IG] [FB] [TT]  │              │
│  │ • Ikhtisar (32) │  │ [YT] [WA]       │              │
│  │ • Info (28)     │  │                 │              │
│  │ • Parenting (56)│  │ 500K+ followers │              │
│  └─────────────────┘  └─────────────────┘              │
└─────────────────────────────────────────────────────────┘
```

---

## 5. HALAMAN KONTAK & TENTANG (/kontak/, /tentang-kami/)

```
┌─────────────────────────────────────────────────────────┐
│  HALAMAN TENTANG KAMI (/tentang-kami/)                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  HERO: Video message Direktur (H. Mohamad Yamin, M.Pd) │
│  "Assalamu'alaikum Wa Rahmatullahi Wa Barakatuh..."     │
│                                                         │
│  SECTIONS:                                              │
│  1. Selayang Pandang (visi besar)                       │
│  2. Sejarah & Legalitas (timeline 2012-2026)          │
│  3. Dewan Pakar (profile cards dengan credentials)      │
│  4. Tim Trainer (grid dengan spesialisasi)              │
│  5. Sebaran Wafa (interactive map 35 provinsi)          │
│  6. Budaya Kerja (USRAH, NATIJAH, ILMIAH, KAFA'AH)      │
│                                                         │
│  [Download: Company Profile PDF] [Lihat Annual Report]   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  HALAMAN KONTAK (/kontak/)                              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  TWO COLUMN LAYOUT:                                     │
│                                                         │
│  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │  FORM KONTAK        │  │  INFORMASI KONTAK       │  │
│  │                     │  │                         │  │
│  │  Nama: [________]   │  │  📍 WAFA PUSAT          │  │
│  │  Email: [________]  │  │  Jl. Raya Wisma         │  │
│  │  Telepon: [______]  │  │  Pagesangan No.9        │  │
│  │  Kategori:          │  │  Surabaya 60234         │  │
│  │  [Individu ▼]       │  │                         │  │
│  │                     │  │  📞 (031) 9904 3404     │  │
│  │  Pesan:             │  │  📱 0811 3058 9306      │  │
│  │  [____________]     │  │  📱 0811 3058 9310      │  │
│  │  [____________]     │  │  (WhatsApp)             │  │
│  │                     │  │                         │  │
│  │  [Kirim Pesan]      │  │  ✉️ sahabat@wafaindonesia│ │
│  │                     │  │     .or.id              │  │
│  │                     │  │                         │  │
│  │                     │  │  [Google Maps Embed]    │  │
│  │                     │  │                         │  │
│  └─────────────────────┘  │  JAM OPERASIONAL:       │  │
│                           │  Senin-Jumat: 08.00-   │  │
│                           │  16.00 WIB             │  │
│                           │  Sabtu: 08.00-12.00    │  │
│                           └─────────────────────────┘  │
│                                                         │
│  WAFA DAERAH (Accordion/Tabbed):                        │
│  [Jawa Timur] [Jawa Barat] [Jawa Tengah] [Sumatera] ... │
│                                                         │
│  Per daerah:                                            │
│  • Nama Koordinator                                     │
│  • Nomor WhatsApp (click to chat)                       │
│  • Coverage area                                        │
│  • Link ke Instagram daerah (jika ada)                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 6. HALAMAN KEMITRAAN (/mitra/) — Dedicated Conversion Page

```
┌─────────────────────────────────────────────────────────┐
│  HERO: "Jadikan Lembaga Anda Pilihan Utama"               │
│  Sub: "Sistem 7M Wafa telah terbukti meningkatkan daya    │
│        tarik dan kualitas lulusan di 1200+ lembaga"       │
│  [Background: Foto kelas Qur'an yang ramai & ceria]       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  PROBLEM-AGITATION-SOLUTION (PAS) FRAMEWORK             │
│                                                         │
│  PROBLEM:                                               │
│  "Banyak lembaga kesulitan menghasilkan lulusan Qur'ani  │
│   yang merata — ada yang bagus, ada yang tertinggal"      │
│                                                         │
│  AGITATION:                                             │
│  "Orang tua semakin selektif. Tanpa bukti nyata, mereka   │
│   pindah ke lembaga lain yang menawarkan 'metode baru'"  │
│                                                         │
│  SOLUTION:                                              │
│  "7M System Wafa — standarisasi dari guru hingga siswa,  │
│   terukur, tersertifikasi, dan terbukti"                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  ALUR BERMITRA (Visual Step-by-Step)                    │
│                                                         │
│  START → PENDAFTARAN → STANDARISASI → PENDAMPINGAN →    │
│  OUTPUT                                                 │
│                                                         │
│  Detail per step dengan icon, duration, deliverables:    │
│  • Step 1: 1 hari (administrasi)                        │
│  • Step 2: 3 hari (PSGA pelatihan)                      │
│  • Step 3: 6-12 bulan (coaching & supervisi)            │
│  • Step 4: Continuous (upgrading & event)              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  CASE STUDIES (Carousel):                               │
│                                                         │
│  • NUFI Sidoarjo — 10 tahun kemitraan, 500+ siswa       │
│    tahfidz                                              │
│  • MAN 2 Lubuklinggau — Program tahfidz mandatory,      │
│    80% siswa hafal 5+ juz                               │
│  • TK Islam Al-Azhar — Implementasi TK, ortu antusias     │
│                                                         │
│  [Video testimonial kepala sekolah]                     │
│  [Download case study PDF]                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  INVESTMENT TABLE (Transparent pricing):                  │
│                                                         │
│  PAKET       STARTER    GROWTH      EXCELLENCE          │
│  ─────────────────────────────────────────────────────  │
│  PSGA        ✓          ✓           ✓                    │
│  Starter Kit ✓          ✓           ✓                    │
│  Pendampingan 3 bln     6 bln       12 bln               │
│  Supervisi   1x         3x          6x                   │
│  Event       -          1 event     3 events             │
│  ─────────────────────────────────────────────────────  │
│  Investasi   Rp5jt      Rp12jt      Rp25jt               │
│  ─────────────────────────────────────────────────────  │
│  [Semua paket bisa dicicil 3-6x]                        │
│                                                         │
│  [Kalkulator ROI] [Jadwalkan Konsultasi Gratis]          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  LEAD CAPTURE FORM (High commitment):                   │
│                                                         │
│  "Konsultasi Gratis dengan Tim Wafa"                     │
│  • Nama Lembaga                                         │
│  • Jenis (TK/SD/SMP/SMA/Pesantren/Lainnya)              │
│  • Alamat                                               │
│  • Jumlah siswa                                         │
│  • Program yang diinginkan                              │
│  • Kendala saat ini                                     │
│  • Preferensi jadwal konsultasi                         │
│                                                         │
│  [Kirim — Response dalam 24 jam]                        │
│                                                         │
│  Atau langsung WhatsApp: 0811 3058 9310 (fastest)       │
└─────────────────────────────────────────────────────────┘
```

---

## 7. TEKNIS & UTILITY PAGES

```
┌─────────────────────────────────────────────────────────┐
│  404 ERROR PAGE                                         │
│                                                         │
│  "Halaman yang Anda cari tidak ditemukan"               │
│  [Ilustrasi karakter Wafa bingung]                      │
│                                                         │
│  Mungkin Anda mencari:                                  │
│  • [Metode Wafa] • [Aplikasi] • [Kemitraan]             │
│  • [Blog Terbaru] • [Kontak]                            │
│                                                         │
│  [Kembali ke Beranda]                                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  OTHER PAGES                                            │
│                                                         │
│  /faq — Frequently Asked Questions (5+ items)           │
└─────────────────────────────────────────────────────────┘
```

---

## RINGKASAN URL STRUCTURE & SEO

| URL | Page Type | Priority | Update Frequency |
|-----|-----------|----------|------------------|
| `/` | Landing | 1.0 | Weekly |
| `/metode/` | Pillar Content | 0.9 | Monthly |
| `/metode/5t/` | Cluster | 0.8 | Quarterly |
| `/metode/7m/` | Cluster | 0.8 | Quarterly |
| `/layanan/` | Service Hub | 0.9 | Weekly |
| `/layanan/sagaqu/` | Service Detail | 0.8 | Monthly |
| `/produk/` | Product Catalog | 0.9 | Daily (stock) |
| `/produk/[slug]/` | Product Detail | 0.7 | Daily |
| `/blog/` | Blog Hub | 0.9 | Daily |
| `/blog/[slug]/` | Article | 0.6 | Never (update if needed) |
| `/mitra/` | Conversion Page | 1.0 | Monthly |
| `/tentang-kami/` | About | 0.6 | Quarterly |
| `/kontak/` | Contact | 0.7 | Monthly (daerah updates) |

---

Apakah Anda ingin saya mendetailkan **spesifikasi teknis untuk headless CMS** (field ACF, GraphQL queries), **user flow dengan edge cases**, atau **content governance** (editorial workflow, approval process)?
