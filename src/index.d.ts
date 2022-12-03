import type { DefaultColors } from 'tailwindcss/types/generated/colors';

type Colors = keyof Omit<
  DefaultColors,
  'inherit' | 'current' | 'transparent' | 'black' | 'white'
>;

declare function plugin<T extends Colors>(
  options?: Partial<{
    /**
     * Only include specific color(s).
     */
    colors: Array<T>;

    /**
     * Set selected color as :root accent color.
     *
     * If the colors option is specified, the :root color MUST be the one that comes in the colors option.
     */
    root: T;
  }>
): {
  handler: () => void;
};

declare namespace plugin {
  const __isOptionsFunction: true;
}

export = plugin;
