const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const omit = require('lodash/omit');
const pick = require('lodash/pick');
const isArray = require('lodash/isArray');
const isEmpty = require('lodash/isEmpty');
const forEach = require('lodash/forEach');

const { hexToRgb, toKebabCase, withOpacityValue } = require('./utils');

module.exports = plugin.withOptions(
  function (options = {}) {
    let accentColors = omit(colors, [
      'black',
      'white',
      'inherit',
      'current',
      'transparent',
    ]);

    if (options.colors && isArray(options.colors) && !isEmpty(options.colors)) {
      accentColors = pick(accentColors, options.colors);
    }

    return function ({ addBase }) {
      const baseStyle = {};

      forEach(accentColors, (colorShades, name) => {
        const selector = `[data-accent='${toKebabCase(name)}']`;
        baseStyle[selector] = {};

        forEach(colorShades, (value, shade) => {
          const cssVar = `--color-accent-${shade}`;
          baseStyle[selector][cssVar] = hexToRgb(value);
        });
      });

      // Registering new base styles
      addBase(baseStyle);
    };
  },
  function () {
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
