# tailwindcss-accent

> Add dynamic accent color to your Tailwind CSS project.

This plugin creates a dynamic accent color using CSS custom properties based on the Tailwind CSS default color palette.

Using this plugin will add an `accent` color classes to your Tailwind CSS project, for example: `bg-accent-500`, `dark:outline-accent-200`, etc.

## Installation

Install the plugin from npm:

```
$ npm install tailwindcss-accent
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    // ...
    require('tailwindcss-accent')({
      colors: ['violet', 'blue'], // (OPTIONAL) Only include specific color(s).
    }),
    // ...
  ],
};
```

> NOTE: Make sure to only include the colors you use to make the CSS output file size smaller.

## Available Accent Colors

Possible values are:

`slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, and `rose`.

> Check the Tailwind CSS default [color palette](https://tailwindcss.com/docs/customizing-colors) for more detailed and updated information.

## Usage

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

> Check the [real-world example](#real-world-example) for a more practical implementation.

## Real-world Example

Check this out on my personal site [repository](https://github.com/enjidev/enji.dev) ([enji.dev](https://enji.dev)).

## License

`tailwindcss-accent` is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
