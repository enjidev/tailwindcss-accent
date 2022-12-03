const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const tailwindcssV2 = require('tailwindcss-v2');
const customPlugin = require('../src/index');

module.exports.generatePluginCss = (options) => {
  const config = {
    corePlugins: false,
    plugins: [customPlugin(options)],
  };

  return postcss(tailwindcss(config))
    .process('@tailwind base', {
      from: undefined,
    })
    .then(({ css }) => css);
};

module.exports.generatePluginCssV2 = (options) => {
  const config = {
    corePlugins: false,
    plugins: [customPlugin(options)],
  };

  return postcss(tailwindcssV2(config))
    .process('@tailwind base', {
      from: undefined,
    })
    .then(({ css }) => css);
};
