class Calculator {
   constructor() {
      this.expression = []
      this.UI = []
      this.memory = 0
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
}
export default Calculator
