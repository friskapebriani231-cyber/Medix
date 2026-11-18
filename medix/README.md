# MEDIX — Social Media Management Service

Landing page resmi dan profesional untuk **MEDIX**, penyedia jasa pengelolaan dan strategi media sosial yang berbasis di Purwokerto, Jawa Tengah. Website ini dirancang dengan standar desain modern (mengadopsi estetika *card pricing* modern seperti ChatGPT/SaaS terkini), responsif untuk berbagai ukuran layar, serta memenuhi standar semantik web lengkap.

---

## 📁 Struktur Direktori & File

```text
friska/
├── css/
│   └── style.css          # Desain sistem, warna brand, typography, dan layout responsif
├── html/
│   └── index.html         # Salinan alternatif halaman untuk kompatibilitas subfolder
├── image/
│   ├── icon.png           # Favicon & simbol logo resmi MEDIX
│   ├── ig.png             # Aset ikon Instagram
│   ├── logo.png           # Visual emblem / logo vertikal profil MEDIX
│   ├── medix.png          # Logo banner horizontal untuk header
│   └── wa.png             # Aset ikon WhatsApp
├── js/
│   └── script.js          # Otomasi pengiriman form ke WhatsApp & active scroll spy
├── index.html             # Halaman utama website (entry point root)
└── README.md              # Dokumentasi lengkap proyek
```

---

## 🛠️ Daftar Masalah yang Diperbaiki (Changelog)

Sebelum perbaikan, proyek ini memiliki beberapa kendala teknis yang menyebabkan tampilan tidak muncul (*broken layout*):

### 1. Struktur File & Jalur Relatif (Path Resolution)
* **Masalah Awal:** 
  * File HTML berada di dalam folder `html/index.HTML` (ekstensi kapital) dan tidak ada `index.html` di root folder proyek.
  * Tautan CSS menggunakan path root absolut: `<link rel="stylesheet" href="/css/style.css">`. Saat dibuka langsung via browser (`file:///...`), browser mencari file di `C:\css\style.css` (tidak ditemukan), sehingga halaman menjadi teks polos tanpa gaya visual.
  * Tautan favicon dan logo menggunakan path yang salah (`friska/image/medix.png` dan `image/medix.png`), menyebabkan gambar logo pecah / tidak muncul.
* **Solusi Perbaikan:**
  * Dibuat `index.html` utama di root direktori dengan jalur relatif yang tepat (`css/style.css`, `image/medix.png`, `image/icon.png`).
  * File di folder `html/` diselaraskan menjadi `html/index.html` dengan jalur `../css/` dan `../image/`, sehingga website dapat dibuka dengan sempurna baik dari root maupun dari dalam folder `html/`.

### 2. Konflik Spesifisitas CSS pada Tombol Paket (Specificity Conflict)
* **Masalah Awal:**
  * Selector `section a[href*="wa.me"]` menimpa tombol `.card-btn` pada kartu paket (Starter & Professional) karena memiliki spesifisitas lebih tinggi dan urutan deklarasi di bawah. Akibatnya, tombol kartu berubah warna hijau WhatsApp dan menambahkan ikon SVG ganda, merusak tampilan kartu harga.
* **Solusi Perbaikan:**
  * Membatasi selector dengan `:not(.card-btn)`:
    ```css
    section a[href*="wa.me"]:not(.card-btn) { ... }
    ```
  * Desain tombol kartu kembali bersih, konsisten, dan tombol paket unggulan (*Growth Package*) tetap menonjol dengan gradien biru khas MEDIX.

### 3. Pembersihan Navigasi & Pemisah Karakter
* **Masalah Awal:**
  * Navigasi menggunakan karakter pembatas pipe manual (`|`) yang disembunyikan menggunakan trik `font-size: 0` pada CSS, yang kurang ramah untuk aksesibilitas *screen reader*.
* **Solusi Perbaikan:**
  * Karakter pipe dihapus dari HTML dan digantikan dengan pengaturan jarak rapi menggunakan CSS Flexbox (`gap: 8px`).
  * Ditambahkan *active indicator* berbasis scroll (*scroll spy*).

### 4. Kelengkapan Elemen Semantik & Rubrik Penilaian Web
* **Masalah Awal:**
  * Bagian Tentang Kami belum menampilkan visual brand yang ada di folder `image/`.
  * Belum terdapat elemen tabel (`<table>`) dan list terurut (`<ol>`) yang umum menjadi kriteria wajib dalam tugas pemrograman web.
* **Solusi Perbaikan:**
  * **Visual Brand:** Menampilkan `image/logo.png` secara elegan di samping deskripsi profil Tentang Kami dengan tata letak grid responsif.
  * **Tabel Perbandingan Fitur:** Menambahkan `<table>` modern yang membandingkan fasilitas Starter, Growth, dan Professional Package.
  * **Alur Pemesanan:** Menambahkan `<ol class="order-steps">` yang menjelaskan 5 tahap alur kerja layanan dari konsultasi hingga laporan bulanan.
  * **Favicon:** Memasang `image/icon.png` sebagai favicon resmi pada tab browser.

