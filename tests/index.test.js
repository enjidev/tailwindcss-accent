const { generatePluginCss, generatePluginCssV2 } = require('./helpers');

describe('with tailwindcss v3', () => {
  it('correctly generate base styles selectors.', () => {
    return generatePluginCss().then((css) => {
      expect(css).toContain(`[data-accent='sky']`);
    });
  });

  it('correctly generate selected base styles selectors.', () => {
    return generatePluginCss({ colors: ['rose'] }).then((css) => {
      expect(css).toContain(`[data-accent='rose']`);
      expect(css).not.toContain(`[data-accent='sky']`);
    });
  });

  it('correctly generate selected base styles selectors with root.', () => {
    return generatePluginCss({ colors: ['sky', 'rose'], root: 'sky' }).then(
      (css) => {
        expect(css).toContain(`:root, [data-accent='sky']`);
        expect(css).not.toContain(`:root, [data-accent='rose']`);
      }
    );
  });

  it('should generate root styles.', () => {
    return generatePluginCss({ root: 'sky' }).then((css) => {
      expect(css).toContain(`:root, [data-accent='sky']`);
    });
  });

  it('should not generate root styles.', () => {
    return generatePluginCss({ colors: ['rose'], root: 'sky' }).then((css) => {
      expect(css).not.toContain(`:root, [data-accent='sky']`);
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
      expect(css).toContain(`[data-accent='rose']`);
      expect(css).not.toContain(`[data-accent='sky']`);
    });
  });

  it('correctly generate selected base styles selectors with root.', () => {
    return generatePluginCssV2({ colors: ['sky', 'rose'], root: 'sky' }).then(
      (css) => {
        expect(css).toContain(`:root, [data-accent='sky']`);
        expect(css).not.toContain(`:root, [data-accent='rose']`);
      }
    );
  });

  it('should generate root styles.', () => {
    return generatePluginCss({ root: 'sky' }).then((css) => {
      expect(css).toContain(`:root, [data-accent='sky']`);
    });
  });

  it('should not generate root styles.', () => {
    return generatePluginCss({ colors: ['rose'], root: 'sky' }).then((css) => {
      expect(css).not.toContain(`:root, [data-accent='sky']`);
    });
  });
});
