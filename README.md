# ycsts

A complete utility-first CSS framework with an exhaustive component library and signature single-word entrance animations.

## Overview

ycsts combines the granular utility coverage of modern CSS with pre-built production components and fluid motion classes. It ships as a single compiled stylesheet without requiring PostCSS compilation or JavaScript build tools to start.

### Key Capabilities

- Comprehensive utility engine covering layout, flexbox, grid, spacing, sizing, typography, colors, borders, effects, transforms, filters, aspect ratios, and responsive breakpoints.
- Signature `fadein` animation suite with 20+ directional, scale, spring, bounce, blur, and 3D flip variants, plus duration and delay controls.
- Ambient motion suite featuring continuous floating, neon pulse auras, skeleton loading shimmers, animated marquees, and organic morphing.
- Interactive micro-interaction hover classes (`hover-float`, `hover-scale`, `hover-glow`, `hover-rotate`, `hover-tilt`).
- Complete component library covering buttons (solid, soft, gradient, glow, glass, loading), cards, glassmorphism surfaces, form controls with floating labels, pure-CSS dropdowns, accordions, tabs, live status badges, KPI stat cards, alerts, toasts, modals, tooltips, timelines, and chat bubbles.
- 100% Pure CSS runtime. Zero JavaScript dependencies required for interactive components.

---

## Installation & Setup

ycsts is published on npm under both `ycsts-framework` (unscoped) and `@yanzyu/ycsts` (scoped).

> **Note on CLI Execution:**
> Due to npm registry naming collision rules protecting core web abbreviations like `css` and `scss`, bare unscoped `ycsts` cannot be registered directly on npm. Use `npx ycsts-framework init` or `npx @yanzyu/ycsts init`.

### Option 1: Scaffold Starter Project (Recommended)

Generate `ycsts.config.js`, `index.html`, and a bundled `ycsts.min.css` directly in your current directory:

```bash
# Using unscoped package:
npx ycsts-framework init

# OR using scoped package:
npx @yanzyu/ycsts init
```

To overwrite existing files if already present:

```bash
npx ycsts-framework init --force
```

### Option 2: Global CLI Installation

Install globally to enable direct `ycsts` commands from any terminal session:

```bash
npm install -g ycsts-framework
```

Then initialize projects directly:

```bash
ycsts init
ycsts --version
```

### Option 3: Local Project Installation via npm

Install as a project dependency:

```bash
npm install ycsts-framework
# or
npm install @yanzyu/ycsts
```

Import into your main stylesheet:

```css
@import "ycsts-framework/dist/ycsts.min.css";
```

Or link directly in HTML:

```html
<link rel="stylesheet" href="node_modules/ycsts-framework/dist/ycsts.min.css">
```

Once installed locally, the binary is available in `npx`:

```bash
npx ycsts init
npx ycsts build
```

### Option 4: Direct CDN Link

