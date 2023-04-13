module.exports = {
    '.titan-form-element-container': {
        '.titan-dropdown-container': {
            '@apply relative flex w-full flex-wrap items-center': {},

            '.titan-dropdown-input': {
                '@apply relative m-0 flex w-full flex-1 cursor-pointer rounded border border-solid border-titan-purple-100 bg-white py-2 px-3 font-titan-heading text-sm text-titan-dark':
                    {},
                height: 'var(--text-input-height)',
                border: 'var(--form-border-size) var(--form-border-type) var(--form-border-color-default)',

                '&::placeholder': {
                    '@apply font-normal text-titan-purple opacity-100': {},
                },
            },

            '.caret': {
                '@apply absolute top-1/2 right-4 -translate-y-1/2 text-[0]': {},
                img: {
                    '@apply transition-all duration-[0.25s] ease-in-out': {},
                },
            },

            '.titan-dropdown': {
                '@apply z-40 inline-block w-full rounded border border-solid border-titan-gray-200 bg-white font-titan-body text-sm shadow':
                    {},
                '&.hidden': {
                    // Can not use @apply here for some reason it breaks the plugin in Events - no clue why
                    // '@apply absolute !-top-[99999999px] !-left-[-99999999px]': {},
                    position: 'absolute',
                    top: '-99999999px',
                    left: '-99999999px',
                },

                '.titan-dropdown-scrollable-section': {
                    '@apply overflow-y-auto py-2': {},
                    'scrollbar-color': 'var(--color-titan-gray-600) white',
                    'scrollbar-width': 'thin',
                    '&::-webkit-scrollbar': {
                        '@apply h-full w-[5px]': {},
                        '&-track': {
                            '@apply rounded bg-white': {},
                        },
                        '&-thumb': {
                            '@apply rounded bg-titan-gray-600': {},
                        },
                    },

                    '.titan-dropdown-item': {
                        '@apply flex cursor-pointer items-center justify-start py-2 px-3 text-titan-dark': {},
                        '&:hover': {
                            'background-color': 'var(--dropdown-item-background-color-hover)',
                            'font-weight': 'var(--dropdown-item-font-weight-hover)',
                        },
                        '&.disabled': {
                            '@apply cursor-default !text-titan-gray-600 hover:bg-white': {},
                        },
                        '&.warning': {
                            color: 'var(--form-color-warning)',
                        },
                        '&.danger': {
                            color: 'var(--form-color-error)',
                        },
                        '.titan-disabled-message': {
                            '@apply text-xs': {},
                        },
                    },
                },

                '.titan-arrow': {
                    '@apply invisible absolute !left-auto right-5 h-2 w-2 bg-inherit': {},
                    transform: 'translate3d(0px, 0px, 0px) !important',

                    '&::before': {
                        '@apply visible absolute !right-0 h-2 w-2 rotate-45 bg-inherit': {},
                        content: '',
                    },
                },

                ".titan-dropdown[data-popper-placement^='bottom']": {
                    '> .titan-arrow': {
                        '@apply -top-1': {},

                        '&::before': {
                            '@apply border border-b-0 border-r-0 border-solid border-titan-gray-200': {},
                        },
                    },
                },
            },
        },

        /* Overrides */
        '&.titan-form-element-large': {
            '.titan-dropdown-input': {
                '@apply h-10 text-base': {},
            },
        },

        '&.titan-form-element-error': {
            '.titan-dropdown-input': {
                'border-color': 'var(--form-border-color-error)',
            },
        },

        '&.titan-form-element-focus': {
            '.titan-dropdown-input': {
                '@apply shadow-none outline-none': {},
                'border-color': 'var(--form-border-color-primary)',
            },
        },

        '&.titan-form-element-valid': {
            '.titan-dropdown-input': {
                'border-color': 'var(--form-border-color-valid)',
            },
        },

        '&.titan-form-element-search': {
            '.titan-dropdown-input': {
                '@apply cursor-text': {},
            },
        },

        '&:disabled, &[disabled], &.disabled': {
            '.titan-dropdown-input': {
                '@apply cursor-not-allowed border-titan-purple-100 bg-titan-gray-200': {},
            },

            '.caret': {
                '@apply cursor-not-allowed': {},
            },
        },
    },
}
