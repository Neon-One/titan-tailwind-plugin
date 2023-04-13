# Titan Tailwind Plugin

## Installation Instructions

Add this to your package.json devDependencies block:

```
"titan-tailwind-plugin": "github:Neon-One/titan-tailwind-plugin#main",
```

Run `npm update`

Update your tailwind.config.js...

Using modern import statements:

```
import titanTheme from 'titan-tailwind-plugin/js/titan-theme.js';
import titanBase from 'titan-tailwind-plugin/js/titan-base.js';

module.exports = {
    ...
    theme: {
        extend: {
            ...titanTheme,
        },
    },
    plugins: [titanBase],
};

```

Using require statements:

```
const titanTheme = require('titan-tailwind-plugin/js/titan-theme.js')

module.exports = {
    ...
    theme: {
        extend: {
            ...titanTheme,
        },
    },
    plugins: [
        require('titan-tailwind-plugin/js/titan-base.js')
    ],
}
```
