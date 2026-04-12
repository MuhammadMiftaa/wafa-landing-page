import type { Testimonial } from "../components/ui";
import type { Product } from "../components/ui";

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Saya sangat bersyukur karena lembaga Wafa sesuai dengan artinya \"setia\", setia dengan Al-Qur'an. Tidak hanya mengajar tetapi mencetak manusia-manusia Qur'ani. Harapannya negeri ini akan dipenuhi orang-orang dengan tutur kata, perilaku, dan kehidupannya mencerminkan Al-Qur'an.",
    author: "Prof. Dr. H. M. Roem Rowi, M.A.",
    role: "Da'i dan Ahli Tafsir Al-Qur'an",
    stars: 5,
    avatar: "RR",
    avatarColor: "linear-gradient(135deg, #9d167c, #4b2a67)",
  },
  {
    id: "t2",
    quote:
      "Kami sangat senang dengan Metode Wafa. Ternyata dengan metode Wafa banyak hal yang kami pelajari & caranya pun sangat menyenangkan & sangat mudah dimengerti.",
    author: "Hj. Nurfitriana Busyro Karim",
    role: "Ibu Bupati Kabupaten Sumenep",
    stars: 5,
    avatar: "NB",
    avatarColor: "linear-gradient(135deg, #1f8124, #38b33e)",
  },
  {
    id: "t3",
    quote:
      "Setelah bekerja sama dengan Wafa, kami menggiring siswa-siswi untuk mengikuti tahfidz Al-Qur'an. Alhamdulillah beberapa anak progresnya sudah bagus, sudah ada yang hafidz juz 30, juz 1-3. Terima kasih Wafa sudah membimbing kami sehingga dapat berbeda dengan madrasah lainnya.",
    author: "Saipul, S.Pd.I., M.M.",
    role: "Kepala MAN 2 Lubuklinggau, Sumatera Selatan",
    stars: 5,
    avatar: "SP",
    avatarColor: "linear-gradient(135deg, #ff7b00, #ff9100)",
  },
  {
    id: "t4",
    quote:
      "Alhamdulillah sejak anak saya menggunakan aplikasi ini, menjadi jauh lebih mudah tanpa salah membaca, terima kasih jazakumullah khoir.",
    author: "Syakirah Sonni",
    role: "Orang Tua Pengguna Aplikasi Wafa",
    stars: 5,
    avatar: "SS",
    avatarColor: "linear-gradient(135deg, #d10071, #dd0d89)",
  },
  {
    id: "t5",
    quote:
      "Aplikasi yang sangat bagus. Sangat membantu anak-anak untuk belajar membaca Al Qur'an. Terimakasih banyak.",
    author: "Yuni Purwita Sari",
    role: "Pengguna Aplikasi Wafa",
    stars: 5,
    avatar: "YP",
    avatarColor: "linear-gradient(135deg, #4b2a67, #9d167c)",
  },
];

