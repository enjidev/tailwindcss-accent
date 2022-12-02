# tailwindcss-accent

> Add dynamic accent color to your Tailwind CSS project.

Install the plugin from npm:

```
$ npm install tailwindcss-accent
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    // Optional. Your plugin might not have any options at all.
    accent: {
      // ...
      YOUR_PLUGIN_CUSTOM_OPTION: true,
      // ...
    },
  },
  variants: {
    // ...
    // Optional. Your plugin might not have any variants at all.
    accent: ['responsive'],
    // ...
  },
  plugins: [
    // ...
    require('tailwindcss-accent'),
    // ...
  ],
};
```

This plugin will generate following CSS:

```css
/* ... */
.example-utility-class {
  display: block;
}

.custom-utility-class {
  background-color: red;
}
/* ... */
```

## License

tailwindcss-accent is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
