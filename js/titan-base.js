const plugin = require('tailwindcss/plugin')
const titanButton = require('./titan-button.js')
const titanFormDropdown = require('./titan-form-dropdown.js')
const titanFormElement = require('./titan-form-element.js')
const titanHelperText = require('./titan-form-helper-text.js')
const titanTextInput = require('./titan-form-text-input.js')
const titanTextArea = require('./titan-form-text-area.js')

module.exports = plugin(({ addComponents }) => {
    addComponents(titanButton)
    addComponents(titanFormDropdown)
    addComponents(titanFormElement)
    addComponents(titanHelperText)
    addComponents(titanTextInput)
    addComponents(titanTextArea)
})
