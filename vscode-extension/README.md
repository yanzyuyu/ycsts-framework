# YCSTS Framework Snippets for VS Code

Official code snippets for the YCSTS utility-first CSS framework in Visual Studio Code.

## Features

Provides fast autocomplete snippets for:
- Signature entrance animations (`fadein`, `fadein-up`, `fadein-scale`, `fadein-blur`, `fadein-bounce`, `fadein-flip`, `fadein-spiral`).
- Ambient continuous animations (`animate-float`, `animate-pulse-glow`, `animate-shimmer`, `animate-marquee`).
- Luxury components (`custom-select`, `select-custom`, `scrollbar-glow`, `selection-glow`, `modal`, `card`, `card-glass`, `stat-card`).
- Button variants (`btn-primary`, `btn-gradient`, `btn-glow`, `btn-soft`).
- Interactive widgets (`toggle`, `badge-status`, `alert`, `toast`, `accordion`, `input-floating`, `chat-bubble`).
- Laravel Blade integrations (`@vite` directives, complete starter templates).
- CSS stylesheet imports.

## Supported Languages

- HTML (`.html`, `.htm`)
- Blade (`.blade.php`)
- PHP (`.php`)
- Vue (`.vue`)
- React JSX / TSX (`.jsx`, `.tsx`)
- Svelte (`.svelte`)
- CSS (`.css`)

## Snippets Cheatsheet

### Animations

| Prefix | Output | Description |
|---|---|---|
| `yc-fadein` | `<div class="fadein">...</div>` | 0.4s ease-out upward fade-in |
| `yc-fadein-up` | `<div class="fadein-up">...</div>` | Upward entrance |
| `yc-fadein-down` | `<div class="fadein-down">...</div>` | Downward entrance |
| `yc-fadein-left` | `<div class="fadein-left">...</div>` | Entrance from left |
| `yc-fadein-right` | `<div class="fadein-right">...</div>` | Entrance from right |
| `yc-fadein-scale` | `<div class="fadein-scale">...</div>` | Scale-in entrance |
| `yc-fadein-blur` | `<div class="fadein-blur">...</div>` | Blur-to-focus entrance |
| `yc-fadein-bounce` | `<div class="fadein-bounce">...</div>` | Spring bounce entrance |
| `yc-fadein-flip` | `<div class="fadein-flip">...</div>` | 3D perspective flip |
| `yc-fadein-spiral` | `<div class="fadein-spiral">...</div>` | Spiral zoom entrance |
| `yc-animate-float` | `<div class="animate-float">...</div>` | Continuous smooth float |
| `yc-animate-pulse-glow` | `<div class="animate-pulse-glow">...</div>` | Neon pulsing aura |
| `yc-animate-shimmer` | `<div class="animate-shimmer ..."></div>` | Skeleton loader shimmer |
| `yc-animate-marquee` | `<div class="..."><div class="inline-block animate-marquee">...</div></div>` | Continuous looping marquee |

### Components & Elements

| Prefix | Output | Description |
|---|---|---|
| `yc-custom-select` | `<div class="custom-select">...</div>` | Luxury select with search and checkmark |
| `yc-select-custom` | `<select class="select-custom">...` | Enhanced native select dropdown |
| `yc-scrollbar-glow` | `<div class="scrollbar-glow ...">...</div>` | Container with glowing scrollbar |
| `yc-selection-glow` | `<div class="selection-glow">...</div>` | Container with glowing text selection |
| `yc-modal` | `<div class="modal-overlay">...</div>` | Complete modal with header, body, footer |
| `yc-card` | `<div class="card p-6">...</div>` | Minimalist elevated card |
| `yc-card-glass` | `<div class="card-glass p-6">...</div>` | Frosted glassmorphism card |
| `yc-stat-card` | `<div class="stat-card">...</div>` | Analytics metric KPI card |
| `yc-btn-primary` | `<button class="btn btn-primary">...</button>` | Solid primary button |
| `yc-btn-gradient` | `<button class="btn btn-gradient">...</button>` | Radiant gradient button |
| `yc-btn-glow` | `<button class="btn btn-glow">...</button>` | Glowing neon border button |
| `yc-btn-soft` | `<button class="btn btn-soft">...</button>` | Modern subtle soft button |
| `yc-toggle` | `<label class="..."><input type="checkbox" class="toggle">...</label>` | Custom toggle switch |
| `yc-badge-status` | `<span class="badge badge-success ...">...</span>` | Pulsing live indicator badge |
| `yc-alert` | `<div class="alert alert-primary">...</div>` | Dismissible alert notification |
| `yc-toast` | `<div class="toast toast-top-right">...</div>` | Floating toast container |
| `yc-accordion` | `<details class="accordion-item card p-4">...` | Pure CSS disclosure accordion |
| `yc-input-floating` | `<div class="relative"><input class="input ...">...</div>` | Form input with floating label |
| `yc-chat-bubble` | `<div class="chat-bubble ...">...</div>` | Messaging chat bubble |

### Laravel & Integrations

| Prefix | Output | Description |
|---|---|---|
| `yc-laravel-vite` | `@vite(['resources/css/app.css', 'resources/js/app.js'])` | Asset directive in Blade |
| `yc-blade-starter` | Complete Blade HTML structure | Ready-to-use template with Vite & YCSTS |
| `yc-import` | `@import "ycsts-framework/dist/ycsts.min.css";` | Stylesheet import rule |
| `yc-import-bundler` | `@import "ycsts-framework";` | Direct bundler package import |

## Installation

### Method 1: Install from VSIX

1. In VS Code, press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS).
2. Type and select `Extensions: Install from VSIX...`.
3. Choose `ycsts-snippets-1.0.0.vsix`.

### Method 2: Command Line

```bash
code --install-extension ycsts-snippets-1.0.0.vsix
```
