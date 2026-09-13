#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const pkg = require("../package.json");
const args = process.argv.slice(2);
const cmd = args[0];

const HELP = `
ycsts ${pkg.version}

Usage:
  ycsts init         Copy starter config and template to current directory
  ycsts build        Build CSS from source into dist/
  ycsts --version    Print version
  ycsts --help       Show this message
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

  const configSrc = path.join(frameworkRoot, "templates", "ycsts.config.js");
  const configDest = path.join(cwd, "ycsts.config.js");
  const htmlSrc = path.join(frameworkRoot, "templates", "starter.html");
  const htmlDest = path.join(cwd, "index.html");

  if (fs.existsSync(configDest)) {
    process.stdout.write("ycsts.config.js already exists, skipping.\n");
  } else {
    fs.copyFileSync(configSrc, configDest);
    process.stdout.write("Created ycsts.config.js\n");
  }

  if (fs.existsSync(htmlDest)) {
    process.stdout.write("index.html already exists, skipping.\n");
  } else {
    fs.copyFileSync(htmlSrc, htmlDest);
    process.stdout.write("Created index.html\n");
  }

  process.stdout.write("\nDone. Link dist/ycsts.css in your HTML to get started.\n");
  process.exit(0);
}

if (cmd === "build") {
  const frameworkRoot = path.join(__dirname, "..");
  const src = path.join(frameworkRoot, "src", "ycsts.css");
  const distFull = path.join(frameworkRoot, "dist", "ycsts.css");
  const distMin = path.join(frameworkRoot, "dist", "ycsts.min.css");

  try {
    fs.mkdirSync(path.join(frameworkRoot, "dist"), { recursive: true });
    execSync(
      `npx postcss "${src}" -o "${distFull}"`,
      { cwd: frameworkRoot, stdio: "inherit" }
    );
    execSync(
      `npx postcss "${src}" -o "${distMin}" --use cssnano`,
      { cwd: frameworkRoot, stdio: "inherit" }
    );
    process.stdout.write("Build complete: dist/ycsts.css, dist/ycsts.min.css\n");
  } catch (e) {
    process.stderr.write("Build failed.\n");
    process.exit(1);
  }
  process.exit(0);
}

process.stderr.write(`Unknown command: ${cmd}\nRun ycsts --help for usage.\n`);
process.exit(1);
