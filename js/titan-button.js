module.exports = {
    // Base Class
    '.titan-button': {
        '@apply flex cursor-pointer items-center justify-center border px-3 font-titan-heading outline-none transition-all duration-200 disabled:cursor-not-allowed':
            {},
        height: '2rem',
        'border-radius': 'var(--btn-border-radius)',
        '&.large': {
            '@apply text-lg': {},
            height: '2.5rem',
        },
    },

    // Adjust border thickness on outline type buttons
    '.button-fill-outline': {
        'border-width': 'var(--btn-border-width)',
    },

    // Theme: Primary + Solid
    '.button-type-primary.button-fill-solid': {
        '@apply hover:shadow-btn-lg active:shadow-none disabled:border-titan-purple-200 disabled:bg-titan-purple-200':
            {},
        'background-color': 'var(--btn-primary-solid-bg)',
        color: 'var(--btn-primary-solid-text)',
        'border-color': 'var(--btn-primary-solid-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-primary-solid-hover-bg)',
            color: 'var(--btn-primary-solid-hover-text)',
            'border-color': 'var(--btn-primary-solid-hover-border)',
            '&:disabled': {
                '@apply border-titan-purple-200 bg-titan-purple-200 shadow-none': {},
            },
        },
    },
    // Theme: Primary + Outline
    '.button-type-primary.button-fill-outline': {
        '@apply hover:shadow-btn-lg active:shadow-none disabled:border-titan-purple-200 disabled:text-titan-purple-200':
            {},
        'background-color': 'var(--btn-primary-outline-bg)',
        color: 'var(--btn-primary-outline-text)',
        'border-color': 'var(--btn-primary-outline-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-primary-outline-hover-bg)',
            color: 'var(--btn-primary-outline-hover-text)',
            'border-color': 'var(--btn-primary-outline-hover-border)',
            '&:disabled': {
                '@apply border-titan-purple-200 bg-white text-titan-purple-200 shadow-none': {},
            },
        },
    },
    // Theme: Primary + Borderless
    '.button-type-primary.button-fill-borderless': {
        '@apply border-transparent bg-white hover:underline disabled:text-titan-purple-200': {},
        'background-color': 'var(--btn-primary-borderless-bg)',
        color: 'var(--btn-primary-borderless-text)',
        'border-color': 'var(--btn-primary-borderless-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-primary-borderless-hover-bg)',
            color: 'var(--btn-primary-borderless-hover-text)',
            'border-color': 'var(--btn-primary-borderless-hover-border)',
            '&:disabled': {
                '@apply border-transparent bg-transparent text-titan-purple-200 no-underline shadow-none': {},
            },
        },
    },

    // Theme: Secondary + Solid
    '.button-type-secondary.button-fill-solid': {
        '@apply hover:shadow-btn-lg active:shadow-none disabled:bg-titan-purple-200 disabled:text-titan-purple-200': {},
        'background-color': 'var(--btn-secondary-solid-bg)',
        color: 'var(--btn-secondary-solid-text)',
        'border-color': 'var(--btn-secondary-solid-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-secondary-solid-hover-bg)',
            color: 'var(--btn-secondary-solid-hover-text)',
            'border-color': 'var(--btn-secondary-solid-hover-border)',
            '&:disabled': {
                '@apply border-titan-purple-200 bg-titan-purple-200 shadow-none': {},
            },
        },
    },
    // Theme: Secondary + Outline
    '.button-type-secondary.button-fill-outline': {
        '@apply bg-white hover:shadow-btn-lg active:shadow-none disabled:border-titan-purple-200 disabled:bg-white disabled:text-titan-purple-200':
            {},
        'background-color': 'var(--btn-secondary-outline-bg)',
        color: 'var(--btn-secondary-outline-text)',
        'border-color': 'var(--btn-secondary-outline-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-secondary-outline-hover-bg)',
            color: 'var(--btn-secondary-outline-hover-text)',
            'border-color': 'var(--btn-secondary-outline-hover-border)',
            '&:disabled': {
                '@apply border-titan-purple-200 bg-white text-titan-purple-200 shadow-none': {},
            },
        },
    },
    // Theme: Secondary + Borderless
    '.button-type-secondary.button-fill-borderless': {
        '@apply border-transparent bg-white hover:underline disabled:border-transparent disabled:bg-white disabled:text-titan-purple-200':
            {},
        'background-color': 'var(--btn-secondary-borderless-bg)',
        color: 'var(--btn-secondary-borderless-text)',
        'border-color': 'var(--btn-secondary-borderless-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-secondary-borderless-hover-bg)',
            color: 'var(--btn-secondary-borderless-hover-text)',
            'border-color': 'var(--btn-secondary-borderless-hover-border)',
            '&:disabled': {
                '@apply border-transparent bg-transparent text-titan-purple-200 no-underline shadow-none': {},
            },
        },
    },

    // Theme: Error + Solid
    '.button-type-error.button-fill-solid': {
        '@apply hover:shadow-btn-lg active:shadow-none disabled:border-titan-purple-200 disabled:bg-titan-purple-200':
            {},
        'background-color': 'var(--btn-error-solid-bg)',
        color: 'var(--btn-error-solid-text)',
        'border-color': 'var(--btn-error-solid-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-error-solid-hover-bg)',
            color: 'var(--btn-error-solid-hover-text)',
            'border-color': 'var(--btn-error-solid-hover-border)',
            '&:disabled': {
                '@apply border-titan-purple-200 bg-titan-purple-200 shadow-none': {},
            },
        },
    },
    // Theme: Error + Outline
    '.button-type-error.button-fill-outline': {
        '@apply bg-white hover:shadow-btn-lg active:shadow-none disabled:border-titan-purple-200 disabled:bg-white disabled:text-titan-purple-200':
            {},
        'background-color': 'var(--btn-error-outline-bg)',
        color: 'var(--btn-error-outline-text)',
        'border-color': 'var(--btn-error-outline-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-error-outline-hover-bg)',
            color: 'var(--btn-error-outline-hover-text)',
            'border-color': 'var(--btn-error-outline-hover-border)',
            '&:disabled': {
                '@apply border-titan-purple-200 bg-white text-titan-purple-200 shadow-none': {},
            },
        },
    },
    // Theme: Error + Borderless
    '.button-type-error.button-fill-borderless': {
        '@apply border-transparent bg-white hover:underline disabled:text-titan-purple-200': {},
        'background-color': 'var(--btn-error-borderless-bg)',
        color: 'var(--btn-error-borderless-text)',
        'border-color': 'var(--btn-error-borderless-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-error-borderless-hover-bg)',
            color: 'var(--btn-error-borderless-hover-text)',
            'border-color': 'var(--btn-error-borderless-hover-border)',
            '&:disabled': {
                '@apply border-transparent bg-transparent text-titan-purple-200 no-underline shadow-none': {},
            },
        },
    },

    // Theme: Warning + Solid
    '.button-type-warning.button-fill-solid': {
        '@apply hover:shadow-btn-lg active:shadow-none disabled:border-titan-purple-200 disabled:bg-titan-purple-200':
            {},
        'background-color': 'var(--btn-warning-solid-bg)',
        color: 'var(--btn-warning-solid-text)',
        'border-color': 'var(--btn-warning-solid-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-warning-solid-hover-bg)',
            color: 'var(--btn-warning-solid-hover-text)',
            'border-color': 'var(--btn-warning-solid-hover-border)',
            '&:disabled': {
                '@apply border-titan-purple-200 bg-titan-purple-200 shadow-none': {},
            },
        },
    },
    // Theme: Warning + Outline
    '.button-type-warning.button-fill-outline': {
        '@apply bg-white hover:shadow-btn-lg active:shadow-none disabled:border-titan-purple-200 disabled:bg-white disabled:text-titan-purple-200':
            {},
        'background-color': 'var(--btn-warning-outline-bg)',
        color: 'var(--btn-warning-outline-text)',
        'border-color': 'var(--btn-warning-outline-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-warning-outline-hover-bg)',
            color: 'var(--btn-warning-outline-hover-text)',
            'border-color': 'var(--btn-warning-outline-hover-border)',
            '&:disabled': {
                '@apply border-titan-purple-200 bg-white text-titan-purple-200 shadow-none': {},
            },
        },
    },
    // Theme: Warning + Borderless
    '.button-type-warning.button-fill-borderless': {
        '@apply border-transparent bg-white hover:underline disabled:text-titan-purple-200': {},
        'background-color': 'var(--btn-warning-borderless-bg)',
        color: 'var(--btn-warning-borderless-text)',
        'border-color': 'var(--btn-warning-borderless-border)',
        '&:hover, &:focus, &:active': {
            'background-color': 'var(--btn-warning-borderless-hover-bg)',
            color: 'var(--btn-warning-borderless-hover-text)',
            'border-color': 'var(--btn-warning-borderless-hover-border)',
            '&:disabled': {
                '@apply border-transparent bg-transparent text-titan-purple-200 no-underline shadow-none': {},
            },
        },
    },
}
