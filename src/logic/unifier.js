import calculator from './core/functional'
import getElById from '../utils/getElById'
import { Buttons } from './buttonsAndHandlers'

const dataInput = getElById('screen_data')
const buttonsEl = getElById('input_buttons')

dataInput.addEventListener('click', () => {
   const shared = calculator.expression[calculator.expression.length - 1]
   if (shared && shared['twoValue']) {
      shared['change'] = !shared['change']
   }
})

Object.keys(Buttons).forEach(item => {
   const button = Buttons[item]
   button.el.addEventListener('click', button.handler)
})

buttonsEl.addEventListener('click', () => {
   dataInput.scrollLeft = dataInput.scrollWidth
   dataInput.innerHTML = calculator.getUI()
})
