# ycsts

A complete utility-first CSS framework with a rich component layer and signature single-word entrance animations.

## Overview

ycsts combines the granular utility coverage of modern CSS with pre-built production components and fluid motion classes. It ships as a single compiled stylesheet without requiring PostCSS compilation or JavaScript build tools to start.

### Key Capabilities

- Comprehensive utility engine spanning layout, flexbox, grid, spacing, sizing, typography, colors, borders, effects, transforms, filters, and aspect ratio.
- Signature `fadein` animation suite with directional variants, scales, blur transitions, duration controls, and delay steps.
- Extended modern animation library including continuous floating, neon glow pulses, skeleton shimmer, wiggles, and directional slides.
- Pre-built component library covering buttons, cards, glassmorphism surfaces, form controls, badges with live indicators, KPI stat cards, alerts, modals, navigation bars, tabs, and tables.
- Zero configuration required. Works via npx starter initialization, npm package import, or direct CDN links.

---

## Installation & Setup

### Option 1: Scaffold Starter Project (Recommended)

Generate `ycsts.config.js`, `index.html`, and a bundled `ycsts.min.css` directly in your project folder:

```bash
npx @yanzyu/ycsts init
```

To overwrite existing files if already present:

```bash
npx @yanzyu/ycsts init --force
```

### Option 2: Install via npm

```bash
npm install @yanzyu/ycsts
```

Import into your main CSS file:

```css
@import "@yanzyu/ycsts/dist/ycsts.min.css";
```

Or link directly in HTML:

```html
<link rel="stylesheet" href="node_modules/@yanzyu/ycsts/dist/ycsts.min.css">
```

### Option 3: Direct CDN Link

Drop the stylesheet into any HTML document without installing Node.js:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@yanzyu/ycsts@1.1.0/dist/ycsts.min.css">
```

Alternative via unpkg:

```html
<link rel="stylesheet" href="https://unpkg.com/@yanzyu/ycsts@1.1.0/dist/ycsts.min.css">
```

---

## CLI Reference

Run commands using `npx @yanzyu/ycsts <command>` or install globally using `npm install -g @yanzyu/ycsts`:

```bash
npx @yanzyu/ycsts init          # Copies starter template, config, and ycsts.min.css to current directory
npx @yanzyu/ycsts init --force  # Overwrites existing template files
npx @yanzyu/ycsts build         # Recompiles dist/ycsts.css and dist/ycsts.min.css from source
npx @yanzyu/ycsts --version     # Prints current installed version
npx @yanzyu/ycsts --help        # Displays command line usage
```

---

## Animations

### Signature Fadein Family

Add `fadein` to any element for an immediate entrance transition.

```html
<h1 class="fadein">Fades in on load</h1>
<div class="fadein-up fadein-delay-1">Slides up into view</div>
<div class="fadein-scale fadein-delay-2">Zooms up from 92% scale</div>
<div class="fadein-blur fadein-delay-3">Transitions from blur to crystal clear</div>
<div class="fadein-left">Enters from right to left</div>
```

#### Directional & Transform Variants

| Class | Description |
|---|---|
| `fadein` | Default entrance: fades in while translating up 12px |
| `fadein-up` | Enters from 24px below |
| `fadein-down` | Enters from 24px above |
| `fadein-left` | Enters from 24px right towards left |
| `fadein-right` | Enters from 24px left towards right |
| `fadein-scale` | Enters scaling from 0.92 to 1.0 with opacity fade |
| `fadein-zoom-in` | Enters scaling from 0.85 to 1.0 |
| `fadein-zoom-out` | Enters scaling from 1.15 to 1.0 |
| `fadein-blur` | Enters transitioning from 10px blur to 0px |
| `fadein-rotate` | Enters with subtle tilt (-4deg to 0deg) |

#### Duration Modifiers

| Class | Duration |
|---|---|
| `fadein-faster` | 100ms |
| `fadein-fast` | 200ms |
| `fadein-normal` | 400ms |
| `fadein-slow` | 800ms |
| `fadein-slower` | 1200ms |

#### Delay Modifiers

| Class | Delay |
|---|---|
| `fadein-delay-1` | 100ms |
| `fadein-delay-2` | 200ms |
| `fadein-delay-3` | 300ms |
| `fadein-delay-4` | 400ms |
| `fadein-delay-5` | 500ms |
| `fadein-delay-6` | 600ms |
| `fadein-delay-7` | 700ms |
| `fadein-delay-8` | 800ms |
| `fadein-delay-9` | 900ms |
| `fadein-delay-10` | 1000ms |

#### Timing Curves

| Class | Cubic Curve |
|---|---|
| `fadein-smooth` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `fadein-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `fadein-bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` |
| `fadein-ease` | `ease` |

### Modern Motion Suite

| Class | Behavior |
|---|---|
| `animate-float` | Continuous 3-second gentle vertical float loop |
| `animate-pulse-glow` | Pulsing ambient box-shadow glow aura |
| `animate-shimmer` | Sweeping luxury highlight reflection for loading skeletons |
| `animate-spin` | 1-second continuous rotation |
| `animate-spin-slow` | 3-second gentle continuous rotation |
| `animate-spin-reverse`| Counter-clockwise rotation loop |
| `animate-ping` | Radar ripple ping scale effect |
| `animate-pulse` | Opacity pulsing cycle |
| `animate-bounce` | Standard bounce motion |
| `animate-wiggle` | Playful back-and-forth rotational wiggle |
| `animate-shake` | Horizontal shake for form errors |
| `animate-heartbeat` | Double pulse heartbeat cycle |
| `animate-flip-x` | 3D perspective horizontal flip |
| `animate-flip-y` | 3D perspective vertical flip |
| `animate-slide-up` | Full 100% upward slide entrance |
| `animate-slide-down` | Full 100% downward slide entrance |

