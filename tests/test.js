const merge = require('lodash/merge');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const customPlugin = require('../src/index');

function generatePluginCss(options) {
  const config = {
    corePlugins: false,
    plugins: [customPlugin(options)],
  };

  return postcss(tailwindcss(merge(config)))
    .process('@tailwind base', {
      from: undefined,
    })
    .then(({ css }) => css);
}

test('base styles selectors correctly generated.', () => {
  return generatePluginCss().then(css => {
    expect(css).toContain(`[data-accent='sky']`);
  });
});

test('selected base styles selectors correctly generated.', () => {
  return generatePluginCss({ colors: ['rose'] }).then(css => {
    expect(css).not.toContain(`[data-accent='sky']`);
  });
});