Drop the stylesheet into any HTML document without installing Node.js:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ycsts-framework@1.2.0/dist/ycsts.min.css">
```

Alternative via unpkg:

```html
<link rel="stylesheet" href="https://unpkg.com/ycsts-framework@1.2.0/dist/ycsts.min.css">
```

---

## CLI Reference

| Command | Description |
|---|---|
| `ycsts init` | Copies starter template, config, and `ycsts.min.css` to the current directory |
| `ycsts init --force` | Overwrites existing template files |
| `ycsts build` | Compiles CSS from source into `dist/ycsts.css` and `dist/ycsts.min.css` |
| `ycsts build -i <in> -o <out>` | Compiles custom source file to specified output |
| `ycsts --version` | Prints current installed version |
| `ycsts --help` | Displays command line usage |

---

## Animations

### Signature Fadein Family

Add `fadein` or any variant to an element for an immediate hardware-accelerated entrance transition upon render.

```html
<h1 class="fadein">Fades in on load</h1>
<div class="fadein-up fadein-delay-1">Slides up into view</div>
<div class="fadein-scale fadein-delay-2">Zooms up from 92% scale</div>
<div class="fadein-blur fadein-delay-3">Transitions from lens blur to crisp</div>
<div class="fadein-bounce fadein-delay-4">Bounces into position</div>
<div class="fadein-glow">Enters with an ambient light aura</div>
```

#### Entrance Variants

| Class | Description |
|---|---|
| `fadein` | Standard entrance: fades in with 12px upward slide |
| `fadein-up` | Enters from 24px below |
| `fadein-down` | Enters from 24px above |
| `fadein-left` | Enters from 24px right towards left |
| `fadein-right` | Enters from 24px left towards right |
| `fadein-scale` | Enters scaling from 0.92 to 1.0 |
| `fadein-zoom-in` | Enters scaling from 0.85 to 1.0 |
| `fadein-zoom-out` | Enters scaling down from 1.15 to 1.0 |
| `fadein-pop` | Energetic entrance scaling from 0.35 with slight overshoot |
| `fadein-blur` | Transitions from 10px blur to crystal clear |
| `fadein-blur-up` | Upward slide while transitioning from 14px blur to sharp |
| `fadein-blur-down` | Downward slide while transitioning from 14px blur to sharp |
| `fadein-blur-scale` | Scale up entrance with lens blur resolution |
| `fadein-bounce` | Enters with a playful spring bounce |
| `fadein-glow` | Enters with an illuminating light aura |
| `fadein-expand` | Enters expanding letter-spacing and dimensions smoothly |
| `fadein-float` | Enters and settles into position |
| `fadein-swing` | 3D entrance swinging down from top perspective |
| `fadein-elastic` | Multi-stage elastic spring entrance |
| `fadein-tilt` | Enters with subtle perspective rotation |
| `fadein-spiral` | Subtle rotational spiral zoom entrance |
| `fadein-slide-up` | Full 100% vertical slide-up entrance |
| `fadein-slide-down` | Full 100% vertical slide-down entrance |
| `fadein-slide-left` | Full 100% horizontal slide-left entrance |
| `fadein-slide-right` | Full 100% horizontal slide-right entrance |
| `fadein-flip-x` | 3D horizontal card flip entrance |
| `fadein-flip-y` | 3D vertical card flip entrance |

#### Duration Modifiers

| Class | Duration |
|---|---|
| `fadein-instant` | 75ms |
| `fadein-faster` | 100ms |
| `fadein-fast` | 200ms |
| `fadein-normal` | 400ms |
| `fadein-slow` | 800ms |
| `fadein-slower` | 1200ms |
| `fadein-ultra-slow` | 2000ms |

#### Delay Modifiers

| Class | Delay |
|---|---|
| `fadein-delay-0` | 0ms |
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
| `fadein-delay-11` | 1100ms |
| `fadein-delay-12` | 1200ms |
| `fadein-delay-14` | 1400ms |
| `fadein-delay-16` | 1600ms |

#### Easing Modifiers

| Class | Curve |
|---|---|
| `fadein-smooth` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `fadein-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `fadein-bounce-ease` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` |
| `fadein-ease` | `ease` |
| `fadein-linear` | `linear` |

---

### Continuous Motion Suite

| Class | Description |
|---|---|
| `animate-float` | Gentle 3-second sinusoidal vertical floating |
| `animate-float-slow` | Luxury 5-second slow floating motion for hero elements |
| `animate-pulse-glow` | Breathing neon blue shadow aura |
| `animate-glow-indigo` | Breathing indigo shadow aura |
| `animate-glow-emerald` | Breathing emerald shadow aura |
| `animate-glow-rose` | Breathing rose shadow aura |
| `animate-shimmer` | Continuous liquid metallic loading sweep |
| `animate-aurora` | Multi-color shifting gradient background |
| `animate-morph` | Smooth organic border-radius morphing blob |
| `animate-marquee` | Continuous horizontal scrolling ticker |
| `animate-marquee-reverse` | Reverse horizontal scrolling ticker |
| `animate-radar` | Radar beacon ping ripple |
| `animate-gradient` | Animated multi-color gradient shift |
| `animate-heartbeat` | Rhythmic double-pulse scale animation |
| `animate-wiggle` | Subtle rotational wobble |
| `animate-shake` | Horizontal error feedback shake |
| `animate-spin` | Infinite 360-degree rotation |
| `animate-spin-slow` | Slow 3-second infinite rotation |
| `animate-ping` | Expanding scale ping with opacity drop |
| `animate-pulse` | Opacity pulsing animation |
| `animate-bounce` | Vertical bounce animation |

---

### Hover Micro-Interactions

| Class | Hover Effect |
|---|---|
| `hover-float` | Lifts upward 4px with an elevated drop shadow |
| `hover-scale` | Scales smoothly to 104% |
| `hover-scale-sm` | Subtle scale to 102% |
| `hover-scale-lg` | Pronounced scale to 108% |
| `hover-glow` | Illuminates blue ambient shadow on hover |
| `hover-glow-indigo` | Illuminates indigo ambient shadow on hover |
| `hover-glow-emerald` | Illuminates emerald ambient shadow on hover |
| `hover-glow-rose` | Illuminates rose ambient shadow on hover |
| `hover-rotate` | Tilts slightly by 2 degrees on hover |
| `hover-tilt` | 3D perspective surface tilt on hover |

---

## Components

### Buttons

```html
<!-- Solid Variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-dark">Dark</button>

