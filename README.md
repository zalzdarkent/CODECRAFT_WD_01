# Interactive Navigation Menu

An interactive navigation menu implementation built with Next.js and Tailwind CSS. This menu displays attractive visual effects when scrolled or hovered, with a fixed position that remains visible on all pages.

## 🚀 Key Features

### ✨ **Interactive Effects**
- **Color Change on Scroll**: Menu changes from transparent to white with backdrop blur effect when page is scrolled
- **Hover Effects**: Smooth hover effects with color and background changes
- **Active State Detection**: Menu items automatically highlight based on the section currently in view
- **Scale Animation**: Scale effects on buttons and menu items when hovered

### 📱 **Responsive Design**
- **Desktop Navigation**: Horizontal menu with all items visible
- **Mobile Navigation**: Hamburger menu with slide animation
- **Touch Friendly**: Optimal tap areas for mobile devices
- **Cross-Device**: Consistent across all screen sizes

### 🎨 **Visual Features**
- **Fixed Position**: Menu always visible when scrolling
- **Backdrop Blur**: Blur effect on menu background
- **Smooth Transitions**: All animations use CSS transitions
- **Modern Gradient**: Hero section with gradient background
- **Custom Scrollbar**: Styled scrollbar for better appearance

## 🛠 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
app/
├── components/
│   └── Navigation.tsx      # Main navigation menu component
├── globals.css            # Global styles and custom animations
├── layout.tsx            # Root layout
└── page.tsx              # Homepage with multiple sections
```

## 🎯 How Navigation Works

### Desktop Menu
- Menu items displayed horizontally
- Hover effects with color and background changes
- Active state based on currently viewed section
- Smooth scroll to target section

### Mobile Menu
- Hamburger icon that changes to X when opened
- Slide down animation with staggered effect
- Semi-transparent overlay background
- Auto-close when clicking menu items or outside area

### Active State Detection
- Uses scroll event listener for section detection
- Section considered active if in center of viewport
- Real-time updates without lag
- Visual feedback by highlighting menu item

## 🎨 Styling & Animations

Using **Tailwind CSS** for:
- Responsive design utilities
- Color schemes and gradients
- Spacing and layout
- Transition and transform effects

Custom CSS animations:
- `fade-in`: Hero text animation
- `slideInFromTop`: Mobile menu items animation
- Custom scrollbar styling
- Smooth scroll behavior

## 📋 Sections

1. **Home**: Hero section with gradient background
2. **About**: Navigation features explanation
3. **Services**: Grid layout with interactive cards
4. **Portfolio**: Gallery with hover effects  
5. **Contact**: Contact information with icons

## 🔧 Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: useState and useEffect for state management

## 📝 Assignment Requirements ✅

- ✅ Interactive navigation menu with color/style changes
- ✅ Effects when scrolled (background blur, color change)
- ✅ Effects when hovered (scale, color, background)
- ✅ Fixed position visible on all pages
- ✅ Using HTML for structure
- ✅ Using CSS (Tailwind) for styling
- ✅ Using JavaScript for interactivity
- ✅ Responsive design for mobile and desktop
