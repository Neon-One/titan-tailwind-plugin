module.exports = {
    '.titan-form-helper-text': {
        '@apply mt-2 flex pl-1 font-titan-heading text-xs text-titan-purple-400': {},
    },
    '.titan-form-element-valid': {
        '.titan-form-helper-text': {
            color: 'var(--form-color-valid)',
        },
    },
    '.titan-form-element-error': {
        '.titan-form-helper-text': {
            color: 'var(--form-color-error)',
        },
    },
}