---

## Components

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-primary btn-glow">Glow</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-primary btn-pill">Pill</button>

<div class="btn-group">
  <button class="btn btn-outline">Years</button>
  <button class="btn btn-outline">Months</button>
  <button class="btn btn-outline">Days</button>
</div>
```

Sizes: `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`, `btn-xl`, `btn-block`.

### Cards & Glassmorphism

```html
<div class="card card-hover">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">
    Standard card with soft border and elevation on hover.
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">Action</button>
  </div>
</div>

<div class="card card-glass card-hover">
  <div class="card-body">
    Frosted glass card with backdrop blur and subtle border.
  </div>
</div>
```

### Badges & Status Indicators

```html
<span class="badge badge-blue">Blue</span>
<span class="badge badge-green">Green</span>
<span class="badge badge-red">Red</span>
<span class="badge badge-yellow">Yellow</span>
<span class="badge badge-purple">Purple</span>
<span class="badge badge-emerald">Emerald</span>
<span class="badge badge-cyan">Cyan</span>

<span class="badge badge-green badge-pill">
  <span class="badge-dot-live"></span>
  Active Cluster
</span>
```

### Form Controls

```html
<div class="form-group">
  <label class="label label-required">Email Address</label>
  <input type="email" class="input" placeholder="you@domain.com">
  <span class="form-hint">Must be a valid business address.</span>
</div>

<div class="input-group">
  <span class="input-group-text">https://</span>
  <input type="text" class="input" placeholder="domain.com">
</div>

<label class="toggle">
  <input type="checkbox" checked>
  <span class="toggle-slider"></span>
</label>

<input type="range" class="range">
```

### Alerts

```html
<div class="alert alert-info">Information notice for user.</div>
<div class="alert alert-success">Transaction confirmed successfully.</div>
<div class="alert alert-warning">Database index rebuilding in progress.</div>
<div class="alert alert-error">Unable to establish connection to upstream server.</div>
```

### Dashboard KPI Metric Cards

```html
<div class="stat-card">
  <div class="stat-title">Total Revenue</div>
  <div class="stat-value text-blue-600">$128,430</div>
  <div class="stat-desc"><span class="stat-up">+14.2%</span> vs previous month</div>
</div>
```

### Accordion (Zero JavaScript)

```html
<details class="accordion-item" open>
  <summary class="accordion-header">What dependencies does ycsts require?</summary>
  <div class="accordion-body">None. It is pure CSS and works in all modern browsers.</div>
</details>
```

### Tables

```html
<table class="table-ycsts table-striped table-hover">
  <thead>
    <tr>
      <th>Identifier</th>
      <th>Status</th>
      <th>Latency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>node-east-01</td>
      <td><span class="badge badge-green">Healthy</span></td>
      <td>18ms</td>
    </tr>
  </tbody>
</table>
```

### Navigation & Layout

- Navbar: `.navbar`, `.navbar-brand`, `.navbar-nav`
- Nav links: `.nav`, `.nav-link`, `.nav-link.active`
- Tabs: `.tabs`, `.tab-btn`, `.tab-btn.active`
- Breadcrumb: `.breadcrumb`, `.breadcrumb-item`, `.breadcrumb-link`, `.breadcrumb-current`
- Avatars: `.avatar`, `.avatar-sm` through `.avatar-2xl`, `.avatar-group`, `.avatar-status-online`
- Modal: `.modal-overlay`, `.modal`, `.modal-header`, `.modal-title`, `.modal-body`, `.modal-footer`
- Skeletons: `.skeleton`, `.skeleton-text`, `.skeleton-circle`
- Progress: `.progress`, `.progress-bar`, `.progress-bar-green`, `.progress-striped`, `.progress-animated`

---

## Utility Classes Reference

### Layout & Sizing

- Display: `block`, `inline-block`, `inline`, `flex`, `inline-flex`, `grid`, `inline-grid`, `hidden`
- Positioning: `static`, `fixed`, `absolute`, `relative`, `sticky`, `inset-0`, `top-*`, `right-*`, `bottom-*`, `left-*`, `z-0` through `z-50`
- Sizing: `w-*`, `h-*`, `min-w-*`, `max-w-*`, `min-h-*`, `max-h-*`
- Aspect Ratio: `aspect-auto`, `aspect-square`, `aspect-video`, `aspect-4/3`

### Modern Visual Utilities

- Backdrop Blur: `backdrop-blur-none`, `backdrop-blur-sm`, `backdrop-blur`, `backdrop-blur-md`, `backdrop-blur-lg`, `backdrop-blur-xl`, `backdrop-blur-2xl`
- Line Clamp: `line-clamp-1`, `line-clamp-2`, `line-clamp-3`, `line-clamp-4`, `line-clamp-none`
- Scroll: `scroll-auto`, `scroll-smooth`, `snap-start`, `snap-end`, `snap-center`, `snap-x`, `snap-y`
- Text Wrap: `text-wrap`, `text-nowrap`, `text-balance`, `text-pretty`
- Glass Utilities: `.glass`, `.glass-dark`
- Neon Glow Utilities: `.glow-blue`, `.glow-purple`, `.glow-green`, `.glow-amber`

---

## Building From Source

```bash
git clone https://github.com/yanzyuyu/ycsts-framework.git
cd ycsts-framework
npm install
npm run build
```

Compiled distribution outputs:
- `dist/ycsts.css` (full stylesheet)
- `dist/ycsts.min.css` (production minified stylesheet)

---

## License

MIT License. Free for personal and commercial projects.
