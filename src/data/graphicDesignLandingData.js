const colors = {
  accent: "var(--accent)",
  orange: "var(--accent-2)",
  purple: "var(--accent-3)",
  cyan: "var(--accent-4)",
  pink: "var(--accent-5)",
  amber: "var(--accent-6)",
  green: "var(--accent-7)",
  rose: "var(--accent-8)",
  neutral: "var(--neutral)",
};

const gradients = {
  portfolio: {
    arcove: "var(--portfolio-arcove-bg)",
    lumio: "var(--portfolio-lumio-bg)",
    zendaya: "var(--portfolio-zendaya-bg)",
    novatech: "var(--portfolio-novatech-bg)",
    foresta: "var(--portfolio-foresta-bg)",
    pulse: "var(--portfolio-pulse-bg)",
  },
};

const whatsappHref =
  "https://wa.me/6281234567890?text=Halo%20KREATIV%2C%20saya%20ingin%20konsultasi%20desain%20untuk%20bisnis%20saya.";

export const siteConfig = {
  name: "KREATIV.",
  tagline: "Studio desain untuk UMKM",
  location: "Jakarta, Indonesia",
  email: "hello@kreativ.studio",
  phone: "+62 812 3456 7890",
  whatsappHref,
  social: [
    { label: "Instagram", shortLabel: "IG", href: "#" },
    { label: "TikTok", shortLabel: "TT", href: "#" },
    { label: "Behance", shortLabel: "BE", href: "#" },
  ],
  copyrightYear: "2026",
};

export const navLinks = [
  { label: "Home", href: "/", page: "home" },
  { label: "Tentang", href: "/tentang", page: "tentang" },
  { label: "Layanan", href: "/layanan", page: "layanan" },
  { label: "Portfolio", href: "/portfolio", page: "portfolio" },
  { label: "Kontak", href: "/kontak", page: "kontak" },
];

export const navCta = {
  label: "Brief Project",
  href: "/kontak",
};

export const pageHeaderData = {
  tentang: {
    badge: "Tentang KREATIV",
    title: ["Studio kecil untuk ", { em: "brand yang ingin tumbuh." }],
    description:
      "KREATIV membantu UMKM membangun tampilan visual yang konsisten, profesional, dan mudah dipakai di channel penjualan harian.",
    highlights: ["Fokus UMKM", "Desain strategis", "File siap pakai", "Proses jelas"],
  },
  layanan: {
    badge: "Layanan & Paket",
    title: ["Desain lengkap untuk ", { em: "jualan lebih rapi." }],
    description:
      "Pilih kebutuhan desain yang paling dekat dengan tahap bisnis kamu. Semua paket bisa disesuaikan untuk UMKM, brand baru, dan campaign musiman.",
    highlights: ["Logo", "Branding", "Konten Sosial", "Company Profile", "Packaging"],
  },
  portfolio: {
    badge: "Portfolio",
    title: ["Contoh arah visual yang ", { em: "siap dipakai." }],
    description:
      "Gunakan halaman ini untuk menampilkan hasil desain nyata, mockup campaign, dan studi kasus singkat agar calon klien lebih cepat percaya.",
    highlights: ["Identitas Brand", "Kemasan", "Social Kit", "Profil Bisnis"],
  },
  kontak: {
    badge: "Kontak & Brief",
    title: ["Brief desain ", { em: "untuk UMKM." }],
    description:
      "Langsung kirim kebutuhan desain, lalu kami bantu rapikan scope, estimasi harga, dan timeline.",
    highlights: ["Respon < 24 jam", "Konsultasi awal gratis", "WhatsApp friendly"],
    compact: true,
  },
};

