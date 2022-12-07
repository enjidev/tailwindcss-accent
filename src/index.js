const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

const { hexToRgb, withOpacityValue } = require('./utils');

module.exports = plugin.withOptions(
  (options = {}) => {
    // Early return if the colors option isn't specified.
    if (!options.colors && !Array.isArray(options.colors)) return () => {};

    const cssVarsPrefix = options.cssVarsPrefix
      ? options.cssVarsPrefix
      : 'tw-ta';

    return ({ addBase }) => {
      const rootStyles = {};
      const baseStyles = {};

      const PICK_COLORS = options.colors;
      const OMIT_COLORS = [
        'black',
        'white',
        'inherit',
        'current',
        'transparent',
      ];

      Object.keys(colors).forEach((name) => {
        // Omit unused colors and pick selected colors.
        if (!OMIT_COLORS.includes(name) && PICK_COLORS.includes(name)) {
          const colorShades = colors[name];

          // Generate CSS Custom Properties for the current color.
          const styles = {};
          Object.keys(colorShades).forEach((shade) => {
            const cssVar = `--${cssVarsPrefix}-accent-${shade}`;
            styles[cssVar] = hexToRgb(colorShades[shade]);
          });

          // Add color to root or base styles.
          if (options.root === name) {
            rootStyles[`:root, [data-accent='${name}']`] = styles;
          } else {
            baseStyles[`[data-accent='${name}']`] = styles;
          }
        }
      });

      // Register new base styles. :root color comes first for CSS specificity.
      addBase(rootStyles);
      addBase(baseStyles);
    };
  },
  (options = {}) => {
    const cssVarsPrefix = options.cssVarsPrefix
      ? options.cssVarsPrefix
      : 'tw-ta';

    return {
      theme: {
        extend: {
          colors: {
            accent: {
              50: withOpacityValue(`--${cssVarsPrefix}-accent-50`),
              100: withOpacityValue(`--${cssVarsPrefix}-accent-100`),
              200: withOpacityValue(`--${cssVarsPrefix}-accent-200`),
              300: withOpacityValue(`--${cssVarsPrefix}-accent-300`),
              400: withOpacityValue(`--${cssVarsPrefix}-accent-400`),
              500: withOpacityValue(`--${cssVarsPrefix}-accent-500`),
              600: withOpacityValue(`--${cssVarsPrefix}-accent-600`),
              700: withOpacityValue(`--${cssVarsPrefix}-accent-700`),
              800: withOpacityValue(`--${cssVarsPrefix}-accent-800`),
              900: withOpacityValue(`--${cssVarsPrefix}-accent-900`),
            },
          },
        },
      },
    };
  }
);
