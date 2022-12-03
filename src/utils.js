const convert = require('color-convert');

module.exports.hexToRgb = (hex) => {
  return convert.hex.rgb(hex).join(' ');
};

module.exports.withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};
