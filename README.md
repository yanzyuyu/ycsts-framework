# ycsts

A complete utility-first CSS framework with an exhaustive component library and signature single-word entrance animations.

## Overview

ycsts combines the granular utility coverage of modern CSS with pre-built production components, custom HTML form elements, and fluid motion classes. It ships as a single compiled stylesheet without requiring PostCSS compilation or JavaScript build tools to start.

### Key Capabilities

- Comprehensive utility engine covering layout, flexbox, grid, spacing, sizing, typography, colors, borders, effects, transforms, filters, aspect ratios, and responsive breakpoints.
- Signature fadein animation suite with 20+ directional, scale, spring, bounce, blur, and 3D flip variants, plus duration and delay controls.
- Custom Element Studio with luxury custom select dropdowns, search filtering, custom scrollbars, popup modals, glowing text selection, and Poppins font embed.
- Ambient motion suite featuring continuous floating, neon pulse auras, skeleton loading shimmers, animated marquees, and organic morphing.
- Interactive micro-interaction hover classes (hover-float, hover-scale, hover-glow, hover-rotate, hover-tilt).
- Complete component library covering buttons, cards, glassmorphism surfaces, form controls with floating labels, pure-CSS dropdowns, accordions, tabs, live status badges, KPI stat cards, alerts, toasts, modals, tooltips, timelines, and chat bubbles.
- 100% Pure CSS runtime with zero runtime JavaScript dependencies required.

---

## Installation & Setup

ycsts is published on npm under both ycsts-framework (unscoped) and @yanzyu/ycsts (scoped).

### Option 1: Scaffold Starter Project (Recommended)

Generate ycsts.config.js, index.html, and a bundled ycsts.min.css directly in your current directory:

```bash
npx ycsts-framework init
```

Or using the scoped package:

```bash
npx @yanzyu/ycsts init
```

To overwrite existing files:

```bash
npx ycsts-framework init --force
```

### Option 2: Local Project Installation via npm

To have the `node_modules/` directory in your project so you can link `<link rel="stylesheet" href="node_modules/ycsts-framework/dist/ycsts.min.css">` or use a bundler (Vite, Webpack, Parcel):

```bash
npm install ycsts-framework
```

> Note: Running `npx ycsts-framework init` produces a standalone `ycsts.min.css` directly in your project root with zero dependencies, without creating a `node_modules/` folder. To generate `node_modules/ycsts-framework/`, run `npm install ycsts-framework`.

Import into your main stylesheet:

```css
@import "ycsts-framework/dist/ycsts.min.css";
```

Or link directly in HTML:

```html
<link rel="stylesheet" href="node_modules/ycsts-framework/dist/ycsts.min.css">
```

### Option 3: Direct CDN Link

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ycsts-framework@1.4.0/dist/ycsts.min.css">
```

---

## Custom Element Studio

### Luxury Custom Select Dropdown

A modern custom dropdown with search filtering, status indicators, badges, and checkmark indicators:

```html
<div class="custom-select">
  <button type="button" class="custom-select-trigger">
    <span class="custom-select-value">
      <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
      <span>Select Framework</span>
    </span>
    <svg class="custom-select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
  </button>
  <div class="custom-select-menu">
    <div class="custom-select-search">
      <input type="text" placeholder="Search option...">
    </div>
    <div class="custom-select-options">
      <div class="custom-select-group-label">Recommended</div>
      <div class="custom-select-option is-selected">
        <div class="option-title">ycsts Framework</div>
        <div class="option-desc">Fadein in 1 word & luxury components</div>
        <svg class="option-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <div class="custom-select-option">
        <div class="option-title">Tailwind CSS</div>
        <div class="option-desc">Utility-only engine</div>
      </div>
    </div>
  </div>
</div>
```

Dark mode variant: `custom-select custom-select-dark`.

### Enhanced Native Select

Upgrades native HTML select elements with Poppins font, custom SVG chevrons, and smooth focus states:

```html
<select class="select-custom">
  <option value="1">Option One</option>
  <option value="2">Option Two</option>
  <option value="3">Option Three</option>
</select>

<select class="select-custom select-pill">
  <option>Pill Option A</option>
  <option>Pill Option B</option>
</select>
```

### Modern Custom Scrollbars

Provides smooth WebKit and Firefox scrollbars without layout shift:

```html
<div class="scrollbar-custom overflow-y-auto max-h-64">
  Scrollable content with subtle rounded thumb
