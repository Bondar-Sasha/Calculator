import lastEl from '../../utils/lastEl.js'
import count from './count.js'
import Calculator from './initialModel.js'
import validation from './validation/handler.js'
import rules from './validation/rules.js'

// import evaluateExpression from './count.js'
// import validation from './validation/handler.js'
// import rules from './validation/rules.js'

class CalculatorActions extends Calculator {
   getUI = () => {
      this.setUI()
      return this.UI.join('')
   }
   setUI = () => {
      this.UI = []
      this.expression.forEach(item => {
         if (item.operation === 'null') {
            return false
         } else if (item.operation === 'sqrt') {
            this.UI.push(
               item.change
                  ? `<span class="sqrt"><sup class="sup">${item.values[0] ?? ''}</sup>&radic;<span>${item.values[1] ?? ''}</span></span>`
                  : `<span class="sqrt"><sup>${item.values[0] ?? ''}</sup>&radic;<span class="sqrt_base">${item.values[1] ?? ''}</span></span>`,
            )
         } else if (item.operation === 'degree') {
            this.UI.push(
               item.change
                  ? `<span class="degree"><span >${item.values[1] ?? ''}</span><sup class="sup">${item.values[0] ?? ''}</sup></span>`
                  : `<span class="degree"><span class="sup_base">${item.values[1] ?? ''}</span><sup>${item.values[0] ?? ''}</sup></span>`,
            )
         } else {
            this.UI.push(item.values[0] ?? '' + item.icon)
         }
      })
   }

   clear = () => {
      this.expression = [{ operation: 'null' }]
      this.UI = []
      return true
   }
   setValue = number => {
      return () => {
         if (!validation(this.expression, rules.setNumber)) {
            return false
         }
         if (lastEl(this.expression).operation === 'null') {
            this.expression.push({
               icon: '',
               operation: 'number',
               values: [number.toString()],
            })
            return true
         }
         if (lastEl(this.expression)['twoValue']) {
            const values = lastEl(this.expression).values
            if (lastEl(this.expression)['change']) {
               values[0] ? (values[0] += number.toString()) : (values[0] = number.toString())

               return true
            } else {
               values[1] ? (values[1] += number.toString()) : (values[1] = number.toString())

               return true
            }
         }
         if (lastEl(this.expression).operation !== 'number') {
            this.expression.push({
               icon: '',
               operation: 'number',
               values: [number.toString()],
            })
            return true
         }
         lastEl(this.expression).values[0] += number.toString()
         return true
      }
   }

   change_sign = () => {
      if (!validation(this.expression, rules.change_sign)) {
         return false
      }
      if (this.expression[this.expression.length - 2].operation === 'plus') {
         this.expression[this.expression.length - 2].operation = 'minus'
         this.expression[this.expression.length - 2].icon = '-'
         return true
      }
      if (this.expression[this.expression.length - 2].operation === 'minus') {
         this.expression[this.expression.length - 2].operation = 'plus'
         this.expression[this.expression.length - 2].icon = '+'

         return true
      }
      if (lastEl(this.expression).values[0][0] === '-') {
         lastEl(this.expression).values[0] = lastEl(this.expression).values[0].slice(1)
         return true
      }
      lastEl(this.expression).values[0] = '-' + lastEl(this.expression).values[0]
      return true
   }

   percent = () => {
      if (!validation(this.expression, rules.percent)) {
         return false
      }
      if (this.expression.length === 4) {
         this.expression = [{ operation: 'null' }, { icon: '', operation: 'number', values: [count(this.expression)] }]
      }
      this.expression.push({
         icon: '%',
         operation: 'percent',
         values: [],
      })
      return true
   }

   division = () => {
      if (!validation(this.expression, rules.divide)) {
         return false
      }
      if (this.expression.length === 4) {
         this.expression = [{ operation: 'null' }, { icon: '', operation: 'number', values: [count(this.expression)] }]
      }
      this.expression.push({
         icon: '/',
         operation: 'divide',
         values: [],
      })
      return true
   }

