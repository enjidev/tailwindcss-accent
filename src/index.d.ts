import type { DefaultColors } from 'tailwindcss/types/generated/colors';

type Colors = keyof Omit<
  DefaultColors,
  'inherit' | 'current' | 'transparent' | 'black' | 'white'
>;

declare function plugin<T extends Colors>(
  options?: Partial<{ colors: Array<T>; root: T }>
): {
  handler: () => void;
};

declare namespace plugin {
  const __isOptionsFunction: true;
}

export = plugin;