</div>

<div class="scrollbar-glow overflow-y-auto max-h-64">
  Dark terminal with neon gradient glowing scrollbar
</div>

<div class="scrollbar-thin overflow-y-auto">
  Ultra-thin scrollbar track
</div>

<div class="scrollbar-hidden overflow-y-auto">
  Hidden scrollbar track
</div>
```

### Neon Text Selection

```html
<body class="selection-glow">
  Selected text glows with radiant blue accent
</body>

<div class="selection-purple">
  Selected text glows with purple accent
</div>

<div class="selection-emerald">
  Selected text glows with emerald accent
</div>
```

### Popup Modals & Dialogs

```html
<div class="modal-overlay is-active">
  <div class="modal fadein-scale">
    <div class="modal-header">
      <h3 class="modal-title">Modal Title</h3>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      Modal body content with frosted glass backdrop blur.
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline btn-sm">Cancel</button>
      <button class="btn btn-primary btn-sm">Confirm</button>
    </div>
  </div>
</div>
```

### Modern Toggle Switch

```html
<input type="checkbox" class="toggle" checked>
<input type="checkbox" class="toggle toggle-emerald" checked>
<input type="checkbox" class="toggle toggle-purple">
<input type="checkbox" class="toggle toggle-lg">
```

---

## Animations

### Signature Fadein Family

Add fadein to any element for an immediate entrance transition:

```html
<h1 class="fadein">Fades in on load</h1>
<div class="fadein-up fadein-delay-1">Slides up into view</div>
<div class="fadein-scale fadein-delay-2">Zooms up from 92% scale</div>
<div class="fadein-blur fadein-delay-3">Transitions from blur to crystal clear</div>
<div class="fadein-bounce">Elastic spring bounce entrance</div>
<div class="fadein-flip">3D perspective card flip</div>
<div class="fadein-spiral">Spiral rotation entrance</div>
```

| Class | Description |
|---|---|
| fadein | Default entrance: fades in while translating up 12px |
| fadein-up | Enters from 24px below |
| fadein-down | Enters from 24px above |
| fadein-left | Enters from 24px right towards left |
| fadein-right | Enters from 24px left towards right |
| fadein-scale | Enters scaling from 0.92 to 1.0 with opacity fade |
| fadein-blur | Enters transitioning from 10px blur to 0px |
| fadein-bounce | Enters with an energetic spring bounce curve |
| fadein-flip | Enters with 3D perspective flip |
| fadein-spiral | Enters with combined scale and rotation |

### Duration Modifiers

| Class | Duration |
|---|---|
| fadein-faster | 100ms |
| fadein-fast | 200ms |
| fadein-normal | 400ms |
| fadein-slow | 800ms |
| fadein-slower | 1200ms |

### Delay Modifiers

| Class | Delay |
|---|---|
| fadein-delay-1 | 100ms |
| fadein-delay-2 | 200ms |
| fadein-delay-3 | 300ms |
| fadein-delay-4 | 400ms |
| fadein-delay-5 | 500ms |
| fadein-delay-6 | 600ms |
| fadein-delay-7 | 700ms |
| fadein-delay-8 | 800ms |
| fadein-delay-9 | 900ms |
| fadein-delay-10 | 1000ms |

### Continuous Ambient Motion

| Class | Description |
|---|---|
| animate-float | Gentle 3-second vertical floating loop |
| animate-glow-pulse | Breathing neon blue shadow aura |
| animate-glow-indigo | Breathing indigo shadow aura |
| animate-glow-emerald | Breathing emerald shadow aura |
| animate-shimmer | Continuous liquid loading sweep |
| animate-aurora | Multi-color shifting gradient background |
| animate-morph | Smooth organic border-radius morphing blob |
| animate-marquee | Continuous horizontal scrolling ticker |

---

## Components

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-soft-primary">Soft Blue</button>
<button class="btn btn-gradient-primary btn-glow">Gradient Blue</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-primary btn-pill">Pill</button>
<button class="btn btn-primary btn-loading">Loading</button>
```

### KPI Stat Cards

```html
<div class="stat-card hover-float">
  <div class="stat-title">Total Active Users</div>
  <div class="stat-value text-blue-600">128,400</div>
  <div class="stat-desc stat-trend-up">&uarr; 24% vs last month</div>
</div>
```

### Pure-CSS Accordion

