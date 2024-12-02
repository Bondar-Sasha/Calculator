import calculator from './core/actions'
import getElById from '../utils/getElById'
import { interactiveButtons } from './dataAndValues'

const dataInput = getElById('screen_data')
const buttonsEl = getElById('input_buttons')

Object.keys(interactiveButtons).forEach(item => {
   const buttonInf = interactiveButtons[item]
   if (Object.prototype.hasOwnProperty.call(buttonInf, 'value')) {
      buttonInf.el.addEventListener('click', () => {
         buttonInf.handler(buttonInf.value)
      })
   } else {
      buttonInf.el.addEventListener('click', () => {
         buttonInf.handler()
      })
   }
})

buttonsEl.addEventListener('click', e => {
   if (e.target.tagName === 'BUTTON') {
      dataInput.scrollLeft = dataInput.scrollWidth
      dataInput.textContent = calculator.getData()
   }
})