<!-- Soft Modern Variants -->
<button class="btn btn-soft-primary">Soft Blue</button>
<button class="btn btn-soft-success">Soft Green</button>
<button class="btn btn-soft-danger">Soft Red</button>
<button class="btn btn-soft-warning">Soft Amber</button>
<button class="btn btn-soft-info">Soft Cyan</button>

<!-- Gradient Variants -->
<button class="btn btn-gradient-primary btn-glow">Gradient Blue</button>
<button class="btn btn-gradient-indigo btn-glow-indigo">Gradient Indigo</button>
<button class="btn btn-gradient-rose btn-glow-rose">Gradient Rose</button>
<button class="btn btn-gradient-sunset">Sunset Glow</button>
<button class="btn btn-gradient-emerald btn-glow-emerald">Gradient Emerald</button>
<button class="btn btn-gradient-cyber">Cyber Glow</button>

<!-- Glass & States -->
<button class="btn btn-glass">Glass Light</button>
<button class="btn btn-glass-dark">Glass Dark</button>
<button class="btn btn-primary btn-loading">Loading</button>

<!-- Shapes & Sizes -->
<button class="btn btn-primary btn-pill">Pill Button</button>
<button class="btn btn-primary btn-xs">Extra Small</button>
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-xl">Extra Large</button>
<button class="btn btn-primary btn-2xl">2X Large</button>

<!-- Button Groups -->
<div class="btn-group">
  <button class="btn btn-primary">Left</button>
  <button class="btn btn-primary">Center</button>
  <button class="btn btn-primary">Right</button>
</div>
```

### Cards & Surfaces

```html
<!-- Standard Card -->
<div class="card card-hover">
  <div class="card-header">
    <span class="card-title">Card Title</span>
  </div>
  <div class="card-body">
    Card content goes here.
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">Action</button>
  </div>
</div>

<!-- Frosted Glass Card -->
<div class="card card-glass card-body">
  Frosted backdrop-filter glass surface.
</div>

<!-- Dark Glass Card -->
<div class="card card-glass-dark card-body">
  High-contrast dark glass surface.
</div>

<!-- Accent Border Glass -->
<div class="card card-glass-bordered card-body">
  Glass card with accent blue border highlight.
</div>

<!-- Neon Gradient Border Card -->
<div class="card-gradient-border card-body">
  Continuous gradient border frame.
</div>

<!-- KPI Stat Card -->
<div class="stat-card hover-float">
  <div class="stat-title">Monthly Revenue</div>
  <div class="stat-value text-blue-600">$48,200</div>
  <div class="stat-desc stat-trend-up">&uarr; 14% vs last month</div>
</div>
```

### Forms & Floating Labels

```html
<!-- Floating Label Input -->
<div class="form-floating">
  <input type="text" class="input" id="email" placeholder="name@example.com">
  <label for="email">Email address</label>
</div>

<!-- Standard Inputs & Glass -->
<input type="text" class="input" placeholder="Standard input">
<input type="text" class="input input-glass" placeholder="Glass input">