// ─── Products ────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  {
    id: "bt-kb",
    name: "Buku Tilawah Jilid KB/TK",
    slug: "buku-tilawah-kb-tk",
    category: "Buku Tilawah",
    price: 40000,
    rating: 4.9,
    reviewCount: 1250,
    badge: "Bestseller",
  },
  {
    id: "bt-1",
    name: "Buku Tilawah Jilid 1",
    slug: "buku-tilawah-jilid-1",
    category: "Buku Tilawah",
    price: 45000,
    rating: 4.9,
    reviewCount: 2340,
    badge: "Bestseller",
  },
  {
    id: "bt-2",
    name: "Buku Tilawah Jilid 2",
    slug: "buku-tilawah-jilid-2",
    category: "Buku Tilawah",
    price: 45000,
    rating: 4.8,
    reviewCount: 1870,
  },
  {
    id: "bt-3",
    name: "Buku Tilawah Jilid 3",
    slug: "buku-tilawah-jilid-3",
    category: "Buku Tilawah",
    price: 45000,
    rating: 4.8,
    reviewCount: 1620,
  },
  {
    id: "bt-4",
    name: "Buku Tilawah Jilid 4",
    slug: "buku-tilawah-jilid-4",
    category: "Buku Tilawah",
    price: 45000,
    rating: 4.8,
    reviewCount: 1340,
  },
  {
    id: "bt-5",
    name: "Buku Tilawah Jilid 5",
    slug: "buku-tilawah-jilid-5",
    category: "Buku Tilawah",
    price: 45000,
    rating: 4.9,
    reviewCount: 1100,
  },
  {
    id: "bm-1",
    name: "Buku Menulis Hijaiyah 1",
    slug: "buku-menulis-1",
    category: "Buku Menulis",
    price: 42000,
    rating: 4.8,
    reviewCount: 890,
    badge: "Bestseller",
  },
  {
    id: "bm-2",
    name: "Buku Menulis Hijaiyah 2",
    slug: "buku-menulis-2",
    category: "Buku Menulis",
    price: 42000,
    rating: 4.8,
    reviewCount: 750,
  },
  {
    id: "bm-3",
    name: "Buku Menulis Hijaiyah 3",
    slug: "buku-menulis-3",
    category: "Buku Menulis",
    price: 42000,
    rating: 4.7,
    reviewCount: 620,
  },
  {
    id: "bm-4",
    name: "Buku Menulis Hijaiyah 4",
    slug: "buku-menulis-4",
    category: "Buku Menulis",
    price: 42000,
    rating: 4.7,
    reviewCount: 580,
  },
  {
    id: "bm-5",
    name: "Buku Menulis Hijaiyah 5",
    slug: "buku-menulis-5",
    category: "Buku Menulis",
    price: 42000,
    rating: 4.8,
    reviewCount: 430,
  },
  {
    id: "bm-6",
    name: "Buku Menulis Hijaiyah 6",
    slug: "buku-menulis-6",
    category: "Buku Menulis",
    price: 42000,
    rating: 4.8,
    reviewCount: 380,
    badge: "New",
  },
  {
    id: "kp-a7",
    name: "Kartu Peraga Huruf Hijaiyah A7",
    slug: "kartu-peraga-a7",
    category: "Kartu & Peraga",
    price: 35000,
    rating: 4.9,
    reviewCount: 1120,
    badge: "Bestseller",
  },
  {
    id: "kp-a5",
    name: "Kartu Peraga Huruf Hijaiyah A5",
    slug: "kartu-peraga-a5",
    category: "Kartu & Peraga",
    price: 32000,
    rating: 4.8,
    reviewCount: 890,
  },
  {
    id: "km",
    name: "Kartu Memori Wafa",
    slug: "kartu-memori",
    category: "Kartu & Peraga",
    price: 45000,
    rating: 4.7,
    reviewCount: 560,
  },
  {
    id: "kprestasi",
    name: "Kartu Prestasi Wafa",
    slug: "kartu-prestasi",
    category: "Kartu & Peraga",
    price: 25000,
    rating: 4.9,
    reviewCount: 780,
  },
  {
    id: "peraga-a2-1",
    name: "Peraga Besar A2 Tilawah Wafa 1",
    slug: "peraga-a2-1",
    category: "Kartu & Peraga",
    price: 55000,
    rating: 4.8,
    reviewCount: 340,
  },
  {
    id: "peraga-a2-2",
    name: "Peraga Besar A2 Tilawah Wafa 2",
    slug: "peraga-a2-2",
    category: "Kartu & Peraga",
    price: 55000,
    rating: 4.8,
    reviewCount: 290,
  },
  {
    id: "peraga-a2-3",
    name: "Peraga Besar A2 Tilawah Wafa 3",
    slug: "peraga-a2-3",
    category: "Kartu & Peraga",
    price: 55000,
    rating: 4.9,
    reviewCount: 260,
  },
  {
    id: "peraga-a2-4",
    name: "Peraga Besar A2 Tilawah Wafa 4",
    slug: "peraga-a2-4",
    category: "Kartu & Peraga",
    price: 55000,
    rating: 4.8,
    reviewCount: 210,
  },
  {
    id: "peraga-a2-5",
    name: "Peraga Besar A2 Tilawah Wafa 5",
    slug: "peraga-a2-5",
    category: "Kartu & Peraga",
    price: 55000,
    rating: 4.9,
    reviewCount: 190,
  },
  {
    id: "peraga-kb",
    name: "Peraga Besar A2 Tilawah Wafa KB/TK",
    slug: "peraga-a2-kb",
    category: "Kartu & Peraga",
    price: 55000,
    rating: 4.9,
    reviewCount: 420,
  },
  {
    id: "bt-ghorib",
    name: "Buku Ghorib",
    slug: "buku-ghorib",
    category: "Buku Tilawah",
    price: 38000,
    rating: 4.8,
    reviewCount: 670,
  },
  {
    id: "bt-tajwid",
    name: "Buku Tajwid",
    slug: "buku-tajwid",
    category: "Buku Tilawah",
    price: 38000,
    rating: 4.8,
    reviewCount: 590,
  },
  {
    id: "bt-ttg",
    name: "Buku TTG (Tilawah, Tajwid & Ghorib)",
    slug: "buku-ttg",
    category: "Buku Tilawah",
    price: 55000,
    rating: 4.9,
    reviewCount: 820,
    badge: "Bestseller",
  },
  {
    id: "quran-5juz",
    name: "Al-Qur'an Hafalan 5 Juz (26-30)",
    slug: "quran-hafalan-5-juz",
    category: "Buku Tilawah",
    price: 75000,
    rating: 4.9,
    reviewCount: 1230,
  },
  {
    id: "terjemah-30",
    name: "Buku Terjemah Al-Qur'an Juz 30",
    slug: "terjemah-juz-30",
    category: "Buku Tilawah",
    price: 45000,
    rating: 4.8,
    reviewCount: 960,
  },
  {
    id: "kisah-islami",
    name: "Kisah Islami (Buku Berkisah)",
    slug: "kisah-islami",
    category: "Buku & Media",
    price: 65000,
    rating: 4.9,
    reviewCount: 1450,
    badge: "Bestseller",
  },
  {
    id: "flashdisk",
    name: "Flashdisk Wafa",
    slug: "flashdisk-wafa",
    category: "Audio/Video",
    price: 120000,
    rating: 4.8,
    reviewCount: 450,
  },
];

