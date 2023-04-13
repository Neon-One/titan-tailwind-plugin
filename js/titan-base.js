import { plugin } from 'tailwindcss'
import titanButton from './titan-button.js'
import titanFormDropdown from './titan-form-dropdown.js'
import titanFormElement from './titan-form-element.js'
import titanHelperText from './titan-form-helper-text.js'
import titanTextInput from './titan-form-text-input.js'
import titanTextArea from './titan-form-text-area.js'

module.exports = plugin(({ addComponents }) => {
    addComponents(titanButton)
    addComponents(titanFormDropdown)
    addComponents(titanFormElement)
    addComponents(titanHelperText)
    addComponents(titanTextInput)
    addComponents(titanTextArea)
})
