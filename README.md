# tailwindcss-accent

> Add dynamic accent color to your Tailwind CSS project.

This plugin creates a dynamic accent color using CSS custom properties based on the Tailwind CSS default color palette.

Using this plugin will add an `accent` color classes to your Tailwind CSS project, for example: `bg-accent-500`, `dark:outline-accent-200`, etc.

Tested with Tailwind CSS v2 and v3.

## Usage

Install the plugin from npm:

```
$ npm install tailwindcss-accent
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-accent')({
      // REQUIRED, include specific color(s).
      colors: ['violet', 'blue'],
      // OPTIONAL, set color from colors option as :root accent color.
      root: 'blue',
      // OPTIONAL, set prefix for css variables name. default to 'tw-ta' (e.g: --tw-ta-accent-200)
      cssVarsPrefix: 'tw-plugin', // result: --tw-plugin-accent-200
    }),
  ],
};
```

## Available Colors

Check the Tailwind CSS default [color palette](https://tailwindcss.com/docs/customizing-colors).

## Example

Add `data-accent` attribute to parent element, for example: `html` element.

```html
<html data-accent="violet"></html>
```

Let's use the `accent` color class on our component.

```html
<div class="text-accent-400">Hello, World!</div>
```

Note that based on the closest parent `data-accent` value, the current component will have a **violet-400** text color.

Then, somewhere on the button's click event:

```js
// change the data-accent html attribute value to blue
document.documentElement.setAttribute('data-accent', 'blue');
```

The component will automatically change the text color from **violet-400** to **blue-400**.

## Real-world Example

Check this out on my personal site [repository](https://github.com/enjidev/enji.dev) ([enji.dev](https://enji.dev)).

## License

`tailwindcss-accent` is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