export const aboutSectionData = {
  badge: "Profil Studio",
  title: ["Kami percaya desain bagus harus ", { em: "mudah dipakai." }],
  intro:
    "Banyak UMKM sudah punya produk bagus, tapi visualnya belum konsisten. KREATIV hadir untuk menjembatani kebutuhan itu: desain yang terlihat profesional, tetap praktis dipakai, dan tidak membuat owner harus paham semua istilah desain.",
  story: [
    "Kami memulai KREATIV sebagai studio desain yang fokus pada bisnis lokal: kuliner, beauty, fashion, edukasi, jasa, dan brand rumahan yang sedang naik kelas.",
    "Pendekatan kami sederhana. Pahami dulu target pembeli, channel jualan, dan kebutuhan paling mendesak. Setelah itu baru desain dibuat agar setiap aset punya fungsi yang jelas.",
    "Output akhir selalu disiapkan agar langsung bisa dipakai untuk WhatsApp, Instagram, marketplace, proposal, cetak, dan kebutuhan promosi lain.",
  ],
  stats: [
    { value: "200+", label: "Project visual selesai" },
    { value: "5yr+", label: "Pengalaman desain brand" },
    { value: "24h", label: "Rata-rata respon brief" },
  ],
  values: [
    {
      title: "Jelas sebelum indah",
      desc: "Kami mulai dari fungsi, target audiens, dan pesan utama sebelum masuk ke pilihan warna atau style.",
      color: colors.accent,
    },
    {
      title: "Praktis untuk tim kecil",
      desc: "Desain disiapkan agar owner atau admin bisa lanjut memakai aset tanpa workflow yang rumit.",
      color: colors.cyan,
    },
    {
      title: "Konsisten di banyak channel",
      desc: "Logo, konten, kemasan, dan dokumen dibuat terasa satu brand saat dipakai di tempat berbeda.",
      color: colors.orange,
    },
  ],
  workflow: [
    "Brief singkat dan audit kebutuhan",
    "Arah visual dan referensi",
    "Produksi desain prioritas",
    "Revisi terarah",
    "Final file dan panduan pemakaian",
  ],
};

export const heroData = {
  badge: "Studio desain kreatif untuk UMKM di Indonesia",
  headline: [
    { text: "Desain brand" },
    { text: "yang bikin" },
    { text: "bisnis mudah diingat.", accent: true },
  ],
  subheadline:
    "Kami bantu UMKM tampil profesional lewat logo, identitas visual, konten sosial media, company profile, dan desain promosi yang siap dipakai jualan.",
  ctas: [
    { label: "Konsultasi via WhatsApp", href: whatsappHref, variant: "primary", icon: "arrow-right" },
    { label: "Lihat Portfolio", href: "/portfolio", variant: "ghost" },
  ],
  stats: [
    { value: "200+", label: "Desain selesai" },
    { value: "4.9/5", label: "Rating klien" },
    { value: "3-7hr", label: "Rata-rata kerja" },
  ],
  canvas: {
    core: {
      symbol: "K",
      name: "KREATIV",
      subtitle: "DESIGN",
    },
    swatches: [colors.accent, colors.orange, colors.purple, colors.cyan, colors.pink],
    floatingCards: [
      { label: "Logo UMKM", color: colors.accent, symbol: "L" },
      { label: "Brand Kit", color: colors.orange, symbol: "B" },
      { label: "Social Post", color: colors.purple, symbol: "S" },
      { label: "Packaging", color: colors.cyan, symbol: "P" },
    ],
  },
  scrollLabel: "Scroll",
};

export const brandStripData = {
  label: "Cocok untuk bisnis kuliner, fashion, beauty, edukasi, dan jasa lokal",
  logos: [
    "KOPI LOKAL",
    "BAKERY",
    "SKINCARE",
    "FASHION",
    "BARBERSHOP",
    "COURSE",
    "LAUNDRY",
    "CATERING",
    "CLINIC",
    "EVENT",
  ],
};

