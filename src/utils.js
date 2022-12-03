const convert = require('color-convert');
const kebabCase = require('kebab-case');

module.exports.hexToRgb = function (hex) {
  return convert.hex.rgb(hex).join(' ');
};

module.exports.toKebabCase = function (string) {
  return kebabCase(string);
};

module.exports.withOpacityValue = function (variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};
