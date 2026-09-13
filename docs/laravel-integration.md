# Laravel Integration Guide

This guide explains how to integrate and run YCSTS CSS Framework in a Laravel application with Vite and Blade, using `npm run dev` for hot reload development.

## Requirements

- Laravel 9, 10, or 11
- Node.js 18+ and npm
- Vite (default in Laravel 9+)

---

## Quick Setup (1-Step CLI)

Inside your Laravel project root:

```bash
npx ycsts-framework laravel
```

This command automatically:
1. Detects your Laravel project structure.
2. Appends `@import "ycsts-framework/dist/ycsts.min.css";` to `resources/css/app.css`.
3. Creates a ready-to-use demo Blade view at `resources/views/ycsts-demo.blade.php`.

---

## Manual Step-by-Step Setup

### Step 1: Install the Package

In your Laravel project root directory:

```bash
npm install ycsts-framework
```

This downloads `ycsts-framework` into your project's `node_modules/` folder.

### Step 2: Import into app.css

Open `resources/css/app.css` and add the import rule:

```css
@import "ycsts-framework/dist/ycsts.min.css";
```

If you are using Tailwind alongside YCSTS, place the YCSTS import below or above Tailwind depending on your cascade preference:

```css
@import 'tailwindcss';
@import "ycsts-framework/dist/ycsts.min.css";
```

### Step 3: Verify vite.config.js

Ensure `resources/css/app.css` is included in the `laravel-vite-plugin` inputs:

```javascript
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
```

### Step 4: Include Vite Directive in Blade Templates

In your main Blade layout (such as `resources/views/layouts/app.blade.php` or `resources/views/welcome.blade.php`), include the `@vite` directive inside the `<head>` tag:

```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel Application</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-zinc-950 text-zinc-100 font-sans p-8 selection-glow">
    <div class="fadein max-w-xl mx-auto card p-6">
        <h1 class="text-2xl font-bold text-zinc-100">Welcome to Laravel with YCSTS</h1>
        <p class="text-zinc-400 mt-2">Single-word entrance animations and luxury components.</p>
        <button class="btn btn-primary mt-4">Get Started</button>
    </div>
</body>
</html>
```

### Step 5: Run Vite Development Server

Start the development server:

```bash
npm run dev
```

In another terminal, start the Laravel server:

```bash
php artisan serve
```

Whenever you update Blade templates or CSS files, Vite automatically applies Hot Module Replacement (HMR) and reflects changes in your browser instantly.

---

## Production Build

To compile and minify all assets for production deployment:

```bash
npm run build
```

Vite compiles `resources/css/app.css` (including YCSTS styles) into optimized, cache-busted production files in the `public/build/` directory.

---

## Why node_modules Appears Only with npm install

When running `npx ycsts-framework init`:
- `npx` executes the package from a temporary system cache.
- It copies standalone files (`index.html`, `ycsts.min.css`, `ycsts.config.js`) directly into your current directory.
- It does not modify `package.json` or download a persistent `node_modules/` directory.

When running `npm install ycsts-framework`:
- npm adds `ycsts-framework` to `package.json` under `dependencies`.
- It creates the local `node_modules/ycsts-framework/` folder.
- This allows bundlers (Vite, Webpack) and HTML `<link rel="stylesheet" href="node_modules/ycsts-framework/dist/ycsts.min.css">` to resolve files from your local disk.
