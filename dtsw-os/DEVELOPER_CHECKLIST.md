# DTSW Platform - Developer Implementation Checklist

## ✅ Phase 1 Complete - Foundation Ready

### Pre-Development Setup

- [x] Node.js & npm installed
- [x] Next.js 16.2.6 initialized
- [x] TypeScript configured
- [x] Tailwind CSS 4 setup
- [x] ESLint configured
- [x] Git repository initialized

---

## 🚀 Getting Started (Do This First)

### Step 1: Install Dependencies
```bash
cd "d:\DTSW OS\dtsw-os"
npm install
```

**Verify**: Should see `node_modules/` with all packages

---

### Step 2: Create Directory Structure
```bash
node setup-dirs.js
```

**Verify**: Should see these new directories:
- `app/(public)/`
- `app/(auth)/`
- `app/dashboard/`
- `app/clubs/`
- `app/events/`
- `app/research/`
- `app/industry-lab/`

---

### Step 3: Copy Layout Files
Use your file explorer or terminal to copy files to proper locations:

#### Windows Explorer:
1. Copy `app/public-route-layout.tsx` → `app/(public)/layout.tsx`
2. Copy `app/auth-route-layout.tsx` → `app/(auth)/layout.tsx`
3. Copy `app/dashboard-layout.tsx` → `app/dashboard/layout.tsx`

#### Terminal (PowerShell):
```powershell
$src = "d:\DTSW OS\dtsw-os\app"
Copy-Item "$src\public-route-layout.tsx" "$src\(public)\layout.tsx"
Copy-Item "$src\auth-route-layout.tsx" "$src\(auth)\layout.tsx"
Copy-Item "$src\dashboard-layout.tsx" "$src\dashboard\layout.tsx"
```

**Verify**: Check file explorer - files should be in proper directories

---

### Step 4: Copy Page Files
```powershell
$src = "d:\DTSW OS\dtsw-os\app"
Copy-Item "$src\login-page-example.tsx" "$src\(auth)\login\page.tsx"
Copy-Item "$src\signup-page-example.tsx" "$src\(auth)\signup\page.tsx"
Copy-Item "$src\dashboard-page-example.tsx" "$src\dashboard\page.tsx"
Copy-Item "$src\dashboard-clubs-page-example.tsx" "$src\dashboard\clubs\page.tsx"
```

**Verify**: Files in correct locations, no compile errors

---

### Step 5: Run Dev Server
```bash
npm run dev
```

**Verify**: 
- Should start without errors
- Visit http://localhost:3000
- Should see landing page with hero section
- No TypeScript errors in terminal

---

## 📋 Phase 1 Verification Checklist

