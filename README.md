# Titan Tailwind Plugin

## Installation Instructions

Add this to your package.json devDependencies block:

```
"titan-tailwind-plugin": "github:Neon-One/titan-tailwind-plugin#main",
```

Run `npm update`

Update your tailwind.config.js:

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

## Important note about using in projects with tag prefixing

> If you plan to use this package in a repo that uses a Tailwind prefix config, it is worth noting that this will break the Tailwind IntelliSense extension in VS Code.

You also will need to add the following code when importing the pluging into your config (making sure to update with your own prefix tags - where "tw-" is used in this example):

```
plugins: [
    titanBase,

    // Since our Tailwind plugin is written without tw-prefixes, this is needed to add them in during the build.
    // Obviously this can be removed along with the tw-prefix once we are off of Bootstrap
    function ({ addComponents, config }) {
        titanBase.handler({
            addComponents: (components) => {
                const prefixedComponents = {};

                for (const [key, value] of Object.entries(components)) {
                    const newKey = key.replace(/\./g, '.tw-');
                    let newValue = JSON.parse(JSON.stringify(value));

                    if (newValue['@apply']) {
                        newValue['@apply'] = newValue['@apply']
                            .split(' ')
                            .map((cls) => {
                                return cls.startsWith('tw-') ? cls : `tw-${cls}`;
                            })
                            .join(' ');
                    }

                    prefixedComponents[newKey] = newValue;
                }

                addComponents(prefixedComponents);
            },
            config,
        });
    },
],
```
