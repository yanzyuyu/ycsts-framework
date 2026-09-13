const postcss = require("postcss");
const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const fs = require("fs");
const path = require("path");

function buildCSS(options = {}) {
  const root = path.join(__dirname, "..");
  const src = options.src || path.join(root, "src", "ycsts.css");
  const outFull = options.outFull || path.join(root, "dist", "ycsts.css");
  const outMin = options.outMin || path.join(root, "dist", "ycsts.min.css");

  fs.mkdirSync(path.dirname(outFull), { recursive: true });
  fs.mkdirSync(path.dirname(outMin), { recursive: true });

  const css = fs.readFileSync(src, "utf8");

  return postcss([postcssImport, autoprefixer])
    .process(css, { from: src, to: outFull })
    .then((result) => {
      fs.writeFileSync(outFull, result.css);
      return postcss([postcssImport, autoprefixer, cssnano({ preset: "default" })]).process(css, {
        from: src,
        to: outMin,
      });
    })
    .then((result) => {
      fs.writeFileSync(outMin, result.css);
      const fullSize = fs.statSync(outFull).size;
      const minSize = fs.statSync(outMin).size;
      process.stdout.write(
        `${path.relative(process.cwd(), outFull) || outFull}  ${(fullSize / 1024).toFixed(1)} KB\n` +
        `${path.relative(process.cwd(), outMin) || outMin}  ${(minSize / 1024).toFixed(1)} KB\n`
      );
      return { outFull, outMin, fullSize, minSize };
    });
}

module.exports = buildCSS;

if (require.main === module) {
  buildCSS().catch((err) => {
    process.stderr.write(err.message + "\n");
    process.exit(1);
  });
}
