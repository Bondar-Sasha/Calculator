class Calculator {
   constructor() {
      this.expression = [{ operation: 'null' }]
      this.UI = []
      this.memory = 0
   }
   getExpression() {
      throw new Error('The "getExpression" method must be implemented')
   }
   getUI() {
      throw new Error('The "getUI" method must be implemented')
   }

   actions() {
      throw new Error('The "actions" method must be implemented')
   }
}
export default Calculator