### Design System
- [ ] Tailwind config loads with brand colors
- [ ] CSS variables visible in DevTools
- [ ] Spacing scale working (use `p-lg`, `gap-md` etc.)
- [ ] Orange (#FF9500) visible on buttons
- [ ] Responsive grid working (3 cols → 2 cols → 1 col)

### Layouts
- [ ] Home page (`/`) shows landing with header + footer
- [ ] Public pages work
- [ ] Dashboard layout has sidebar visible
- [ ] Mobile view: sidebar becomes drawer
- [ ] Navigation active highlighting works

### Navigation
- [ ] Sidebar shows navigation items
- [ ] Active link highlighted in orange
- [ ] Badges show on navigation items
- [ ] Mobile hamburger menu works
- [ ] User profile section visible in sidebar

### TypeScript
- [ ] No TypeScript errors in terminal
- [ ] Types available from `@/types`
- [ ] Navigation config type-safe
- [ ] Auth context types working

### Components
- [ ] PublicLayout renders correctly
- [ ] DashboardLayout responsive
- [ ] Sidebar component working
- [ ] All Tailwind classes applying

---

## 🔧 Development Workflow

### Creating New Pages

**For Public Pages:**
```
Create file: app/(public)/page-name/page.tsx
Content: Use any component, wrapped by PublicLayout automatically
Route: /page-name
```

**For Dashboard Pages:**
```
Create file: app/dashboard/page-name/page.tsx
Content: Use DashboardLayout, wrapped automatically
Route: /dashboard/page-name
Auth: Required (will implement in Phase 3)
```

**For Dynamic Routes:**
```
Create file: app/dashboard/[resource]/[id]/page.tsx
Props: { params: { id: string } }
Route: /dashboard/[resource]/[id]
```

### Creating New Components

```tsx
// File: components/MyComponent.tsx
"use client";

export function MyComponent() {
  return (
    <div className="p-lg bg-surface-primary border border-border-primary rounded-lg">
      {/* Use design tokens from tailwind config */}
    </div>
  );
}
```

### Using Auth Context

```tsx
"use client";

import { useAuth } from "@/context/auth";

export function MyComponent() {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <p>Please login</p>;
  }
  
  return <p>Welcome, {user?.name}</p>;
}
```

### Using Navigation Config

```tsx
import { navigationConfig } from "@/lib/navigation";

export function MyNav() {
  return (
    <nav>
      {navigationConfig.map(item => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
```

### Using Utilities

```tsx
import { cn, formatDate, getInitials } from "@/lib/utils";

export function MyComponent() {
  const classes = cn("p-lg", isActive && "bg-brand-primary");
  const date = formatDate(new Date());
  const initials = getInitials("John Doe"); // "JD"
  
  return <div className={classes}>{date}</div>;
}
```

---

## 🎨 Styling Guide

### Using Tailwind Classes

```tsx
// Layout
<div className="flex items-center justify-between p-lg gap-md">

// Colors
<button className="bg-brand-primary text-text-inverse hover:bg-brand-dark">
  
// Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">

// Using theme variables
<div className="bg-surface-primary border border-border-primary rounded-lg">

// Hover states
<a className="text-brand-primary hover:text-brand-dark transition-colors">
```

### Common Patterns

```tsx
// Card
<div className="p-lg bg-surface-primary border border-border-primary rounded-xl">

// Button Primary
<button className="px-lg py-md bg-brand-primary text-text-inverse hover:bg-brand-dark">

// Button Secondary
<button className="px-lg py-md border border-border-primary text-text-primary hover:bg-surface-secondary">

// Input
<input className="px-lg py-md border border-border-primary rounded-lg focus:ring-2 focus:ring-brand-primary" />

// Badge
<span className="px-md py-xs bg-brand-primary/10 text-brand-primary rounded-full text-xs font-medium">

// Grid (auto-responsive)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
```

---

## 🧪 Testing Checklist

### Visual Testing
- [ ] Landing page displays correctly
- [ ] All colors match SNS brand (#FF9500)
- [ ] Sidebar responsive (desktop → mobile)
- [ ] Forms render properly
- [ ] Buttons have hover states
- [ ] Text readable (contrast OK)
- [ ] Spacing consistent (8px grid)

### Responsive Testing
- [ ] Desktop (1920px)
- [ ] Laptop (1280px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari

### Accessibility Testing
- [ ] Keyboard navigation (Tab key)
- [ ] Color contrast (WCAG AA)
- [ ] Link focus visible
- [ ] Form labels present
- [ ] Alt text on images

---

## 🐛 Common Issues & Fixes

### Issue: "Cannot find module '@/components'"
**Fix**: Check `tsconfig.json` has path aliases configured
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue: Tailwind classes not applying
**Fix**: 
1. Check `tailwind.config.ts` content paths
2. Restart dev server
3. Clear `.next/` folder

### Issue: "Cannot find layout.tsx"
**Fix**: Copy layout files from `app/*-layout.tsx` to proper route group folders

### Issue: Type error on useAuth()
**Fix**: 
1. Component must be marked "use client"
2. useAuth() called within AuthProvider
3. Check types in `types/index.ts`

### Issue: Sidebar not showing
**Fix**:
1. DashboardLayout wrapping children
2. Check route is `/dashboard/*`
3. AuthProvider initialized in root layout

---

## 📱 Mobile Development

### Testing Mobile
```bash
# Use Chrome DevTools
- F12 → Device Toolbar
- Select "iPhone 12" preset
- Test sidebar toggle
- Test form responsiveness
```

### Common Mobile Issues
- [ ] Sidebar overlay blocking content
- [ ] Touch targets too small (use min 48px)
- [ ] Text too small (use at least 16px)
- [ ] Padding issues on edges
- [ ] Horizontal overflow

### Mobile Optimization
```tsx
// Good: Responsive padding
<div className="px-lg md:px-2xl">

// Good: Mobile-first grid
<div className="grid grid-cols-1 md:grid-cols-2">

// Avoid: Fixed widths
<div className="w-500px"> // ❌ DON'T

// Good: Flexible widths
<div className="w-full max-w-3xl">
```

---

## 🚀 Ready for Phase 2

Once verification complete, you're ready to build:

### Phase 2 Tasks
- [ ] Create Button component with variants
- [ ] Create Input component
- [ ] Create Select component
- [ ] Create Card component
- [ ] Create Data table component
- [ ] Create Modal/Dialog component
- [ ] Create Toast notification component

### Resources for Phase 2
- Use Tailwind's component patterns
- Reference example pages for styling
- Follow existing component structure
- Maintain TypeScript types
- Document props with JSDoc

---

## 📚 Documentation Files

Available for reference:
1. **PHASE_1_README.md** - Setup guide
2. **ARCHITECTURE_GUIDE.md** - Deep dive
3. **VISUAL_ARCHITECTURE.md** - Visual diagrams
4. **APP_ROUTER_STRUCTURE.md** - Route structure
5. **PHASE_1_COMPLETE.md** - Completion summary

---

## 🎯 Quick Command Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run linter

# Setup
node setup-dirs.js      # Create directory structure

# Git
git add .               # Stage changes
git commit -m "msg"     # Commit
git push                # Push to GitHub

# Cleanup
rm -r .next            # Clear Next.js build
npm ci                 # Clean install
```

---

## ✅ Pre-Phase 2 Checklist

Before starting Phase 2, verify:

- [ ] All Phase 1 files created
- [ ] Directory structure complete
- [ ] No TypeScript errors
- [ ] Dev server runs without errors
- [ ] Landing page visible
- [ ] Sidebar navigation works
- [ ] All layouts rendering
- [ ] No console errors
- [ ] Responsive design working
- [ ] Design system loaded
- [ ] Auth context accessible
- [ ] Navigation config accessible

---

## 🎉 You're Ready!

Once everything verified, you have a production-grade foundation ready to build upon.

**Next**: Build Phase 2 - Core UI Components

Good luck! 🚀
