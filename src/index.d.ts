declare function plugin(
  options?: Partial<{ colors: string[]; root: string }>
): {
  handler: () => void;
};

declare namespace plugin {
  const __isOptionsFunction: true;
}

export = plugin;