export const servicesSectionData = {
  badge: "Layanan",
  title: ["Desain yang ", { em: "langsung terasa" }, " manfaatnya."],
  description:
    "Fokus pada kebutuhan visual yang paling sering dibutuhkan UMKM untuk terlihat dipercaya dan konsisten.",
  services: [
    {
      symbol: "L",
      title: "Logo Design",
      desc: "Logo utama, variasi logo, ikon, dan file siap pakai untuk online maupun cetak.",
      color: colors.accent,
    },
    {
      symbol: "B",
      title: "Brand Identity",
      desc: "Warna, tipografi, pattern, mood visual, dan panduan sederhana agar brand konsisten.",
      color: colors.orange,
    },
    {
      symbol: "S",
      title: "Social Media Kit",
      desc: "Template feed, story, promo, dan highlight cover yang mudah dipakai ulang.",
      color: colors.purple,
    },
    {
      symbol: "P",
      title: "Packaging Design",
      desc: "Label, stiker, sleeve, box, dan kemasan yang lebih menarik saat difoto atau dipajang.",
      color: colors.cyan,
    },
    {
      symbol: "C",
      title: "Company Profile",
      desc: "Profil bisnis PDF untuk penawaran, proposal kerja sama, dan presentasi calon klien.",
      color: colors.pink,
    },
    {
      symbol: "A",
      title: "Campaign Visual",
      desc: "Key visual untuk launching, diskon, event, dan promo bulanan yang terlihat rapi.",
      color: colors.amber,
    },
    {
      symbol: "W",
      title: "Website Visual",
      desc: "Arah visual landing page, banner, section, dan aset UI yang siap masuk development.",
      color: colors.green,
    },
    {
      symbol: "I",
      title: "Custom Illustration",
      desc: "Ilustrasi maskot, ikon, dan visual pendukung yang membuat brand lebih khas.",
      color: colors.rose,
    },
  ],
};

export const whyChooseUsData = {
  badge: "Kenapa KREATIV",
  title: ["Bukan cuma bagus.", { br: true }, { em: "Harus membantu jualan." }],
  description:
    "Kami merancang visual dengan tujuan yang jelas: brand terlihat profesional, mudah dikenali, dan lebih siap dipakai di channel penjualan.",
  cta: {
    label: "Lihat Paket",
    href: "/layanan",
  },
  benefits: [
    {
      symbol: "01",
      title: "Bahasa mudah dipahami",
      desc: "Proses briefing dibuat sederhana, tanpa istilah desain yang bikin bingung.",
    },
    {
      symbol: "02",
      title: "Cepat dan terarah",
      desc: "Timeline jelas sejak awal, cocok untuk bisnis yang butuh materi promosi segera.",
    },
    {
      symbol: "03",
      title: "File siap pakai",
      desc: "Output disiapkan untuk WhatsApp, Instagram, marketplace, cetak, dan presentasi.",
    },
    {
      symbol: "04",
      title: "Revisi transparan",
      desc: "Setiap paket punya batas revisi jelas agar scope tetap sehat dan hasil tetap rapi.",
    },
    {
      symbol: "05",
      title: "Brand tetap konsisten",
      desc: "Kami bantu buat aturan visual sederhana supaya konten berikutnya tidak acak.",
    },
    {
      symbol: "06",
      title: "Bisa mulai kecil",
      desc: "Tidak harus langsung paket besar. Mulai dari logo, lalu naik ke brand kit atau konten.",
    },
  ],
};

export const processSectionData = {
  badge: "Alur Kerja",
  title: "Dari brief ke file siap pakai.",
  description: "Empat langkah sederhana agar project tetap jelas dari awal sampai selesai.",
  steps: [
    {
      step: "01",
      title: "Brief",
      desc: "Kamu ceritakan bisnis, target pembeli, referensi visual, dan kebutuhan desain.",
    },
    {
      step: "02",
      title: "Arah Visual",
      desc: "Kami susun mood, warna, dan konsep awal agar arah desain disetujui dulu.",
    },
    {
      step: "03",
      title: "Desain & Revisi",
      desc: "Desain diproduksi, lalu dirapikan lewat revisi sesuai paket yang dipilih.",
    },
    {
      step: "04",
      title: "Final File",
      desc: "File final dikirim dalam format yang sesuai kebutuhan online, cetak, dan arsip.",
    },
  ],
};

