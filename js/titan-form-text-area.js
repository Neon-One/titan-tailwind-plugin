module.exports = {
    '.titan-form-element-container': {
        '.titan-text-area': {
            '@apply relative m-0 box-border w-full resize-y bg-white py-2 px-3 font-titan-heading text-sm text-titan-dark disabled:cursor-not-allowed disabled:border-titan-purple-100 disabled:bg-titan-gray-200':
                {},
            height: 'var(--text-area-height)',
            border: 'var(--form-border-size) var(--form-border-type) var(--form-border-color-default)',
            'border-radius': 'var(--text-area-border-radius)',
            '&::placeholder': {
                '@apply font-normal text-titan-purple opacity-100': {},
            },
        },

        // Overrides
        '&.titan-form-element-large': {
            '.titan-text-area': {
                '@apply h-10 text-base': {},
                height: 'var(--text-area-height)',
            },
        },
        '&.titan-form-element-error': {
            '.titan-text-area': {
                'border-color': 'var(--form-border-color-error)',
            },
        },
        '&.titan-form-element-focus': {
            '.titan-text-area': {
                '@apply shadow-none outline-none': {},
                'border-color': 'var(--form-border-color-primary)',
            },
        },
        '&.titan-form-element-valid': {
            '.titan-text-area': {
                'border-color': 'var(--form-border-color-valid)',
            },
        },
    },
}
