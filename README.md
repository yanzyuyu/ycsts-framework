# ycsts

A utility-first CSS framework with a full component layer and a single-word fade-in animation class.

## What it does

ycsts ships a single stylesheet — `dist/ycsts.css` — that provides:

- Every standard layout, spacing, sizing, typography, color, border, effect, transform, and transition utility
- State variants: `hover:`, `focus:`, `active:`, `disabled:`, `placeholder:`, `first:`, `last:`, `odd:`, `even:`, `group-hover:`, `focus-within:`, `focus-visible:`, `checked:`, `valid:`, `invalid:`
- Responsive prefixes: `sm:` `md:` `lg:` `xl:` `2xl:`
- Dark mode: `dark:`
- Pre-built component classes: `btn`, `card`, `badge`, `input`, `select`, `alert`, `avatar`, `spinner`, `progress`, `table-ycsts`, `nav`, `modal`, `breadcrumb`, `skeleton`
- The `fadein` animation class and its variants

## Install

```bash
npm install @yanzyu/ycsts
```

Or use the CDN build directly in your HTML.

## Link the stylesheet

```html
<link rel="stylesheet" href="node_modules/@yanzyu/ycsts/dist/ycsts.css">
```

For the minified version:

```html
<link rel="stylesheet" href="node_modules/@yanzyu/ycsts/dist/ycsts.min.css">
```


## The fadein class

Add `fadein` to any element. It fades in from 10px below its natural position over 0.4s.

```html
<h1 class="fadein">Fades in on load</h1>
<p class="fadein fadein-delay-1">Fades in after 100ms</p>
<p class="fadein fadein-delay-2">Fades in after 200ms</p>
<p class="fadein fadein-delay-3">Fades in after 300ms</p>
<p class="fadein fadein-delay-4">Fades in after 500ms</p>
<span class="fadein-fast">0.2s duration</span>
<span class="fadein-slow">0.8s duration</span>
```

| Class | Duration | Delay |
|---|---|---|
| `fadein` | 0.4s | none |
| `fadein-fast` | 0.2s | none |
| `fadein-slow` | 0.8s | none |
| `fadein-delay-1` | 0.4s | 100ms |
| `fadein-delay-2` | 0.4s | 200ms |
| `fadein-delay-3` | 0.4s | 300ms |
| `fadein-delay-4` | 0.4s | 500ms |

## CLI

```bash
npx ycsts init       # copies starter config and index.html to cwd
npx ycsts build      # builds dist/ from src/
npx ycsts --version  # prints version
npx ycsts --help     # usage
```

## Build from source

```bash
git clone https://github.com/yanzyuyu/ycsts-framework.git
cd ycsts-framework
npm install
npm run build
```

Outputs:
- `dist/ycsts.css` — full build
- `dist/ycsts.min.css` — minified

## Class categories

**Layout** — `flex` `grid` `block` `inline` `hidden` `container` `columns-*`

**Flexbox** — `flex-row` `flex-col` `flex-wrap` `items-*` `justify-*` `self-*` `grow` `shrink` `basis-*` `order-*`

**Grid** — `grid-cols-*` `grid-rows-*` `col-span-*` `row-span-*` `gap-*` `auto-cols-*` `grid-flow-*`

**Spacing** — `m-*` `mx-*` `my-*` `mt-*` `mr-*` `mb-*` `ml-*` `p-*` `px-*` `py-*` `pt-*` `pr-*` `pb-*` `pl-*` — scale: 0 0.5 1 1.5 2 2.5 3 3.5 4 5 6 7 8 9 10 11 12 14 16 20 24 28 32 36 40 44 48 52 56 60 64 72 80 96

**Sizing** — `w-*` `h-*` `min-w-*` `max-w-*` `min-h-*` `max-h-*` including `auto` `full` `screen` `fit` `min` `max` fractional and fixed values

**Typography** — `text-xs` through `text-9xl` — `font-thin` through `font-black` — `font-sans` `font-serif` `font-mono` — `leading-*` `tracking-*` `text-left` `text-center` `text-right` `uppercase` `lowercase` `capitalize` `underline` `line-through` `truncate`

**Colors** — 22 palettes × 11 shades: `slate` `gray` `zinc` `neutral` `stone` `red` `orange` `amber` `yellow` `lime` `green` `emerald` `teal` `cyan` `sky` `blue` `indigo` `violet` `purple` `fuchsia` `pink` `rose` — as `text-*` `bg-*` `border-*` `ring-*`

**Backgrounds** — `bg-*` `bg-gradient-to-*` `from-*` `to-*` `bg-cover` `bg-contain` `bg-center` `bg-no-repeat` `bg-clip-*`

**Borders** — `border` `border-*` `border-t/r/b/l` `border-solid` `border-dashed` `border-dotted` `rounded-none` through `rounded-full`

**Effects** — `opacity-*` `shadow-sm` through `shadow-2xl` `ring-*` `blur-*` `brightness-*` `grayscale` `invert` `saturate-*`

**Transforms** — `scale-*` `rotate-*` `translate-x-*` `translate-y-*` `skew-*` `origin-*` `transform-gpu`

**Transitions** — `transition` `transition-colors` `transition-opacity` `transition-transform` — `duration-75` through `duration-1000` — `ease-in` `ease-out` `ease-in-out` — `delay-*`

**Animations** — `animate-spin` `animate-ping` `animate-pulse` `animate-bounce` `fadein` `fadein-fast` `fadein-slow` `fadein-delay-*`

**Interactivity** — `cursor-*` `pointer-events-*` `select-*` `resize-*` `scroll-smooth` `touch-*` `appearance-none`

**Position** — `static` `fixed` `absolute` `relative` `sticky` — `top-*` `right-*` `bottom-*` `left-*` `inset-*` — `z-0` through `z-50`

**Overflow** — `overflow-*` `overflow-x-*` `overflow-y-*` `overscroll-*`

**Accessibility** — `sr-only` `not-sr-only`

**Misc** — `visible` `invisible` `will-change-*` `object-*` `list-*` `space-x-*` `space-y-*` `divide-*`

## Components

```html
<button class="btn btn-primary">Button</button>
<button class="btn btn-outline btn-sm">Small outline</button>

<div class="card">
  <div class="card-header"><h2 class="card-title">Title</h2></div>
  <div class="card-body">Content</div>
</div>

<span class="badge badge-green">Active</span>
<span class="badge badge-red">Error</span>

<input class="input" type="text" placeholder="Enter value">
<select class="select"><option>Option</option></select>
<textarea class="textarea"></textarea>

<div class="alert alert-success">Saved.</div>
<div class="alert alert-error">Failed.</div>

<div class="progress"><div class="progress-bar" style="width:60%"></div></div>

<div class="spinner spinner-md text-blue-500"></div>
```

## License

MIT
