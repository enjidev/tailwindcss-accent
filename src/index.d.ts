import type { DefaultColors } from 'tailwindcss/types/generated/colors';

type Colors = keyof Omit<
  DefaultColors,
  'inherit' | 'current' | 'transparent' | 'black' | 'white'
>;

declare function plugin<T extends Colors>(options: {
  /**
   * Include specific color(s).
   */
  colors: Array<T>;

  /**
   * Set color from colors option as :root accent color.
   */
  root?: T;

  /**
   * Set prefix for css variables name. Default to 'tw-ta'.
   */
  cssVarsPrefix?: string;
}): {
  handler: () => void;
};

declare namespace plugin {
  const __isOptionsFunction: true;
}

export = plugin;