<!-- Form Group with Validation -->
<div class="form-group">
  <label class="label label-required">Username</label>
  <input type="text" class="input is-valid" value="alex_morgan">
  <span class="valid-feedback">Username is available.</span>
</div>

<!-- Custom Select -->
<select class="select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Toggle Switch -->
<label class="switch switch-md">
  <input type="checkbox" checked>
  <span class="toggle-slider"></span>
</label>

<!-- Custom File Input -->
<input type="file" class="file-input">

<!-- Custom Range Slider -->
<input type="range" class="range" min="0" max="100" value="50">
```

### Pure-CSS Dropdown Menu

```html
<div class="dropdown">
  <button class="btn btn-primary">Dropdown &blacktriangledown;</button>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Dashboard</a>
    <a href="#" class="dropdown-item">Settings</a>
    <div class="dropdown-divider"></div>
    <a href="#" class="dropdown-item text-red-600">Sign Out</a>
  </div>
</div>
```

### Pure-CSS Details Accordion

```html
<details class="accordion-item" open>
  <summary class="accordion-header">
    <span>Accordion Header Title</span>
    <span>&blacktriangledown;</span>
  </summary>
  <div class="accordion-body">
    Accordion collapsible body content rendered without JavaScript.
  </div>
</details>
```

### Pure-CSS Tabs

```html
<!-- Boxed Style -->
<div class="tabs tabs-boxed">
  <button class="tab-btn active">Overview</button>
  <button class="tab-btn">Analytics</button>
  <button class="tab-btn">Settings</button>
</div>

<!-- Pill Style -->
<div class="tabs tabs-pill">
  <button class="tab-btn active">Tab 1</button>
  <button class="tab-btn">Tab 2</button>
</div>
```

### Pure-CSS Tooltips

```html
<!-- Attribute-based tooltip -->
<button class="btn btn-outline" data-tooltip="Instant tooltip message">Hover me</button>

<!-- Positioned tooltips -->
<div class="tooltip tooltip-top">
  <button class="btn btn-sm">Top</button>
  <span class="tooltip-content">Top tooltip</span>
</div>
<div class="tooltip tooltip-bottom">
  <button class="btn btn-sm">Bottom</button>
  <span class="tooltip-content">Bottom tooltip</span>
</div>
```

### Badges & Live Indicators

```html
<span class="badge badge-blue">Blue</span>
<span class="badge badge-green">Green</span>
<span class="badge badge-red">Red</span>
<span class="badge badge-yellow">Yellow</span>
<span class="badge badge-purple">Purple</span>
<span class="badge badge-indigo">Indigo</span>
<span class="badge badge-soft-blue">Soft Blue</span>
<span class="badge badge-soft-green">Soft Green</span>

<!-- Live Pulsing Cluster Indicator -->
<span class="badge badge-green flex items-center gap-2">
  <span class="badge-dot-live text-green-500"></span> Live System
</span>

<!-- Counter Badge -->
<div class="relative inline-block">
  <button class="btn btn-outline btn-sm">Inbox</button>
  <span class="badge-counter">4</span>
</div>
```

### Timelines, Steppers & Chat

```html
<!-- Stepper -->
<ul class="steps">
  <li class="step step-complete">Account</li>
  <li class="step step-active">Billing</li>
  <li class="step">Confirmation</li>
</ul>

<!-- Timeline -->
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-point"></div>
    <div class="timeline-content">Project initialized</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-point"></div>
    <div class="timeline-content">Stylesheets compiled</div>
  </div>
</div>

<!-- Chat Bubbles -->
<div class="chat">
  <div class="chat-start">
    <div class="chat-bubble chat-bubble-secondary">Hello! How can I help you today?</div>
  </div>
  <div class="chat-end">
    <div class="chat-bubble chat-bubble-primary">I want to try ycsts framework.</div>
  </div>
</div>
```

---

## Browser Support

ycsts is built on standard CSS3 specifications and runs natively in all evergreen browsers:
- Google Chrome 88+
- Apple Safari 14+
- Mozilla Firefox 85+
- Microsoft Edge 88+

---

## License

MIT License. Designed and engineered by yanzyuyu.
