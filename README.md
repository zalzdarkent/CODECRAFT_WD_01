# Interactive Navigation Menu

Sebuah implementasi menu navigasi interaktif yang dibuat dengan Next.js dan Tailwind CSS. Menu ini menampilkan efek visual yang menarik saat di-scroll atau di-hover, dengan posisi fixed yang selalu terlihat di semua halaman.

## 🚀 Fitur Utama

### ✨ **Interactive Effects**
- **Color Change on Scroll**: Menu berubah dari transparan menjadi putih dengan backdrop blur effect saat halaman di-scroll
- **Hover Effects**: Efek hover yang smooth dengan perubahan warna dan background
- **Active State Detection**: Menu item otomatis ter-highlight sesuai section yang sedang dilihat
- **Scale Animation**: Efek scale pada tombol dan menu items saat di-hover

### 📱 **Responsive Design**
- **Desktop Navigation**: Menu horizontal dengan semua items terlihat
- **Mobile Navigation**: Hamburger menu dengan slide animation
- **Touch Friendly**: Area tap yang optimal untuk perangkat mobile
- **Cross-Device**: Konsisten di semua ukuran layar

### 🎨 **Visual Features**
- **Fixed Position**: Menu selalu terlihat saat scroll
- **Backdrop Blur**: Efek blur pada background menu
- **Smooth Transitions**: Semua animasi menggunakan CSS transitions
- **Modern Gradient**: Hero section dengan gradient background
- **Custom Scrollbar**: Scrollbar yang di-style untuk tampilan lebih baik

## 🛠 Getting Started

Jalankan development server:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

## 📁 Struktur Project

```
app/
├── components/
│   └── Navigation.tsx      # Komponen navigation menu utama
├── globals.css            # Global styles dan custom animations
├── layout.tsx            # Root layout
└── page.tsx              # Homepage dengan multiple sections
```

## 🎯 Cara Kerja Navigation

### Desktop Menu
- Menu items ditampilkan horizontal
- Hover effect dengan perubahan warna dan background
- Active state berdasarkan section yang sedang dilihat
- Smooth scroll ke section tujuan

### Mobile Menu
- Hamburger icon yang berubah menjadi X saat dibuka
- Slide down animation dengan staggered effect
- Overlay background semi-transparan
- Auto-close saat mengklik menu item atau area luar

### Active State Detection
- Menggunakan scroll event listener untuk deteksi section
- Section dianggap active jika berada di tengah viewport
- Real-time update tanpa lag
- Visual feedback dengan highlighting menu item

## 🎨 Styling & Animations

Menggunakan **Tailwind CSS** untuk:
- Responsive design utilities
- Color schemes dan gradients
- Spacing dan layout
- Transition dan transform effects

Custom CSS animations:
- `fade-in`: Hero text animation
- `slideInFromTop`: Mobile menu items animation
- Custom scrollbar styling
- Smooth scroll behavior

## 📋 Sections

1. **Home**: Hero section dengan gradient background
2. **About**: Penjelasan fitur navigation
3. **Services**: Grid layout dengan interactive cards
4. **Portfolio**: Gallery dengan hover effects  
5. **Contact**: Contact information dengan icons

## 🔧 Technologies Used

- **Next.js 15**: React framework dengan App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: useState dan useEffect untuk state management

## 📝 Assignment Requirements ✅

- ✅ Menu navigasi interaktif dengan perubahan warna/style
- ✅ Efek saat di-scroll (background blur, color change)
- ✅ Efek saat di-hover (scale, color, background)
- ✅ Fixed position yang terlihat di semua halaman
- ✅ Menggunakan HTML untuk struktur
- ✅ Menggunakan CSS (Tailwind) untuk styling
- ✅ Menggunakan JavaScript untuk interaktivitas
- ✅ Responsive design untuk mobile dan desktop
