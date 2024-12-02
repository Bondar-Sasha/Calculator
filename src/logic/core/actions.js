import Calculator from './init.js'
import evaluateExpression from './calculateExpression'

class CalculatorActions extends Calculator {
   getData = () => this.data.join('')

   lastElIndex = () => this.data.length - 1

   setValue = value => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]

      if (lastEl === 'error') this.data = []

      if (lastEl === '0' || lastEl === '-0') {
         return false
      }

      if (!isNaN(lastEl) && lastEl !== '0') {
         this.data[lastElIndex] += value
         return true
      }

      if (value === '0' && lastEl !== '0') {
         this.data = [...this.data, value]
         return true
      }

      this.data = [...this.data, value]
      return true
   }

   clear = () => {
      this.data = []
      return true
   }

   change_sign = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]

      if (lastEl === '0' || lastEl === undefined) {
         this.data = ['-']
         return true
      }

      if (lastEl === '-' && this.data.length === 1) {
         this.data = []
         return true
      }
      if (!Number(lastEl)) return false

      if (lastEl[0] === '-') {
         this.data[lastElIndex] = lastEl.substring(1)
         return true
      }

      if (this.data[lastElIndex - 1] === '+') {
         this.data[lastElIndex - 1] = '-'
         return true
      }

      if (this.data[lastElIndex - 1] === '-') {
         this.data[lastElIndex - 1] = '+'
         return true
      }

      this.data[lastElIndex] = '-' + lastEl
      return true
   }

   addOperator(operator) {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]
      const isNum = Number(lastEl)

      if (isNum || isNum === 0) {
         this.data = [...this.data, operator]
         return true
      }
      return true
   }

   percent = () => {
      this.addOperator('%')
      return true
   }

   division = () => {
      this.addOperator('/')
      return true
   }

   multiply = () => {
      this.addOperator('*')
      return true
   }

   minus = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]

      if (this.data.length === 0) {
         this.data = ['-']
         return true
      }
      const isNum = Number(lastEl)

      if (isNum || isNum === 0) {
         this.data = [...this.data, '-']
         return true
      }

      this.data[lastElIndex] = '-'
      return true
   }

   sum = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]

      if (lastEl === '-') {
         this.data = []
         return true
      }

      const isNum = Number(lastEl)

      if (isNum || isNum === 0) {
         this.data = [...this.data, '+']
         return true
      }

      this.data[lastElIndex] = '+'
      return true
   }

   dot = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]

      if (lastEl && lastEl.includes('.')) return false
      if (lastEl === '0') {
         this.data[lastElIndex] += '.'
         return true
      }

      if (Number(lastEl)) {
         this.data[lastElIndex] += '.'
         return true
      }
   }

   equal = () => {
      const lastElIndex = this.lastElIndex()
      const lastEl = this.data[lastElIndex]

      if (this.data.length === 0) return false

      if (lastEl === 'error') {
         this.data = []
         return true
      }

      if (!Number(lastEl)) this.data = this.data.slice(0, -1)

      const result = evaluateExpression(this.data)
      this.data = [result]
      return true
   }

   actions = () => {
      const { setValue, clear, dot, equal, percent, minus, sum, multiply, change_sign, division } = this
      return {
         setValue,
         clear,
         percent,
         change_sign,
         dot,
         division,
         multiply,
         minus,
         equal,
         sum,
      }
   }
}

export default new CalculatorActions()
