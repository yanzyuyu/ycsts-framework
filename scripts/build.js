const postcss = require("postcss");
const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const src = path.join(root, "src", "ycsts.css");
const outFull = path.join(root, "dist", "ycsts.css");
const outMin = path.join(root, "dist", "ycsts.min.css");

fs.mkdirSync(path.join(root, "dist"), { recursive: true });

const css = fs.readFileSync(src, "utf8");

postcss([postcssImport, autoprefixer])
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
      `dist/ycsts.css      ${(fullSize / 1024).toFixed(1)} KB\n` +
      `dist/ycsts.min.css  ${(minSize / 1024).toFixed(1)} KB\n`
    );
  })
  .catch((err) => {
    process.stderr.write(err.message + "\n");
    process.exit(1);
  });
