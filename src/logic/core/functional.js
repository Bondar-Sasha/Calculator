import Calculator from './initialModel.js'
import evaluateExpression from './count.js'
import validation from './validation/handler.js'
import rules from './validation/rules.js'

class CalculatorActions extends Calculator {
   getUI = () => this.UI
   setUI = () => {
      this.expression.forEach(item => {
         this.UI = ''

         if (item['operation'] === 'sqrt') {
            this.UI += `<span class="sqrt"><sup>${item.value[0]}</sup>&radic;${item.value[1] ?? ''}</span>`
            console.log(this.UI)
         } else if (item['operation'] === 'degree') {
            this.UI += `<span class="degree">${item.value[1] ?? ''}<sup>${item.value[0]}</sup></span>`
         } else {
            this.UI += item.icon + item.value[0]
         }
      })
   }
   lastIndex = () => this.expression.length - 1
   lastDeepIndex = () => this.expression[this.lastIndex()].numbers.length - 1

   clear = () => {
      this.expression = []
      this.UI = ''
      return true
   }
   setValue = value => {
      return () => {
         if (this.lastIndex() === -1) {
            this.expression.push({
               icon: '',
               value: [value.toString()],
            })
            this.setUI()
            return true
         }
         if (this.expression[this.lastIndex()]['twoValue']) {
            console.log(this.expression)
            const values = this.expression[this.lastIndex()].value
            if (this.expression[this.lastIndex()]['change']) {
               values[0] ? (values[0] += value.toString()) : (values[0] = value.toString())
               this.setUI()

               return true
            } else {
               values[1] ? (values[1] += value.toString()) : (values[1] = value.toString())
               this.setUI()

               return true
            }
         }
         if (this.expression[this.lastIndex()]['operation']) {
            this.expression.push({
               icon: '',
               value: [value.toString()],
            })
            this.setUI()

            return true
         }
         this.expression[this.lastIndex()].value[0] += value.toString()
         this.setUI()

         return true
      }
   }

   change_sign = () => {
      // const lastElIndex = this.lastElIndex()
      // const lastEl = this.data[lastElIndex]
      // if (lastEl === '0' || lastEl === undefined) {
      //    this.data = ['-']
      //    return true
      // }
      // if (lastEl === '-' && this.data.length === 1) {
      //    this.data = []
      //    return true
      // }
      // if (!Number(lastEl)) return false
      // if (lastEl[0] === '-') {
      //    this.data[lastElIndex] = lastEl.substring(1)
      //    return true
      // }
      // if (this.data[lastElIndex - 1] === '+') {
      //    this.data[lastElIndex - 1] = '-'
      //    return true
      // }
      // if (this.data[lastElIndex - 1] === '-') {
      //    this.data[lastElIndex - 1] = '+'
      //    return true
      // }
      // this.data[lastElIndex] = '-' + lastEl
      // return true
   }

   percent = () => {
      // this.addOperator('%')
      // return true
   }

   division = () => {
      // this.addOperator('/')
      // return true
   }

   multiply = () => {
      // this.addOperator('*')
      // return true
   }

   minus = () => {
      // const lastElIndex = this.lastElIndex()
      // const lastEl = this.data[lastElIndex]
      // if (this.data.length === 0) {
      //    this.data = ['-']
      //    return true
      // }
      // const isNum = Number(lastEl)
      // if (isNum || isNum === 0) {
      //    this.data = [...this.data, '-']
      //    return true
      // }
      // this.data[lastElIndex] = '-'
      // return true
   }

   sum = () => {
      // const lastElIndex = this.lastElIndex()
      // const lastEl = this.data[lastElIndex]
      // if (lastEl === '-') {
      //    this.data = []
      //    return true
      // }
      // const isNum = Number(lastEl)
      // if (isNum || isNum === 0) {
      //    this.data = [...this.data, '+']
      //    return true
      // }
      // this.data[lastElIndex] = '+'
      // return true
   }

   dot = () => {
      // const lastElIndex = this.lastElIndex()
      // const lastEl = this.data[lastElIndex]
      // if (lastEl && lastEl.includes('.')) return false
      // if (lastEl === '0') {
      //    this.data[lastElIndex] += '.'
      //    return true
      // }
      // if (Number(lastEl)) {
      //    this.data[lastElIndex] += '.'
      //    return true
      // }
   }

   equal = () => {
      // const lastElIndex = this.lastElIndex()
      // const lastEl = this.data[lastElIndex]
      // if (this.data.length === 0) return false
      // if (lastEl === 'error') {
      //    this.data = []
      //    return true
      // }
      // if (!Number(lastEl)) this.data = this.data.slice(0, -1)
      // const result = evaluateExpression(this.data)
      // this.data = [result]
      // return true
   }
   cancel = () => {}
   MC = () => {}
   MR = () => {}
   M_MINUS = () => {}
   M_PLUS = () => {}
   factorial = () => {}
   _1_x = () => {}
   ten_x = () => {}
   degree = () => {}
   sqrt = data => {
      return () => {
         if (data) {
            if (this.lastIndex() === -1) {
               this.expression.push({
                  icon: '',
                  operation: 'sqrt',
                  twoValue: true,
                  change: false,
                  value: [data.toString()],
               })
               this.setUI()
               return true
            }
            if (
               !this.expression[this.lastIndex()]['operation'] ||
               this.expression[this.lastIndex()]['operation'] === 'sqrt' ||
               this.expression[this.lastIndex()]['operation'] === 'degree'
            ) {
               return false
            }
            this.expression.push({
               icon: '',
               operation: 'sqrt',
               twoValue: true,
               change: false,
               value: [data.toString()],
            })
            this.setUI()
            return true
         } else {
            if (this.lastIndex() === -1) {
               this.expression.push({
                  icon: '',
                  operation: 'sqrt',
                  value: [],
               })
               this.setUI()
               return true
            }
         }
      }
   }

   getActions = () => {
      // eslint-disable-next-line no-unused-vars
      const { getUI, setUI, lastIndex, lastDeepIndex, ...result } = this
      return result
   }
}

export default new CalculatorActions()