export const portfolioSectionData = {
  badge: "Portfolio",
  title: ["Visual project ", { em: "untuk berbagai UMKM." }],
  description:
    "Contoh kategori project yang bisa kamu isi dengan karya nyata, mockup, atau studi kasus client.",
  viewLabel: "Lihat Detail",
  items: [
    {
      title: "Kopi Jalan Senja",
      category: "Brand Identity",
      bg: gradients.portfolio.arcove,
      accent: colors.accent,
      symbol: "KJ",
      size: "large",
    },
    {
      title: "Rasa Dapur",
      category: "Packaging Design",
      bg: gradients.portfolio.lumio,
      accent: colors.orange,
      symbol: "RD",
      size: "small",
    },
    {
      title: "Glow Daily",
      category: "Social Media Kit",
      bg: gradients.portfolio.zendaya,
      accent: colors.cyan,
      symbol: "GD",
      size: "small",
    },
    {
      title: "SkillUp Course",
      category: "Website Visual",
      bg: gradients.portfolio.novatech,
      accent: colors.purple,
      symbol: "SU",
      size: "large",
    },
    {
      title: "Tumbuh Florist",
      category: "Rebrand UMKM",
      bg: gradients.portfolio.foresta,
      accent: colors.green,
      symbol: "TF",
      size: "medium",
    },
    {
      title: "Bersih Kilat",
      category: "Campaign Visual",
      bg: gradients.portfolio.pulse,
      accent: colors.pink,
      symbol: "BK",
      size: "medium",
    },
  ],
};

export const pricingSectionData = {
  badge: "Paket Harga",
  title: "Mulai sesuai kebutuhan.",
  description:
    "Harga dibuat jelas agar calon klien UMKM bisa memilih paket tanpa harus menebak scope.",
  popularLabel: "Paling Dipilih",
  currency: "Rp",
  note: "per project",
  customProject: {
    text: "Butuh paket custom?",
    label: "Diskusi via WhatsApp",
    href: whatsappHref,
  },
  plans: [
    {
      name: "Starter",
      tag: "Untuk brand baru",
      price: "2.500.000",
      color: colors.neutral,
      features: [
        "Logo design 3 konsep",
        "2x revisi minor",
        "PNG, JPG, SVG",
        "Palet warna dasar",
        "Estimasi 3-5 hari kerja",
      ],
      cta: "Pilih Starter",
      href: whatsappHref,
      popular: false,
    },
    {
      name: "Growth",
      tag: "Untuk bisnis aktif jualan",
      price: "7.500.000",
      color: colors.accent,
      features: [
        "Logo + brand identity",
        "Warna, font, dan elemen visual",
        "Brand guideline PDF",
        "Template sosial media 6 desain",
        "File source terorganisir",
        "Estimasi 7 hari kerja",
      ],
      cta: "Pilih Growth",
      href: whatsappHref,
      popular: true,
    },
    {
      name: "Scale",
      tag: "Untuk campaign lengkap",
      price: "18.000.000",
      color: colors.purple,
      features: [
        "Semua dalam Growth",
        "Packaging atau company profile",
        "Campaign visual kit",
        "Custom illustration 3 aset",
        "Template promo bulanan",
        "Priority support",
        "Estimasi 10-14 hari kerja",
      ],
      cta: "Pilih Scale",
      href: whatsappHref,
      popular: false,
    },
  ],
};

export const testimonialsSectionData = {
  badge: "Testimoni",
  title: "Dipakai bisnis yang sedang bertumbuh.",
  ratingColor: colors.accent,
  items: [
    {
      name: "Aditya Pratama",
      role: "Owner, Kopi Jalan Senja",
      text: "Logo dan kemasan baru bikin produk kami jauh lebih enak difoto. Materi promonya juga tinggal pakai.",
      rating: 5,
      initials: "AP",
      avatarColor: colors.accent,
    },
    {
      name: "Sari Dewi",
      role: "Founder, Glow Daily",
      text: "Template Instagramnya membantu tim kecil kami tetap konsisten posting tanpa harus desain dari nol.",
      rating: 5,
      initials: "SD",
      avatarColor: colors.orange,
    },
    {
      name: "Marcus Wijaya",
      role: "Owner, SkillUp Course",
      text: "Briefnya simple, prosesnya cepat, dan hasil visual landing page kami jadi lebih premium.",
      rating: 5,
      initials: "MW",
      avatarColor: colors.purple,
    },
    {
      name: "Dina Rahma",
      role: "Marketing, Rasa Dapur",
      text: "Label dan stiker baru langsung terasa bedanya. Produk terlihat lebih siap masuk reseller.",
      rating: 5,
      initials: "DR",
      avatarColor: colors.cyan,
    },
  ],
};