// ─── Articles (mock) ─────────────────────────────────────────────────────────

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Risalah Dakwah"
    | "Ikhtisar Wafa"
    | "Info Terkini"
    | "Parenting Qur'ani";
  date: string;
  readTime: number;
  author: string;
}

export const ARTICLES: Article[] = [
  {
    id: "a1",
    slug: "menjaga-standar-keunggulan-supervisi-2026",
    title:
      "Menjaga Standar Keunggulan Al-Qur'an: Supervisi Pembelajaran Metode Wafa 2026",
    excerpt:
      "Alhamdulillah, supervisi berkala terus dilaksanakan untuk memastikan mutu pembelajaran Al-Qur'an di lembaga mitra tetap konsisten dan berkembang.",
    category: "Info Terkini",
    date: "14 Januari 2026",
    readTime: 5,
    author: "Wafa Indonesia",
  },
  {
    id: "a2",
    slug: "10-tahun-kemitraan-nufi-sidoarjo",
    title:
      "10 Tahun Kemitraan Bermakna: Guru NUFI QURANIC SCHOOL SIDOARJO Menyelenggarakan Up-Grading Kompetensi",
    excerpt:
      "Satu dekade kebersamaan dirayakan dengan semangat baru — up-grading dua hari penuh yang mengokohkan kompetensi guru Al-Qur'an.",
    category: "Info Terkini",
    date: "16 Juli 2025",
    readTime: 6,
    author: "Wafa Indonesia",
  },
  {
    id: "a3",
    slug: "edukasi-anak-manusia-surga",
    title: 'Edukasi Anak, Menjadikan Ananda sebagai "Manusia Surga"',
    excerpt:
      "Setiap orang tua yang beriman menginginkan anak-anaknya menjadi shalih dan shalihah, serta kelak berkumpul bersama keluarga di surga.",
    category: "Risalah Dakwah",
    date: "31 Januari 2025",
    readTime: 8,
    author: "Wafa Indonesia",
  },
  {
    id: "a4",
    slug: "gibran-alfatih-hafiz-indonesia-2024",
    title:
      "Gibran Alfatih: Menaklukkan Hafiz Indonesia 2024 dengan Nada Hijaz Metode Wafa",
    excerpt:
      "Kisah inspiratif juara pertama Hafiz Indonesia 2024 dari mitra Wafa Al Amjad Medan yang memukau juri dengan irama Hijaz yang syahdu.",
    category: "Ikhtisar Wafa",
    date: "3 Juni 2024",
    readTime: 7,
    author: "Wafa Indonesia",
  },
  {
    id: "a5",
    slug: "simaan-blitar-timur",
    title:
      "Meningkatkan Semangat Menghafal Al-Qur'an di Blitar Timur melalui SIMAAN",
    excerpt:
      'Kegiatan SIMAAN bertema "Menghafal Al-Qur\'an Mudah Menyenangkan" sukses mempererat silaturahim dan meningkatkan kompetensi hafalan guru.',
    category: "Info Terkini",
    date: "31 Januari 2025",
    readTime: 4,
    author: "Wafa Indonesia",
  },
  {
    id: "a6",
    slug: "isra-miraj-sholat-lima-waktu",
    title: "Isra Miraj: Momen Mengajarkan Anak Pentingnya Sholat Lima Waktu",
    excerpt:
      "Isra Miraj bukan sekadar peringatan — ini adalah momen emas untuk menanamkan kesadaran sholat pada anak dengan penuh kasih dan keteladanan.",
    category: "Risalah Dakwah",
    date: "26 Januari 2025",
    readTime: 6,
    author: "Wafa Indonesia",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Apa itu Metode Wafa?",
    answer:
      "Wafa adalah sistem pembelajaran Al-Qur'an komprehensif yang menggunakan Metode Otak Kanan dan Irama Hijaz 3 Nada. Dikembangkan sejak 2012 oleh Yayasan Syafa'atul Qur'an Indonesia (YAQIN), Wafa mencakup 5T (Tilawah, Tahfidz, Tarjamah, Tafhim, Tafsir) dengan jaminan mutu 7M (Memetakan, Memperbaiki, Menstandarisasi, Mendampingi, Mensupervisi, Munaqosyah, Mengukuhkan).",
  },
  {
    id: "faq-2",
    question: "Berapa biaya bermitra dengan Wafa?",
    answer:
      "Wafa menawarkan tiga paket kemitraan: Starter (Rp5 juta) untuk pelatihan guru dan starter kit, Growth (Rp12 juta) dengan pendampingan 6 bulan dan supervisi 3x, serta Excellence (Rp25 juta) dengan pendampingan penuh 12 bulan. Semua paket bisa dicicil 3–6 kali. Hubungi kami di 0811 3058 9310 untuk penawaran yang disesuaikan.",
  },
  {
    id: "faq-3",
    question: "Bagaimana cara download Aplikasi Wafa?",
    answer:
      'Cari "Wafa Indonesia" di Google Play Store, lalu instal. Aplikasi gratis untuk 6 halaman pertama. Untuk akses penuh, berlangganan melalui aplikasi dengan metode pembayaran: potong pulsa (Indosat, XL/Axis, Telkomsel, dll.), GoPay, tukar kode Alfamart/Indomaret, atau kartu kredit/debit. Butuh bantuan? Hubungi Help Center di 0888-054-9190 via WhatsApp.',
  },
  {
    id: "faq-4",
    question: "Apakah Wafa tersedia di kota saya?",
    answer:
      "Wafa telah tersebar di 35 provinsi di Indonesia! Kami memiliki perwakilan daerah (Wafa Daerah) di Jawa Timur (Sidoarjo, Malang, Ponorogo, Blitar, Kediri, Jombang, Bojonegoro, Lamongan), Jawa Barat (Karawang), Jawa Tengah (Banyumas), Sulawesi Selatan (Makassar), Kalimantan Timur (Balikpapan), dan banyak lagi. Cek halaman Kontak untuk detail lengkap.",
  },
  {
    id: "faq-5",
    question: "Bagaimana proses sertifikasi guru Wafa?",
    answer:
      "Sertifikasi guru Wafa dilakukan melalui program SAGAQU (Sekolah Guru Ahli Al-Qur'an) atau PSGA (Pelatihan Sertifikasi Guru Al-Qur'an) selama 3 hari. Peserta akan melalui pemetaan kemampuan (M1), perbaikan (M2), standarisasi metodologi (M3), dan diakhiri dengan Munaqosyah (ujian akhir, M6) untuk mendapatkan Syahadah (sertifikat) resmi Wafa.",
  },
];

