#!/usr/bin/env node

const path = require("path");
const fs = require("fs");

const pkg = require("../package.json");
const args = process.argv.slice(2);
const cmd = args[0];

const HELP = `
ycsts ${pkg.version}

Usage:
  npx @yanzyu/ycsts init [--force]   Copy starter config, template, and CSS bundle
  npx @yanzyu/ycsts build            Build CSS from source into dist/
  npx @yanzyu/ycsts --version        Print version
  npx @yanzyu/ycsts --help           Show this message
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
  const buildScript = path.join(frameworkRoot, "scripts", "build.js");

  try {
    require(buildScript);
  } catch (e) {
    process.stderr.write("Build failed: " + e.message + "\n");
    process.exit(1);
  }
  return;
}

process.stderr.write(`Unknown command: ${cmd}\nRun npx @yanzyu/ycsts --help for usage.\n`);
process.exit(1);
