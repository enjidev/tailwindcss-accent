const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const omit = require('lodash/omit');
const pick = require('lodash/pick');
const isArray = require('lodash/isArray');
const isEmpty = require('lodash/isEmpty');
const forEach = require('lodash/forEach');

const { hexToRgb, withOpacityValue } = require('./utils');

const UNUSED_COLORS = ['black', 'white', 'inherit', 'current', 'transparent'];

module.exports = plugin.withOptions(
  (options = {}) => {
    // Return if the colors option needs to be specified.
    if (!options.colors && !isArray(options.colors) && isEmpty(options.colors))
      return () => {};

    // Pick selected colors.
    const accents = pick(omit(colors, UNUSED_COLORS), options.colors);

    return ({ addBase }) => {
      const baseStyles = {};

      forEach(accents, (colorShades, name) => {
        let selector = `[data-accent='${name}']`;

        if (name === options.root) {
          selector = `:root, [data-accent='${name}']`;
        }

        baseStyles[selector] = {};
        forEach(colorShades, (color, shade) => {
          const cssVar = `--color-accent-${shade}`;
          baseStyles[selector][cssVar] = hexToRgb(color);
        });
      });

      // Register new base styles.
      addBase(baseStyles);
    };
  },
  () => {
    return {
      theme: {
        extend: {
          colors: {
            accent: {
              50: withOpacityValue('--color-accent-50'),
              100: withOpacityValue('--color-accent-100'),
              200: withOpacityValue('--color-accent-200'),
              300: withOpacityValue('--color-accent-300'),
              400: withOpacityValue('--color-accent-400'),
              500: withOpacityValue('--color-accent-500'),
              600: withOpacityValue('--color-accent-600'),
              700: withOpacityValue('--color-accent-700'),
              800: withOpacityValue('--color-accent-800'),
              900: withOpacityValue('--color-accent-900'),
            },
          },
        },
      },
    };
  }
);
