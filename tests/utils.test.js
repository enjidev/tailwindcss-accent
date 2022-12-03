const { hexToRgb, withOpacityValue } = require('../src/utils');

describe('hexToRgb()', () => {
  it('transform six digit hex.', () => {
    expect(hexToRgb('#ffffff')).toEqual('255 255 255');
  });

  it('transform three digit hex.', () => {
    expect(hexToRgb('#fff')).toEqual('255 255 255');
  });

  it('transform six digit hex without #.', () => {
    expect(hexToRgb('ffffff')).toEqual('255 255 255');
  });

  it('transform three digit hex without #.', () => {
    expect(hexToRgb('fff')).toEqual('255 255 255');
  });
});

describe('withOpacityValue()', () => {
  it('transform to modern rgb color format with opacity.', () => {
    expect(
      withOpacityValue('--color-accent-200')({
        opacityValue: 0.8,
      })
    ).toEqual('rgb(var(--color-accent-200) / 0.8)');
  });

  it('transform to modern rgb color format without opacity.', () => {
    expect(
      withOpacityValue('--color-accent-200')({
        opacityValue: undefined,
      })
    ).toEqual('rgb(var(--color-accent-200))');
  });
});
