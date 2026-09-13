#!/usr/bin/env node

const path = require("path");
const fs = require("fs");

const pkg = require("../package.json");
const args = process.argv.slice(2);
const cmd = args[0];

const HELP = `
ycsts ${pkg.version}

Usage:
  npx ycsts-framework init [--force]       Initialize starter project (unscoped)
  npx @yanzyu/ycsts init [--force]         Initialize starter project (scoped)
  npx ycsts-framework laravel              Configure YCSTS for Laravel Vite project
  ycsts init [--force]                     Initialize starter project (local or global)
  ycsts laravel                            Configure YCSTS for Laravel Vite project
  ycsts build [-i <input>] [-o <output>]   Build and minify CSS bundle
  ycsts --version                          Print version
  ycsts --help                             Show this message
`;

if (cmd === "--version" || cmd === "-v") {
  process.stdout.write(pkg.version + "\n");
  process.exit(0);
}

if (!cmd || cmd === "--help" || cmd === "-h") {
  process.stdout.write(HELP);
  process.exit(0);
}

if (cmd === "init") {
  const frameworkRoot = path.join(__dirname, "..");
  const cwd = process.cwd();
  const force = args.includes("--force") || args.includes("-f");

  const configSrc = path.join(frameworkRoot, "templates", "ycsts.config.js");
  const configDest = path.join(cwd, "ycsts.config.js");
  const htmlSrc = path.join(frameworkRoot, "templates", "starter.html");
  const htmlDest = path.join(cwd, "index.html");
  const cssSrc = path.join(frameworkRoot, "dist", "ycsts.min.css");
  const cssDest = path.join(cwd, "ycsts.min.css");

  if (fs.existsSync(configDest) && !force && fs.statSync(configDest).size > 0) {
    process.stdout.write("ycsts.config.js already exists, skipping. (use --force to overwrite)\n");
  } else {
    fs.copyFileSync(configSrc, configDest);
    process.stdout.write("Created ycsts.config.js\n");
  }

  if (fs.existsSync(htmlDest) && !force && fs.statSync(htmlDest).size > 0) {
    process.stdout.write("index.html already exists, skipping. (use --force to overwrite)\n");
  } else {
    fs.copyFileSync(htmlSrc, htmlDest);
    process.stdout.write("Created index.html\n");
  }

  if (fs.existsSync(cssSrc)) {
    if (fs.existsSync(cssDest) && !force && fs.statSync(cssDest).size > 0) {
      process.stdout.write("ycsts.min.css already exists, skipping. (use --force to overwrite)\n");
    } else {
      fs.copyFileSync(cssSrc, cssDest);
      process.stdout.write("Created ycsts.min.css\n");
    }
  }

  process.stdout.write("\nDone! ycsts starter project initialized.\nOpen index.html in your browser to view your page.\n");
  process.exit(0);
}