   multiply = () => {
      if (!validation(this.expression, rules.multiply)) {
         return false
      }
      if (this.expression.length === 4) {
         this.expression = [{ operation: 'null' }, { icon: '', operation: 'number', values: [count(this.expression)] }]
      }
      this.expression.push({
         icon: '*',
         operation: 'multiply',
         values: [],
      })
      return true
   }

   minus = () => {
      if (!validation(this.expression, rules.minus)) {
         return false
      }
      if (this.expression.length === 4) {
         this.expression = [{ operation: 'null' }, { icon: '', operation: 'number', values: [count(this.expression)] }]
      }

      if (lastEl(this.expression) === 'plus') {
         lastEl(this.expression).operation = 'minus'
         return true
      }

      this.expression.push({
         icon: '-',
         operation: 'minus',
         values: [],
      })
      return true
   }

   sum = () => {
      if (!validation(this.expression, rules.plus)) {
         return false
      }
      if (this.expression.length === 4) {
         this.expression = [{ operation: 'null' }, { icon: '', operation: 'number', values: [count(this.expression)] }]
      }

      if (lastEl(this.expression) === 'minus') {
         lastEl(this.expression).operation = 'plus'
         return true
      }

      this.expression.push({
         icon: '+',
         operation: 'plus',
         values: [],
      })
      return true
   }

   dot = () => {
      if (!validation(this.expression, rules.dot)) {
         return false
      }
      lastEl(this.expression).values[0] += '.'
      return true
   }

   equal = () => {
      if ([1, 3].includes(this.expression.length)) {
         return false
      }
      this.expression = [{ operation: 'null' }, { icon: '', operation: 'number', values: [count(this.expression)] }]
      return true
   }
   cancel = () => {}
   MC = () => {
      this.memory = ''
      alert(this.memory)
      return true
   }
   MR = () => {
      if (!this.memory) {
         return false
      }
      this.expression = [{ operation: 'null' }, { icon: '', operation: 'number', values: [this.memory] }]
      return true
   }
   M_MINUS = () => {
      if (!(this.expression.length === 2 && this.expression[1].operation === 'number')) {
         return false
      }

      this.memory -= Number(this.expression[1].values[0])
      alert(this.memory)
      return true
   }
   M_PLUS = () => {
      if (!(this.expression.length === 2 && this.expression[1].operation === 'number')) {
         return false
      }

      this.memory += Number(this.expression[1].values[0])
      alert(this.memory)
      return true
   }
   factorial = () => {
      if (!validation(this.expression, rules.factorial)) {
         return false
      }
      if (this.expression.length === 4) {
         this.expression = [{ operation: 'null' }, { icon: '', operation: 'number', values: [count(this.expression)] }]
      }

      this.expression.push({
         icon: '!',
         operation: 'factorial',
         values: [],
      })
   }
   _1_x = () => {
      if (!validation(this.expression, rules._1_x)) {
         return false
      }
      this.setValue(1)()
      this.division()
      return true
   }
   ten_x = () => {
      if (!validation(this.expression, rules.degree)) {
         return false
      }
      this.expression.push({
         icon: '',
         operation: 'degree',
         twoValue: true,
         change: true,
         values: [null, '10'],
      })

      return true
   }
   degree = data => {
      return () => {
         if (!validation(this.expression, rules.degree)) {
            return false
         }
         if (data) {
            this.expression.push({
               icon: '',
               operation: 'degree',
               twoValue: true,
               change: false,
               values: [data.toString()],
            })

            return true
         } else {
            this.expression.push({
               icon: '',
               operation: 'degree',
               twoValue: true,
               change: false,
               values: [],
            })

            return true
         }
      }
   }
   sqrt = data => {
      return () => {
         if (!validation(this.expression, rules.sqrt)) {
            return false
         }
         if (data) {
            this.expression.push({
               icon: '',
               operation: 'sqrt',
               twoValue: true,
               change: false,
               values: [data.toString()],
            })

            return true
         } else {
            this.expression.push({
               icon: '',
               operation: 'sqrt',
               twoValue: true,
               change: true,
               values: [],
            })

            return true
         }
      }
   }

   getActions = () => {
      // eslint-disable-next-line no-unused-vars
      const { getUI, setUI, ...result } = this
      return result
   }
}

export default new CalculatorActions()
