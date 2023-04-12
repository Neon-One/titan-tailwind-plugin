module.exports = {
    '.titan-form-element-container': {
        '@apply flex grow flex-col': {},

        // Label
        '.titan-form-element-label': {
            '@apply mr-3 box-border h-8 py-2 font-titan-heading text-sm font-normal text-titan-purple': {},
        },
        '&.titan-form-element-large': {
            '.titan-form-element-label': {
                '@apply h-10 text-base': {},
            },
        },
        '&.titan-form-element-inline': {
            '@apply flex grow flex-row': {},
            '.titan-form-element-label': {
                '@apply mr-2 flex whitespace-nowrap py-2': {},
            },
        },
        '&.titan-form-element-focus': {
            '.titan-form-element-label': {
                color: 'var(--form-color-primary)',
            },
        },
        '&.titan-form-element-valid': {
            '.titan-form-element-label': {
                color: 'var(--form-color-valid)',
            },
        },
        '&.titan-form-element-error': {
            '.titan-form-element-label': {
                color: 'var(--form-color-error)',
            },
        },
    },
}