if (cmd === "laravel") {
  const cwd = process.cwd();
  const isLaravel = fs.existsSync(path.join(cwd, "artisan")) ||
                    fs.existsSync(path.join(cwd, "vite.config.js")) ||
                    fs.existsSync(path.join(cwd, "resources"));

  if (!isLaravel) {
    process.stderr.write("No Laravel project detected in the current directory (artisan / vite.config.js not found).\n");
    process.exit(1);
  }

  const cssDir = path.join(cwd, "resources", "css");
  if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir, { recursive: true });
  }

  const appCssPath = path.join(cssDir, "app.css");
  const importStatement = '@import "ycsts-framework/dist/ycsts.min.css";\n';

  if (fs.existsSync(appCssPath)) {
    const existing = fs.readFileSync(appCssPath, "utf8");
    if (!existing.includes("ycsts")) {
      fs.writeFileSync(appCssPath, importStatement + existing, "utf8");
      process.stdout.write("Added YCSTS import to resources/css/app.css\n");
    } else {
      process.stdout.write("resources/css/app.css already contains YCSTS import\n");
    }
  } else {
    fs.writeFileSync(appCssPath, importStatement, "utf8");
    process.stdout.write("Created resources/css/app.css with YCSTS import\n");
  }

  const viewsDir = path.join(cwd, "resources", "views");
  if (!fs.existsSync(viewsDir)) {
    fs.mkdirSync(viewsDir, { recursive: true });
  }

  const demoBladePath = path.join(viewsDir, "ycsts-demo.blade.php");
  const bladeContent = `<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Laravel + YCSTS</title>
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-zinc-950 text-zinc-100 font-sans min-h-screen p-8 selection-glow">
  <main class="max-w-4xl mx-auto space-y-6 fadein">
    <header class="card-glass p-8 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
        <span class="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
        <span>Laravel + YCSTS Integration</span>
      </div>
      <h1 class="text-4xl font-extrabold text-gradient-primary mt-4">YCSTS CSS Framework</h1>
      <p class="mt-2 text-zinc-400 max-w-xl mx-auto">Vite Hot Module Reloading is active. Single-word entrance animations and luxury components ready to use.</p>
      <div class="mt-6 flex justify-center gap-3">
        <button class="btn btn-primary">Primary Action</button>
        <button class="btn btn-gradient">Gradient Action</button>
        <button class="btn btn-secondary">Secondary</button>
      </div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="stat-card">
        <div class="stat-label">Vite HMR Status</div>
        <div class="stat-value text-emerald-400">Connected</div>
        <div class="stat-trend text-emerald-400">&uarr; Hot reloading active</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Animation Suite</div>
        <div class="stat-value text-blue-400">20+ Variants</div>
        <div class="stat-trend text-blue-400">fadein, fadein-up, etc.</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Component System</div>
        <div class="stat-value text-purple-400">Luxury Suite</div>
        <div class="stat-trend text-purple-400">Zero JS dependencies</div>
      </div>
    </div>

    <div class="card p-6">
      <h3 class="text-lg font-bold text-zinc-100 mb-4">Luxury Custom Select</h3>
      <div class="custom-select">
        <button type="button" class="custom-select-trigger">
          <span class="custom-select-value">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span>Choose Feature</span>
          </span>
          <svg class="custom-select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="custom-select-menu">
          <div class="custom-select-search">
            <input type="text" placeholder="Filter options...">
          </div>
          <div class="custom-select-options">
            <div class="custom-select-group-label">Animations</div>
            <div class="custom-select-option is-selected">
              <div class="option-title">fadein</div>
              <div class="option-desc">Smooth 0.4s fade + slide up</div>
              <svg class="option-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <div class="custom-select-option">
              <div class="option-title">fadein-scale</div>
              <div class="option-desc">Smooth zoom entrance</div>
            </div>
            <div class="custom-select-group-label">Components</div>
            <div class="custom-select-option">
              <div class="option-title">scrollbar-glow</div>
              <div class="option-desc">Radiant scrollbar gradient</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>
</html>
`;
  fs.writeFileSync(demoBladePath, bladeContent, "utf8");
  process.stdout.write("Created resources/views/ycsts-demo.blade.php\n");

  process.stdout.write(`
YCSTS configured for Laravel!

Next steps:
  1. Install package:
     npm install ycsts-framework

  2. Start Vite development server:
     npm run dev

  3. Add route to routes/web.php:
     Route::get('/ycsts', function () {
         return view('ycsts-demo');
     });
`);
  process.exit(0);
}

if (cmd === "build") {
  const frameworkRoot = path.join(__dirname, "..");
  const cwd = process.cwd();

  let inputArg = null;
  let outputArg = null;
  for (let i = 1; i < args.length; i++) {
    if (args[i] === "-i" || args[i] === "--input") {
      inputArg = args[i + 1];
      i++;
    } else if (args[i] === "-o" || args[i] === "--output") {
      outputArg = args[i + 1];
      i++;
    }
  }

  let srcFile;
  if (inputArg) {
    srcFile = path.resolve(cwd, inputArg);
  } else if (fs.existsSync(path.join(cwd, "src", "ycsts.css"))) {
    srcFile = path.join(cwd, "src", "ycsts.css");
  } else if (fs.existsSync(path.join(cwd, "src", "style.css"))) {
    srcFile = path.join(cwd, "src", "style.css");
  } else {
    srcFile = path.join(frameworkRoot, "src", "ycsts.css");
  }

  let outFullFile;
  let outMinFile;
  if (outputArg) {
    outFullFile = path.resolve(cwd, outputArg);
    if (outFullFile.endsWith(".min.css")) {
      outMinFile = outFullFile;
      outFullFile = outFullFile.replace(/\.min\.css$/, ".css");
    } else if (outFullFile.endsWith(".css")) {
      outMinFile = outFullFile.replace(/\.css$/, ".min.css");
    } else {
      outMinFile = outFullFile + ".min.css";
      outFullFile = outFullFile + ".css";
    }
  } else if (cwd === frameworkRoot) {
    outFullFile = path.join(frameworkRoot, "dist", "ycsts.css");
    outMinFile = path.join(frameworkRoot, "dist", "ycsts.min.css");
  } else {
    outFullFile = path.join(cwd, "dist", "ycsts.css");
    outMinFile = path.join(cwd, "dist", "ycsts.min.css");
  }

  const buildScript = path.join(frameworkRoot, "scripts", "build.js");
  try {
    const buildCSS = require(buildScript);
    buildCSS({ src: srcFile, outFull: outFullFile, outMin: outMinFile })
      .then(() => {
        process.exit(0);
      })
      .catch((err) => {
        process.stderr.write("Build failed: " + err.message + "\n");
        process.exit(1);
      });
  } catch (e) {
    process.stderr.write("Build failed: " + e.message + "\n");
    process.exit(1);
  }
  return;
}

process.stderr.write(`Unknown command: ${cmd}\nRun ycsts --help for usage.\n`);
process.exit(1);