```html
<details class="accordion-item" open>
  <summary class="accordion-header">
    <span>Frequently Asked Question</span>
    <span>&blacktriangledown;</span>
  </summary>
  <div class="accordion-body">
    Accordion collapsible body rendered with pure CSS.
  </div>
</details>
```

---

## Laravel Integration (Vite & Blade)

YCSTS provides first-class support for Laravel 9, 10, and 11 with Vite Hot Module Replacement (HMR).

### Fast Configuration via CLI

Inside your Laravel project root:

```bash
npx ycsts-framework laravel
```

This checks your Laravel directory structure, adds the `@import` statement to `resources/css/app.css`, and creates `resources/views/ycsts-demo.blade.php`.

### Manual Configuration

1. Install YCSTS:
   ```bash
   npm install ycsts-framework
   ```

2. Add to `resources/css/app.css`:
   ```css
   @import "ycsts-framework/dist/ycsts.min.css";
   ```

3. In Blade templates (`resources/views/...`):
   ```html
   <head>
       @vite(['resources/css/app.css', 'resources/js/app.js'])
   </head>
   ```

4. Run the Vite development server:
   ```bash
   npm run dev
   ```

All classes, animations, and components are live-reloaded as you edit.

---

## Visual Studio Code Extension

YCSTS includes an official Quick Snippets extension (`yanzyuyu.ycsts-snippets`) providing instant autocomplete for all framework elements, animations, and components.

### Autocomplete Anywhere

Type a prefix followed by a hyphen (`-`) in HTML, Blade, Vue, PHP, or React to trigger an interactive suggestions dropdown:

- **Buttons**: Type `button-` or `btn-` to list all 25 button variations (`button-a`, `button-block`, `button-default`, `button-gradient`, `button-glow`, `button-loading`, `button-sizes`, `button-toggle`, etc.).
- **Animations**: Type `fadein-` or `animate-` for 20+ entrance and continuous animations (`fadein-up`, `fadein-scale`, `animate-float`, etc.).
- **Selects**: Type `select-` or `custom-select-` for luxury dropdowns with search filter or enhanced native selects.
- **Cards & Modals**: Type `card-` or `modal-` for elevated cards, glassmorphic panels, and dialogs.
- **Forms**: Type `form-` or `input-` for text inputs, floating labels, toggle switches, and grouped fields.

### Installation

```bash
code --install-extension vscode-extension/ycsts-snippets-1.1.0.vsix
```

### Popular Snippet Triggers

| Prefix | Output | Description |
|---|---|---|
| `button-` / `btn-` | Interactive button picker | 25 button variants with style/size dropdowns |
| `button-gradient` | `<button class="btn btn-gradient">` | Radiant dual-tone gradient button |
| `button-glow` | `<button class="btn btn-glow">` | Glowing neon aura button |
| `button-sizes` | `btn-sm`, default, `btn-lg` | Button size showcase |
| `fadein-` | Entrance animation list | `fadein-up`, `fadein-scale`, `fadein-blur`, etc. |
| `animate-float` | `<div class="animate-float">` | Continuous ambient floating loop |
| `custom-select-luxury` | Luxury select studio | Custom dropdown with search & checkmark |
| `select-custom` | `<select class="select-custom">` | Enhanced native select with custom chevron |
| `scrollbar-glow` | `<div class="scrollbar-glow">` | Gradient glowing scrollbar container |
| `modal-default` | Complete modal dialog | Modal with backdrop, header, body, footer |
| `card-glass` | `<div class="card-glass">` | Frosted glassmorphism card |
| `card-stat` | KPI metric card | Metric card with percentage trend indicator |
| `form-toggle` | `<input type="checkbox" class="toggle">` | Accessible switch toggle |
| `laravel-vite` | `@vite(['resources/css/app.css', ...])` | Laravel asset directive |
| `laravel-starter` | Full starter Blade layout | Ready-to-use template with Vite & YCSTS |

---

## CLI Usage

```bash
npx ycsts-framework init       # Scaffold starter template, config, and ycsts.min.css
npx ycsts-framework laravel    # Configure YCSTS in a Laravel project
npx ycsts-framework build      # Compile CSS from source into dist/
npx ycsts-framework --version  # Print version
npx ycsts-framework --help     # Command line help
```

---

## Browser Support

- Google Chrome 88+
- Apple Safari 14+
- Mozilla Firefox 85+
- Microsoft Edge 88+

---

## License

MIT License. Engineered by yanzyuyu.
