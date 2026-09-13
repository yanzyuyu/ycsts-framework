const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    postcssImport,
    autoprefixer,
    cssnano({ preset: "default" }),
  ],
};
