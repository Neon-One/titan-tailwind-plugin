module.exports = {
    '.titan-form-element-container': {
        '.titan-text-input-container': {
            '@apply relative flex flex-wrap items-center': {},

            // Removes up/down arrows in Chrome
            "input[type='number']": {
                '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                    '@apply m-0 appearance-none': {},
                },
            },

            '.titan-input-append, .titan-text-input-prepend': {
                '@apply box-border flex items-center border border-solid border-titan-purple-100 bg-titan-gray-200 px-3 py-2 text-center font-titan-body text-sm text-titan-purple':
                    {},
                height: 'var(--text-input-height)',
                'border-radius': 'var(--text-input-radius)',
            },
            '.titan-text-input-prepend': {
                '@apply rounded rounded-tr-none rounded-br-none border-r-0': {},
            },
            '.titan-input-append': {
                '@apply rounded rounded-tl-none rounded-bl-none border-l-0 bg-white': {},
            },

            '.titan-text-input': {
                '@apply relative m-0 box-border flex w-full flex-1 rounded border border-solid border-titan-purple-100 bg-white py-2 px-3 font-titan-heading text-sm text-titan-dark disabled:cursor-not-allowed disabled:border-titan-purple-100 disabled:bg-titan-gray-200 outline-none':
                    {},
                height: 'var(--text-input-height)',
                border: 'var(--form-border-size) var(--form-border-type) var(--form-border-color-default)',
                'border-radius': 'var(--text-input-radius)',


                '&:not(:first-child)': {
                    '@apply rounded-l-none': {},
                },
                '&:not(:last-child)': {
                    '@apply rounded-r-none': {},
                },
                '&::placeholder': {
                    '@apply font-normal text-titan-purple opacity-100': {},
                },
                '&.titan-form-element-valid': {
                    'border-color': 'var(--form-border-color-valid)',
                },
                '&.titan-form-element-error': {
                    'border-color': 'var(--form-border-color-error)',
                },
                '&:focus, &:active, &.titan-form-element-focus': {
                    'border-color': 'var(--form-border-color-primary)',
                },
            },
            '.titan-text-input-icon': {
                '@apply absolute top-1/2 right-4 h-[14px] w-[14px] -translate-y-1/2': {},
            },
        },

        // Overrides
        '&.titan-form-element-large': {
            '.titan-input-append, .titan-text-input-prepend, .titan-text-input': {
                '@apply h-10 text-base': {},
            },
        },
        '&.titan-form-element-inline': {
            '.titan-form-element-collapsable-container': {
                '@apply flex grow flex-col': {},
            },
        },
        '&.titan-form-element-focus': {
            '.titan-input-append, .titan-text-input-prepend': {
                'border-color': 'var(--form-border-color-primary)',
            },
        },
        '&.titan-form-element-valid': {
            '.titan-text-input': {
                'border-color': 'var(--form-border-color-valid)',
            },
        },
        '&.titan-form-element-error': {
            '.titan-text-input': {
                'border-color': 'var(--form-border-color-error)',
            },
        },
        '&.disabled': {
            '.titan-text-input': {
                '@apply border-titan-purple': {},
            },
        },
        '&.titan-form-input-icon-search': {
            '&.titan-text-input-icon-left': {
                '.titan-text-input-icon': {
                    '@apply right-auto left-4': {},
                },
                '.titan-text-input': {
                    '@apply pl-10': {},
                },
            },
            '.titan-text-input': {
                '@apply pr-10': {},
            },
        },
    },
}
