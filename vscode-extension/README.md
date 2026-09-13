# YCSTS Framework Quick Snippets for VS Code

Official code snippet extension for the YCSTS utility-first CSS framework. Designed for instant productivity in HTML, Laravel Blade, PHP, Vue, React, Svelte, and CSS.

---

## How It Works

Just like Bootstrap Quick Snippets, you do not need to memorize complex markup. Type a category prefix followed by a hyphen (`-`), and VS Code immediately displays all matching components in an autocomplete dropdown.

### Primary Triggers

| Prefix | Category | Examples |
|---|---|---|
| `button-` or `btn-` | Button components and variants | `button-a`, `button-default`, `button-gradient`, `button-sizes` |
| `fadein-` | Signature entrance animations | `fadein-up`, `fadein-scale`, `fadein-blur`, `fadein-bounce` |
| `animate-` | Continuous ambient animations | `animate-float`, `animate-pulse-glow`, `animate-shimmer` |
| `select-` / `custom-select-` | Dropdowns and luxury select | `select-custom`, `custom-select-luxury`, `select-sizes` |
| `card-` | Card layouts and glassmorphism | `card-default`, `card-glass`, `card-stat`, `card-image` |
| `modal-` | Modals and dialog overlays | `modal-default`, `modal-glass`, `modal-confirm`, `modal-sizes` |
| `form-` or `input-` | Form controls and inputs | `form-input`, `form-input-floating`, `form-toggle`, `form-group` |
| `scrollbar-` | Custom glowing scrollbars | `scrollbar-glow`, `scrollbar-custom` |
| `badge-` | Status indicators and pills | `badge-default`, `badge-status-live`, `badge-pill` |
| `alert-` | Alert banners and toasts | `alert-default`, `alert-dismissible`, `toast-card` |
| `nav-` or `navbar-` | Navigation bars and tabs | `navbar-default`, `tabs-default`, `accordion-default` |
| `laravel-` or `blade-` | Laravel Blade directives & views | `laravel-vite`, `laravel-starter` |
| `yc-` | Namespace prefix for all snippets | `yc-button-primary`, `yc-fadein`, `yc-custom-select` |

---

## Button Snippets Reference (`button-` & `btn-`)

Typing `button-` in any HTML or Blade file displays the complete button suite:

| Prefix | Description | Generates |
|---|---|---|
| `button-a` | Link styled as button | `<a href="#" class="btn btn-primary" role="button">...</a>` |
| `button-block` | Full-width button | `<button class="btn btn-primary w-full">...</button>` |
| `button-checkbox` | Checkbox toggle button | Label with toggle switch styled as button |
| `button-close` | Modal/alert dismiss button | `<button class="modal-close">&times;</button>` |
| `button-default` | Standard button with variant picker | Choice dropdown: `btn-primary`, `btn-secondary`, `btn-gradient`, etc. |
| `button-disabled-a` | Disabled anchor link | Anchor with `pointer-events-none` and `opacity-50` |
| `button-disabled` | Disabled native button | Native `<button disabled>` with disabled styles |
| `button-input` | Input button | `<input type="button" class="btn btn-primary" value="...">` |
| `button-outline` | Outline button | `<button class="btn btn-outline">...</button>` |
| `button-radio` | Segmented radio group | Segmented control with active/inactive states |
| `button-sizes` | Button size showcase | Small (`btn-sm`), Default, and Large (`btn-lg`) buttons |
| `button-toggle` | Toggle state button | Button with `data-toggle="button"` |
| `button-primary` | Solid primary button | High-contrast solid blue button |
| `button-secondary` | Sleek secondary button | Neutral dark secondary button |
| `button-success` | Emerald success button | Emerald green action button |
| `button-danger` | Crimson danger button | Red destructive action button |
| `button-warning` | Amber warning button | Amber cautionary action button |
| `button-info` | Cyan info button | Cyan informational button |
| `button-gradient` | Radiant gradient button | Vibrant dual-tone blue-purple gradient |
| `button-glow` | Glowing neon button | Button with pulsing neon drop-shadow aura |
| `button-soft` | Soft tint button | Subtle colored background with high-contrast text |
| `button-pill` | Rounded pill button | Button with `rounded-full` / `btn-pill` |
| `button-loading` | Loading state button | Button with embedded spinning SVG loader |
| `button-group` | Button toolbar | Unified flex group with attached borders |
| `button-icon` | Icon + Text button | Button with embedded vector SVG icon |

---

## Animation Snippets Reference (`fadein-` & `animate-`)

