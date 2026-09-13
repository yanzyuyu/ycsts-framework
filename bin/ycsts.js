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
  ycsts init [--force]                     Initialize starter project (local or global)
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