// ─── Wafa Daerah ─────────────────────────────────────────────────────────────

export const WAFA_DAERAH = [
  {
    provinsi: "Bengkulu",
    kota: "Kab. Kepahiyang",
    ketua: "Sunarlianti, S.Pd.I",
    wa: "6285381297194",
  },
  {
    provinsi: "Jawa Barat",
    kota: "Kab. Karawang",
    ketua: "Ridwan",
    wa: "6281384042406",
  },
  {
    provinsi: "Jawa Tengah",
    kota: "Kab. Banyumas",
    ketua: "Seli Dewi Lestari",
    wa: "6282223525980",
  },
  {
    provinsi: "Jawa Timur",
    kota: "Kab. Sidoarjo",
    ketua: "Koordinator Sidoarjo",
    wa: "6281130589310",
  },
  {
    provinsi: "Jawa Timur",
    kota: "Kota Malang",
    ketua: "Koordinator Malang",
    wa: "6281130589310",
  },
  {
    provinsi: "Jawa Timur",
    kota: "Kab. Ponorogo",
    ketua: "Koordinator Ponorogo",
    wa: "6281130589310",
  },
  {
    provinsi: "Jawa Timur",
    kota: "Kab. Blitar",
    ketua: "Koordinator Blitar",
    wa: "6281130589310",
  },
  {
    provinsi: "Jawa Timur",
    kota: "Kota Kediri",
    ketua: "Koordinator Kediri",
    wa: "6281130589310",
  },
  {
    provinsi: "Jawa Timur",
    kota: "Kab. Jombang",
    ketua: "Koordinator Jombang",
    wa: "6281130589310",
  },
  {
    provinsi: "Jawa Timur",
    kota: "Kab. Bojonegoro",
    ketua: "Koordinator Bojonegoro",
    wa: "6281130589310",
  },
  {
    provinsi: "Jawa Timur",
    kota: "Kab. Lamongan",
    ketua: "Koordinator Lamongan",
    wa: "6281130589310",
  },
  {
    provinsi: "Kalimantan Selatan",
    kota: "Kab. Hulu Sungai Utara",
    ketua: "Koordinator HSU",
    wa: "6281130589310",
  },
  {
    provinsi: "Kalimantan Timur",
    kota: "Kota Balikpapan",
    ketua: "Koordinator Balikpapan",
    wa: "6281130589310",
  },
  {
    provinsi: "Lampung",
    kota: "Kota Metro",
    ketua: "Koordinator Metro",
    wa: "6281130589310",
  },
  {
    provinsi: "Nusa Tenggara Barat",
    kota: "Kab. Lombok Utara",
    ketua: "Koordinator Lombok Utara",
    wa: "6281130589310",
  },
  {
    provinsi: "Nusa Tenggara Barat",
    kota: "Kab. Lombok Barat",
    ketua: "Koordinator Lombok Barat",
    wa: "6281130589310",
  },
  {
    provinsi: "Nusa Tenggara Timur",
    kota: "Kab. Sikka",
    ketua: "Koordinator Sikka",
    wa: "6281130589310",
  },
  {
    provinsi: "Papua Barat Daya",
    kota: "Kota Sorong",
    ketua: "Koordinator Sorong",
    wa: "6281130589310",
  },
  {
    provinsi: "Sulawesi Selatan",
    kota: "Kota Makassar",
    ketua: "Koordinator Makassar",
    wa: "6281130589310",
  },
];