export const faqSectionData = {
  badge: "FAQ",
  title: ["Pertanyaan yang ", { br: true }, "sering ", { em: "muncul." }],
  description:
    "Masih ragu soal paket, timeline, atau file akhir? Kirim pesan, kami bantu jelaskan dari awal.",
  contactLabel: "Tanya via WhatsApp",
  contactHref: whatsappHref,
  items: [
    {
      q: "Berapa lama pengerjaan desain?",
      a: "Tergantung scope. Logo biasanya 3-5 hari kerja, brand identity 7 hari kerja, dan paket campaign lengkap 10-14 hari kerja.",
    },
    {
      q: "Apakah bisa untuk bisnis di luar Jakarta?",
      a: "Bisa. Semua proses bisa dilakukan lewat WhatsApp, email, Google Drive, dan meeting online jika dibutuhkan.",
    },
    {
      q: "File apa saja yang saya terima?",
      a: "Kamu akan menerima file siap pakai seperti PNG, JPG, PDF, SVG jika relevan, dan file source sesuai paket.",
    },
    {
      q: "Apakah ada revisi?",
      a: "Ada. Jumlah revisi mengikuti paket yang dipilih. Revisi besar di luar scope awal akan dihitung sebagai tambahan.",
    },
    {
      q: "Bisa mulai dari satu desain dulu?",
      a: "Bisa. Untuk UMKM, kami sarankan mulai dari kebutuhan paling mendesak seperti logo, template promo, atau packaging.",
    },
    {
      q: "Apakah bisa retainer bulanan?",
      a: "Bisa. Untuk kebutuhan konten sosial media dan campaign rutin, tersedia paket bulanan mulai dari Rp 5.000.000.",
    },
  ],
};

export const finalCtaData = {
  eyebrow: "Siap rapikan visual bisnis kamu?",
  title: ["Mulai kecil boleh.", { br: true }, "Yang penting ", { em: "konsisten." }],
  description:
    "Kirim brief singkat lewat WhatsApp. Kami bantu rekomendasikan paket desain yang paling masuk akal untuk tahap bisnis kamu.",
  ctas: [
    { label: "Chat WhatsApp", href: whatsappHref, variant: "primary", icon: "arrow-right" },
    { label: "Isi Brief", href: "/kontak", variant: "ghost" },
  ],
};

export const contactSectionData = {
  badge: "Brief Project",
  title: ["Ceritakan kebutuhan ", { em: "desainmu." }],
  description:
    "Pilih layanan, isi gambaran singkat project, lalu lanjutkan diskusi lewat WhatsApp. Brief awal ini membantu kami memberi estimasi yang lebih tepat.",
  whatsappHref,
  cards: [
    {
      label: "WhatsApp",
      value: siteConfig.phone,
      href: whatsappHref,
      color: colors.accent,
    },
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: colors.cyan,
    },
    {
      label: "Lokasi",
      value: siteConfig.location,
      href: "#",
      color: colors.orange,
    },
  ],
  services: [
    "Logo Design",
    "Brand Identity",
    "Social Media Kit",
    "Packaging",
    "Company Profile",
    "Campaign Visual",
  ],
  notes: [
    "Respon maksimal 24 jam kerja",
    "Konsultasi awal gratis",
    "Estimasi harga dikirim setelah scope jelas",
  ],
};

export const footerLinks = {
  services: {
    title: "Layanan",
    links: [
      { label: "Logo Design", href: "/layanan" },
      { label: "Brand Identity", href: "/layanan" },
      { label: "Social Media Kit", href: "/layanan" },
      { label: "Packaging", href: "/layanan" },
      { label: "Company Profile", href: "/layanan" },
    ],
  },
  company: {
    title: "Navigasi",
    links: [
      { label: "Home", href: "/" },
      { label: "Tentang", href: "/tentang" },
      { label: "Layanan", href: "/layanan" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Kontak", href: "/kontak" },
      { label: "WhatsApp", href: whatsappHref },
    ],
  },
  bottomNote: "Dibuat untuk bisnis lokal yang ingin tampil lebih rapi.",
};

export const graphicDesignLandingData = {
  siteConfig,
  navLinks,
  navCta,
  pageHeaderData,
  aboutSectionData,
  heroData,
  brandStripData,
  servicesSectionData,
  whyChooseUsData,
  processSectionData,
  portfolioSectionData,
  pricingSectionData,
  testimonialsSectionData,
  faqSectionData,
  finalCtaData,
  contactSectionData,
  footerLinks,
};