| Prefix | Description |
|---|---|
| `fadein-default` | Signature 0.4s smooth fade + slide up |
| `fadein-up` | Slide entrance from bottom |
| `fadein-down` | Slide entrance from top |
| `fadein-left` | Slide entrance from left |
| `fadein-right` | Slide entrance from right |
| `fadein-scale` | Elastic zoom/scale entrance |
| `fadein-blur` | Blur-to-focus sharp entrance |
| `fadein-bounce` | Spring bounce entrance |
| `fadein-flip` | 3D perspective flip entrance |
| `fadein-spiral` | Rotational zoom entrance |
| `fadein-fast` | 0.2s rapid entrance |
| `fadein-slow` | 0.8s cinematic entrance |
| `fadein-delay` | Staggered entrance with delay modifiers |
| `animate-float` | Gentle continuous hovering animation |
| `animate-pulse-glow` | Continuous breathing neon aura |
| `animate-shimmer` | Skeleton loader liquid shimmer |
| `animate-marquee` | Continuous looping horizontal banner |
| `animate-morph` | Continuous organic morphing fluid shape |

---

## Component Snippets Reference

### Dropdowns & Selects
- `select-custom`: Enhanced native select with custom SVG arrow.
- `select-sizes`: Native select in small, regular, and large sizes.
- `custom-select-luxury`: Full Luxury Select Studio with search filter, categories, and checkmarks.

### Cards & Surfaces
- `card-default`: Standard elevated card container.
- `card-glass`: Frosted glassmorphism card with backdrop blur.
- `card-header-footer`: Structured card with header, body, and action footer.
- `card-stat`: Analytics KPI metric card with percentage trend indicator.
- `card-image`: Card with top hero cover image and action.

### Modals & Dialogs
- `modal-default`: Complete modal dialog with backdrop blur, title, body, and action buttons.
- `modal-glass`: Frosted glass variant modal.
- `modal-confirm`: Centered confirmation warning dialog.
- `modal-sizes`: Modal with configurable width breakpoints.

### Forms & Inputs
- `form-input`: Clean styled text input.
- `form-input-floating`: Animated floating label input.
- `form-textarea`: Styled multiline text area.
- `form-toggle`: Accessible switch toggle.
- `form-group`: Input grouped with label and helper caption.

### Layout & Navigation
- `navbar-default`: Responsive navigation bar with brand, links, and action button.
- `tabs-default`: Clean tab navigation bar.
- `accordion-default`: Pure CSS collapsible accordion details element.
- `table-modern`: Modern data table with hover states and status badges.
- `chat-bubble-start` / `chat-bubble-end`: Messaging speech bubbles.

### Laravel & Integrations
- `laravel-vite`: `@vite(['resources/css/app.css', 'resources/js/app.js'])`.
- `laravel-starter`: Complete Laravel Blade starter view with YCSTS and Vite.
- `import-ycsts`: `@import "ycsts-framework/dist/ycsts.min.css";`.
- `import-ycsts-bundler`: `@import "ycsts-framework";`.

---

## Usage Guide in VS Code

1. Open any HTML, Blade (`.blade.php`), PHP, Vue, React, or Svelte file.
2. Type a prefix, for example: `button-`.
3. An autocomplete popup list appears showing all button snippets.
4. Use the `Down Arrow` and `Up Arrow` keys to navigate the options.
5. Press `Enter` or `Tab` to insert the snippet.
6. Press `Tab` to jump to the next placeholder or stop.
7. Where variant options are available (e.g. choice of button colors), press `Down Arrow` to select the variant from the dropdown, then press `Enter`.

### Tips & Troubleshooting

- **Trigger manually**: If autocomplete does not pop up automatically while typing inside HTML attributes, press `Ctrl + Space` (or `Cmd + Space` on macOS).
- **Enable Quick Suggestions**: To have snippets pop up automatically anywhere while typing, add this to your VS Code `settings.json` (`Ctrl + ,` -> Open Settings JSON):
  ```json
  "editor.quickSuggestions": {
    "other": "on",
    "comments": "off",
    "strings": "on"
  }
  ```

---

## Installation

### Method 1: Command Line
```bash
code --install-extension vscode-extension/ycsts-snippets-1.1.0.vsix
```

### Method 2: Extensions Panel in VS Code
1. Press `Ctrl + Shift + P`.
2. Select `Extensions: Install from VSIX...`.
3. Pick `vscode-extension/ycsts-snippets-1.1.0.vsix`.
