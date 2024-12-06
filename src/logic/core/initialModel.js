class Calculator {
   constructor() {
      this.expression = []
      this.UI = []
      this.memory = 0
      this.history = ''
   }

   getUI() {
      throw new Error('The "getUI" method must be implemented')
   }
   setUI() {
      throw new Error('The "setUI" method must be implemented')
   }
   getActions() {
      throw new Error('The "getActions" method must be implemented')
   }
   getExpressionHandlers() {
      throw new Error('The "getExpressionHandlers" method must be implemented')
   }
}
export default Calculator
