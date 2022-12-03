const { generatePluginCss } = require('./helpers');

describe('tailwindcss-accent plugin', () => {
  it('correctly generate base styles selectors.', () => {
    return generatePluginCss().then(css => {
      expect(css).toContain(`[data-accent='sky']`);
    });
  });

  it('correctly generate selected base styles selectors.', () => {
    return generatePluginCss({ colors: ['rose'] }).then(css => {
      expect(css).not.toContain(`[data-accent='sky']`);
    });
  });
});
