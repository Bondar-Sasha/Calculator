import formatNumber from '../../utils/formatNumber.js'
import lastEl from '../../utils/lastEl.js'
import count, { checkRes } from './count.js'
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
   intermediateCount = operationObj => {
      const { rewrite } = this.getExpressionHandlers(operationObj.operation)

      if (this.expression.length === 3) {
         rewrite([{ icon: '', operation: 'number', values: [count(this.expression)] }, operationObj])
         return true
      }
      return false
   }
   setUI = () => {
      this.UI = []
      this.expression.forEach(item => {
         if (item.operation === 'sqrt') {
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
            this.UI.push((item.values[0] ?? '') + item.icon)
         }
      })
   }
   getExpressionHandlers = history => ({
      add: item => {
         if (lastEl(this.expression)?.values[0] === 'error') {
            this.expression = []
            this.history = ''
            return false
         }
         this.expression = [...this.expression, item]
         this.history = history
         return true
      },
      rewrite: arr => {
         this.expression = arr
         this.history = history
         return true
      },
      change: newItem => {
         return index => {
            if (index) {
               this.expression[index] = newItem
            } else {
               this.expression[this.expression.length - 1] = newItem
            }
            this.history = history

            return true
         }
      },
   })

   clear = () => {
      const { rewrite } = this.getExpressionHandlers('')
      rewrite([])
      this.UI = []
      return true
   }
   setValue = number => {
      return () => {
         if (!validation(this.expression, rules.setNumber)) {
            return false
         }
         const { add, rewrite, change } = this.getExpressionHandlers('number')
         if (!lastEl(this.expression)) {
            add({
               icon: '',
               operation: 'number',
               values: [number.toString()],
            })

            return true
         }
         if (this.history === 'equal') {
            rewrite([
               {
                  icon: '',
                  operation: 'number',
                  values: [number.toString()],
               },
            ])

            return true
         }
         if (lastEl(this.expression)['twoValue']) {
            const values = lastEl(this.expression).values
            if (lastEl(this.expression)['change']) {
               values[0] ? (values[0] += number.toString()) : (values[0] = number.toString())
            } else {
               values[1] ? (values[1] += number.toString()) : (values[1] = number.toString())
            }

            return true
         }
         if (this.expression.length === 1 && lastEl(this.expression).operation === 'minus') {
            rewrite([
               {
                  icon: '',
                  operation: 'number',
                  values: ['-' + number.toString()],
               },
            ])

            return true
         }
         if (lastEl(this.expression).operation !== 'number') {
            add({
               icon: '',
               operation: 'number',
               values: [number.toString()],
            })

            return true
         }
         if (number.toString() === '0') {
            if (lastEl(this.expression).values[0][0] === '0' && lastEl(this.expression).values[0][1] !== '.') {
               return false
            }
         }
         change({
            icon: '',
            operation: 'number',
            values: [lastEl(this.expression).values[0] + number.toString()],
         })()

         return true
      }
   }

   change_sign = () => {
      if (!validation(this.expression, rules.change_sign)) {
         return false
      }
      const { change } = this.getExpressionHandlers()

      if (this.expression.length === 3) {
         if (this.expression[this.expression.length - 2].operation === 'plus') {
            change({ icon: '-', operation: 'minus', values: [...this.expression[this.expression.length - 2].values] })(
               this.expression.length - 2,
            )

            return true
         }
         if (this.expression[this.expression.length - 2].operation === 'minus') {
            change({ icon: '+', operation: 'plus', values: [...this.expression[this.expression.length - 2].values] })(
               this.expression.length - 2,
            )

            return true
         }
      }

      if (lastEl(this.expression).values[0][0] === '-') {
         lastEl(this.expression).values[0] = lastEl(this.expression).values[0].slice(1)
      } else {
         lastEl(this.expression).values[0] = '-' + lastEl(this.expression).values[0]
      }
      return true
   }

   percent = () => {
      if (!validation(this.expression, rules.percent)) {
         return false
      }
      const { add } = this.getExpressionHandlers('percent')

      if (this.intermediateCount({ icon: '%', operation: 'percent', values: [] })) {
         return true
      }
      add({
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
      const { add } = this.getExpressionHandlers('divide')

      if (this.intermediateCount({ icon: '/', operation: 'divide', values: [] })) {
         return true
      }

      add({
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
      const { add } = this.getExpressionHandlers('multiply')

      if (this.intermediateCount({ icon: '*', operation: 'multiply', values: [] })) {
         return true
      }

      add({
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
      const { add } = this.getExpressionHandlers('minus')

      if (this.intermediateCount({ icon: '-', operation: 'minus', values: [] })) {
         return true
      }

      if (lastEl(this.expression) === 'plus') {
         lastEl(this.expression).operation = 'minus'

         return true
      }

      add({
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
      const { add, rewrite } = this.getExpressionHandlers('plus')

      if (this.intermediateCount({ icon: '+', operation: 'plus', values: [] })) {
         return true
      }

      if (this.expression.length === 2 && lastEl(this.expression) === 'minus') {
         rewrite([])
         this.history = ''
         return true
      }
      if (lastEl(this.expression) === 'minus') {
         lastEl(this.expression).operation = 'plus'

         return true
      }

      add({
         icon: '+',
         operation: 'plus',
         values: [],
      })

      return true
   }

   dot = () => {
      //

      if (!validation(this.expression, rules.dot)) {
         return false
      }

      if (lastEl(this.expression).values[0].includes('.')) {
         return false
      }

      lastEl(this.expression).values[0] += '.'
      return true
   }

   equal = () => {
      const { rewrite } = this.getExpressionHandlers('equal')

      rewrite([{ icon: '', operation: 'number', values: [count(this.expression)] }])

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
      if (lastEl(this.expression)?.operation === 'number') {
         lastEl(this.expression).values[0] = this.memory.toString()
         return true
      }
      this.setValue(this.memory)()
      return true
   }
   M_MINUS = () => {
      if (!(this.expression.length === 1 && lastEl(this.expression).operation === 'number')) {
         return false
      }

      this.memory = Number(this.memory) - Number(lastEl(this.expression).values[0])
      alert(this.memory)
      return true
   }
   M_PLUS = () => {
      if (!(this.expression.length === 1 && lastEl(this.expression).operation === 'number')) {
         return false
      }

      this.memory = Number(this.memory) + Number(lastEl(this.expression).values[0])
      alert(this.memory)
      return true
   }
   factorial = () => {
      if (!validation(this.expression, rules.factorial)) {
         return false
      }

      const { change, rewrite } = this.getExpressionHandlers('factorial')

      if (this.expression.length === 3 && lastEl(this.expression).operation !== 'number') {
         rewrite([{ icon: '!', operation: 'factorial', values: [count(this.expression)] }])

         return true
      }

      change({
         icon: '!',
         operation: 'factorial',
         values: [lastEl(this.expression).values[0]],
      })()

      return true
   }
   _1_x = () => {
      if (!validation(this.expression, rules._1_x)) {
         return false
      }
      const { change } = this.getExpressionHandlers('equal')

      if (lastEl(this.expression)?.values[0] === 'error') {
         this.expression = []
         this.history = ''
         return true
      }
      const res = formatNumber(1 / lastEl(this.expression).values[0], 7)
      change({
         icon: '',
         operation: 'number',
         values: [!checkRes(res) ? 'error' : res],
      })()

      return true
   }
   ten_x = () => {
      if (!validation(this.expression, rules.degree)) {
         return false
      }
      const { add } = this.getExpressionHandlers('degree')
      if (lastEl(this.expression)?.operation === 'number' && lastEl(this.expression).values[0] !== 'error') return false

      add({
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
         const { add, change } = this.getExpressionHandlers('degree')

         if (data) {
            if (lastEl(this.expression)?.operation === 'number') {
               change({
                  icon: '',
                  operation: 'degree',
                  twoValue: true,
                  change: false,
                  values: [data.toString(), lastEl(this.expression).values[0]],
               })()

               return true
            }
            add({
               icon: '',
               operation: 'degree',
               twoValue: true,
               change: false,
               values: [data.toString()],
            })

            return true
         } else {
            if (lastEl(this.expression)?.operation === 'number') {
               change({
                  icon: '',
                  operation: 'degree',
                  twoValue: true,
                  change: true,
                  values: [null, lastEl(this.expression).values[0]],
               })()

               return true
            }
            add({
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
         const { add, change } = this.getExpressionHandlers('sqrt')

         if (data) {
            if (lastEl(this.expression)?.operation === 'number') {
               change({
                  icon: '',
                  operation: 'sqrt',
                  twoValue: true,
                  change: false,
                  values: [data.toString(), lastEl(this.expression).values[0]],
               })()

               return true
            }
            add({
               icon: '',
               operation: 'sqrt',
               twoValue: true,
               change: false,
               values: [data.toString()],
            })

            return true
         } else {
            if (lastEl(this.expression)?.operation === 'number') {
               change({
                  icon: '',
                  operation: 'sqrt',
                  twoValue: true,
                  change: true,
                  values: [null, lastEl(this.expression).values[0]],
               })()

               return true
            }
            add({
               icon: '',
               operation: 'sqrt',
               twoValue: true,
               change: false,
               values: [],
            })

            return true
         }
      }
   }

   getActions = () => {
      // eslint-disable-next-line no-unused-vars

      return this
   }
}

export default new CalculatorActions()
