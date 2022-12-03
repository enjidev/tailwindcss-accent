const { generatePluginCss, generatePluginCssV2 } = require('./helpers');

describe('with tailwindcss v3', () => {
  it('returns nothing if colors option is not specified.', () => {
    return generatePluginCss().then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if colors option is empty string.', () => {
    return generatePluginCss({ colors: '' }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if colors option is empty array.', () => {
    return generatePluginCss({ colors: [] }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if colors option is array with not available colors.', () => {
    return generatePluginCss({ colors: ['maroon'] }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if root option is specified and colors option is not specified.', () => {
    return generatePluginCss({ root: 'sky' }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('correctly generate css custom properties.', () => {
    return generatePluginCss({ colors: ['rose'] }).then((css) => {
      expect(css).toContain(`--tw-ta-accent-500`);
    });
  });

  it('correctly generate customized css custom properties.', () => {
    return generatePluginCss({ colors: ['rose'], cssVarsPrefix: 'color' }).then(
      (css) => {
        expect(css).toContain(`--color-accent-500`);
      }
    );
  });

  it('correctly generate selected base style selectors.', () => {
    return generatePluginCss({ colors: ['rose'] }).then((css) => {
      expect(css).toContain(`[data-accent='rose']`);
      expect(css).not.toContain(`[data-accent='sky']`);
    });
  });

  it('correctly generate selected base style selectors with root.', () => {
    return generatePluginCss({ colors: ['sky', 'rose'], root: 'sky' }).then(
      (css) => {
        expect(css).toContain(`:root, [data-accent='sky']`);
        expect(css).not.toContain(`:root, [data-accent='rose']`);
      }
    );
  });
});

describe('with tailwindcss v2', () => {
  it('returns nothing if colors option is not specified.', () => {
    return generatePluginCssV2().then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if colors option is empty string.', () => {
    return generatePluginCssV2({ colors: '' }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if colors option is empty array.', () => {
    return generatePluginCssV2({ colors: [] }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if colors option is an array with not available colors.', () => {
    return generatePluginCssV2({ colors: ['maroon'] }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('returns nothing if root option is specified and colors option is not specified.', () => {
    return generatePluginCssV2({ root: 'sky' }).then((css) => {
      expect(css).toEqual('');
    });
  });

  it('correctly generate css custom properties.', () => {
    return generatePluginCssV2({ colors: ['rose'] }).then((css) => {
      expect(css).toContain(`--tw-ta-accent-500`);
    });
  });

  it('correctly generate customized css custom properties.', () => {
    return generatePluginCssV2({
      colors: ['rose'],
      cssVarsPrefix: 'color',
    }).then((css) => {
      expect(css).toContain(`--color-accent-500`);
    });
  });

  it('correctly generate selected base style selectors.', () => {
    return generatePluginCssV2({ colors: ['rose'] }).then((css) => {
      expect(css).toContain(`[data-accent='rose']`);
      expect(css).not.toContain(`[data-accent='sky']`);
    });
  });

  it('correctly generate selected base style selectors with root.', () => {
    return generatePluginCssV2({ colors: ['sky', 'rose'], root: 'sky' }).then(
      (css) => {
        expect(css).toContain(`:root, [data-accent='sky']`);
        expect(css).not.toContain(`:root, [data-accent='rose']`);
      }
    );
  });
});
