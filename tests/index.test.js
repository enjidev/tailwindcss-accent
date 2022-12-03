const { generatePluginCss, generatePluginCssV2 } = require('./helpers');

describe('with tailwindcss v3', () => {
  it('correctly generate base styles selectors.', () => {
    return generatePluginCss().then((css) => {
      expect(css).toContain(`[data-accent='sky']`);
    });
  });

  it('correctly generate selected base styles selectors.', () => {
    return generatePluginCss({ colors: ['rose'] }).then((css) => {
      expect(css).not.toContain(`[data-accent='sky']`);
    });
  });
});

describe('with tailwindcss v2', () => {
  it('correctly generate base styles selectors.', () => {
    return generatePluginCssV2().then((css) => {
      expect(css).toContain(`[data-accent='sky']`);
    });
  });

  it('correctly generate selected base styles selectors.', () => {
    return generatePluginCssV2({ colors: ['rose'] }).then((css) => {
      expect(css).not.toContain(`[data-accent='sky']`);
    });
  });
});