// ─── Mitra Logos (placeholder names) ─────────────────────────────────────────

export const MITRA_LOGOS = [
  "Muhammadiyah",
  "Nahdlatul Ulama",
  "Al Azhar Indonesia",
  "NUFI Quranic School",
  "MAN 2 Lubuklinggau",
  "Perguruan Al Amjad Medan",
  "TK Islam Al Azhar",
  "LPTQ Jawa Timur",
  "Yayasan Pendidikan Islam",
  "Pesantren Refah Islami",
  "Kemenag RI",
  "IKADI Jawa Timur",
];

// ─── 5T Method Data ───────────────────────────────────────────────────────────

export const FIVE_T = [
  {
    id: "1",
    key: "Tilawah",
    icon: "📖",
    color: "var(--color-magenta-bold)",
    bg: "rgba(209,0,113,0.08)",
    title: "Tilawah",
    desc: "Membaca & menulis Al-Qur'an dengan makhraj dan tajwid yang benar menggunakan pendekatan otak kanan yang menyenangkan.",
  },
  {
    id: "2",
    key: "Tahfidz",
    icon: "🧠",
    color: "var(--color-emerald)",
    bg: "rgba(31,129,36,0.08)",
    title: "Tahfidz",
    desc: "Menghafal 5–30 juz Al-Qur'an dengan teknik otak kanan: visual, emosi, melodi, dan cerita yang membuat hafalan menempel kuat.",
  },
  {
    id: "3",
    key: "Tarjamah",
    icon: "🌐",
    color: "var(--color-tangerine)",
    bg: "rgba(255,123,0,0.08)",
    title: "Tarjamah",
    desc: "Memahami bahasa Arab Al-Qur'an dan menerjemahkan ayat-ayat pilihan sehingga Al-Qur'an terasa lebih hidup dan bermakna.",
  },
  {
    id: "4",
    key: "Tafhim",
    icon: "💡",
    color: "var(--color-golden)",
    bg: "rgba(255,145,0,0.08)",
    title: "Tafhim",
    desc: "Memahami makna ayat-ayat Al-Qur'an dan mengaplikasikannya dalam kehidupan sehari-hari secara kontekstual.",
  },
  {
    id: "5",
    key: "Tafsir",
    icon: "📜",
    color: "var(--color-deep)",
    bg: "rgba(75,42,103,0.08)",
    title: "Tafsir",
    desc: "Menafsirkan Al-Qur'an dengan pendekatan kontekstual, mengaitkan ayat dengan kondisi masyarakat dan zaman kini.",
  },
];

