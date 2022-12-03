const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const omit = require('lodash/omit');
const pick = require('lodash/pick');
const hasIn = require('lodash/hasIn');
const isArray = require('lodash/isArray');
const isEmpty = require('lodash/isEmpty');
const forEach = require('lodash/forEach');

const { hexToRgb, toKebabCase, withOpacityValue } = require('./utils');

module.exports = plugin.withOptions(
  (options = {}) => {
    let defaultColor = '';

    // Omit unused colors.
    let accentColors = omit(colors, [
      'black',
      'white',
      'inherit',
      'current',
      'transparent',
    ]);

    // Only pick colors based on colors option.
    if (options.colors && isArray(options.colors) && !isEmpty(options.colors)) {
      accentColors = pick(accentColors, options.colors);
    }

    // Set default root color.
    if (options.root && !isEmpty(options.root)) {
      if (hasIn(accentColors, options.root)) {
        defaultColor = options.root;
      }
    }

    return ({ addBase }) => {
      const baseStyles = {};

      forEach(accentColors, (colorShades, name) => {
        let selector;

        if (name === defaultColor) {
          selector = `:root, [data-accent='${toKebabCase(name)}']`;
        } else {
          selector = `[data-accent='${toKebabCase(name)}']`;
        }

        baseStyles[selector] = {};
        forEach(colorShades, (value, shade) => {
          const cssVar = `--color-accent-${shade}`;
          baseStyles[selector][cssVar] = hexToRgb(value);
        });
      });

      // Registering new base styles
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
