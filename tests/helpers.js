const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
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