### 5. Otomasi Interaktif Formulir Konsultasi (`js/script.js`)
* **Masalah Awal:**
  * Formulir kontak menggunakan `action="#"` tanpa aksi nyata saat tombol diklik.
* **Solusi Perbaikan:**
  * Dibuat skrip JavaScript (`js/script.js`) yang memvalidasi input, merapikan data pelanggan (nama, email, no. WA, paket pilihan, dan pesan), lalu secara otomatis membukanya ke WhatsApp resmi MEDIX dengan format pesan rapi siap kirim.

---

## ✨ Fitur-Fitur Utama Website

1. **Header Kaca Mengambang (*Sticky Blur Header*):**
   * Logo MEDIX dengan efek transisi halus.
   * Menu navigasi cepat (`Tentang Kami`, `Jasa & Harga`, `Kontak`) dengan *active highlight* otomatis saat halaman digulir.

2. **Profil Perusahaan (Tentang Kami):**
   * Penjelasan visi dan strategi digital agensi.
   * Tampilan visual logo badge resmi dengan efek bayangan dan kartu bento.

3. **Daftar Harga & Paket Layanan (*Modern Pricing Cards*):**
   * **Starter Package:** Rp 750.000 / bulan (Cocok untuk UMKM pemula).
   * **Growth Package (Direkomendasikan):** Rp 1.500.000 / bulan (Paling diminati untuk jangkauan & engagement).
   * **Professional Package:** Rp 2.500.000 / bulan (Solusi lengkap scale-up brand).
   * Tombol *Pilih Paket* langsung terhubung ke WhatsApp dengan pesan pra-isi sesuai paket yang dipilih.

4. **Tabel Perbandingan Fasilitas:**
   * Memudahkan calon klien membandingkan jumlah desain, video Reels, platform, riset konten, hingga revisi.

5. **Alur Kerja & Cara Pemesanan:**
   * Panduan 5 langkah sistematis bagi klien baru.

6. **Media Embed Responsif:**
   * **Video Profil:** Iframe YouTube beresolusi 16:9 yang menyesuaikan layar tanpa terpotong.
   * **Lokasi Kantor:** Peta interaktif Google Maps untuk wilayah Purwokerto, Banyumas, Jawa Tengah.

7. **Kontak Langsung & Formulir Terintegrasi:**
   * Tombol cepat ke WhatsApp dan Instagram `@heymedix_`.
   * Formulir pemesanan cerdas yang meneruskan rincian brief langsung ke WhatsApp admin.

---

## 🚀 Cara Menjalankan Website

Anda dapat membuka dan menguji website ini dengan beberapa cara mudah:

### Opsi 1: Membuka Langsung di Browser (Paling Cepat)
1. Buka folder `c:\Users\User\Desktop\friska`.
2. Klik ganda (double-click) pada file **`index.html`**.
3. Website akan langsung terbuka di Google Chrome, Microsoft Edge, atau browser default Anda dengan semua gaya dan gambar tampil sempurna.

### Opsi 2: Menggunakan VS Code Live Server
1. Buka folder `friska` di Visual Studio Code.
2. Klik kanan pada `index.html` dan pilih **Open with Live Server**.
3. Browser akan membuka website pada alamat `http://127.0.0.1:5500/index.html`.

### Opsi 3: Menggunakan Web Server Lokal (Node / Python / Laragon)
* **Menggunakan Node.js:**
  ```powershell
  npx serve "c:\Users\User\Desktop\friska"
  ```
* **Menggunakan Laragon / XAMPP:**
  Pindahkan atau salin folder `friska` ke direktori `www` atau `htdocs`.

---

## 🎨 Teknologi & Desain Sistem

* **Bahasa:** HTML5 Semantik, CSS3 Modern, Vanilla JavaScript (ES6+).
* **Font:** [*Plus Jakarta Sans*](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts.
* **Palet Warna:**
  * Primary Authority: `#1D5FAB` (Royal Navy Logo)
  * Growth Accent: `#3FAAE2` (Cyan Arrow)
  * Ink / Text: `#332E2B` (Warm Charcoal)
  * Background: `#f8fafc` dengan efek ambient gradient radial.

---

## 📞 Kontak & Informasi Brand

* **Nama Usaha:** MEDIX (Social Media Management Service)
* **Slogan:** *Make Your Brand More Visible.*
* **WhatsApp:** [+62 851-8386-7027](https://wa.me/6285183867027)
* **Instagram:** [@heymedix_](https://www.instagram.com/heymedix_/)
* **Lokasi:** Purwokerto, Jawa Tengah, Indonesia
* **Hak Cipta:** &copy; 2026 MEDIX. All Rights Reserved.