// ─── 7M System Data ───────────────────────────────────────────────────────────

export const SEVEN_M = [
  {
    step: "M1",
    title: "Memetakan",
    icon: "🗺️",
    color: "var(--color-magenta-bold)",
    desc: "Tashnif: Mengukur kemampuan awal tilawah, tahfidz, dan mengajar guru Al-Qur'an serta kemampuan tilawah dan tahfidz siswa.",
  },
  {
    step: "M2",
    title: "Memperbaiki",
    icon: "🔧",
    color: "var(--color-tangerine)",
    desc: "Tahsin: Perbaikan tilawah dan tahfidz guru Al-Qur'an secara bertahap berdasarkan hasil pemetaan dari M1.",
  },
  {
    step: "M3",
    title: "Menstandarisasi",
    icon: "🛡️",
    color: "var(--color-emerald)",
    desc: "Standardisasi proses pembelajaran, irama hijaz, pengelolaan kelas, penilaian, dan laporan pembelajaran Al-Qur'an.",
  },
  {
    step: "M4",
    title: "Mendampingi",
    icon: "🤝",
    color: "var(--color-golden)",
    desc: "Coaching kepala sekolah, koordinator Al-Qur'an, tim manajemen mutu, dan guru untuk memaksimalkan penyelesaian masalah di kelas.",
  },
  {
    step: "M5",
    title: "Mensupervisi",
    icon: "📋",
    color: "var(--color-magenta-deep)",
    desc: "Supervisi, monitoring, dan evaluasi berkala untuk meningkatkan kompetensi guru dan menjaga mutu lembaga secara berkelanjutan.",
  },
  {
    step: "M6",
    title: "Munaqosyah",
    icon: "📝",
    color: "var(--color-emerald)",
    desc: "Ujian akhir tilawah dan tahfidz oleh Munaqisy dari Wafa Pusat untuk memastikan standar kualitas setiap guru dan siswa.",
  },
  {
    step: "M7",
    title: "Mengukuhkan",
    icon: "🏆",
    color: "var(--color-deep)",
    desc: "Apresiasi capaian kepada peserta didik dan orang tua. Penyelenggaraan pengukuhan / uji publik sebagai bentuk syiar keberhasilan.",
  },
];
